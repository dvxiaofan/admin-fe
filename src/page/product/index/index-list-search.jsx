/*
 * @Author: DevZhang 
 * @Date: 2019-05-30 12:43:10 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-05-30 13:32:17
 */


import React from 'react';


class ListSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchType: 'productId',
            searchKeyword: ''
        }
    }

    // 搜索关键字发生改变
    onValueChange(e) {
        let name = e.target.name,
            value = e.target.value;
        
        this.setState({
            [name]: value
        });
    }

    // 搜索事件
    onSearch() {
        this.props.onSearch(this.state.searchType, this.state.searchKeyword);
    }

    // 点击回车也可以搜索
    onSearchKeywordKeyUp(e) {
        if (e.keyCode === 13) this.onSearch();
    }

    render() {
        return (
            <div className="row search-wrap">
                <div className="col-md-12">
                    <div className="form-inline">
                        <div className="form-group">
                            <select 
                                name="searchType" 
                                className="form-control"
                                onChange={ e => this.onValueChange(e) }>
                                    <option value="productId">按商品ID查询</option>
                                    <option value="productName">按商品名称查询</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <input 
                                type="text" 
                                name='searchKeyword'
                                className="form-control"
                                placeholder='搜索关键词'
                                onKeyUp={ e => this.onSearchKeywordKeyUp(e) }
                                onChange={ e => this.onValueChange(e) }
                                />
                        </div>

                        <button className="btn" onClick={ e => { this.onSearch(e) } }>
                            <span>查询</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListSearch;