import{j as e,L as l,o as s,i as r}from"../chunks/chunk-Ob4EiYc1.js";import{L as n}from"../chunks/chunk-Cb6If-mG.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-BhjItjud.js";/* empty css                      *//* empty css                      */const d=[{pageSectionId:"see-also",pageSectionLevel:2,pageSectionTitle:"See also"}];function o(i){const t={blockquote:"blockquote",code:"code",li:"li",p:"p",ul:"ul",...i.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"clientHooks"})," setting determines whether the page loads client ",e.jsx(n,{href:"/hooks",children:"hooks"}),"."]}),`
`,e.jsxs(t.p,{children:["If ",e.jsx(t.code,{children:"false"})," then no client hook is loaded on the client-side (saving KBs)."]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(n,{href:"/client",children:e.jsx(t.code,{children:"+client.js"})})," is always loaded, regardless of this setting. Set/",e.jsx(n,{href:"/config#inheritance",children:"override"})," the value of the ",e.jsx(t.code,{children:"client"})," setting to ",e.jsx(t.code,{children:"null"})," if you also want to skip loading ",e.jsx(t.code,{children:"+client.js"}),"."]}),`
`]}),`
`,e.jsxs(t.p,{children:["The usual use case is to control what code is loaded on the client-side for HTML-only pages, see ",e.jsx(n,{href:"/render-modes#html-only",doNotInferSectionTitle:!0}),"."]}),`
`,e.jsxs(t.p,{children:["By default, Vike sets its value to ",e.jsx(t.code,{children:"true"})," (client-side hooks are loaded) if and only if:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(n,{href:"/onRenderClient",children:e.jsx(t.code,{children:"onRenderClient()"})})," is defined, and"]}),`
`,e.jsxs(t.li,{children:[e.jsx(n,{href:"/Page",children:e.jsx(t.code,{children:"Page"})})," is defined and its ",e.jsx(n,{href:"/meta#api",children:e.jsx(t.code,{children:"meta.env.client"})})," is ",e.jsx(t.code,{children:"true"}),"."]}),`
`]}),`
`,e.jsx(t.p,{children:"Use this setting to override the default:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Set to ",e.jsx(t.code,{children:"false"})," if you want the page to skip loading client hooks (saving KBs)."]}),`
`,e.jsxs(t.li,{children:["Set to ",e.jsx(t.code,{children:"true"})," if you want to make sure the page loads client hooks."]}),`
`]}),`
`,e.jsx("h2",{id:"see-also",children:"See also"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"/render-modes"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"/render-modes#html-only"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"/client"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"/settings"}),`
`]}),`
`]})]})}function a(i={}){const{wrapper:t}=i.components||{};return t?e.jsx(t,{...i,children:e.jsx(o,{...i})}):o(i)}const c=Object.freeze(Object.defineProperty({__proto__:null,default:a,pageSectionsExport:d},Symbol.toStringTag,{value:"Module"})),v={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:l}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:s}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:r}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/clientHooks/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:c}}};export{v as configValuesSerialized};
