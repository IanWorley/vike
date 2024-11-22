import{j as e,L as r,o as n,i as o}from"../chunks/chunk-Ob4EiYc1.js";import{L as a}from"../chunks/chunk-Cb6If-mG.js";/* empty css                      *//* empty css                      *//* empty css                      */import{M as l}from"../chunks/chunk-DfqOjtKs.js";/* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-BhjItjud.js";/* empty css                      *//* empty css                      */import"../chunks/chunk-BAY8jWIN.js";const d=[];function s(i){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",li:"li",ol:"ol",p:"p",ul:"ul",...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{}),`
`,e.jsxs(t.p,{children:["We can use Vike as well with ",e.jsx(t.a,{href:"https://hapi.dev/",children:"hapi"}),"."]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["hapi is an ",e.jsx(t.a,{href:"https://expressjs.com/",children:"Express.js"})," alternative."]}),`
`]}),`
`,e.jsx(t.p,{children:"We recommend the following setup."}),`
`,e.jsxs(t.p,{children:["In development, we use ",e.jsx(t.em,{children:"two"})," servers:"]}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:["We use Vite's development server (",e.jsx(t.code,{children:"$ vite"}),"). (It automatically includes Vike)."]}),`
`,e.jsxs(t.li,{children:["We use our hapi server ",e.jsx(t.em,{children:"without"})," Vite nor Vike."]}),`
`]}),`
`,e.jsx(t.p,{children:"This means that in development, Vite is responsible for serving the entire frontend, while our hapi server is responsible only for serving the backend."}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"When using Express.js we usually integrate the Vite development middleware to Express.js but we cannot do that with hapi, because hapi doesn't support connect middlewares (the Vite development middleware is a connect middleware). See"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/hapijs/hapi/issues/4369",children:"GitHub > hapi > Support Vite (#4369)"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/hapijs/hapi/issues/80",children:"GitHub > hapi > Express/Connect middleware support (#80)"})}),`
`]}),`
`]}),`
`,e.jsxs(t.p,{children:["In production, we use only ",e.jsx(t.em,{children:"one"})," server:"]}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:["Our hapi server that serves the backend ",e.jsx(t.em,{children:"as well"})," as the frontend: it serves the static files living at ",e.jsx(t.code,{children:"dist/client/"})," and does server-side rendering by using Vike's ",e.jsx(a,{text:e.jsx(t.code,{children:"renderPage()"}),href:"/renderPage"}),"."]}),`
`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["See ",e.jsxs(t.a,{href:"https://github.com/vikejs/vike/issues/366#issuecomment-1189144446",children:["GitHub > ",e.jsx(t.code,{children:"vikejs/vike"})," > hapi (#366)"]}),"."]}),`
`]})]})}function p(i={}){const{wrapper:t}=i.components||{};return t?e.jsx(t,{...i,children:e.jsx(s,{...i})}):s(i)}const h=Object.freeze(Object.defineProperty({__proto__:null,default:p,pageSectionsExport:d},Symbol.toStringTag,{value:"Module"})),k={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:r}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:n}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:o}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/hapi/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}}};export{k as configValuesSerialized};
