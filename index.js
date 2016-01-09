#!/usr/bin/env node

'use strict'

var express = require('express')
var serveStatic = require('serve-static')
var serveIndex = require('serve-index')
var morgan = require('morgan') // logger
var markdown = require('express-markdown')

express()
  .set('view engine', 'ejs')
  .set('views', '.')
  .use(morgan('dev'))
  .use(markdown({directory: '.', view: 'layout', variable: 'markdown'}))
  .use(serveStatic('.'))
  .use(serveIndex('.'))
  .listen(process.env.PORT || 80, process.env.HOST || '0.0.0.0')
