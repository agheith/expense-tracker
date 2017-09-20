import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';



ReactDOM.render(<AppRouter/>, document.getElementById('app'));
