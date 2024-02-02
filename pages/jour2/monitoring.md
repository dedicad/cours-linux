# Monitoring de système
### Observer les processus
<p v-click class="border-1 border-separate p2">Beaucoup de processus tournent en même temps sur votre ordinateur. Il est primordial de pouvoir comprendre ce qui est lancé (souvent pour arrêter / contrôler certains programmes).</p>


<div v-after>
Les commandes ps ; top ; htop permettent d'observer le CPU, la RAM consommé ainsi que d'autres métriques.
</div>


<img v-click
    class="w-100"
    src="assets/htop.png"
    alt="htop"
/> 
  


---
transition: fade-out
hideInToc: true
---
# Monitoring de système
### Observer les ports réseaux utilisés

<p v-click class="border-1 border-separate p2">La commande Netstats permet d'observer l'utilisation des ports réseaux de votre ordinateur. On distinguera 2 types de protocoles réseaux : 
TCP et UDP</p>


<img v-click
    class="w-150"
    src="assets/netstat.png"
    alt="htop"
/> 

---
transition: fade-out
hideInToc: true
---
# Monitoring de système
### Arrêter un programme

<p v-click class="border-1 border-separate p2">Pour arrêter un programme on peut utiliser la commande kill. kill -9 est utilisé pour forcer l'arrêt (avec les risques que cela comporte)</p>


<p v-click class="border-1 border-separate p2">Pour la partie réseau, il est possible (et fréquent) de vouloir verrouiller les ports de son server : en interdisant certains ports. 
Par exemple le port 22 n'est pas autorisé sur le WIFI de l'école.
L'outils utilisé se nomme "Firewall". On peut utiliser ufw sur ubuntu pour tester un firewall sur son ordinateur. Cela permet par exemple de bloquer un port réseau donné.</p>


