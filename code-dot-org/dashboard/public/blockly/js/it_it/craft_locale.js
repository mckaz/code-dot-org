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
"absolute":function(d){return "assoluto"},
"agentGenericFailureMessage":function(d){return "Continua a programmare! Ricorda di usare l'Agent per farti aiutare."},
"agentTooFewBlocksFailureMessage":function(d){return "Prova ad aggiungere solo un blocco alla volta per portare l'Agent nel punto giusto."},
"at":function(d){return "a"},
"agentDiamondPathCongrats":function(d){return "Congratulazioni, hai trovato il sentiero del diamante! Finora hai raccolto "+craft_locale.p(d,"count",0,"it",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+"!"},
"blockActionAdd":function(d){return "aggiungi"},
"blockActionAttack":function(d){return "attacca"},
"blockActionClone":function(d){return "clona blocchi"},
"blockActionCloneFiltered":function(d){return "clona soltanto"},
"blockActionCollect":function(d){return "raccogli"},
"blockActionCollectAll":function(d){return "raccogli tutto"},
"blockActionDestroyEntity":function(d){return "sparisci"},
"blockActionDetect":function(d){return "rileva"},
"blockActionDetectRedstone":function(d){return "rileva pietrarossa"},
"blockActionDrop":function(d){return "produci"},
"blockActionDropAll":function(d){return "rilascia tutto"},
"blockActionExecute":function(d){return "esegui comando"},
"blockActionExplodeEntity":function(d){return "esplodi"},
"blockActionFill":function(d){return "riempi"},
"blockActionFlashEntity":function(d){return "lampeggia"},
"blockActionGetItemCount":function(d){return "ottieni il numero di oggetti"},
"blockActionGetItemCountInSlotNumber":function(d){return "get item count in slot number"},
"blockActionGetItemDetail":function(d){return "ottieni i dettagli dell'oggetto"},
"blockActionGetItemDetailInSlotNumber":function(d){return "get item detail in slot number"},
"blockActionGetItemSpace":function(d){return "get item space"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "get item space in slot number"},
"blockActionGive":function(d){return "dai"},
"blockActionInspect":function(d){return "ispeziona"},
"blockActionInspectData":function(d){return "ispeziona dati"},
"blockActionKill":function(d){return "uccidi bersaglio"},
"blockActionMove":function(d){return "sposta"},
"blockActionMoveAway":function(d){return "fai un passo lontano da"},
"blockActionMoveForward":function(d){return "vai avanti"},
"blockActionMoveRandom":function(d){return "fai un passo a caso"},
"blockActionMoveTo":function(d){return "vai verso"},
"blockActionMoveToward":function(d){return "fai un passo verso"},
"blockActionPlaySound":function(d){return "riproduci suono"},
"blockActionRepeat":function(d){return "ripeti"},
"blockActionRepeatRandom":function(d){return "ripeti a caso"},
"blockActionSetBlock":function(d){return "set block to"},
"blockActionSpawn":function(d){return "crea"},
"blockActionSummon":function(d){return "evoca"},
"blockActionTeleport":function(d){return "teletrasporta bersaglio"},
"blockActionTeleportToPlayer":function(d){return "teletrasporta verso il giocatore"},
"blockActionTestForBlock":function(d){return "tests whether a block type"},
"blockActionTestForBlocks":function(d){return "tests whether the pattern between"},
"blockActionToScore":function(d){return "al punteggio"},
"blockActionTransfer":function(d){return "trasferisci"},
"blockActionWait":function(d){return "aspetta"},
"blockActionWith":function(d){return "con"},
"blockData":function(d){return "dati blocco"},
"blockDestroyBlock":function(d){return "distruggi"},
"blockIf":function(d){return "se"},
"blockIfLavaAhead":function(d){return "se c'è lava davanti"},
"blockIs":function(d){return "è"},
"blockMove":function(d){return "sposta"},
"blockMoveBackward":function(d){return "vai indietro"},
"blockMoveForward":function(d){return "vai avanti"},
"blockPlace":function(d){return "metti"},
"blockPlaceTorch":function(d){return "metti una torcia"},
"blockPlaceXAheadAhead":function(d){return "davanti"},
"blockPlaceXAheadPlace":function(d){return "metti"},
"blockPlaceXPlace":function(d){return "metti"},
"blockPlantCrop":function(d){return "semina del grano"},
"blockShear":function(d){return "tosa"},
"blockTill":function(d){return "ara"},
"blockTillSoil":function(d){return "ara il terreno"},
"blockTurn":function(d){return "gira"},
"blockTurnLeft":function(d){return "gira a sinistra"},
"blockTurnRight":function(d){return "gira a destra"},
"blockType":function(d){return "tipo di blocco"},
"blockTypeBedrock":function(d){return "roccia di fondo"},
"blockTypeBricks":function(d){return "mattoni"},
"blockTypeClay":function(d){return "argilla"},
"blockTypeClayHardened":function(d){return "argilla indurita"},
"blockTypeCobblestone":function(d){return "ciottoli"},
"blockTypeDirt":function(d){return "terra"},
"blockTypeDirtCoarse":function(d){return "terra brulla"},
"blockTypeDoorIron":function(d){return "porta di ferro"},
"blockTypeEmpty":function(d){return "vuoto"},
"blockTypeFarmlandWet":function(d){return "terreno agricolo"},
"blockTypeGlass":function(d){return "vetro"},
"blockTypeGlowstone":function(d){return "luminite"},
"blockTypeGrass":function(d){return "erba"},
"blockTypeGravel":function(d){return "ghiaia"},
"blockTypeLava":function(d){return "lava"},
"blockTypeLogAcacia":function(d){return "tronco di acacia"},
"blockTypeLogBirch":function(d){return "tronco di betulla"},
"blockTypeLogJungle":function(d){return "tronco di legno della giungla"},
"blockTypeLogOak":function(d){return "tronco di quercia"},
"blockTypeLogSpruce":function(d){return "tronco di abete"},
"blockTypeOreCoal":function(d){return "minerale di carbone"},
"blockTypeOreDiamond":function(d){return "diamante grezzo"},
"blockTypeOreEmerald":function(d){return "smeraldo grezzo"},
"blockTypeOreGold":function(d){return "oro grezzo"},
"blockTypeOreIron":function(d){return "ferro grezzo"},
"blockTypeOreLapis":function(d){return "lapislazzuli grezzo"},
"blockTypeOreRedstone":function(d){return "minerale di pietrarossa"},
"blockTypePlanksAcacia":function(d){return "assi di acacia"},
"blockTypePlanksBirch":function(d){return "assi di betulla"},
"blockTypePlanksJungle":function(d){return "assi di legno della giungla"},
"blockTypePlanksOak":function(d){return "assi di quercia"},
"blockTypePlanksSpruce":function(d){return "assi di abete"},
"blockTypePressurePlateUp":function(d){return "pedana a pressione"},
"blockTypeRail":function(d){return "binario"},
"blockTypeRailsRedstoneTorch":function(d){return "torcia di pietrarossa"},
"blockTypeRedstoneWire":function(d){return "filo di pietrarossa"},
"blockTypeSand":function(d){return "sabbia"},
"blockTypeSandstone":function(d){return "arenaria"},
"blockTypeStone":function(d){return "pietra"},
"blockTypeTnt":function(d){return "tritolo"},
"blockTypeTree":function(d){return "albero"},
"blockTypeWater":function(d){return "acqua"},
"blockTypeWool":function(d){return "lana"},
"blockTypeWoolBlue":function(d){return "lana blu"},
"blockTypeWoolMagenta":function(d){return "lana magenta"},
"blockTypeWoolOrange":function(d){return "lana arancione"},
"blockTypeWoolPink":function(d){return "lana rosa"},
"blockTypeWoolRed":function(d){return "lana rossa"},
"blockTypeWoolYellow":function(d){return "lana gialla"},
"blockWhileXAheadAhead":function(d){return "davanti"},
"blockWhileXAheadDo":function(d){return "esegui"},
"blockWhileXAheadWhile":function(d){return "mentre"},
"cancel":function(d){return "Annulla"},
"cloneMode":function(d){return "modalità clonazione"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "sposta"},
"cloneModeNormal":function(d){return "normale"},
"connectToCodeConnection":function(d){return "Per eseguire questo progetto in Minecraft: Education Edition, usa l'applicazione Code Connection."},
"destination":function(d){return "destinazione"},
"directionBack":function(d){return "indietro"},
"directionDown":function(d){return "in basso"},
"directionForward":function(d){return "avanti"},
"directionLeft":function(d){return "a sinistra"},
"directionMiddle":function(d){return "al centro"},
"directionRight":function(d){return "a destra"},
"directionUp":function(d){return "in alto"},
"downloadButton":function(d){return "Scarica"},
"entityType":function(d){return "tipo entità"},
"entityTypeChicken":function(d){return "pollo"},
"entityTypeCow":function(d){return "mucca"},
"entityTypeCreeper":function(d){return "Creeper"},
"entityTypeIronGolem":function(d){return "golem di ferro"},
"entityTypePlayer":function(d){return "giocatore"},
"entityTypeSheep":function(d){return "pecora"},
"entityTypeZombie":function(d){return "zombie"},
"eventTypeWhenAttacked":function(d){return "quando viene attaccato"},
"eventTypeWhenDay":function(d){return "di giorno"},
"eventTypeWhenNight":function(d){return "di notte"},
"eventTypeWhenRun":function(d){return "quando si clicca su \"Esegui\""},
"eventTypeWhenSpawned":function(d){return "quando viene creato"},
"eventTypeWhenTouched":function(d){return "quando toccato"},
"eventTypeWhenUsed":function(d){return "quando utilizzato"},
"forever":function(d){return "per sempre"},
"from":function(d){return "da"},
"generatedCodeDescription":function(d){return "Unendo i blocchi colorati che rappresentano dei comandi per il calcolatore, hai creato in questo esercizio un insieme di istruzioni in un linguaggio di programmazione chiamato JavaScript. Questo codice dice al computer che cosa mostrare sullo schermo. Tutto quello che vedi e fai in Minecraft ha inizio da linee di codice come queste."},
"getdataof":function(d){return "ottieni dati di"},
"getnameof":function(d){return "ottieni nome di"},
"houseSelectChooseFloorPlan":function(d){return "Scegli che forma vuoi che abbia la tua casa."},
"houseSelectEasy":function(d){return "Facile"},
"houseSelectHard":function(d){return "Difficile"},
"houseSelectLetsBuild":function(d){return "Costruisci una casa."},
"houseSelectMedium":function(d){return "Medio"},
"import":function(d){return "Importa"},
"importShareLinkBody":function(d){return "Digita il tuo collegamento di condivisione di L'Ora del Codice e clicca \"Importa\" per copiare il tuo codice in Minecraft"},
"importShareLinkHeader":function(d){return "Importa un collegamento di condivisione"},
"inSlotNumber":function(d){return "in numero slot"},
"itemTypeBlock":function(d){return "blocco"},
"itemTypeDecoration":function(d){return "decorazione"},
"itemTypeMiscellaneous":function(d){return "varie"},
"itemTypeTool":function(d){return "attrezzo"},
"items":function(d){return "oggetto/i"},
"itemsOfBlockType":function(d){return "oggetto/i di tipo blocco"},
"level10FailureMessage":function(d){return "Ricopri la lava prima di passarci sopra, poi estrai due blocchi di ferro sull'altra sponda."},
"level11FailureMessage":function(d){return "Se davanti a te c'è della lava, assicurati di mettere dei ciottoli. Questo ti permetterà di estrarre in modo sicuro le risorse che ti trovi davanti."},
"level12FailureMessage":function(d){return "Estrai tre blocchi di pietrarossa. Questo combina ciò che hai imparato dalla costruzione della casa e dall'uso delle dichiarazioni \"se\" per non cadere nella lava."},
"level13FailureMessage":function(d){return "Posiziona il \"binario\" lungo il sentiero che va dalla tua porta al margine della mappa."},
"level1FailureMessage":function(d){return "Devi usare le istruzioni per raggiungere la pecora."},
"level1TooFewBlocksMessage":function(d){return "Prova ad usare più istruzioni per raggiungere le pecore."},
"level2FailureMessage":function(d){return "Per abbattere un albero, avvicinati al suo tronco e usa l'istruzione `distruggi`."},
"level2TooFewBlocksMessage":function(d){return "Per abbattere un albero, prova ad usare più istruzioni. Avvicinati al suo tronco e usa l'istruzione `distruggi`."},
"level3FailureMessage":function(d){return "Per raccogliere la lana da entrambe le pecore, devi raggiungere ciascuna delle due e usare il comando `tosa`. Ricordati di usare le istruzioni per girarti se vuoi raggiungere le pecore."},
"level3TooFewBlocksMessage":function(d){return "Prova ad usare più istruzioni per raccogliere la lana da entrambe le pecore. Avvicinati a ciascuna e usa l'istruzione `tosa`."},
"level4FailureMessage":function(d){return "Devi usare l'istruzione `distruggi` su ciascun tronco d'albero."},
"level5FailureMessage":function(d){return "Per costruire un muro devi posizionare le assi di legno sul contorno di terra. Il blocco rosa `ripeti ... volte` eseguirà per il numero di volte che hai specificato le istruzioni poste al suo interno, come ad esempio `metti assi di ... ` e `vai avanti`."},
"level6FailureMessage":function(d){return "Per completare l'esercizio devi posizionare le assi di legno sul contorno di terra della casa."},
"level7FailureMessage":function(d){return "Usa l'istruzione `semina` per piantare del grano su ogni pezzo di terreno arato."},
"level8FailureMessage":function(d){return "Se tocchi un Creeper, questo esploderà. Aggirali per entrare in casa."},
"level9FailureMessage":function(d){return "Non dimenticarti di mettere almeno due torce per illuminare il percorso ed estrarre almeno due pezzi di carbone."},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "masked"},
"maskModeReplace":function(d){return "sostituisci"},
"minecraftBlock":function(d){return "blocco"},
"minecraftNotConnected":function(d){return "Minecraft non connesso"},
"miniBlockBricks":function(d){return "mattoni"},
"miniBlockBucketLava":function(d){return "secchio di lava"},
"miniBlockBucketWater":function(d){return "secchio d'acqua"},
"miniBlockCarrots":function(d){return "carote"},
"miniBlockCoal":function(d){return "carbone"},
"miniBlockCobblestone":function(d){return "ciottoli"},
"miniBlockDiamond":function(d){return "diamante"},
"miniBlockDirt":function(d){return "terra"},
"miniBlockDirtCoarse":function(d){return "terra brulla"},
"miniBlockEgg":function(d){return "uovo"},
"miniBlockEmerald":function(d){return "smeraldo"},
"miniBlockGravel":function(d){return "ghiaia"},
"miniBlockGunPowder":function(d){return "polvere da sparo"},
"miniBlockIngotGold":function(d){return "lingotto d'oro"},
"miniBlockIngotIron":function(d){return "lingotto di ferro"},
"miniBlockLapisLazuli":function(d){return "lapislazzulo"},
"miniBlockLogAcacia":function(d){return "tronco di acacia"},
"miniBlockLogBirch":function(d){return "tronco di betulla"},
"miniBlockLogJungle":function(d){return "tronco di legno della giungla"},
"miniBlockLogOak":function(d){return "tronco di quercia"},
"miniBlockLogSpruce":function(d){return "tronco di abete"},
"miniBlockMilk":function(d){return "latte"},
"miniBlockPlanksAcacia":function(d){return "assi di acacia"},
"miniBlockPlanksBirch":function(d){return "assi di betulla"},
"miniBlockPlanksJungle":function(d){return "assi di legno della giungla"},
"miniBlockPlanksOak":function(d){return "assi di quercia"},
"miniBlockPlanksSpruce":function(d){return "assi di abete"},
"miniBlockPoppy":function(d){return "papavero"},
"miniBlockPotato":function(d){return "patata"},
"miniBlockRedstoneDust":function(d){return "polvere di pietrarossa"},
"miniBlockSand":function(d){return "sabbia"},
"miniBlockSandstone":function(d){return "arenaria"},
"miniBlockSheep":function(d){return "pecora"},
"miniBlockWheat":function(d){return "grano"},
"miniBlockWool":function(d){return "lana"},
"nextLevelMsg":function(d){return "Complimenti! Hai completato l'esercizio "+craft_locale.v(d,"puzzleNumber")+"."},
"oldBlockHandling":function(d){return "old block at"},
"oldBlockHandlingsDestroy":function(d){return "distruggi"},
"oldBlockHandlingsKeep":function(d){return "tieni"},
"oldBlockHandlingsReplace":function(d){return "sostituisci"},
"onBehalfOf":function(d){return "per conto di"},
"playerSelectChooseCharacter":function(d){return "Scegli il tuo personaggio."},
"playerSelectChooseSelectButton":function(d){return "Seleziona"},
"playerSelectLetsGetStarted":function(d){return "Inizia."},
"quantity":function(d){return "quantità"},
"reinfFeedbackMsg":function(d){return "Seleziona \"Continua a giocare\" per tornare alla tua partita."},
"relative":function(d){return "parente"},
"runAgent":function(d){return "Esegui Agent"},
"score":function(d){return "Punteggio"},
"seconds":function(d){return "secondo/i"},
"selectChooseButton":function(d){return "Seleziona"},
"soundTypeBump":function(d){return "impatto"},
"soundTypeChickenBawk":function(d){return "chiocciare di pollo"},
"soundTypeChickenHurt":function(d){return "gemito di pollo"},
"soundTypeCollectedBlock":function(d){return "blocco raccolto"},
"soundTypeCowHuff":function(d){return "sbuffo di mucca"},
"soundTypeCowHurt":function(d){return "gemito di mucca"},
"soundTypeCowMoo":function(d){return "muggito di mucca"},
"soundTypeCowMooLong":function(d){return "muggito prolungato di mucca"},
"soundTypeCreeperHiss":function(d){return "sibilo di Creeper"},
"soundTypeDig_wood1":function(d){return "legno spezzato"},
"soundTypeDoorOpen":function(d){return "apertura di porta"},
"soundTypeExplode":function(d){return "esplodi"},
"soundTypeFailure":function(d){return "livello fallito"},
"soundTypeFall":function(d){return "caduta"},
"soundTypeFizz":function(d){return "effervescenza"},
"soundTypeFuse":function(d){return "fusione"},
"soundTypeIronGolemHit":function(d){return "colpo di golem di ferro"},
"soundTypeMetalWhack":function(d){return "tonfo metallico"},
"soundTypeMinecart":function(d){return "vagonetto"},
"soundTypePlaceBlock":function(d){return "blocco posizionato"},
"soundTypePunch":function(d){return "pugno"},
"soundTypeSheepBaa":function(d){return "belato di pecora"},
"soundTypeStepFarmland":function(d){return "camminata su zolla"},
"soundTypeStepGrass":function(d){return "camminata su erba"},
"soundTypeStepGravel":function(d){return "camminata su ghiaia"},
"soundTypeStepStone":function(d){return "camminata su pietra"},
"soundTypeStepWood":function(d){return "camminata su legno"},
"soundTypeSuccess":function(d){return "livello superato"},
"soundTypeZombieBrains":function(d){return "lamento di zombie"},
"soundTypeZombieGroan":function(d){return "grugnito di zombie"},
"soundTypeZombieHurt":function(d){return "gemito di zombie"},
"target":function(d){return "bersaglio"},
"testModeAll":function(d){return "tutto"},
"testModeMasked":function(d){return "masked"},
"tileData":function(d){return "dati blocco"},
"timeDay":function(d){return "giorno"},
"timeLong":function(d){return "lungamente"},
"timeMedium":function(d){return "mediamente"},
"timeNight":function(d){return "notte"},
"timeRandom":function(d){return "a caso"},
"timeSet":function(d){return "imposta il tempo in"},
"timeShort":function(d){return "brevemente"},
"timeVeryLong":function(d){return "molto lungamente"},
"timeVeryShort":function(d){return "molto brevemente"},
"to":function(d){return "a"},
"toSlotNumber":function(d){return "a numero slot"},
"tooManyBlocksFail":function(d){return "Puzzle "+craft_locale.v(d,"puzzleNumber")+" completato. Congratulazioni! È anche possibile completarlo con "+craft_locale.p(d,"numBlocks",0,"it",{"one":"un blocco","other":craft_locale.n(d,"numBlocks")+" blocchi"})+"."},
"turnRandom":function(d){return "gira a caso"},
"useArrowKeys":function(d){return "Non hai bisogno di aggiungere alcun blocco! Muoviti con le frecce e premi la barra spaziatrice o tocca il piano di gioco per usare gli oggetti."},
"weather":function(d){return "meteo"},
"weatherTypeClear":function(d){return "cielo sereno"},
"weatherTypeRain":function(d){return "pioggia"},
"weatherTypeThunder":function(d){return "tuono"}};