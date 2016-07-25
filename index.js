import React, {Component} from 'react'
import {render} from 'react-dom'
import routes from './routes.js'

render(routes(), document.getElementById('app'))
