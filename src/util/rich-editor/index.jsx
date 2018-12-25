/*
 * @Author: xiaofan 
 * @Date: 2018-12-25 14:29:07 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-25 20:07:00
 */


import 'simditor/styles/simditor.scss';
import './index.scss';

import React        from "react";
import Simditor 		from "simditor";


// 通过富文本编辑器, 依赖jQuery
class RichEditor extends React.Component {

	componentDidMount() {
		this.loadEditor();
	}

	componentWillReceiveProps(nextProps) {
		if(this.props.defaultDetail !== nextProps.defaultDetail) {
			this.simditor.setValue(nextProps.defaultDetail);
		}
	}

	// 加载编辑器
	loadEditor() {
		let element = this.refs['textarea'];
		this.simditor = new Simditor({
			textarea: $(element),
			defalutValue: this.props.placeholder || '请输入内容',
			upload: {
				url						: '/manage/product/richtext_img_upload.do',
				defaultImage	: '',
				fileKey				 : 'upload_file'
			}
		})
		this.bindEditorEvent();
	}
	
	// 初始化富文本编辑器事件, 暴露事件给外层容器
	bindEditorEvent() {
		this.simditor.on('valuechanged', () => {
			this.props.onValueChange(this.simditor.getValue());
		})
	}

  render() {
    return (
      <div className="rich-editor">
				<textarea id="editor" ref="textarea"></textarea>
			</div>
    )
  }
}

export default RichEditor;