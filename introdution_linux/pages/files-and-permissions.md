# L'arborescence de fichier et les permissions
### Dossiers, fichiers, liens symboliques et exécutables


<p v-click class="opacity-90 border-1 border-separate p2">Sur les systèmes Unix, l'extension n'est pas obligatoire.</p>

<br/>
<div v-click>
```mermaid {theme: 'neutral', scale: 0.8}
graph LR
B[📁 src] --> C[📄 index.html]
B[📁 src] --> D[🚀 execute.sh]
B[📁 src] --> E[🚀 execute_me]
```

</div>

<p v-click class="opacity-90 border-1 border-separate p2">Sur les systèmes Unix, on utilise la notion de lien symbolique (= raccourci)

```mermaid {theme: 'neutral', scale: 0.8}
graph LR
launch -.->|Symbolic Link| C[📄 index.html]
```
</p>



---
transition: fade-out
hideInToc: true
---
# L'arborescence de fichier et les permissions
### Les droits et permissions

<p class="opacity-90 border-1 border-separate p2">
<span v-click>d
</span>
<span v-click>rwx
</span>
<span v-click>r-x
</span>
<span v-click>r-x
</span>
</p>

<p class="opacity-90 border-1 border-separate p2">
<span v-click>Type
</span>
<span v-click>Permission_propriétaire
</span>
<span v-click>Permission_groupe
</span>
<span v-click>Permission_publique
</span>
</p>

<br/>


<p v-click class="opacity-90 border-1 border-separate p2">
Exemple : 
- rwx r-- r--
</p>


<p v-click class="opacity-80 border-1 border-separate p2">⚠️ ⚠️     &nbsp; &nbsp;Attention, modifier les permissions de certains fichiers peut casser certains programmes (ex: clé ssh)</p>

[Documentation officielle](https://doc.ubuntu-fr.org/permissions#explication_par_l_exemple)

<!--
d : type de ressource (dossier, fichier, lien symbolique, socket, etc.)
triplet : permission du propriétaire
triplet : permission du groupe
triplet : permission générale
-->