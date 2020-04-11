import React, { PureComponent } from 'react'
import Table from 'rc-table';
import { Menu, Icon } from 'antd';
import '@/common/scss/basic.scss'
const { SubMenu } = Menu;
export default class Header extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            columns: [
                {
                    title: 'Url',
                    dataIndex: 'url',
                    key: 'url',
                    width: 200,
                },
                {
                    title: 'Title',
                    dataIndex: 'title',
                    key: 'title',
                    width: 200,
                },
                {
                    title: 'Html_url',
                    dataIndex: 'html_url',
                    key: 'html_url',
                    width: 200,
                },
                {
                    title: 'Number',
                    dataIndex: 'number',
                    key: 'number',
                    width: 60,
                },
                {
                    title: 'Body',
                    dataIndex: 'body',
                    key: 'body',
                    width: 200,
                },
                {
                    title: 'Payload_all',
                    dataIndex: 'payload_all',
                    key: 'payload_all',
                    width: 200,
                },
                {
                    title: 'CreatedAt',
                    dataIndex: 'createdAt',
                    key: 'createdAt',
                    width: 100,
                },
                {
                    title: 'PpdatedAt',
                    dataIndex: 'updatedAt',
                    key: 'updatedAt',
                    width: 100,
                },
            ],
            data: []
        }
    }

    componentWillMount() {
    }

    render() {
        const { state: { columns, data } } = this
        return (
            <div>
                <Table columns={columns} data={data} />
            </div>
        );
    }
}