/*
 * @Author: xiaofan 
 * @Date: 2018-12-20 22:52:59 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-22 23:30:02
 */

import './index.css';
import 'rc-pagination/dist/rc-pagination.min.css';
import React        from "react";
import PageTitle    from 'component/page-title/index.jsx';
import { Link }     from 'react-router-dom';
import Pagination   from 'util/pagination/index.jsx';
import UserList     from 'service/user-service.jsx';
import MUtil        from 'util/mm.jsx';

const _user = new UserList();
const _mm 	= new MUtil();

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list          : [],
      pageNum       : 1,
      firstLoading   : true
    }
  }

  componentDidMount() {
    this.loadUserList();
  }

  loadUserList() {
    _user.getUserList(this.state.pageNum).then(res => {
      this.setState(res, () => {
        this.setState({
          firstLoading: false
        })
      });
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
    // list 存在
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
    // list 不存在
    let listError = (
      <tr>
        <td colSpan='5' className="text-center">
          {this.state.firstLoading ? '正在加载用户数据' : '没找到相关用户数据' }
        </td>
      </tr>
    );
    let tableBody = this.state.list.length > 0 ? listBody : listError;

    return (
      <div id="page-wrapper">
        <PageTitle title="用户管理" />
        <div className="row">
          <div className="col-md-12">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>用户名</th>
                  <th>邮箱</th>
                  <th>电话</th>
                  <th>注册时间</th>
                </tr>
              </thead>
              <tbody>
                {tableBody}
              </tbody>
            </table>
          </div>
        </div>
        <Pagination 
          total={ this.state.total } 
          current={this.state.pageNum}
          onChange={ pageNum => this.onPageNumChange(pageNum) }
          />
      </div>
    );
  }
}

export default User;
