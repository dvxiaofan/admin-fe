/*
 * @Author: xiaofan 
 * @Date: 2018-12-20 22:52:59 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-23 17:56:36
 */

import './index.scss';
import 'rc-pagination/dist/rc-pagination.min.css';
import React        from "react";
import PageTitle    from 'component/page-title/index.jsx';
import Pagination   from 'util/pagination/index.jsx';
import TableList    from 'util/table-list/index.jsx';
import User         from 'service/user-service.jsx';
import MUtil        from 'util/mm.jsx';

const _user = new User();
const _mm 	= new MUtil();

class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list          : [],
      pageNum       : 1
    }
  }

  componentDidMount() {
    this.loadUserList();
  }
  // 加载用户信息
  loadUserList() {
    _user.getUserList(this.state.pageNum).then(res => {
      this.setState(res);
    }, errMsg => {
      // 有错误的时候清空list
      this.setState({
        list: []
      })
      _mm.errorTips(errMsg);
    });
  }

  // 页数发生变化的时候
  onPageNumChange(pageNum) {
    this.setState({
      pageNum: pageNum
    }, () => {
      this.loadUserList();
    })
  }

  render() {
    // listBody
    let listBody = this.state.list.map((user, index) => {
      return (
        <tr key={ index }>
          <td>{ user.id }</td>
          <td>{ user.username }</td>
          <td>{ user.email }</td>
          <td>{ user.phone }</td>
          {/* 显示未当地时间 */}
          <td>{ new Date(user.createTime).toLocaleString() }</td>
        </tr>
      );
    });

    return (
      <div id="page-wrapper">
        <PageTitle title="用户管理" />
        <TableList tableHeads={['ID', '用户名', '邮箱', '电话', '注册时间', '']}>
          { listBody }
        </TableList>
        <Pagination 
          total={ this.state.total } 
          current={this.state.pageNum}
          onChange={ pageNum => this.onPageNumChange(pageNum) }
          />
      </div>
    );
  }
}

export default UserList;
