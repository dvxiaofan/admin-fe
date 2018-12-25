/*
 * @Author: xiaofan
 * @Date: 2018-12-24 20:20:16
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-25 14:47:56
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
      categoryId: 0,
      parentId  : 0,
      subImages : []
    };
  }

  // 分类变化事件
  onCategoryChange(categoryId, parentId) {
    this.setState({
      categoryId,
      parentId
    });
  }

  // 上传图片成功
  onUploadSuccess(res) {
    let subImages = this.state.subImages;
    subImages.push(res);
    this.setState({
      subImages
    })
  }

  // 上传图片失败
  onUploadError(errMsg) {
    _mm.errorTips(errMsg)
  }

  // 删除已选择图片
  onDeleteImg(e) {
    let index = parseInt(e.target.getAttribute('index')),
      subImages = this.state.subImages;

    subImages.splice(index, 1);
    this.setState({
      subImages
    })
  }

  // 富文本编辑器变化
  onDetailValueChange(value) {
    console.log(value);
    
    this.setState({
      detail: value
    })
  }


  render() {
    return <div id="page-wrapper">
        <PageTitle title="添加商品" />
        <div className="form-horizontal">

          <div className="form-group">
            <label className="col-md-2 control-label">商品名称</label>
            <div className="col-md-5">
              <input type="text" className="form-control" placeholder="请输入商品名称" />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-2 control-label">商品描述</label>
            <div className="col-md-5">
              <input type="text" className="form-control" placeholder="请输入商品描述" />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-2 control-label">所属分类</label>
            <CategorySelector onCateChange={(categoryId, parentId) => this.onCategoryChange(categoryId, parentId)} />
          </div>

          <div className="form-group">
            <label className="col-md-2 control-label">商品价格</label>
            <div className="col-md-3">
              <div className="input-group">
                <input type="number" className="form-control" placeholder="价格" />
                <span className="input-group-addon">元</span>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-2 control-label">商品库存</label>
            <div className="col-md-3">
              <div className="input-group">
                <input type="number" className="form-control" placeholder="库存" />
                <span className="input-group-addon">件</span>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-2 control-label">商品图片</label>
            <div className="col-md-10">
              {this.state.subImages.length ? this.state.subImages.map(
                  (image, index) => (
                    <div key={index} className="img-con">
                      <img className="img" src={image.url} />
                      <i className="fa fa-close" index={index} onClick={e => this.onDeleteImg(e)}></i>
                    </div>
                  )
                ) : <div>请上传图片</div>}
            </div>
            <div className="col-md-10 col-md-offset-2 file-upload-con">
              <FileUploader onSuccess={res => this.onUploadSuccess(res)} onError={errMsg => this.onUploadError(errMsg)} />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-2 control-label">商品详情</label>
            <div className="col-md-10">
              <RichEditor onValueChange={value => this.onDetailValueChange(value)} />
            </div>
          </div>

          <div className="form-group">
            <div className="col-md-offset-2 col-md-10">
              <button type="text" className="btn btn-primary">
                提交
              </button>
            </div>
          </div>
        </div>
      </div>;
  }
}

export default ProductSave;
