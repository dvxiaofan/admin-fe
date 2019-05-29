/*
 * @Author: DevZhang 
 * @Date: 2019-05-13 13:55:04 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-05-29 23:07:08
 */


import './index.scss';
import 'rc-pagination/dist/rc-pagination.min.css';
import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import Pagination from 'util/pagination/index.jsx';
import Product from 'service/product-service.jsx';
import TableList from 'util/table-list/index.jsx';
import MUtil from 'util/mm.jsx';
import { Link } from 'react-router-dom';


const _product = new Product();
const _mm = new MUtil();


class ProductList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            pageNum: 1
        }
    }

    componentDidMount() {
        this.loadProductList();
    }

    loadProductList() {
        _product.getProductList(this.state.pageNum)
        .then(res => {
            this.setState(res);
        }, eMsg => {
            // 先清空 product list
            this.setState({
                list: []
            });
            _mm.errorTips(eMsg);
        });
    }

    // 页数发生变化
    onPageNumChange(pageNum) {
        this.setState({
            pageNum: pageNum
        }, () => {
            this.loadProductList();
        });
    }

    onSetProductStatus(e, productId, currentStatus) {
        let newStatus = currentStatus == 1 ? 2 : 1,
            confirmTips = currentStatus == 1 ? '确认下架该商品吗?' : '确认上架该商品吗?';

        if (window.confirm(confirmTips)) {
            _product.setProductStatus({
                productId: productId,
                status: newStatus
            }).then(res => {
                _mm.successTips(res);
                this.loadProductList();
            }, eMsg => {
                _mm.errorTips(eMsg);
            });
        }
    }

    render() {
        let tableHeaders = [
            { name: 'ID', width: '10%' },
            { name: '信息', width: '50%' },
            { name: '价格', width: '10%' },
            { name: '状态', width: '15%' },
            { name: '操作', width: '15%' },
        ];

        return (
            <div id="page-wrapper">
                <PageTitle title="商品管理" />
                <TableList tableHeaders={ tableHeaders }>
                    {
                        this.state.list.map((product, index) => {
                            return <tr key={ index }>
                                <td>{ product.id }</td>

                                <td>
                                    <p>{ product.name }</p>
                                    <p>{ product.subtitle }</p>
                                </td>

                                <td>¥{ product.price }</td>

                                <td>
                                    <p>
                                        { product.status === 1 ? '在售' : '已下架' }
                                    </p>
                                    <button className="btn btn-xs btn-warning"
                                        onClick={ e => {
                                            this.onSetProductStatus(e, product.id, product.status);}}>
                                        { product.status === 1 ? '下架' : '上架' }
                                    </button>
                                </td>
                                
                                <td>
                                    <Link className='opera' to='/' >查看</Link>
                                    <Link className='opera' to='/' >编辑</Link>
                                </td>
                            </tr>
                        })
                    }
                </TableList>
                <Pagination
                    total={ this.state.total } 
                    current={ this.state.pageNum }    
                    onChange= { pageNum => this.onPageNumChange(pageNum) }
                />
            </div>
        )
    }
}

export default ProductList;