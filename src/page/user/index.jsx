/*
 * @Author: DevZhang 
 * @Date: 2019-05-13 13:40:46 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-05-28 13:11:31
 */


import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import Pagination from 'util/pagination/index.jsx';
import TableList from 'util/table-list/index.jsx';
import User from 'service/user-service.jsx';
import MUtil from 'util/mm.jsx';

import './index.scss';


const _user = new User();
const _mm = new MUtil();

class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            pageNum: 1
        }
    }

    componentDidMount() {
        this.loadUserList();
    }

    loadUserList() {
        _user.getUserList(this.state.pageNum).then(res => {
            this.setState(res);
        }, errMsg => {
            _mm.errorTips(errMsg);
        });
    }

    // 翻页方法
    onPageChange(pageNum) {
        this.setState({
            pageNum: pageNum
        }, () => {
            this.loadUserList();
        })
    }

    render() {

        let listBody = this.state.list.map((user, index) => {
            return (
                <tr key={ index }>
                    <td>{ user.id }</td>
                    <td>{ user.username }</td>
                    <td>{ user.email }</td>
                    <td>{ user.phone }</td>
                    <td>{ new Date(user.createTime).toLocaleString() }</td>
                </tr>
            );
        });

        return (
            <div id="page-wrapper">
                <PageTitle title="用户列表" />
                <TableList tableHeaders={ ['ID', '昵称', '邮箱', '电话', '注册时间'] } >
                    { listBody }
                </TableList>
                <Pagination 
                    total={ this.state.total }
                    current={ this.state.pageNum }
                    onChange={ pageNum => this.onPageChange(pageNum) }
                />
            </div>
        )
    }
}

export default UserList;