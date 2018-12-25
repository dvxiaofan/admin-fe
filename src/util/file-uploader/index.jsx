/*
 * @Author: xiaofan 
 * @Date: 2018-12-25 11:59:47 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-25 13:59:27
 */



import React        from "react";
import FileUpload 	from './react-fileUpload.jsx';


class FileUploader extends React.Component {
	render() {
		const options = {
			baseUrl					: '/manage/product/upload.do',
			fileFieldName		 : 'upload_file',
			dataType				: 'json',
			chooseAndUpload	: true,
			uploadSuccess		: res => {this.props.onSuccess(res.data)},
			uploadError			: errMsg => {this.props.onError(errMsg || '上传图片失败')}
		}
		return <FileUpload options={options}>
        <button className="btn btn-xs btn-default" ref="chooseAndUpload">上传图片</button>
      </FileUpload>;
	}
}

export default FileUploader;

