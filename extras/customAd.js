adtechAdConfig.preview = true;
adtechAdConfig.overrides = adtechAdConfig.overrides || {};
adtechAdConfig.overrides["displayWindowTarget"] = self;
/* // For resopnsive
(function () {
  var B = adtechAdConfig.contentProperties["ExpandedSettings"];
  console.log(adtechAdConfig);
  var A = adtechAdConfig.assetContainers.main;
  A.contentWidth = B.Width;
  A.x = (window.innerWidth - 320) / 2;
  A.y = (window.innerHeight - 480) / 2;
  A.contentHeight = B.Height
})();
*/
(function (D) {
  var F = false;
  for (var G in D.assetContainers) {
    if (D.assetContainers.hasOwnProperty(G)) {
      var B = D.assetContainers[G];
      if (B.type != "inlineDiv" || B.isExpandable) {
        F = true;
        break
      }
    }
  }
  var A = (D.overrides && D.overrides.displayWindowTarget)
    ? D.overrides.displayWindowTarget
    : top;
  var E = (F && (self != top) && ((typeof inDapIF != "undefined" && inDapIF) || (typeof inFIF != "undefined" && inFIF) || (typeof adtechIframeHashArray != "undefined")) && ((typeof adtechCanvasAdPreview == "undefined" || !adtechCanvasAdPreview)))
    ? A
    : self;
  E.com = E.com || {};
  E.com.adtech = E.com.adtech || {};
  E.com.adtech.AdtechCustomAd{{tokens.canvasID}} = function () {};
  E.com.adtech.AdtechCustomAd{{tokens.canvasID}}.prototype = {
    init: function (I) {
      if (!I.richView) {
        return
      }
      console.log('[MY] INIT CUSTOMAD');
      var H = I;
      this.utils = E.com.adtech.Utils_2_53_3;
      this.globalEventBus = E.adtechAdManager_2_53_3.globalEventBus;
      this.richMediaEvent = E.com.adtech.RichMediaEvent_2_53_3;
      this.mainContainer = H.getAssetContainer("main");
      this.mainContent = H.getContent();
      this.advert = H;

      if (this.globalEventBus.pageLoaded) {
        this.pageLoadHandler()
      } else {
        this.globalEventBus.addEventListener(this.richMediaEvent.PAGE_LOAD, this.utils.createClosure(this, this.pageLoadHandler))
      }
    },
    createEventRecord: function () {
    },

    pageLoadHandler: function () {
      //this.adResize();
    }
  };
  E.adtechCallbackInstances = E.adtechCallbackInstances || [];
  var C = E.adtechCallbackInstances.length;
  E.adtechCallbackInstances[C] = new E.com.adtech.AdtechCustomAd{{tokens.canvasID}}();
  E.adtechAdCallback = E.adtechAdCallback || {};
  E.adtechAdCallback[D.adServerVars.uid] = E.adtechCallbackInstances[C]
})(adtechAdConfig);
(function (D) {
  if (!D.initOverride) {
    var B = "{{tokens.rmURL}}";
    if (D.adServerVars.servingProto === "https") {
      var E = ["baseURL", "assetBaseURL"];
      for (var C = 0; C < E.length; C++) {
        var G = D.adServerVars[E[C]];
        if (G) {
          D.adServerVars[E[C]] = G.replace(/^http:\/\/[-a-z0-9\.]*\//i, "https://secure-ads.pictela.net/")
        }
      }
      B = "{{tokens.rmURL}}"
    }
    var H = (D.mraidCompatible)
      ? "MRAID"
      : "";
    var F = B + "adtechRichMediaLib" + H + "_2_53_3.js";
    D.rmLibUrl = F;
    if (!window.adtechAdManager_2_53_3) {
      adtechAdQueue = window.adtechAdQueue || [];
      adtechAdQueue.push(D);
      if (!window.adtechAdManagerReqs || !window.adtechAdManagerReqs["2_53_3"]) {
        adtechAdManagerReqs = window.adtechAdManagerReqs || {};
        adtechAdManagerReqs["2_53_3"] = true;
        var A = "scr";
        document.write("<" + A + 'ipt type="text/javascript" src="' + F + '"></' + A + "ipt>")
      }
    } else {
      adtechAdManager_2_53_3.registerAd(D)
    }
  }
})(adtechAdConfig);
