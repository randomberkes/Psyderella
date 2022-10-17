import React from "react"
import Header from "./components/Header"
import Dislike from "./components/actions/Dislike"
import './App.css';

const App = () => {
    return (
        <div className="app">
            <Header/>
            <Dislike/>
        </div>
    )
}

export default App;