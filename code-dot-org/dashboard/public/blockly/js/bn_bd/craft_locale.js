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
"absolute":function(d){return "পরম"},
"agentGenericFailureMessage":function(d){return "Keep coding! Remember to use The Agent to help."},
"agentTooFewBlocksFailureMessage":function(d){return "Try adding just one block at a time to get The Agent to the right spot."},
"at":function(d){return "at"},
"agentDiamondPathCongrats":function(d){return "Congratulations, you found the diamond path! You have collected "+craft_locale.p(d,"count",0,"bn",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" so far!"},
"blockActionAdd":function(d){return "add"},
"blockActionAttack":function(d){return "attack"},
"blockActionClone":function(d){return "clone blocks"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "collect"},
"blockActionCollectAll":function(d){return "collect all"},
"blockActionDestroyEntity":function(d){return "অগোচর"},
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
"blockActionMove":function(d){return "সরান"},
"blockActionMoveAway":function(d){return "move away from"},
"blockActionMoveForward":function(d){return "সামনে এগিয়ে যান"},
"blockActionMoveRandom":function(d){return "move random"},
"blockActionMoveTo":function(d){return "move to"},
"blockActionMoveToward":function(d){return "move a step toward"},
"blockActionPlaySound":function(d){return "play sound"},
"blockActionRepeat":function(d){return "পুনরাই"},
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
"blockActionWait":function(d){return "wait"},
"blockActionWith":function(d){return "with"},
"blockData":function(d){return "block data"},
"blockDestroyBlock":function(d){return "ধ্বংসকারী ব্লক।"},
"blockIf":function(d){return "যদী"},
"blockIfLavaAhead":function(d){return "যদি সামনে লাভা থাকে"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "সরান"},
"blockMoveBackward":function(d){return "পেছনে চলুন"},
"blockMoveForward":function(d){return "সামনে এগিয়ে যান"},
"blockPlace":function(d){return "বসানো"},
"blockPlaceTorch":function(d){return "মশাল বসান"},
"blockPlaceXAheadAhead":function(d){return "সামনে"},
"blockPlaceXAheadPlace":function(d){return "বসানো"},
"blockPlaceXPlace":function(d){return "বসানো"},
"blockPlantCrop":function(d){return "ফসল লাগানো"},
"blockShear":function(d){return "শেয়ার করা"},
"blockTill":function(d){return "till"},
"blockTillSoil":function(d){return "মাটি পর্যন্ত"},
"blockTurn":function(d){return "turn"},
"blockTurnLeft":function(d){return "বামে যান"},
"blockTurnRight":function(d){return "ডানে যান"},
"blockType":function(d){return "block type"},
"blockTypeBedrock":function(d){return "বেডরক (bedrock)"},
"blockTypeBricks":function(d){return "ইট"},
"blockTypeClay":function(d){return "কাদামাটি"},
"blockTypeClayHardened":function(d){return "শক্ত কাদামাটি"},
"blockTypeCobblestone":function(d){return "খোয়া"},
"blockTypeDirt":function(d){return "ময়লা"},
"blockTypeDirtCoarse":function(d){return "মোটা ময়লা"},
"blockTypeDoorIron":function(d){return "iron door"},
"blockTypeEmpty":function(d){return "খালি"},
"blockTypeFarmlandWet":function(d){return "কৃষিজমি"},
"blockTypeGlass":function(d){return "কাচ"},
"blockTypeGlowstone":function(d){return "glowstone"},
"blockTypeGrass":function(d){return "ঘাস"},
"blockTypeGravel":function(d){return "নুড়ি"},
"blockTypeLava":function(d){return "লাভা"},
"blockTypeLogAcacia":function(d){return "বাবলার গুঁড়ি"},
"blockTypeLogBirch":function(d){return "বার্চের গুঁড়ি"},
"blockTypeLogJungle":function(d){return "জঙ্গলের গুড়ি"},
"blockTypeLogOak":function(d){return "ওকের গুড়ি"},
"blockTypeLogSpruce":function(d){return "স্প্রুস গাছের গুড়ি"},
"blockTypeOreCoal":function(d){return "কয়লার আকরিক"},
"blockTypeOreDiamond":function(d){return "হীরার খনি"},
"blockTypeOreEmerald":function(d){return "পান্না আকরিক"},
"blockTypeOreGold":function(d){return "স্বর্ণ আকরিক"},
"blockTypeOreIron":function(d){return "লোহার আকর"},
"blockTypeOreLapis":function(d){return "নীলকান্তমণি আকরিক"},
"blockTypeOreRedstone":function(d){return "লালপাথর আকরিক"},
"blockTypePlanksAcacia":function(d){return "বাবলার তক্তা"},
"blockTypePlanksBirch":function(d){return "বার্চের তক্তা"},
"blockTypePlanksJungle":function(d){return "জঙ্গলের তক্তা"},
"blockTypePlanksOak":function(d){return "ওকের তক্তা"},
"blockTypePlanksSpruce":function(d){return "স্প্রুসের তক্তা"},
"blockTypePressurePlateUp":function(d){return "pressure plate"},
"blockTypeRail":function(d){return "রেল"},
"blockTypeRailsRedstoneTorch":function(d){return "redstone torch"},
"blockTypeRedstoneWire":function(d){return "redstone wire"},
"blockTypeSand":function(d){return "বালি"},
"blockTypeSandstone":function(d){return "বেলেপাথর"},
"blockTypeStone":function(d){return "পাথর"},
"blockTypeTnt":function(d){return "টিনটি"},
"blockTypeTree":function(d){return "গাছ"},
"blockTypeWater":function(d){return "পানি"},
"blockTypeWool":function(d){return "পশম"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "সামনে"},
"blockWhileXAheadDo":function(d){return "করা"},
"blockWhileXAheadWhile":function(d){return "যখন"},
"cancel":function(d){return "বাতিল করুন"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "সরান"},
"cloneModeNormal":function(d){return "normal"},
"connectToCodeConnection":function(d){return "To run this project in Minecraft: Education Edition, please use the Code Connection application."},
"destination":function(d){return "destination"},
"directionBack":function(d){return "back"},
"directionDown":function(d){return "নিচে"},
"directionForward":function(d){return "forward"},
"directionLeft":function(d){return "বামে"},
"directionMiddle":function(d){return "middle"},
"directionRight":function(d){return "ডানে"},
"directionUp":function(d){return "উপরে"},
"downloadButton":function(d){return "Download"},
"entityType":function(d){return "entity type"},
"entityTypeChicken":function(d){return "chicken"},
"entityTypeCow":function(d){return "cow"},
"entityTypeCreeper":function(d){return "creeper"},
"entityTypeIronGolem":function(d){return "iron golem"},
"entityTypePlayer":function(d){return "player"},
"entityTypeSheep":function(d){return "sheep"},
"entityTypeZombie":function(d){return "zombie"},
"eventTypeWhenAttacked":function(d){return "when attacked"},
"eventTypeWhenDay":function(d){return "when day"},
"eventTypeWhenNight":function(d){return "when night"},
"eventTypeWhenRun":function(d){return "চালানোর সময়"},
"eventTypeWhenSpawned":function(d){return "when spawned"},
"eventTypeWhenTouched":function(d){return "when touched"},
"eventTypeWhenUsed":function(d){return "when used"},
"forever":function(d){return "forever"},
"from":function(d){return "from"},
"generatedCodeDescription":function(d){return "এই ধাঁধায় টেনে এবং ব্লক স্থাপন করে, আপনি কম্পিউটারের ভাষায় নির্দেশের একটি সেট তৈরি করেছেন যাকে জাভাস্ক্রিপ্ট বলে । এই কোড কম্পিউটার কে বলে পর্দায় কি প্রদর্শন করতে হবে। আপনি মাইনক্রাফট (Minecraft) গেমে যা কিছু দেখে বা করে থাকেন সব কিছু এই রকম কম্পিউটার কোড দিয়ে শুরু হয়।"},
"getdataof":function(d){return "get data of"},
"getnameof":function(d){return "get name of"},
"houseSelectChooseFloorPlan":function(d){return "আপনার বাড়ির জন্য মেঝের বিন্যাস নির্বাচন করুন।"},
"houseSelectEasy":function(d){return "সহজ"},
"houseSelectHard":function(d){return "কঠিন"},
"houseSelectLetsBuild":function(d){return "আসুন একটি ঘর নির্মাণ করি।"},
"houseSelectMedium":function(d){return "মাঝারি"},
"import":function(d){return "Import"},
"importShareLinkBody":function(d){return "Type your Hour of Code share link here and click \"Import\" to copy your code into Minecraft"},
"importShareLinkHeader":function(d){return "Import a share link"},
"inSlotNumber":function(d){return "in slot number"},
"itemTypeBlock":function(d){return "বাধা"},
"itemTypeDecoration":function(d){return "decoration"},
"itemTypeMiscellaneous":function(d){return "miscellaneous"},
"itemTypeTool":function(d){return "tool"},
"items":function(d){return "item(s)"},
"itemsOfBlockType":function(d){return "item(s) of block type"},
"level10FailureMessage":function(d){return "হেটে পার হয়ে যেতে লাভা আবৃত করুন তারপর অন্য দিক থেকে আয়রন দুটি ব্লক খনন করুন।"},
"level11FailureMessage":function(d){return "সামনে এগিয়ে লাভার সম্মুখীন হলে খোয়াপাথর স্থাপন করার বিষয়ে নিশ্চিত হন। এইটি কমান্ডের  আপনাকে নিরাপদে এই সারিতে  সম্পদ খনন করতে সাহায্য করবে।"},
"level12FailureMessage":function(d){return "তিনটি লালপাথরের ব্লক খনন করতে ভুলবেন না। আপনি আপনার বাড়ি নির্মাণ এবং লাভায় পড়া এড়াতে \"যদি\" বিবৃতি ব্যবহার থেকে কি শিখেছেন তার সম্মিলিত ফল।"},
"level13FailureMessage":function(d){return "মানচিত্রের প্রান্ত থেকে আপনার দরজা পর্যন্ত ময়লা পথ বরাবর \"রেল\" বসান।"},
"level1FailureMessage":function(d){return "আপনাকে ভেড়া পর্যন্ত হেঁটে যাওয়ার কমান্ড ব্যবহার করতে হবে।"},
"level1TooFewBlocksMessage":function(d){return "ভেড়া পর্যন্ত হেঁটে যাওয়ার জন্য আরো কমান্ড ব্যবহার করে চেষ্টা করুন।"},
"level2FailureMessage":function(d){return "একটি গাছ কেটে ফেলতে, তার ধড় পর্যন্ত হাঁটে যান এবং \"ব্লক ধ্বংস\" কমান্ড ব্যবহার করুন।"},
"level2TooFewBlocksMessage":function(d){return "গাছ কেটে ফেলতে আরো কমান্ড ব্যবহারের চেষ্টা করুন। তার ধড় পর্যন্ত হাঁটে যান এবং \"ব্লক ধ্বংস\" কমান্ড ব্যবহার করুন।"},
"level3FailureMessage":function(d){return "উভয় ভেড়ার লোম জড়ো করতে, প্রতিটির কাছে হাঁটে যান এবং \"ফাড়া\" কমান্ড ব্যবহার করুন। ভেড়াগুলির কাছে পৌঁছাতে বাক নাও কমান্ড ব্যবহার করতে ভুলবেন না।"},
"level3TooFewBlocksMessage":function(d){return "উভয় ভেড়ার লোম জড়ো করতে আরো কমান্ড ব্যবহার করে চেষ্টা করুন। প্রতিটির কাছে হাঁটে যান এবং \"ফাড়া\" কমান্ড ব্যবহার করুন।"},
"level4FailureMessage":function(d){return "আপনাকে অবশ্যই তিনটি গাছ প্রতিটি \"ব্লক ধ্বংস\" কমান্ড ব্যবহার করতে হবে।"},
"level5FailureMessage":function(d){return "একটি প্রাচীর নির্মাণ করা জন্য ময়লা সীমারেখা মধ্যে আপনার ব্লক রাখুন। গোলাপী রঙের \"পুনরায়\" কমান্ডের ভেতরে রাখা \"ব্লক জায়গায় রাখুন\" এবং \"অগ্রসর হন\" এর মত কমান্ড চালাতেই থাকবে।"},
"level6FailureMessage":function(d){return "বাড়ির ময়লা সীমারেখার ভেতরে ব্লক রেখে ধাঁধা সম্পূর্ণ করুন।"},
"level7FailureMessage":function(d){return "প্রতি খন্ড কালো চষা জমিতে ফসল লাগাতে \"রোপন করুন\" কমান্ড ব্যবহার করুন।"},
"level8FailureMessage":function(d){return "আপনি একটি লতিকা স্পর্শ করলে এটি বিস্ফোরিত হবে। তাদের থেকে বেঁচে চলুন এবং আপনার বাড়িতে প্রবেশ করুন।"},
"level9FailureMessage":function(d){return "আপনার রাস্তায় অন্তত ২টি টর্চ স্থাপন করতে ভুলবেন না এবং খনি থেকে অন্তত ২টি কয়লার আকর উঠাতে ভুলবেন না।"},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "masked"},
"maskModeReplace":function(d){return "replace"},
"minecraftBlock":function(d){return "বাধা"},
"minecraftNotConnected":function(d){return "Minecraft not connected"},
"miniBlockBricks":function(d){return "ইট"},
"miniBlockBucketLava":function(d){return "lava bucket"},
"miniBlockBucketWater":function(d){return "water bucket"},
"miniBlockCarrots":function(d){return "carrots"},
"miniBlockCoal":function(d){return "coal"},
"miniBlockCobblestone":function(d){return "খোয়া"},
"miniBlockDiamond":function(d){return "diamond"},
"miniBlockDirt":function(d){return "ময়লা"},
"miniBlockDirtCoarse":function(d){return "মোটা ময়লা"},
"miniBlockEgg":function(d){return "egg"},
"miniBlockEmerald":function(d){return "emerald"},
"miniBlockGravel":function(d){return "নুড়ি"},
"miniBlockGunPowder":function(d){return "gunpowder"},
"miniBlockIngotGold":function(d){return "gold ingot"},
"miniBlockIngotIron":function(d){return "iron ingot"},
"miniBlockLapisLazuli":function(d){return "lapis lazuli"},
"miniBlockLogAcacia":function(d){return "বাবলার গুঁড়ি"},
"miniBlockLogBirch":function(d){return "বার্চের গুঁড়ি"},
"miniBlockLogJungle":function(d){return "জঙ্গলের গুড়ি"},
"miniBlockLogOak":function(d){return "ওকের গুড়ি"},
"miniBlockLogSpruce":function(d){return "স্প্রুস গাছের গুড়ি"},
"miniBlockMilk":function(d){return "milk"},
"miniBlockPlanksAcacia":function(d){return "বাবলার তক্তা"},
"miniBlockPlanksBirch":function(d){return "বার্চের তক্তা"},
"miniBlockPlanksJungle":function(d){return "জঙ্গলের তক্তা"},
"miniBlockPlanksOak":function(d){return "ওকের তক্তা"},
"miniBlockPlanksSpruce":function(d){return "স্প্রুসের তক্তা"},
"miniBlockPoppy":function(d){return "poppy"},
"miniBlockPotato":function(d){return "potato"},
"miniBlockRedstoneDust":function(d){return "redstone dust"},
"miniBlockSand":function(d){return "বালি"},
"miniBlockSandstone":function(d){return "বেলেপাথর"},
"miniBlockSheep":function(d){return "sheep"},
"miniBlockWheat":function(d){return "wheat"},
"miniBlockWool":function(d){return "পশম"},
"nextLevelMsg":function(d){return "ধাঁধা "+craft_locale.v(d,"puzzleNumber")+" সম্পন্ন. অভিনন্দন!"},
"oldBlockHandling":function(d){return "old block"},
"oldBlockHandlingsDestroy":function(d){return "destroy"},
"oldBlockHandlingsKeep":function(d){return "keep"},
"oldBlockHandlingsReplace":function(d){return "replace"},
"onBehalfOf":function(d){return "on behalf of"},
"playerSelectChooseCharacter":function(d){return "আপনার চরিত্র নির্বাচন করুন।"},
"playerSelectChooseSelectButton":function(d){return "নির্বাচন করা"},
"playerSelectLetsGetStarted":function(d){return "চল শুরু করি।"},
"quantity":function(d){return "quantity"},
"reinfFeedbackMsg":function(d){return "আপনি খেলায় ফিরে যেতে \"খেলতে থাকুন\" টিপতে পারেন।"},
"relative":function(d){return "relative"},
"runAgent":function(d){return "Run Agent"},
"score":function(d){return "Score"},
"seconds":function(d){return "second(s)"},
"selectChooseButton":function(d){return "নির্বাচন করা"},
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
"timeDay":function(d){return "দিন"},
"timeLong":function(d){return "long"},
"timeMedium":function(d){return "medium"},
"timeNight":function(d){return "রাত্রি"},
"timeRandom":function(d){return "এলোমেলো"},
"timeSet":function(d){return "time set"},
"timeShort":function(d){return "short"},
"timeVeryLong":function(d){return "very long"},
"timeVeryShort":function(d){return "very short"},
"to":function(d){return "থেকে"},
"toSlotNumber":function(d){return "to slot number"},
"tooManyBlocksFail":function(d){return "ধাঁধা "+craft_locale.v(d,"puzzleNumber")+" সম্পন্ন. অভিনন্দন! এটা "+craft_locale.p(d,"numBlocks",0,"bn",{"one":"1","other":craft_locale.n(d,"numBlocks")+" ব্লক"})+" দিয়ে তা সম্পন্ন করা সম্ভব।"},
"turnRandom":function(d){return "turn random"},
"useArrowKeys":function(d){return "You don't need to add any blocks! Move with the arrows, and press the space bar or tap the game board to use items."},
"weather":function(d){return "weather"},
"weatherTypeClear":function(d){return "clear"},
"weatherTypeRain":function(d){return "rain"},
"weatherTypeThunder":function(d){return "thunder"}};