import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="./troll.jpeg" 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">generate your memes</h4>
        </header>
    )
}