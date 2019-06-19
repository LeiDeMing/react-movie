import React, { Component } from 'react'
import { Input } from 'antd';
import { CSVLink, CSVDownload } from "react-csv";
const { TextArea } = Input;

export default class Movie extends Component {

    constructor(props){
        super(props)
        this.state={
            csvData:null
        }
    }

    componentWillMount(){

    }

    componentDidMount(){

    }

    textAreaPressEnter=(e)=>{
        this.state.csvData=null
        let arr=e.target.value.split('	')
        let newArr=[]
        let i=0
        let csvData=[]
        let _arr=[]
        let  oddArr=[[],[],[],[],[],[]]
        let evenArr=[[],[],[],[],[],[]]
        arr.forEach(item=>{
            if(item.indexOf('\n')==='-1'){
                newArr.push(item)
            }else{
                let temp=item.split('\n');
                newArr.push(...temp)
            }
        })
        if(newArr[newArr.length-1]===""){
            newArr.pop()
        }
        newArr.forEach((item,index)=>{
            _arr.push(item);
            i++;
            if(i===12){
                csvData.push(JSON.parse(JSON.stringify(_arr)))
                _arr=[]
                i=0
            }
        })
        csvData.forEach((item,index)=>{
            item.forEach((val,ind)=>{
                if(ind%2===0){
                    evenArr[ind/2].push(val)
                }else{
                    oddArr[Math.ceil(ind/2)-1].push(val)
                }
            })
        })
        evenArr=this.reverseArr(evenArr)
        oddArr=this.reverseArr(oddArr)
        csvData=[]
        csvData=csvData.concat(evenArr,oddArr).map((item,index)=>item.unshift(index+1+'') && item)
        csvData.unshift(['','1','2','3','4','5','6']);
        console.log(csvData)
        // csvData.unshift(['','1','2','3','4','5','6'])
        this.setState({
            csvData
        })
    }

    reverseArr=(arr)=>{
        let len=arr[0].length;
        let result=[[],[],[],[],[],[],[],[]]
        for(let x=0;x<len;x++){
            for(let y=0;y<arr.length;y++){
                if(arr[y][x].indexOf('SZ')>-1){
                    arr[y][x]='N'
                }
                result[x].push(arr[y][x])
            }
        }
        return result
    }

    render(){
        return (
            <div style={{height:"600px",width:"600px",margin:"0 auto"}}>
                <TextArea 
                    size={"large"}
                    style={{width:"100%",height:"80%"}}
                    onPressEnter={this.textAreaPressEnter}
                 />
                 <CSVLink data={this.state.csvData ? this.state.csvData : ''}>Download me</CSVLink>;
            </div>
        )
    }
}