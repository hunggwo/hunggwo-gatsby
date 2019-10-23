import React, { Component } from 'react';


class Photos extends Component {
  // componentDidMount() {
  //   const element = document.querySelector('.grid');
  //   imageLoaded(element, () => {
  //     waterfall(element);
  //   })

  //   window.addEventListener('resize', function () {
  //     waterfall(element);
  //   });
  // }

  render() {
    const images = [];
    for (let i = 1; i <= this.props.item.photoCount; i++) {
      images.push(
        <Photo src={`/photos/${this.props.item.name}/${i}.jpg`} key={i}></Photo>
      )
    }

    return (
      <div>
        <h3 className="text-center">成品展示</h3>
        <hr/>
        <div class="grid">
          {images}
        </div>
      </div>
    )
  }
}

class Photo extends Component {
  render() {
    return (
      
      <a href={this.props.src} data-lightbox={this.props.src} data-title="">
        <img src={this.props.src} class="item item-image shadow p-1 m-1 bg-white rounded" alt="prodict-img"></img>
      </a>
    )
  }
}


export default Photos;