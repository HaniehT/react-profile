import React, { Component } from 'react';
class Navbar extends Component {
    state = {
        menu: [
            "About Hanieh |",
            "UX Design |",
            "Developpement Application web |",
            "Graphic design works |",
            "Contact Hanieh"
        ]
    }
    render() {
        return (
            <div className="Navbar">
                {menu.map((items) => return { items })};
            </div>
        );
    }
}

export default Navbar;