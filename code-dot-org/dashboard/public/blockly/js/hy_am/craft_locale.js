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
"absolute":function(d){return "բացարձակ"},
"agentGenericFailureMessage":function(d){return "Keep coding! Remember to use The Agent to help."},
"agentTooFewBlocksFailureMessage":function(d){return "Try adding just one block at a time to get The Agent to the right spot."},
"at":function(d){return "at"},
"agentDiamondPathCongrats":function(d){return "Congratulations, you found the diamond path! You have collected "+craft_locale.p(d,"count",0,"en",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" so far!"},
"blockActionAdd":function(d){return "ավելացնել"},
"blockActionAttack":function(d){return "հարձակում"},
"blockActionClone":function(d){return "clone blocks"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "collect"},
"blockActionCollectAll":function(d){return "collect all"},
"blockActionDestroyEntity":function(d){return "անհետանալ"},
"blockActionDetect":function(d){return "detect"},
"blockActionDetectRedstone":function(d){return "detect redstone"},
"blockActionDrop":function(d){return "drop"},
"blockActionDropAll":function(d){return "drop all"},
"blockActionExecute":function(d){return "execute command"},
"blockActionExplodeEntity":function(d){return "պայթյուն"},
"blockActionFill":function(d){return "fill from"},
"blockActionFlashEntity":function(d){return "թարթել"},
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
"blockActionMove":function(d){return "քայլ"},
"blockActionMoveAway":function(d){return "move away from"},
"blockActionMoveForward":function(d){return "առաջ ընթանալ"},
"blockActionMoveRandom":function(d){return "move random"},
"blockActionMoveTo":function(d){return "move to"},
"blockActionMoveToward":function(d){return "move a step toward"},
"blockActionPlaySound":function(d){return "play sound"},
"blockActionRepeat":function(d){return "կրկնել"},
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
"blockActionWait":function(d){return "սպասել"},
"blockActionWith":function(d){return "with"},
"blockData":function(d){return "block data"},
"blockDestroyBlock":function(d){return "ոչնչացնել թաղամաս"},
"blockIf":function(d){return "եթե"},
"blockIfLavaAhead":function(d){return "եթե լավա առջեւում"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "քայլ"},
"blockMoveBackward":function(d){return "տեղափոխել հետամնաց"},
"blockMoveForward":function(d){return "առաջ ընթանալ"},
"blockPlace":function(d){return "տեղ"},
"blockPlaceTorch":function(d){return "Տեղ ջահը"},
"blockPlaceXAheadAhead":function(d){return "առաջ"},
"blockPlaceXAheadPlace":function(d){return "տեղ"},
"blockPlaceXPlace":function(d){return "տեղ"},
"blockPlantCrop":function(d){return "գործարանը մշակաբույսերի"},
"blockShear":function(d){return "ճղել"},
"blockTill":function(d){return "till"},
"blockTillSoil":function(d){return "մինչեւ որ հողում"},
"blockTurn":function(d){return "turn"},
"blockTurnLeft":function(d){return "դիմել է մնացել"},
"blockTurnRight":function(d){return "աջ շրջադարձ"},
"blockType":function(d){return "block type"},
"blockTypeBedrock":function(d){return "հիմնածայր"},
"blockTypeBricks":function(d){return "Կուբիկ"},
"blockTypeClay":function(d){return "կավ"},
"blockTypeClayHardened":function(d){return "Անուղղելի Clay"},
"blockTypeCobblestone":function(d){return "սալաքար"},
"blockTypeDirt":function(d){return "կեղտ"},
"blockTypeDirtCoarse":function(d){return "կոպիտ կեղտ"},
"blockTypeDoorIron":function(d){return "iron door"},
"blockTypeEmpty":function(d){return "դատարկ"},
"blockTypeFarmlandWet":function(d){return "հող"},
"blockTypeGlass":function(d){return "ապակի"},
"blockTypeGlowstone":function(d){return "glowstone"},
"blockTypeGrass":function(d){return "խոտ"},
"blockTypeGravel":function(d){return "մանրախիճ"},
"blockTypeLava":function(d){return "լավա"},
"blockTypeLogAcacia":function(d){return "ակացիա տեղեկամատյան"},
"blockTypeLogBirch":function(d){return "կեչու տեղեկամատյան"},
"blockTypeLogJungle":function(d){return "Jungle տեղեկամատյան"},
"blockTypeLogOak":function(d){return "OAK տեղեկամատյան"},
"blockTypeLogSpruce":function(d){return "զուգված տեղեկամատյան"},
"blockTypeOreCoal":function(d){return "Ածուխ Ore"},
"blockTypeOreDiamond":function(d){return "ադամանդի Ore"},
"blockTypeOreEmerald":function(d){return "զմրուխտ Ore"},
"blockTypeOreGold":function(d){return "ոսկու հանքաքարի"},
"blockTypeOreIron":function(d){return "երկաթի հանքաքար"},
"blockTypeOreLapis":function(d){return "կապույտ Ore"},
"blockTypeOreRedstone":function(d){return "Redstone Ore"},
"blockTypePlanksAcacia":function(d){return "Ակացիա planks"},
"blockTypePlanksBirch":function(d){return "կեչու planks"},
"blockTypePlanksJungle":function(d){return "Jungle planks"},
"blockTypePlanksOak":function(d){return "oak planks"},
"blockTypePlanksSpruce":function(d){return "զուգված planks"},
"blockTypePressurePlateUp":function(d){return "pressure plate"},
"blockTypeRail":function(d){return "երկաթուղի"},
"blockTypeRailsRedstoneTorch":function(d){return "redstone torch"},
"blockTypeRedstoneWire":function(d){return "redstone wire"},
"blockTypeSand":function(d){return "ավազ"},
"blockTypeSandstone":function(d){return "ավազաքար"},
"blockTypeStone":function(d){return "քար"},
"blockTypeTnt":function(d){return "TNT"},
"blockTypeTree":function(d){return "ծառ"},
"blockTypeWater":function(d){return "ջուր"},
"blockTypeWool":function(d){return "բուրդ"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "առաջ"},
"blockWhileXAheadDo":function(d){return "անել"},
"blockWhileXAheadWhile":function(d){return "ժամանակ"},
"cancel":function(d){return "վերացնել"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "քայլ"},
"cloneModeNormal":function(d){return "normal"},
"connectToCodeConnection":function(d){return "To run this project in Minecraft: Education Edition, please use the Code Connection application."},
"destination":function(d){return "destination"},
"directionBack":function(d){return "back"},
"directionDown":function(d){return "ներքեւ"},
"directionForward":function(d){return "forward"},
"directionLeft":function(d){return "ձախ"},
"directionMiddle":function(d){return "միջին"},
"directionRight":function(d){return "ճիշտ"},
"directionUp":function(d){return "մինչեւ"},
"downloadButton":function(d){return "Download"},
"entityType":function(d){return "entity type"},
"entityTypeChicken":function(d){return "ճուտիկ"},
"entityTypeCow":function(d){return "կով"},
"entityTypeCreeper":function(d){return "creeper"},
"entityTypeIronGolem":function(d){return "iron golem"},
"entityTypePlayer":function(d){return "խաղացող"},
"entityTypeSheep":function(d){return "ոչխար"},
"entityTypeZombie":function(d){return "զոմբի"},
"eventTypeWhenAttacked":function(d){return "երբ հարձակված է"},
"eventTypeWhenDay":function(d){return "ցերեկը"},
"eventTypeWhenNight":function(d){return "գիշերը"},
"eventTypeWhenRun":function(d){return "երբ կսկսի"},
"eventTypeWhenSpawned":function(d){return "ստեղծման ժամանակ"},
"eventTypeWhenTouched":function(d){return "հպման ժամանակ"},
"eventTypeWhenUsed":function(d){return "օգտագործման ժամանակ"},
"forever":function(d){return "ընդմիշտ"},
"from":function(d){return "from"},
"generatedCodeDescription":function(d){return "Կողմից քարշ եւ տեղաբաշխման նյութից այս հանելուկ, դու ստեղծել է մի շարք հանձնարարականներ է համակարգչային լեզվով կոչվում է Javascript: Այս կոդը պատմում համակարգիչներ, թե ինչ է ցուցադրման էկրանի վրա: Ամեն ինչ տեսնում եք, եւ անել Minecraft նաեւ սկսվում տող համակարգչային օրենսգրքի նման."},
"getdataof":function(d){return "get data of"},
"getnameof":function(d){return "get name of"},
"houseSelectChooseFloorPlan":function(d){return "Ընտրեք Հատակագիծ ձեր տունը."},
"houseSelectEasy":function(d){return "հեշտ"},
"houseSelectHard":function(d){return "դժվար"},
"houseSelectLetsBuild":function(d){return "Եկեք կառուցել մի տուն:"},
"houseSelectMedium":function(d){return "միջին"},
"import":function(d){return "Import"},
"importShareLinkBody":function(d){return "Type your Hour of Code share link here and click \"Import\" to copy your code into Minecraft"},
"importShareLinkHeader":function(d){return "Import a share link"},
"inSlotNumber":function(d){return "in slot number"},
"itemTypeBlock":function(d){return "բլոկ"},
"itemTypeDecoration":function(d){return "decoration"},
"itemTypeMiscellaneous":function(d){return "miscellaneous"},
"itemTypeTool":function(d){return "tool"},
"items":function(d){return "item(s)"},
"itemsOfBlockType":function(d){return "item(s) of block type"},
"level10FailureMessage":function(d){return "Ծածկել լավա քայլել, ապա հանքը երկու երկաթե բլոկների վրա, մյուս կողմում:"},
"level11FailureMessage":function(d){return "Համոզվեք, որ տեղադրել քարը առջեւում, եթե կա լավա առջեւում. Այս թույլ կտա ձեզ ապահով եղանակով շահագործել այս շարքում ռեսուրսների."},
"level12FailureMessage":function(d){return "Վստահ եղեք, արդյունահանել 3 REDSTONE նյութից. Այս համատեղում, թե ինչ եք սովորել է կառուցել ձեր տունը, եւ օգտագործելով \"Եթե \" հայտարարություններով խուսափել ընկնելու է լավա."},
"level13FailureMessage":function(d){return "Տեղ \"երկաթուղային \" երկայնքով Dirt ճանապարհին տանող ձեր դուռը եզրին քարտեզի վրա."},
"level1FailureMessage":function(d){return "Դուք պետք է օգտագործել հրամանները քայլել դեպի ոչխարների."},
"level1TooFewBlocksMessage":function(d){return "Փորձեք օգտագործելով ավելի շատ հրամանները քայլել դեպի ոչխարների."},
"level2FailureMessage":function(d){return "Կտրում մի ծառ, քայլել իր միջքաղաքային եւ օգտագործել \"ոչնչացնել Block \" հրամանը:"},
"level2TooFewBlocksMessage":function(d){return "Փորձեք օգտագործելով ավելի շատ հրամանները կտրել ծառ: Քայլել իր միջքաղաքային եւ օգտագործել \"ոչնչացնել Block \" հրամանը:"},
"level3FailureMessage":function(d){return "To հավաքվում բուրդ, այնպես էլ ոչխար, քայլել, ամեն մեկը, եւ օգտագործել \"ճղել \" հրամանը: Հիշում է օգտագործել շրջադարձի հրամանները հասնել ոչխարները:"},
"level3TooFewBlocksMessage":function(d){return "Փորձեք օգտագործելով ավելի շատ հրամանները է հավաքել բուրդ, այնպես էլ ոչխարների. Քայլել իւրաքանչիւրին եւ օգտագործել \"ճղել \" հրամանը:"},
"level4FailureMessage":function(d){return "Դուք պետք է օգտագործել \"ոչնչացնել Block \" հրամանը յուրաքանչյուր երեք ծառերի կոճղերը."},
"level5FailureMessage":function(d){return "Տեղադրել ձեր նյութից է Dirt գծերով է կառուցել պատը. The Pink \"կրկնում \" հրամանը չի առաջադրվելու հրամաններ տեղադրված ներսում, նման \"place թաղամաս \" եւ \"առաջ շարժվել \"."},
"level6FailureMessage":function(d){return "Տեղ արգելափակում է Dirt գծերով տան ավարտելու է հանելուկ."},
"level7FailureMessage":function(d){return "Օգտագործեք \"գործարանը \" հրաման է տեղադրել բերք յուրաքանչյուր թիզ մութ tilled հողում:"},
"level8FailureMessage":function(d){return "Եթե ​​դուք ձեռք սողուն, այն չի պայթել: Թռցնել շուրջ նրանց եւ մուտքագրեք Ձեր տունը:"},
"level9FailureMessage":function(d){return "Մի մոռացեք տեղադրել առնվազն 2 երթ է լույս ձեր ճանապարհը եւ իմը առնվազն 2 ածուխի."},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "masked"},
"maskModeReplace":function(d){return "replace"},
"minecraftBlock":function(d){return "բլոկ"},
"minecraftNotConnected":function(d){return "Minecraft not connected"},
"miniBlockBricks":function(d){return "Կուբիկ"},
"miniBlockBucketLava":function(d){return "լավայի դույլ"},
"miniBlockBucketWater":function(d){return "ջրի դույլ"},
"miniBlockCarrots":function(d){return "գազարներ"},
"miniBlockCoal":function(d){return "ածուխ"},
"miniBlockCobblestone":function(d){return "սալաքար"},
"miniBlockDiamond":function(d){return "ադամանդ"},
"miniBlockDirt":function(d){return "կեղտ"},
"miniBlockDirtCoarse":function(d){return "կոպիտ կեղտ"},
"miniBlockEgg":function(d){return "ձու"},
"miniBlockEmerald":function(d){return "զմրուխտ"},
"miniBlockGravel":function(d){return "մանրախիճ"},
"miniBlockGunPowder":function(d){return "\nվառոդ"},
"miniBlockIngotGold":function(d){return "gold ingot"},
"miniBlockIngotIron":function(d){return "iron ingot"},
"miniBlockLapisLazuli":function(d){return "lapis lazuli"},
"miniBlockLogAcacia":function(d){return "ակացիա տեղեկամատյան"},
"miniBlockLogBirch":function(d){return "կեչու տեղեկամատյան"},
"miniBlockLogJungle":function(d){return "Jungle տեղեկամատյան"},
"miniBlockLogOak":function(d){return "OAK տեղեկամատյան"},
"miniBlockLogSpruce":function(d){return "զուգված տեղեկամատյան"},
"miniBlockMilk":function(d){return "կաթ"},
"miniBlockPlanksAcacia":function(d){return "Ակացիա planks"},
"miniBlockPlanksBirch":function(d){return "կեչու planks"},
"miniBlockPlanksJungle":function(d){return "Jungle planks"},
"miniBlockPlanksOak":function(d){return "oak planks"},
"miniBlockPlanksSpruce":function(d){return "զուգված planks"},
"miniBlockPoppy":function(d){return "կակաչ"},
"miniBlockPotato":function(d){return "կարտոֆիլ"},
"miniBlockRedstoneDust":function(d){return "կարմիր քարի փոշի"},
"miniBlockSand":function(d){return "ավազ"},
"miniBlockSandstone":function(d){return "ավազաքար"},
"miniBlockSheep":function(d){return "ոչխար"},
"miniBlockWheat":function(d){return "ցորեն"},
"miniBlockWool":function(d){return "բուրդ"},
"nextLevelMsg":function(d){return "Puzzle "+craft_locale.v(d,"puzzleNumber")+" ավարտվել: Շնորհավորում եմ:"},
"oldBlockHandling":function(d){return "old block at"},
"oldBlockHandlingsDestroy":function(d){return "destroy"},
"oldBlockHandlingsKeep":function(d){return "keep"},
"oldBlockHandlingsReplace":function(d){return "replace"},
"onBehalfOf":function(d){return "on behalf of"},
"playerSelectChooseCharacter":function(d){return "Ընտրեք ձեր բնավորությունը."},
"playerSelectChooseSelectButton":function(d){return "ընտրել"},
"playerSelectLetsGetStarted":function(d){return "Եկեք սկսենք."},
"quantity":function(d){return "quantity"},
"reinfFeedbackMsg":function(d){return "Դուք կարող եք սեղմել \"պահել խաղում \" է վերադառնալ խաղում ձեր խաղը."},
"relative":function(d){return "relative"},
"runAgent":function(d){return "Run Agent"},
"score":function(d){return "Հաշիվ"},
"seconds":function(d){return "second(s)"},
"selectChooseButton":function(d){return "ընտրել"},
"soundTypeBump":function(d){return "բամփ"},
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
"soundTypeExplode":function(d){return "պայթյուն"},
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
"timeDay":function(d){return "օր"},
"timeLong":function(d){return "long"},
"timeMedium":function(d){return "medium"},
"timeNight":function(d){return "գիշեր"},
"timeRandom":function(d){return "կամայական"},
"timeSet":function(d){return "set time to"},
"timeShort":function(d){return "short"},
"timeVeryLong":function(d){return "very long"},
"timeVeryShort":function(d){return "very short"},
"to":function(d){return "դեպի"},
"toSlotNumber":function(d){return "to slot number"},
"tooManyBlocksFail":function(d){return "Puzzle "+craft_locale.v(d,"puzzleNumber")+" ավարտվել: Շնորհավորում եմ: Այն նաեւ հնարավորություն է տալիս լրացնել այն "+craft_locale.p(d,"numBlocks",0,"en",{"one":"1 թաղամաս","other":craft_locale.n(d,"numBlocks")+" արգելափակում"})+"."},
"turnRandom":function(d){return "turn random"},
"useArrowKeys":function(d){return "You don't need to add any blocks! Move with the arrows, and press the space bar or tap the game board to use items."},
"weather":function(d){return "weather"},
"weatherTypeClear":function(d){return "clear"},
"weatherTypeRain":function(d){return "rain"},
"weatherTypeThunder":function(d){return "thunder"}};