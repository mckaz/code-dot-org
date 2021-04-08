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
"absolute":function(d){return "absolut"},
"agentGenericFailureMessage":function(d){return "Programmiere weiter! Nutze den Agenten zur Hilfe."},
"agentTooFewBlocksFailureMessage":function(d){return "Versuche, immer nur einen Block gleichzeitig hinzuzufügen, um den Agenten zum passenden Platz zu bringen."},
"at":function(d){return "auf"},
"agentDiamondPathCongrats":function(d){return "Herzlichen Glückwunsch. Du hast den Diamantenweg gefunden! Du hast bisher "+craft_locale.p(d,"count",0,"de",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" gefunden!"},
"blockActionAdd":function(d){return "Hinzufügen"},
"blockActionAttack":function(d){return "angreifen"},
"blockActionClone":function(d){return "Blöcke klonen"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "sammle"},
"blockActionCollectAll":function(d){return "alle sammeln"},
"blockActionDestroyEntity":function(d){return "verschwinden"},
"blockActionDetect":function(d){return "erkennen"},
"blockActionDetectRedstone":function(d){return "Redstone erkennen"},
"blockActionDrop":function(d){return "fallenlassen"},
"blockActionDropAll":function(d){return "alles fallenlassen"},
"blockActionExecute":function(d){return "Befehl ausführen"},
"blockActionExplodeEntity":function(d){return "explodieren"},
"blockActionFill":function(d){return "fill from"},
"blockActionFlashEntity":function(d){return "blinken"},
"blockActionGetItemCount":function(d){return "Anzahl Gegenstände abfragen"},
"blockActionGetItemCountInSlotNumber":function(d){return "get item count in slot number"},
"blockActionGetItemDetail":function(d){return "Gegenstandsinfos abfragen"},
"blockActionGetItemDetailInSlotNumber":function(d){return "get item detail in slot number"},
"blockActionGetItemSpace":function(d){return "get item space"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "get item space in slot number"},
"blockActionGive":function(d){return "give"},
"blockActionInspect":function(d){return "prüfen"},
"blockActionInspectData":function(d){return "Daten prüfen"},
"blockActionKill":function(d){return "Ziel töten"},
"blockActionMove":function(d){return "bewege"},
"blockActionMoveAway":function(d){return "wegbewegen von"},
"blockActionMoveForward":function(d){return "vorwärts bewegen"},
"blockActionMoveRandom":function(d){return "zufällig bewegen"},
"blockActionMoveTo":function(d){return "gehe zu"},
"blockActionMoveToward":function(d){return "einen Schritt hin"},
"blockActionPlaySound":function(d){return "Geräusch abspielen"},
"blockActionRepeat":function(d){return "wiederholen"},
"blockActionRepeatRandom":function(d){return "zufällig wiederholen"},
"blockActionSetBlock":function(d){return "set block"},
"blockActionSpawn":function(d){return "spawnen"},
"blockActionSummon":function(d){return "beschwören"},
"blockActionTeleport":function(d){return "Ziel teleportieren"},
"blockActionTeleportToPlayer":function(d){return "zu Spieler teleportieren"},
"blockActionTestForBlock":function(d){return "tests whether a block type"},
"blockActionTestForBlocks":function(d){return "tests whether the pattern between"},
"blockActionToScore":function(d){return "zur Punktzahl"},
"blockActionTransfer":function(d){return "transferieren"},
"blockActionWait":function(d){return "warten"},
"blockActionWith":function(d){return "mit"},
"blockData":function(d){return "Daten blockieren"},
"blockDestroyBlock":function(d){return "Baustein zerstören"},
"blockIf":function(d){return "wenn"},
"blockIfLavaAhead":function(d){return "wenn Lava voraus"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "bewege"},
"blockMoveBackward":function(d){return "rückwärts bewegen"},
"blockMoveForward":function(d){return "vorwärts bewegen"},
"blockPlace":function(d){return "platziere"},
"blockPlaceTorch":function(d){return "Fackel platzieren"},
"blockPlaceXAheadAhead":function(d){return "voraus"},
"blockPlaceXAheadPlace":function(d){return "platziere"},
"blockPlaceXPlace":function(d){return "platziere"},
"blockPlantCrop":function(d){return "pflanzen"},
"blockShear":function(d){return "schere"},
"blockTill":function(d){return "bis"},
"blockTillSoil":function(d){return "Erde umgraben"},
"blockTurn":function(d){return "drehen"},
"blockTurnLeft":function(d){return "nach links drehen"},
"blockTurnRight":function(d){return "nach rechts drehen"},
"blockType":function(d){return "Blocktyp"},
"blockTypeBedrock":function(d){return "Grundgestein"},
"blockTypeBricks":function(d){return "Ziegel"},
"blockTypeClay":function(d){return "Ton"},
"blockTypeClayHardened":function(d){return "gebrannter Ton"},
"blockTypeCobblestone":function(d){return "Bruchstein"},
"blockTypeDirt":function(d){return "Erde"},
"blockTypeDirtCoarse":function(d){return "Grobe Erde"},
"blockTypeDoorIron":function(d){return "Eisentür"},
"blockTypeEmpty":function(d){return "leer"},
"blockTypeFarmlandWet":function(d){return "Ackerland"},
"blockTypeGlass":function(d){return "Glas"},
"blockTypeGlowstone":function(d){return "Glowstone"},
"blockTypeGrass":function(d){return "Gras"},
"blockTypeGravel":function(d){return "Kies"},
"blockTypeLava":function(d){return "Lava"},
"blockTypeLogAcacia":function(d){return "Akazienblock"},
"blockTypeLogBirch":function(d){return "Birkenblock"},
"blockTypeLogJungle":function(d){return "Tropenbaumblock"},
"blockTypeLogOak":function(d){return "Eichenblock"},
"blockTypeLogSpruce":function(d){return "Fichtenblock"},
"blockTypeOreCoal":function(d){return "Steinkohle"},
"blockTypeOreDiamond":function(d){return "Diamanterz"},
"blockTypeOreEmerald":function(d){return "Smaragderz"},
"blockTypeOreGold":function(d){return "Golderz"},
"blockTypeOreIron":function(d){return "Eisenerz"},
"blockTypeOreLapis":function(d){return "Lapislazulierz"},
"blockTypeOreRedstone":function(d){return "Redstone-Erz"},
"blockTypePlanksAcacia":function(d){return "Akazienholzbretter"},
"blockTypePlanksBirch":function(d){return "Birkenholzbretter"},
"blockTypePlanksJungle":function(d){return "Tropenbaumbretter"},
"blockTypePlanksOak":function(d){return "Eichenholzbretter"},
"blockTypePlanksSpruce":function(d){return "Fichtenholzbretter"},
"blockTypePressurePlateUp":function(d){return "Druckplatte"},
"blockTypeRail":function(d){return "Schiene"},
"blockTypeRailsRedstoneTorch":function(d){return "Redstone-Fackel"},
"blockTypeRedstoneWire":function(d){return "Redstone-Leitung"},
"blockTypeSand":function(d){return "Sand"},
"blockTypeSandstone":function(d){return "Sandstein"},
"blockTypeStone":function(d){return "Stein"},
"blockTypeTnt":function(d){return "TNT"},
"blockTypeTree":function(d){return "Baum"},
"blockTypeWater":function(d){return "Wasser"},
"blockTypeWool":function(d){return "Wolle"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "voraus"},
"blockWhileXAheadDo":function(d){return "führe aus"},
"blockWhileXAheadWhile":function(d){return "solange"},
"cancel":function(d){return "Abbrechen"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "bewege"},
"cloneModeNormal":function(d){return "Normal"},
"connectToCodeConnection":function(d){return "Verwende die Code-Verbindung-Anwendung, um dieses Projekt in Minecraft: Education Edition auszuführen."},
"destination":function(d){return "destination"},
"directionBack":function(d){return "zurück"},
"directionDown":function(d){return "runter"},
"directionForward":function(d){return "vorwärts"},
"directionLeft":function(d){return "links"},
"directionMiddle":function(d){return "Mitte"},
"directionRight":function(d){return "rechts"},
"directionUp":function(d){return "hoch"},
"downloadButton":function(d){return "Herunterladen"},
"entityType":function(d){return "Entitätstyp"},
"entityTypeChicken":function(d){return "Huhn"},
"entityTypeCow":function(d){return "Kuh"},
"entityTypeCreeper":function(d){return "Creeper"},
"entityTypeIronGolem":function(d){return "Eisengolem"},
"entityTypePlayer":function(d){return "Spieler"},
"entityTypeSheep":function(d){return "Schaf"},
"entityTypeZombie":function(d){return "Zombie"},
"eventTypeWhenAttacked":function(d){return "wenn angegriffen"},
"eventTypeWhenDay":function(d){return "bei Tag"},
"eventTypeWhenNight":function(d){return "bei Nacht"},
"eventTypeWhenRun":function(d){return "wenn Ausführen"},
"eventTypeWhenSpawned":function(d){return "beim Spawnen"},
"eventTypeWhenTouched":function(d){return "bei Berührung"},
"eventTypeWhenUsed":function(d){return "bei Verwendung"},
"forever":function(d){return "für immer"},
"from":function(d){return "from"},
"generatedCodeDescription":function(d){return "Durch das Ziehen und Platzieren der Blöcke in diesem Puzzle hast du Anweisungen in einer Computersprache namens Java erstellt. Dieser Code sagt dem Computer, was auf dem Bildschirm angezeigt werden soll. Alles, was du in Minecraft sehen kannst, hat ebenfalls mit solchen Code-Zeilen begonnen."},
"getdataof":function(d){return "Daten von abfragen"},
"getnameof":function(d){return "Name von abfragen"},
"houseSelectChooseFloorPlan":function(d){return "Wähle den Bauplan für dein Haus."},
"houseSelectEasy":function(d){return "Einfach"},
"houseSelectHard":function(d){return "Schwer"},
"houseSelectLetsBuild":function(d){return "Bauen wir ein Haus."},
"houseSelectMedium":function(d){return "Mittel"},
"import":function(d){return "Importieren"},
"importShareLinkBody":function(d){return "Gibt deinen Die Stunde des Codes-Freigabelink hier ein und klicke auf \"Importieren\", um deinen Code in Minecraft zu kopieren."},
"importShareLinkHeader":function(d){return "Einen Freigabelink importieren"},
"inSlotNumber":function(d){return "in Slot-Nummer"},
"itemTypeBlock":function(d){return "Block"},
"itemTypeDecoration":function(d){return "Dekoration"},
"itemTypeMiscellaneous":function(d){return "Verschiedenes"},
"itemTypeTool":function(d){return "Werkzeug"},
"items":function(d){return "Gegenstände"},
"itemsOfBlockType":function(d){return "Gegenstände des Blocktyps"},
"level10FailureMessage":function(d){return "Bedecke die Lava, um sie zu überqueren. Baue dann zwei der Eisenblöcke auf der anderen Seite ab."},
"level11FailureMessage":function(d){return "Du solltest immer einen Bruchstein vor dir platzieren, wenn du Lava vor dir siehst. So kannst du gefahrenlos diese Reihe an Ressourcen abbauen."},
"level12FailureMessage":function(d){return "Vergiss nicht, 3 Redstone-Blöcke abzubauen. Das kombiniert das beim Hausbauen Gelernte und die Verwendung von \"wenn\"-Anweisungen, um nicht in die Lava zu fallen."},
"level13FailureMessage":function(d){return "Platziere \"Schiene\" entlang des Erdpfads, der von deiner Tür zur Ende der Karte führt."},
"level1FailureMessage":function(d){return "Du brauchst diese Befehle, um zu den Schafen zu gelangen."},
"level1TooFewBlocksMessage":function(d){return "Verwende mehr Befehle, um zu den Schafen zu gelangen."},
"level2FailureMessage":function(d){return "Wenn du einen Baum fällen möchtest, bewege dich zu seinem Stamm und verwende den Befehl \"Block zerstören\"."},
"level2TooFewBlocksMessage":function(d){return "Verwende mehr Befehle, um den Baum zu fällen. Bewege dich zu seinem Stamm und verwende den Befehl \"Block zerstören\"."},
"level3FailureMessage":function(d){return "Wenn du Wolle von beiden Schafen sammeln möchtest, gehe zu ihnen hin und verwende den Befehl \"scheren\". Vergiss nicht auf die Drehbefehle, um zu den Schafen zu gelangen."},
"level3TooFewBlocksMessage":function(d){return "Verwende mehr Befehle, um Wolle von beiden Schafen zu sammeln. Gehe zu ihnen hin und verwende den Befehl \"scheren\"."},
"level4FailureMessage":function(d){return "Du musst bei jedem der drei Baumstämme den Befehl \"Block zerstören\" verwenden."},
"level5FailureMessage":function(d){return "Platziere die Blöcke auf dem Erdumriss, um eine Mauer zu bauen. Der rosa \"wiederholen\"-Befehl führt Befehle aus, die im Umriss platziert sind. Dazu gehören \"Block platzieren\" und \"vorwärtsbewegen\"."},
"level6FailureMessage":function(d){return "Platziere Blocks auf dem Erdumriss des Hauses, um das Puzzle zu lösen."},
"level7FailureMessage":function(d){return "Setze den \"pflanzen\"-Befehl ein, um auf jedem Fleck dunklen Ackerbodens Pflanzen zu platzieren."},
"level8FailureMessage":function(d){return "Wenn du einen Creeper berührst, explodiert er. Schleiche dich an ihnen vorbei und betritt dein Haus."},
"level9FailureMessage":function(d){return "Vergiss nicht, zwei Fackeln für die Beleuchtung deines Weges zu platzieren UND mindestens 2 Kohle abzubauen."},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "maskiert"},
"maskModeReplace":function(d){return "ersetzen"},
"minecraftBlock":function(d){return "Block"},
"minecraftNotConnected":function(d){return "Minecraft ist nicht verbunden"},
"miniBlockBricks":function(d){return "Ziegel"},
"miniBlockBucketLava":function(d){return "Lavaeimer"},
"miniBlockBucketWater":function(d){return "Wassereimer"},
"miniBlockCarrots":function(d){return "Karotten"},
"miniBlockCoal":function(d){return "Kohle"},
"miniBlockCobblestone":function(d){return "Bruchstein"},
"miniBlockDiamond":function(d){return "Diamant"},
"miniBlockDirt":function(d){return "Erde"},
"miniBlockDirtCoarse":function(d){return "Grobe Erde"},
"miniBlockEgg":function(d){return "Ei"},
"miniBlockEmerald":function(d){return "Smaragd"},
"miniBlockGravel":function(d){return "Kies"},
"miniBlockGunPowder":function(d){return "Schießpulver"},
"miniBlockIngotGold":function(d){return "Goldbarren"},
"miniBlockIngotIron":function(d){return "Eisenbarren"},
"miniBlockLapisLazuli":function(d){return "Lapislazuli"},
"miniBlockLogAcacia":function(d){return "Akazienblock"},
"miniBlockLogBirch":function(d){return "Birkenblock"},
"miniBlockLogJungle":function(d){return "Tropenbaumblock"},
"miniBlockLogOak":function(d){return "Eichenblock"},
"miniBlockLogSpruce":function(d){return "Fichtenblock"},
"miniBlockMilk":function(d){return "Milch"},
"miniBlockPlanksAcacia":function(d){return "Akazienholzbretter"},
"miniBlockPlanksBirch":function(d){return "Birkenholzbretter"},
"miniBlockPlanksJungle":function(d){return "Tropenbaumbretter"},
"miniBlockPlanksOak":function(d){return "Eichenholzbretter"},
"miniBlockPlanksSpruce":function(d){return "Fichtenholzbretter"},
"miniBlockPoppy":function(d){return "Mohn"},
"miniBlockPotato":function(d){return "Kartoffel"},
"miniBlockRedstoneDust":function(d){return "Redstone-Staub"},
"miniBlockSand":function(d){return "Sand"},
"miniBlockSandstone":function(d){return "Sandstein"},
"miniBlockSheep":function(d){return "Schaf"},
"miniBlockWheat":function(d){return "Weizen"},
"miniBlockWool":function(d){return "Wolle"},
"nextLevelMsg":function(d){return "Puzzle "+craft_locale.v(d,"puzzleNumber")+" gelöst. Gratulation!"},
"oldBlockHandling":function(d){return "old block"},
"oldBlockHandlingsDestroy":function(d){return "zerstören"},
"oldBlockHandlingsKeep":function(d){return "behalten"},
"oldBlockHandlingsReplace":function(d){return "ersetzen"},
"onBehalfOf":function(d){return "anstelle von"},
"playerSelectChooseCharacter":function(d){return "Wähle deinen Charakter."},
"playerSelectChooseSelectButton":function(d){return "Auswählen"},
"playerSelectLetsGetStarted":function(d){return "Lass uns loslegen."},
"quantity":function(d){return "Menge"},
"reinfFeedbackMsg":function(d){return "Du kannst \"weiterspielen\" wählen, um zu deinem Spiel zurückzukehren."},
"relative":function(d){return "relative"},
"runAgent":function(d){return "Agent ausführen"},
"score":function(d){return "Punktzahl"},
"seconds":function(d){return "Sekunde(n)"},
"selectChooseButton":function(d){return "Auswählen"},
"soundTypeBump":function(d){return "stoßen"},
"soundTypeChickenBawk":function(d){return "gackern"},
"soundTypeChickenHurt":function(d){return "verletztes Huhn"},
"soundTypeCollectedBlock":function(d){return "eingesammelter Block"},
"soundTypeCowHuff":function(d){return "schnaubende Kuh"},
"soundTypeCowHurt":function(d){return "verletzte Kuh"},
"soundTypeCowMoo":function(d){return "Kuh macht muh"},
"soundTypeCowMooLong":function(d){return "Kuh macht muuuh"},
"soundTypeCreeperHiss":function(d){return "zischender Creeper"},
"soundTypeDig_wood1":function(d){return "brechendes Holz"},
"soundTypeDoorOpen":function(d){return "Tür öffnen"},
"soundTypeExplode":function(d){return "explodieren"},
"soundTypeFailure":function(d){return "gescheiterter Level"},
"soundTypeFall":function(d){return "fallen"},
"soundTypeFizz":function(d){return "sprudeln"},
"soundTypeFuse":function(d){return "Zündschnur"},
"soundTypeIronGolemHit":function(d){return "Eisengolemtreffer"},
"soundTypeMetalWhack":function(d){return "Metallschlag"},
"soundTypeMinecart":function(d){return "Lore"},
"soundTypePlaceBlock":function(d){return "Block platzieren"},
"soundTypePunch":function(d){return "Schlag"},
"soundTypeSheepBaa":function(d){return "Schaf macht mäh"},
"soundTypeStepFarmland":function(d){return "Schritt auf Ackerland"},
"soundTypeStepGrass":function(d){return "Schritt im Gras"},
"soundTypeStepGravel":function(d){return "Schritt im Kies"},
"soundTypeStepStone":function(d){return "Schritt auf Stein"},
"soundTypeStepWood":function(d){return "Schritt auf Holz"},
"soundTypeSuccess":function(d){return "erfolgreicher Level"},
"soundTypeZombieBrains":function(d){return "Zombiestöhnen"},
"soundTypeZombieGroan":function(d){return "Zombieknurren"},
"soundTypeZombieHurt":function(d){return "verletzter Zombie"},
"target":function(d){return "Ziel"},
"testModeAll":function(d){return "Alle"},
"testModeMasked":function(d){return "maskiert"},
"tileData":function(d){return "Felddaten"},
"timeDay":function(d){return "Tag"},
"timeLong":function(d){return "lang"},
"timeMedium":function(d){return "mittel"},
"timeNight":function(d){return "Nacht"},
"timeRandom":function(d){return "zufällig"},
"timeSet":function(d){return "Zeit setzen auf"},
"timeShort":function(d){return "kurz"},
"timeVeryLong":function(d){return "sehr lang"},
"timeVeryShort":function(d){return "sehr kurz"},
"to":function(d){return "für"},
"toSlotNumber":function(d){return "in Slot-Nummer"},
"tooManyBlocksFail":function(d){return "Puzzle "+craft_locale.v(d,"puzzleNumber")+" gelöst. Gratulation! Es kann auch mit "+craft_locale.p(d,"numBlocks",0,"de",{"one":"1 Block","other":craft_locale.n(d,"numBlocks")+" Blöcken"})+" gelöst werden."},
"turnRandom":function(d){return "zufällig drehen"},
"useArrowKeys":function(d){return "Du musst keine Blöcke hinzufügen! Bewege dich mit den Pfeiltasten und drücke die Leertaste oder tippe auf das Spielfeld, um Gegenstände zu verwenden."},
"weather":function(d){return "Wetter"},
"weatherTypeClear":function(d){return "schön"},
"weatherTypeRain":function(d){return "Regen"},
"weatherTypeThunder":function(d){return "thunder"}};