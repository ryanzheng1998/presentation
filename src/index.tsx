import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'

import './index.css'
import View from './slides/View'
import PrintPDF from './slides/PrintPDF'

const history = createBrowserHistory()

ReactDOM.render(
    <React.StrictMode>
        <Router history={history}>
            <Switch>
                <Route path='/index' component={View} />
                <Route path='/:page/:animation' component={View} />
                <Route path='/printPDF' component={PrintPDF} />
                <Route path='/' render={() => (<Redirect to="/0/0" />)} />
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)