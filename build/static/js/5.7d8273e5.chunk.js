webpackJsonp([5],{252:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(38),i=t(83),r=t(531),o=function(e){return e&&e.__esModule?e:{default:e}}(r),s=function(e){return{userAuth:e.userAuth,userInfo:e.userInfo}},l=function(e){return{onRequireAuth:function(){return e((0,i.requireAuth)())}}};n.default=(0,a.connect)(s,l)(o.default)},262:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function s(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},c=t(0),m=a(c),u=t(1),p=a(u),d=t(3),f=a(d),g=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},h=function(e){function n(){var t,a,i;r(this,n);for(var s=arguments.length,l=Array(s),c=0;c<s;c++)l[c]=arguments[c];return t=a=o(this,e.call.apply(e,[this].concat(l))),a.handleClick=function(e){if(a.props.onClick&&a.props.onClick(e),!e.defaultPrevented&&0===e.button&&!a.props.target&&!g(e)){e.preventDefault();var n=a.context.router.history,t=a.props,i=t.replace,r=t.to;i?n.replace(r):n.push(r)}},i=t,o(a,i)}return s(n,e),n.prototype.render=function(){var e=this.props,n=(e.replace,e.to),t=e.innerRef,a=i(e,["replace","to","innerRef"]);(0,f.default)(this.context.router,"You should not use <Link> outside a <Router>");var r=this.context.router.history.createHref("string"===typeof n?{pathname:n}:n);return m.default.createElement("a",l({},a,{onClick:this.handleClick,href:r,ref:t}))},n}(m.default.Component);h.propTypes={onClick:p.default.func,target:p.default.string,replace:p.default.bool,to:p.default.oneOfType([p.default.string,p.default.object]).isRequired,innerRef:p.default.oneOfType([p.default.string,p.default.func])},h.defaultProps={replace:!1},h.contextTypes={router:p.default.shape({history:p.default.shape({push:p.default.func.isRequired,replace:p.default.func.isRequired,createHref:p.default.func.isRequired}).isRequired}).isRequired},n.default=h},263:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n&#message {\n  position: absolute;\n  background-image: url(",");\n  background-position-x: 50%;\n  background-position-y: 60%;\n  background-size: 140% 110%;\n  width: 100%;\n  text-align: center;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.75rem 0 1rem 0;\n\n  &.error {\n    background-image: url(",");\n    background-position-x: 50%;\n    background-position-y: 60%;\n    background-size: 140% 110%;\n  }\n\n  > p {\n    color: white;\n    font-weight: normal;\n    font-size: 1.125rem;\n    text-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);\n    margin: 0;\n\n    @media screen and (min-width: ",") {\n      font-size: 1.25rem;\n      margin: 0;\n    }\n  }\n\n  > svg {\n    width: 1.75rem;\n    height: 1.75rem;\n    padding-right: 0.375rem;\n    cursor: pointer;\n\n    > * {\n      fill: white;\n    }\n  }\n}\n"],["\n&#message {\n  position: absolute;\n  background-image: url(",");\n  background-position-x: 50%;\n  background-position-y: 60%;\n  background-size: 140% 110%;\n  width: 100%;\n  text-align: center;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.75rem 0 1rem 0;\n\n  &.error {\n    background-image: url(",");\n    background-position-x: 50%;\n    background-position-y: 60%;\n    background-size: 140% 110%;\n  }\n\n  > p {\n    color: white;\n    font-weight: normal;\n    font-size: 1.125rem;\n    text-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);\n    margin: 0;\n\n    @media screen and (min-width: ",") {\n      font-size: 1.25rem;\n      margin: 0;\n    }\n  }\n\n  > svg {\n    width: 1.75rem;\n    height: 1.75rem;\n    padding-right: 0.375rem;\n    cursor: pointer;\n\n    > * {\n      fill: white;\n    }\n  }\n}\n"]),r=t(0),o=a(r),s=t(7),l=a(s),c=t(8),m=a(c),u=t(264),p=a(u),d=t(265),f=a(d),g=t(23),h=(0,l.default)(function(e){var n=e.error,t=e.message,a=e.onClearError,i=e.onClearMessage,r=e.className;return""!==n.message||""!==t.message?(console.log(t.message),o.default.createElement("section",{id:"message",className:r+(""!==n.message?" error":"")},o.default.createElement(g.CloseIcon,{onClick:""!==n.message?a:i}),o.default.createElement("p",null,""!==n.message?n.message:t.message))):null})(i,f.default,p.default,m.default.medium);n.default=h},264:function(e,n,t){e.exports=t.p+"static/media/red-brush.f8ffb539.png"},265:function(e,n,t){e.exports=t.p+"static/media/blue-brush.02499a4f.png"},266:function(e,n,t){"use strict";n.__esModule=!0;var a=t(267),i=function(e){return e&&e.__esModule?e:{default:e}}(a);n.default=i.default},267:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function o(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var s=t(0),l=a(s),c=t(1),m=a(c),u=t(2),p=a(u),d=t(3),f=a(d),g=t(84),h=function(e){function n(){return i(this,n),r(this,e.apply(this,arguments))}return o(n,e),n.prototype.isStatic=function(){return this.context.router&&this.context.router.staticContext},n.prototype.componentWillMount=function(){(0,f.default)(this.context.router,"You should not use <Redirect> outside a <Router>"),this.isStatic()&&this.perform()},n.prototype.componentDidMount=function(){this.isStatic()||this.perform()},n.prototype.componentDidUpdate=function(e){var n=(0,g.createLocation)(e.to),t=(0,g.createLocation)(this.props.to);if((0,g.locationsAreEqual)(n,t))return void(0,p.default)(!1,"You tried to redirect to the same route you're currently on: \""+t.pathname+t.search+'"');this.perform()},n.prototype.perform=function(){var e=this.context.router.history,n=this.props,t=n.push,a=n.to;t?e.push(a):e.replace(a)},n.prototype.render=function(){return null},n}(l.default.Component);h.propTypes={push:m.default.bool,from:m.default.string,to:m.default.oneOfType([m.default.string,m.default.object]).isRequired},h.defaultProps={push:!1},h.contextTypes={router:m.default.shape({history:m.default.shape({push:m.default.func.isRequired,replace:m.default.func.isRequired}).isRequired,staticContext:m.default.object}).isRequired},n.default=h},298:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),i=function(e){return e&&e.__esModule?e:{default:e}}(a),r=t(23);t(314);var o=function(e){var n=e.closeAction,t=e.children;return i.default.createElement("div",{className:"overlay",id:"overlayModal"},i.default.createElement("div",{className:"background"},i.default.createElement(r.CloseIcon,{onClick:n}),t))};n.default=o},314:function(e,n,t){var a=t(315);"string"===typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0};i.transform=void 0;t(22)(a,i);a.locals&&(e.exports=a.locals)},315:function(e,n,t){n=e.exports=t(21)(void 0),n.push([e.i,"#overlayModal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 500;\n  margin: 0 auto;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  height: 100%;\n  display: flex;\n  align-items: center; }\n  #overlayModal div.background {\n    padding: 1rem 1rem 1.625rem 1rem;\n    min-width: 25rem;\n    width: 50%;\n    margin: 0 auto;\n    position: relative;\n    background-color: white;\n    max-height: 100%;\n    overflow: scroll;\n    box-sizing: border-box; }\n    @media screen and (min-width: 40em) {\n      #overlayModal div.background {\n        padding: 3rem; } }\n    #overlayModal div.background > .closeIcon {\n      position: absolute;\n      right: 1rem;\n      top: 1rem;\n      line-height: initial;\n      width: 2rem;\n      cursor: pointer; }\n      #overlayModal div.background > .closeIcon .close {\n        fill: #ff5800;\n        transition: fill 0.5s ease-in-out; }\n      #overlayModal div.background > .closeIcon:hover .close {\n        fill: #cc4600;\n        transition: fill 0.5s ease-in-out; }\n",""]),n.locals={lightGraphite:"#808080",mauiOrange:"#ffab20",graphite:"#404040",darkGraphite:"#101010",brightGraphite:"#999999",errorRed:"#ff5800",darkErrorRed:"#cc4600",blueHydrangea:"#3694ff",darkBlueHydrangea:"#0063db",lightHydrangea:"#57a8ff",small:"26em",medium:"40em",large:"64em",xlarge:"90em",xxlarge:"120em"}},531:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function o(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),l=t(0),c=a(l),m=t(266),u=a(m),p=t(262),d=a(p),f=t(82),g=a(f),h=t(532),y=a(h),b=t(533),v=a(b),w=t(263),C=a(w);t(536);var x=function(e){function n(e){i(this,n);var t=r(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={nonprofitInfo:{},campaigns:{},fetched:!1,stopModalMsg:"",showStopModal:!1,currentStopId:null,message:{type:"",message:""},error:{type:"",message:""}},t.componentWillMount=t.componentWillMount.bind(t),t.launchCampaign=t.launchCampaign.bind(t),t.stopCampaign=t.stopCampaign.bind(t),t.stopConfirm=t.stopConfirm.bind(t),t}return o(n,e),s(n,[{key:"componentWillMount",value:function(){var e=this;g.default.get("https://"+window.location.hostname+":3000/api/nonprofits/campaigns/"+this.props.userAuth.accessToken).then(function(n){for(var t=n.data.data,a=t.nonprofit,i=t.campaigns,r=0;r<i.length;r+=1)i[r].timeRemaining=(new Date(Date.parse(i[r].startDate))-new Date)/1e3/60/60/24+i[r].duration;document.title="Manage "+a.name+"'s Campaign - Design Bright",e.setState({campaigns:i}),e.setState({nonprofitInfo:a}),e.setState({fetched:!0})}).catch(function(e){return console.log(e)})}},{key:"launchCampaign",value:function(e){var n=this,t=this.props.userAuth.accessToken;g.default.patch("https://"+window.location.hostname+":3000/api/nonprofits/campaigns/launch/"+e,{accessToken:t}).then(function(t){if(window.scrollTo(0,0),n.setState({message:{type:"start campaign",message:t.data.message},error:{type:"",message:""}}),200===t.status){var a=n.state.campaigns;a[a.map(function(e){return e.campaignId}).indexOf(e)].startDate=(new Date).toISOString(),n.setState({campaigns:a})}}).catch(function(e){window.scrollTo(0,0),n.setState({error:{type:"start campaign",message:e.response.data.message},message:{type:"",message:""}})})}},{key:"stopConfirm",value:function(e){var n=this,t=this.props.userAuth.accessToken;g.default.patch("https://"+window.location.hostname+":3000/api/nonprofits/campaigns/stop/"+e,{accessToken:t}).then(function(t){if(window.scrollTo(0,0),n.setState({message:{type:"start campaign",message:t.data.message},error:{type:"",message:""}}),200===t.status){var a=n.state.campaigns,i=a.map(function(e){return e.campaignId}).indexOf(e),r=new Date;a[i].endDate=r.toISOString(),n.setState({campaigns:a,showStopModal:!1,stopModalMsg:"",currentStopId:null}),document.body.style.overflow=""}}).catch(function(e){window.scrollTo(0,0),n.setState({error:{type:"start campaign",message:e.response.data.message},message:{type:"",message:""}})})}},{key:"stopCampaign",value:function(e){document.body.style.overflow="hidden";var n=this.state.campaigns,t=n.map(function(e){return e.campaignId}).indexOf(e),a=this.state.campaigns[t];if(this.setState({showStopModal:!0}),new Date(Date.parse(a.endDate)).getTime()>=(new Date).getTime()){this.setState({stopModalMsg:function(){return a.timeRemaining>=2?"There are still "+Math.floor(a.timeRemaining)+" days left. Are you sure you want to stop this campaign early?":a.timeRemaining>=1?"There is still "+Math.floor(a.timeRemaining)+" day left. Are you sure you want to stop this campaign early?":24*a.timeRemaining>=2?"There are still "+Math.floor(24*a.timeRemaining)+" hours left. Are you sure you want to stop this campaign early?":24*a.timeRemaining>=1?"There is still "+Math.floor(24*a.timeRemaining)+" hour left. Are you sure you want to stop this campaign early?":"There is less than an hour left. Are you sure you want to stop this campaign early?"}(),currentStopId:e})}}},{key:"render",value:function(){var e=this;return this.props.onRequireAuth()?"non-profit"===this.props.userInfo.userType?this.state.fetched?c.default.createElement("main",{id:"mngCampaigns",className:"ontouchstart"in document.documentElement?"":" no-touch"},c.default.createElement(C.default,{error:this.state.error,onClearMessage:function(){return e.setState({message:{type:"",message:""}})},message:this.state.message,onClearError:function(){return e.setState({error:{type:"",message:""}})}}),this.state.showStopModal?c.default.createElement(v.default,{text:this.state.stopModalMsg,id:this.state.currentStopId,confirmAction:function(n){return e.stopConfirm(n)},cancelAction:function(){document.body.style.overflow="",e.setState({showStopModal:!1,stopModalMsg:"",currentStopId:null})}}):null,c.default.createElement("section",{className:"row"},c.default.createElement("div",{className:"small-12 columns"},c.default.createElement("div",{className:"row align-middle main-heading"},c.default.createElement("h1",{className:"expand columns"},c.default.createElement("span",{className:"underlined"},this.state.nonprofitInfo.name,"'s Campaigns")),c.default.createElement("div",{className:"large-4 show-for-large columns button primary"},c.default.createElement(d.default,{to:"/campaign/create"},c.default.createElement("span",{className:"icon"},"\uf055"),c.default.createElement("span",{className:"text"},"Create Campaign"))))),this.state.campaigns.map(function(n,t){return c.default.createElement(y.default,{name:n.name,id:n.campaignId,key:t,launch:e.launchCampaign,stop:e.stopCampaign,startDate:n.startDate,endDate:n.endDate})}),c.default.createElement("div",{className:"small-12 columns"},c.default.createElement("div",{className:"row  align-center"},c.default.createElement("div",{className:"small-11 medium-10 large-8 hide-for-large columns button primary"},c.default.createElement(d.default,{to:"/campaign/create"},c.default.createElement("span",{className:"icon"},"\uf055"),c.default.createElement("span",{className:"text"},"Create Campaign"))))))):c.default.createElement("h1",null,"Loading"):c.default.createElement(u.default,{to:{pathname:"/user/profile",search:"?origin=nonprofit-page"}}):c.default.createElement(u.default,{to:{pathname:"/login",search:"?origin=secure"}})}}]),n}(c.default.Component);n.default=x},532:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),r=a(i),o=t(262),s=a(o),l=function(e){var n=e.name,t=e.id,a=e.launch,i=e.stop,o=e.startDate,l=e.endDate;return r.default.createElement("article",{className:"small-10 medium-6 columns"},r.default.createElement("div",{className:"row"},r.default.createElement("h2",{className:"columns small-12"},r.default.createElement("span",{className:"underlined"},n)),r.default.createElement("div",{className:"small-12 columns campaign-action"+(o?" stop":" launch")},r.default.createElement("button",{onClick:o?function(){return i(t)}:function(){return a(t)},disabled:new Date(Date.parse(l)).getTime()<=(new Date).getTime()},r.default.createElement("span",{className:"icon"},o?"\uf056":"\uf144"),r.default.createElement("span",{className:"text"},o?"Stop":"Launch"," Campaign"))),r.default.createElement("div",{className:"small-12 columns campaign-action edit"},r.default.createElement(s.default,{to:"/campaign/edit/"+t},r.default.createElement("span",{className:"icon"},"\uf044"),r.default.createElement("span",{className:"text"},"Edit Campaign"))),r.default.createElement("div",{className:"small-12 columns campaign-action edit"},r.default.createElement(s.default,{to:"/campaign"+(o?"":"/preview")+"/"+t},r.default.createElement("span",{className:"icon"},o?"\uf06e":"\uf2a8"),r.default.createElement("span",{className:"text"},o?"View":"Preview"," Campaign"))),null!==o?r.default.createElement("p",{className:"small-12 columns"},"Campaign Started on ",new Date(Date.parse(o)).toLocaleDateString(),"."):null,new Date(Date.parse(l)).getTime()<=(new Date).getTime()?r.default.createElement("p",{className:"small-12 columns"},"Campaign Stopped on ",new Date(Date.parse(l)).toLocaleDateString(),"."):null),r.default.createElement("hr",null))};n.default=l},533:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),r=a(i),o=t(298),s=a(o);t(534);var l=function(e){var n=e.text,t=e.confirmAction,a=e.cancelAction,i=e.id;return r.default.createElement(s.default,{closeAction:a},r.default.createElement("section",{className:"row align-middle align-center",id:"stopConf"},r.default.createElement("p",{className:"columns small-10"},n),r.default.createElement("button",{className:"primary columns large-6 medium-8 small-10",onClick:function(){return t(i)}},"Stop Campaign"),r.default.createElement("button",{className:"cancel columns small-12",onClick:a,type:"button"},"Cancel")))};n.default=l},534:function(e,n,t){var a=t(535);"string"===typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0};i.transform=void 0;t(22)(a,i);a.locals&&(e.exports=a.locals)},535:function(e,n,t){n=e.exports=t(21)(void 0),n.push([e.i,"#stopConf {\n  padding-top: 0.75rem; }\n  #stopConf p {\n    font-size: 1.125rem;\n    line-height: 1.5rem; }\n    @media screen and (min-width: 40em) {\n      #stopConf p {\n        font-size: 1.25rem;\n        line-height: 1.625rem; } }\n  #stopConf button.primary {\n    margin-top: 1.75rem; }\n",""]),n.locals={lightGraphite:"#808080",mauiOrange:"#ffab20",graphite:"#404040",darkGraphite:"#101010",brightGraphite:"#999999",errorRed:"#ff5800",darkErrorRed:"#cc4600",blueHydrangea:"#3694ff",darkBlueHydrangea:"#0063db",lightHydrangea:"#57a8ff",small:"26em",medium:"40em",large:"64em",xlarge:"90em",xxlarge:"120em"}},536:function(e,n,t){var a=t(537);"string"===typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0};i.transform=void 0;t(22)(a,i);a.locals&&(e.exports=a.locals)},537:function(e,n,t){n=e.exports=t(21)(void 0),n.push([e.i,"#mngCampaigns .main-heading .button.primary {\n  margin: 0; }\n\n#mngCampaigns .button.primary {\n  padding: 0;\n  text-align: center; }\n  #mngCampaigns .button.primary a {\n    width: 100%;\n    display: inline-block;\n    color: white;\n    font-weight: normal;\n    padding: 0.875rem 1.25rem 1.125rem 1.25rem;\n    border: none; }\n    #mngCampaigns .button.primary a span.icon {\n      padding: 0rem 0.375rem 0 0;\n      font-family: 'font-awesome-light';\n      font-size: 1.375rem;\n      text-shadow: 0 0 0.5rem #4097ff;\n      display: inline-block;\n      line-height: 1.625rem;\n      vertical-align: middle; }\n      @media screen and (min-width: 40em) {\n        #mngCampaigns .button.primary a span.icon {\n          font-size: 1.625rem; } }\n    #mngCampaigns .button.primary a span.text {\n      display: inline-block;\n      line-height: 1.625rem;\n      vertical-align: middle; }\n\n#mngCampaigns article {\n  position: relative; }\n  #mngCampaigns article:not(:last-of-type) {\n    padding-bottom: 1.5rem; }\n  #mngCampaigns article h1 {\n    margin-bottom: 0; }\n  #mngCampaigns article h2 {\n    margin-top: 1.25rem; }\n    @media screen and (min-width: 40em) {\n      #mngCampaigns article h2 {\n        font-size: 1.3rem;\n        margin-top: 1.75rem; } }\n    @media screen and (min-width: 64em) {\n      #mngCampaigns article h2 {\n        font-size: 1.375rem; } }\n  #mngCampaigns article .preview {\n    margin-bottom: 0.5rem; }\n    #mngCampaigns article .preview a {\n      border: none;\n      display: inline-block; }\n      #mngCampaigns article .preview a span {\n        display: inline-block;\n        line-height: initial;\n        vertical-align: middle; }\n        #mngCampaigns article .preview a span.icon {\n          font-size: 1.125rem;\n          padding: 0.2rem 0.275rem 0 0.1rem;\n          font-family: 'font-awesome-light'; }\n        #mngCampaigns article .preview a span.text {\n          border-bottom: 0.0625rem solid #8cc0ff; }\n  #mngCampaigns article hr {\n    position: absolute;\n    bottom: 0;\n    width: calc(100% - 1.875rem); }\n    @media screen and (min-width: 40em) {\n      #mngCampaigns article hr {\n        margin-top: 1.875rem; } }\n  #mngCampaigns article:last-of-type hr {\n    display: none; }\n  @media screen and (min-width: 40em) {\n    #mngCampaigns article:nth-last-of-type(2):not(:nth-child(odd)) hr, #mngCampaigns article:nth-last-of-type(2):nth-child(2) hr {\n      display: none; } }\n  #mngCampaigns article .campaign-action a, #mngCampaigns article .campaign-action button {\n    text-align: left;\n    margin: 0.375rem 0 0 0;\n    border: none;\n    display: inline-block;\n    padding: 0.125rem 0.125rem 0.25rem 0.125rem;\n    width: auto; }\n    #mngCampaigns article .campaign-action a span, #mngCampaigns article .campaign-action button span {\n      vertical-align: middle; }\n      #mngCampaigns article .campaign-action a span.icon, #mngCampaigns article .campaign-action button span.icon {\n        font-family: 'font-awesome-light';\n        font-size: 1.25rem;\n        display: inline-block;\n        padding: 0.2rem 0.375rem 0 0;\n        line-height: initial; }\n        @media screen and (min-width: 40em) {\n          #mngCampaigns article .campaign-action a span.icon, #mngCampaigns article .campaign-action button span.icon {\n            font-size: 1.5rem; } }\n      #mngCampaigns article .campaign-action a span.text, #mngCampaigns article .campaign-action button span.text {\n        font-size: 1rem;\n        line-height: initial; }\n        @media screen and (min-width: 40em) {\n          #mngCampaigns article .campaign-action a span.text, #mngCampaigns article .campaign-action button span.text {\n            font-size: 1.125rem; } }\n  #mngCampaigns article .campaign-action.disabled {\n    display: none; }\n  #mngCampaigns article .campaign-action.launch button {\n    color: #75CC00; }\n    #mngCampaigns article .campaign-action.launch button span.text {\n      border-bottom: 0.0625rem solid #75CC00; }\n    #mngCampaigns article .campaign-action.launch button:hover {\n      color: #5ea300; }\n      #mngCampaigns article .campaign-action.launch button:hover span.text {\n        border-color: #5ea300; }\n  #mngCampaigns article .campaign-action.stop button {\n    color: #ff5800; }\n    #mngCampaigns article .campaign-action.stop button span.text {\n      border-bottom: 0.0625rem solid #ff5800; }\n    #mngCampaigns article .campaign-action.stop button:hover {\n      color: #cc4600; }\n      #mngCampaigns article .campaign-action.stop button:hover span.text {\n        border-color: #cc4600; }\n    #mngCampaigns article .campaign-action.stop button:disabled span.icon, #mngCampaigns article .campaign-action.stop button:disabled span.text {\n      color: #cccccc;\n      border-color: #cccccc;\n      cursor: not-allowed; }\n  #mngCampaigns article .campaign-action.edit a {\n    color: #8cc0ff; }\n    #mngCampaigns article .campaign-action.edit a span.text {\n      border-bottom: 0.0625rem solid #8cc0ff; }\n    #mngCampaigns article .campaign-action.edit a span.icon {\n      padding: 0.2rem 0.275rem 0 0.1rem; }\n    #mngCampaigns article .campaign-action.edit a:hover {\n      color: #4097ff; }\n      #mngCampaigns article .campaign-action.edit a:hover span.text {\n        border-color: #4097ff; }\n",""])}});
//# sourceMappingURL=5.7d8273e5.chunk.js.map