/*
 * @Author: xiaofan 
 * @Date: 2018-12-25 11:59:47 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-25 12:38:34
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
			uploadSuccess		: (res) => {
				console.log(res);
				
			},
			uploadError			: (err) => {
				console.log(err);
				
			}
		}
		return <FileUpload options={options}>
        <button ref="chooseAndUpload">上传图片</button>
      </FileUpload>;
	}
}

export default FileUploader;

