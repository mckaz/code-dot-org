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
"at":function(d){return "em"},
"atFlower":function(d){return "na flor"},
"atHoneycomb":function(d){return "na colmeia"},
"avoidCowAndRemove":function(d){return "evitar a vaca e remover 1"},
"collect":function(d){return "recolha"},
"collectiblePresent":function(d){return "há um tesouro"},
"collectorCollectTooltip":function(d){return "Recolha uma peça"},
"collectorCollectedEverything":function(d){return "Parabéns! Você recolheu todos as "+maze_locale.v(d,"count")+" peças!"},
"collectorCollectedNothing":function(d){return "Continue a codificar! Recolha a maior quantidade de peças que poder."},
"collectorCollectedSome":function(d){return "Bom Trabalho! Recolheu "+maze_locale.v(d,"count")+" peças!"},
"collectorCollectedNotEnough":function(d){return "Keep coding! You need to collect at least "+maze_locale.p(d,"goal",0,"pt",{"one":"1 item","other":maze_locale.n(d,"goal")+" items"})+"."},
"collectorCollectedTooMany":function(d){return "O espaço não tem peças suficientes para eu recolher."},
"collectorTooManyBlocks":function(d){return "Só pode usar "+maze_locale.v(d,"blockLimit")+" blocos. Verifique o seu código e tente novamente!"},
"continue":function(d){return "Continuar"},
"corn":function(d){return "milho"},
"cornTooltip":function(d){return "Recolha algum milho"},
"didNotCollectAllCrops":function(d){return "Assegure-se que não deixa nenhuma colheita para trás!"},
"didNotCollectEverything":function(d){return "Certifica-te de que não deixas néctar nem mel para trás!"},
"didNotPlantEverywhere":function(d){return "Assegure-se que semeia algo em todas áreas de cultivo!"},
"dig":function(d){return "remover 1"},
"digTooltip":function(d){return "remover 1 unidade de terra"},
"dirE":function(d){return "E"},
"dirN":function(d){return "N"},
"dirS":function(d){return "S"},
"dirW":function(d){return "O"},
"doCode":function(d){return "fazer"},
"elseCode":function(d){return "se não"},
"emptyCropError":function(d){return "Essa colheita já desapareceu."},
"fill":function(d){return "preencher 1"},
"fillN":function(d){return "preencher "+maze_locale.v(d,"shovelfuls")},
"fillSquare":function(d){return "preencher quadrado"},
"fillStack":function(d){return "preencher pilha de "+maze_locale.v(d,"shovelfuls")+" buracos"},
"fillTooltip":function(d){return "colocar 1 unidade de terra"},
"finalLevel":function(d){return "Parabéns! Resolveste o desafio final."},
"flowerEmptyError":function(d){return "A flor em que estás já não tem mais néctar."},
"get":function(d){return "obter"},
"goal":function(d){return "goal"},
"has":function(d){return "tem"},
"haslettuce":function(d){return "there is lettuce"},
"hascorn":function(d){return "há milho"},
"haspumpkin":function(d){return "há abóboras"},
"heightParameter":function(d){return "altura"},
"holePresent":function(d){return "há um buraco"},
"honey":function(d){return "produzir mel"},
"honeyAvailable":function(d){return "mel"},
"honeyTooltip":function(d){return "Produz mel a partir do néctar"},
"honeycombFullError":function(d){return "Esta colmeia não tem espaço para mais mel."},
"ifCode":function(d){return "se"},
"ifFlowerTooltip":function(d){return "Se existir alguma flor ou colmeia na direção especificada, então executa algumas ações."},
"ifInRepeatError":function(d){return "Precisas de um bloco \"se\" dentro de um bloco \"repetir\". Se estás a ter problemas, tenta o nível anterior outra vez para perceberes como funciona."},
"ifOnlyFlowerTooltip":function(d){return "Se houver uma flor na direção indicada, então executa algumas ações."},
"ifPathAhead":function(d){return "se há caminho em frente"},
"ifTooltip":function(d){return "Se há caminho na direção especificada, faz algumas ações."},
"ifelseFlowerTooltip":function(d){return "Se existir alguma flor ou colmeia na direção especificada, então executa o primeiro bloco de ações. Caso contrário, executa o segundo bloco de ações."},
"ifelseTooltip":function(d){return "Se houver caminho na direção especificada, então executa o primeiro bloco de ações. Se não, executa o segundo bloco de ações."},
"insufficientHoney":function(d){return "Tens de produzir a quantidade certa de mel."},
"insufficientNectar":function(d){return "Tens de recolher a quantidade certa de néctar."},
"lettuce":function(d){return "lettuce"},
"lettuceTooltip":function(d){return "Harvest some lettuce"},
"make":function(d){return "fazer"},
"moveBackward":function(d){return "mover para trás"},
"moveEastTooltip":function(d){return "Move-me um espaço para este."},
"moveForward":function(d){return "mover para a frente"},
"moveForwardTooltip":function(d){return "Move-me para a frente uma unidade."},
"moveNorthTooltip":function(d){return "Move-me para norte um espaço."},
"moveSouthTooltip":function(d){return "Move-me para sul um espaço."},
"moveTooltip":function(d){return "Move-me para a frente ou para trás um espaço"},
"moveWestTooltip":function(d){return "Move-me para oeste um espaço."},
"nectar":function(d){return "recolher néctar"},
"nectarRemaining":function(d){return "néctar"},
"nectarTooltip":function(d){return "Recolhe néctar de uma flor"},
"nextLevel":function(d){return "Parabéns! Concluíste este desafio."},
"no":function(d){return "Não"},
"noPathAhead":function(d){return "caminho está bloqueado"},
"noPathLeft":function(d){return "Não há caminho para a esquerda"},
"noPathRight":function(d){return "não há caminho para a direita"},
"notAtFlowerError":function(d){return "Só podes obter néctar de uma flor."},
"notAtHoneycombError":function(d){return "Só podes produzir mel numa colmeia."},
"numBlocksNeeded":function(d){return "Este desafio pode ser resolvido com %1 blocos."},
"pathAhead":function(d){return "caminho em frente"},
"pathLeft":function(d){return "se há caminho para a esquerda"},
"pathRight":function(d){return "se há caminho para a direita"},
"pick":function(d){return "recolha"},
"pilePresent":function(d){return "há uma pilha"},
"plant":function(d){return "plantar"},
"plantInNonSoilError":function(d){return "Apenas pode plantar em solo novo."},
"plantTooltip":function(d){return "Plante um rebento"},
"pumpkin":function(d){return "abóbora"},
"pumpkinTooltip":function(d){return "Recolha a abóbora"},
"putdownTower":function(d){return "coloca a torre em baixo"},
"removeAndAvoidTheCow":function(d){return "remove 1 e evita a vaca"},
"removeN":function(d){return "remove "+maze_locale.v(d,"shovelfuls")},
"removePile":function(d){return "Remove a pilha"},
"removeSquare":function(d){return "remove o quadrado"},
"removeStack":function(d){return "remove o monte de pilhas de "+maze_locale.v(d,"shovelfuls")},
"repeatCarefullyError":function(d){return "Para resolveres isto, pensa cuidadosamente no padrão de dois \"mover\" e um \"virar\" para colocar no bloco \"repetir\". Não há problema se tiveres um \"virar\" extra no final."},
"repeatUntil":function(d){return "repetir até"},
"repeatUntilBlocked":function(d){return "enquanto houver caminho em frente"},
"repeatUntilFinish":function(d){return "repete até terminar"},
"soil":function(d){return "solo"},
"sprout":function(d){return "rebento"},
"step":function(d){return "Avançar"},
"totalHoney":function(d){return "mel total"},
"totalNectar":function(d){return "néctar total"},
"turnLeft":function(d){return "virar à esquerda"},
"turnRight":function(d){return "virar à direita"},
"turnTooltip":function(d){return "Vira à esquerda ou à direita 90 graus."},
"uncheckedCloudError":function(d){return "Não te esqueças de verificar todas as nuvens para veres se são flores ou colmeias."},
"uncheckedPurpleError":function(d){return "Não te esqueças de verificar todas as flores roxas para veres se têm néctar."},
"whileMsg":function(d){return "enquanto"},
"whileTooltip":function(d){return "Repete as ações seguintes até a condição de terminação ser alcançada."},
"word":function(d){return "Encontra a palavra"},
"wrongCropError":function(d){return "Não consigo fazer essa colheita a partir daqui."},
"yes":function(d){return "Sim"},
"youSpelled":function(d){return "Tu escreveste"}};