import React, { Component } from 'react'
import Header from './components/Header'
import _ from 'lodash'

export default class ReadingLayout extends Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     videoSrc: 'leilei'
        // }
    }

    componentWillMount() {
        // if (this.getUrlAllParams()) {
        //     const { name } = this.getUrlAllParams()
        //     if (name) this.setState({ videoSrc: name })
        // }
    }

    componentWillUpdate(){
        
    }
    
    // getUrlAllParams = () => {
    //     // 解决乱码问题
    //     var url = decodeURI(window.location.href)
    //     var res = {}
    //     var url_data = _.split(url, '?').length > 1 ? _.split(url, '?')[1] : null;
    //     if (!url_data) return null
    //     var params_arr = _.split(url_data, '&')
    //     _.forEach(params_arr, function (item) {
    //         var key = _.split(item, '=')[0]
    //         var value = _.split(item, '=')[1]
    //         res[key] = value
    //     });
    //     return res
    // }

    render() {
        // const { state: { videoSrc } } = this
        return (
            <div className='video_wrapper'>
                <Header></Header>
            </div>
        )
    }
}