# Le terminal et sa customisation
### Les différents terminaux

<br/>

- Bash : Standard Linux
- Zsh : Plus souple, par défault sur Mac
- Oh-my-zsh : plugin pour Zsh
  
<br/>
<p v-click class="border-1 border-separate p2">Beaucoup de paramètres sont customisables sur votre terminal. On peut ajuster l'affichage, configurer des plugins comme git, etc.</p>

---
transition: fade-out
hideInToc: true

---

# Le terminal et sa customisation
### Les différents éditeurs de textes
<br/>

- 📝 [Nano](https://doc.ubuntu-fr.org/nano)
- 🎨 [Vi (-> Vim | NeoVim)](https://www.vim.org/)
- 🧑‍💻 [Emacs](https://www.gnu.org/software/emacs/)
  

---
transition: fade-out
hideInToc: true
---

# Le terminal et sa customisation
### Créer des [alias](https://linuxhint.com/configure-use-aliases-zsh/)

<br/>
```bash
alias down="sudo shutdown -h now"
alias <flag> <alias_name>=”command”
```  

<br/>
<p v-click class="opacity-90 border-1 border-separate p2">La convention est de créer un fichier dédié contenant vos alias. Puis de l'importer dans votre .zshrc (fichier de configuration zsh) ou .bashrc

```bash
source ~/.zsh_aliases
```

</p>




---
transition: fade-out
hideInToc: true
---

# Le terminal et sa customisation
### Chainer des commandes
<p v-click class="opacity-90 border-1 border-separate p2">Pour exécuter des commandes en chaine, on peut utiliser le &&. Il permet de lancer la commande suivante seulement si la première commande a réussi.</p>


<p v-click class="opacity-90 border-1 border-separate p2">L'élément || permet lui de lancer la commande suivante seulement si la première commande a échoué.</p>

<img v-click
    class="w-100"
    src="assets/chaining_commands.png"
/>

<p v-click class="opacity-90 border-1 border-separate p2">L'élément > permet d'envoyer le résultat d'une commande dans un fichier (>> pour ajouter au bout du fichier)</p>

