import{j as e,L as n,o as r,i as s}from"../chunks/chunk-CPkdUwBw.js";import{L as o}from"../chunks/chunk-B33eNN_j.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-u42NeO_H.js";/* empty css                      */const d=[{pageSectionId:"npm-packages-containing-invalid-code",pageSectionLevel:2,pageSectionTitle:"Npm packages containing invalid code"},{pageSectionId:"hydration-mismatch",pageSectionLevel:2,pageSectionTitle:"Hydration mismatch"}];function i(a){const t={code:"code",em:"em",p:"p",...a.components};return e.jsxs(e.Fragment,{children:[e.jsx("h2",{id:"npm-packages-containing-invalid-code",children:"Npm packages containing invalid code"}),`
`,e.jsx(t.p,{children:"Some npm packages contain invalid JavaScript code that can crash Node.js."}),`
`,e.jsxs(t.p,{children:["The usual workaround is to add the npm package to ",e.jsx(t.code,{children:"vite.config.js > ssr.noExternal"}),", see ",e.jsx(o,{href:"/broken-npm-package"}),"."]}),`
`,e.jsx("h2",{id:"hydration-mismatch",children:"Hydration mismatch"}),`
`,e.jsxs(t.p,{children:["If you use ",e.jsx(o,{href:"/ssr",children:"SSR"})," then a recurring issue are so-called ",e.jsx(t.em,{children:"hydration mismatches"}),": a hydration mismatch is when the content rendered to HTML on the server isn't the same as the content rendered in the browser."]}),`
`,e.jsxs(t.p,{children:["See ",e.jsx(o,{href:"/hydration-mismatch"})," for explanations, solutions, and workarounds."]})]})}function l(a={}){const{wrapper:t}=a.components||{};return t?e.jsx(t,{...a,children:e.jsx(i,{...a})}):i(a)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:l,pageSectionsExport:d},Symbol.toStringTag,{value:"Module"})),x={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:n}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:r}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:s}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/common-issues/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:p}}};export{x as configValuesSerialized};
