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
"agentGenericFailureMessage":function(d){return "Continua a escrever código! Não te esqueças da ajuda do Agent."},
"agentTooFewBlocksFailureMessage":function(d){return "Experimenta adicionar apenas um bloco de cada vez para levar o Agent até ao local certo."},
"at":function(d){return "em"},
"agentDiamondPathCongrats":function(d){return "Parabéns! Encontraste o caminho de diamantes! Já recolheste "+craft_locale.p(d,"count",0,"pt",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+"!"},
"blockActionAdd":function(d){return "adiciona"},
"blockActionAttack":function(d){return "ataque"},
"blockActionClone":function(d){return "clonar blocos"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "recolha"},
"blockActionCollectAll":function(d){return "recolher tudo"},
"blockActionDestroyEntity":function(d){return "desaparecer"},
"blockActionDetect":function(d){return "detetar"},
"blockActionDetectRedstone":function(d){return "detetar redstone"},
"blockActionDrop":function(d){return "largar"},
"blockActionDropAll":function(d){return "largar tudo"},
"blockActionExecute":function(d){return "executar comando"},
"blockActionExplodeEntity":function(d){return "explodir"},
"blockActionFill":function(d){return "fill from"},
"blockActionFlashEntity":function(d){return "piscar"},
"blockActionGetItemCount":function(d){return "obter contagem de itens"},
"blockActionGetItemCountInSlotNumber":function(d){return "get item count in slot number"},
"blockActionGetItemDetail":function(d){return "obter dados do item"},
"blockActionGetItemDetailInSlotNumber":function(d){return "get item detail in slot number"},
"blockActionGetItemSpace":function(d){return "get item space"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "get item space in slot number"},
"blockActionGive":function(d){return "give"},
"blockActionInspect":function(d){return "inspecionar"},
"blockActionInspectData":function(d){return "inspecionar dados"},
"blockActionKill":function(d){return "matar alvo"},
"blockActionMove":function(d){return "mover"},
"blockActionMoveAway":function(d){return "afastar-se de"},
"blockActionMoveForward":function(d){return "mover para a frente"},
"blockActionMoveRandom":function(d){return "mover aleatoriamente"},
"blockActionMoveTo":function(d){return "mover para"},
"blockActionMoveToward":function(d){return "dar um passo em direção a"},
"blockActionPlaySound":function(d){return "reproduzir som"},
"blockActionRepeat":function(d){return "repetir"},
"blockActionRepeatRandom":function(d){return "repetir aleatoriamente"},
"blockActionSetBlock":function(d){return "set block to"},
"blockActionSpawn":function(d){return "gerar"},
"blockActionSummon":function(d){return "invocar"},
"blockActionTeleport":function(d){return "teletransportar alvo"},
"blockActionTeleportToPlayer":function(d){return "teletransportar para jogador"},
"blockActionTestForBlock":function(d){return "tests whether a block type"},
"blockActionTestForBlocks":function(d){return "tests whether the pattern between"},
"blockActionToScore":function(d){return "à pontuação"},
"blockActionTransfer":function(d){return "transferir"},
"blockActionWait":function(d){return "espere"},
"blockActionWith":function(d){return "com"},
"blockData":function(d){return "dados de bloco"},
"blockDestroyBlock":function(d){return "destruir bloco"},
"blockIf":function(d){return "se"},
"blockIfLavaAhead":function(d){return "se houver lava à frente"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "mover"},
"blockMoveBackward":function(d){return "mover para trás"},
"blockMoveForward":function(d){return "mover para a frente"},
"blockPlace":function(d){return "colocar"},
"blockPlaceTorch":function(d){return "colocar tocha"},
"blockPlaceXAheadAhead":function(d){return "à frente"},
"blockPlaceXAheadPlace":function(d){return "colocar"},
"blockPlaceXPlace":function(d){return "colocar"},
"blockPlantCrop":function(d){return "plantar"},
"blockShear":function(d){return "tosquiar"},
"blockTill":function(d){return "arar"},
"blockTillSoil":function(d){return "arar solo"},
"blockTurn":function(d){return "virar"},
"blockTurnLeft":function(d){return "virar à esquerda"},
"blockTurnRight":function(d){return "virar à direita"},
"blockType":function(d){return "tipo de bloco"},
"blockTypeBedrock":function(d){return "rocha-mãe"},
"blockTypeBricks":function(d){return "tijolos"},
"blockTypeClay":function(d){return "barro"},
"blockTypeClayHardened":function(d){return "barro endurecido"},
"blockTypeCobblestone":function(d){return "pedra arredondada"},
"blockTypeDirt":function(d){return "terra"},
"blockTypeDirtCoarse":function(d){return "terra infértil"},
"blockTypeDoorIron":function(d){return "porta de ferro"},
"blockTypeEmpty":function(d){return "vazio"},
"blockTypeFarmlandWet":function(d){return "terra de cultivo"},
"blockTypeGlass":function(d){return "vidro"},
"blockTypeGlowstone":function(d){return "pedra luminosa"},
"blockTypeGrass":function(d){return "relva"},
"blockTypeGravel":function(d){return "gravilha"},
"blockTypeLava":function(d){return "lava"},
"blockTypeLogAcacia":function(d){return "toro de acácia"},
"blockTypeLogBirch":function(d){return "toro de bétula"},
"blockTypeLogJungle":function(d){return "toro da selva"},
"blockTypeLogOak":function(d){return "toro de carvalho"},
"blockTypeLogSpruce":function(d){return "toro de abeto"},
"blockTypeOreCoal":function(d){return "minério de carvão"},
"blockTypeOreDiamond":function(d){return "minério de diamante"},
"blockTypeOreEmerald":function(d){return "minério de esmeralda"},
"blockTypeOreGold":function(d){return "minério de ouro"},
"blockTypeOreIron":function(d){return "minério de ferro"},
"blockTypeOreLapis":function(d){return "minério de lápis-lazúli"},
"blockTypeOreRedstone":function(d){return "minério de redstone"},
"blockTypePlanksAcacia":function(d){return "pranchas de acácia"},
"blockTypePlanksBirch":function(d){return "pranchas de bétula"},
"blockTypePlanksJungle":function(d){return "pranchas de madeira da selva"},
"blockTypePlanksOak":function(d){return "pranchas de carvalho"},
"blockTypePlanksSpruce":function(d){return "pranchas de abeto"},
"blockTypePressurePlateUp":function(d){return "placa de pressão"},
"blockTypeRail":function(d){return "carril"},
"blockTypeRailsRedstoneTorch":function(d){return "tocha de redstone"},
"blockTypeRedstoneWire":function(d){return "fio de redstone"},
"blockTypeSand":function(d){return "areia"},
"blockTypeSandstone":function(d){return "arenito"},
"blockTypeStone":function(d){return "pedra"},
"blockTypeTnt":function(d){return "dinamite"},
"blockTypeTree":function(d){return "árvore"},
"blockTypeWater":function(d){return "água"},
"blockTypeWool":function(d){return "lã"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "à frente"},
"blockWhileXAheadDo":function(d){return "fazer"},
"blockWhileXAheadWhile":function(d){return "enquanto"},
"cancel":function(d){return "Cancelar"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "mover"},
"cloneModeNormal":function(d){return "normal"},
"connectToCodeConnection":function(d){return "Para executar este projeto no Minecraft: Education Edition, utiliza a aplicação Code Connection."},
"destination":function(d){return "destination"},
"directionBack":function(d){return "para trás"},
"directionDown":function(d){return "para baixo"},
"directionForward":function(d){return "para a frente"},
"directionLeft":function(d){return "para a esquerda"},
"directionMiddle":function(d){return "para o centro"},
"directionRight":function(d){return "para a direita"},
"directionUp":function(d){return "para cima"},
"downloadButton":function(d){return "Transferir"},
"entityType":function(d){return "tipo de entidade"},
"entityTypeChicken":function(d){return "galinha"},
"entityTypeCow":function(d){return "vaca"},
"entityTypeCreeper":function(d){return "creeper"},
"entityTypeIronGolem":function(d){return "golem de ferro"},
"entityTypePlayer":function(d){return "jogador"},
"entityTypeSheep":function(d){return "ovelha"},
"entityTypeZombie":function(d){return "zombie"},
"eventTypeWhenAttacked":function(d){return "quando atacado"},
"eventTypeWhenDay":function(d){return "quando é dia"},
"eventTypeWhenNight":function(d){return "quando é noite"},
"eventTypeWhenRun":function(d){return "quando executar"},
"eventTypeWhenSpawned":function(d){return "quando gerado"},
"eventTypeWhenTouched":function(d){return "quando tocado"},
"eventTypeWhenUsed":function(d){return "quando utilizado"},
"forever":function(d){return "para sempre"},
"from":function(d){return "from"},
"generatedCodeDescription":function(d){return "Ao arrastar e colocar blocos neste quebra-cabeças, criaste um conjunto de instruções numa linguagem de programação chamada Javascript. Este código diz aos computadores o que apresentar no ecrã. Tudo o que vês e fazes em Minecraft também começa com linhas de código de programação como estas."},
"getdataof":function(d){return "obter dados de"},
"getnameof":function(d){return "obter nome de"},
"houseSelectChooseFloorPlan":function(d){return "Escolhe o plano do pavimento da tua casa."},
"houseSelectEasy":function(d){return "Fácil"},
"houseSelectHard":function(d){return "Difícil"},
"houseSelectLetsBuild":function(d){return "Vamos construir uma casa."},
"houseSelectMedium":function(d){return "Intermédio"},
"import":function(d){return "Importar"},
"importShareLinkBody":function(d){return "Escreve a tua ligação de partilha da Hora do Código e clica em \"Importar\" para copiar o teu código para o Minecraft"},
"importShareLinkHeader":function(d){return "Importar uma ligação de partilha"},
"inSlotNumber":function(d){return "no espaço número"},
"itemTypeBlock":function(d){return "bloco"},
"itemTypeDecoration":function(d){return "decoração"},
"itemTypeMiscellaneous":function(d){return "diversos"},
"itemTypeTool":function(d){return "ferramenta"},
"items":function(d){return "item/itens"},
"itemsOfBlockType":function(d){return "item/itens do tipo bloco"},
"level10FailureMessage":function(d){return "Cobre a lava para atravessares e depois escava dois dos blocos de ferro no outro lado."},
"level11FailureMessage":function(d){return "Certifica-te de que colocas pedra arredondada à frente se houver lava. Isso vai permitir-te escavar em segurança esta fieira de recursos."},
"level12FailureMessage":function(d){return "Certifica-te de que escavas 3 blocos de redstone. Isso combina o que aprendeste ao construir a tua casa e ao utilizar declarações \"se\" para evitares cair na lava."},
"level13FailureMessage":function(d){return "Coloca um \"carril\" ao longo do caminho de terra que vai da tua porta à orla do mapa."},
"level1FailureMessage":function(d){return "Tens de utilizar comandos para caminhar até à ovelha."},
"level1TooFewBlocksMessage":function(d){return "Experimenta utilizar mais comandos para caminhar até à ovelha."},
"level2FailureMessage":function(d){return "Para abater uma árvore, caminha até ao seu tronco e utiliza o comando \"destruir bloco\"."},
"level2TooFewBlocksMessage":function(d){return "Experimenta utilizar mais comandos para abater a árvore. Caminha até ao seu tronco e utiliza o comando \"destruir bloco\"."},
"level3FailureMessage":function(d){return "Para recolher lã das duas ovelhas, caminha até cada uma delas e utiliza o comando \"tosquiar\". Não te esqueças de utilizar comandos de virar para chegar às ovelhas."},
"level3TooFewBlocksMessage":function(d){return "Experimenta utilizar mais comandos para recolher lã das duas ovelhas. Caminha até cada uma delas e utiliza o comando \"tosquiar\"."},
"level4FailureMessage":function(d){return "Tens de utilizar o comando \"destruir bloco\" em cada um dos três troncos de árvore."},
"level5FailureMessage":function(d){return "Coloca os teus blocos no contorno de terra para construir uma parede. O comando cor-de-rosa \"repetir\" vai executar comandos colocados no seu interior, como \"colocar bloco\" e \"avançar\"."},
"level6FailureMessage":function(d){return "Coloca blocos no contorno de terra da casa para concluir o quebra-cabeças."},
"level7FailureMessage":function(d){return "Utiliza o comando \"plantar\" para colocar plantações em cada talhão de solo escuro arado."},
"level8FailureMessage":function(d){return "Se tocares num creeper, este explode. Esgueira-te em redor dele e entra na tua casa."},
"level9FailureMessage":function(d){return "Não te esqueças de colocar, pelo menos, 2 tochas para iluminar o teu caminho e escavar, pelo menos, 2 carvões."},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "mascarado"},
"maskModeReplace":function(d){return "substituir"},
"minecraftBlock":function(d){return "bloco"},
"minecraftNotConnected":function(d){return "O Minecraft não está ligado"},
"miniBlockBricks":function(d){return "tijolos"},
"miniBlockBucketLava":function(d){return "balde de lava"},
"miniBlockBucketWater":function(d){return "balde de água"},
"miniBlockCarrots":function(d){return "cenouras"},
"miniBlockCoal":function(d){return "carvão"},
"miniBlockCobblestone":function(d){return "pedra arredondada"},
"miniBlockDiamond":function(d){return "diamante"},
"miniBlockDirt":function(d){return "terra"},
"miniBlockDirtCoarse":function(d){return "terra infértil"},
"miniBlockEgg":function(d){return "ovo"},
"miniBlockEmerald":function(d){return "esmeralda"},
"miniBlockGravel":function(d){return "gravilha"},
"miniBlockGunPowder":function(d){return "pólvora"},
"miniBlockIngotGold":function(d){return "lingote de ouro"},
"miniBlockIngotIron":function(d){return "lingote de ferro"},
"miniBlockLapisLazuli":function(d){return "lápis-lazúli"},
"miniBlockLogAcacia":function(d){return "toro de acácia"},
"miniBlockLogBirch":function(d){return "toro de bétula"},
"miniBlockLogJungle":function(d){return "toro da selva"},
"miniBlockLogOak":function(d){return "toro de carvalho"},
"miniBlockLogSpruce":function(d){return "toro de abeto"},
"miniBlockMilk":function(d){return "leite"},
"miniBlockPlanksAcacia":function(d){return "pranchas de acácia"},
"miniBlockPlanksBirch":function(d){return "pranchas de bétula"},
"miniBlockPlanksJungle":function(d){return "pranchas de madeira da selva"},
"miniBlockPlanksOak":function(d){return "pranchas de carvalho"},
"miniBlockPlanksSpruce":function(d){return "pranchas de abeto"},
"miniBlockPoppy":function(d){return "papoila"},
"miniBlockPotato":function(d){return "batata"},
"miniBlockRedstoneDust":function(d){return "pó de redstone"},
"miniBlockSand":function(d){return "areia"},
"miniBlockSandstone":function(d){return "arenito"},
"miniBlockSheep":function(d){return "ovelha"},
"miniBlockWheat":function(d){return "trigo"},
"miniBlockWool":function(d){return "lã"},
"nextLevelMsg":function(d){return "Quebra-cabeças "+craft_locale.v(d,"puzzleNumber")+" concluído. Parabéns!"},
"oldBlockHandling":function(d){return "old block at"},
"oldBlockHandlingsDestroy":function(d){return "destruir"},
"oldBlockHandlingsKeep":function(d){return "manter"},
"oldBlockHandlingsReplace":function(d){return "substituir"},
"onBehalfOf":function(d){return "em nome de"},
"playerSelectChooseCharacter":function(d){return "Escolhe a tua personagem."},
"playerSelectChooseSelectButton":function(d){return "Selecionar"},
"playerSelectLetsGetStarted":function(d){return "Vamos começar."},
"quantity":function(d){return "quantidade"},
"reinfFeedbackMsg":function(d){return "Podes premir \"Continuar a Jogar\" para voltar a jogar o teu jogo."},
"relative":function(d){return "relative"},
"runAgent":function(d){return "Executar Agent"},
"score":function(d){return "Pontuação"},
"seconds":function(d){return "segundo(s)"},
"selectChooseButton":function(d){return "Selecionar"},
"soundTypeBump":function(d){return "esbarrar"},
"soundTypeChickenBawk":function(d){return "cacarejo de galinha"},
"soundTypeChickenHurt":function(d){return "galinha magoada"},
"soundTypeCollectedBlock":function(d){return "recolher bloco"},
"soundTypeCowHuff":function(d){return "sopro de vaca"},
"soundTypeCowHurt":function(d){return "vaca magoada"},
"soundTypeCowMoo":function(d){return "mugido de vaca"},
"soundTypeCowMooLong":function(d){return "grande mugido de vaca"},
"soundTypeCreeperHiss":function(d){return "silvo de creeper"},
"soundTypeDig_wood1":function(d){return "madeira a partir"},
"soundTypeDoorOpen":function(d){return "porta a abrir"},
"soundTypeExplode":function(d){return "explodir"},
"soundTypeFailure":function(d){return "nível fracassado"},
"soundTypeFall":function(d){return "queda"},
"soundTypeFizz":function(d){return "assobio"},
"soundTypeFuse":function(d){return "rastilho"},
"soundTypeIronGolemHit":function(d){return "golpe de golem de ferro"},
"soundTypeMetalWhack":function(d){return "golpe de metal"},
"soundTypeMinecart":function(d){return "vagoneta"},
"soundTypePlaceBlock":function(d){return "colocar bloco"},
"soundTypePunch":function(d){return "impacto"},
"soundTypeSheepBaa":function(d){return "balido de ovelha"},
"soundTypeStepFarmland":function(d){return "passo em terra de cultivo"},
"soundTypeStepGrass":function(d){return "passo em relva"},
"soundTypeStepGravel":function(d){return "passo em gravilha"},
"soundTypeStepStone":function(d){return "passo em pedra"},
"soundTypeStepWood":function(d){return "passo em madeira"},
"soundTypeSuccess":function(d){return "nível bem-sucedido"},
"soundTypeZombieBrains":function(d){return "gemido de morto-vivo"},
"soundTypeZombieGroan":function(d){return "grunhido de morto-vivo"},
"soundTypeZombieHurt":function(d){return "morto-vivo magoado"},
"target":function(d){return "alvo"},
"testModeAll":function(d){return "tudo"},
"testModeMasked":function(d){return "mascarado"},
"tileData":function(d){return "dados de mosaico"},
"timeDay":function(d){return "dia"},
"timeLong":function(d){return "longo"},
"timeMedium":function(d){return "intermédio"},
"timeNight":function(d){return "noite"},
"timeRandom":function(d){return "aleatório"},
"timeSet":function(d){return "definir tempo para"},
"timeShort":function(d){return "curto"},
"timeVeryLong":function(d){return "muito longo"},
"timeVeryShort":function(d){return "muito curto"},
"to":function(d){return "para"},
"toSlotNumber":function(d){return "para o espaço número"},
"tooManyBlocksFail":function(d){return "Quebra-cabeças "+craft_locale.v(d,"puzzleNumber")+" concluído. Parabéns! Também é possível concluí-lo com "+craft_locale.p(d,"numBlocks",0,"pt",{"one":"1 bloco","other":craft_locale.n(d,"numBlocks")+" blocos"})+"."},
"turnRandom":function(d){return "virar aleatoriamente"},
"useArrowKeys":function(d){return "Não precisas de adicionar blocos! Move-te com as setas e prime a barra de espaço ou toca no painel do jogo para utilizar os objetos."},
"weather":function(d){return "clima"},
"weatherTypeClear":function(d){return "limpo"},
"weatherTypeRain":function(d){return "chuva"},
"weatherTypeThunder":function(d){return "thunder"}};