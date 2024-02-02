# Mécanismes de cron et de daemon (systemd/systemctl)
### Cron
<p v-click class="border-1 border-separate p2">Le système de Cron permet de lancer des tâches à intervalles réguliers. L'exemple classique est le backup/sauvegarder. </p>


<div v-after>
La commande suivante permet de lister les crons de l'utilisateur actuel : 


```bash
crontab -l
```
  
</div>

<div v-click>

### Systemctl

<p v-after class="border-1 border-separate p2">Linux propose un système pour lancer des services sur l'ordinateur. Systemctl permet de lancer des services automatiquement au démarrage de l'ordinateur, de sauvegarder leur configuration de lancement, etc. </p>

</div>