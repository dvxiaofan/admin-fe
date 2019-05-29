/*
 * @Author: DevZhang 
 * @Date: 2019-05-29 12:45:20 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-05-29 12:58:44
 */

import React from 'react';
import { type } from 'os';


class TableList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isFirstLoading: true  // 是否是第一次加载
        }
    }

    // 列表第一次加载的时候 设置为 true, 其余全 为 false
    componentWillReceiveProps() {
        this.setState({
            isFirstLoading: false
        })
    }

    render() {
        // 表头
        let tableHeader = this.props.tableHeaders.map(
            (tableHead, index) => {
                if (typeof tableHead === 'object') {
                    return (<th key={ index } width={ tableHead.width }>{ tableHead.name }</th>)
                } else if (typeof tableHead === 'string') {
                    return (<th key={ index }>{ tableHead }</th>)
                }
            }
        );

        // 列表内容
        let listBody = this.props.children;

        // 列表信息
        let listInfo = (
            <tr>
                <td colSpan={ this.props.tableHeaders.length } className="text-center">
                    { this.state.isFirstLoading ? '正在加载商品数据' : '未找到相关商品数据'}
                </td>
            </tr>
        );

        let tableBody = listBody.length > 0 ? listBody : listInfo;

        return (
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-striped table-borderd">
                        <thead>
                            <tr>
                                { tableHeader }
                            </tr>
                        </thead>
                        <tbody>
                            { tableBody }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


export default TableList;





















