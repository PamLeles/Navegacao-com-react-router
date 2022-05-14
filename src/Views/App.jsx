import './App.css'
import Menu from '../Components/Layout/Menu'
import { BrowserRouter } from 'react-router-dom'
import Content from '../Components/Layout/Content'
import React from "react";

const App = (props) => (
    <div className="App">
        <BrowserRouter>
            <Menu />
            <Content />
        </BrowserRouter>

    </div>
)
export default App;
