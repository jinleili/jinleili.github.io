/* When we don't need anything fancy, just push the position through un-altered */
var basicVertexShader = 
"precision highp float;"+
"attribute vec2 aVertexPosition;"+
"attribute vec2 uv;"+
"varying vec2 vUv; "+
"void main() { vUv = uv; "+
" gl_Position = vec4(aVertexPosition.xy,0.0, 1.0); "+
"}";

/* This shader places each particle at the right spot to render into the grid buffer */
var particleVertexShader = [
"precision highp float;",
"attribute vec2 aVertexPosition;", // We loaded in the right index for each particle here
"varying vec2 vUv; ", 
"uniform sampler2D dataTexture;",

"float h=1.0/700.0;", // This is the pixel spacing of the data buffer, so we get the right particle

"void main() { ",
"vUv = vec2(h*aVertexPosition.x,h*aVertexPosition.y); ",
"gl_Position = vec4(2.0*texture2D(dataTexture,vUv).xy-1.0,0.0,1.0);", /* The 2*x-1 thing here is because the 
																		 clipping coordinates are -1 to 1 but 
																		 the UVs are 0 to 1 */
"gl_PointSize = 1.0;", // Render into one pixel
"}"
].join("\n");

var particleFragmentShader = [
"precision highp float;",
"varying vec2 vUv; ",
"uniform sampler2D dataTexture;",
"void main() { ",
"gl_FragColor = vec4(texture2D(dataTexture,vUv).ba,1.0,1.0);", /* Add the x and y velocities into the red and green channels. 
																  Blue counts how many particles are in this cell */
"}"
].join("\n");

// This is the core of the calculation; moves the particles and does the random rotation 

var SRDStreamingShader = 
[
"precision highp float;",
"varying vec2 vUv;",
"float dt=0.25;", // The timestep. Smaller timesteps will give less shockwaves and more normal fluid behavior, but higher viscosity.

// Use these to ensure decent randomness
"uniform float z1;",
"uniform float z2;",
"uniform float z3;",
"uniform float z4;",

// Our textures for particle data, average velocities, and the obstacle field
"uniform sampler2D dataTexture;",
"uniform sampler2D gridTexture;",
"uniform sampler2D obstacleTexture;",

// Lets let the user interact by applying a velocity at a position
"uniform vec2 cursor;",
"uniform vec2 cursorVel;",

// From http://stackoverflow.com/questions/12964279/whats-the-origin-of-this-glsl-rand-one-liner
"float random(vec2 co){",
"  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);",
"}",

"float GX=256.0;", // This is the size of the grid
"float h=1.0/700.0;", // Spacing of the data texture

"void main() {",
"vec4 thisParticle=texture2D(dataTexture, vUv);",
"vec3 vbar=texture2D(gridTexture,thisParticle.xy).xyz;",
"if (vbar.z<1.0) vbar.z=1.0;", // Prevent infinities by clamping this at 1
"vbar.x/=vbar.z;", // Go from 'total velocity' to 'average velocity'. Blue 
"vbar.y/=vbar.z;",

"vec2 dv=thisParticle.zw-vbar.xy;", // Difference between particle velocity and center of mass

"float dtheta=random( vec2(z1*floor(thisParticle.x*GX)+z3,z2*floor(thisParticle.y*GX)+z4) )*6.283185307;", /* A random angle for rotation. 
																		Note that we use grid coordinates here, not individual UV.
																		This is because to conserve momentum, all particles in the
																		cell must be rotated by the same random angle */

"float theta2=random( vec2(97.*z2*vUv.x+z1,45.3*z4*vUv.y+z3) )*6.283185307;", // Another random angle for keeping the gas 'moving'

"float ct=cos(dtheta);", 
"float st=sin(dtheta);",

// Here we rotate the residual velocity and add back in the average. 
// We also decay everything towards zero and add a bit of a random
// push to keep the gas 'lively' (this gives it a pressure and viscosity)
//
// We use sqrt(dt) for the random push because when you integrate
// noise over time, it tends to average out based on the number of independent
// samples, so integrating noise must use sqrt(dt) instead of dt
"thisParticle.z=(dv.x*ct+dv.y*st+vbar.x)*(1.0-0.0001*dt)+0.0025*sqrt(dt)*cos(theta2);",
"thisParticle.w=(-dv.x*st+dv.y*ct+vbar.y)*(1.0-0.0001*dt)+0.0025*sqrt(dt)*sin(theta2);",

// Lets also give it a push if its close to the cursor
"float r=(cursor.x-thisParticle.x)*(cursor.x-thisParticle.x)+(cursor.y-thisParticle.y)*(cursor.y-thisParticle.y);",
"float w=exp(-(r/0.01)*(r/0.01));",
"thisParticle.z+=dt*cursorVel.x*w*0.2;",
"thisParticle.w+=dt*cursorVel.y*w*0.2;",

// Move the particle in grid-space coordinates.
"thisParticle.x+=dt*thisParticle.z/GX;",
"thisParticle.y+=dt*thisParticle.w/GX;",

// Check if we collided with an obstacle
"if (texture2D(obstacleTexture, thisParticle.xy).r>0.5) { ",

// If so, back off
"thisParticle.x-=dt*thisParticle.z/GX;",
"thisParticle.y-=dt*thisParticle.w/GX;",

// If we are still in an obstacle, we got stuck somehow, so just drop this particle elsewhere at random
"if (texture2D(obstacleTexture, thisParticle.xy).r>0.5) { ",
"thisParticle.x=random( vec2(39.*z2*vUv.x+17.0*z4,19.3*z3*vUv.y+7.6*z1) );",
"thisParticle.y=random(  vec2(5.9*z3*vUv.x+97.7*z4,89.1*z1*vUv.y+12.5*z2) );",
"}",

// Reverse the particle's velocity. This gives a 'stick' boundary condition.
"thisParticle.z*=-1.0;",
"thisParticle.w*=-1.0;",
"}",

// Periodic boundary conditions
"thisParticle.x=mod(thisParticle.x,1.0);",
"thisParticle.y=mod(thisParticle.y,1.0);",

// Clamp the velocities for sanity. Not strictly necessary
"thisParticle.z=clamp(thisParticle.z,-4.0,4.0);",
"thisParticle.w=clamp(thisParticle.w,-4.0,4.0);",
"gl_FragColor = thisParticle;",
"}",
].join("\n");

// Render the coarse grid, since we already have things like averaged velocity and density
var SRDRenderShader = 
[
"precision highp float;",
"varying vec2 vUv;",
"uniform sampler2D gridTexture;",
"void main() {",
"  vec4 color = texture2D(gridTexture, vUv);",
"  float r=color.b;",
"  if (r<1.0) r=1.0;", // prevent infinities
"  float theta=atan(color.g,color.r);", // get the direction of the velocity for the hue
"  float s=sqrt(color.g*color.g+color.r*color.r)/(10.0*r);", // saturation is based on magnitude of the velocity
"  if (s>1.0) s=1.0; ",
"  r=sqrt(r*0.04);", // value will be based on total density, but lets give it a broad plateau so it doesn't wash out

// The following expression roughly converts the values to hue/saturation/value space
"  gl_FragColor = vec4(r*(s*cos(theta)+0.5*(1.0-s)), r*(s*cos(theta+2.0*3.1415/3.0)+0.5*(1.0-s)), r*(s*cos(theta+4.0*3.1415/3.0)+0.5*(1.0-s)), 1.0);",
"}"].join("\n");