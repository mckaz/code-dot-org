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
"absolute":function(d){return "valor absoluto de un número"},
"agentGenericFailureMessage":function(d){return "¡Sigue programando! Recuerda usar al Agent para ayudarte."},
"agentTooFewBlocksFailureMessage":function(d){return "Inténtalo añadiendo un bloque cada vez para llevar al Agent al lugar indicado."},
"at":function(d){return "en"},
"agentDiamondPathCongrats":function(d){return "¡Felicidades, encontraste el camino de diamantes! ¡Has recogido "+craft_locale.p(d,"count",0,"es",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" hasta ahora!"},
"blockActionAdd":function(d){return "agregar"},
"blockActionAttack":function(d){return "atacar"},
"blockActionClone":function(d){return "clonar bloques"},
"blockActionCloneFiltered":function(d){return "solo clonar"},
"blockActionCollect":function(d){return "recolecta"},
"blockActionCollectAll":function(d){return "recoger todo"},
"blockActionDestroyEntity":function(d){return "desaparecer"},
"blockActionDetect":function(d){return "detectar"},
"blockActionDetectRedstone":function(d){return "detectar piedra rojiza"},
"blockActionDrop":function(d){return "soltar"},
"blockActionDropAll":function(d){return "soltar todo"},
"blockActionExecute":function(d){return "ejecutar comando"},
"blockActionExplodeEntity":function(d){return "explotar"},
"blockActionFill":function(d){return "llenar desde"},
"blockActionFlashEntity":function(d){return "relampaguear"},
"blockActionGetItemCount":function(d){return "obtener el conteo de elementos"},
"blockActionGetItemCountInSlotNumber":function(d){return "obtener el recuento de elementos en el número de ranura"},
"blockActionGetItemDetail":function(d){return "obtener detalles del objeto"},
"blockActionGetItemDetailInSlotNumber":function(d){return "obtener detalles del artículo en el número de ranura"},
"blockActionGetItemSpace":function(d){return "obtener espacio de elementos"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "obtener espacio de elementos en el número de ranura"},
"blockActionGive":function(d){return "dar"},
"blockActionInspect":function(d){return "inspeccionar"},
"blockActionInspectData":function(d){return "inspeccionar datos"},
"blockActionKill":function(d){return "eliminar objetivo"},
"blockActionMove":function(d){return "mover"},
"blockActionMoveAway":function(d){return "alejar de"},
"blockActionMoveForward":function(d){return "avanzar"},
"blockActionMoveRandom":function(d){return "mover al azar"},
"blockActionMoveTo":function(d){return "mover hacia"},
"blockActionMoveToward":function(d){return "dar un paso hacia"},
"blockActionPlaySound":function(d){return "reproducir sonido"},
"blockActionRepeat":function(d){return "repetir"},
"blockActionRepeatRandom":function(d){return "repetir al azar"},
"blockActionSetBlock":function(d){return "establecer bloque a"},
"blockActionSpawn":function(d){return "generar"},
"blockActionSummon":function(d){return "invocar"},
"blockActionTeleport":function(d){return "teletransportar objetivo"},
"blockActionTeleportToPlayer":function(d){return "teletransportar hacia el jugador"},
"blockActionTestForBlock":function(d){return "prueba un tipo de bloque"},
"blockActionTestForBlocks":function(d){return "probar entre patrones"},
"blockActionToScore":function(d){return "a la puntuación"},
"blockActionTransfer":function(d){return "transferir"},
"blockActionWait":function(d){return "espera"},
"blockActionWith":function(d){return "con"},
"blockData":function(d){return "bloquear datos"},
"blockDestroyBlock":function(d){return "destruir bloque"},
"blockIf":function(d){return "si"},
"blockIfLavaAhead":function(d){return "si lava delante"},
"blockIs":function(d){return "es"},
"blockMove":function(d){return "mover"},
"blockMoveBackward":function(d){return "retroceder"},
"blockMoveForward":function(d){return "avanzar"},
"blockPlace":function(d){return "coloca"},
"blockPlaceTorch":function(d){return "colocar antorcha"},
"blockPlaceXAheadAhead":function(d){return "delante"},
"blockPlaceXAheadPlace":function(d){return "coloca"},
"blockPlaceXPlace":function(d){return "coloca"},
"blockPlantCrop":function(d){return "plantar cultivo"},
"blockShear":function(d){return "esquilar"},
"blockTill":function(d){return "labrar"},
"blockTillSoil":function(d){return "arar suelo"},
"blockTurn":function(d){return "girar"},
"blockTurnLeft":function(d){return "girar a la izquierda"},
"blockTurnRight":function(d){return "girar a la derecha"},
"blockType":function(d){return "tipo de bloque"},
"blockTypeBedrock":function(d){return "roca madre"},
"blockTypeBricks":function(d){return "ladrillos"},
"blockTypeClay":function(d){return "arcilla"},
"blockTypeClayHardened":function(d){return "arcilla endurecida"},
"blockTypeCobblestone":function(d){return "adoquín"},
"blockTypeDirt":function(d){return "Tierra"},
"blockTypeDirtCoarse":function(d){return "tierra infértil"},
"blockTypeDoorIron":function(d){return "puerta de hierro"},
"blockTypeEmpty":function(d){return "vacío"},
"blockTypeFarmlandWet":function(d){return "tierra de cultivo"},
"blockTypeGlass":function(d){return "cristal"},
"blockTypeGlowstone":function(d){return "piedra luminosa"},
"blockTypeGrass":function(d){return "hierba"},
"blockTypeGravel":function(d){return "gravilla"},
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
"blockTypeOreRedstone":function(d){return "mena de redstone"},
"blockTypePlanksAcacia":function(d){return "tablones de acacia"},
"blockTypePlanksBirch":function(d){return "tablones de abedul"},
"blockTypePlanksJungle":function(d){return "tablones de la jungla"},
"blockTypePlanksOak":function(d){return "tablones de roble"},
"blockTypePlanksSpruce":function(d){return "tablones de abeto"},
"blockTypePressurePlateUp":function(d){return "placa de presión"},
"blockTypeRail":function(d){return "raíl"},
"blockTypeRailsRedstoneTorch":function(d){return "antorcha de piedra rojiza"},
"blockTypeRedstoneWire":function(d){return "alambre de piedra rojiza"},
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
"cloneMode":function(d){return "modo clon"},
"cloneModeForce":function(d){return "fuerza"},
"cloneModeMove":function(d){return "mover"},
"cloneModeNormal":function(d){return "normal"},
"connectToCodeConnection":function(d){return "Para ejecutar este proyecto en Minecraft: Education Edition, usa la aplicación Code Connection."},
"destination":function(d){return "destino"},
"directionBack":function(d){return "atrás"},
"directionDown":function(d){return "abajo"},
"directionForward":function(d){return "adelante"},
"directionLeft":function(d){return "izquierda"},
"directionMiddle":function(d){return "centro"},
"directionRight":function(d){return "derecha"},
"directionUp":function(d){return "arriba"},
"downloadButton":function(d){return "Descarga"},
"entityType":function(d){return "tipo de entidad"},
"entityTypeChicken":function(d){return "gallina"},
"entityTypeCow":function(d){return "vaca"},
"entityTypeCreeper":function(d){return "creeper"},
"entityTypeIronGolem":function(d){return "gólem de hierro"},
"entityTypePlayer":function(d){return "jugador"},
"entityTypeSheep":function(d){return "oveja"},
"entityTypeZombie":function(d){return "zombi"},
"eventTypeWhenAttacked":function(d){return "cuando recibe un ataque"},
"eventTypeWhenDay":function(d){return "cuando se hace de día"},
"eventTypeWhenNight":function(d){return "cuando se hace de noche"},
"eventTypeWhenRun":function(d){return "cuando se ejecuta"},
"eventTypeWhenSpawned":function(d){return "cuando se genera"},
"eventTypeWhenTouched":function(d){return "cuando se toca"},
"eventTypeWhenUsed":function(d){return "cuando se usa"},
"forever":function(d){return "siempre"},
"from":function(d){return "de"},
"generatedCodeDescription":function(d){return "En este rompecabezas, arrastraste y colocaste bloques hasta crear un conjunto de instrucciones en un lenguaje informático llamado Javascript. Este código les indica a las computadoras qué mostrar en pantalla. Todo lo que ves y haces en Minecraft comienza siendo líneas en un código informático como este."},
"getdataof":function(d){return "obtener datos de"},
"getnameof":function(d){return "obtener nombre de"},
"houseSelectChooseFloorPlan":function(d){return "Elige un plano para tu casa."},
"houseSelectEasy":function(d){return "Fácil"},
"houseSelectHard":function(d){return "Difícil"},
"houseSelectLetsBuild":function(d){return "¡Construyamos una casa!"},
"houseSelectMedium":function(d){return "Mediana"},
"import":function(d){return "Importar"},
"importShareLinkBody":function(d){return "Escribe tu enlace para compartir de La Hora del Código aquí y haz clic en \"Importar\" para copiar tu código en Minecraft"},
"importShareLinkHeader":function(d){return "Importar un enlace para compartir"},
"inSlotNumber":function(d){return "en espacio número"},
"itemTypeBlock":function(d){return "bloque"},
"itemTypeDecoration":function(d){return "decoración"},
"itemTypeMiscellaneous":function(d){return "varios"},
"itemTypeTool":function(d){return "herramienta"},
"items":function(d){return "objeto(s)"},
"itemsOfBlockType":function(d){return "objeto(s) del tipo de bloque"},
"level10FailureMessage":function(d){return "Cubre la lava por donde cruzarás y luego perfora dos bloques de hierro del otro lado."},
"level11FailureMessage":function(d){return "Coloca adoquines delante de ti si hay lava adelante. Esto te permitirá trabajar de forma segura en esta fila de recursos."},
"level12FailureMessage":function(d){return "Perfora 3 bloques de piedra rojiza. Puedes usar esto, junto con lo que aprendiste construyendo tu casa y usando las instrucciones \"si\", para evitar caer en la lava."},
"level13FailureMessage":function(d){return "Coloca un \"riel\" a lo largo del camino de tierra que va desde la puerta al extremo del mapa."},
"level1FailureMessage":function(d){return "Para llegar hasta la oveja, tienes que usar comandos."},
"level1TooFewBlocksMessage":function(d){return "Intenta usar más comandos para llegar hasta la oveja."},
"level2FailureMessage":function(d){return "Para talar un árbol, debes caminar hasta el tronco y usar el comando \"destruir bloque\"."},
"level2TooFewBlocksMessage":function(d){return "Intenta usar más comandos para talar el árbol. Debes caminar hasta el tronco y usar el comando \"destruir bloque\"."},
"level3FailureMessage":function(d){return "Para conseguir lana de las dos ovejas, debes caminar hasta una de ellas y usar el comando \"esquilar\". Recuerda usar los comandos de giro para ir hasta la otra oveja."},
"level3TooFewBlocksMessage":function(d){return "Intenta usar más comandos para conseguir lana de las dos ovejas. Camina hasta una de ellas y usa el comando \"esquilar\"."},
"level4FailureMessage":function(d){return "Debes usar el comando \"destruir bloque\" en cada uno de los tres troncos de árbol."},
"level5FailureMessage":function(d){return "Coloca bloques sobre el trazado de tierra para construir una pared. El comando rosa \"repetir\" ejecutará los comandos que estén dentro de él, como \"colocar bloque\" y \"avanzar\"."},
"level6FailureMessage":function(d){return "Coloca bloques sobre el trazado de tierra de la casa para completar el rompecabezas."},
"level7FailureMessage":function(d){return "Usar el comando \"plantar\" para colocar cultivos en cada parcela de tierra arada oscura."},
"level8FailureMessage":function(d){return "Si tocas un Creeper, explotará. Esquívalos y entra a la casa."},
"level9FailureMessage":function(d){return "No te olvides de colocar al menos 2 antorchas para iluminar el camino Y de perforar al menos 2 carbones."},
"maskMode":function(d){return "modo máscara"},
"maskModeMasked":function(d){return "enmascarado"},
"maskModeReplace":function(d){return "reemplazar"},
"minecraftBlock":function(d){return "bloque"},
"minecraftNotConnected":function(d){return "Minecraft no conectado"},
"miniBlockBricks":function(d){return "ladrillos"},
"miniBlockBucketLava":function(d){return "cubeta con lava"},
"miniBlockBucketWater":function(d){return "cubeta con agua"},
"miniBlockCarrots":function(d){return "zanahorias"},
"miniBlockCoal":function(d){return "carbón"},
"miniBlockCobblestone":function(d){return "adoquín"},
"miniBlockDiamond":function(d){return "diamante"},
"miniBlockDirt":function(d){return "Tierra"},
"miniBlockDirtCoarse":function(d){return "tierra infértil"},
"miniBlockEgg":function(d){return "huevo"},
"miniBlockEmerald":function(d){return "esmeralda"},
"miniBlockGravel":function(d){return "gravilla"},
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
"miniBlockPlanksJungle":function(d){return "tablones de la jungla"},
"miniBlockPlanksOak":function(d){return "tablones de roble"},
"miniBlockPlanksSpruce":function(d){return "tablones de abeto"},
"miniBlockPoppy":function(d){return "amapola"},
"miniBlockPotato":function(d){return "papa"},
"miniBlockRedstoneDust":function(d){return "polvo de piedra rojiza"},
"miniBlockSand":function(d){return "arena"},
"miniBlockSandstone":function(d){return "arenisca"},
"miniBlockSheep":function(d){return "oveja"},
"miniBlockWheat":function(d){return "trigo"},
"miniBlockWool":function(d){return "lana"},
"nextLevelMsg":function(d){return "Completaste el rompecabezas "+craft_locale.v(d,"puzzleNumber")+". ¡Felicitaciones!"},
"oldBlockHandling":function(d){return "viejo bloque en"},
"oldBlockHandlingsDestroy":function(d){return "destruir"},
"oldBlockHandlingsKeep":function(d){return "conservar"},
"oldBlockHandlingsReplace":function(d){return "reemplazar"},
"onBehalfOf":function(d){return "a nombre de"},
"playerSelectChooseCharacter":function(d){return "Elige un personaje."},
"playerSelectChooseSelectButton":function(d){return "Seleccionar"},
"playerSelectLetsGetStarted":function(d){return "¡Empecemos!"},
"quantity":function(d){return "cantidad"},
"reinfFeedbackMsg":function(d){return "Pulsar \"Seguir jugando\" para continuar con el juego."},
"relative":function(d){return "relativo"},
"runAgent":function(d){return "Ejecutar Agent"},
"score":function(d){return "Puntuación"},
"seconds":function(d){return "segundo(s)"},
"selectChooseButton":function(d){return "Seleccionar"},
"soundTypeBump":function(d){return "choque"},
"soundTypeChickenBawk":function(d){return "cacareo de gallina"},
"soundTypeChickenHurt":function(d){return "gallina lastimada"},
"soundTypeCollectedBlock":function(d){return "bloque recogido"},
"soundTypeCowHuff":function(d){return "resoplido de vaca"},
"soundTypeCowHurt":function(d){return "vaca lastimada"},
"soundTypeCowMoo":function(d){return "mugido de vaca"},
"soundTypeCowMooLong":function(d){return "mugido largo de vaca"},
"soundTypeCreeperHiss":function(d){return "silbido de creeper"},
"soundTypeDig_wood1":function(d){return "madera quebrada"},
"soundTypeDoorOpen":function(d){return "puerta abierta"},
"soundTypeExplode":function(d){return "explotar"},
"soundTypeFailure":function(d){return "nivel no pasado"},
"soundTypeFall":function(d){return "caída"},
"soundTypeFizz":function(d){return "efervescencia"},
"soundTypeFuse":function(d){return "fundido"},
"soundTypeIronGolemHit":function(d){return "golpe a gólem de hierro"},
"soundTypeMetalWhack":function(d){return "golpe metálico"},
"soundTypeMinecart":function(d){return "vagoneta"},
"soundTypePlaceBlock":function(d){return "bloque colocado"},
"soundTypePunch":function(d){return "puñetazo"},
"soundTypeSheepBaa":function(d){return "balido de oveja"},
"soundTypeStepFarmland":function(d){return "pisada en tierra de cultivo"},
"soundTypeStepGrass":function(d){return "pisada en pasto"},
"soundTypeStepGravel":function(d){return "pisada en grava"},
"soundTypeStepStone":function(d){return "pisada en piedra"},
"soundTypeStepWood":function(d){return "pisada en el bosque"},
"soundTypeSuccess":function(d){return "nivel superado"},
"soundTypeZombieBrains":function(d){return "lamento de zombi"},
"soundTypeZombieGroan":function(d){return "rugido de zombi"},
"soundTypeZombieHurt":function(d){return "zombi lastimado"},
"target":function(d){return "objetivo"},
"testModeAll":function(d){return "todo"},
"testModeMasked":function(d){return "enmascarado"},
"tileData":function(d){return "datos de bloque"},
"timeDay":function(d){return "día"},
"timeLong":function(d){return "largo"},
"timeMedium":function(d){return "mediano"},
"timeNight":function(d){return "noche"},
"timeRandom":function(d){return "al azar"},
"timeSet":function(d){return "establecer la hora en"},
"timeShort":function(d){return "corto"},
"timeVeryLong":function(d){return "muy largo"},
"timeVeryShort":function(d){return "muy corto"},
"to":function(d){return "para"},
"toSlotNumber":function(d){return "al espacio número"},
"tooManyBlocksFail":function(d){return "Completaste el rompecabezas "+craft_locale.v(d,"puzzleNumber")+". ¡Felicitaciones! También puedes completarlo con "+craft_locale.p(d,"numBlocks",0,"es",{"one":"1 bloque","other":craft_locale.n(d,"numBlocks")+" bloques"})+"."},
"turnRandom":function(d){return "girar al azar"},
"useArrowKeys":function(d){return "¡No necesitas añadir ningún bloque! Puedes moverte con las fechas y usar objetos con la barra espaciadora o tocando la pantalla."},
"weather":function(d){return "clima"},
"weatherTypeClear":function(d){return "despejado"},
"weatherTypeRain":function(d){return "lluvia"},
"weatherTypeThunder":function(d){return "trueno"}};