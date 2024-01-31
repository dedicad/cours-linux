import{d as m,u as _,a as u,c as d,b as p,r as h,e as a,f as t,t as s,g as i,F as f,h as g,n as v,i as x,o as n,j as y,k as b,l as N,m as k,_ as P}from"./index-7nLnfWjx.js";import{N as w}from"./NoteDisplay-827ayxWe.js";const D={class:"m-4"},L={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},V={class:"opacity-50"},C={class:"text-lg"},E={class:"font-bold flex gap-2"},M={class:"opacity-50"},T=t("div",{class:"flex-auto"},null,-1),B={key:0,class:"border-gray-400/50 mb-8"},F=m({__name:"PresenterPrint",setup(H){_(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${d.title}`});const l=p(()=>h.map(o=>{var r;return(r=o.meta)==null?void 0:r.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,r)=>(n(),a("div",{id:"page-root",style:v(i(x))},[t("div",D,[t("div",L,[t("h1",S,s(i(d).title),1),t("div",V,s(new Date().toLocaleString()),1)]),(n(!0),a(f,null,g(l.value,(e,c)=>(n(),a("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",E,[t("div",M,s(e==null?void 0:e.no)+"/"+s(i(y)),1),b(" "+s(e==null?void 0:e.title)+" ",1),T])]),N(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<l.value.length-1?(n(),a("hr",B)):k("v-if",!0)]))),128))])],4))}}),A=P(F,[["__file","/media/dedicad/Data/Mes dossiers/Documents/Administratif/Micro-Entreprise/Coda School/Cours/Introduction à Linux - Février/introdution_linux/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{A as default};
