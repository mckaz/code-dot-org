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
"at":function(d){return "at"},
"atFlower":function(d){return "ժամը ծաղիկ"},
"atHoneycomb":function(d){return "ժամը բջիջ"},
"avoidCowAndRemove":function(d){return "պետք է խուսափել կովը եւ հեռացնել 1"},
"collect":function(d){return "collect"},
"collectiblePresent":function(d){return "there is some treasure"},
"collectorCollectTooltip":function(d){return "Collect an item"},
"collectorCollectedEverything":function(d){return "Congratulations! You collected "+maze_locale.p(d,"count",0,"en",{"one":"the item","other":"all "+maze_locale.n(d,"count")+" items"})+"!"},
"collectorCollectedNothing":function(d){return "Keep coding! You need to collect as many of the items as you can."},
"collectorCollectedSome":function(d){return "Great work! You collected "+maze_locale.p(d,"count",0,"en",{"one":"1 item","other":maze_locale.n(d,"count")+" items"})+"!"},
"collectorCollectedNotEnough":function(d){return "Keep coding! You need to collect at least "+maze_locale.p(d,"goal",0,"en",{"one":"1 item","other":maze_locale.n(d,"goal")+" items"})+"."},
"collectorCollectedTooMany":function(d){return "That space doesn't have enough items for me to collect."},
"collectorTooManyBlocks":function(d){return "You can only use "+maze_locale.v(d,"blockLimit")+" blocks. Take a look at your code and try again!"},
"continue":function(d){return "Շարունակել"},
"corn":function(d){return "corn"},
"cornTooltip":function(d){return "Harvest some corn"},
"didNotCollectAllCrops":function(d){return "Make sure you don't leave any crops behind!"},
"didNotCollectEverything":function(d){return "Համոզվեք, որ դուք չեք թողնում որեւէ նեկտար կամ մեղր ետեւում!"},
"didNotPlantEverywhere":function(d){return "Make sure you plant something in every soil patch!"},
"dig":function(d){return "ջնջել 1"},
"digTooltip":function(d){return "Հեռացնել 1 միավոր կեղտ"},
"dirE":function(d){return "E"},
"dirN":function(d){return "N"},
"dirS":function(d){return "S"},
"dirW":function(d){return "W"},
"doCode":function(d){return "անել"},
"elseCode":function(d){return "ուրիշ"},
"emptyCropError":function(d){return "That crop is all gone."},
"fill":function(d){return "լրացնել 1"},
"fillN":function(d){return "լրացնել "+maze_locale.v(d,"shovelfuls")},
"fillSquare":function(d){return "լրացնել հրապարակ"},
"fillStack":function(d){return "լրացնել բուրգ "+maze_locale.v(d,"shovelfuls")+" անցքերի"},
"fillTooltip":function(d){return "1 տեղ միավոր կեղտ"},
"finalLevel":function(d){return "Շնորհավորում եմ: Դուք լուծվել վերջնական հանելուկ."},
"flowerEmptyError":function(d){return "Ծաղիկ դու չունի ավելի նեկտար:"},
"get":function(d){return "ստանալ"},
"goal":function(d){return "goal"},
"has":function(d){return "has"},
"haslettuce":function(d){return "there is lettuce"},
"hascorn":function(d){return "there is corn"},
"haspumpkin":function(d){return "there are pumpkins"},
"heightParameter":function(d){return "բարձրություն"},
"holePresent":function(d){return "կա փոս"},
"honey":function(d){return "մեղր"},
"honeyAvailable":function(d){return "մեղր"},
"honeyTooltip":function(d){return "Դարձնել մեղր նեկտարով"},
"honeycombFullError":function(d){return "Այս բջիջ չունի սենյակը ավելի մեղր:"},
"ifCode":function(d){return "եթե"},
"ifFlowerTooltip":function(d){return "Եթե ​​կա մի ծաղիկ / բջիջ է նշված ուղղությամբ, ապա մի քանի գործողություններ:"},
"ifInRepeatError":function(d){return "Դուք պետք է \"Եթե \" block ներսում \"կրկնում \" բլոկում. Եթե ​​դուք ցանկանում եք դժվարություն, փորձեք նախորդ մակարդակը կրկին տեսնել, թե ինչպես է այն աշխատում."},
"ifOnlyFlowerTooltip":function(d){return "Եթե ​​կա մի ծաղիկ է նշված ուղղությամբ, ապա մի քանի գործողություններ:"},
"ifPathAhead":function(d){return "Եթե ​​ճանապարհը առջեւում"},
"ifTooltip":function(d){return "Եթե ​​կա մի ճանապարհ է, նշված ուղղությամբ, ապա մի քանի գործողություններ:"},
"ifelseFlowerTooltip":function(d){return "Եթե ​​կա մի ծաղիկ / բջիջ է նշված ուղղությամբ, ապա առաջին բլոկի գործողությունների: Հակառակ դեպքում, դա անել երկրորդ բլոկի գործողությունների:"},
"ifelseTooltip":function(d){return "Եթե ​​կա մի ճանապարհ է, նշված ուղղությամբ, ապա առաջին բլոկի գործողությունների: Հակառակ դեպքում, դա անել երկրորդ բլոկի գործողությունների:"},
"insufficientHoney":function(d){return "Դուք պետք է կատարել ճիշտ քանակությամբ մեղր:"},
"insufficientNectar":function(d){return "Դուք պետք է հավաքել ճիշտ քանակությամբ նեկտար:"},
"lettuce":function(d){return "lettuce"},
"lettuceTooltip":function(d){return "Harvest some lettuce"},
"make":function(d){return "ստեղծել"},
"moveBackward":function(d){return "տեղափոխել հետամնաց"},
"moveEastTooltip":function(d){return "Տեղափոխել ինձ արեւելք մեկ տարածք:"},
"moveForward":function(d){return "առաջ ընթանալ"},
"moveForwardTooltip":function(d){return "Տեղափոխել է ինձ փոխանցելու մեկ տարածք:"},
"moveNorthTooltip":function(d){return "Տեղափոխել ինձ հյուսիս մեկ տարածք:"},
"moveSouthTooltip":function(d){return "Տեղափոխել ինձ հարավ մեկ տարածք:"},
"moveTooltip":function(d){return "Տեղափոխել ինձ սպասում / հետամնաց մեկ տեղ"},
"moveWestTooltip":function(d){return "Տեղափոխել ինձ դեպի արեւմուտք մեկ տարածք:"},
"nectar":function(d){return "ստանում են նեկտար"},
"nectarRemaining":function(d){return "նեկտար"},
"nectarTooltip":function(d){return "Ստացեք նեկտար է ծաղիկ"},
"nextLevel":function(d){return "Շնորհավորում եմ: Դուք ավարտել այս գլուխկոտրուկը։"},
"no":function(d){return "ոչ"},
"noPathAhead":function(d){return "ճանապարհը փակել"},
"noPathLeft":function(d){return "Ոչ ուղին դեպի ձախ"},
"noPathRight":function(d){return "Ոչ Ճանապարհ դեպի աջ"},
"notAtFlowerError":function(d){return "Դուք կարող եք ստանալ միայն նեկտար է ծաղիկ."},
"notAtHoneycombError":function(d){return "Դուք կարող եք միայն մեղր է բջիջ:"},
"numBlocksNeeded":function(d){return "Այս հանելուկ կարող է լուծվել% 1 բլոկների."},
"pathAhead":function(d){return "Ճանապարհ առջեւում"},
"pathLeft":function(d){return "Եթե ​​ճանապարհը դեպի ձախ"},
"pathRight":function(d){return "Եթե ​​ճանապարհը դեպի աջ"},
"pick":function(d){return "pick"},
"pilePresent":function(d){return "կա մի կույտ"},
"plant":function(d){return "plant"},
"plantInNonSoilError":function(d){return "I can only plant something in fresh soil."},
"plantTooltip":function(d){return "Plant a sprout"},
"pumpkin":function(d){return "pumpkin"},
"pumpkinTooltip":function(d){return "Harvest a pumpkin"},
"putdownTower":function(d){return "դրեց ներքեւ աշտարակ"},
"removeAndAvoidTheCow":function(d){return "Հեռացնել 1 եւ խուսափել կովը"},
"removeN":function(d){return "հեռացնել "+maze_locale.v(d,"shovelfuls")},
"removePile":function(d){return "հեռացնել կույտ"},
"removeSquare":function(d){return "հեռացնել հրապարակից"},
"removeStack":function(d){return "հեռացնել բուրգ "+maze_locale.v(d,"shovelfuls")+" piles"},
"repeatCarefullyError":function(d){return "Որպեսզի լուծել այս, կարծում եմ, ուշադիր օրինակով երկու քայլերի եւ մեկ էլ իր հերթին դնում է \"կրկնում \" բլոկում. Դա լավ է, որ լրացուցիչ շրջադարձ վերջում:"},
"repeatUntil":function(d){return "կրկնել մինչեւ"},
"repeatUntilBlocked":function(d){return "իսկ ուղին առջեւում"},
"repeatUntilFinish":function(d){return "կրկնել մինչեւ ավարտի"},
"soil":function(d){return "soil"},
"sprout":function(d){return "sprout"},
"step":function(d){return "քայլ"},
"totalHoney":function(d){return "ընդհանուր մեղր"},
"totalNectar":function(d){return "ընդհանուր նեկտար"},
"turnLeft":function(d){return "դիմել է մնացել"},
"turnRight":function(d){return "աջ շրջադարձ"},
"turnTooltip":function(d){return "Ստացվում է ինձ ձախ կամ աջ կողմից 90 աստիճանով:"},
"uncheckedCloudError":function(d){return "Համոզվեք, որ ստուգել բոլոր ամպեր տեսնել, եթե նրանք ծաղիկներ կամ honeycombs."},
"uncheckedPurpleError":function(d){return "Համոզվեք, որ ստուգել բոլոր Մանուշակագույն ծաղիկներ տեսնել, եթե նրանք ունեն նեկտար"},
"whileMsg":function(d){return "ժամանակ"},
"whileTooltip":function(d){return "Կրկնել կից գործողությունները, մինչեւ Սալոնի կետն է հասել:"},
"word":function(d){return "Գտնել բառը"},
"wrongCropError":function(d){return "I can't harvest that crop from here."},
"yes":function(d){return "այո"},
"youSpelled":function(d){return "Դուք ուղղագրությամբ."}};