import{j as e,L as t,o,i as a}from"../chunks/chunk-Ob4EiYc1.js";import{L as i}from"../chunks/chunk-Cb6If-mG.js";/* empty css                      */import{W as l}from"../chunks/chunk-BAY8jWIN.js";/* empty css                      */import{U as d}from"../chunks/chunk-BcYhKxlY.js";/* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-BhjItjud.js";/* empty css                      *//* empty css                      *//* empty css                      */const c=[{pageSectionId:"ignored-directories",pageSectionLevel:2,pageSectionTitle:"Ignored directories"},{pageSectionId:"case-sensitive",pageSectionLevel:2,pageSectionTitle:"Case sensitive"},{pageSectionId:"crawl-space",pageSectionLevel:2,pageSectionTitle:"Crawl space"},{pageSectionId:"renderer",pageSectionLevel:2,pageSectionTitle:"`renderer/`"},{pageSectionId:"see-also",pageSectionLevel:2,pageSectionTitle:"See also"}];function s(r){const n={a:"a",blockquote:"blockquote",code:"code",figure:"figure",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Detailed information about Vike's Filesystem Routing."}),`
`,e.jsxs(n.p,{children:["For an overview, see instead: ",e.jsx(i,{href:"/routing#filesystem-routing",doNotInferSectionTitle:!0}),"."]}),`
`,e.jsx("h2",{id:"ignored-directories",children:"Ignored directories"}),`
`,e.jsx(n.p,{children:"Following directories are ignored by Filesystem Routing:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"index/"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pages/"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"src/"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"(someDir)/"})," (any directory inside parentheses)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`FILESYSTEM                                                     URL
=========================================================      ========
pages/index/+Page.js                                           /
(marketing)/src/pages/jobs/+Page.js                            /jobs
(some)/(path)/src/pages/jobs/+Page.js                          /jobs
contact/+Page.js                                               /contact
pages/pages/src/(some-dir)/src/index/pages/about/+Page.js      /about
`})}),`
`,e.jsxs(n.p,{children:["But they aren't ignored by ",e.jsx(i,{href:"/config#inheritance",children:"config inheritance"}),":"]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"yaml","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"yaml","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"pages/about/+Page.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# This +config.js file doesn't apply to pages/about/+Page.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"src/pages/+config.js"})})]})})}),`
`,e.jsx("h2",{id:"case-sensitive",children:"Case sensitive"}),`
`,e.jsx(n.p,{children:"Filesystem Routing is case sensitive:"}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"bash","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"bash","data-theme":"github-light",style:{display:"grid"},children:[e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"FILESYSTEM"}),e.jsx(n.span,{style:{color:"#032F62"},children:"                     URL"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"========================       "}),e.jsx(n.span,{style:{color:"#032F62"},children:"======"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"pages/HELLO/+Page.js"}),e.jsx(n.span,{style:{color:"#032F62"},children:"           /HELLO"})]})]})})}),`
`,e.jsx("h2",{id:"crawl-space",children:"Crawl space"}),`
`,e.jsxs(n.p,{children:["Vike crawls files inside ",e.jsxs(n.a,{href:"https://vitejs.dev/config/shared-options.html#root",children:["Vite's ",e.jsx(n.code,{children:"root"})," directory"]}),". Consequently, all your ",e.jsxs(i,{href:"/config#files",children:[e.jsx(n.code,{children:"+"})," files"]})," need to live inside ",e.jsx(n.code,{children:"root"}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["You can use symlinks (e.g. ",e.jsx(n.code,{children:"$ ln -s"}),") to make a directory outside of ",e.jsx(n.code,{children:"root"})," crawlable."]}),`
`]}),`
`,e.jsxs(n.p,{children:["If you use Git then Vike skips ",e.jsx(n.code,{children:".gitignore"})," files."]}),`
`,e.jsx("h2",{id:"renderer",children:e.jsx("code",{children:"renderer/"})}),`
`,e.jsxs(n.p,{children:["If you don't use a ",e.jsx(d,{})," then we recommend placing your UI framework integration in a ",e.jsx(n.code,{children:"renderer/"})," directory."]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"yaml","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"yaml","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Usual Vike file structure"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"/pages/"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"/components/"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"/server/"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Code that specifies how pages are rendered"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"/renderer/+onRenderHtml.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"/renderer/+onRenderClient.js"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#032F62"},children:"/renderer/Layout.{jsx,vue}"}),e.jsx(n.span,{style:{color:"#6A737D"},children:"  # React/Vue/... component that wraps the `Page` component"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"/renderer/Layout.css"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#032F62"},children:"/renderer/Header.{jsx,vue}"}),e.jsx(n.span,{style:{color:"#6A737D"},children:" # Website header used for every page"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#032F62"},children:"/renderer/Footer.{jsx,vue}"}),e.jsx(n.span,{style:{color:"#6A737D"},children:" # Website footer used for every page"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#032F62"},children:"/renderer/logo.svg"}),e.jsx(n.span,{style:{color:"#6A737D"},children:" # Website logo (favicon and used by <Header>)"})]})]})})}),`
`,e.jsxs(n.p,{children:["The hooks ",e.jsx(n.code,{children:"/renderer/+onRender{Html,Client}.js"})," apply as default to all pages ",e.jsx(n.code,{children:"/pages/**/+Page.js"}),"."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"renderer/"})," directory doesn't add any functionality: defining the hooks ",e.jsx(n.code,{children:"+onRender{Html,Client}.js"})," at ",e.jsx(n.code,{children:"/renderer/"})," is equivalent to defining them at ",e.jsx(n.code,{children:"/pages/"})," or ",e.jsx(n.code,{children:"/"}),". It's just an optional convenience for moving rendering logic outside of ",e.jsx(n.code,{children:"pages/"}),": in order to avoid cluttering the ",e.jsx(n.code,{children:"pages/"})," directory and to organize and put all rendering code in one place."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"renderer/"})," directory isn't like the ",e.jsx(i,{href:"#ignored-directories",children:"list of ignored directories"})," because not only is it ignored by Filesystem Routing but it's also ignored by ",e.jsx(i,{href:"/config#inheritance",children:"config inheritance"}),"."]}),`
`]}),`
`,e.jsx(l,{children:e.jsxs(n.p,{children:["We recommend defining a ",e.jsx(n.code,{children:"renderer/"})," directory only if you are implementing a custom UI framework (React/Vue/Solid/...) integration."]})}),`
`,e.jsx("h2",{id:"see-also",children:"See also"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"/routing#filesystem-routing"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"/file-structure"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"/filesystemRoutingRoot"}),`
`]}),`
`]})]})}function h(r={}){const{wrapper:n}=r.components||{};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:h,pageSectionsExport:c},Symbol.toStringTag,{value:"Module"})),L={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:t}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:o}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:a}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/filesystem-routing/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:p}}};export{L as configValuesSerialized};
