import React, { useEffect } from 'react'
import { useCallback } from 'react'
import ReactTypingEffect from 'react-typing-effect';
import { useState } from 'react';

export default function Login(props){

    const [user, setUser] = useState("")

    const handleOnChange = (e) => {
        e.preventDefault()
        setUser(e.target.value)
    }

    const loginUser = (e) =>{
        e.preventDefault()
        props.user(user)
        props.show(true)
        props.showComp('pokedex')
    }

    useEffect(() =>{

    })
    var reactTypingEffect = require("react-typing-effect")
    const Text = () => {
        return (
            
          <ReactTypingEffect
            text = "To the pocket monsters world!"
            className = "press-start dark-grey"
            speed = "100" 
            typingDelay = "1000"
            eraseDelay = "10000"
          />
        );
      };

    return (
            <div className="loading grid grid-login">
                <div className="flex flex-center">
                    <div className="grid grid-login">
                        <h2 className="press-start">Welcome</h2>
                        <div>
                            {Text()}
                        </div>
                    </div>
                </div>
                
                <form onSubmit={loginUser} onChange={handleOnChange}>
                    <label for="name" className="dark-grey">How can we call you?</label>
                    <br></br>
                    <br></br>
                    <input id="name" name="name" type="text" placeholder="Ash Ketchum" required/>
                    <br></br>
                    <br></br>
                    <input id="name" name="name" type="submit" className="btn" value="Catch 'em all!" />
                </form>
            </div>
    )
}