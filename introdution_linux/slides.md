---
theme: seriph
background: https://images.unsplash.com/photo-1511300636408-a63a89df3482?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
class: text-center
highlighter: shikiji
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
transition: slide-left
title: Introduction à Linux
mdc: true
hideInToc: true
---

# Introduction à Linux

Marius Ambayrac, 1-2 Février 2024

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    <carbon:arrow-right class="inline"/>
  </span>
</div>



<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
transition: fade-out
hideInToc: true
---

<div class="flex">
  <img
    class="w-50 border-3 rounded-80"
    src="assets/Profil.png"
    alt="marius_ambayrac"
  />
  <div class="mx-20 mt-20">
    <div class="text-3xl">
    Marius Ambayrac
    </div>
    Head of Engineering @Gojob
  </div>
</div>

<br> </br>
<br> </br>

- Introduction à Linux (2 jours)
- Introduction à Docker et à la conteneurisation (2 jours)
- Gestion de projets Informatiques (5 jours)
  
<!-- <div class="grid pt-40 gap-4 grid-cols-[100px,1fr] animate-bounce-alt">

### Name

- Item 1
- Item 2

</div> -->


<!--
Vous me reverrez également pour vos projets en autonomie en fin d'année ou je viendrai 1 jours pour vous accompagner.
-->

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
transition: fade-out
hideInToc: true
---

# Plan du Cours



<Toc maxDepth="1"></Toc>



---
src: ./pages/origin-linux.md
transition: fade-out
---



---
src: ./pages/files-and-permissions.md
transition: fade-out
---


---
src: ./pages/documentation.md
transition: fade-out
---

---
src: ./pages/terminal.md
transition: fade-out
---

---
src: ./pages/let's practice.md
transition: fade-out
---


---
layout: center
class: text-center
---

# Learn More

[Documentations](https://sli.dev) · [GitHub](https://github.com/slidevjs/slidev) · [Showcases](https://sli.dev/showcases.html)
