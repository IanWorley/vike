import{j as e,L as s,o as r,i as a}from"../chunks/chunk-CPkdUwBw.js";import{L as t}from"../chunks/chunk-B33eNN_j.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-u42NeO_H.js";/* empty css                      */const i=[];function l(n){const o={a:"a",blockquote:"blockquote",code:"code",figure:"figure",p:"p",pre:"pre",span:"span",...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"reload()"})," function enables you to reload the page. The difference with ",e.jsx(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Location/reload",children:e.jsx(o.code,{children:"window.location.reload"})})," is that ",e.jsx(o.code,{children:"reload()"})," is much faster as it uses Vike's ",e.jsx(t,{text:"Client Router",href:"/client-routing"}),"."]}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"reload()"})," works only with ",e.jsx(t,{text:"Client Routing",href:"/client-routing"}),". If you use ",e.jsx(t,{text:"Server Routing",href:"/server-routing"}),", then do ",e.jsx(o.code,{children:"window.location.reload()"})," instead."]}),`
`]}),`
`,e.jsxs(o.p,{children:["The most common use case for ",e.jsx(o.code,{children:"reload()"})," is to refresh the page when an authentication cookie is updated, see ",e.jsx(t,{href:"/auth"}),"."]}),`
`,e.jsx(o.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(o.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"jsx","data-theme":"github-light",children:e.jsxs(o.code,{"data-language":"jsx","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(o.span,{"data-line":"",children:e.jsx(o.span,{style:{color:"#6A737D"},children:"// /components/Logout.jsx"})}),`
`,e.jsx(o.span,{"data-line":"",children:" "}),`
`,e.jsxs(o.span,{"data-line":"",children:[e.jsx(o.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(o.span,{style:{color:"#24292E"},children:" { reload } "}),e.jsx(o.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(o.span,{style:{color:"#032F62"},children:" 'vike/client/router'"})]}),`
`,e.jsx(o.span,{"data-line":"",children:" "}),`
`,e.jsxs(o.span,{"data-line":"",children:[e.jsx(o.span,{style:{color:"#D73A49"},children:"function"}),e.jsx(o.span,{style:{color:"#6F42C1"},children:" Logout"}),e.jsx(o.span,{style:{color:"#24292E"},children:"() {"})]}),`
`,e.jsxs(o.span,{"data-line":"",children:[e.jsx(o.span,{style:{color:"#D73A49"},children:"   return"}),e.jsx(o.span,{style:{color:"#24292E"},children:" <"}),e.jsx(o.span,{style:{color:"#22863A"},children:"button"}),e.jsx(o.span,{style:{color:"#6F42C1"},children:" onClick"}),e.jsx(o.span,{style:{color:"#D73A49"},children:"="}),e.jsx(o.span,{style:{color:"#24292E"},children:"{logout}>Logout</"}),e.jsx(o.span,{style:{color:"#22863A"},children:"button"}),e.jsx(o.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsx(o.span,{"data-line":"",children:e.jsx(o.span,{style:{color:"#24292E"},children:"}"})}),`
`,e.jsxs(o.span,{"data-line":"",children:[e.jsx(o.span,{style:{color:"#D73A49"},children:"async"}),e.jsx(o.span,{style:{color:"#D73A49"},children:" function"}),e.jsx(o.span,{style:{color:"#6F42C1"},children:" logout"}),e.jsx(o.span,{style:{color:"#24292E"},children:"() {"})]}),`
`,e.jsx(o.span,{"data-line":"",children:e.jsx(o.span,{style:{color:"#6A737D"},children:"  // Removes the authentication cookie"})}),`
`,e.jsxs(o.span,{"data-line":"",children:[e.jsx(o.span,{style:{color:"#D73A49"},children:"  await"}),e.jsx(o.span,{style:{color:"#6F42C1"},children:" fetch"}),e.jsx(o.span,{style:{color:"#24292E"},children:"("}),e.jsx(o.span,{style:{color:"#032F62"},children:"'/logout'"}),e.jsx(o.span,{style:{color:"#24292E"},children:", { method: "}),e.jsx(o.span,{style:{color:"#032F62"},children:"'POST'"}),e.jsx(o.span,{style:{color:"#24292E"},children:" })"})]}),`
`,e.jsx(o.span,{"data-line":"",children:e.jsx(o.span,{style:{color:"#6A737D"},children:"  // Re-render the page to take into account the removed cookie"})}),`
`,e.jsxs(o.span,{"data-line":"",children:[e.jsx(o.span,{style:{color:"#D73A49"},children:"  await"}),e.jsx(o.span,{style:{color:"#6F42C1"},children:" reload"}),e.jsx(o.span,{style:{color:"#24292E"},children:"()"})]}),`
`,e.jsx(o.span,{"data-line":"",children:e.jsx(o.span,{style:{color:"#6A737D"},children:"  // Reload is finished"})}),`
`,e.jsx(o.span,{"data-line":"",children:e.jsx(o.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsxs(o.p,{children:["It's the same as ",e.jsx(o.a,{href:"/navigate",children:e.jsx(o.code,{children:"navigate(window.location.href)"})})," but it handles some edge cases."]})]})}function d(n={}){const{wrapper:o}=n.components||{};return o?e.jsx(o,{...n,children:e.jsx(l,{...n})}):l(n)}const c=Object.freeze(Object.defineProperty({__proto__:null,default:d,pageSectionsExport:i},Symbol.toStringTag,{value:"Module"})),v={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:s}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:r}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:a}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/reload/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:c}}};export{v as configValuesSerialized};
