import React, { PureComponent } from 'react'
import '@/common/scss/basic.scss'
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;
export default class Header extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        const { navList } = this.state
        return (
            <div>
                <div className="movie_header">
                    --------Header--------
                </div>
            </div>
        );
    }
}