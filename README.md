# GIT méchaniques
Pas de commit direct sur master, mise en place de 3 types de branches : `feature`, `patch`, `hotfix`. Tout code qui souhaite être pushé sur master doit faire l’objet d’une pull request et être revu par un ou plusieurs devs. Git permet facilement de faire ça.

Une PR (pull request) fait l’object d’un message sur slack dans le channel `#dev` avec la notification `@channel` afin que si besoin un thread de discussion y soit ouvert et que chacun soit au courant de ce qui souhaite être mergé sur master.

*Important* : aucun dev ne devrait lui même merger son propre code sur master !

- Un branche de type feature/ma_jolie_feature est nécessaire lorsque l’on travaille sur une portion de code importante liée à une fonctionnalité
- Une branche de type patch/mon_joli_patch est une correction non urgente de bug, un refactor, ou modification mineure qui ne nécessite pas de tests significatifs
- Une branche de type hotfix est comme son nom l’indique un correctif urgent à déployer lors de la prochaine release.


# INSTALL

First step, you have obviously to clone the repository on you desktop

## Apache Setup


## Angular server installation (Windows)
Make sure you've got **npm** installed and set in your PATH environment variable.
Run your cmd from "*www\GKAMeme\angularGKAMeme*" and do a "***npm install***"
To run the server, input "***ng serve --host GKAMeme --proxy-config proxy.conf.json --base-href /app/ --disable-host-check***"

## API REST Symfony installation (Windows)
Make sure you've got **composer** installed and set in your PATH environment variable.
Run your cmd from "*www\GKAMeme\phpGKAMeme*" and do a "***composer install***"
To run the server, launch your wamp


# RUN
## API server
Run your wamp

## Angular server
Run cmd from your angular file (here GKAMeme/angularGKAMeme)
Run "ng serve"
