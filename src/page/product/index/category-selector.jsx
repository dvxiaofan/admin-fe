/*
 * @Author: xiaofan 
 * @Date: 2018-12-24 21:36:10 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2019-01-03 22:10:43
 */

import './category-selector.scss';
import React        from "react";
import Product 			from 'service/product-service.jsx';
import MUtil 				from 'util/mm.jsx';

const _product 	= new Product();
const _mm 			= new MUtil();

class CategorySelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstCategoryList    : [],
      firstCategoryId      : 0,
      secondCategoryList  : [],
      secondCategoryId    : 0
    };
  }

  componentDidMount() {
    this.loadFirstCategory();
  }

  componentWillReceiveProps(nextProps) {
    let categroyIdChange = this.props.categoryId !== nextProps.categoryId,
      parentCategroyIdChange = this.props.parentCategoryId !== nextProps.parentCategoryId;

    // 数据未发生变化
    if(!categroyIdChange && !parentCategroyIdChange) {
      return;
    };

    // 只有一级品类
    if(nextProps.parentCategoryId === 0) {
      this.setState({
        firstCategoryId     : nextProps.categoryId,
        secondCategoryId   : 0 
      })
    } 
    // 有二级分类
    else {
      this.setState({
        firstCategoryId    : nextProps.parentCategoryId,
        secondCategoryId  : nextProps.categoryId
      }, () => {
        parentCategroyIdChange && this.loadSecondCateList();
      })
    }
  }
  
  // 加载一级分类
  loadFirstCategory() {
    _product.getCategoryList().then(
      res => {
        this.setState({
          firstCategoryList: res
        });
      },
      errMsg => {
        _mm.errorTips(errMsg);
      }
    );
  }
  // 加载二级分类
  loadSecondCateList() {
    _product.getCategoryList(this.state.firstCategoryId).then(
      res => {
        this.setState({
          secondCategoryList: res
        });
      },
      errMsg => {
        _mm.errorTips(errMsg);
      }
    );
  }

  // 选择一级分类变化的时候
  onFirstCateChange(e) {
		if (this.props.readOnly) return;
    let newValue = e.target.value || 0;
    this.setState(
      {
        firstCategoryId: newValue,
        // 清空二级分类内容，防止原来有内容
        secondCategoryId: 0,
        secondCategoryList: []
      },
      () => {
        // 更新二级分类
        this.loadSecondCateList();
        // 选好品类后暴露选择结果出去
        this.onPropsCateChange();
      }
    );
	}
	// 选择二级分类
	onSecondCateChange(e) {
		if (this.props.readOnly) return;
		let newValue = e.target.value || 0;
    this.setState(
      {
        secondCategoryId: newValue,
      },
      () => {
        // 选好品类后暴露选择结果出去
        this.onPropsCateChange();
      }
    );
	}
  // 传给父组件选中结果
  onPropsCateChange() {
		// 判断props里的回调函数是否存在
		let cateChangeable = typeof this.props.onCateChange === 'function';
		// 如有有二级分类
		if(this.state.secondCategoryId) {
			cateChangeable && this.props.onCateChange(this.state.secondCategoryId, this.state.firstCategoryId);
		}
		// 只有一级分类 
		else {
			cateChangeable && this.props.onCateChange(this.state.firstCategoryId, 0);
		}
	}

  render() {
    return (
      <div className="col-md-10">
        <select
          value={this.state.firstCategoryId}
          className="form-control cate-select"
          onChange={e => this.onFirstCateChange(e)}
					>
          <option value="">请选择一级品类</option>
          {this.state.firstCategoryList.map((category, index) => (
            <option value={category.id} key={index}>
              {category.name}
            </option>
          ))}
        </select>
        {this.state.secondCategoryList.length ? (
          <select
            value={this.state.secondCategoryId}
						className="form-control cate-select"
						onChange={e => this.onSecondCateChange(e)}
						
						>
            <option value="">请选择二级品类</option>
            {this.state.secondCategoryList.map((category, index) => (
              <option value={category.id} key={index}>
                {category.name}
              </option>
            ))}
          </select>
        ) : null}
      </div>
    );
  }
}

export default CategorySelector;