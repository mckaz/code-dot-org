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
"absolute":function(d){return "absoluto"},
"agentGenericFailureMessage":function(d){return "Keep coding! Remember to use The Agent to help."},
"agentTooFewBlocksFailureMessage":function(d){return "Try adding just one block at a time to get The Agent to the right spot."},
"at":function(d){return "en"},
"agentDiamondPathCongrats":function(d){return "Congratulations, you found the diamond path! You have collected "+craft_locale.p(d,"count",0,"gl",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" so far!"},
"blockActionAdd":function(d){return "engadir"},
"blockActionAttack":function(d){return "attack"},
"blockActionClone":function(d){return "clone blocks"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "apañar"},
"blockActionCollectAll":function(d){return "collect all"},
"blockActionDestroyEntity":function(d){return "desaparecer"},
"blockActionDetect":function(d){return "detect"},
"blockActionDetectRedstone":function(d){return "detect redstone"},
"blockActionDrop":function(d){return "drop"},
"blockActionDropAll":function(d){return "drop all"},
"blockActionExecute":function(d){return "execute command"},
"blockActionExplodeEntity":function(d){return "explode"},
"blockActionFill":function(d){return "fill from"},
"blockActionFlashEntity":function(d){return "flash"},
"blockActionGetItemCount":function(d){return "get item count"},
"blockActionGetItemCountInSlotNumber":function(d){return "get item count in slot number"},
"blockActionGetItemDetail":function(d){return "get item detail"},
"blockActionGetItemDetailInSlotNumber":function(d){return "get item detail in slot number"},
"blockActionGetItemSpace":function(d){return "get item space"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "get item space in slot number"},
"blockActionGive":function(d){return "give"},
"blockActionInspect":function(d){return "inspect"},
"blockActionInspectData":function(d){return "inspect data"},
"blockActionKill":function(d){return "kill target"},
"blockActionMove":function(d){return "mover"},
"blockActionMoveAway":function(d){return "move away from"},
"blockActionMoveForward":function(d){return "avance"},
"blockActionMoveRandom":function(d){return "move random"},
"blockActionMoveTo":function(d){return "move to"},
"blockActionMoveToward":function(d){return "move a step toward"},
"blockActionPlaySound":function(d){return "play sound"},
"blockActionRepeat":function(d){return "repetir"},
"blockActionRepeatRandom":function(d){return "repeat random"},
"blockActionSetBlock":function(d){return "set block"},
"blockActionSpawn":function(d){return "spawn"},
"blockActionSummon":function(d){return "summon"},
"blockActionTeleport":function(d){return "teleport target"},
"blockActionTeleportToPlayer":function(d){return "teleport to player"},
"blockActionTestForBlock":function(d){return "tests whether a block type"},
"blockActionTestForBlocks":function(d){return "tests whether the pattern between"},
"blockActionToScore":function(d){return "to score"},
"blockActionTransfer":function(d){return "transfer"},
"blockActionWait":function(d){return "espera"},
"blockActionWith":function(d){return "with"},
"blockData":function(d){return "block data"},
"blockDestroyBlock":function(d){return "destrúa o bloque"},
"blockIf":function(d){return "se"},
"blockIfLavaAhead":function(d){return "se lava diante"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "mover"},
"blockMoveBackward":function(d){return "mova para trás"},
"blockMoveForward":function(d){return "avance"},
"blockPlace":function(d){return "colocar"},
"blockPlaceTorch":function(d){return "coloque a antorcha"},
"blockPlaceXAheadAhead":function(d){return "diante"},
"blockPlaceXAheadPlace":function(d){return "colocar"},
"blockPlaceXPlace":function(d){return "colocar"},
"blockPlantCrop":function(d){return "plantar"},
"blockShear":function(d){return "tosquiar"},
"blockTill":function(d){return "till"},
"blockTillSoil":function(d){return "arar o solo"},
"blockTurn":function(d){return "turn"},
"blockTurnLeft":function(d){return "vire á esquerda"},
"blockTurnRight":function(d){return "vire á dereita"},
"blockType":function(d){return "block type"},
"blockTypeBedrock":function(d){return "rocha matriz"},
"blockTypeBricks":function(d){return "ladrillos"},
"blockTypeClay":function(d){return "arxila"},
"blockTypeClayHardened":function(d){return "arxila endurecida"},
"blockTypeCobblestone":function(d){return "pedregullo"},
"blockTypeDirt":function(d){return "terra"},
"blockTypeDirtCoarse":function(d){return "terra gorda"},
"blockTypeDoorIron":function(d){return "iron door"},
"blockTypeEmpty":function(d){return "baleiro"},
"blockTypeFarmlandWet":function(d){return "terra arada"},
"blockTypeGlass":function(d){return "vidro"},
"blockTypeGlowstone":function(d){return "glowstone"},
"blockTypeGrass":function(d){return "herba"},
"blockTypeGravel":function(d){return "cascallo"},
"blockTypeLava":function(d){return "lava"},
"blockTypeLogAcacia":function(d){return "madeira de acacia"},
"blockTypeLogBirch":function(d){return "madeira de eucalipto"},
"blockTypeLogJungle":function(d){return "madeira da selva"},
"blockTypeLogOak":function(d){return "madeira de carballo"},
"blockTypeLogSpruce":function(d){return "madeira de piñeiro"},
"blockTypeOreCoal":function(d){return "mineral de carbón"},
"blockTypeOreDiamond":function(d){return "mineral de diamante"},
"blockTypeOreEmerald":function(d){return "mineral de esmeralda"},
"blockTypeOreGold":function(d){return "mineral de ouro"},
"blockTypeOreIron":function(d){return "mineral de ferro"},
"blockTypeOreLapis":function(d){return "mineral de lapis-lazuli"},
"blockTypeOreRedstone":function(d){return "mineral de pedra vermella"},
"blockTypePlanksAcacia":function(d){return "táboas de acacia"},
"blockTypePlanksBirch":function(d){return "táboas de eucalipto"},
"blockTypePlanksJungle":function(d){return "táboas da selva"},
"blockTypePlanksOak":function(d){return "táboas de carballo"},
"blockTypePlanksSpruce":function(d){return "táboas de piñeiro"},
"blockTypePressurePlateUp":function(d){return "pressure plate"},
"blockTypeRail":function(d){return "raíl"},
"blockTypeRailsRedstoneTorch":function(d){return "redstone torch"},
"blockTypeRedstoneWire":function(d){return "redstone wire"},
"blockTypeSand":function(d){return "area"},
"blockTypeSandstone":function(d){return "areniña"},
"blockTypeStone":function(d){return "pedra"},
"blockTypeTnt":function(d){return "dinamita"},
"blockTypeTree":function(d){return "árbore"},
"blockTypeWater":function(d){return "auga"},
"blockTypeWool":function(d){return "lá"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "diante"},
"blockWhileXAheadDo":function(d){return "faga"},
"blockWhileXAheadWhile":function(d){return "mentras"},
"cancel":function(d){return "Cancelar"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "mover"},
"cloneModeNormal":function(d){return "normal"},
"connectToCodeConnection":function(d){return "To run this project in Minecraft: Education Edition, please use the Code Connection application."},
"destination":function(d){return "destination"},
"directionBack":function(d){return "back"},
"directionDown":function(d){return "abaixo"},
"directionForward":function(d){return "forward"},
"directionLeft":function(d){return "esquerda"},
"directionMiddle":function(d){return "middle"},
"directionRight":function(d){return "dereita"},
"directionUp":function(d){return "arriba"},
"downloadButton":function(d){return "Download"},
"entityType":function(d){return "entity type"},
"entityTypeChicken":function(d){return "chicken"},
"entityTypeCow":function(d){return "cow"},
"entityTypeCreeper":function(d){return "creeper"},
"entityTypeIronGolem":function(d){return "iron golem"},
"entityTypePlayer":function(d){return "player"},
"entityTypeSheep":function(d){return "sheep"},
"entityTypeZombie":function(d){return "zombi"},
"eventTypeWhenAttacked":function(d){return "when attacked"},
"eventTypeWhenDay":function(d){return "when day"},
"eventTypeWhenNight":function(d){return "when night"},
"eventTypeWhenRun":function(d){return "cando se executa"},
"eventTypeWhenSpawned":function(d){return "when spawned"},
"eventTypeWhenTouched":function(d){return "when touched"},
"eventTypeWhenUsed":function(d){return "when used"},
"forever":function(d){return "forever"},
"from":function(d){return "from"},
"generatedCodeDescription":function(d){return "Ao arrastrar e colocar os bloques neste quebra-cabezas, creou unha serie de instrucións nunha linguaxe de programación chamada Javascript. Este código di aos computadores o que exhibir na pantalla. Todo o que ve ou fai no Minecraft tamén comeza com liñas de código como esta."},
"getdataof":function(d){return "get data of"},
"getnameof":function(d){return "get name of"},
"houseSelectChooseFloorPlan":function(d){return "Escolla a planta da súa casa."},
"houseSelectEasy":function(d){return "Fácil"},
"houseSelectHard":function(d){return "Difícil"},
"houseSelectLetsBuild":function(d){return "Imos construír unha casa."},
"houseSelectMedium":function(d){return "Medio"},
"import":function(d){return "Import"},
"importShareLinkBody":function(d){return "Type your Hour of Code share link here and click \"Import\" to copy your code into Minecraft"},
"importShareLinkHeader":function(d){return "Import a share link"},
"inSlotNumber":function(d){return "in slot number"},
"itemTypeBlock":function(d){return "bloque"},
"itemTypeDecoration":function(d){return "decoration"},
"itemTypeMiscellaneous":function(d){return "miscellaneous"},
"itemTypeTool":function(d){return "tool"},
"items":function(d){return "item(s)"},
"itemsOfBlockType":function(d){return "item(s) of block type"},
"level10FailureMessage":function(d){return "Cubra a lava para poder atravesar e, de seguida, extraia dous bloques de ferro do outro lado."},
"level11FailureMessage":function(d){return "Lémbrese de colocar pedregullos diante se houbese lava no camiño. Iso permitirá que extraia esta fila de recursos con seguridade."},
"level12FailureMessage":function(d){return "Lémbrese de extraer 3 bloques de pedra vermella. Isto combina o que aprendeu ao construír a súa casa e usar comandos \"se\" para evitar caer na lava."},
"level13FailureMessage":function(d){return "Coloque \"raíl\" ao longo do camiño de terra que vai da súa porta até a beira do mapa."},
"level1FailureMessage":function(d){return "Debe usar comandos para andar até a ovella."},
"level1TooFewBlocksMessage":function(d){return "Tente usar máis comandos para andar até a ovella."},
"level2FailureMessage":function(d){return "Para derrubar unha árbore, ande até o seu tronco e use o comando \"destruír bloque\"."},
"level2TooFewBlocksMessage":function(d){return "Tente usar máis comandos para derrubar a árbore. Ande até o tronco e use o comando \"destruír bloque\"."},
"level3FailureMessage":function(d){return "Para obter a lá das dúas ovellas, ande até cada unha e use o comando \"tosquiar\". Lémbrese de usar os comandos para virar para chegar até a ovella."},
"level3TooFewBlocksMessage":function(d){return "Tente usar máis comandos para obter a lá das dúas ovellas. Ande até cada unha e use o comando \"tosquiar\"."},
"level4FailureMessage":function(d){return "Debe usar o comando \"destrúa o bloque\" en cada un dos tres troncos de árbore."},
"level5FailureMessage":function(d){return "Coloque os seus bloques no contorno de terra para construír unha parede. O comando \"repetir\" en rosa executará os comandos colocados dentro del como \"colocar bloque\" e \"andar adiante\"."},
"level6FailureMessage":function(d){return "Coloque os bloques no contorno de terra da casa para concluír o quebra-cabezas."},
"level7FailureMessage":function(d){return "Use o comando \"plantar\" para colocar plantas en cada espazo de terra arada escura."},
"level8FailureMessage":function(d){return "Se toca nun creeper explotará. Evíteos e entre na súa casa."},
"level9FailureMessage":function(d){return "Non esqueza colocar polo menos 2 antorchas para iluminar o camiño E extraer polo menos 2 carbóns."},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "masked"},
"maskModeReplace":function(d){return "replace"},
"minecraftBlock":function(d){return "bloque"},
"minecraftNotConnected":function(d){return "Minecraft not connected"},
"miniBlockBricks":function(d){return "ladrillos"},
"miniBlockBucketLava":function(d){return "lava bucket"},
"miniBlockBucketWater":function(d){return "water bucket"},
"miniBlockCarrots":function(d){return "carrots"},
"miniBlockCoal":function(d){return "coal"},
"miniBlockCobblestone":function(d){return "pedregullo"},
"miniBlockDiamond":function(d){return "diamond"},
"miniBlockDirt":function(d){return "terra"},
"miniBlockDirtCoarse":function(d){return "terra gorda"},
"miniBlockEgg":function(d){return "egg"},
"miniBlockEmerald":function(d){return "emerald"},
"miniBlockGravel":function(d){return "cascallo"},
"miniBlockGunPowder":function(d){return "gunpowder"},
"miniBlockIngotGold":function(d){return "gold ingot"},
"miniBlockIngotIron":function(d){return "iron ingot"},
"miniBlockLapisLazuli":function(d){return "lapis lazuli"},
"miniBlockLogAcacia":function(d){return "madeira de acacia"},
"miniBlockLogBirch":function(d){return "madeira de eucalipto"},
"miniBlockLogJungle":function(d){return "madeira da selva"},
"miniBlockLogOak":function(d){return "madeira de carballo"},
"miniBlockLogSpruce":function(d){return "madeira de piñeiro"},
"miniBlockMilk":function(d){return "milk"},
"miniBlockPlanksAcacia":function(d){return "táboas de acacia"},
"miniBlockPlanksBirch":function(d){return "táboas de eucalipto"},
"miniBlockPlanksJungle":function(d){return "táboas da selva"},
"miniBlockPlanksOak":function(d){return "táboas de carballo"},
"miniBlockPlanksSpruce":function(d){return "táboas de piñeiro"},
"miniBlockPoppy":function(d){return "poppy"},
"miniBlockPotato":function(d){return "potato"},
"miniBlockRedstoneDust":function(d){return "redstone dust"},
"miniBlockSand":function(d){return "area"},
"miniBlockSandstone":function(d){return "areniña"},
"miniBlockSheep":function(d){return "sheep"},
"miniBlockWheat":function(d){return "wheat"},
"miniBlockWool":function(d){return "lá"},
"nextLevelMsg":function(d){return "Quebra-cabezas "+craft_locale.v(d,"puzzleNumber")+" concluído. Parabéns!"},
"oldBlockHandling":function(d){return "old block"},
"oldBlockHandlingsDestroy":function(d){return "destroy"},
"oldBlockHandlingsKeep":function(d){return "keep"},
"oldBlockHandlingsReplace":function(d){return "replace"},
"onBehalfOf":function(d){return "on behalf of"},
"playerSelectChooseCharacter":function(d){return "Escolla o seu personaxe."},
"playerSelectChooseSelectButton":function(d){return "Seleccione"},
"playerSelectLetsGetStarted":function(d){return "Imos comezar."},
"quantity":function(d){return "quantity"},
"reinfFeedbackMsg":function(d){return "Pode presionar \"Continuar xogando\" para voltar a xogar o seu jogo."},
"relative":function(d){return "relative"},
"runAgent":function(d){return "Run Agent"},
"score":function(d){return "Score"},
"seconds":function(d){return "second(s)"},
"selectChooseButton":function(d){return "Seleccione"},
"soundTypeBump":function(d){return "bump"},
"soundTypeChickenBawk":function(d){return "chicken cluck"},
"soundTypeChickenHurt":function(d){return "chicken hurt"},
"soundTypeCollectedBlock":function(d){return "block collect"},
"soundTypeCowHuff":function(d){return "cow huff"},
"soundTypeCowHurt":function(d){return "cow hurt"},
"soundTypeCowMoo":function(d){return "cow moo"},
"soundTypeCowMooLong":function(d){return "cow mooo"},
"soundTypeCreeperHiss":function(d){return "creeper hiss"},
"soundTypeDig_wood1":function(d){return "wood break"},
"soundTypeDoorOpen":function(d){return "door open"},
"soundTypeExplode":function(d){return "explode"},
"soundTypeFailure":function(d){return "level failure"},
"soundTypeFall":function(d){return "fall"},
"soundTypeFizz":function(d){return "fizz"},
"soundTypeFuse":function(d){return "fuse"},
"soundTypeIronGolemHit":function(d){return "iron golem hit"},
"soundTypeMetalWhack":function(d){return "metal whack"},
"soundTypeMinecart":function(d){return "minecart"},
"soundTypePlaceBlock":function(d){return "block place"},
"soundTypePunch":function(d){return "punch"},
"soundTypeSheepBaa":function(d){return "sheep baa"},
"soundTypeStepFarmland":function(d){return "step farmland"},
"soundTypeStepGrass":function(d){return "step grass"},
"soundTypeStepGravel":function(d){return "step gravel"},
"soundTypeStepStone":function(d){return "step stone"},
"soundTypeStepWood":function(d){return "step wood"},
"soundTypeSuccess":function(d){return "level success"},
"soundTypeZombieBrains":function(d){return "zombie moan"},
"soundTypeZombieGroan":function(d){return "zombie growl"},
"soundTypeZombieHurt":function(d){return "zombie hurt"},
"target":function(d){return "target"},
"testModeAll":function(d){return "all"},
"testModeMasked":function(d){return "masked"},
"tileData":function(d){return "tile data"},
"timeDay":function(d){return "día"},
"timeLong":function(d){return "long"},
"timeMedium":function(d){return "medium"},
"timeNight":function(d){return "noite"},
"timeRandom":function(d){return "aleatorio"},
"timeSet":function(d){return "time set"},
"timeShort":function(d){return "short"},
"timeVeryLong":function(d){return "very long"},
"timeVeryShort":function(d){return "very short"},
"to":function(d){return "de"},
"toSlotNumber":function(d){return "to slot number"},
"tooManyBlocksFail":function(d){return "Desafío "+craft_locale.v(d,"puzzleNumber")+" concluído. Parabéns! Tamé é posíbel concluílo con "+craft_locale.p(d,"numBlocks",0,"gl",{"one":"1 bloque","other":craft_locale.n(d,"numBlocks")+" bloques"})+"."},
"turnRandom":function(d){return "turn random"},
"useArrowKeys":function(d){return "You don't need to add any blocks! Move with the arrows, and press the space bar or tap the game board to use items."},
"weather":function(d){return "weather"},
"weatherTypeClear":function(d){return "clear"},
"weatherTypeRain":function(d){return "rain"},
"weatherTypeThunder":function(d){return "thunder"}};