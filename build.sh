#!/bin/sh

cd ~/blog/grenlight.github.io
# webpack --config _webpack_configs/gren.config.js
#webpack --config _webpack_configs/es6.config.js
bundle exec jekyll serve
