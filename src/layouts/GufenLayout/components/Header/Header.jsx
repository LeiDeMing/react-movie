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
                    path: '#/gufen/96LimsToNifty'
                },
                {
                    name: 'ExcelLimmsToNifty',
                    path: '#/gufen/ExcelLimmsToNifty'
                },
                {
                    name: 'ResultLimmsToNifty',
                    path: '#/gufen/ResultLimmsToNifty'
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
                <div className="movie_header" style={{marginTop:10}}>
                    <a href="https://github.com/LeiDeMing/react-movie" target="blank">Get源码</a>
                </div>
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    {
                        navList.map((item, index) => {
                            const { name, path } = item
                            return <Menu.Item key={index}>
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