import React from 'react';

class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
  }

  upload(e) {

    window.cloudinary.openUploadWidget(
      {
        cloud_name: `${process.env.REACT_APP_CLOUD_NAME}`,
        upload_preset: `${process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET}`
      },
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
          {this.props.imageURL ?
            <img style={{width: '100%', height: '100%', objectFit: 'cover'}}
              alt='sport' src={`${this.props.imageURL}` }/> :
               'Drag File or Click'}
        </div><br/>
      </div>
    );
  }

}

export default UploadImage;
