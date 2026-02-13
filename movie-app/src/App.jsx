import React, {useState} from 'react'
import Search from "./components/Search.jsx";


const App = () => {
    const [searchterm, setSearchterm] = useState('');

    return (
        <main>
            <div className="pattern"/>
            <div className="wrapper">
                <header>
                    <img src="./hero.png" alt="hero banner"/>
                    <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without The Hassle</h1>
                </header>
                <Search searchTerm={searchterm} setSearchTerm={setSearchterm}/>
                <h1 className="text-white">{searchterm}</h1>
            </div>
        </main>
    )
}
export default App
