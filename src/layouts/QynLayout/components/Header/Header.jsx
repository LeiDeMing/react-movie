import React, { PureComponent } from 'react'
import '@/common/scss/basic.scss'
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;
export default class Header extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            current: '',
            videoSrc: 'leilei',
            navList: [
            ]
        }
    }

    componentWillMount() {
        const { state: { navList } } = this
        for (let x = 32; x <= 46; x++) {
            navList.push({
                name: x + '',
                path: `#/qyn/?name=${x}`
            })
        }
        this.setState(navList)
    }

    handleClick = e => {
        this.setState({
            videoSrc: e.key,
            current: e.key
        });
    };

    render() {
        const { state: { navList, videoSrc } } = this
        return (
            <div>
                <div className="movie_header" style={{ marginTop: 10 }}>
                    <a href="https://github.com/LeiDeMing/react-movie" target="blank">Get源码</a>
                </div>
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    {
                        navList.map((item, index) => {
                            const { name, path } = item
                            return <Menu.Item key={name}>
                                <a href={path || ''} rel={`aLink${index}`}>
                                    {name || ''}
                                </a>
                            </Menu.Item>
                        })
                    }
                </Menu>
                <div className='video_content'>
                    <video controls width="100%" src={`http://52xuanxuan.com:3389/file/QQYNN-${videoSrc}.mp4`}></video>
                </div>
            </div>
        );
    }
}