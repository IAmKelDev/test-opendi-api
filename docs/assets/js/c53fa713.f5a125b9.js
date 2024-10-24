(self.webpackChunktest_website=self.webpackChunktest_website||[]).push([[3904],{42537:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var o=n(74848),i=n(28453),a=(n(43905),n(51107));n(23397),n(19365),n(69016);const s={id:"opendi-decision-modeling-api",title:"OpenDI Decision Modeling API",description:"This is a WIP draft of the OpenDI standard API specification.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},r=void 0,d={id:"api/opendi-decision-modeling-api",title:"OpenDI Decision Modeling API",description:"This is a WIP draft of the OpenDI standard API specification.",source:"@site/versioned_docs/version-Live/api/opendi-decision-modeling-api.info.mdx",sourceDirName:"api",slug:"/api/opendi-decision-modeling-api",permalink:"/test-opendi-api/api/opendi-decision-modeling-api",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"Live",sidebarPosition:0,frontMatter:{id:"opendi-decision-modeling-api",title:"OpenDI Decision Modeling API",description:"This is a WIP draft of the OpenDI standard API specification.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"landingSidebar",previous:{title:"OpenDI API",permalink:"/test-opendi-api/api"},next:{title:"Models",permalink:"/test-opendi-api/api/models"}},l={},c=[];function u(e){const t={a:"a",br:"br",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"theme-doc-version-badge badge badge--secondary",children:"Version: 0.1"}),"\n",(0,o.jsx)(a.default,{as:"h1",className:"openapi__heading",children:"OpenDI Decision Modeling API"}),"\n",(0,o.jsxs)(t.p,{children:["This is a WIP draft of the OpenDI standard API specification.",(0,o.jsx)(t.br,{}),"\n","Once finished, this API will define standard endpoints that OpenDI-compliant systems are expected to implement or use."]}),"\n",(0,o.jsxs)(t.p,{children:["This API largely concerns ",(0,o.jsx)(t.a,{href:"/test-opendi-api/api/models",children:"Causal Decision Models"})," and other related data structures."]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},69016:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=o(n(96540)),a=o(n(4213));t.default=function(e){let{url:t,proxy:n}=e;return i.default.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},i.default.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),i.default.createElement("ul",{className:"export-dropdown dropdown__menu"},i.default.createElement("li",null,i.default.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),a.default.saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))}},43905:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=o(n(96540)),a=n(42214),s=o(n(86025)),r=o(n(15626));t.default=function(e){const{colorMode:t}=(0,a.useColorMode)(),{logo:n,darkLogo:o}=e,d=()=>"dark"===t?o?.altText??n?.altText:n?.altText,l=(0,s.default)(n?.url),c=(0,s.default)(o?.url);return n&&o?i.default.createElement(r.default,{alt:d(),sources:{light:l,dark:c},className:"openapi__logo"}):n||o?i.default.createElement(r.default,{alt:d(),sources:{light:l??c,dark:l??c},className:"openapi__logo"}):void 0}},4213:function(e,t,n){var o,i,a,s=n(96763);i=[],void 0===(a="function"==typeof(o=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(s.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function o(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){l(o.response,t,n)},o.onerror=function(){s.error("could not download file")},o.send()}function i(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,d=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!d?function(e,t,n){var s=r.URL||r.webkitURL,d=document.createElement("a");t=t||e.name||"download",d.download=t,d.rel="noopener","string"==typeof e?(d.href=e,d.origin===location.origin?a(d):i(d.href)?o(e,t,n):a(d,d.target="_blank")):(d.href=s.createObjectURL(e),setTimeout((function(){s.revokeObjectURL(d.href)}),4e4),setTimeout((function(){a(d)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,s){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,s),n);else if(i(e))o(e,n,s);else{var r=document.createElement("a");r.href=e,r.target="_blank",setTimeout((function(){a(r)}))}}:function(e,t,n,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof e)return o(e,t,n);var a="application/octet-stream"===e.type,s=/constructor/i.test(r.HTMLElement)||r.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||a&&s||d)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var e=c.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=e:location=e,i=null},c.readAsDataURL(e)}else{var u=r.URL||r.webkitURL,p=u.createObjectURL(e);i?i.location=p:location.href=p,i=null,setTimeout((function(){u.revokeObjectURL(p)}),4e4)}});r.saveAs=l.saveAs=l,e.exports=l})?o.apply(t,i):o)||(e.exports=a)}}]);