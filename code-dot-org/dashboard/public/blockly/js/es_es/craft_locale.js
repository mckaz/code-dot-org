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
"agentGenericFailureMessage":function(d){return "¡Sigue creando código! Recuerda que puedes usar al Agent como ayuda."},
"agentTooFewBlocksFailureMessage":function(d){return "Intenta añadir bloques de uno en uno para conseguir que el Agent llegue al sitio adecuado."},
"at":function(d){return "en"},
"agentDiamondPathCongrats":function(d){return "¡Felicidades, has encontrado el camino de los diamantes! ¡Hasta el momento has encontrado "+craft_locale.p(d,"count",0,"es",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" en total!"},
"blockActionAdd":function(d){return "Añadir"},
"blockActionAttack":function(d){return "atacar"},
"blockActionClone":function(d){return "clonar bloques"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "junta"},
"blockActionCollectAll":function(d){return "conseguir todo"},
"blockActionDestroyEntity":function(d){return "eliminar"},
"blockActionDetect":function(d){return "detectar"},
"blockActionDetectRedstone":function(d){return "detectar redstone"},
"blockActionDrop":function(d){return "soltar"},
"blockActionDropAll":function(d){return "soltar todo"},
"blockActionExecute":function(d){return "ejecutar comando"},
"blockActionExplodeEntity":function(d){return "explotar"},
"blockActionFill":function(d){return "fill from"},
"blockActionFlashEntity":function(d){return "mover rápido"},
"blockActionGetItemCount":function(d){return "conseguir conteo de objeto"},
"blockActionGetItemCountInSlotNumber":function(d){return "get item count in slot number"},
"blockActionGetItemDetail":function(d){return "conseguir detalles de objeto"},
"blockActionGetItemDetailInSlotNumber":function(d){return "get item detail in slot number"},
"blockActionGetItemSpace":function(d){return "get item space"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "get item space in slot number"},
"blockActionGive":function(d){return "dar"},
"blockActionInspect":function(d){return "inspeccionar"},
"blockActionInspectData":function(d){return "inspeccionar datos"},
"blockActionKill":function(d){return "matar objetivo"},
"blockActionMove":function(d){return "mover"},
"blockActionMoveAway":function(d){return "alejarse de"},
"blockActionMoveForward":function(d){return "avanzar"},
"blockActionMoveRandom":function(d){return "moverse aleatoriamente"},
"blockActionMoveTo":function(d){return "moverse a"},
"blockActionMoveToward":function(d){return "moverse un paso hacia"},
"blockActionPlaySound":function(d){return "reproducir sonido"},
"blockActionRepeat":function(d){return "repetir"},
"blockActionRepeatRandom":function(d){return "repetir aleatoriamente"},
"blockActionSetBlock":function(d){return "set block"},
"blockActionSpawn":function(d){return "generar"},
"blockActionSummon":function(d){return "invocar"},
"blockActionTeleport":function(d){return "teletransportar objeto"},
"blockActionTeleportToPlayer":function(d){return "teletransportarse hacia el jugador"},
"blockActionTestForBlock":function(d){return "tests whether a block type"},
"blockActionTestForBlocks":function(d){return "tests whether the pattern between"},
"blockActionToScore":function(d){return "a la puntuación"},
"blockActionTransfer":function(d){return "transferir"},
"blockActionWait":function(d){return "espera"},
"blockActionWith":function(d){return "con"},
"blockData":function(d){return "datos del bloque"},
"blockDestroyBlock":function(d){return "destruir bloque"},
"blockIf":function(d){return "si"},
"blockIfLavaAhead":function(d){return "si lava delante"},
"blockIs":function(d){return "es"},
"blockMove":function(d){return "mover"},
"blockMoveBackward":function(d){return "retroceder"},
"blockMoveForward":function(d){return "avanzar"},
"blockPlace":function(d){return "colocar"},
"blockPlaceTorch":function(d){return "colocar antorcha"},
"blockPlaceXAheadAhead":function(d){return "delante"},
"blockPlaceXAheadPlace":function(d){return "colocar"},
"blockPlaceXPlace":function(d){return "colocar"},
"blockPlantCrop":function(d){return "plantar cultivo"},
"blockShear":function(d){return "trasquilar"},
"blockTill":function(d){return "labrar"},
"blockTillSoil":function(d){return "labrar suelo"},
"blockTurn":function(d){return "girar"},
"blockTurnLeft":function(d){return "girar a la izquierda"},
"blockTurnRight":function(d){return "girar a la derecha"},
"blockType":function(d){return "tipo de bloque"},
"blockTypeBedrock":function(d){return "piedra base"},
"blockTypeBricks":function(d){return "ladrillos"},
"blockTypeClay":function(d){return "arcilla"},
"blockTypeClayHardened":function(d){return "arcilla endurecida"},
"blockTypeCobblestone":function(d){return "roca"},
"blockTypeDirt":function(d){return "Tierra"},
"blockTypeDirtCoarse":function(d){return "tierra basta"},
"blockTypeDoorIron":function(d){return "puerta de hierro"},
"blockTypeEmpty":function(d){return "vacío"},
"blockTypeFarmlandWet":function(d){return "granja"},
"blockTypeGlass":function(d){return "cristal"},
"blockTypeGlowstone":function(d){return "piedra brillante"},
"blockTypeGrass":function(d){return "hierba"},
"blockTypeGravel":function(d){return "grava"},
"blockTypeLava":function(d){return "lava"},
"blockTypeLogAcacia":function(d){return "tronco de acacia"},
"blockTypeLogBirch":function(d){return "tronco de abedul"},
"blockTypeLogJungle":function(d){return "tronco de jungla"},
"blockTypeLogOak":function(d){return "tronco de roble"},
"blockTypeLogSpruce":function(d){return "tronco de abeto"},
"blockTypeOreCoal":function(d){return "mena de carbón"},
"blockTypeOreDiamond":function(d){return "mena de diamante"},
"blockTypeOreEmerald":function(d){return "mineral de esmeralda"},
"blockTypeOreGold":function(d){return "mineral de oro"},
"blockTypeOreIron":function(d){return "mineral de hierro"},
"blockTypeOreLapis":function(d){return "mineral de lapislázuli"},
"blockTypeOreRedstone":function(d){return "mineral de redstone"},
"blockTypePlanksAcacia":function(d){return "tablones de acacia"},
"blockTypePlanksBirch":function(d){return "tablones de abedul"},
"blockTypePlanksJungle":function(d){return "tablones de jungla"},
"blockTypePlanksOak":function(d){return "tablones de roble"},
"blockTypePlanksSpruce":function(d){return "tablones de abeto"},
"blockTypePressurePlateUp":function(d){return "plato de presión"},
"blockTypeRail":function(d){return "raíl"},
"blockTypeRailsRedstoneTorch":function(d){return "antorcha de redstone"},
"blockTypeRedstoneWire":function(d){return "alambre de redstone"},
"blockTypeSand":function(d){return "arena"},
"blockTypeSandstone":function(d){return "arenisca"},
"blockTypeStone":function(d){return "piedra"},
"blockTypeTnt":function(d){return "dinamita"},
"blockTypeTree":function(d){return "árbol"},
"blockTypeWater":function(d){return "agua"},
"blockTypeWool":function(d){return "lana"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "delante"},
"blockWhileXAheadDo":function(d){return "haz"},
"blockWhileXAheadWhile":function(d){return "mientras"},
"cancel":function(d){return "Cancelar"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "mover"},
"cloneModeNormal":function(d){return "normal"},
"connectToCodeConnection":function(d){return "Para ejecutar este proyecto en Minecraft: Education Edition, por favor, utiliza la aplicación de Conexión de código."},
"destination":function(d){return "destino"},
"directionBack":function(d){return "atrás"},
"directionDown":function(d){return "abajo"},
"directionForward":function(d){return "adelante"},
"directionLeft":function(d){return "izquierda"},
"directionMiddle":function(d){return "medio"},
"directionRight":function(d){return "derecha"},
"directionUp":function(d){return "arriba"},
"downloadButton":function(d){return "descargar"},
"entityType":function(d){return "tipo de entidad"},
"entityTypeChicken":function(d){return "pollo"},
"entityTypeCow":function(d){return "vaca"},
"entityTypeCreeper":function(d){return "Creeper"},
"entityTypeIronGolem":function(d){return "gólem de hierro"},
"entityTypePlayer":function(d){return "jugador"},
"entityTypeSheep":function(d){return "oveja"},
"entityTypeZombie":function(d){return "zombi"},
"eventTypeWhenAttacked":function(d){return "al ser atacado"},
"eventTypeWhenDay":function(d){return "de día"},
"eventTypeWhenNight":function(d){return "de noche"},
"eventTypeWhenRun":function(d){return "al ejecutar"},
"eventTypeWhenSpawned":function(d){return "al generarse"},
"eventTypeWhenTouched":function(d){return "al ser tocado"},
"eventTypeWhenUsed":function(d){return "al usarse"},
"forever":function(d){return "para siempre"},
"from":function(d){return "de"},
"generatedCodeDescription":function(d){return "Al colocar los bloques de este rompecabezas, has creado una serie de instrucciones en un lenguaje informático llamado JavaScript. Este código le dice al ordenador lo que debe mostrar en la pantalla. Todo lo que haces y ves en Minecraft comienza por líneas de código de ordenador como éstas."},
"getdataof":function(d){return "conseguir datos de"},
"getnameof":function(d){return "conseguir nombre de"},
"houseSelectChooseFloorPlan":function(d){return "Elige un plano para la planta de tu casa."},
"houseSelectEasy":function(d){return "Fácil"},
"houseSelectHard":function(d){return "Difícil"},
"houseSelectLetsBuild":function(d){return "Vamos a construir una casa."},
"houseSelectMedium":function(d){return "Media"},
"import":function(d){return "Importar"},
"importShareLinkBody":function(d){return "Escribe tu enlace compartido de La Hora del Código y haz clic en \"Importar\" para copiar tu código a Minecraft"},
"importShareLinkHeader":function(d){return "Importar un enlace compartido"},
"inSlotNumber":function(d){return "en casilla número"},
"itemTypeBlock":function(d){return "bloque"},
"itemTypeDecoration":function(d){return "decoración"},
"itemTypeMiscellaneous":function(d){return "miscelánea"},
"itemTypeTool":function(d){return "herramienta"},
"items":function(d){return "objeto(s)"},
"itemsOfBlockType":function(d){return "tipo de objeto(s) de bloque"},
"level10FailureMessage":function(d){return "Cubre la lava para cruzar y luego extrae dos de los bloques de hierro del otro lado."},
"level11FailureMessage":function(d){return "Asegúrate de colocar rocas delante si hay lava. Esto te permitirá extraer esta hilera de recursos sin peligro."},
"level12FailureMessage":function(d){return "No te olvides de extraer 3 bloques de redstone. Combina lo que has aprendido construyendo tu casa y el uso de sentencias \"si\" para no caer en la lava."},
"level13FailureMessage":function(d){return "Coloca \"raíl\" a lo largo del camino de tierra que va de tu puerta al borde del mapa."},
"level1FailureMessage":function(d){return "Debes usar comandos para caminar hasta la oveja."},
"level1TooFewBlocksMessage":function(d){return "Prueba usar más comandos para caminar hasta la oveja."},
"level2FailureMessage":function(d){return "Para talar un árbol, acércate al tronco y usa el comando \"destruir bloque\"."},
"level2TooFewBlocksMessage":function(d){return "Prueba usar más comandos para talar el árbol. Acércate al tronco y usa el comando \"destruir bloque\"."},
"level3FailureMessage":function(d){return "Para obtener la lana de las dos ovejas, acércate a cada una de ellas y usa el comando \"trasquilar\". No te olvides de usar los comandos de giro para llegar hasta las ovejas."},
"level3TooFewBlocksMessage":function(d){return "Prueba a usar más comandos para obtener la lana de las dos ovejas. Acércate a cada una de ellas y usa el comando \"trasquilar\"."},
"level4FailureMessage":function(d){return "Debes usar el comando \"destruir bloque\" en cada uno de los 3 troncos de árbol."},
"level5FailureMessage":function(d){return "Coloca los bloques en el contorno de tierra para crear un muro. El comando rosa \"repetir\" ejecutará los comandos de su interior, como \"colocar bloque\" y \"avanzar\"."},
"level6FailureMessage":function(d){return "Coloca bloques en el contorno de tierra de la casa para completar el rompecabezas."},
"level7FailureMessage":function(d){return "Usa el comando \"plantar\" para colocar cultivos en las parcelas de suelo labrado de color oscuro."},
"level8FailureMessage":function(d){return "Si tocas a un Creeper explotará. Rodéalos a escondidas y entra en tu casa."},
"level9FailureMessage":function(d){return "No olvides colocar al menos 2 antorchas para alumbrarte Y extraer al menos 2 de carbón."},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "enmascarado"},
"maskModeReplace":function(d){return "cambiar"},
"minecraftBlock":function(d){return "bloque"},
"minecraftNotConnected":function(d){return "Minecraft sin conexión"},
"miniBlockBricks":function(d){return "ladrillos"},
"miniBlockBucketLava":function(d){return "cubo con lava"},
"miniBlockBucketWater":function(d){return "cubo con agua"},
"miniBlockCarrots":function(d){return "zanahorias"},
"miniBlockCoal":function(d){return "carbón"},
"miniBlockCobblestone":function(d){return "roca"},
"miniBlockDiamond":function(d){return "diamante"},
"miniBlockDirt":function(d){return "Tierra"},
"miniBlockDirtCoarse":function(d){return "tierra basta"},
"miniBlockEgg":function(d){return "huevo"},
"miniBlockEmerald":function(d){return "esmeralda"},
"miniBlockGravel":function(d){return "grava"},
"miniBlockGunPowder":function(d){return "pólvora"},
"miniBlockIngotGold":function(d){return "lingote de oro"},
"miniBlockIngotIron":function(d){return "lingote de hierro"},
"miniBlockLapisLazuli":function(d){return "lapislázuli"},
"miniBlockLogAcacia":function(d){return "tronco de acacia"},
"miniBlockLogBirch":function(d){return "tronco de abedul"},
"miniBlockLogJungle":function(d){return "tronco de jungla"},
"miniBlockLogOak":function(d){return "tronco de roble"},
"miniBlockLogSpruce":function(d){return "tronco de abeto"},
"miniBlockMilk":function(d){return "leche"},
"miniBlockPlanksAcacia":function(d){return "tablones de acacia"},
"miniBlockPlanksBirch":function(d){return "tablones de abedul"},
"miniBlockPlanksJungle":function(d){return "tablones de jungla"},
"miniBlockPlanksOak":function(d){return "tablones de roble"},
"miniBlockPlanksSpruce":function(d){return "tablones de abeto"},
"miniBlockPoppy":function(d){return "amapola"},
"miniBlockPotato":function(d){return "patata"},
"miniBlockRedstoneDust":function(d){return "polvo de redstone"},
"miniBlockSand":function(d){return "arena"},
"miniBlockSandstone":function(d){return "arenisca"},
"miniBlockSheep":function(d){return "oveja"},
"miniBlockWheat":function(d){return "trigo"},
"miniBlockWool":function(d){return "lana"},
"nextLevelMsg":function(d){return "Rompecabezas "+craft_locale.v(d,"puzzleNumber")+" completado. ¡Felicitaciones!"},
"oldBlockHandling":function(d){return "old block"},
"oldBlockHandlingsDestroy":function(d){return "destruir"},
"oldBlockHandlingsKeep":function(d){return "mantener"},
"oldBlockHandlingsReplace":function(d){return "cambiar"},
"onBehalfOf":function(d){return "en nombre de"},
"playerSelectChooseCharacter":function(d){return "Elige un personaje."},
"playerSelectChooseSelectButton":function(d){return "Seleccionar"},
"playerSelectLetsGetStarted":function(d){return "Empecemos."},
"quantity":function(d){return "cantidad"},
"reinfFeedbackMsg":function(d){return "Puedes pulsar \"Seguir jugando\" para volver al partido."},
"relative":function(d){return "relative"},
"runAgent":function(d){return "Ejecutar Agent"},
"score":function(d){return "Puntuación"},
"seconds":function(d){return "segundo(s)"},
"selectChooseButton":function(d){return "Seleccionar"},
"soundTypeBump":function(d){return "actualizar"},
"soundTypeChickenBawk":function(d){return "cacareo de pollo"},
"soundTypeChickenHurt":function(d){return "lamento de pollo"},
"soundTypeCollectedBlock":function(d){return "recolectar bloque"},
"soundTypeCowHuff":function(d){return "resoplido de vaca"},
"soundTypeCowHurt":function(d){return "lamento de vaca"},
"soundTypeCowMoo":function(d){return "mugido de vaca"},
"soundTypeCowMooLong":function(d){return "mugido largo de vaca"},
"soundTypeCreeperHiss":function(d){return "siseo de Creeper"},
"soundTypeDig_wood1":function(d){return "rotura de madera"},
"soundTypeDoorOpen":function(d){return "apertura de puerta"},
"soundTypeExplode":function(d){return "explotar"},
"soundTypeFailure":function(d){return "nivel fallado"},
"soundTypeFall":function(d){return "caída"},
"soundTypeFizz":function(d){return "burbujeo"},
"soundTypeFuse":function(d){return "detonador"},
"soundTypeIronGolemHit":function(d){return "golpe de gólem de hierro"},
"soundTypeMetalWhack":function(d){return "golpe metálico"},
"soundTypeMinecart":function(d){return "vagoneta"},
"soundTypePlaceBlock":function(d){return "colocar bloque"},
"soundTypePunch":function(d){return "puñetazo"},
"soundTypeSheepBaa":function(d){return "balido de oveja"},
"soundTypeStepFarmland":function(d){return "pisada en granja"},
"soundTypeStepGrass":function(d){return "pisada en hierba"},
"soundTypeStepGravel":function(d){return "pisada en grava"},
"soundTypeStepStone":function(d){return "pisada en piedra"},
"soundTypeStepWood":function(d){return "pisada en madera"},
"soundTypeSuccess":function(d){return "nivel exitoso"},
"soundTypeZombieBrains":function(d){return "gemido de zombi"},
"soundTypeZombieGroan":function(d){return "gruñido de zombi"},
"soundTypeZombieHurt":function(d){return "lamento de zombi"},
"target":function(d){return "objetivo"},
"testModeAll":function(d){return "todo"},
"testModeMasked":function(d){return "enmascarado"},
"tileData":function(d){return "datos de baldosa"},
"timeDay":function(d){return "día"},
"timeLong":function(d){return "largo"},
"timeMedium":function(d){return "medio"},
"timeNight":function(d){return "noche"},
"timeRandom":function(d){return "aleatorio"},
"timeSet":function(d){return "fijar tiempo en"},
"timeShort":function(d){return "corto"},
"timeVeryLong":function(d){return "muy largo"},
"timeVeryShort":function(d){return "muy corto"},
"to":function(d){return "a"},
"toSlotNumber":function(d){return "hasta casilla número"},
"tooManyBlocksFail":function(d){return "Rompecabezas "+craft_locale.v(d,"puzzleNumber")+" completado. ¡Felicitaciones! También puedes completarlo con "+craft_locale.p(d,"numBlocks",0,"es",{"one":"1 bloque","other":craft_locale.n(d,"numBlocks")+" bloques"})+"."},
"turnRandom":function(d){return "girar aleatoriamente"},
"useArrowKeys":function(d){return "¡No tienes que añadir ningún bloque! Muévete con las flechas y pulsa la barra espaciadora o toca el tablero del juego para usar objetos."},
"weather":function(d){return "tiempo atmosférico"},
"weatherTypeClear":function(d){return "despejado"},
"weatherTypeRain":function(d){return "lluvia"},
"weatherTypeThunder":function(d){return "thunder"}};