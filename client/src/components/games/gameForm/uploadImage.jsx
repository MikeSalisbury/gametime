import React from 'react';
import cloudinaryOptions from './cloudinary';

class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
  }

  upload(e) {
    window.cloudinary.openUploadWidget(
      cloudinaryOptions,
      (error, images) => {
        if (error === null) {
          this.props.postImage(images[0].url);
        }
      });
  }

  render() {
    return (
      <div>
        <div className='gameForm-gameImageUpload'
          onClick={this.upload}>
          {this.props.imageURL ? <img style={{width: '100%', height: '100%', objectFit: 'cover'}} alt='sport' src={`${this.props.imageURL}` }/> : 'Drag File or Click'}</div><br/>
      </div>
    );
  }

}

export default UploadImage;
