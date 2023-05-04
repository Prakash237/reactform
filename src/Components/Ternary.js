import React, { Component } from "react";

class UserGreeting extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        // let message
        // if (this.state.isLoggedIn) {
        //     message=<div>Welcome React</div>
        // } else {
        //     message=<div>Pls Login React</div>
        // }
        // return (<div>{message}</div>)




        return this.state.isLoggedIn ? (
            <div>Welcome</div>
        ) : (
            <div>All Clear</div>
        )
    }}
    
    export default UserGreeting;