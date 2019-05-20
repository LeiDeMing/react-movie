import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
export default class BasicLayout extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Footer></Footer>
            </div>
        )
    }
}