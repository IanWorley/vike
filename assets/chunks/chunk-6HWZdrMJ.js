import{j as e,R as j}from"./chunk-BcpqjoRF.js";import{L as l}from"./chunk-DdfiwLvj.js";/* empty css              *//* empty css              *//* empty css              */function F({name:x,noLink:c,succinct:a,plural:m,comma:d,list:n=["vike-react","vike-vue","vike-solid"]}){if(a)return e.jsx("code",{children:"vike-{react,vue,solid}"});let s=e.jsx(e.Fragment,{children:n.map((r,i)=>{let t=e.jsx("code",{children:r});c||(t=e.jsx(l,{href:`/${r}`,children:t}));const f=i===n.length-1,h=i===n.length-2;if(!f){let o="/";d&&(h?o=", or ":o=", "),t=e.jsxs(e.Fragment,{children:[t,o]})}return e.jsx(j.Fragment,{children:t},r)})});if(!x){const r=`Vike extension${m?"s":""}`,i=c?r:e.jsx(l,{href:"/extensions",children:r});s=e.jsxs(e.Fragment,{children:["UI framework ",i," ",s]})}return s}export{F as U};