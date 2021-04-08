var bounce_locale = {lc:{"ar":function(n){
  if (n === 0) {
    return 'zero';
  }
  if (n == 1) {
    return 'one';
  }
  if (n == 2) {
    return 'two';
  }
  if ((n % 100) >= 3 && (n % 100) <= 10 && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 100) >= 11 && (n % 100) <= 99 && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"en":function(n){return n===1?"one":"other"},"bg":function(n){return n===1?"one":"other"},"bn":function(n){return n===1?"one":"other"},"ca":function(n){return n===1?"one":"other"},"cs":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n == 2 || n == 3 || n == 4) {
    return 'few';
  }
  return 'other';
},"da":function(n){return n===1?"one":"other"},"de":function(n){return n===1?"one":"other"},"el":function(n){return n===1?"one":"other"},"es":function(n){return n===1?"one":"other"},"et":function(n){return n===1?"one":"other"},"eu":function(n){return n===1?"one":"other"},"fa":function(n){return "other"},"fi":function(n){return n===1?"one":"other"},"fil":function(n){return n===0||n==1?"one":"other"},"fr":function(n){return Math.floor(n)===0||Math.floor(n)==1?"one":"other"},"ga":function(n){return n==1?"one":(n==2?"two":"other")},"gl":function(n){return n===1?"one":"other"},"he":function(n){return n===1?"one":"other"},"hi":function(n){return n===0||n==1?"one":"other"},"hr":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"hu":function(n){return "other"},"id":function(n){return "other"},"is":function(n){
    return ((n%10) === 1 && (n%100) !== 11) ? 'one' : 'other';
  },"it":function(n){return n===1?"one":"other"},"ja":function(n){return "other"},"ko":function(n){return "other"},"lt":function(n){
  if ((n % 10) == 1 && ((n % 100) < 11 || (n % 100) > 19)) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 9 &&
      ((n % 100) < 11 || (n % 100) > 19) && n == Math.floor(n)) {
    return 'few';
  }
  return 'other';
},"lv":function(n){
  if (n === 0) {
    return 'zero';
  }
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  return 'other';
},"mk":function(n){return (n%10)==1&&n!=11?"one":"other"},"mr":function(n){return n===1?"one":"other"},"ms":function(n){return "other"},"mt":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n === 0 || ((n % 100) >= 2 && (n % 100) <= 4 && n == Math.floor(n))) {
    return 'few';
  }
  if ((n % 100) >= 11 && (n % 100) <= 19 && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"nl":function(n){return n===1?"one":"other"},"no":function(n){return n===1?"one":"other"},"pl":function(n){
  if (n == 1) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || n != 1 && (n % 10) == 1 ||
      ((n % 10) >= 5 && (n % 10) <= 9 || (n % 100) >= 12 && (n % 100) <= 14) &&
      n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"pt":function(n){return n===1?"one":"other"},"ro":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n === 0 || n != 1 && (n % 100) >= 1 &&
      (n % 100) <= 19 && n == Math.floor(n)) {
    return 'few';
  }
  return 'other';
},"ru":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"sk":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n == 2 || n == 3 || n == 4) {
    return 'few';
  }
  return 'other';
},"sl":function(n){
  if ((n % 100) == 1) {
    return 'one';
  }
  if ((n % 100) == 2) {
    return 'two';
  }
  if ((n % 100) == 3 || (n % 100) == 4) {
    return 'few';
  }
  return 'other';
},"sq":function(n){return n===1?"one":"other"},"sr":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"sv":function(n){return n===1?"one":"other"},"ta":function(n){return n===1?"one":"other"},"te":function(n){return n===1?"one":"other"},"th":function(n){return "other"},"tr":function(n){return n===1?"one":"other"},"uk":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"ur":function(n){return n===1?"one":"other"},"vi":function(n){return "other"},"zh":function(n){return "other"}},
c:function(d,k){if(!d)throw new Error("MessageFormat: Data required for '"+k+"'.")},
n:function(d,k,o){if(isNaN(d[k]))throw new Error("MessageFormat: '"+k+"' isn't a number.");return d[k]-(o||0)},
v:function(d,k){bounce_locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){bounce_locale.c(d,k);return d[k] in p?p[d[k]]:(k=bounce_locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){bounce_locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).bounce_locale = {
"basketballLaunchBall":function(d){return "lancer une nouvelle balle"},
"basketballLaunchBallTooltip":function(d){return "met une balle en jeu."},
"basketballSetPaddle":function(d){return "régler les paramètres de la main"},
"basketballSetPaddleSpeedFast":function(d){return "régler la vitesse de la main sur rapide"},
"basketballSetPaddleSpeedNormal":function(d){return "régler la vitesse de la main sur normale"},
"basketballSetPaddleSpeedRandom":function(d){return "régler la vitesse de la main de façon aléatoire"},
"basketballSetPaddleSpeedSlow":function(d){return "régler la vitesse de la main sur lente"},
"basketballSetPaddleSpeedTooltip":function(d){return "Définit la vitesse de la main"},
"basketballSetPaddleSpeedVeryFast":function(d){return "définir une vitesse de la main très rapide"},
"basketballSetPaddleSpeedVerySlow":function(d){return "régler la vitesse de la main sur très lente"},
"basketballWhenBallMissesPaddle":function(d){return "lorsque la balle passe à côté de la main"},
"basketballWhenPaddleCollided":function(d){return "lorsque la balle touche la main"},
"bounceBall":function(d){return "faire rebondir la balle"},
"bounceBallTooltip":function(d){return "Faire rebondir une balle sur un objet."},
"continue":function(d){return "Continuer"},
"dirE":function(d){return "E"},
"dirN":function(d){return "N"},
"dirS":function(d){return "S"},
"dirW":function(d){return "O"},
"doCode":function(d){return "faire"},
"elseCode":function(d){return "sinon"},
"finalLevel":function(d){return "Félicitations ! Vous avez résolu la dernière énigme."},
"heightParameter":function(d){return "hauteur"},
"ifCode":function(d){return "si"},
"ifPathAhead":function(d){return "si chemin devant"},
"ifTooltip":function(d){return "S'il y a un chemin dans la direction indiquée, alors effectuer certaines actions."},
"ifelseTooltip":function(d){return "S'il y a un chemin dans la direction indiquée, alors exécuter le premier bloc d'actions. Sinon, exécuter le deuxième bloc d'actions."},
"incrementOpponentScore":function(d){return "marquer un point pour l'adversaire"},
"incrementOpponentScoreTooltip":function(d){return "Ajouter un point au score actuel de l'adversaire."},
"incrementPlayerScore":function(d){return "marquer un point"},
"incrementPlayerScoreTooltip":function(d){return "Ajouter un point au score actuel du joueur."},
"isWall":function(d){return "est-ce un mur"},
"isWallTooltip":function(d){return "Renvoie «&#160;vrai&#160;» si un mur existe ici"},
"launchBall":function(d){return "lancer une nouvelle balle"},
"launchBallTooltip":function(d){return "Lancer une balle en jeu."},
"makeYourOwn":function(d){return "Crée ton propre jeu de rebond"},
"moveDown":function(d){return "déplacer vers le bas"},
"moveDownTooltip":function(d){return "Déplace la raquette vers le bas."},
"moveForward":function(d){return "avancer plus"},
"moveForwardTooltip":function(d){return "Me fait avancer d'un espace."},
"moveLeft":function(d){return "déplacer vers la gauche"},
"moveLeftTooltip":function(d){return "Déplace la raquette vers la gauche."},
"moveRight":function(d){return "déplacer vers la droite"},
"moveRightTooltip":function(d){return "Déplace la raquette vers la droite."},
"moveUp":function(d){return "déplacer vers le haut"},
"moveUpTooltip":function(d){return "Déplace la raquette vers le haut."},
"nextLevel":function(d){return "Félicitations ! Vous avez terminé cette énigme."},
"no":function(d){return "Non"},
"noPathAhead":function(d){return "le chemin est bloqué"},
"noPathLeft":function(d){return "pas de chemin vers la gauche"},
"noPathRight":function(d){return "pas de chemin vers la droite"},
"numBlocksNeeded":function(d){return "Cette énigme peut être résolue avec %1 blocs."},
"pathAhead":function(d){return "chemin devant"},
"pathLeft":function(d){return "si chemin à gauche"},
"pathRight":function(d){return "si chemin à droite"},
"pilePresent":function(d){return "Il y a une pile"},
"playSoundBounce":function(d){return "jouer un son de rebonds"},
"playSoundCheer":function(d){return "jouer le son applaudissements"},
"playSoundCrunch":function(d){return "jouer le son accroupir"},
"playSoundGoal1":function(d){return "jouer le son du 1<sup>er</sup> but"},
"playSoundGoal2":function(d){return "jouer le son 2<sup>e</sup> but"},
"playSoundHit":function(d){return "jouer un son de coup"},
"playSoundKick":function(d){return "jouer le son coup de pied"},
"playSoundLosePoint":function(d){return "jour le son «&#160;perdre un point&#160;»"},
"playSoundLosePoint2":function(d){return "jour le 2<sup>e</sup> son «&#160;perdre un point&#160;»"},
"playSoundRetro":function(d){return "jouer un son rétro"},
"playSoundRubber":function(d){return "jouer un son de caoutchouc"},
"playSoundSlap":function(d){return "jouer un son de claque"},
"playSoundSlapshot":function(d){return "jouer le son giffle"},
"playSoundSwish":function(d){return "jouer le son coup dans le filet"},
"playSoundTooltip":function(d){return "Jouer le son choisi."},
"playSoundWhistle":function(d){return "jouer le son sifflet"},
"playSoundWinPoint":function(d){return "jouer le son «&#160;gagner un point&#160;»"},
"playSoundWinPoint2":function(d){return "jouer le 2<sup>e</sup> son « gagner un point »"},
"playSoundWood":function(d){return "jouer un son de bois"},
"putdownTower":function(d){return "poser la tour"},
"reinfFeedbackMsg":function(d){return "Vous pouvez cliquer sur le bouton « Réessayer » pour revenir à votre partie."},
"removeSquare":function(d){return "retirer le carré"},
"repeatUntil":function(d){return "répéter jusqu’à"},
"repeatUntilBlocked":function(d){return "Tant que chemin devant"},
"repeatUntilFinish":function(d){return "répéter jusqu'à la fin"},
"scoreText":function(d){return "Résultat: "+bounce_locale.v(d,"playerScore")+" : "+bounce_locale.v(d,"opponentScore")},
"setBackground":function(d){return "définir "+bounce_locale.v(d,"background")+" de la scène"},
"setBackgroundHardcourt":function(d){return "définir le décor d’un court à surface dure"},
"setBackgroundRandom":function(d){return "définir une scène aléatoire"},
"setBackgroundRetro":function(d){return "définir une scène rétro"},
"setBackgroundTooltip":function(d){return "Définit l'image d'arrière-plan"},
"setBallHardcourt":function(d){return "définir une balle pour la surface dure"},
"setBallRandom":function(d){return "définir une balle aléatoire"},
"setBallRetro":function(d){return "définit une balle rétro"},
"setBall":function(d){return "définir une balle "+bounce_locale.v(d,"ball")},
"setBallSpeedFast":function(d){return "définir une vitesse rapide pour la balle"},
"setBallSpeedNormal":function(d){return "définir une vitesse normale pour la balle"},
"setBallSpeedRandom":function(d){return "définir une vitesse aléatoire pour la balle"},
"setBallSpeedSlow":function(d){return "définir une vitesse lente pour la balle"},
"setBallSpeedTooltip":function(d){return "Choisit la vitesse de la balle"},
"setBallSpeedVeryFast":function(d){return "définir une vitesse très rapide pour la balle"},
"setBallSpeedVerySlow":function(d){return "définir une vitesse très lente pour la balle"},
"setBallTooltip":function(d){return "Définit l'image de la balle"},
"setPaddle":function(d){return "définir la raquette"},
"setPaddleHardcourt":function(d){return "définir la raquette pour surface dure"},
"setPaddleRandom":function(d){return "choisir une raquette aléatoire"},
"setPaddleRetro":function(d){return "définir la raquette rétro"},
"setPaddleSpeedFast":function(d){return "définir une vitesse rapide pour la raquette"},
"setPaddleSpeedNormal":function(d){return "définir une vitesse normale pour la raquette"},
"setPaddleSpeedRandom":function(d){return "définir une vitesse aléatoire pour la raquette"},
"setPaddleSpeedSlow":function(d){return "définir une vitesse lente pour la raquette"},
"setPaddleSpeedTooltip":function(d){return "Définit la vitesse de la raquette"},
"setPaddleSpeedVeryFast":function(d){return "définir une vitesse très rapide pour la raquette"},
"setPaddleSpeedVerySlow":function(d){return "définir une vitesse très lente pour la raquette"},
"setPaddleTooltip":function(d){return "Définit l'image de la raquette"},
"setPlayer":function(d){return "définis le personnage"},
"setPlayerSpeedFast":function(d){return "régler la vitesse du joueur sur rapide"},
"setPlayerSpeedNormal":function(d){return "régler la vitesse du joueur sur normale"},
"setPlayerSpeedRandom":function(d){return "Régler la vitesse du joueur aléatoirement"},
"setPlayerSpeedSlow":function(d){return "régler la vitesse du joueur sur lente"},
"setPlayerSpeedTooltip":function(d){return "Définit la vitesse du joueur"},
"setPlayerSpeedVeryFast":function(d){return "régler la vitesse du joueur sur très rapide"},
"setPlayerSpeedVerySlow":function(d){return "régler la vitesse du joueur sur très lente"},
"setTeamTooltip":function(d){return "Définit le logo et le jeu de couleurs"},
"setTeam":function(d){return "Définir équipe "+bounce_locale.v(d,"team")},
"setTeamRandom":function(d){return "Définir l'équipe aléatoirement"},
"shareBounceTwitter":function(d){return "Découvrez le jeu de rebond que j'ai créé. Je l'ai écrit moi-même avec @codeorg"},
"shareBounceTwitterDonor":function(d){return "Découvrez le jeu Bounce, que j’ai fait. (Merci à "+bounce_locale.v(d,"donor")+" de soutenir les @codeorg)"},
"shareGame":function(d){return "Partagez votre jeu :"},
"turnLeft":function(d){return "tourner à gauche"},
"turnRight":function(d){return "tourner à droite"},
"turnTooltip":function(d){return "Me tourne 90 degrés à gauche ou à droite."},
"whenBallInGoal":function(d){return "quand la balle est dans le but"},
"whenBallInGoalTooltip":function(d){return "Exécuter les actions ci-dessous lorsqu'une balle entre dans le but."},
"whenBallMissesPaddle":function(d){return "quand la balle manque la raquette"},
"whenBallMissesPaddleTooltip":function(d){return "Exécuter les actions ci-dessous quand une balle manque la raquette."},
"whenBallMissesPlayer":function(d){return "quand la balle manque le joueur"},
"whenDown":function(d){return "quand « flèche vers le bas »"},
"whenDownTooltip":function(d){return "Exécuter les actions ci-dessous lorsque le joueur appuie sur la touche «&#160;flèche vers le bas&#160;»."},
"whenGameStarts":function(d){return "lors du lancement du jeu"},
"whenGameStartsTooltip":function(d){return "Exécute les actions insérées au lancement du jeu."},
"whenLeft":function(d){return "quand « flèche vers la gauche »"},
"whenLeftTooltip":function(d){return "Exécuter les actions ci-dessous lorsque le joueur appuie sur la touche « flèche vers la gauche »."},
"whenPaddleCollided":function(d){return "quand la balle touche la raquette"},
"whenPaddleCollidedTooltip":function(d){return "Exécuter les actions ci-dessous quand une balle cogne une raquette."},
"whenPlayerCollided":function(d){return "quand le ballon touche le joueur"},
"whenPlayerCollidedTooltip":function(d){return "Exécutez les actions ci-dessous lorsqu'une balle entre en collision avec le joueur."},
"whenRight":function(d){return "quand « flèche vers la droite »"},
"whenRightTooltip":function(d){return "Exécuter les actions ci-dessous lorsque le joueur appuie sur la touche « flèche vers la droite »."},
"whenUp":function(d){return "quand « flèche vers le haut »"},
"whenUpTooltip":function(d){return "Exécuter les actions ci-dessous lorsque le joueur appuie sur la touche « flèche vers le haut »."},
"whenWallCollided":function(d){return "quand la balle touche un mur"},
"whenWallCollidedTooltip":function(d){return "Exécute les actions ci-dessous quand une balle se heurte à un mur."},
"whileMsg":function(d){return "tant que"},
"whileTooltip":function(d){return "Répète les actions incluses jusqu'à ce que le point final soit atteint."},
"yes":function(d){return "Oui"}};