'use strict';
require('dotenv').config();

const express = require('express'),
      app = express(),
      mongoose = require('mongoose'),
      passport = require('passport'),
      LocalStrategy = require('passport-local');
