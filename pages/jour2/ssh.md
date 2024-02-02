# Protocole SSH
### Qu'est ce que c'est ?
<p v-click class="border-1 border-separate p2">Le protocole SSH est un protocole  de chiffrement asynchrone qui permet d'échanger des données de manière sécurisée.</p>

<p v-click class="border-1 border-separate p2">Il repose donc sur l'utilisateur d'une clé privée (secrète) et d'une clé publique (disponible pour tous).</p>


<div v-click>

### Comment génèrer une clé ?

<p v-after class="border-1 border-separate p2">Pour générer une clé SSH on peut s'aider de la commande ssh-keygen. </p>

<p v-click class="border-1 border-separate p2">
A noter que les algorithmes RSA ne sont plus assez sécurisés et on conseille les algorithmes ed (coubes elliptiques), comme vous le verrez en partie pratique.</p>

</div>

---
transition: fade-out
hideInToc: true
---
# Protocole SSH
### Autoriser la connection sur un serveur
<p v-click class="border-1 border-separate p2">En déposant votre clé publique sur un serveur, dans le fichier authorized_keys (répertoire .ssh). Vous permettez une connection à distance via le protocole SSH (port 22) au serveur.</p>