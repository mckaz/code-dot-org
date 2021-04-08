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
"at":function(d){return "で"},
"atFlower":function(d){return "花で"},
"atHoneycomb":function(d){return "ハチの巣で"},
"avoidCowAndRemove":function(d){return "うしにぶつからないように つちをかたづけよう"},
"collect":function(d){return "あつめる"},
"collectiblePresent":function(d){return "いくつかのお宝（たから）があります。"},
"collectorCollectTooltip":function(d){return "アイテムをあつめる"},
"collectorCollectedEverything":function(d){return "おめでとう！ あなたは"+maze_locale.v(d,"count")+"つのすべてのアイテムをあつめました！"},
"collectorCollectedNothing":function(d){return "コーディングをつづけよう！できるだけたくさんのアイテムをあつめてね。"},
"collectorCollectedSome":function(d){return "よくやりました！ あなたは"+maze_locale.v(d,"count")+"つのアイテムをあつめました！"},
"collectorCollectedNotEnough":function(d){return "コーディングを続けてください! 少なくとも "+maze_locale.p(d,"goal",0,"ja",{"one":"1 アイテム","other":maze_locale.n(d,"goal")+" アイテム"})+"を収集する必要があります。"},
"collectorCollectedTooMany":function(d){return "そのスペースには集められるアイテムがありません。"},
"collectorTooManyBlocks":function(d){return maze_locale.v(d,"blockLimit")+" ブロックだけつかえるよ。コードをよくみて、もういちどやりなおそう!"},
"continue":function(d){return "続行"},
"corn":function(d){return "トウモロコシ"},
"cornTooltip":function(d){return "トウモロコシを収穫する"},
"didNotCollectAllCrops":function(d){return "作物（さくもつ）をのこさないようにしよう！"},
"didNotCollectEverything":function(d){return "花のミツとハチミツを残さないでね！"},
"didNotPlantEverywhere":function(d){return "すべての地面に何かを植えたか、もう一回チェックしてください！"},
"dig":function(d){return "つちをかたづける"},
"digTooltip":function(d){return "泥を1つ取り除きます。"},
"dirE":function(d){return "みぎ"},
"dirN":function(d){return "うえ"},
"dirS":function(d){return "した"},
"dirW":function(d){return "西"},
"doCode":function(d){return "やること"},
"elseCode":function(d){return "ちがうときには"},
"emptyCropError":function(d){return "その作物が全て消えていました。"},
"fill":function(d){return "あなをうめる"},
"fillN":function(d){return maze_locale.v(d,"shovelfuls")+" 回（かい）穴（ あな）を埋（う）める"},
"fillSquare":function(d){return "しかくのなかを ぬる"},
"fillStack":function(d){return maze_locale.v(d,"shovelfuls")+"つのあなをうめる"},
"fillTooltip":function(d){return "つちを１かい おく"},
"finalLevel":function(d){return "やったね！ さいごのパズルができたね！"},
"flowerEmptyError":function(d){return "この花にはミツがないよ。"},
"get":function(d){return "とる"},
"goal":function(d){return "ゴール"},
"has":function(d){return "が"},
"haslettuce":function(d){return "レタスがあります"},
"hascorn":function(d){return "トウモロコシがあります。"},
"haspumpkin":function(d){return "カボチャがあります。"},
"heightParameter":function(d){return "たかさ"},
"holePresent":function(d){return "あながある"},
"honey":function(d){return "ハチミツをつくる"},
"honeyAvailable":function(d){return "ハチミツ"},
"honeyTooltip":function(d){return "花のミツからハチミツをつくる"},
"honeycombFullError":function(d){return "はちのすは いっぱいになりました。ハチミツを作れません。"},
"ifCode":function(d){return "もし"},
"ifFlowerTooltip":function(d){return "花や はちのすがあるときにだけ、どうぐをつかいます。"},
"ifInRepeatError":function(d){return "「もういっかいやる」ブロックのなかに「もしも」のブロックがひつようです。もしわからなくなったら、ひとつまえのレベルにもどって、「もしも」のブロックが、どうやってうごいたか、みてみましょう。"},
"ifOnlyFlowerTooltip":function(d){return "指定した方向に花があれば、なにかアクションをおこします"},
"ifPathAhead":function(d){return "もし 前に 道があるなら"},
"ifTooltip":function(d){return "もしも、いきたいところに、みちがあったら、なにかやってみます。"},
"ifelseFlowerTooltip":function(d){return "花や はちのすがあるときにだけ、うえのどうぐをつかいます。ないときには、したのどうぐをつかいます。"},
"ifelseTooltip":function(d){return "もしも、いきたいほうに、みちがあったら、ひとつめのブロックをやってみましょう。もしも、みちがなかったら、ふたつめのブロックをやってみましょう。"},
"insufficientHoney":function(d){return "どうぐをただしくつかうことができたね！ でも、ハチミツがたりないよ！"},
"insufficientNectar":function(d){return "どうぐをただしくつかうことができたね！ でも、花のミツがたりないよ！"},
"lettuce":function(d){return "レタス"},
"lettuceTooltip":function(d){return "レタスを収穫（しゅうかく）する"},
"make":function(d){return "つくる"},
"moveBackward":function(d){return "後ろに すすむ"},
"moveEastTooltip":function(d){return "いっぽみぎにうごくよ。"},
"moveForward":function(d){return "前に すすむ"},
"moveForwardTooltip":function(d){return "わたしを、いっぽ、すすめてください。"},
"moveNorthTooltip":function(d){return "いっぽうえにうごくよ。"},
"moveSouthTooltip":function(d){return "いっぽしたにうごくよ。"},
"moveTooltip":function(d){return "いっぽまえかうしろにうごくよ。"},
"moveWestTooltip":function(d){return "いっぽひだりにうごくよ。"},
"nectar":function(d){return "花のミツをとる"},
"nectarRemaining":function(d){return "花のミツ"},
"nectarTooltip":function(d){return "花のミツをとるよ。"},
"nextLevel":function(d){return "やったね！ パズルができたね！"},
"no":function(d){return "いいえ"},
"noPathAhead":function(d){return "そこは とおれないよ"},
"noPathLeft":function(d){return "ひだりに　いけません"},
"noPathRight":function(d){return "みぎに　いけません"},
"notAtFlowerError":function(d){return "ここでは、花のミツをとれないよ。"},
"notAtHoneycombError":function(d){return "ここでは、ハチミツをつくれないよ。"},
"numBlocksNeeded":function(d){return "ぶひんを %1こつかって つくってみよう。"},
"pathAhead":function(d){return "まえに みちがある"},
"pathLeft":function(d){return "もし 左に 道があるなら"},
"pathRight":function(d){return "もし 右に 道があるなら"},
"pick":function(d){return "ピック"},
"pilePresent":function(d){return "つちのやまがある"},
"plant":function(d){return "植（う）える"},
"plantInNonSoilError":function(d){return "新鮮な土壌だけに作物を植えることができます。"},
"plantTooltip":function(d){return "苗を植えましょう。"},
"pumpkin":function(d){return "カボチャ"},
"pumpkinTooltip":function(d){return "カボチャを収穫します。"},
"putdownTower":function(d){return "タワーを　おいてください"},
"removeAndAvoidTheCow":function(d){return "うしにぶつからないように つちをかたづける"},
"removeN":function(d){return maze_locale.v(d,"shovelfuls")+"かい つちをかたづける"},
"removePile":function(d){return "つちをかたづける"},
"removeSquare":function(d){return "しかくを けす"},
"removeStack":function(d){return maze_locale.v(d,"shovelfuls")+"かい つちをかたづける"},
"repeatCarefullyError":function(d){return "このもんだいを　とくときの　ちゅういは、ふたつ　うごかさなくては　いけないことと、”おなじことを　くりかえす”ブロックのなかに　いっかい　まがるを　いれないと　いけないことです。　さいごは、　いっかい　よぶんにまがっても　だいじょうぶです。"},
"repeatUntil":function(d){return "とどくまで くりかえす"},
"repeatUntilBlocked":function(d){return "まえにみちがあるとき"},
"repeatUntilFinish":function(d){return "とどくまで くりかえす"},
"soil":function(d){return "土壌"},
"sprout":function(d){return "苗（なえ）"},
"step":function(d){return "ステップ"},
"totalHoney":function(d){return "ぜんぶのハチミツ"},
"totalNectar":function(d){return "ぜんぶの花のミツ"},
"turnLeft":function(d){return "左に まがる"},
"turnRight":function(d){return "右に まがる"},
"turnTooltip":function(d){return "わたしを、みぎ か ひだりへ　 ちょっかくに　まがらせて　ください"},
"uncheckedCloudError":function(d){return "くものなかにあるのは、もしかしたら花ですか？ はちのすですか？ どうぐをつかってしらべよう。"},
"uncheckedPurpleError":function(d){return "むらさきの花に、ミツがあるかどうか。どうぐをつかってしらべてみよう。"},
"whileMsg":function(d){return "以下の間"},
"whileTooltip":function(d){return "しゅうてんに　たどりつくまで、かこってある　うごきを　くりかえし　やってください。"},
"word":function(d){return "ことばを見つけましょう"},
"wrongCropError":function(d){return "私はここから作物を収穫することができません。"},
"yes":function(d){return "はい"},
"youSpelled":function(d){return "あなたのスペル"}};