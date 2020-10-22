import React, { Component } from 'react';
import NavBar from '../utils/Nav';


export default class Home extends Component{
    render() {
        return (
            <>
                <NavBar/>
                <section className="home__introduction">
                        <div className="HI__header">
                            <h5>Share. Inspire.  Discover. Collaborate.</h5>
                        </div>
                 
                    <div className="HI__image__container">
                        <img src="./assets/pixeltrue-web-design.png" alt="A Man petting his pet dog." className="HI__image"/>
                    </div>

                    <button>Learn More</button>
                </section>
            </>
        )
    }
}
