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
"absolute":function(d){return "แน่นอน"},
"agentGenericFailureMessage":function(d){return "Keep coding! Remember to use The Agent to help."},
"agentTooFewBlocksFailureMessage":function(d){return "Try adding just one block at a time to get The Agent to the right spot."},
"at":function(d){return "ที่"},
"agentDiamondPathCongrats":function(d){return "Congratulations, you found the diamond path! You have collected "+craft_locale.p(d,"count",0,"th",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" so far!"},
"blockActionAdd":function(d){return "เพิ่ม"},
"blockActionAttack":function(d){return "โจมตี"},
"blockActionClone":function(d){return "clone blocks"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "collect"},
"blockActionCollectAll":function(d){return "collect all"},
"blockActionDestroyEntity":function(d){return "หายไป"},
"blockActionDetect":function(d){return "detect"},
"blockActionDetectRedstone":function(d){return "detect redstone"},
"blockActionDrop":function(d){return "หล่น"},
"blockActionDropAll":function(d){return "drop all"},
"blockActionExecute":function(d){return "execute command"},
"blockActionExplodeEntity":function(d){return "ระเบิด"},
"blockActionFill":function(d){return "fill from"},
"blockActionFlashEntity":function(d){return "แสงวาป"},
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
"blockActionMove":function(d){return "การเคลื่อนย้าย"},
"blockActionMoveAway":function(d){return "เคลื่อนออกจาก"},
"blockActionMoveForward":function(d){return "เดินไปข้างหน้า"},
"blockActionMoveRandom":function(d){return "เคลื่อนที่แบบสุ่ม"},
"blockActionMoveTo":function(d){return "ย้ายไปยัง"},
"blockActionMoveToward":function(d){return "เคลื่อนไปข้างหน้าหนึ่งก้าว"},
"blockActionPlaySound":function(d){return "เล่นเสียง"},
"blockActionRepeat":function(d){return "ทำซ้ำ"},
"blockActionRepeatRandom":function(d){return "ทำซ้ำแบบสุ่ม"},
"blockActionSetBlock":function(d){return "set block to"},
"blockActionSpawn":function(d){return "เกิด"},
"blockActionSummon":function(d){return "summon"},
"blockActionTeleport":function(d){return "teleport target"},
"blockActionTeleportToPlayer":function(d){return "teleport to player"},
"blockActionTestForBlock":function(d){return "tests whether a block type"},
"blockActionTestForBlocks":function(d){return "tests whether the pattern between"},
"blockActionToScore":function(d){return "ให้คะแนน"},
"blockActionTransfer":function(d){return "transfer"},
"blockActionWait":function(d){return "รอ"},
"blockActionWith":function(d){return "with"},
"blockData":function(d){return "block data"},
"blockDestroyBlock":function(d){return "ทำลายบล็อก"},
"blockIf":function(d){return "ถ้า"},
"blockIfLavaAhead":function(d){return "หากมีลาวาอยู่ข้างหน้า"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "การเคลื่อนย้าย"},
"blockMoveBackward":function(d){return "เดินไปข้างหน้า"},
"blockMoveForward":function(d){return "เดินไปข้างหน้า"},
"blockPlace":function(d){return "วาง"},
"blockPlaceTorch":function(d){return "วางคบไฟ"},
"blockPlaceXAheadAhead":function(d){return "ข้างหน้า"},
"blockPlaceXAheadPlace":function(d){return "วาง"},
"blockPlaceXPlace":function(d){return "วาง"},
"blockPlantCrop":function(d){return "ปลูกพืช"},
"blockShear":function(d){return "ตัดขน"},
"blockTill":function(d){return "till"},
"blockTillSoil":function(d){return "ขุดดิน"},
"blockTurn":function(d){return "turn"},
"blockTurnLeft":function(d){return "เลี้ยวซ้าย"},
"blockTurnRight":function(d){return "เลี้ยวขวา"},
"blockType":function(d){return "block type"},
"blockTypeBedrock":function(d){return "หินดาน"},
"blockTypeBricks":function(d){return "อิฐ"},
"blockTypeClay":function(d){return "ดินเหนียว"},
"blockTypeClayHardened":function(d){return "ดินเผา"},
"blockTypeCobblestone":function(d){return "หินกรวด"},
"blockTypeDirt":function(d){return "ดิน"},
"blockTypeDirtCoarse":function(d){return "ดินหยาบ"},
"blockTypeDoorIron":function(d){return "iron door"},
"blockTypeEmpty":function(d){return "ความว่างเปล่า"},
"blockTypeFarmlandWet":function(d){return "ที่ดินเพาะปลูก"},
"blockTypeGlass":function(d){return "แก้ว"},
"blockTypeGlowstone":function(d){return "glowstone"},
"blockTypeGrass":function(d){return "หญ้า"},
"blockTypeGravel":function(d){return "ก้อนกรวด"},
"blockTypeLava":function(d){return "ลาวา"},
"blockTypeLogAcacia":function(d){return "ซุงต้นอะคาเซีย"},
"blockTypeLogBirch":function(d){return "ซุงต้นเบิช"},
"blockTypeLogJungle":function(d){return "ซุงจังเกิ้ล"},
"blockTypeLogOak":function(d){return "ซุงต้นโอ๊ค"},
"blockTypeLogSpruce":function(d){return "ซุงต้นสน"},
"blockTypeOreCoal":function(d){return "แร่ถ่านหิน"},
"blockTypeOreDiamond":function(d){return "แร่เพชร"},
"blockTypeOreEmerald":function(d){return "แร่มรกต"},
"blockTypeOreGold":function(d){return "แร่ทองคำ"},
"blockTypeOreIron":function(d){return "แร่เหล็ก"},
"blockTypeOreLapis":function(d){return "แร่ลาปิส"},
"blockTypeOreRedstone":function(d){return "แร่หินแดง"},
"blockTypePlanksAcacia":function(d){return "ไม้กระดานต้นอะคาเซีย"},
"blockTypePlanksBirch":function(d){return "ไม้กระดานต้นเบิช"},
"blockTypePlanksJungle":function(d){return "ไม้กระดานจังเกิ้ล"},
"blockTypePlanksOak":function(d){return "ไม้กระดานต้นโอ๊ค"},
"blockTypePlanksSpruce":function(d){return "ไม้กระดานต้นสน"},
"blockTypePressurePlateUp":function(d){return "pressure plate"},
"blockTypeRail":function(d){return "รั้ว"},
"blockTypeRailsRedstoneTorch":function(d){return "redstone torch"},
"blockTypeRedstoneWire":function(d){return "redstone wire"},
"blockTypeSand":function(d){return "ทราย"},
"blockTypeSandstone":function(d){return "หินทราย"},
"blockTypeStone":function(d){return "หิน"},
"blockTypeTnt":function(d){return "ระเบิดทีเอ็นที"},
"blockTypeTree":function(d){return "ต้นไม้"},
"blockTypeWater":function(d){return "น้ำ"},
"blockTypeWool":function(d){return "ขนแกะ"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "ข้างหน้า"},
"blockWhileXAheadDo":function(d){return "ทำ"},
"blockWhileXAheadWhile":function(d){return "ในขณะที่"},
"cancel":function(d){return "ยกเลิก"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "การเคลื่อนย้าย"},
"cloneModeNormal":function(d){return "normal"},
"connectToCodeConnection":function(d){return "To run this project in Minecraft: Education Edition, please use the Code Connection application."},
"destination":function(d){return "destination"},
"directionBack":function(d){return "back"},
"directionDown":function(d){return "ลง"},
"directionForward":function(d){return "forward"},
"directionLeft":function(d){return "ซ้าย"},
"directionMiddle":function(d){return "กลาง"},
"directionRight":function(d){return "ขวา"},
"directionUp":function(d){return "ขึ้น"},
"downloadButton":function(d){return "Download"},
"entityType":function(d){return "entity type"},
"entityTypeChicken":function(d){return "ไก่"},
"entityTypeCow":function(d){return "วัว"},
"entityTypeCreeper":function(d){return "ครีปเปอร์"},
"entityTypeIronGolem":function(d){return "โกเลมเหล็ก"},
"entityTypePlayer":function(d){return "ผู้เล่น"},
"entityTypeSheep":function(d){return "แกะ"},
"entityTypeZombie":function(d){return "ซอมบี้"},
"eventTypeWhenAttacked":function(d){return "เมื่อถูกโจมตี"},
"eventTypeWhenDay":function(d){return "เมื่อกลางวัน"},
"eventTypeWhenNight":function(d){return "เมื่อกลางคืน"},
"eventTypeWhenRun":function(d){return "เมื่อเรียกให้ทำงาน"},
"eventTypeWhenSpawned":function(d){return "เมื่อเกิด"},
"eventTypeWhenTouched":function(d){return "เมื่อสัมผัส"},
"eventTypeWhenUsed":function(d){return "เมื่อใช้"},
"forever":function(d){return "ตลอดกาล"},
"from":function(d){return "from"},
"generatedCodeDescription":function(d){return "โดยการลากและวางบล็อกในเกมปริศนานี้ คุณได้สร้างชุดของคำสั่งในภาษาคอมพิวเตอร์ที่เรียกว่า Javascript รหัสนี้จะบอกคอมพิวเตอร์ถึงสิ่งที่จะแสดงบนหน้าจอ ทุกสิ่งที่คุณเห็นและทำใน Minecraft ยังเริ่มต้นด้วยบรรทัดของรหัสคอมพิวเตอร์เช่นนี้"},
"getdataof":function(d){return "get data of"},
"getnameof":function(d){return "get name of"},
"houseSelectChooseFloorPlan":function(d){return "เลือกแบบแปลนสำหรับบ้านของคุณ"},
"houseSelectEasy":function(d){return "ง่าย"},
"houseSelectHard":function(d){return "ยาก"},
"houseSelectLetsBuild":function(d){return "มาสร้างบ้านกันเถอะ"},
"houseSelectMedium":function(d){return "ปานกลาง"},
"import":function(d){return "Import"},
"importShareLinkBody":function(d){return "Type your Hour of Code share link here and click \"Import\" to copy your code into Minecraft"},
"importShareLinkHeader":function(d){return "Import a share link"},
"inSlotNumber":function(d){return "in slot number"},
"itemTypeBlock":function(d){return "บล็อก"},
"itemTypeDecoration":function(d){return "decoration"},
"itemTypeMiscellaneous":function(d){return "miscellaneous"},
"itemTypeTool":function(d){return "tool"},
"items":function(d){return "item(s)"},
"itemsOfBlockType":function(d){return "item(s) of block type"},
"level10FailureMessage":function(d){return "ถมลาวาเพื่อเดินผ่าน จากนั้นระเบิดบล็อกเหล็ก 2 บล็อกที่อยู่อีกฟากหนึ่ง"},
"level11FailureMessage":function(d){return "อย่าลืมวางหินกรวดใหญ่ข้างหน้าถ้ามีลาวาข้างหน้า การทำเช่นนี้จะช่วยให้คุณระเบิดทรัพยากรในแถวนี้ได้อย่างปลอดภัย"},
"level12FailureMessage":function(d){return "อย่าลืมระเบิดบล็อกหินสีแดง 3 บล็อก นี่เป็นการผสมผสานสิ่งที่คุณได้เรียนรู้จากการสร้างบ้านของคุณและใช้ข้อความ \"หากมี\" เพื่อหลีกเลี่ยงการตกไปในลาวา"},
"level13FailureMessage":function(d){return "วาง \"รั้ว\" ไปตามแนวดินเพื่อนำทางจากประตูของคุณไปที่ขอบของแผนที่"},
"level1FailureMessage":function(d){return "คุณจำเป็นต้องใช้คำสั่งเพื่อเดินไปหาแกะ"},
"level1TooFewBlocksMessage":function(d){return "ลองใช้คำสั่งเพิ่มเติมเพื่อเดินไปหาแกะ"},
"level2FailureMessage":function(d){return "ในการตัดต้นไม้ ให้เดินไปที่ลำต้นและใช้คำสั่ง \"destroy block\""},
"level2TooFewBlocksMessage":function(d){return "ลองใช้คำสั่งเพิ่มเติมเพื่อตัดต้นไม้ เดินไปที่ลำต้นและใช้คำสั่ง \"destroy block\""},
"level3FailureMessage":function(d){return "ในการเก็บขนแกะจากแกะทั้ง 2 ตัว ให้เดินไปที่แกะแต่ละตัวและใช้คำสั่ง \"ตัดขน\" อย่าลืมใช้คำสั่งที่ผ่านมาเพื่อไปที่แกะ"},
"level3TooFewBlocksMessage":function(d){return "ลองใช้คำสั่งเพิ่มเติมเพื่อเก็บขนแกะจากแกะทั้ง 2 ตัว เดินไปที่แกะแต่ละตัวและใช้คำสั่ง \"ตัดขน\""},
"level4FailureMessage":function(d){return "คุณต้องใช้คำสั่ง \"destroy block\" กับลำต้นของต้นไม้ทั้ง 3 ต้น"},
"level5FailureMessage":function(d){return "วางบล็อกของคุณบนโครงดินเพื่อสร้างกำแพง คำสั่ง \"ทำซ้ำ\" สีชมพูจะเรียกใช้คำสั่งวางภายใน เช่น \"วางบล็อก\" และ \"เคลื่อนไปข้างหน้า\""},
"level6FailureMessage":function(d){return "วางบล็อกบนโครงดินของบ้านเพื่อให้เกมปริศนาสมบูรณ์"},
"level7FailureMessage":function(d){return "ใช้คำสั่ง \"ปลูก\" เพื่อวางพืชบนที่ดินแต่ละแปลงที่มีดินที่ขุดแล้วซึ่งมีสีเข้ม"},
"level8FailureMessage":function(d){return "หากคุณโดนไม้เลื้อยมันจะระเบิด ค่อยๆ หลบไม้เลื้อยและเข้าไปที่บ้านของคุณ"},
"level9FailureMessage":function(d){return "อย่าลืมวางคบไฟอย่างน้อย 2 อันเพื่อส่ิองทางและระเบิดถ่านหินอย่างน้อย 2 บล็อก"},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "masked"},
"maskModeReplace":function(d){return "replace"},
"minecraftBlock":function(d){return "บล็อก"},
"minecraftNotConnected":function(d){return "Minecraft not connected"},
"miniBlockBricks":function(d){return "อิฐ"},
"miniBlockBucketLava":function(d){return "ถังลาวา"},
"miniBlockBucketWater":function(d){return "ถังน้ำ"},
"miniBlockCarrots":function(d){return "แครอท"},
"miniBlockCoal":function(d){return "ถ่านหิน"},
"miniBlockCobblestone":function(d){return "หินกรวด"},
"miniBlockDiamond":function(d){return "เพชร"},
"miniBlockDirt":function(d){return "ดิน"},
"miniBlockDirtCoarse":function(d){return "ดินหยาบ"},
"miniBlockEgg":function(d){return "ไข่"},
"miniBlockEmerald":function(d){return "มรกต"},
"miniBlockGravel":function(d){return "ก้อนกรวด"},
"miniBlockGunPowder":function(d){return "ดินปืน"},
"miniBlockIngotGold":function(d){return "ก้อนทอง"},
"miniBlockIngotIron":function(d){return "ก้อนเหล็ก"},
"miniBlockLapisLazuli":function(d){return "แลพิสแลซูลี"},
"miniBlockLogAcacia":function(d){return "ซุงต้นอะคาเซีย"},
"miniBlockLogBirch":function(d){return "ซุงต้นเบิช"},
"miniBlockLogJungle":function(d){return "ซุงจังเกิ้ล"},
"miniBlockLogOak":function(d){return "ซุงต้นโอ๊ค"},
"miniBlockLogSpruce":function(d){return "ซุงต้นสน"},
"miniBlockMilk":function(d){return "นม"},
"miniBlockPlanksAcacia":function(d){return "ไม้กระดานต้นอะคาเซีย"},
"miniBlockPlanksBirch":function(d){return "ไม้กระดานต้นเบิช"},
"miniBlockPlanksJungle":function(d){return "ไม้กระดานจังเกิ้ล"},
"miniBlockPlanksOak":function(d){return "ไม้กระดานต้นโอ๊ค"},
"miniBlockPlanksSpruce":function(d){return "ไม้กระดานต้นสน"},
"miniBlockPoppy":function(d){return "งาดำ"},
"miniBlockPotato":function(d){return "มันฝรั่ง"},
"miniBlockRedstoneDust":function(d){return "ผงหินแดง"},
"miniBlockSand":function(d){return "ทราย"},
"miniBlockSandstone":function(d){return "หินทราย"},
"miniBlockSheep":function(d){return "แกะ"},
"miniBlockWheat":function(d){return "ข้าวสาลี"},
"miniBlockWool":function(d){return "ขนแกะ"},
"nextLevelMsg":function(d){return "เกมปริศนา "+craft_locale.v(d,"puzzleNumber")+" เกมเสร็จสมบูรณ์แล้ว ขอแสดงความยินดี!"},
"oldBlockHandling":function(d){return "old block at"},
"oldBlockHandlingsDestroy":function(d){return "destroy"},
"oldBlockHandlingsKeep":function(d){return "keep"},
"oldBlockHandlingsReplace":function(d){return "replace"},
"onBehalfOf":function(d){return "on behalf of"},
"playerSelectChooseCharacter":function(d){return "เลือกตัวละครของคุณ"},
"playerSelectChooseSelectButton":function(d){return "เลือก"},
"playerSelectLetsGetStarted":function(d){return "มาเริ่มเล่นกันเถอะ!"},
"quantity":function(d){return "quantity"},
"reinfFeedbackMsg":function(d){return "คุณสามารถกด  \"เล่นต่อไป\" เพื่อกลับไปเล่นเกมต่อ"},
"relative":function(d){return "relative"},
"runAgent":function(d){return "Run Agent"},
"score":function(d){return "คะแนน"},
"seconds":function(d){return "second(s)"},
"selectChooseButton":function(d){return "เลือก"},
"soundTypeBump":function(d){return "ชน"},
"soundTypeChickenBawk":function(d){return "ไก่ร้องกระต๊าก"},
"soundTypeChickenHurt":function(d){return "ไก่บาดเจ็บ"},
"soundTypeCollectedBlock":function(d){return "บล็อกเก็บ"},
"soundTypeCowHuff":function(d){return "วัวโกรธ"},
"soundTypeCowHurt":function(d){return "วัวเจ็บ"},
"soundTypeCowMoo":function(d){return "วัวร้องมู"},
"soundTypeCowMooLong":function(d){return "วัวร้องมู"},
"soundTypeCreeperHiss":function(d){return "ครีปเปอร์ทำเสียงฟ่อ"},
"soundTypeDig_wood1":function(d){return "ไม้แตก"},
"soundTypeDoorOpen":function(d){return "ประตูเปิด"},
"soundTypeExplode":function(d){return "ระเบิด"},
"soundTypeFailure":function(d){return "ไม่ผ่านด่าน"},
"soundTypeFall":function(d){return "ตก"},
"soundTypeFizz":function(d){return "เดือด"},
"soundTypeFuse":function(d){return "ละลาย"},
"soundTypeIronGolemHit":function(d){return "โกเลมเหล็กตี"},
"soundTypeMetalWhack":function(d){return "ตีโลหะ"},
"soundTypeMinecart":function(d){return "มายคราฟ"},
"soundTypePlaceBlock":function(d){return "วางบล็อก"},
"soundTypePunch":function(d){return "ต่อย"},
"soundTypeSheepBaa":function(d){return "แกะร้องแบ"},
"soundTypeStepFarmland":function(d){return "เหยียบพื้นที่เพาะปลูก"},
"soundTypeStepGrass":function(d){return "เหยียบหญ้า"},
"soundTypeStepGravel":function(d){return "เหยียบกรวด"},
"soundTypeStepStone":function(d){return "เหยียบหิน"},
"soundTypeStepWood":function(d){return "เหยียบไม้"},
"soundTypeSuccess":function(d){return "ผ่านด้าน"},
"soundTypeZombieBrains":function(d){return "ผีดิบคราง"},
"soundTypeZombieGroan":function(d){return "ผีดิบคำราม"},
"soundTypeZombieHurt":function(d){return "ผีดิบเจ็บ"},
"target":function(d){return "target"},
"testModeAll":function(d){return "all"},
"testModeMasked":function(d){return "masked"},
"tileData":function(d){return "tile data"},
"timeDay":function(d){return "day"},
"timeLong":function(d){return "ยาว"},
"timeMedium":function(d){return "ปานกลาง"},
"timeNight":function(d){return "กลางคืน"},
"timeRandom":function(d){return "ค่าสุ่ม"},
"timeSet":function(d){return "set time to"},
"timeShort":function(d){return "สั้น"},
"timeVeryLong":function(d){return "ยาวมาก"},
"timeVeryShort":function(d){return "สั้นมาก"},
"to":function(d){return "ถึง"},
"toSlotNumber":function(d){return "to slot number"},
"tooManyBlocksFail":function(d){return "เกมปริศนา "+craft_locale.v(d,"puzzleNumber")+" สมบูรณ์แล้ว ขอแสดงความยินดี! นอกจากนี้ยังสามารถทำให้เกมเสร็จสมบูรณ์ด้วย "+craft_locale.p(d,"numBlocks",0,"th",{"one":"1 block","other":craft_locale.n(d,"numBlocks")+" blocks"})+"."},
"turnRandom":function(d){return "หันแบบสุ่ม"},
"useArrowKeys":function(d){return "You don't need to add any blocks! Move with the arrows, and press the space bar or tap the game board to use items."},
"weather":function(d){return "weather"},
"weatherTypeClear":function(d){return "clear"},
"weatherTypeRain":function(d){return "rain"},
"weatherTypeThunder":function(d){return "thunder"}};