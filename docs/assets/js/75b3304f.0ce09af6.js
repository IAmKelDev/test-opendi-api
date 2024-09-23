"use strict";(self.webpackChunktest_website=self.webpackChunktest_website||[]).push([[8485],{19652:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=i(74848),s=i(28453),r=i(3514),o=i(42214);const a={id:"models",title:"Models",description:"Models",custom_edit_url:null},c=void 0,l={id:"api/models",title:"Models",description:"Models",source:"@site/docs/api/models.tag.mdx",sourceDirName:"api",slug:"/api/models",permalink:"/test-opendi-api/next/api/models",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"models",title:"Models",description:"Models",custom_edit_url:null},sidebar:"landingSidebar",previous:{title:"Introduction",permalink:"/test-opendi-api/next/api/opendi-decision-modeling-api"},next:{title:"Get several models",permalink:"/test-opendi-api/next/api/get-several-models"}},d={},u=[];function p(e){const t={a:"a",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Endpoints for Causal Decision Models. Models are largely made up of ",(0,n.jsx)(t.a,{href:"/test-opendi-api/next/api/components",children:"components"}),"."]}),"\n","\n",(0,n.jsx)(r.A,{items:(0,o.useCurrentSidebarCategory)().items})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},3514:(e,t,i)=>{i.d(t,{A:()=>j});i(96540);var n=i(34164),s=i(26972),r=i(28774),o=i(53465),a=i(16654),c=i(21312),l=i(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=i(74848);function p(e){let{href:t,children:i}=e;return(0,u.jsx)(r.default,{href:t,className:(0,n.A)("card padding--lg",d.cardContainer),children:i})}function m(e){let{href:t,icon:i,title:s,description:r}=e;return(0,u.jsxs)(p,{href:t,children:[(0,u.jsxs)(l.default,{as:"h2",className:(0,n.A)("text--truncate",d.cardTitle),title:s,children:[i," ",s]}),r&&(0,u.jsx)("p",{className:(0,n.A)("text--truncate",d.cardDescription),title:r,children:r})]})}function f(e){let{item:t}=e;const i=(0,s.Nr)(t),n=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,c.translate)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return i?(0,u.jsx)(m,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function h(e){let{item:t}=e;const i=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.cC)(t.docId??void 0);return(0,u.jsx)(m,{href:t.href,icon:i,title:t.label,description:t.description??n?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(h,{item:t});case"category":return(0,u.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const i=(0,s.$S)();return(0,u.jsx)(j,{items:i.items,className:t})}function j(e){const{items:t,className:i}=e;if(!t)return(0,u.jsx)(g,{...e});const r=(0,s.d1)(t);return(0,u.jsx)("section",{className:(0,n.A)("row",i),children:r.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(x,{item:e})},t)))})}}}]);