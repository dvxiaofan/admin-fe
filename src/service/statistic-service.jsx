/*
 * @Author: xiaofan 
 * @Date: 2018-12-22 20:51:24 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-22 20:53:06
 */


import MUtil from 'util/mm.jsx';

const _mm = new MUtil();

class Statistic {
	// 获取首页显示数据
  getHomeCount() {
    // 使其返回值是一个promise，可以采用链式操作
    return _mm.request({
      url		: "/manage/statistic/base_count.do",
    });
  }

}

export default Statistic;