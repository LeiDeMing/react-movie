import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;

export default class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: ''
        }
    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="alipay">
                    <a href="#/96LimsToNifty" rel="noopener noreferrer">
                        96LimsToNifty
              </a>
                </Menu.Item>
            </Menu>
        );
    }
}