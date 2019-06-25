import React, { Component } from 'react'
import { Button } from 'antd';
import ExportJsonExcel from 'js-export-excel'
// import * as XLSX from 'xlsx';


export default class Movie extends Component {
    dataMask
    constructor(props) {
        super(props)
        this.state = {
            csvData: null,
            sampleLims: null,
            sampleNifty: null
        }
    }

    componentWillMount() {

    }

    componentDidMount() {
        this.dataMask = document.querySelector('#dataMask')
    }

    onImportExcelLims = file => {
        // this.dataMask.style.display = "block"
        // fileReader.readAsBinaryString(files[0]);
        const { files } = file.target;
        const fileReader = new FileReader();
        let data = []; // 存储获取到的数据
        fileReader.readAsBinaryString(files[0]);
        fileReader.onload = event => {
            try {
                const { result } = event.target;
                const workbook = window.XLSX.read(result, { type: 'binary' });
                for (const sheet in workbook.Sheets) {
                    if (workbook.Sheets.hasOwnProperty(sheet)) {
                        data = data.concat(window.XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
                    }
                }
                console.log(workbook)
            } catch (e) {
                alert('文件类型不正确');
                return;
            }
        };
    }

    render() {
        return (
            <ul>
                {/* <div style={{ height: "400px", width: "400px", margin: "0 auto" }}>
                </div> */}
                <li style={{ textAlign: "center", marginTop: "100px", listStyle: "none" }}>
                    <label htmlFor=""><input type='file' accept='.xlsx, .xls' onChange={this.onImportExcelLims} />Lims</label>
                </li>
                <li id="dataMask" style={{ display: 'none', position: "fixed", left: '0', top: '0', width: '100%', height: '100%', background: 'rgba(0,0,0,0.65)', color: '#ffffff', textAlign: 'center', paddingTop: '260px' }}>数据加载中...</li>
            </ul>
        )
    }
}