# Exécuter des programmes
### Rendre un fichier executable
<br/>
<p v-click class="border-1 border-separate p2">Comme nous l'avions vu sur la partie des droits. Tous les fichiers en sont pas exécutables</p>

<div v-after>
Sur Windows, on détermine d'après l'extension (.exe) si un fichier est exécutable. Sur Linux, tous les fichiers peuvent être exécuté, et il s'agit plutôt d'une question de permissions. 
 
<br/>
```bash
chmod +x test.sh
```
  
<br/>
</div>

---
transition: fade-out
hideInToc: true

---

# Exécuter des programmes
### Utiliser son répertoire de binaires
<br/>

<p v-click class="border-1 border-separate p2">Finalement dans votre terminal, chaque commande est un exécutable (vous pouvez utiliser which pour le voir)</p>
<br/>

<p v-click class="border-1 border-separate p2">Pour rendre un fichier exécutable partout, et facilement depuis votre terminal, il suffit de le stocker dans /usr/bin</p>