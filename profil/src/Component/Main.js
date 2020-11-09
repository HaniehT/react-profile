import React, { Component } from 'react';
import Navbar from './Navbar.js';
import "./Main.css";
class Main extends Component {

    constructor(props) {
        super(props) //we're invoking the Base clas constructor

    }


    state = {}
    render() {
        return (

            <div className="main" >

                <p>
                    I've got my mom's old phone, but I can't afford a pricey wireless plan, so I got a free phone number from TextNow and I use the app to talk to my friends for free!
                    I've got my mom's old phone, but I can't afford a pricey wireless plan, so I got a free phone number from TextNow and I use the app to talk to my friends for free!
                    I've got my mom's old phone, but I can't afford a pricey wireless plan, so I got a free phone number from TextNow and I use the app to talk to my friends for free!
                    I've got my mom's old phone, but I can't afford a pricey wireless plan, so I got a free phone number from TextNow and I use the app to talk to my friends for free!
                </p>
                <div className="formComponent">
                    <form>
                        <label>
                            Nom :
                            <input type="text" name="name" />
                        </label>
                        <input type="submit" value="Envoyer" />

                    </form>
                </div>

            </div>

        );
    }
}

export default Main;