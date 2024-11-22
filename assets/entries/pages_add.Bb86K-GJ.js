import{j as e,b as r,L as a,o,i as d}from"../chunks/chunk-Ob4EiYc1.js";import{L as n}from"../chunks/chunk-Cb6If-mG.js";/* empty css                      *//* empty css                      *//* empty css                      */import{U as t}from"../chunks/chunk-BcYhKxlY.js";/* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-BhjItjud.js";/* empty css                      *//* empty css                      */const h=[{pageSectionId:"see-also",pageSectionLevel:2,pageSectionTitle:"See also"}];function l(s){const i={a:"a",blockquote:"blockquote",code:"code",li:"li",ol:"ol",p:"p",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(i.p,{children:["The following shows how to add SSR / ",e.jsx(n,{href:"/pre-rendering",children:"pre-rendering (aka SSG)"})," to an existing ",e.jsx(i.a,{href:"https://vitejs.dev",children:"Vite"})," app:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/brillout/vite-to-vike",children:"Example of adding SSR/SSG to a Vite + React app"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/brillout/vite-to-vike/tree/vue",children:"Example of adding SSR/SSG to a Vite + Vue app"})}),`
`]}),`
`,e.jsx(i.p,{children:"It showcases how to do so in a step-by-step, progressive, and customizable fashion:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Choose between SSR and pre-rendering (SSG)."}),`
`,e.jsxs(i.li,{children:["With or without ",e.jsx(t,{name:!0,list:["vike-react","vike-vue"]}),"."]}),`
`,e.jsxs(i.li,{children:["With ",e.jsx(n,{href:"/server-routing",children:"Server Routing"})," or ",e.jsx(n,{href:"/client-routing",children:"Client Routing"}),"."]}),`
`,e.jsx(i.li,{children:"Progressively migrate towards the stack you (eventually) want."}),`
`]}),`
`,e.jsxs(i.p,{children:["You can choose whether you want to migrate towards a full-fledged SSR/SSG framework DX (like Next.js and Nuxt by using ",e.jsx(t,{name:!0}),"), or add a minimal SSR/SSG implementation (applying a minimal amount of changes to your existing code), or something in-between."]}),`
`,e.jsx(i.p,{children:"This way, you can move quickly while progressively choosing your stack as you go."}),`
`,e.jsx(i.p,{children:"On a high-level, this is how you add Vike to your existing Vite app:"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["Add Vike to your ",e.jsx(i.code,{children:"vite.config.js"}),"."]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Example: ",e.jsx(r,{path:"/boilerplates/boilerplate-react/vite.config.js"})]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:"Either:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Enable pre-rendering, or",`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:["See ",e.jsx(n,{href:"/pre-rendering"})]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:["add a ",e.jsx(n,{href:"/express",children:"Express.js"}),"/",e.jsx(n,{href:"/hono",children:"Hono"}),"/",e.jsx(n,{href:"/fastify",children:"Fastify"}),"/",e.jsx(n,{href:"/servers",children:"..."})," server (or add ",e.jsx(n,{href:"/renderPage",children:"Vike's server middleware"})," if you already have one).",`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:["Example: ",e.jsx(r,{path:"/boilerplates/boilerplate-react/server/index.js"})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:"Either:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Use ",e.jsx(t,{name:!0}),", or"]}),`
`,e.jsxs(i.li,{children:["define ",e.jsx(n,{href:"/onAfterRenderClient",children:e.jsx(i.code,{children:"+onRenderClient.js"})})," and ",e.jsx(n,{href:"/onRenderHtml",children:e.jsx(i.code,{children:"+onRenderHtml.js"})}),".",`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:"Examples:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsx(r,{text:"Vue",path:"/boilerplates/boilerplate-vue/renderer/"}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(r,{text:"Vue + TypeScript",path:"/boilerplates/boilerplate-vue-ts/renderer/"}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(r,{text:"React",path:"/boilerplates/boilerplate-react/renderer/"}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(r,{text:"React + TypeScript",path:"/boilerplates/boilerplate-react-ts/renderer/"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["Create your first ",e.jsx(n,{href:"/Page",children:e.jsx(i.code,{children:"+Page.js"})})," file."]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:"Examples:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsx(r,{text:"Vue",path:"/boilerplates/boilerplate-vue/pages/index/+Page.vue"}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(r,{text:"Vue + TypeScript",path:"/boilerplates/boilerplate-vue-ts/pages/index/+Page.vue"}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(r,{text:"React",path:"/boilerplates/boilerplate-react/pages/index/+Page.jsx"}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(r,{text:"React + TypeScript",path:"/boilerplates/boilerplate-react-ts/pages/index/+Page.tsx"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx("h2",{id:"see-also",children:"See also"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsx(n,{href:"/new"}),`
`]}),`
`,e.jsx(i.li,{children:e.jsxs(i.a,{href:"https://github.com/vikejs/vike/tree/main/boilerplates",children:["GitHub > ",e.jsx(i.code,{children:"vikejs/vike"})," > ",e.jsx(i.code,{children:"boilerplates/"})]})}),`
`,e.jsx(i.li,{children:e.jsxs(i.a,{href:"https://github.com/vikejs/vike/tree/main/examples/react-minimal",children:["GitHub > ",e.jsx(i.code,{children:"vikejs/vike"})," > ",e.jsx(i.code,{children:"examples/react-minimal"})]})}),`
`,e.jsx(i.li,{children:e.jsxs(i.a,{href:"https://github.com/vikejs/vike/tree/main/examples/react-full",children:["GitHub > ",e.jsx(i.code,{children:"vikejs/vike"})," > ",e.jsx(i.code,{children:"examples/react-full"})]})}),`
`,e.jsx(i.li,{children:e.jsxs(i.a,{href:"https://github.com/vikejs/vike/tree/main/examples/vue-minimal",children:["GitHub > ",e.jsx(i.code,{children:"vikejs/vike"})," > ",e.jsx(i.code,{children:"examples/vue-minimal"})]})}),`
`,e.jsx(i.li,{children:e.jsxs(i.a,{href:"https://github.com/vikejs/vike/tree/main/examples/vue-full",children:["GitHub > ",e.jsx(i.code,{children:"vikejs/vike"})," > ",e.jsx(i.code,{children:"examples/vue-full"})]})}),`
`]})]})}function c(s={}){const{wrapper:i}=s.components||{};return i?e.jsx(i,{...s,children:e.jsx(l,{...s})}):l(s)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:c,pageSectionsExport:h},Symbol.toStringTag,{value:"Module"})),T={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:a}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:o}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:d}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/add/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:p}}};export{T as configValuesSerialized};
