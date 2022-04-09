# Anko

Anko est un simple bot codé en JavaScript.

## Installation et démarrage (Windows)

### Requis
Vous allez avoir besoin de Nodejs. Installation : https://nodejs.org/dist/v14.17.4/node-v14.17.4-x64.msi // ¨Pour les autres platformes, cliquez ici https://nodejs.org/ et choisissez votre plateforme en cliquant sur "Other Downloads".
![chrome_mY1RZnZr2F](https://user-images.githubusercontent.com/76608613/127999616-7cc00ce4-7f61-41f7-ae71-12ccb4f38949.png)

Vous allez avoir besoin d'un éditeur de code. Visual Studio Code est suffisant pour cela. Téléchargez-le ici : https://code.visualstudio.com/
![chrome_VMCu9gHRo4](https://user-images.githubusercontent.com/76608613/127999498-2dff368b-c9c3-4d21-93a6-32bd0512b2a9.png)

Vous allez avoir besoin d'un bot créé sur https://discord.com/developers/applications.
Après cela, invitez le bot sur votre serveur, et copiez le token, vous allez en avoir besoin pour lancer le script. (Je ne vais pas vous expliquer comment inviter le bot ni comment copier le token, il y a plein de tutos sur YouTube).

### Installation

Déjà, vous devrez télécharger le zip de la dernière release et l'extraire.
Ensuite vous devrez ouvrir un terminal.

Entrez les commandes suivantes:
```bash
~$ cd PATH\TO\THE\BOT\FOLDER
~$ npm install
```
*Remplacez PATH\TO\THE\BOT\FOLDER avec le chemin où les fichiers ont été extraits*

### Démarrage

Ouvrez le fichiez *main.js* avec votre éditeur de code.

Cherchez cette ligne:
```javascript
bot.login("YOUR_TOKEN");
```

Remplacez le `YOUR_TOKEN` avec le token de votre bot. N'oubliez pas de le laisser entre guillemets ! Autrement cela ne marchera pas.

Sauvegardez le fichier avec `CTRL+S`.

Retournez sur votre terminal, vérifiez que vous êtes bien dans le dossier du bot, puis lancez la commande :
```bash
~$ node ./main.js
```

Et ça devrait être bon ! Si cela fonctionne, la console vous retournera le message suivant :
```shell
Anko est en ligne.
```

Si vous avez une question, ou un problème, n'hésitez pas à me contacter sur Discord (Loisu#4816). Merci d'être concis(e) dans votre demande.

### Profitez!



