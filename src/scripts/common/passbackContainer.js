$1CPP.passbackContainer = function(settings) {
  this.utils = $1CPP.utils;

  this.container = document.createElement('div');
//  this.image = this.createImg(settings, 970, 250);
//  this.container.appendChild(this.image);
  this.container.className = 'passbackContainer';

  var iframeContent = document.createElement('iframe');
    iframeContent.scrolling = 'no';
    iframeContent.frameborder = 'no';
    iframeContent.src = ADTECH.getFileUrlById('Passback','passback.html');
    iframeContent.width = 970;
    iframeContent.height = 250;
    iframeContent.allowtransparency = 'true';
    this.container.appendChild(iframeContent);


  return this;
};
$1CPP.passbackContainer.prototype = {
  setVisible: function(show) {
    if (show === true) {
      this.container.style.display = '';
    } else {
      this.container.style.display = 'none';
    }
  },
  isClickable: function() {
    return this.settings.Clickable;
  },
  getContainer: function() {
    return this.container;
  },
  createImg: function(fileSrc, width, height) {
    var img = document.createElement('img');
    img.src = fileSrc;
    // Forced for retina display
    img.width = width;
    img.height = height;
    return img;
  },
  updateSize: function(dimensions) {
    this.utils.resizecontainerPerRatio(this.container, dimensions.w, dimensions.h);
  }
};
