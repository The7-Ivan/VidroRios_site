import{j as e,r as l}from"./app-MPq63KrU.js";import{m,P as x,g as u,C as h}from"./Pagination-n9EjpxEp.js";import{h as g}from"./BackgroundImg-YS2V-mfr.js";import{g as j}from"./Categories-_eHUGqB_.js";import"./Vidrorios-9cFbAeW9.js";import"./vrwhite_logo-0Siequss.js";function p(){return e.jsxs("div",{className:"relative w-full h-[400px]",children:[e.jsx("img",{src:g,alt:"contatos imagem de topo",className:"w-full h-full object-cover"}),e.jsx("div",{className:"absolute top-0 w-full h-full flex items-center justify-center",children:e.jsx("img",{src:m,alt:"Logo branca do topo da barra",className:"max-w-[600px] mt-20"})})]})}function w({selectedCategory:a,searchTerm:t}){const[o,i]=l.useState([]),[f,r]=l.useState([]);return l.useEffect(()=>{(async()=>{const c=await u();i(c)})()},[]),l.useEffect(()=>{let s=o;if(t){const c=t.toLowerCase();s=s.filter(n=>n.name.toLowerCase().includes(c)||n.categories&&n.categories.some(d=>d.category.toLowerCase().includes(c)))}a&&(s=s.filter(c=>c.categories&&c.categories.some(n=>n.category===a))),r(s)},[a,t,o]),e.jsx(x,{productsData:f})}function N({category:a}){const[t,o]=l.useState(null);return l.useEffect(()=>{a&&(async()=>{const r=(await j()).find(s=>s.category===a);r&&o(r)})()},[a]),e.jsxs("div",{className:"w-[200px] h-full flex flex-col",children:[t&&e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:t.image,alt:t.category,className:"w-[200px] aspect-vertical"}),e.jsx("div",{className:"absolute top-0 h-full w-full flex items-center",children:e.jsx("div",{className:"h-[55%] w-full bg-white/40 flex flex-col justify-center items-center",children:e.jsx("h4",{className:"font-bold text-[24px] text-black",children:t.category})})})]}),e.jsx("p",{className:"text-center text-black mt-2",children:t==null?void 0:t.description})]})}function P(){const[a,t]=l.useState("Destaque"),[o,i]=l.useState(""),f=s=>{t(s),i("")},r=s=>{i(s),t("")};return e.jsxs("div",{className:"w-full",children:[e.jsx("section",{id:"Header",children:e.jsx(p,{})}),e.jsxs("section",{id:"Body",className:"w-full min-h-[730px] flex bg-blue-200 flex",children:[e.jsx("section",{id:"Categories-container",className:"w-[20%]",children:e.jsx(h,{onCategorySelect:f,onSearchTermChange:r})}),e.jsx("section",{id:"store-container",className:"relative w-full",children:e.jsxs("div",{className:"relative w-full h-full flex py-4",children:[e.jsx("div",{className:"w-[300px] flex flex-col gap-2 itens-center mt-2 ml-2",children:e.jsx(N,{category:a})}),e.jsx(w,{selectedCategory:a,searchTerm:o})]})})]})]})}export{P as default};