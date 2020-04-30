import React, {Component} from "react";
import TeamMembers from "../components/TeamMembers";
import DisplayData from "../components/DisplayData";
import db from "../base";
import axios from 'axios';

class Home extends Component{
    constructor(props){
        super(props)
        this.loadKennels = this.loadKennels.bind(this);
    }

    loadKennels(e){
        axios.get(`http://localhost:8000/home_kennels`)
          .then(function (response){
            document.getElementById('kennels').innerHTML = response.data;
          });
    }

    render(){
        return(
            <div>
                <h1>Home</h1>
                <div classname="centered">
                    <TeamMembers/>
                    <DisplayData/>
                </div>
                <div id="kennels"></div>
                <button onClick={this.loadKennels}>Load Kennels</button> 
                <button onClick={() => db.auth().signOut()}>Sign Out</button>
            </div>
        )
    }
};

export default Home;