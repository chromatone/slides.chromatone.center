import{d as c,i as d,a as m,f as n,E as s,g as r,t as a,o as l,_ as u}from"./index-50fe32cb.js";const v=["innerHTML"],f=["textContent"],k=["textContent"],y=c({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup(p){const o=p;return d(m),(e,t)=>e.noteHtml?(l(),n("div",{key:0,class:s(["prose overflow-auto outline-none",o.class]),onClick:t[0]||(t[0]=i=>e.$emit("click")),innerHTML:e.noteHtml},null,10,v)):e.note?(l(),n("div",{key:1,class:s(["prose overflow-auto outline-none",o.class]),onClick:t[1]||(t[1]=i=>e.$emit("click"))},[r("p",{textContent:a(e.note)},null,8,f)],2)):(l(),n("div",{key:2,class:s(["prose overflow-auto outline-none opacity-50 italic",o.class]),onClick:t[2]||(t[2]=i=>e.$emit("click"))},[r("p",{textContent:a(o.placeholder||"No notes.")},null,8,k)],2))}}),_=u(y,[["__file","/home/runner/work/slides.chromatone.center/slides.chromatone.center/node_modules/.pnpm/@slidev+client@0.42.11_postcss@8.4.29_vite@4.4.9/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{_ as N};