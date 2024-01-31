# Passage à la pratique !
### A. Naviguer sur son ordinateur
<p v-click class="opacity-90 border-1 border-separate p2">Dans l'ensemble des sessions pratiques, les commandes "man" et "tldr" sont vos amies !</p>

1. ouvrez un terminal, et utiliser une commande pour connaitre le chemin de là ou vous vous trouvez
2. Comment remonter dans l'arborescence d'un étage ?
3. Comment accéder en une ligne à un dossier particulier ?
4. Utilisez la commande tree pour afficher l'arborescence avec 2 niveaux de profondeurs de votre Home.
5. Comment lister la liste des fichiers, incluant les fichiers cachés dans le répertoire /usr/bin ?

---
transition: fade-out
hideInToc: true
---

# Passage à la pratique !
### B. Manipuler des alias

1. Installez un alias "show" qui, lorsqu'on l'utilise "show filtre" renvoie la liste des fichiers du dossier courant dont le nom contient "filtre". Par exemple "show test" doit renvoyer tous les fichier qui contiennent le mot test.
2. Utilisez la commande "alias" pour obtenir la définition de votre alias
3. Quel binaire est exécuté lorsque l'on utilise la commande "shutdown" ?

---
transition: fade-out
hideInToc: true
---

# Passage à la pratique !
### C. Créer des fichiers

<p v-click class="opacity-90 border-1 border-separate p2">Pour quittez vim sans sauvegarder, vous pouvez utiliser ":q!" commme combinaison ou ":wq" pour sauvegarder.</p>

1. Utilisez vim pour créer un fichier "exercice.txt"
2. Copiez collez le texte suivant dans le fichier, en utilisant le mode Insertion (touche "i") de vim puis ctrl + v (ou ctrl + maj + v)
   <div>
   Just like Windows, iOS, and Mac OS, Linux is an operating system. In fact, one of the most popular platforms on the planet, Android, is powered by the Linux operating system. An operating system is software that manages all of the hardware resources associated with your desktop or laptop. To put it simply, the operating system manages the communication between your software and your hardware. Without the operating system (OS), the software wouldn’t function.</div>

3. Enregistrez le fichier et quittez vim (:wq)
4. Depuis votre terminal, Ajouter une ligne au bout du fichier à l'aide de ">>"
5. Créez un fichier "script" en bash/shell, rendez le exécutable à l'aide de la commande chmod
6. Ce script doit faire une boucle pour afficher (commande "echo") 10 lignes :
   1. Ligne 1
   2. Ligne 2
   3. etc.
7. Le script peut être utilisé de la façon suivante : "sh script"
8. Déplacez le script dans /usr/bin pour pouvoir peu importe le dossier ou vous vous trouvez
9. Modifier le script pour qu'il puisse prendre un argument et afficher le nombre de ligne en conséquence : "script 5" ne renverra que 5 lignes.


<p v-click class="opacity-90 border-1 border-separate p2">Vim et Neovim sont des outils très puissants pour gérer du texte (et donc du code). Un tutoriel est intégré et permet de rapidement construire des automatismes pour ceux qui seraient intéressés !</p>



---
transition: fade-out
hideInToc: true
---

# Passage à la pratique !
### D. Se repérer dans un fichier texte

1. Télécharger le fichier html suivant à l'aide de la commande curl
   1. https://agilemanifesto.org/principles.html
2. Utilisez la commande grep pour retourner toute les lignes contenant le mot "software"
3. Pouvez vous afficher toute les lignes les précédant ?
4. Utilisez la commande cat pour afficher l'ensemble du fichier
5. Utilisez la commande tail pour afficher les 20 dernières lignes du fichier


---
transition: fade-out
hideInToc: true
---

# Passage à la pratique !
### E. Manipuler des logs


<p v-click class="opacity-90 border-1 border-separate p2">Beaucoup de programmes tournent en parallèle sur des systèmes linux. Les logs sont par défaut localisés dans /var/log</p>

1. Les logs systèmes sont écrites en temps réel dans le fichier /var/log/syslog : Affichez ces logs en temps réel dans votre terminal via la commande tail
2. Use command "grep" to visualize all errors in system logs
3. Dans beaucoup de systèmes les logs, ou d'autres fichiers sont au format JSON
   1. Faites un appel à l'api OpenWeather : https://openweathermap.org/api/one-call-3 pour connaitre les métriques météo d'Orléans.
   2. Stocker le résultat de cet appel dans un fichier .json
   3. Utilisez l'utilitaire jq pour extraire la vitesse du vent (wind_speed)
   4. Concevez un programme bash "meteo" de telle sorte qu'il affiche la vitesse du vent pour n'importe quelle latitude et longitude.


---
transition: fade-out
hideInToc: true
---

# Passage à la pratique !
### F. Bonus