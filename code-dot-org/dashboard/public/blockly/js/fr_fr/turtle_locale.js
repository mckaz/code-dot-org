var turtle_locale = {lc:{"ar":function(n){
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
v:function(d,k){turtle_locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){turtle_locale.c(d,k);return d[k] in p?p[d[k]]:(k=turtle_locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){turtle_locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).turtle_locale = {
"blocksUsed":function(d){return "Blocs utilisés&#160;: 1%"},
"branches":function(d){return "branches"},
"catColour":function(d){return "Couleur"},
"catControl":function(d){return "boucles"},
"catMath":function(d){return "Math"},
"catProcedures":function(d){return "fonctions"},
"catTurtle":function(d){return "Actions"},
"catVariables":function(d){return "variables"},
"catLogic":function(d){return "Logique"},
"colourTooltip":function(d){return "Modifie la couleur du crayon."},
"createACircle":function(d){return "crée un cercle"},
"createSnowflakeSquare":function(d){return "crée un flocon de type carré"},
"createSnowflakeParallelogram":function(d){return "crée un flocon de type parallélogramme"},
"createSnowflakeLine":function(d){return "crée un flocon de type ligne"},
"createSnowflakeSpiral":function(d){return "crée un flocon de type spirale"},
"createSnowflakeFlower":function(d){return "crée un flocon de type fleur"},
"createSnowflakeFractal":function(d){return "crée un flocon de type fractale"},
"createSnowflakeRandom":function(d){return "crée un flocon de type aléatoire"},
"createASnowflakeBranch":function(d){return "crée un flocon de type branche"},
"degrees":function(d){return "degrés"},
"depth":function(d){return "profondeur"},
"dots":function(d){return "pixels"},
"drawACircle":function(d){return "dessine un cercle"},
"drawAFlower":function(d){return "dessine une fleur"},
"drawAHexagon":function(d){return "dessine un hexagone"},
"drawAHouse":function(d){return "dessine une maison"},
"drawAPlanet":function(d){return "dessine une planète"},
"drawARhombus":function(d){return "dessine un losange"},
"drawARobot":function(d){return "dessine un robot"},
"drawARocket":function(d){return "dessine une fusée"},
"drawASnowflake":function(d){return "dessine un flocon de neige"},
"drawASnowman":function(d){return "dessiner un bonhomme de neige"},
"drawASquare":function(d){return "dessine un carré"},
"drawAStar":function(d){return "dessine une étoile"},
"drawATree":function(d){return "dessine un arbre"},
"drawATriangle":function(d){return "dessine un triangle"},
"drawUpperWave":function(d){return "dessine une grande vague"},
"drawLowerWave":function(d){return "dessine un creux de vague"},
"drawSticker":function(d){return "dessiner un autocollant"},
"heightParameter":function(d){return "hauteur"},
"hideTurtle":function(d){return "masque l'artiste"},
"jump":function(d){return "sauter"},
"jumpTo":function(d){return "aller à"},
"jumpBackward":function(d){return "saute en arrière de"},
"jumpForward":function(d){return "saute en avant de"},
"jumpTooltip":function(d){return "Déplace l'artiste sans laisser aucune trace."},
"jumpEastTooltip":function(d){return "Déplace l'artiste vers l'Est sans laisser aucune trace."},
"jumpNorthTooltip":function(d){return "Déplace l'artiste vers le Nord sans laisser aucune trace."},
"jumpNortheastTooltip":function(d){return "Déplace l'artiste vers le nord-est sans qu'il n'écrive."},
"jumpNorthwestTooltip":function(d){return "Déplace l'artiste vers le nord-ouest sans qu'il n'écrive."},
"jumpSouthTooltip":function(d){return "Déplace l'artiste vers le Sud sans laisser aucune trace."},
"jumpSoutheastTooltip":function(d){return "Déplace l'artiste vers le sud-est sans qu'il n'écrive."},
"jumpSouthwestTooltip":function(d){return "Déplace l'artiste vers le sud-ouest sans qu'il n'écrive."},
"jumpWestTooltip":function(d){return "Déplace l'artiste vers l'Ouest sans laisser aucune trace."},
"lengthFeedback":function(d){return "C'est bon sauf pour les longueurs à parcourir."},
"lengthParameter":function(d){return "longueur"},
"loopVariable":function(d){return "compteur"},
"moveBackward":function(d){return "recule de"},
"moveEastTooltip":function(d){return "Déplace l'artiste vers l'Est."},
"moveForward":function(d){return "avancer de"},
"moveForwardTooltip":function(d){return "Déplace l'artiste vers l'avant."},
"moveNorthTooltip":function(d){return "Déplace l'artiste vers le Nord."},
"moveNortheastTooltip":function(d){return "Déplace l'artiste vers le nord-est."},
"moveNorthwestTooltip":function(d){return "Déplace l'artiste vers le Nord-Ouest."},
"moveSouthTooltip":function(d){return "Déplace l'artiste vers le Sud."},
"moveSoutheastTooltip":function(d){return "Déplace l'artiste vers le Sud-Est."},
"moveSouthwestTooltip":function(d){return "Déplace l'artiste vers le Sud-Ouest."},
"moveWestTooltip":function(d){return "Déplace l'artiste vers l'Ouest."},
"moveTooltip":function(d){return "Déplace l'artiste vers l'avant ou l'arrière selon la valeur spécifiée."},
"notBlackColour":function(d){return "Tu dois définir une autre couleur que le noir pour ce puzzle."},
"numBlocksNeeded":function(d){return "Ce puzzle peut être résolu avec 1% des blocs. Tu as utilisé 2%."},
"penDown":function(d){return "déposer le crayon"},
"penTooltip":function(d){return "Prend ou dépose le crayon, pour commencer ou arrêter de dessiner."},
"penUp":function(d){return "prend le crayon"},
"reinfFeedbackMsg":function(d){return "Voici ton dessin ! Continue à travailler sur ton dessin ou passe au prochain puzzle."},
"setAlpha":function(d){return "définis alpha"},
"setCharacter":function(d){return "configurer le personnage à "+turtle_locale.v(d,"character")},
"setColour":function(d){return "définis la couleur"},
"setPattern":function(d){return "définis le modèle"},
"setWidth":function(d){return "définis la largeur"},
"shareDrawing":function(d){return "Partage ton dessin :"},
"showMe":function(d){return "Montrez-moi"},
"showTurtle":function(d){return "afficher l'artiste"},
"sizeParameter":function(d){return "taille"},
"step":function(d){return "étape"},
"tooFewColours":function(d){return "Tu dois utiliser au moins 1% de couleurs différentes pour ce puzzle. Tu en as seulement utilisé 2%."},
"turnLeft":function(d){return "tourner à gauche de"},
"turnRight":function(d){return "tourner à droite de"},
"turnRightTooltip":function(d){return "Tourne l'artiste à droite selon l'angle spécifié."},
"turnTooltip":function(d){return "Tourne l'artiste à gauche ou à droite selon le degré indiqué."},
"turtleVisibilityTooltip":function(d){return "Rend l'artiste visible ou invisible."},
"widthTooltip":function(d){return "Modifie la largeur du crayon."},
"wrongColour":function(d){return "Ton image est de la mauvaise couleur. Pour ce puzzle, elle doit être de 1%."}};