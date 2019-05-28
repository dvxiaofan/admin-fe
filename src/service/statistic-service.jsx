/*
 * @Author: DevZhang 
 * @Date: 2019-05-28 12:47:48 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-05-28 12:58:52
 */



import MUtil from 'util/mm.jsx';

const _mm = new MUtil();

class Statistic {
    // 获取首页数据
    getHomeCount() {
        return _mm.request({
            url:  '/manage/statistic/base_count.do'
        });
    }
};


export default Statistic;