"use strict";(self.webpackChunkportfolio_start=self.webpackChunkportfolio_start||[]).push([[8751],{8751:function(t,e,a){a.r(e),a.d(e,{RotateUpdater:function(){return v}});var n=a(5671),i=a(3144),o=a(4709),r=a(1752),s=a(1120),c=a(9340),l=a(2269),u=function(){function t(){(0,n.Z)(this,t),this.enable=!1,this.speed=0,this.decay=0,this.sync=!1}return(0,i.Z)(t,[{key:"load",value:function(t){t&&(void 0!==t.enable&&(this.enable=t.enable),void 0!==t.speed&&(this.speed=(0,o.Cs)(t.speed)),void 0!==t.decay&&(this.decay=(0,o.Cs)(t.decay)),void 0!==t.sync&&(this.sync=t.sync))}}]),t}(),d=function(t){(0,c.Z)(a,t);var e=(0,l.Z)(a);function a(){var t;return(0,n.Z)(this,a),(t=e.call(this)).animation=new u,t.direction="clockwise",t.path=!1,t.value=0,t}return(0,i.Z)(a,[{key:"load",value:function(t){t&&((0,r.Z)((0,s.Z)(a.prototype),"load",this).call(this,t),void 0!==t.direction&&(this.direction=t.direction),this.animation.load(t.animation),void 0!==t.path&&(this.path=t.path))}}]),a}(o.SW),h=2*Math.PI,v=function(){function t(e){(0,n.Z)(this,t),this.container=e}return(0,i.Z)(t,[{key:"init",value:function(t){var e=t.options.rotate;if(e){t.rotate={enable:e.animation.enable,value:(0,o.Id)((0,o.Gu)(e.value)),min:0,max:h},t.pathRotation=e.path;var a=e.direction;if("random"===a){a=Math.floor(2*(0,o.sZ)())>0?"counter-clockwise":"clockwise"}switch(a){case"counter-clockwise":case"counterClockwise":t.rotate.status="decreasing";break;case"clockwise":t.rotate.status="increasing"}var n=e.animation;n.enable&&(t.rotate.decay=1-(0,o.Gu)(n.decay),t.rotate.velocity=(0,o.Gu)(n.speed)/360*this.container.retina.reduceFactor,n.sync||(t.rotate.velocity*=(0,o.sZ)())),t.rotation=t.rotate.value}}},{key:"isEnabled",value:function(t){var e=t.options.rotate;return!!e&&(!t.destroyed&&!t.spawning&&e.animation.enable&&!e.path)}},{key:"loadOptions",value:function(t){t.rotate||(t.rotate=new d);for(var e=arguments.length,a=new Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];for(var i=0,o=a;i<o.length;i++){var r=o[i];t.rotate.load(null===r||void 0===r?void 0:r.rotate)}}},{key:"update",value:function(t,e){this.isEnabled(t)&&t.rotate&&((0,o.Cr)(t,t.rotate,!1,"none",e),t.rotation=t.rotate.value)}}]),t}()}}]);
//# sourceMappingURL=8751.eb118479.chunk.js.map