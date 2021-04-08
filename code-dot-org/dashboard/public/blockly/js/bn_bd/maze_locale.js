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
"atFlower":function(d){return "ফুলের কাছে"},
"atHoneycomb":function(d){return "মধুর চাকে"},
"avoidCowAndRemove":function(d){return "গরু এড়িয়ে যান এবং ১ অপসারণ করুন"},
"collect":function(d){return "collect"},
"collectiblePresent":function(d){return "there is some treasure"},
"collectorCollectTooltip":function(d){return "Collect an item"},
"collectorCollectedEverything":function(d){return "Congratulations! You collected all "+maze_locale.v(d,"count")+" items!"},
"collectorCollectedNothing":function(d){return "Keep coding! You need to collect as many of the items as you can."},
"collectorCollectedSome":function(d){return "Great work! You collected "+maze_locale.v(d,"count")+" items!"},
"collectorCollectedNotEnough":function(d){return "Keep coding! You need to collect at least "+maze_locale.p(d,"goal",0,"bn",{"one":"1 item","other":maze_locale.n(d,"goal")+" items"})+"."},
"collectorCollectedTooMany":function(d){return "That space doesn't have enough items for me to collect."},
"collectorTooManyBlocks":function(d){return "You can only use "+maze_locale.v(d,"blockLimit")+" blocks. Take a look at your code and try again!"},
"continue":function(d){return "চালিয়ে যান"},
"corn":function(d){return "corn"},
"cornTooltip":function(d){return "Harvest some corn"},
"didNotCollectAllCrops":function(d){return "Make sure you don't leave any crops behind!"},
"didNotCollectEverything":function(d){return "আপনি কোনো পুষ্পরেণু বা মধু শুরু ছেড়ে না তা নিশ্চিত করুন"},
"didNotPlantEverywhere":function(d){return "Make sure you plant something in every soil patch!"},
"dig":function(d){return "1 অপসারণ করুন"},
"digTooltip":function(d){return "1 একক গোবর অপসারণ করুন"},
"dirE":function(d){return "E"},
"dirN":function(d){return "N"},
"dirS":function(d){return "S"},
"dirW":function(d){return "W"},
"doCode":function(d){return "করা"},
"elseCode":function(d){return "আর"},
"emptyCropError":function(d){return "That crop is all gone."},
"fill":function(d){return "1 পূরণ করুন"},
"fillN":function(d){return maze_locale.v(d,"shovelfuls")+" পুরন করুন"},
"fillSquare":function(d){return "বর্গ পূরণ করুন"},
"fillStack":function(d){return "পুড়ন করো "+maze_locale.v(d,"shovelfuls")+" গর্ত"},
"fillTooltip":function(d){return "১ একক ময়লা স্থাপন করুন"},
"finalLevel":function(d){return "অভিনন্দন! আপনি শেষ ধাঁধা সমাধান করছেন।"},
"flowerEmptyError":function(d){return "আপনি ভ্রমণরত ফুল আর কোন পুষ্পমধু নেই।"},
"get":function(d){return "প্রাপ্ত"},
"goal":function(d){return "goal"},
"has":function(d){return "has"},
"haslettuce":function(d){return "there is lettuce"},
"hascorn":function(d){return "there is corn"},
"haspumpkin":function(d){return "there are pumpkins"},
"heightParameter":function(d){return "উচ্চতা"},
"holePresent":function(d){return "সেখানে একটি গর্ত আছে।"},
"honey":function(d){return "মধু তৈরি করুন"},
"honeyAvailable":function(d){return "মধু"},
"honeyTooltip":function(d){return "পুষ্পমধু থেকে মধু করুন"},
"honeycombFullError":function(d){return "এই মৌচাকে আর মধু জন্য কোন জায়গা নাই।"},
"ifCode":function(d){return "যদী"},
"ifFlowerTooltip":function(d){return "নির্দিষ্ট দিক একটি ফুল / মৌচাক থাকলে কিছু কাজ করুন।"},
"ifInRepeatError":function(d){return "আপনার \"পুনরাবৃত্তি\" ব্লক ভিতরে একটি \"যদি\" ব্লক প্রয়োজন। আপনি যদি সমস্যা হয়, তাহলে আবার আগের স্তর চেষ্টা করুন ও দেখুন কিভাবে এটা কাজ করে।"},
"ifOnlyFlowerTooltip":function(d){return "নির্দিষ্ট দিক একটি ফুল থাকলে কিছু কাজ করুন।"},
"ifPathAhead":function(d){return "যদি সামনে পথ থাকে"},
"ifTooltip":function(d){return "একটি নির্দিষ্ট দিক যদি রাস্তা থাকে, তাহলে কিছু কাজ করুন।"},
"ifelseFlowerTooltip":function(d){return "নির্দিষ্ট দিক একটি ফুল / মৌচাক থাকলে প্রথম ব্লকের কাজ করুন। না থাকলে দ্বিতীয় ব্লক কাজ করুন।"},
"ifelseTooltip":function(d){return "নির্দিষ্ট দিক একটি পথ থাকলে প্রথম ব্লকের কাজ করুন। না থাকলে দ্বিতীয় ব্লক কাজ করুন।"},
"insufficientHoney":function(d){return "আপনি সঠিক পরিমাণ মধু তৈরি করা প্রয়োজন।"},
"insufficientNectar":function(d){return "আপনি সঠিক পরিমাণ পুষ্পমধু সংগ্রহ করা প্রয়োজন।"},
"lettuce":function(d){return "lettuce"},
"lettuceTooltip":function(d){return "Harvest some lettuce"},
"make":function(d){return "তৈরি করা"},
"moveBackward":function(d){return "পেছনে চলুন"},
"moveEastTooltip":function(d){return "আমাকে পূর্ব দিকে এক ঘর স্থানান্তর করুন"},
"moveForward":function(d){return "সামনে এগিয়ে যান"},
"moveForwardTooltip":function(d){return "আমাকে সমনের দিকে এক ঘর সরান"},
"moveNorthTooltip":function(d){return "আমাকে উত্তর দিকে এক ঘর সরান"},
"moveSouthTooltip":function(d){return "আমাকে দক্ষিণ দিকে এক ঘর স্থানান্তর করুন"},
"moveTooltip":function(d){return "আমাকে সমনের বা পেছনে দিকে এক ঘর সরান"},
"moveWestTooltip":function(d){return "আমাকে পশ্চিম দিকে এক ঘর সরান"},
"nectar":function(d){return "পুষ্পমধু নিন"},
"nectarRemaining":function(d){return "পুষ্পমধু "},
"nectarTooltip":function(d){return "একটি ফুল থেকে পুষ্পমধু নিন"},
"nextLevel":function(d){return "অভিনন্দন! আপনি এই ধাঁধা সম্পন্ন করেছেন।"},
"no":function(d){return "না"},
"noPathAhead":function(d){return "পথ বন্ধ"},
"noPathLeft":function(d){return "বাঁদিকে কোন পথ নেই"},
"noPathRight":function(d){return "ডানদিকে কোন পথ নেই"},
"notAtFlowerError":function(d){return "আপনি শুধুমাত্র একটি ফুল থেকেই পুষ্পমধু পেতে পারেন।"},
"notAtHoneycombError":function(d){return "আপনি শুধুমাত্র একটি মৌচাকে মধু বানাতে পারেন।"},
"numBlocksNeeded":function(d){return "এই ধাঁধাটি %1 ব্লক দিয়ে সমাধান করা যেতে পারে।"},
"pathAhead":function(d){return "সামনে পথ"},
"pathLeft":function(d){return "যদি বামদিকে পথ থাকে"},
"pathRight":function(d){return "যদি ডানদিকে পথ থাকে"},
"pick":function(d){return "pick"},
"pilePresent":function(d){return "একটি গাদা আছে"},
"plant":function(d){return "plant"},
"plantInNonSoilError":function(d){return "I can only plant something in fresh soil."},
"plantTooltip":function(d){return "Plant a sprout"},
"pumpkin":function(d){return "pumpkin"},
"pumpkinTooltip":function(d){return "Harvest a pumpkin"},
"putdownTower":function(d){return "টাওয়ার ধ্বংস করুন"},
"removeAndAvoidTheCow":function(d){return "১টি সরান এবং গাভী এড়ান"},
"removeN":function(d){return "সরান "+maze_locale.v(d,"shovelfuls")},
"removePile":function(d){return "গাদা সারনো"},
"removeSquare":function(d){return "বর্গ অপসারণ করুন"},
"removeStack":function(d){return "খড়ের "+maze_locale.v(d,"shovelfuls")+" গাদা অপসারণ করুন"},
"repeatCarefullyError":function(d){return "এই সমস্যার সমাধানের উদ্দেশ্যে, \"পুনরাবৃত্তি\" ব্লকের ভেতরে দুইটি ধাপ এবং এক মোড়ের নমুনা সাবধানে চিন্তা করুন। শেষে একবার অতিরিক্ত ঘুরা খারাপ কিছু নয়।"},
"repeatUntil":function(d){return "যতক্ষণ না পুনরাবৃত্তি"},
"repeatUntilBlocked":function(d){return "যদি সামনে পথ"},
"repeatUntilFinish":function(d){return "শেষ পর্যন্ত পুনরাবৃত্ত করুন"},
"soil":function(d){return "soil"},
"sprout":function(d){return "sprout"},
"step":function(d){return "ধাপ"},
"totalHoney":function(d){return "মোট মধু"},
"totalNectar":function(d){return "মোট পুষ্পমধু"},
"turnLeft":function(d){return "বামে যান"},
"turnRight":function(d){return "ডানে যান"},
"turnTooltip":function(d){return "আমাকে বামে বা ডানে 90 ডিগ্রী ঘুরিয়ে দেয়।"},
"uncheckedCloudError":function(d){return "সব মেঘ পরীক্ষা করে তারা ফুল না মধু তা দেখতে ভুলবেন না।"},
"uncheckedPurpleError":function(d){return "সব বেগুনি ফুল পরীক্ষা করে তাতে পুষ্পমধু আছে কিনা দেখতে ভুলবেন না।"},
"whileMsg":function(d){return "যখন"},
"whileTooltip":function(d){return "সমাপ্তি বিন্দুতে না পৌঁছানো পর্যন্ত ঘিরা কাজ পুনরাবৃত্তি করুন।"},
"word":function(d){return "শব্দটি খুঁজুন"},
"wrongCropError":function(d){return "I can't harvest that crop from here."},
"yes":function(d){return "\"হ্যাঁ\""},
"youSpelled":function(d){return "আপনি বানান করেছেন"}};