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
"agentGenericFailureMessage":function(d){return "Continue codificando! Lembre-se de usar o Agent para ajudar."},
"agentTooFewBlocksFailureMessage":function(d){return "Tente adicionar apenas a um bloco por vez para levar o Agent até o local certo."},
"at":function(d){return "em"},
"agentDiamondPathCongrats":function(d){return "Parabéns, você encontrou o caminho de diamante! Você coletou "+craft_locale.p(d,"count",0,"pt",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" até agora!"},
"blockActionAdd":function(d){return "adicionar"},
"blockActionAttack":function(d){return "atacar"},
"blockActionClone":function(d){return "clonar blocos"},
"blockActionCloneFiltered":function(d){return "apenas clonar"},
"blockActionCollect":function(d){return "coletar"},
"blockActionCollectAll":function(d){return "coletar todos"},
"blockActionDestroyEntity":function(d){return "desaparecer"},
"blockActionDetect":function(d){return "detectar"},
"blockActionDetectRedstone":function(d){return "detectar redstone"},
"blockActionDrop":function(d){return "derrubar"},
"blockActionDropAll":function(d){return "largar tudo"},
"blockActionExecute":function(d){return "executar comando"},
"blockActionExplodeEntity":function(d){return "explodir"},
"blockActionFill":function(d){return "preencher de"},
"blockActionFlashEntity":function(d){return "piscar"},
"blockActionGetItemCount":function(d){return "obter a contagem de item"},
"blockActionGetItemCountInSlotNumber":function(d){return "obter a contagem de item em número de slot"},
"blockActionGetItemDetail":function(d){return "obter detalhes do item"},
"blockActionGetItemDetailInSlotNumber":function(d){return "obter detalhes de item em número de slot"},
"blockActionGetItemSpace":function(d){return "obter espaço de item"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "obter espaço de item no número de slot"},
"blockActionGive":function(d){return "dar"},
"blockActionInspect":function(d){return "inspecionar"},
"blockActionInspectData":function(d){return "inspecionar dados"},
"blockActionKill":function(d){return "matar o alvo"},
"blockActionMove":function(d){return "mova"},
"blockActionMoveAway":function(d){return "afastar-se de"},
"blockActionMoveForward":function(d){return "avance"},
"blockActionMoveRandom":function(d){return "mover aleatoriamente"},
"blockActionMoveTo":function(d){return "mover para"},
"blockActionMoveToward":function(d){return "mover um passo em direção a"},
"blockActionPlaySound":function(d){return "tocar som"},
"blockActionRepeat":function(d){return "repita"},
"blockActionRepeatRandom":function(d){return "repetir aleatoriamente"},
"blockActionSetBlock":function(d){return "definir bloco para"},
"blockActionSpawn":function(d){return "invocar"},
"blockActionSummon":function(d){return "evocar"},
"blockActionTeleport":function(d){return "teleportar alvo"},
"blockActionTeleportToPlayer":function(d){return "teleportar para o jogador"},
"blockActionTestForBlock":function(d){return "testa se um tipo de bloco"},
"blockActionTestForBlocks":function(d){return "testes se o padrão entre"},
"blockActionToScore":function(d){return "ao placar"},
"blockActionTransfer":function(d){return "transferir"},
"blockActionWait":function(d){return "esperar"},
"blockActionWith":function(d){return "com"},
"blockData":function(d){return "dados do bloco"},
"blockDestroyBlock":function(d){return "destrua o bloco"},
"blockIf":function(d){return "se"},
"blockIfLavaAhead":function(d){return "se lava adiante"},
"blockIs":function(d){return "é"},
"blockMove":function(d){return "mova"},
"blockMoveBackward":function(d){return "mova para trás"},
"blockMoveForward":function(d){return "avance"},
"blockPlace":function(d){return "colocar"},
"blockPlaceTorch":function(d){return "coloque a tocha"},
"blockPlaceXAheadAhead":function(d){return "adiante"},
"blockPlaceXAheadPlace":function(d){return "colocar"},
"blockPlaceXPlace":function(d){return "colocar"},
"blockPlantCrop":function(d){return "plantar"},
"blockShear":function(d){return "tosar"},
"blockTill":function(d){return "arar"},
"blockTillSoil":function(d){return "arar terra"},
"blockTurn":function(d){return "virar"},
"blockTurnLeft":function(d){return "vire à esquerda"},
"blockTurnRight":function(d){return "vire à direita"},
"blockType":function(d){return "tipo de bloco"},
"blockTypeBedrock":function(d){return "rocha matriz"},
"blockTypeBricks":function(d){return "tijolos"},
"blockTypeClay":function(d){return "argila"},
"blockTypeClayHardened":function(d){return "argila endurecida"},
"blockTypeCobblestone":function(d){return "pedregulho"},
"blockTypeDirt":function(d){return "terra"},
"blockTypeDirtCoarse":function(d){return "terra grossa"},
"blockTypeDoorIron":function(d){return "porta de ferro"},
"blockTypeEmpty":function(d){return "vazio"},
"blockTypeFarmlandWet":function(d){return "terra arada"},
"blockTypeGlass":function(d){return "vidro"},
"blockTypeGlowstone":function(d){return "pedra luminosa"},
"blockTypeGrass":function(d){return "grama"},
"blockTypeGravel":function(d){return "cascalho"},
"blockTypeLava":function(d){return "lava"},
"blockTypeLogAcacia":function(d){return "madeira de acácia"},
"blockTypeLogBirch":function(d){return "tronco de bétula"},
"blockTypeLogJungle":function(d){return "tronco de selva"},
"blockTypeLogOak":function(d){return "madeira de carvalho"},
"blockTypeLogSpruce":function(d){return "madeira de pinheiro"},
"blockTypeOreCoal":function(d){return "minério de carvão"},
"blockTypeOreDiamond":function(d){return "minério de diamante"},
"blockTypeOreEmerald":function(d){return "minério de esmeralda"},
"blockTypeOreGold":function(d){return "minério de ouro"},
"blockTypeOreIron":function(d){return "minério de ferro"},
"blockTypeOreLapis":function(d){return "minério de Lápis-Lazúli"},
"blockTypeOreRedstone":function(d){return "minério de Redstone"},
"blockTypePlanksAcacia":function(d){return "tábuas de acácia"},
"blockTypePlanksBirch":function(d){return "tábuas de bétula"},
"blockTypePlanksJungle":function(d){return "tábuas de selva"},
"blockTypePlanksOak":function(d){return "tábuas de carvalho"},
"blockTypePlanksSpruce":function(d){return "tábuas de pinheiro"},
"blockTypePressurePlateUp":function(d){return "placa de pressão"},
"blockTypeRail":function(d){return "trilho"},
"blockTypeRailsRedstoneTorch":function(d){return "tocha de redstone"},
"blockTypeRedstoneWire":function(d){return "fio de redstone"},
"blockTypeSand":function(d){return "areia"},
"blockTypeSandstone":function(d){return "arenito"},
"blockTypeStone":function(d){return "pedra"},
"blockTypeTnt":function(d){return "dinamite"},
"blockTypeTree":function(d){return "árvore"},
"blockTypeWater":function(d){return "água"},
"blockTypeWool":function(d){return "lã"},
"blockTypeWoolBlue":function(d){return "lã azul"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "adiante"},
"blockWhileXAheadDo":function(d){return "faça"},
"blockWhileXAheadWhile":function(d){return "enquanto"},
"cancel":function(d){return "Cancelar"},
"cloneMode":function(d){return "clonar modelo"},
"cloneModeForce":function(d){return "forçar"},
"cloneModeMove":function(d){return "mova"},
"cloneModeNormal":function(d){return "normal"},
"connectToCodeConnection":function(d){return "Para executar este projeto no Minecraft: Education Edition, use o aplicativo Code Connection."},
"destination":function(d){return "destino"},
"directionBack":function(d){return "voltar"},
"directionDown":function(d){return "para baixo"},
"directionForward":function(d){return "avançar"},
"directionLeft":function(d){return "para esquerda"},
"directionMiddle":function(d){return "meio"},
"directionRight":function(d){return "para direita"},
"directionUp":function(d){return "para cima"},
"downloadButton":function(d){return "Baixar"},
"entityType":function(d){return "tipo de entidade"},
"entityTypeChicken":function(d){return "galinha"},
"entityTypeCow":function(d){return "vaca"},
"entityTypeCreeper":function(d){return "creeper"},
"entityTypeIronGolem":function(d){return "golem de ferro"},
"entityTypePlayer":function(d){return "jogador"},
"entityTypeSheep":function(d){return "ovelha"},
"entityTypeZombie":function(d){return "zumbi"},
"eventTypeWhenAttacked":function(d){return "quando atacado"},
"eventTypeWhenDay":function(d){return "durante o dia"},
"eventTypeWhenNight":function(d){return "durante a noite"},
"eventTypeWhenRun":function(d){return "quando executar"},
"eventTypeWhenSpawned":function(d){return "ao invocar"},
"eventTypeWhenTouched":function(d){return "ao tocar"},
"eventTypeWhenUsed":function(d){return "ao usar"},
"forever":function(d){return "eterno"},
"from":function(d){return "de"},
"generatedCodeDescription":function(d){return "Ao arrastar e colocar blocos nesse quebra-cabeça, você criou um conjunto de instruções em uma linguagem de computador chamada Javascript. Este código diz aos computadores o que mostrar na tela. Tudo que você vê e faz em Minecraft também começa com linhas de código como essas."},
"getdataof":function(d){return "obter dados de"},
"getnameof":function(d){return "obter nome de"},
"houseSelectChooseFloorPlan":function(d){return "Escolha a planta da sua casa."},
"houseSelectEasy":function(d){return "Fácil"},
"houseSelectHard":function(d){return "Difícil"},
"houseSelectLetsBuild":function(d){return "Vamos construir uma casa."},
"houseSelectMedium":function(d){return "Médio"},
"import":function(d){return "Importar"},
"importShareLinkBody":function(d){return "Digite seu link de compartilhamento da Hora do Código aqui e clique em \"Importar\" para copiar o código no Minecraft"},
"importShareLinkHeader":function(d){return "Importar um link de compartilhamento"},
"inSlotNumber":function(d){return "no espaço número"},
"itemTypeBlock":function(d){return "bloco"},
"itemTypeDecoration":function(d){return "decoração"},
"itemTypeMiscellaneous":function(d){return "diversos"},
"itemTypeTool":function(d){return "ferramenta"},
"items":function(d){return "item(ns)"},
"itemsOfBlockType":function(d){return "item(ns) do tipo de bloco"},
"level10FailureMessage":function(d){return "Cubra a lava para cruzá-la, depois minere dois dos blocos de ferro do outro lado."},
"level11FailureMessage":function(d){return "Certifique-se de colocar pedregulhos adiante, se houver lava. Isso permitirá minerar estes recursos com segurança."},
"level12FailureMessage":function(d){return "Certifique-se de minerar 3 blocos de Redstone. Isso combina o que você aprendeu construindo sua casa e usando comandos \"se\" para evitar cair na lava."},
"level13FailureMessage":function(d){return "Coloque \"trilhos\" no caminho de terra, partindo da sua porta até as margens do mapa."},
"level1FailureMessage":function(d){return "Você precisa usar comandos para caminhar até as ovelhas."},
"level1TooFewBlocksMessage":function(d){return "Tente usar mais comandos para caminhar até as ovelhas."},
"level2FailureMessage":function(d){return "Para derrubar uma árvore, ande até o seu tronco e use o comando \"destruir bloco\"."},
"level2TooFewBlocksMessage":function(d){return "Tente usar mais comandos para derrubar uma árvore. Ande até seu tronco e use o comando \"destruir bloco\"."},
"level3FailureMessage":function(d){return "Para recolher lã de ambas as ovelhas, vá até cada uma e use o comando \"cortar\". Lembre-se de usar comandos para virar e alcançar as ovelhas."},
"level3TooFewBlocksMessage":function(d){return "Tente usar mais comandos para recolher lã de ambas as ovelhas, vá até cada uma e use o comando \"cortar\"."},
"level4FailureMessage":function(d){return "Você precisa usar o comando \"destruir bloco\" em cada um dos três troncos de árvore."},
"level5FailureMessage":function(d){return "Coloque seus blocos na linha de terra para construir uma parede. O comando \"repetir\", em rosa, executa comandos colocados dentro dele, como \"colocar bloco\" e \"mover para a frente\"."},
"level6FailureMessage":function(d){return "Coloque blocos na linha de terra da casa, para completar o quebra-cabeça."},
"level7FailureMessage":function(d){return "Use o comando \"plantar\" para colocar plantações em cada pedaço de terra arada."},
"level8FailureMessage":function(d){return "Se você tocar um creeper ele vai explodir. Esgueire-se por eles e entre em sua casa."},
"level9FailureMessage":function(d){return "Não se esqueça de colocar pelo menos 2 tocas para iluminar seu caminho E minere pelo menos 2 carvões."},
"maskMode":function(d){return "modo camuflado"},
"maskModeMasked":function(d){return "mascarado"},
"maskModeReplace":function(d){return "substituir"},
"minecraftBlock":function(d){return "bloco"},
"minecraftNotConnected":function(d){return "O Minecraft não está conectado"},
"miniBlockBricks":function(d){return "tijolos"},
"miniBlockBucketLava":function(d){return "balde de lava"},
"miniBlockBucketWater":function(d){return "balde de água"},
"miniBlockCarrots":function(d){return "cenouras"},
"miniBlockCoal":function(d){return "carvão"},
"miniBlockCobblestone":function(d){return "pedregulho"},
"miniBlockDiamond":function(d){return "diamante"},
"miniBlockDirt":function(d){return "terra"},
"miniBlockDirtCoarse":function(d){return "terra grossa"},
"miniBlockEgg":function(d){return "ovo"},
"miniBlockEmerald":function(d){return "esmeralda"},
"miniBlockGravel":function(d){return "cascalho"},
"miniBlockGunPowder":function(d){return "pólvora"},
"miniBlockIngotGold":function(d){return "barra de ouro"},
"miniBlockIngotIron":function(d){return "barra de ferro"},
"miniBlockLapisLazuli":function(d){return "Lápis-Lazúli"},
"miniBlockLogAcacia":function(d){return "madeira de acácia"},
"miniBlockLogBirch":function(d){return "tronco de bétula"},
"miniBlockLogJungle":function(d){return "tronco de selva"},
"miniBlockLogOak":function(d){return "madeira de carvalho"},
"miniBlockLogSpruce":function(d){return "madeira de pinheiro"},
"miniBlockMilk":function(d){return "leite"},
"miniBlockPlanksAcacia":function(d){return "tábuas de acácia"},
"miniBlockPlanksBirch":function(d){return "tábuas de bétula"},
"miniBlockPlanksJungle":function(d){return "tábuas de selva"},
"miniBlockPlanksOak":function(d){return "tábuas de carvalho"},
"miniBlockPlanksSpruce":function(d){return "tábuas de pinheiro"},
"miniBlockPoppy":function(d){return "papoula"},
"miniBlockPotato":function(d){return "batata"},
"miniBlockRedstoneDust":function(d){return "pó de Redstone"},
"miniBlockSand":function(d){return "areia"},
"miniBlockSandstone":function(d){return "arenito"},
"miniBlockSheep":function(d){return "ovelha"},
"miniBlockWheat":function(d){return "trigo"},
"miniBlockWool":function(d){return "lã"},
"nextLevelMsg":function(d){return "Quebra-cabeças "+craft_locale.v(d,"puzzleNumber")+" concluído. Parabéns!"},
"oldBlockHandling":function(d){return "antigo bloco no"},
"oldBlockHandlingsDestroy":function(d){return "destruir"},
"oldBlockHandlingsKeep":function(d){return "manter"},
"oldBlockHandlingsReplace":function(d){return "substituir"},
"onBehalfOf":function(d){return "em nome de"},
"playerSelectChooseCharacter":function(d){return "Escolha seu personagem."},
"playerSelectChooseSelectButton":function(d){return "Selecione"},
"playerSelectLetsGetStarted":function(d){return "Vamos começar."},
"quantity":function(d){return "quantidade"},
"reinfFeedbackMsg":function(d){return "Você pode pressionar \"Continuar jogando\" para voltar ao seu jogo."},
"relative":function(d){return "relativo"},
"runAgent":function(d){return "Executar Agent"},
"score":function(d){return "Placar"},
"seconds":function(d){return "segundo(s)"},
"selectChooseButton":function(d){return "Selecione"},
"soundTypeBump":function(d){return "colisão"},
"soundTypeChickenBawk":function(d){return "piado de galinha"},
"soundTypeChickenHurt":function(d){return "galinha machucada"},
"soundTypeCollectedBlock":function(d){return "coletar bloco"},
"soundTypeCowHuff":function(d){return "resmuungo de vaca"},
"soundTypeCowHurt":function(d){return "vaca machucada"},
"soundTypeCowMoo":function(d){return "mugido de vaca"},
"soundTypeCowMooLong":function(d){return "muugido de vaca"},
"soundTypeCreeperHiss":function(d){return "chiado de creeper"},
"soundTypeDig_wood1":function(d){return "quebra de madeira"},
"soundTypeDoorOpen":function(d){return "abertura de porta"},
"soundTypeExplode":function(d){return "explodir"},
"soundTypeFailure":function(d){return "falha de nível"},
"soundTypeFall":function(d){return "queda"},
"soundTypeFizz":function(d){return "crepitar"},
"soundTypeFuse":function(d){return "estopim"},
"soundTypeIronGolemHit":function(d){return "acerto em golem de ferro"},
"soundTypeMetalWhack":function(d){return "pancada em metal"},
"soundTypeMinecart":function(d){return "carrinho de mina"},
"soundTypePlaceBlock":function(d){return "colocando bloco"},
"soundTypePunch":function(d){return "soco"},
"soundTypeSheepBaa":function(d){return "balido de ovelha"},
"soundTypeStepFarmland":function(d){return "passo em terra arada"},
"soundTypeStepGrass":function(d){return "passo em grama"},
"soundTypeStepGravel":function(d){return "passo em cascalho"},
"soundTypeStepStone":function(d){return "passo em pedra"},
"soundTypeStepWood":function(d){return "passo em madeira"},
"soundTypeSuccess":function(d){return "sucesso de nível"},
"soundTypeZombieBrains":function(d){return "grunhido de zumbi"},
"soundTypeZombieGroan":function(d){return "rosnado de zumbi"},
"soundTypeZombieHurt":function(d){return "zumbi machucado"},
"target":function(d){return "alvo"},
"testModeAll":function(d){return "todos"},
"testModeMasked":function(d){return "mascarado"},
"tileData":function(d){return "dados do bloco"},
"timeDay":function(d){return "dia"},
"timeLong":function(d){return "longo"},
"timeMedium":function(d){return "médio"},
"timeNight":function(d){return "noite"},
"timeRandom":function(d){return "aleatório"},
"timeSet":function(d){return "definir tempo para"},
"timeShort":function(d){return "curto"},
"timeVeryLong":function(d){return "muito longo"},
"timeVeryShort":function(d){return "muito curto"},
"to":function(d){return "para"},
"toSlotNumber":function(d){return "para o espaço número"},
"tooManyBlocksFail":function(d){return "Quebra-cabeças "+craft_locale.v(d,"puzzleNumber")+" concluído. Parabéns! Também é possível completá-lo com "+craft_locale.p(d,"numBlocks",0,"pt",{"one":"1 bloco","other":craft_locale.n(d,"numBlocks")+" blocos"})+"."},
"turnRandom":function(d){return "virar aleatório"},
"useArrowKeys":function(d){return "Não é necessário adicionar mais blocos! Mova-se com as setas do teclado e pressione a barra de espaço ou toque no tabuleiro do jogo para usar itens."},
"weather":function(d){return "clima"},
"weatherTypeClear":function(d){return "limpar"},
"weatherTypeRain":function(d){return "chuva"},
"weatherTypeThunder":function(d){return "trovão"}};