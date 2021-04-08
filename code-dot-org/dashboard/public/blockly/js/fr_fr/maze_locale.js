var maze_locale = {lc:{"ar":function(n){
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
v:function(d,k){maze_locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){maze_locale.c(d,k);return d[k] in p?p[d[k]]:(k=maze_locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){maze_locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).maze_locale = {
"at":function(d){return "à"},
"atFlower":function(d){return "à la fleur"},
"atHoneycomb":function(d){return "au nid d'abeille"},
"avoidCowAndRemove":function(d){return "éviter la vache et retirer 1"},
"collect":function(d){return "collecter"},
"collectiblePresent":function(d){return "il y a des trésors"},
"collectorCollectTooltip":function(d){return "Collecte un objet"},
"collectorCollectedEverything":function(d){return "Bravo! Tu as collecté "+maze_locale.p(d,"count",0,"fr",{"one":"the item","other":"all "+maze_locale.n(d,"count")+" items"})+"!"},
"collectorCollectedNothing":function(d){return "Continue le codage! Tu as besoin de collecter autant d'objets que tu peux."},
"collectorCollectedSome":function(d){return "Beau boulot! Tu as collecté "+maze_locale.p(d,"count",0,"fr",{"one":"1 objet","other":maze_locale.n(d,"count")+" objets"})+"!"},
"collectorCollectedNotEnough":function(d){return "Continuez à coder! Vous devez collecter au moins "+maze_locale.p(d,"goal",0,"fr",{"one":"1 objet","other":maze_locale.n(d,"goal")+" objets"})+"."},
"collectorCollectedTooMany":function(d){return "Cet espace ne dispose pas d'assez d'objets à collecter."},
"collectorTooManyBlocks":function(d){return "Tu peux n'utiliser que "+maze_locale.v(d,"blockLimit")+" blocs. Regarde à nouveau ton code et réessaye !"},
"continue":function(d){return "Continuer"},
"corn":function(d){return "maïs"},
"cornTooltip":function(d){return "Récolte du maïs"},
"didNotCollectAllCrops":function(d){return "Assurez-vous de ne pas laisser de cultures derrière!"},
"didNotCollectEverything":function(d){return "Assure-toi de ne laisser ni nectar ni miel derrière !"},
"didNotPlantEverywhere":function(d){return "Assurez vous d'avoir planté quelque chose sur toutes les parcelles!"},
"dig":function(d){return "retirer 1"},
"digTooltip":function(d){return "retirer 1 unité de terre"},
"dirE":function(d){return "E"},
"dirN":function(d){return "N"},
"dirS":function(d){return "S"},
"dirW":function(d){return "O"},
"doCode":function(d){return "faire"},
"elseCode":function(d){return "sinon"},
"emptyCropError":function(d){return "Cette culture a totalement disparu."},
"fill":function(d){return "remplir 1"},
"fillN":function(d){return "remplir "+maze_locale.v(d,"shovelfuls")},
"fillSquare":function(d){return "remplir le carré"},
"fillStack":function(d){return "remplir les trous avec "+maze_locale.v(d,"shovelfuls")+" "},
"fillTooltip":function(d){return "placer 1 unité de terre"},
"finalLevel":function(d){return "Félicitations ! Tu as résolu le dernier puzzle."},
"flowerEmptyError":function(d){return "La fleur sur laquelle tu es n'a plus de nectar."},
"get":function(d){return "obtenir"},
"goal":function(d){return "objectif"},
"has":function(d){return "a"},
"haslettuce":function(d){return "il y a de la laitue"},
"hascorn":function(d){return "il y a du maïs"},
"haspumpkin":function(d){return "il y a des citrouilles"},
"heightParameter":function(d){return "hauteur"},
"holePresent":function(d){return "il y a un trou"},
"honey":function(d){return "fabriquer du miel"},
"honeyAvailable":function(d){return "miel"},
"honeyTooltip":function(d){return "Faire du miel à partir du nectar"},
"honeycombFullError":function(d){return "Il n'y a plus de place pour mettre du miel dans ce nid d'abeille."},
"ifCode":function(d){return "si"},
"ifFlowerTooltip":function(d){return "S'il y a une fleur/un nid d'abeille dans la direction indiquée, alors effectue quelques actions."},
"ifInRepeatError":function(d){return "Tu as besoin d'un bloc « Si » à l'intérieur d'un bloc « Répéter ». Si tu rencontres des difficultés, retourne au niveau précédent pour voir comment cela fonctionnait."},
"ifOnlyFlowerTooltip":function(d){return "S’il y a une fleur dans la direction indiquée, alors effectue quelques actions."},
"ifPathAhead":function(d){return "si chemin devant"},
"ifTooltip":function(d){return "S'il y a un chemin dans la direction indiquée, alors effectue quelques actions."},
"ifelseFlowerTooltip":function(d){return "S'il y a une fleur/un nid d'abeille dans la direction indiquée, alors effectue le premier bloc d’actions. Autrement, fais le deuxième bloc d'actions."},
"ifelseTooltip":function(d){return "S'il y a un chemin dans la direction indiquée, alors effectue le premier bloc d’actions. Autrement, fais le deuxième bloc d'actions."},
"insufficientHoney":function(d){return "Tu dois produire la bonne quantité de miel."},
"insufficientNectar":function(d){return "Tu dois recueillir la bonne quantité de nectar."},
"lettuce":function(d){return "laitue"},
"lettuceTooltip":function(d){return "Récolter de la laitue"},
"make":function(d){return "produire"},
"moveBackward":function(d){return "reculer"},
"moveEastTooltip":function(d){return "Me déplacer d’une case vers l’Est."},
"moveForward":function(d){return "avancer plus"},
"moveForwardTooltip":function(d){return "Me faire avancer d'une case."},
"moveNorthTooltip":function(d){return "Me déplacer d'une case vers le Nord."},
"moveSouthTooltip":function(d){return "Me déplacer d'une case vers le Sud."},
"moveTooltip":function(d){return "Me faire avancer/reculer d’une case"},
"moveWestTooltip":function(d){return "Me déplacer d'une case vers l’Ouest."},
"nectar":function(d){return "obtenir du nectar"},
"nectarRemaining":function(d){return "nectar"},
"nectarTooltip":function(d){return "Obtenir du nectar d'une fleur"},
"nextLevel":function(d){return "Félicitations ! Tu as terminé ce puzzle."},
"no":function(d){return "Non"},
"noPathAhead":function(d){return "le chemin est bloqué"},
"noPathLeft":function(d){return "aucun chemin vers la gauche"},
"noPathRight":function(d){return "aucun chemin vers la droite"},
"notAtFlowerError":function(d){return "Tu ne peux obtenir du nectar qu’en butinant une fleur."},
"notAtHoneycombError":function(d){return "Tu ne peux produire du miel que sur un nid d'abeille."},
"numBlocksNeeded":function(d){return "Ce puzzle peut être résolu avec %1 blocs."},
"pathAhead":function(d){return "chemin devant"},
"pathLeft":function(d){return "si chemin à gauche"},
"pathRight":function(d){return "si chemin à droite"},
"pick":function(d){return "choisis"},
"pilePresent":function(d){return "il y a un amas"},
"plant":function(d){return "plante"},
"plantInNonSoilError":function(d){return "Je peux seulement planter quelque chose dans un sol vide."},
"plantTooltip":function(d){return "Mets un plant en terre"},
"pumpkin":function(d){return "citrouille"},
"pumpkinTooltip":function(d){return "Récolte une citrouille"},
"putdownTower":function(d){return "faire s’écrouler la tour"},
"removeAndAvoidTheCow":function(d){return "retirer 1 et éviter la vache"},
"removeN":function(d){return "supprimer "+maze_locale.v(d,"shovelfuls")},
"removePile":function(d){return "supprimer l’amas"},
"removeSquare":function(d){return "retirer le carré"},
"removeStack":function(d){return "retirer "+maze_locale.v(d,"shovelfuls")+" mottes de l’amas"},
"repeatCarefullyError":function(d){return "Pour résoudre ce problème, réfléchis bien à la suite d'instructions contenant deux déplacements et un changement de direction à insérer au bloc «&#160;Répéter&#160;». Ce n'est pas grave si tu te tournes une fois de trop à la fin."},
"repeatUntil":function(d){return "répéter jusqu’à"},
"repeatUntilBlocked":function(d){return "tant qu’il y a un chemin devant"},
"repeatUntilFinish":function(d){return "répéter jusqu'à la fin"},
"soil":function(d){return "sol"},
"sprout":function(d){return "pousse"},
"step":function(d){return "Étape"},
"totalHoney":function(d){return "quantité de miel"},
"totalNectar":function(d){return "quantité de nectar"},
"turnLeft":function(d){return "tourner à gauche"},
"turnRight":function(d){return "tourner à droite"},
"turnTooltip":function(d){return "Me fait tourner à 90 degrés à gauche ou à droite."},
"uncheckedCloudError":function(d){return "Vérifie bien tous les nuages pour voir s'ils sont en fait des fleurs ou des nids d'abeille."},
"uncheckedPurpleError":function(d){return "Vérifie bien toutes les fleurs violettes pour voir si elles contiennent du nectar."},
"whileMsg":function(d){return "tant que"},
"whileTooltip":function(d){return "Répète les actions incluses jusqu'à ce que le point final soit atteint."},
"word":function(d){return "Trouver le mot"},
"wrongCropError":function(d){return "Je ne peux pas récolter cette culture de là où je suis."},
"yes":function(d){return "Oui"},
"youSpelled":function(d){return "Tu as épelé"}};