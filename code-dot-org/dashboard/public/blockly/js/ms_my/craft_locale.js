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
"absolute":function(d){return "mutlak"},
"agentGenericFailureMessage":function(d){return "Keep coding! Remember to use The Agent to help."},
"agentTooFewBlocksFailureMessage":function(d){return "Try adding just one block at a time to get The Agent to the right spot."},
"at":function(d){return "at"},
"agentDiamondPathCongrats":function(d){return "Congratulations, you found the diamond path! You have collected "+craft_locale.p(d,"count",0,"ms",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" so far!"},
"blockActionAdd":function(d){return "add"},
"blockActionAttack":function(d){return "attack"},
"blockActionClone":function(d){return "clone blocks"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "collect"},
"blockActionCollectAll":function(d){return "collect all"},
"blockActionDestroyEntity":function(d){return "hilang"},
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
"blockActionMove":function(d){return "move"},
"blockActionMoveAway":function(d){return "move away from"},
"blockActionMoveForward":function(d){return "bergerak ke hadapan"},
"blockActionMoveRandom":function(d){return "move random"},
"blockActionMoveTo":function(d){return "move to"},
"blockActionMoveToward":function(d){return "move a step toward"},
"blockActionPlaySound":function(d){return "play sound"},
"blockActionRepeat":function(d){return "Ulang"},
"blockActionRepeatRandom":function(d){return "repeat random"},
"blockActionSetBlock":function(d){return "set block to"},
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
"blockDestroyBlock":function(d){return "musnahkan blok"},
"blockIf":function(d){return "jika"},
"blockIfLavaAhead":function(d){return "jika ada lava dihadapan"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "move"},
"blockMoveBackward":function(d){return "move backward"},
"blockMoveForward":function(d){return "bergerak ke hadapan"},
"blockPlace":function(d){return "letakkan"},
"blockPlaceTorch":function(d){return "letakkan obor"},
"blockPlaceXAheadAhead":function(d){return "di hadapan"},
"blockPlaceXAheadPlace":function(d){return "letakkan"},
"blockPlaceXPlace":function(d){return "letakkan"},
"blockPlantCrop":function(d){return "tanaman"},
"blockShear":function(d){return "gunting"},
"blockTill":function(d){return "till"},
"blockTillSoil":function(d){return "tanah longgar"},
"blockTurn":function(d){return "turn"},
"blockTurnLeft":function(d){return "belok kiri"},
"blockTurnRight":function(d){return "belok kanan"},
"blockType":function(d){return "block type"},
"blockTypeBedrock":function(d){return "batuan dasar"},
"blockTypeBricks":function(d){return "batu-bata"},
"blockTypeClay":function(d){return "tanah liat"},
"blockTypeClayHardened":function(d){return "tanah liat keras"},
"blockTypeCobblestone":function(d){return "batu kobel"},
"blockTypeDirt":function(d){return "tanah"},
"blockTypeDirtCoarse":function(d){return "tanah kasar"},
"blockTypeDoorIron":function(d){return "iron door"},
"blockTypeEmpty":function(d){return "kosong"},
"blockTypeFarmlandWet":function(d){return "tanah ladang"},
"blockTypeGlass":function(d){return "kaca"},
"blockTypeGlowstone":function(d){return "glowstone"},
"blockTypeGrass":function(d){return "rumput"},
"blockTypeGravel":function(d){return "batu kerikil"},
"blockTypeLava":function(d){return "lava"},
"blockTypeLogAcacia":function(d){return "batang pokok akasia"},
"blockTypeLogBirch":function(d){return "batang pokok birch"},
"blockTypeLogJungle":function(d){return "batang pokok hutan"},
"blockTypeLogOak":function(d){return "batang pokok oak"},
"blockTypeLogSpruce":function(d){return "batang pokok sprus"},
"blockTypeOreCoal":function(d){return "bijih arang batu"},
"blockTypeOreDiamond":function(d){return "bijih berlian"},
"blockTypeOreEmerald":function(d){return "bijih zamrud"},
"blockTypeOreGold":function(d){return "bijih emas"},
"blockTypeOreIron":function(d){return "bijih besi"},
"blockTypeOreLapis":function(d){return "bijih lazuardi"},
"blockTypeOreRedstone":function(d){return "bijih batu merah"},
"blockTypePlanksAcacia":function(d){return "papan akasia"},
"blockTypePlanksBirch":function(d){return "papan birch"},
"blockTypePlanksJungle":function(d){return "papan kayu hutan"},
"blockTypePlanksOak":function(d){return "papan oak"},
"blockTypePlanksSpruce":function(d){return "papan sprus"},
"blockTypePressurePlateUp":function(d){return "pressure plate"},
"blockTypeRail":function(d){return "landasan"},
"blockTypeRailsRedstoneTorch":function(d){return "redstone torch"},
"blockTypeRedstoneWire":function(d){return "redstone wire"},
"blockTypeSand":function(d){return "pasir"},
"blockTypeSandstone":function(d){return "batu pasir"},
"blockTypeStone":function(d){return "batu"},
"blockTypeTnt":function(d){return "TNT"},
"blockTypeTree":function(d){return "pokok"},
"blockTypeWater":function(d){return "air"},
"blockTypeWool":function(d){return "wul"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "di hadapan"},
"blockWhileXAheadDo":function(d){return "buat"},
"blockWhileXAheadWhile":function(d){return "semasa"},
"cancel":function(d){return "Batal"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "move"},
"cloneModeNormal":function(d){return "normal"},
"connectToCodeConnection":function(d){return "To run this project in Minecraft: Education Edition, please use the Code Connection application."},
"destination":function(d){return "destination"},
"directionBack":function(d){return "back"},
"directionDown":function(d){return "bawah"},
"directionForward":function(d){return "forward"},
"directionLeft":function(d){return "kiri"},
"directionMiddle":function(d){return "middle"},
"directionRight":function(d){return "kanan"},
"directionUp":function(d){return "atas"},
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
"eventTypeWhenRun":function(d){return "apabila berjalan"},
"eventTypeWhenSpawned":function(d){return "when spawned"},
"eventTypeWhenTouched":function(d){return "when touched"},
"eventTypeWhenUsed":function(d){return "when used"},
"forever":function(d){return "forever"},
"from":function(d){return "from"},
"generatedCodeDescription":function(d){return "Dengan mengheret dan meletakkan blok dalam teka-teki ini, anda telah mencipta satu set arahan dalam Bahasa komputer yang dipanggil Javascript. Kod ini memberitahu komputer apa yang boleh dipaparkan pada skrin. Segala-galanya yang anda dilihat dan dilakukan di Minecraft juga bermula dengan baris kod komputer seperti ini."},
"getdataof":function(d){return "get data of"},
"getnameof":function(d){return "get name of"},
"houseSelectChooseFloorPlan":function(d){return "Pilih pelan lantai rumah anda."},
"houseSelectEasy":function(d){return "Mudah"},
"houseSelectHard":function(d){return "Susah"},
"houseSelectLetsBuild":function(d){return "Mari kita membina rumah."},
"houseSelectMedium":function(d){return "Sederhana"},
"import":function(d){return "Import"},
"importShareLinkBody":function(d){return "Type your Hour of Code share link here and click \"Import\" to copy your code into Minecraft"},
"importShareLinkHeader":function(d){return "Import a share link"},
"inSlotNumber":function(d){return "in slot number"},
"itemTypeBlock":function(d){return "blok"},
"itemTypeDecoration":function(d){return "decoration"},
"itemTypeMiscellaneous":function(d){return "miscellaneous"},
"itemTypeTool":function(d){return "tool"},
"items":function(d){return "item(s)"},
"itemsOfBlockType":function(d){return "item(s) of block type"},
"level10FailureMessage":function(d){return "Tutupkan lava sebelum menyeberang. Seterusnya, memperolehi blok besi yang didapati di seberang."},
"level11FailureMessage":function(d){return "Pastikan anda meletak cobblestone jika ada lava di depan. Ini adalah untuk memastikan keselamatan anda ketika melombong."},
"level12FailureMessage":function(d){return "Pastikan anda memperolehi sekurang-kurangya tiga blok batu merah. Menggabungkan pengetahuan daripada pembinaan rumah anda dan pengunaan statement \"if\" untuk mengelak jatuh ke dalam lava."},
"level13FailureMessage":function(d){return "Letakkan \"landasan\" di sepanjang laluan tanah yang menuju ke pintu rumah anda."},
"level1FailureMessage":function(d){return "Anda perlu menggunakan \"commands\" untuk membimbing biri-biri itu."},
"level1TooFewBlocksMessage":function(d){return "Cuba gunakan pelbagai jenis \"commands\" untuk membimbing biri-biri tersebut."},
"level2FailureMessage":function(d){return "Untuk memotongkan pokok, jalan ke depan pokok tersebut dan guna command \"destroy block\"."},
"level2TooFewBlocksMessage":function(d){return "Cuba guna lagi banyak commands untuk memotong pokok tersebut. Jalan ke depan pokok dan guna command \"destroy block\"."},
"level3FailureMessage":function(d){return "Untuk mendapatkan bulu biri-biri daripada kedua-dua biri-biri itu, hadap ke depan biri-biri dan menggunakan command \"shear\". Jangan lupa untuk menggunakan command \"turn\" untuk menyampaii biri-biri."},
"level3TooFewBlocksMessage":function(d){return "Cuba guna lagi banyak commands untuk medapatkan bulu biri-biri tersebut. Jalan ke depan biri-biri dan guna command \"shear\"."},
"level4FailureMessage":function(d){return "Anda perlu menggunakan command \"destroy block\" bagi ketiga-tiga batang pokok."},
"level5FailureMessage":function(d){return "Meletakkan blok anda pada garisan tanah untuk membina dinding. Command merah jambu \"repeat\" tu akan mengulang command yang didapati di dalam, contohnya \"meletak blok\" dan \"maju\"."},
"level6FailureMessage":function(d){return "Meletakkan blok ukur lilit tanah rumah untuk menyelesaikan teka-teki."},
"level7FailureMessage":function(d){return "Menggunakan arahan \"plant\" untuk meletakkan tanaman pada setiap tampalan tanah tilled gelap."},
"level8FailureMessage":function(d){return "Jika anda sentuh creeper, ia akan meletup. Menyelinap di sekeliling mereka dan memasuki rumah anda."},
"level9FailureMessage":function(d){return "Jangan lupa untuk meletakkan sekurang-kurangnya 2 torches kepada cahaya cara anda dan sekurang-kurangnya 2 lombong arang batu."},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "masked"},
"maskModeReplace":function(d){return "replace"},
"minecraftBlock":function(d){return "blok"},
"minecraftNotConnected":function(d){return "Minecraft not connected"},
"miniBlockBricks":function(d){return "batu-bata"},
"miniBlockBucketLava":function(d){return "lava bucket"},
"miniBlockBucketWater":function(d){return "water bucket"},
"miniBlockCarrots":function(d){return "carrots"},
"miniBlockCoal":function(d){return "coal"},
"miniBlockCobblestone":function(d){return "batu kobel"},
"miniBlockDiamond":function(d){return "diamond"},
"miniBlockDirt":function(d){return "tanah"},
"miniBlockDirtCoarse":function(d){return "tanah kasar"},
"miniBlockEgg":function(d){return "egg"},
"miniBlockEmerald":function(d){return "emerald"},
"miniBlockGravel":function(d){return "batu kerikil"},
"miniBlockGunPowder":function(d){return "gunpowder"},
"miniBlockIngotGold":function(d){return "gold ingot"},
"miniBlockIngotIron":function(d){return "iron ingot"},
"miniBlockLapisLazuli":function(d){return "lapis lazuli"},
"miniBlockLogAcacia":function(d){return "batang pokok akasia"},
"miniBlockLogBirch":function(d){return "batang pokok birch"},
"miniBlockLogJungle":function(d){return "batang pokok hutan"},
"miniBlockLogOak":function(d){return "batang pokok oak"},
"miniBlockLogSpruce":function(d){return "batang pokok sprus"},
"miniBlockMilk":function(d){return "milk"},
"miniBlockPlanksAcacia":function(d){return "papan akasia"},
"miniBlockPlanksBirch":function(d){return "papan birch"},
"miniBlockPlanksJungle":function(d){return "papan kayu hutan"},
"miniBlockPlanksOak":function(d){return "papan oak"},
"miniBlockPlanksSpruce":function(d){return "papan sprus"},
"miniBlockPoppy":function(d){return "poppy"},
"miniBlockPotato":function(d){return "potato"},
"miniBlockRedstoneDust":function(d){return "redstone dust"},
"miniBlockSand":function(d){return "pasir"},
"miniBlockSandstone":function(d){return "batu pasir"},
"miniBlockSheep":function(d){return "sheep"},
"miniBlockWheat":function(d){return "wheat"},
"miniBlockWool":function(d){return "wul"},
"nextLevelMsg":function(d){return "Teka-teki "+craft_locale.v(d,"puzzleNumber")+" selesai. Tahniah!"},
"oldBlockHandling":function(d){return "old block at"},
"oldBlockHandlingsDestroy":function(d){return "destroy"},
"oldBlockHandlingsKeep":function(d){return "keep"},
"oldBlockHandlingsReplace":function(d){return "replace"},
"onBehalfOf":function(d){return "on behalf of"},
"playerSelectChooseCharacter":function(d){return "Memilih watak anda."},
"playerSelectChooseSelectButton":function(d){return "Pilih"},
"playerSelectLetsGetStarted":function(d){return "Mari kita bermula."},
"quantity":function(d){return "quantity"},
"reinfFeedbackMsg":function(d){return "Anda boleh menekan \"Teruskan bermain\" untuk kembali ke bermain permainan anda."},
"relative":function(d){return "relative"},
"runAgent":function(d){return "Run Agent"},
"score":function(d){return "Score"},
"seconds":function(d){return "second(s)"},
"selectChooseButton":function(d){return "Pilih"},
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
"timeDay":function(d){return "day"},
"timeLong":function(d){return "long"},
"timeMedium":function(d){return "medium"},
"timeNight":function(d){return "malam"},
"timeRandom":function(d){return "rawak"},
"timeSet":function(d){return "set time to"},
"timeShort":function(d){return "short"},
"timeVeryLong":function(d){return "very long"},
"timeVeryShort":function(d){return "very short"},
"to":function(d){return "ke"},
"toSlotNumber":function(d){return "to slot number"},
"tooManyBlocksFail":function(d){return "Teka-teki "+craft_locale.v(d,"puzzleNumber")+" selesai. Tahniah! Ianya juga dapat melengkapkan dengan "+craft_locale.p(d,"numBlocks",0,"ms",{"one":"1 block","other":craft_locale.n(d,"numBlocks")+" blocks"})+"."},
"turnRandom":function(d){return "turn random"},
"useArrowKeys":function(d){return "You don't need to add any blocks! Move with the arrows, and press the space bar or tap the game board to use items."},
"weather":function(d){return "weather"},
"weatherTypeClear":function(d){return "clear"},
"weatherTypeRain":function(d){return "rain"},
"weatherTypeThunder":function(d){return "thunder"}};