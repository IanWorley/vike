import{j as e,L as a,o as i,i as s}from"../chunks/chunk-DW3tnpWi.js";import{L as n}from"../chunks/chunk-CbtbT8cm.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-OYyQQBLV.js";/* empty css                      *//* empty css                      */const l=[];function r(o){const t={blockquote:"blockquote",code:"code",p:"p",strong:"strong",...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.p,{children:"When you deploy a new version, then any user currently browsing your (now outdated) frontend will automatically transition to the new frontend as soon as the user navigates to a new page."}),`
`,e.jsxs(t.p,{children:["This works for both ",e.jsx(n,{text:"Server Routing",href:"/server-routing"})," and ",e.jsx(n,{text:"Client Routing",href:"/client-routing"}),"."]}),`
`,e.jsx(t.p,{children:"Everything is handled automatically and there is nothing for you to do."}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"What is the deployment synchronization problem?"})}),`
`,e.jsx(t.p,{children:"The problem is this: when you deploy a new frontend, what should happen to your users that are currently browsing your frontend?"}),`
`,e.jsxs(t.p,{children:["If you do nothing, and if your app uses ",e.jsx(n,{text:"Client Routing",href:"/client-routing"}),", then your users may end up staying a very long time on your outdated frontend with outdated client-side JavaScript. This may lead to many problems such as out-of-sync data requests and mutations."]}),`
`,e.jsx(t.p,{children:"Reloading the page of your users as soon as a new frontend deployment is detected is a no-go: it disrupts your user's activity on your website and your user may lose ephemeral client-side state such as the text he entered in a form or in a comment textarea."}),`
`,e.jsx(t.p,{children:'What many websites do is to show a little popup to users saying "a new version is available, click here to reload". But this solution is far from ideal.'}),`
`,e.jsx(t.p,{children:"What Vike does instead is that it falls back to Server Routing: the next time the user navigates to a new page, the page does a full reload so that the user loads the new frontend."}),`
`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"How does Vike's solution work?"})}),`
`,e.jsxs(t.p,{children:["Vike temporarily falls back to ",e.jsx(n,{text:"Server Routing",href:"/server-routing"})," whenever retrieving a static asset returns a ",e.jsx(t.code,{children:"404"}),": the URL of all static assets contain a unique hash and, consequently, when the user navigates to a new page then the old frontend requests static asset URLs that don't exist anymore."]}),`
`,e.jsx(t.p,{children:"With Server Routing, when the user navigates to a new page, the entire client-side is reloaded (i.e. the new frontend is loaded). After the reload, Client Routing is resumed."}),`
`,e.jsxs(t.p,{children:["Note that, since the client-side is fully reloaded, all client state is lost if not persisted (to ",e.jsx(t.code,{children:"window.localStorage"}),", for instance)."]}),`
`,e.jsx(t.p,{children:"So far, this strategy has shown to work out for all users, but if it doesn't work out for you then open a new GitHub issue."}),`
`]})]})}function d(o={}){const{wrapper:t}=o.components||{};return t?e.jsx(t,{...o,children:e.jsx(r,{...o})}):r(o)}const u=Object.freeze(Object.defineProperty({__proto__:null,default:d,pageSectionsExport:l},Symbol.toStringTag,{value:"Module"})),j={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:a}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:i}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:s}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/deploy-sync/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}}};export{j as configValuesSerialized};