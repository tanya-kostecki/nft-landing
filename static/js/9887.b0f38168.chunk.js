"use strict";(self.webpackChunkportfolio_start=self.webpackChunkportfolio_start||[]).push([[9887],{9887:function(o,i,t){t.r(i),t.d(i,{StrokeColorUpdater:function(){return l}});var e=t(5671),n=t(3144),r=t(4709),l=function(){function o(i){(0,e.Z)(this,o),this.container=i}return(0,n.Z)(o,[{key:"init",value:function(o){var i,t,e,n=this.container,l=o.options,a=(0,r.wA)(l.stroke,o.id,l.reduceDuplicates);o.strokeWidth=(0,r.Gu)(a.width)*n.retina.pixelRatio,o.strokeOpacity=(0,r.Gu)(null!==(i=a.opacity)&&void 0!==i?i:1),o.strokeAnimation=null===(t=a.color)||void 0===t?void 0:t.animation;var u=null!==(e=(0,r.lN)(a.color))&&void 0!==e?e:o.getFillColor();u&&(o.strokeColor=(0,r.bS)(u,o.strokeAnimation,n.retina.reduceFactor))}},{key:"isEnabled",value:function(o){var i=o.strokeAnimation,t=o.strokeColor;return!o.destroyed&&!o.spawning&&!!i&&(void 0!==(null===t||void 0===t?void 0:t.h.value)&&t.h.enable||void 0!==(null===t||void 0===t?void 0:t.s.value)&&t.s.enable||void 0!==(null===t||void 0===t?void 0:t.l.value)&&t.l.enable)}},{key:"update",value:function(o,i){this.isEnabled(o)&&(0,r.PB)(o.strokeColor,i)}}]),o}()}}]);
//# sourceMappingURL=9887.b0f38168.chunk.js.map