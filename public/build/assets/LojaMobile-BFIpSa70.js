import{j as e,r as o}from"./app-MPq63KrU.js";import{m as u,P as d,g as x,C as g}from"./Pagination-n9EjpxEp.js";import{h}from"./BackgroundImg-YS2V-mfr.js";import{g as j}from"./Categories-_eHUGqB_.js";import{M as p,a as w}from"./MobileFooter-Wc0_JcNG.js";import"./Vidrorios-9cFbAeW9.js";import"./vrwhite_logo-0Siequss.js";function b(){return e.jsxs("div",{className:"relative w-full h-[200px]",children:[e.jsx("img",{src:h,alt:"contatos imagem de topo",className:"w-full h-full object-cover"}),e.jsx("div",{className:"absolute top-0 w-full h-full flex items-center justify-center",children:e.jsx("img",{src:u,alt:"Logo branca do topo da barra",className:"max-w-[75%]"})})]})}function C({category:a}){const[t,r]=o.useState(null);return o.useEffect(()=>{a&&(async()=>{const c=(await j()).find(s=>s.category===a);c&&r(c)})()},[a]),e.jsxs("div",{className:"w-full flex flex-col items-center px-4 mt-4",children:[t&&e.jsx("div",{className:"w-full",children:e.jsx(p,{title:t==null?void 0:t.category})}),e.jsx("p",{className:"text-center text-[10px] text-black mt-2",children:t==null?void 0:t.description})]})}function y({selectedCategory:a,searchTerm:t}){const[r,i]=o.useState([]),[f,c]=o.useState([]);return o.useEffect(()=>{(async()=>{const l=await x();i(l)})()},[]),o.useEffect(()=>{let s=r;if(t){const l=t.toLowerCase();s=s.filter(n=>n.name.toLowerCase().includes(l)||n.categories&&n.categories.some(m=>m.category.toLowerCase().includes(l)))}a&&(s=s.filter(l=>l.categories&&l.categories.some(n=>n.category===a))),c(s)},[a,t,r]),e.jsx(d,{productsData:f,isMobile:!0})}function E(){const[a,t]=o.useState("Destaque"),[r,i]=o.useState(""),f=s=>{t(s),i("")},c=s=>{i(s),t("")};return e.jsxs("div",{className:"w-full h-full flex flex-col justify-between",children:[e.jsx("section",{id:"header",className:"",children:e.jsx(b,{})}),e.jsx("section",{className:"",children:e.jsx(g,{onCategorySelect:f,onSearchTermChange:c,device:"mobile"})}),e.jsxs("section",{className:"w-full grow flex flex-col bg-gray-100",children:[e.jsx(C,{category:a}),e.jsx(y,{selectedCategory:a,searchTerm:r})]}),e.jsx("section",{id:"Loja_Mobile_Footer",className:"w-full px-4 flex flex-col items-center my-10",children:e.jsx(w,{})})]})}export{E as default};
