import React, { Component } from 'react'
import * as XLSX from 'xlsx';
import { Input, Button } from 'antd';
import ExportJsonExcel from 'js-export-excel'
const { TextArea } = Input;
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
        this.dataMask=document.querySelector('#dataMask')
    }

    onImportExcelNifty = file => {
        this.dataMask.style.display="block"
        this.fileCore(file, '样例号', (smapleArr) => {
            this.setState({
                sampleNifty: smapleArr
            })
        })
    }

    onImportExcelLims = file => {
        this.dataMask.style.display="block"
        this.fileCore(file, 'Sample id', (smapleArr) => {
            this.setState({
                sampleLims: smapleArr
            })
        })
        // fileReader.readAsBinaryString(files[0]);
    }

    fileCore = (file, type, callback) => {
        const { files } = file.target;
        const fileReader = new FileReader();
        let data = []; // 存储获取到的数据
        let sampleArr = []
        fileReader.readAsBinaryString(files[0]);
        fileReader.onload = event => {
            try {
                const { result } = event.target;
                const workbook = XLSX.read(result, { type: 'binary' });
                for (const sheet in workbook.Sheets) {
                    if (workbook.Sheets.hasOwnProperty(sheet)) {
                        data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
                    }
                }
                if (type === 'Sample id') {
                    data.forEach(item => {
                        let sampleId = item['Sample id'].split('_')[0].split('-')[0].replace('19D', '19B')
                        // sampleArr.push(sampleId)
                        item['sampleNum'] = sampleId
                    })
                    sampleArr = data
                } else if (type === '样例号') {
                    sampleArr = data
                }
                callback && callback(sampleArr)
                this.dataMask.style.display="none"
            } catch (e) {
                alert('文件类型不正确');
                this.dataMask.style.display="none"
                return;
            }
        };
    }

    toNiftyXlms = () => {
        this.dataMask.style.display="block"
        const { sampleNifty, sampleLims } = this.state;
        let tempArr = []
        if (!sampleNifty || !sampleLims) {
            alert('数据为空')
            return
        }
        console.log(sampleNifty, sampleLims)
        for (let x = sampleNifty.length-1; x >= 0; x--) {
            for (let y = 0, yLen = sampleLims.length; y < yLen; y++) {
                if (sampleNifty[x]['样例号'] === sampleLims[y]['sampleNum'] && !sampleLims[y]['isPush']) {
                    // sampleLims[y]['zcatlo'] = sampleNifty[x]['样本号']
                    sampleLims[y]['样例号'] = sampleNifty[x]['样例号']
                    sampleLims[y]['任务单号'] = sampleNifty[x]['任务单号']
                    sampleLims[y]['任务单行项目号'] = sampleNifty[x]['任务单行项目号']
                    // if (!tempArr.length) {
                    //     tempArr.push(sampleLims[y])
                    // }
                    // tempArr.forEach(item => {
                    //     if (item['zcatlo'] !== sampleNifty[x]['样本号']) {
                    //         tempArr.push(sampleLims[y])
                    //     }
                    // })
                    sampleLims[y]['isPush']=true
                    tempArr.push(sampleLims[y])
                    break;
                }
            }
        }
        this.downloadExl(tempArr, 'xlms')
    }

    downloadExl = (data, type) => {
        let option = {};
        option.fileName = 'excel'
        let pureSample=[]
        let pureData=[]
        data.forEach(item=>{
            if(pureSample.indexOf(item['Sample id'])===-1){
                pureSample.push(item['Sample id'])
            }
        })
        pureSample.forEach(item=>{
            for(let x=0;x<data.length;x++){
                if(item===data[x]['Sample id']){
                    pureData.push(data[x])
                    break;
                }
            }
        })
        option.datas = [
            {
                sheetData: pureData,
                sheetName: 'sheet',
                sheetFilter: ['样例号','任务单号', '任务单行项目号','zcatlo','','Sample id','技术路线ID','是否合格','QC','UR','GC','胎儿性别','胎儿浓度','T-score(chr21)','T-score(chr13)','风险指数(chr18)','Z-score(chr21)','Z-score(chr18)','Z-score(chr13)','Test(chr21)','Test(chr18)','Test(chr13)','Test(性染色体)','Test(常染色体)','Test区带(重复/缺失)','Test位点(重复/缺失)','Note1','Note2','Y%','疾病名称','dup/del','位置','大小'],
                sheetHeader: ['样例号','任务单号', '任务单行项目号','zcatlo','','Sample id','技术路线ID','是否合格','QC','UR','GC','胎儿性别','胎儿浓度','T-score(chr21)','T-score(chr13)','风险指数(chr18)','Z-score(chr21)','Z-score(chr18)','Z-score(chr13)','Test(chr21)','Test(chr18)','Test(chr13)','Test(性染色体)','Test(常染色体)','Test区带(重复/缺失)','Test位点(重复/缺失)','Note1','Note2','Y%','疾病名称','dup/del','位置','大小']
            }
        ];

        var toExcel = new ExportJsonExcel(option); //new
        this.dataMask.style.display="none"
        toExcel.saveExcel(); //保存
    }

    render() {
        return (
            <ul>
                {/* <div style={{ height: "400px", width: "400px", margin: "0 auto" }}>
                </div> */}
                <li style={{ textAlign: "center", marginTop: "100px", listStyle: "none" }}>
                    <label htmlFor=""><input type='file' accept='.xlsx, .xls' onChange={this.onImportExcelLims} />Lims</label>
                </li>
                <li style={{ textAlign: "center", marginTop: "50px", listStyle: "none" }}>
                    <label htmlFor=""><input type='file' accept='.xlsx, .xls' onChange={this.onImportExcelNifty} />Nifty</label>
                </li>
                <li style={{ textAlign: "center", marginTop: "50px", listStyle: "none" }}>
                    <Button onClick={this.toNiftyXlms} type="primary">生成XLMS</Button>
                </li>
                <li id="dataMask" style={{display:'none',position:"fixed",left:'0',top:'0',width:'100%',height:'100%',background:'rgba(0,0,0,0.65)',color:'#ffffff',textAlign:'center',paddingTop:'260px'}}>数据加载中...</li>
            </ul>
        )
    }
}