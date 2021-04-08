var craft_locale = {lc:{"ar":function(n){
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
v:function(d,k){craft_locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){craft_locale.c(d,k);return d[k] in p?p[d[k]]:(k=craft_locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){craft_locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).craft_locale = {
"absolute":function(d){return "absolu"},
"agentGenericFailureMessage":function(d){return "Continuez à coder ! Pensez à utiliser l'Agent pour vous aider."},
"agentTooFewBlocksFailureMessage":function(d){return "Essayez d'ajouter un bloc à la fois pour diriger l'Agent au bon endroit."},
"at":function(d){return "à"},
"agentDiamondPathCongrats":function(d){return "Félicitations, vous avez trouvé le chemin jusqu'au diamant ! Vous avez récolté "+craft_locale.p(d,"count",0,"fr",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" jusqu'à maintenant !"},
"blockActionAdd":function(d){return "ajouter"},
"blockActionAttack":function(d){return "attaquer"},
"blockActionClone":function(d){return "cloner les blocs"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "collecter"},
"blockActionCollectAll":function(d){return "tout prélever"},
"blockActionDestroyEntity":function(d){return "disparaître"},
"blockActionDetect":function(d){return "détecter"},
"blockActionDetectRedstone":function(d){return "détecter la redstone"},
"blockActionDrop":function(d){return "lâcher"},
"blockActionDropAll":function(d){return "lâcher tout"},
"blockActionExecute":function(d){return "exécuter commande"},
"blockActionExplodeEntity":function(d){return "exploser"},
"blockActionFill":function(d){return "remplir"},
"blockActionFlashEntity":function(d){return "clignoter"},
"blockActionGetItemCount":function(d){return "obtenir nombre objets"},
"blockActionGetItemCountInSlotNumber":function(d){return "get item count in slot number"},
"blockActionGetItemDetail":function(d){return "obtenir les détails de l'élément"},
"blockActionGetItemDetailInSlotNumber":function(d){return "get item detail in slot number"},
"blockActionGetItemSpace":function(d){return "obtenir les dimensions de l'élément"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "get item space in slot number"},
"blockActionGive":function(d){return "donner"},
"blockActionInspect":function(d){return "inspecter"},
"blockActionInspectData":function(d){return "inspecter données"},
"blockActionKill":function(d){return "tuer cible"},
"blockActionMove":function(d){return "déplacer"},
"blockActionMoveAway":function(d){return "s'éloigner de"},
"blockActionMoveForward":function(d){return "avancer plus"},
"blockActionMoveRandom":function(d){return "avancer aléatoirement"},
"blockActionMoveTo":function(d){return "avancer jusqu'à"},
"blockActionMoveToward":function(d){return "avancer d'un pas vers"},
"blockActionPlaySound":function(d){return "lire le son"},
"blockActionRepeat":function(d){return "répéter"},
"blockActionRepeatRandom":function(d){return "répéter aléatoirement"},
"blockActionSetBlock":function(d){return "set block"},
"blockActionSpawn":function(d){return "générer"},
"blockActionSummon":function(d){return "invoquer"},
"blockActionTeleport":function(d){return "téléporter cible"},
"blockActionTeleportToPlayer":function(d){return "téléporter vers le joueur"},
"blockActionTestForBlock":function(d){return "tests whether a block type"},
"blockActionTestForBlocks":function(d){return "tests whether the pattern between"},
"blockActionToScore":function(d){return "au score"},
"blockActionTransfer":function(d){return "transférer"},
"blockActionWait":function(d){return "attendre"},
"blockActionWith":function(d){return "avec"},
"blockData":function(d){return "données de bloc"},
"blockDestroyBlock":function(d){return "détruire le bloc"},
"blockIf":function(d){return "si"},
"blockIfLavaAhead":function(d){return "si lave devant"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "déplacer"},
"blockMoveBackward":function(d){return "reculer"},
"blockMoveForward":function(d){return "avancer plus"},
"blockPlace":function(d){return "placer"},
"blockPlaceTorch":function(d){return "placer la torche"},
"blockPlaceXAheadAhead":function(d){return "devant"},
"blockPlaceXAheadPlace":function(d){return "placer"},
"blockPlaceXPlace":function(d){return "placer"},
"blockPlantCrop":function(d){return "planter culture"},
"blockShear":function(d){return "tondre"},
"blockTill":function(d){return "faucher"},
"blockTillSoil":function(d){return "faucher sol"},
"blockTurn":function(d){return "tourner"},
"blockTurnLeft":function(d){return "tourner à gauche"},
"blockTurnRight":function(d){return "tourner à droite"},
"blockType":function(d){return "type de bloc"},
"blockTypeBedrock":function(d){return "substrat rocheux"},
"blockTypeBricks":function(d){return "briques"},
"blockTypeClay":function(d){return "argile"},
"blockTypeClayHardened":function(d){return "argile durcie"},
"blockTypeCobblestone":function(d){return "pierre taillée"},
"blockTypeDirt":function(d){return "terre"},
"blockTypeDirtCoarse":function(d){return "grosses saletés"},
"blockTypeDoorIron":function(d){return "porte en fer"},
"blockTypeEmpty":function(d){return "vide"},
"blockTypeFarmlandWet":function(d){return "terre labourée"},
"blockTypeGlass":function(d){return "verre"},
"blockTypeGlowstone":function(d){return "pierre lumineuse"},
"blockTypeGrass":function(d){return "hautes herbes"},
"blockTypeGravel":function(d){return "gravier"},
"blockTypeLava":function(d){return "lave"},
"blockTypeLogAcacia":function(d){return "bûche d'acacia"},
"blockTypeLogBirch":function(d){return "tronc de bouleau"},
"blockTypeLogJungle":function(d){return "bûche de la jungle"},
"blockTypeLogOak":function(d){return "tronc de chêne"},
"blockTypeLogSpruce":function(d){return "tronc de sapin"},
"blockTypeOreCoal":function(d){return "minerai de charbon"},
"blockTypeOreDiamond":function(d){return "minerai de diamant"},
"blockTypeOreEmerald":function(d){return "minerai d'émeraude"},
"blockTypeOreGold":function(d){return "minerai d'or"},
"blockTypeOreIron":function(d){return "minerai de fer"},
"blockTypeOreLapis":function(d){return "minerai de lapis-lazuli"},
"blockTypeOreRedstone":function(d){return "minerai de redstone"},
"blockTypePlanksAcacia":function(d){return "planches en acacia"},
"blockTypePlanksBirch":function(d){return "planches en bouleau"},
"blockTypePlanksJungle":function(d){return "planches en bois tropical"},
"blockTypePlanksOak":function(d){return "planches en chêne"},
"blockTypePlanksSpruce":function(d){return "planches en sapin"},
"blockTypePressurePlateUp":function(d){return "plaque de détection"},
"blockTypeRail":function(d){return "rail"},
"blockTypeRailsRedstoneTorch":function(d){return "torche de redstone"},
"blockTypeRedstoneWire":function(d){return "fil de redstone"},
"blockTypeSand":function(d){return "sable"},
"blockTypeSandstone":function(d){return "grès"},
"blockTypeStone":function(d){return "roche"},
"blockTypeTnt":function(d){return "TNT"},
"blockTypeTree":function(d){return "arbre"},
"blockTypeWater":function(d){return "eau"},
"blockTypeWool":function(d){return "laine"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "devant"},
"blockWhileXAheadDo":function(d){return "faire"},
"blockWhileXAheadWhile":function(d){return "tant que"},
"cancel":function(d){return "Annuler"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "déplacer"},
"cloneModeNormal":function(d){return "normal"},
"connectToCodeConnection":function(d){return "Pour lancer ce projet dans Minecraft: Education Edition, veuillez utiliser l'application Code Connection."},
"destination":function(d){return "destination"},
"directionBack":function(d){return "retour"},
"directionDown":function(d){return "vers le bas"},
"directionForward":function(d){return "en avant"},
"directionLeft":function(d){return "vers la gauche"},
"directionMiddle":function(d){return "au milieu"},
"directionRight":function(d){return "vers la droite"},
"directionUp":function(d){return "vers le haut"},
"downloadButton":function(d){return "Télécharger"},
"entityType":function(d){return "type d'entité"},
"entityTypeChicken":function(d){return "poulet"},
"entityTypeCow":function(d){return "vache"},
"entityTypeCreeper":function(d){return "creeper"},
"entityTypeIronGolem":function(d){return "golem de fer"},
"entityTypePlayer":function(d){return "joueur"},
"entityTypeSheep":function(d){return "mouton"},
"entityTypeZombie":function(d){return "zombie"},
"eventTypeWhenAttacked":function(d){return "si attaqué"},
"eventTypeWhenDay":function(d){return "de jour"},
"eventTypeWhenNight":function(d){return "de nuit"},
"eventTypeWhenRun":function(d){return "quand l'exécution commence"},
"eventTypeWhenSpawned":function(d){return "après génération"},
"eventTypeWhenTouched":function(d){return "si touché"},
"eventTypeWhenUsed":function(d){return "après utilisation"},
"forever":function(d){return "à l'infini"},
"from":function(d){return "de"},
"generatedCodeDescription":function(d){return "En faisant glisser et en plaçant des blocs dans ce puzzle, tu as créé un ensemble d'instructions dans un langage informatique appelé Javascript. Ce code indique aux ordinateurs ce qui doit être afficher à l'écran. Tout ce que tu vois et fais dans Minecraft démarre également avec des lignes de code informatique comme celles-ci."},
"getdataof":function(d){return "obtenir données de"},
"getnameof":function(d){return "obtenir nom de"},
"houseSelectChooseFloorPlan":function(d){return "Choisis le plan de ta maison."},
"houseSelectEasy":function(d){return "Facile"},
"houseSelectHard":function(d){return "Difficile"},
"houseSelectLetsBuild":function(d){return "Construisons une maison."},
"houseSelectMedium":function(d){return "Intermédiaire"},
"import":function(d){return "Importer"},
"importShareLinkBody":function(d){return "Saisissez votre lien de partage Heure de Code et cliquez sur \"Importer\" pour copier votre code dans Minecraft"},
"importShareLinkHeader":function(d){return "Importer un lien de partage"},
"inSlotNumber":function(d){return "dans emplacement nombre"},
"itemTypeBlock":function(d){return "bloc"},
"itemTypeDecoration":function(d){return "décoration"},
"itemTypeMiscellaneous":function(d){return "divers"},
"itemTypeTool":function(d){return "outil"},
"items":function(d){return "objet(s)"},
"itemsOfBlockType":function(d){return "objet(s) de type de bloc"},
"level10FailureMessage":function(d){return "Recouvre la lave pour la traverser, puis extraie deux des blocs de fer de l'autre côté."},
"level11FailureMessage":function(d){return "Assure-toi de placer des pavés devant toi s’il y a de la lave. Cela te permettra d’extraire en toute sécurité cette rangée de ressources."},
"level12FailureMessage":function(d){return "Minez 3 blocs de redstone. Pour cela, appliquez ce que vous avez appris en construisant votre maison et utilisez des expressions « si » pour éviter de tomber dans la lave."},
"level13FailureMessage":function(d){return "Placez un « rail » sur le chemin de terre qui lie votre porte au bord de la carte."},
"level1FailureMessage":function(d){return "Vous devez utiliser des commandes pour rejoindre le mouton en marchant."},
"level1TooFewBlocksMessage":function(d){return "Essayez d'utiliser d'autres commandes pour rejoindre le mouton en marchant."},
"level2FailureMessage":function(d){return "Pour couper un arbre, atteignez son tronc et utilisez la commande « détruire un bloc »."},
"level2TooFewBlocksMessage":function(d){return "Essayez d'utiliser d'autres commandes pour couper l'arbre. Atteignez son tronc et utilisez la commande « détruire un bloc »."},
"level3FailureMessage":function(d){return "Pour récupérer la laine des deux moutons, atteignez chacun d'eux et utilisez la commande « tondre ». Pensez à utiliser des commandes pour tourner afin d'atteindre les moutons."},
"level3TooFewBlocksMessage":function(d){return "Essayez d'utiliser d'autres commandes pour récupérer la laine des deux moutons. Atteignez chacun d'eux et utilisez la commande « tondre »."},
"level4FailureMessage":function(d){return "Vous devez utiliser la commande « détruire un bloc » pour chacun des trois troncs d'arbre."},
"level5FailureMessage":function(d){return "Placez vos blocs sur le contour en terre pour construire un mur. La commande « répéter » (rose) exécute les commandes qui lui sont affectées, par exemple « placer un bloc » et « avancer »."},
"level6FailureMessage":function(d){return "Place des blocs sur le contour en terre de la maison pour terminer le puzzle."},
"level7FailureMessage":function(d){return "Utilisez la commande « planter » pour placer des cultures sur chaque parcelle de sol fauché (sombre)."},
"level8FailureMessage":function(d){return "Si vous touchez un creeper, il explose. Faufilez-vous à travers eux et entrez dans votre maison."},
"level9FailureMessage":function(d){return "Placez au moins 2 torches pour éclairer votre chemin ET minez au moins 2 blocs de charbon."},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "masqué"},
"maskModeReplace":function(d){return "remplacer"},
"minecraftBlock":function(d){return "bloc"},
"minecraftNotConnected":function(d){return "Minecraft n'est pas connecté"},
"miniBlockBricks":function(d){return "briques"},
"miniBlockBucketLava":function(d){return "seau de lave"},
"miniBlockBucketWater":function(d){return "seau d'eau"},
"miniBlockCarrots":function(d){return "carottes"},
"miniBlockCoal":function(d){return "charbon"},
"miniBlockCobblestone":function(d){return "pierre taillée"},
"miniBlockDiamond":function(d){return "diamant"},
"miniBlockDirt":function(d){return "terre"},
"miniBlockDirtCoarse":function(d){return "grosses saletés"},
"miniBlockEgg":function(d){return "œuf"},
"miniBlockEmerald":function(d){return "émeraude"},
"miniBlockGravel":function(d){return "gravier"},
"miniBlockGunPowder":function(d){return "poudre à canon"},
"miniBlockIngotGold":function(d){return "lingot d'or"},
"miniBlockIngotIron":function(d){return "lingot de fer"},
"miniBlockLapisLazuli":function(d){return "lapis-lazuli"},
"miniBlockLogAcacia":function(d){return "bûche d'acacia"},
"miniBlockLogBirch":function(d){return "tronc de bouleau"},
"miniBlockLogJungle":function(d){return "bûche de la jungle"},
"miniBlockLogOak":function(d){return "tronc de chêne"},
"miniBlockLogSpruce":function(d){return "tronc de sapin"},
"miniBlockMilk":function(d){return "lait"},
"miniBlockPlanksAcacia":function(d){return "planches en acacia"},
"miniBlockPlanksBirch":function(d){return "planches en bouleau"},
"miniBlockPlanksJungle":function(d){return "planches en bois tropical"},
"miniBlockPlanksOak":function(d){return "planches en chêne"},
"miniBlockPlanksSpruce":function(d){return "planches en sapin"},
"miniBlockPoppy":function(d){return "coquelicot"},
"miniBlockPotato":function(d){return "pomme de terre"},
"miniBlockRedstoneDust":function(d){return "poudre de redstone"},
"miniBlockSand":function(d){return "sable"},
"miniBlockSandstone":function(d){return "grès"},
"miniBlockSheep":function(d){return "mouton"},
"miniBlockWheat":function(d){return "blé"},
"miniBlockWool":function(d){return "laine"},
"nextLevelMsg":function(d){return "Casse-tête "+craft_locale.v(d,"puzzleNumber")+" terminé. Bravo !"},
"oldBlockHandling":function(d){return "old block"},
"oldBlockHandlingsDestroy":function(d){return "détruire"},
"oldBlockHandlingsKeep":function(d){return "garder"},
"oldBlockHandlingsReplace":function(d){return "remplacer"},
"onBehalfOf":function(d){return "à la place de"},
"playerSelectChooseCharacter":function(d){return "Choisissez votre personnage."},
"playerSelectChooseSelectButton":function(d){return "Sélectionner"},
"playerSelectLetsGetStarted":function(d){return "Commençons."},
"quantity":function(d){return "quantité"},
"reinfFeedbackMsg":function(d){return "Vous pouvez choisir « Continuer à jouer » pour reprendre votre partie."},
"relative":function(d){return "relative"},
"runAgent":function(d){return "Démarrer l'Agent"},
"score":function(d){return "Score"},
"seconds":function(d){return "seconde(s)"},
"selectChooseButton":function(d){return "Sélectionner"},
"soundTypeBump":function(d){return "bruit sourd"},
"soundTypeChickenBawk":function(d){return "poulet - gloussement"},
"soundTypeChickenHurt":function(d){return "poulet - blessé"},
"soundTypeCollectedBlock":function(d){return "bloc - récupération"},
"soundTypeCowHuff":function(d){return "vache - souffle"},
"soundTypeCowHurt":function(d){return "vache - blessée"},
"soundTypeCowMoo":function(d){return "vache - meuh"},
"soundTypeCowMooLong":function(d){return "vache - meuuuh"},
"soundTypeCreeperHiss":function(d){return "creeper - sifflement"},
"soundTypeDig_wood1":function(d){return "bois cassé"},
"soundTypeDoorOpen":function(d){return "ouverture de porte"},
"soundTypeExplode":function(d){return "exploser"},
"soundTypeFailure":function(d){return "niveau raté"},
"soundTypeFall":function(d){return "chute"},
"soundTypeFizz":function(d){return "pétillant"},
"soundTypeFuse":function(d){return "mèche"},
"soundTypeIronGolemHit":function(d){return "golem de fer touché"},
"soundTypeMetalWhack":function(d){return "métal - fracas"},
"soundTypeMinecart":function(d){return "wagonnet"},
"soundTypePlaceBlock":function(d){return "bloc - placé"},
"soundTypePunch":function(d){return "coup de poing"},
"soundTypeSheepBaa":function(d){return "mouton - bêê"},
"soundTypeStepFarmland":function(d){return "pas sur terre labourée"},
"soundTypeStepGrass":function(d){return "pas sur herbes hautes"},
"soundTypeStepGravel":function(d){return "pas sur gravier"},
"soundTypeStepStone":function(d){return "pas sur pierre"},
"soundTypeStepWood":function(d){return "pas sur bois"},
"soundTypeSuccess":function(d){return "niveau réussi"},
"soundTypeZombieBrains":function(d){return "zombie - gémissement"},
"soundTypeZombieGroan":function(d){return "zombie - grondement"},
"soundTypeZombieHurt":function(d){return "zombie - blessé"},
"target":function(d){return "cible"},
"testModeAll":function(d){return "tout"},
"testModeMasked":function(d){return "masqué"},
"tileData":function(d){return "données de dalles"},
"timeDay":function(d){return "jour"},
"timeLong":function(d){return "long"},
"timeMedium":function(d){return "intermédiaire"},
"timeNight":function(d){return "nuit"},
"timeRandom":function(d){return "aléatoire"},
"timeSet":function(d){return "définir temps sur"},
"timeShort":function(d){return "court"},
"timeVeryLong":function(d){return "très long"},
"timeVeryShort":function(d){return "très court"},
"to":function(d){return "à"},
"toSlotNumber":function(d){return "vers emplacement nombre"},
"tooManyBlocksFail":function(d){return "Casse-tête "+craft_locale.v(d,"puzzleNumber")+" terminé. Bravo ! Vous pouvez aussi le terminer avec "+craft_locale.p(d,"numBlocks",0,"fr",{"one":"1 bloc","other":craft_locale.n(d,"numBlocks")+" blocs"})+"."},
"turnRandom":function(d){return "tourner aléatoirement"},
"useArrowKeys":function(d){return "Vous n'avez pas besoin d'ajouter de blocs ! Déplacez-vous avec les touches de direction et appuyez sur la barre d'espace ou touchez l'aire de jeu pour utiliser les objets."},
"weather":function(d){return "météo"},
"weatherTypeClear":function(d){return "clair"},
"weatherTypeRain":function(d){return "pluie"},
"weatherTypeThunder":function(d){return "tonnerre"}};