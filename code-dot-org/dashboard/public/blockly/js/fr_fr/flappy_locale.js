var flappy_locale = {lc:{"ar":function(n){
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
v:function(d,k){flappy_locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){flappy_locale.c(d,k);return d[k] in p?p[d[k]]:(k=flappy_locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){flappy_locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).flappy_locale = {
"continue":function(d){return "Continuer"},
"doCode":function(d){return "faire"},
"elseCode":function(d){return "autre"},
"endGame":function(d){return "terminer le jeu"},
"endGameTooltip":function(d){return "Met fin à la partie."},
"finalLevel":function(d){return "Félicitations ! Vous avez résolu la dernière énigme."},
"flap":function(d){return "battre des ailes"},
"flapRandom":function(d){return "faire une quantité aléatoire de battements d’ailes"},
"flapVerySmall":function(d){return "faire une très petite quantité de battements d’ailes"},
"flapSmall":function(d){return "faire une petite quantité de battements d’ailes"},
"flapNormal":function(d){return "faire une quantité normale de battements d’ailes"},
"flapLarge":function(d){return "faire une grande quantité de battements d’ailes"},
"flapVeryLarge":function(d){return "faire une très grande quantité de battements d’ailes"},
"flapTooltip":function(d){return "Fais voler Flappy vers le haut."},
"flappySpecificFail":function(d){return "Ton code semble bien - il va battre des ailes à chaque clic. Cependant, tu dois cliquer de nombreuses fois pour battre des ailes jusqu’à la cible."},
"incrementPlayerScore":function(d){return "marquer un point"},
"incrementPlayerScoreTooltip":function(d){return "Ajouter un point au score actuel du joueur."},
"nextLevel":function(d){return "Félicitations ! Tu as terminé cette énigme."},
"no":function(d){return "Non"},
"numBlocksNeeded":function(d){return "Cette énigme peut être résolue avec %1 blocs."},
"playSoundRandom":function(d){return "jouer un son aléatoire"},
"playSoundBounce":function(d){return "jouer un son de rebonds"},
"playSoundCrunch":function(d){return "jouer le son accroupir"},
"playSoundDie":function(d){return "jouer un son triste"},
"playSoundHit":function(d){return "jouer un son de fracassement"},
"playSoundPoint":function(d){return "jouer un son de points"},
"playSoundSwoosh":function(d){return "jouer un son de tourbillons"},
"playSoundWing":function(d){return "jouer un son de battements d'ailes"},
"playSoundJet":function(d){return "jouer un son de jets"},
"playSoundCrash":function(d){return "jouer le son d’un accident"},
"playSoundJingle":function(d){return "jouer un son de clochettes"},
"playSoundSplash":function(d){return "jouer un son de plouf"},
"playSoundLaser":function(d){return "jouer un son de laser"},
"playSoundTooltip":function(d){return "Jouer le son choisi."},
"reinfFeedbackMsg":function(d){return "Tu peux cliquer sur le bouton «&#160;Réessayer&#160;» pour revenir à ton jeu."},
"scoreText":function(d){return "Score&#160;: "+flappy_locale.v(d,"playerScore")},
"setBackground":function(d){return "définis l'arrière-plan"},
"setBackgroundRandom":function(d){return "définis un arrière-plan aléatoire"},
"setBackgroundFlappy":function(d){return "définis un arrière-plan de ville (jour)"},
"setBackgroundNight":function(d){return "définis un arrière-plan de ville (nuit)"},
"setBackgroundSciFi":function(d){return "définis un arrière-plan de science-fiction"},
"setBackgroundUnderwater":function(d){return "définis un arrière-plan sous-marin"},
"setBackgroundCave":function(d){return "définis un arrière-plan de caverne"},
"setBackgroundSanta":function(d){return "définis une scène de Noël"},
"setBackgroundTooltip":function(d){return "Définit l'image d'arrière-plan"},
"setGapRandom":function(d){return "définis un écart aléatoire"},
"setGapVerySmall":function(d){return "définis un très petit écart"},
"setGapSmall":function(d){return "définis un petit écart"},
"setGapNormal":function(d){return "définis un écart normal"},
"setGapLarge":function(d){return "définis un grand écart"},
"setGapVeryLarge":function(d){return "définis un très grand écart"},
"setGapHeightTooltip":function(d){return "Définit l’écart vertical dans un obstacle"},
"setGravityRandom":function(d){return "définis une gravité aléatoire"},
"setGravityVeryLow":function(d){return "définis une gravité très faible"},
"setGravityLow":function(d){return "définis une gravité faible"},
"setGravityNormal":function(d){return "définis une gravité normale"},
"setGravityHigh":function(d){return "définis une gravité élevée"},
"setGravityVeryHigh":function(d){return "définis une gravité très élevée"},
"setGravityTooltip":function(d){return "Définit le niveau de gravité"},
"setGround":function(d){return "définis le sol"},
"setGroundRandom":function(d){return "définis un sol aléatoire"},
"setGroundFlappy":function(d){return "définis un sol terrestre"},
"setGroundSciFi":function(d){return "définis un sol de science-fiction"},
"setGroundUnderwater":function(d){return "définis un sol sous-marin"},
"setGroundCave":function(d){return "définis un sol de caverne"},
"setGroundSanta":function(d){return "définis un sol de Noël"},
"setGroundLava":function(d){return "définis un sol de lave"},
"setGroundTooltip":function(d){return "Définit l'image du sol"},
"setObstacle":function(d){return "définis l'obstacle"},
"setObstacleRandom":function(d){return "définis un obstacle aléatoire"},
"setObstacleFlappy":function(d){return "définis un obstacle avec des tuyaux"},
"setObstacleSciFi":function(d){return "définis un obstacle de science-fiction"},
"setObstacleUnderwater":function(d){return "définis un obstacle en forme de plante grimpante"},
"setObstacleCave":function(d){return "définis un obstacle de style caverne"},
"setObstacleSanta":function(d){return "définis un obstacle en forme de cheminée"},
"setObstacleLaser":function(d){return "définis un obstacle de style laser"},
"setObstacleTooltip":function(d){return "Définit l'image de l'obstacle"},
"setPlayer":function(d){return "définis le personnage"},
"setPlayerRandom":function(d){return "définis un personnage aléatoire"},
"setPlayerFlappy":function(d){return "définis un personnage appelé Oiseau jaune"},
"setPlayerRedBird":function(d){return "définis un personnage appelé Oiseau rouge"},
"setPlayerSciFi":function(d){return "définis un personnage en forme de vaisseau spatial"},
"setPlayerUnderwater":function(d){return "définis un personnage appelé Poisson"},
"setPlayerCave":function(d){return "définis un personnage appelé Chauve-souris"},
"setPlayerSanta":function(d){return "définis un personnage appelé Père Noël"},
"setPlayerShark":function(d){return "définis un personnage appelé Requin"},
"setPlayerEaster":function(d){return "définis un personnage appelé Lapin de Pâques"},
"setPlayerBatman":function(d){return "définis un personnage appelé Homme chauve-souris"},
"setPlayerSubmarine":function(d){return "définis un personnage appelé Plongeur"},
"setPlayerUnicorn":function(d){return "définis un personnage appelé Licorne"},
"setPlayerFairy":function(d){return "définis un personnage appelé Fée"},
"setPlayerSuperman":function(d){return "définis un personnage appelé Homme volant"},
"setPlayerTurkey":function(d){return "définis un personnage appelé Dindon"},
"setPlayerTooltip":function(d){return "Définit l'image du personnage"},
"setScore":function(d){return "mettre le score à"},
"setScoreTooltip":function(d){return "Définit le score du joueur"},
"setSpeed":function(d){return "définis la vitesse"},
"setSpeedTooltip":function(d){return "Définit le niveau de la vitesse"},
"shareFlappyTwitter":function(d){return "Découvrez le jeu Flappy que j'ai fait. Je l'ai écrit moi-même avec @codeorg"},
"shareFlappyTwitterDonor":function(d){return "Découvrez le jeu Flappy, que j’ai fait. (Merci à "+flappy_locale.v(d,"donor")+" pour soutenir les @codeorg)"},
"shareGame":function(d){return "Partage ton jeu&#160;:"},
"soundRandom":function(d){return "aléatoire"},
"soundBounce":function(d){return "rebondir"},
"soundCrunch":function(d){return "craquement"},
"soundDie":function(d){return "triste"},
"soundHit":function(d){return "fracassement"},
"soundPoint":function(d){return "point"},
"soundSwoosh":function(d){return "tourbillon"},
"soundWing":function(d){return "aile"},
"soundJet":function(d){return "jet"},
"soundCrash":function(d){return "accident"},
"soundJingle":function(d){return "clochettes"},
"soundSplash":function(d){return "plouf"},
"soundLaser":function(d){return "laser"},
"speedRandom":function(d){return "définis une vitesse aléatoire"},
"speedVerySlow":function(d){return "définis une vitesse très lente"},
"speedSlow":function(d){return "définis une vitesse lente"},
"speedNormal":function(d){return "définis une vitesse normale"},
"speedFast":function(d){return "définis une vitesse rapide"},
"speedVeryFast":function(d){return "définis une vitesse très rapide"},
"whenClick":function(d){return "lors d'un clic"},
"whenClickTooltip":function(d){return "Exécute les actions ci-dessous lorsqu’un événement clic se produit."},
"whenCollideGround":function(d){return "au contact du sol"},
"whenCollideGroundTooltip":function(d){return "Exécute les actions ci-dessous lorsque Flappy touche le sol."},
"whenCollideObstacle":function(d){return "au contact d’un obstacle"},
"whenCollideObstacleTooltip":function(d){return "Exécute les actions ci-dessous lorsque Flappy heurte un obstacle."},
"whenEnterObstacle":function(d){return "au passage d’un obstacle"},
"whenEnterObstacleTooltip":function(d){return "Exécute les actions ci-dessous quand Flappy pénètre un obstacle."},
"whenRunButtonClick":function(d){return "au démarrage du jeu"},
"whenRunButtonClickTooltip":function(d){return "Exécute les actions ci-dessous quand le jeu démarre."},
"yes":function(d){return "Oui"}};