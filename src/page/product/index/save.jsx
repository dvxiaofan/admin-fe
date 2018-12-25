/*
 * @Author: xiaofan
 * @Date: 2018-12-24 20:20:16
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-25 20:53:21
 */

import './save.scss';
import React              from "react";
import PageTitle          from "component/page-title/index.jsx";
import Product            from "service/product-service.jsx";
import MUtil              from "util/mm.jsx";
import CategorySelector   from "page/product/index/category-selector.jsx";
import FileUploader       from "util/file-uploader/index.jsx";
import RichEditor         from "util/rich-editor/index.jsx";

const _product  = new Product();
const _mm       = new MUtil();

// 通用分页组件
class ProductSave extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id                : this.props.match.params.pid,
      name              : '',
      subtitle          : '',
      categoryId        : 0,
      parentCategoryId  : 0,
      price             : '',
      stock             : '',
      subImages         : [],
      detail            : '',
      status            : 1 // 1代表在售
    };
  }

  componentDidMount() {
    this.loadProduct();
  }

  // 加载商品详情
  loadProduct() {
    // 有传入id的时候， 表示是编辑操作， 需要表单回填
    if(this.state.id) {
      _product.getProduct(this.state.id).then(res => {
        let images = res.subImages.split(',');
        res.subImages = images.map(imgUri => {
          return {
            uri: imgUri,
            url: res.imageHost + imgUri
          }
        })
        // 暂存商品信息
        this.state.defaultDetail = res.detail;
        this.setState(res);
      }, errMsg => {
        _mm.errorTips(errMsg);
      })
    }
  }

  // 分类变化事件
  onCategoryChange(categoryId, parentCategoryId) {
    this.setState({
      categoryId,
      parentCategoryId
    });
  }

  // 上传图片成功
  onUploadSuccess(res) {
    let subImages = this.state.subImages;    
    subImages.push(res);
    this.setState({
      subImages
    });
  }

  // 上传图片失败
  onUploadError(errMsg) {
    _mm.errorTips(errMsg);
  }

  // 删除已选择图片
  onDeleteImg(e) {
    let index = parseInt(e.target.getAttribute("index")),
      subImages = this.state.subImages;

    subImages.splice(index, 1);
    this.setState({
      subImages
    });
  }

  // 简单文本改变事件
  onValueChange(e) {
    let name = e.target.name,
      value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  // 富文本编辑器变化
  onDetailValueChange(value) {
    this.setState({
      detail: value
    });
  }

  getSubImagesString() {
    return this.state.subImages.map(image => image.uri).join(',');
  }

  // 提交表单
  onSubmit() {
    let product = {
        name          : this.state.name,
        subtitle      : this.state.subtitle,
        categoryId    : parseInt(this.state.categoryId),
        price         : parseFloat(this.state.price),
        stock         : parseInt(this.state.stock),
        subImages     : this.getSubImagesString(),
        detail        : this.state.detail,
        status        : this.state.status
      },
      // 验证表单
      productCheckResult = _product.checkProduct(product);
      
      if(this.state.id) {
        product.id = this.state.id;
      }

    if (productCheckResult.status) {
      _product.saveProduct(product).then(
        res => {
          _mm.successTips(res);
          this.props.history.push("/product/index");
        },
        errMsg => {
          _mm.errorTips(errMsg);
        }
      );
    } else {
      _mm.errorTips(productCheckResult.msg);
    }
  }

  render() {
    return (
      <div id="page-wrapper">
        {
          this.state.id ?
            <PageTitle title="编辑商品" />
            : <PageTitle title="添加商品" />
        }
        
        <div className="form-horizontal">
          <div className="form-group">
            <label className="col-md-2 control-label">商品名称</label>
            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={ e => this.onValueChange(e) }
                placeholder="请输入商品名称"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-2 control-label">商品描述</label>
            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                name="subtitle"
                value={this.state.subtitle}
                onChange={ e => this.onValueChange(e) }
                placeholder="请输入商品描述"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-2 control-label">所属分类</label>
            <CategorySelector
              categoryId={this.state.categoryId}
              parentCategoryId={this.state.parentCategoryId}
              onCateChange={ (categoryId, parentCategoryId) =>
                this.onCategoryChange(categoryId, parentCategoryId)
              }
            />
          </div>

          <div className="form-group">
            <label className="col-md-2 control-label">商品价格</label>
            <div className="col-md-3">
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  name="price"
                  value={this.state.price}
                  onChange={ e => this.onValueChange(e) }
                  placeholder="价格"
                />
                <span className="input-group-addon">元</span>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-2 control-label">商品库存</label>
            <div className="col-md-3">
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  name="stock"
                  value={this.state.stock}
                  onChange={ e => this.onValueChange(e) }
                  placeholder="库存"
                />
                <span className="input-group-addon">件</span>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-2 control-label">商品图片</label>
            <div className="col-md-10">
              { this.state.subImages.length ? (
                this.state.subImages.map((image, index) => (
                  <div key={ index } className="img-con">
                    <img className="img" src={ image.url } />
                    <i
                      className="fa fa-close"
                      index={ index }
                      onClick={ e => this.onDeleteImg(e) }
                    />
                  </div>
                ))
              ) : (
                  <div>请上传图片</div>
                ) }
            </div>
            <div className="col-md-10 col-md-offset-2 file-upload-con">
              <FileUploader
                onSuccess={ res => this.onUploadSuccess(res) }
                onError={ errMsg => this.onUploadError(errMsg) }
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-2 control-label">商品详情</label>
            <div className="col-md-10">
              <RichEditor
                detail={this.state.detail}
                defaultDetail={this.state.defaultDetail}
                onValueChange={ value => this.onDetailValueChange(value) }
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-md-offset-2 col-md-10">
              <button
                type="text"
                className="btn btn-primary"
                onClick={ e => this.onSubmit(e) }>
                提交
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductSave;
