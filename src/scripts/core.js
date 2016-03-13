'use strict';
// JSLint
/*global
ADTECH, $1CPP, $include
*/
$include('./src/scripts/common/header.js');
$include('./src/scripts/common/utils.js');
$include('./src/scripts/common/settings.js');
$include('./src/scripts/common/passbackContainer.js');
$include('./src/scripts/common/closeButton.js');

/* Core */
$1CPP.core = function() {
  this.settings = new $1CPP.Settings();
  this.init();
};

$1CPP.core.prototype = {
  init: function() {
    var self = this;
    self.container = document.createElement('div');
    self.container.style.position = 'relative';
    self.container.className = 'container';
    document.body.appendChild(self.container);
    self.passbackContainer = new $1CPP.passbackContainer(self.settings.Passback);
    self.passbackContainer.getContainer().addEventListener('click', function() {
      self.clickHandler();
    });
    self.container.appendChild(self.passbackContainer.getContainer());
    self.closeButton = new $1CPP.closeButton(self.settings.CloseButton);
    self.container.appendChild(self.closeButton.getButton());
    TweenLite.to(self.container, 0.5, {top:"0px"});
    TweenLite.to(self.container, 1, {top:"100px", ease:Back.easeOut, delay:2});

    self.container.addEventListener('mouseover', function() {
      TweenLite.to(self.container, 0.5, {top:"0px"});
    });
    self.container.addEventListener('mouseleave', function() {
      TweenLite.to(self.container, 1, {top:"100px", ease:Back.easeOut});
    });


  },
  clickHandler: function() {
    ADTECH.dynamicClick('Clickthrough', this.settings.Clickthrough);
  }
};
$include('./src/scripts/common/ready.js');