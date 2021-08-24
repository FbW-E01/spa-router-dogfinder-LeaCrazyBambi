import React from "react"
import { NavLink } from "react-router-dom"
import "./Navigation.css"
import Whiskey from "../images/whiskey.jpg"
import Hazel from "../images/hazel.jpg"
import Tubby from "../images/tubby.jpg"

export default function Navigation() {

    return <div className="navigation">
        <div>
            <NavLink to="/"></NavLink>
        </div>
        <div>
            <NavLink to="/whiskey">
               <img src={ Whiskey }></img>
                <br></br>
                Whiskey
            </NavLink>
        </div>
        <div>
            <NavLink to="/hazel">
                <img src={ Hazel }></img>
                <br></br>
                Hazel
            </NavLink>
        </div>
        <div>
            <NavLink to="/tubby">
                <img src={ Tubby}></img>
                <br></br>
                Tubby
            </NavLink>
        </div>
    </div>
}