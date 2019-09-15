import React, { PureComponent } from 'react'
import '@/common/scss/basic.scss'
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;
export default class Header extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            current: '',
            navList: [
                {
                    name: '96LimsToNifty',
                    path: '#/96LimsToNifty'
                },
                {
                    name:'ExcelLimmsToNifty',
                    path:'#/ExcelLimmsToNifty'
                },
                {
                    name:'ResultLimmsToNifty',
                    path:'#/ResultLimmsToNifty'
                }
            ]
        }
    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key
        });
    };

    render() {
        const { navList } = this.state
        return (
            <div>
                <div className="movie_header">
                    --------Header--------
            </div>
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    {
                        navList.map((item, index) => {
                            const { name, path } = item
                            return <Menu.Item  key={index}>
                                <a href={path || ''} rel={`aLink${index}`}>
                                    {name || ''}
                                </a>
                            </Menu.Item>
                        })
                    }
                </Menu>
            </div>
        );
    }
}