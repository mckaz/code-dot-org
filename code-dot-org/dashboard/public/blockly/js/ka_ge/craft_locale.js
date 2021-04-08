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
"absolute":function(d){return "აბსოლუტური"},
"agentGenericFailureMessage":function(d){return "გააგრძელეთ კოდის წერა! არ დაგავიწყდეთ დახმარების მისაღებად აგენტის გამოყენება."},
"agentTooFewBlocksFailureMessage":function(d){return "სცადეთ თითო ჯერზე თითო ბლოკის დამატება, რათა მიიყვანოთ აგენტი სწორ ადგილას."},
"at":function(d){return " "},
"agentDiamondPathCongrats":function(d){return "გილოცავთ, თქვენ იპოვეთ ალმასის გზა!აქამდე თქვენ შეაგროვეთ "+craft_locale.p(d,"count",0,"en",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" !"},
"blockActionAdd":function(d){return "დამატება"},
"blockActionAttack":function(d){return "შეტევა"},
"blockActionClone":function(d){return "ბლოკების კლონირება"},
"blockActionCloneFiltered":function(d){return "მხოლოდ კლონირება"},
"blockActionCollect":function(d){return "შეგროვება"},
"blockActionCollectAll":function(d){return "ყველაფრის შეგროვება"},
"blockActionDestroyEntity":function(d){return "გაქრობა"},
"blockActionDetect":function(d){return "გამოვლენა"},
"blockActionDetectRedstone":function(d){return "წითელი ქვის პოვნა"},
"blockActionDrop":function(d){return "დადება"},
"blockActionDropAll":function(d){return "ყველაფრის დაგდება"},
"blockActionExecute":function(d){return "ბრძანების შესრულება"},
"blockActionExplodeEntity":function(d){return "აფეთქება"},
"blockActionFill":function(d){return "შეავსეთ ფორმა"},
"blockActionFlashEntity":function(d){return "ციმციმი"},
"blockActionGetItemCount":function(d){return "ელემენტების რაოდენობის მიღება"},
"blockActionGetItemCountInSlotNumber":function(d){return "სლოტის ნომერში ელემენტების რიცხვის მიღება"},
"blockActionGetItemDetail":function(d){return "ელემენტის დეტალების მიღება"},
"blockActionGetItemDetailInSlotNumber":function(d){return "სლოტის ნომერში ელემენტების დეტალების მიღება"},
"blockActionGetItemSpace":function(d){return "ელემენტის სივრცის მიღება"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "სლოტის ნომერში ელემენტის სივრცის აღება"},
"blockActionGive":function(d){return "მიცემა"},
"blockActionInspect":function(d){return "დათვალიერება"},
"blockActionInspectData":function(d){return "მონაცემთა დათვალიერება"},
"blockActionKill":function(d){return "მოკალი სამიზნე"},
"blockActionMove":function(d){return "გადაადგილება"},
"blockActionMoveAway":function(d){return "მოშორდი"},
"blockActionMoveForward":function(d){return "წინ გადაადგილება"},
"blockActionMoveRandom":function(d){return "შემთხვევითი მოძრაობა"},
"blockActionMoveTo":function(d){return "გადაადგილება"},
"blockActionMoveToward":function(d){return "წინ ნაბიჯის გადადგმა"},
"blockActionPlaySound":function(d){return "ხმის დაკვრა"},
"blockActionRepeat":function(d){return "გაიმეორეთ"},
"blockActionRepeatRandom":function(d){return "შემთხვევით განმეორება"},
"blockActionSetBlock":function(d){return "განსაზღვრეთ ბლოკი, როგორც"},
"blockActionSpawn":function(d){return "დაბადება"},
"blockActionSummon":function(d){return "გამოძახება"},
"blockActionTeleport":function(d){return "მიზნის ტელეპორტირება"},
"blockActionTeleportToPlayer":function(d){return "მოთამაშესთან ტელეპორტაცია"},
"blockActionTestForBlock":function(d){return "ამოწმებს, არის თუ არა ბლოკის ტიპი"},
"blockActionTestForBlocks":function(d){return "ამოწმებს შუაში მოთავსებულ ნიმუშს"},
"blockActionToScore":function(d){return "ქულების დაგროვება"},
"blockActionTransfer":function(d){return "გადარიცხვა"},
"blockActionWait":function(d){return "დალოდება"},
"blockActionWith":function(d){return "რით"},
"blockData":function(d){return "ბლოკის მონაცემი"},
"blockDestroyBlock":function(d){return "ბლოკის განადგურება"},
"blockIf":function(d){return "თუ"},
"blockIfLavaAhead":function(d){return "თუ წინ არის ლავა"},
"blockIs":function(d){return "არის"},
"blockMove":function(d){return "გადაადგილება"},
"blockMoveBackward":function(d){return "უკან გადაადგილება"},
"blockMoveForward":function(d){return "წინ გადაადგილება"},
"blockPlace":function(d){return "განლაგება"},
"blockPlaceTorch":function(d){return "ჩირაღდნის დაყენება"},
"blockPlaceXAheadAhead":function(d){return "წინ"},
"blockPlaceXAheadPlace":function(d){return "განლაგება"},
"blockPlaceXPlace":function(d){return "განლაგება"},
"blockPlantCrop":function(d){return "მცენარის გასხვლა"},
"blockShear":function(d){return "გაკრეჭა"},
"blockTill":function(d){return "მდე"},
"blockTillSoil":function(d){return "ნიადაგამდე"},
"blockTurn":function(d){return "მობრუნება"},
"blockTurnLeft":function(d){return "მარცხნივ მობრუნება"},
"blockTurnRight":function(d){return "მარჯვნივ მობრუნება"},
"blockType":function(d){return "ბლოკის ტიპი"},
"blockTypeBedrock":function(d){return "ქვენაფენი ქანი"},
"blockTypeBricks":function(d){return "აგურები"},
"blockTypeClay":function(d){return "თიხა"},
"blockTypeClayHardened":function(d){return "გამომწვარი თიხა"},
"blockTypeCobblestone":function(d){return "რიყის ქვა"},
"blockTypeDirt":function(d){return "ჭუჭყი"},
"blockTypeDirtCoarse":function(d){return "მსხვილი ჭუჭყი"},
"blockTypeDoorIron":function(d){return "რკინის კარი"},
"blockTypeEmpty":function(d){return "ცარიელი"},
"blockTypeFarmlandWet":function(d){return "მდელო"},
"blockTypeGlass":function(d){return "მინა"},
"blockTypeGlowstone":function(d){return "მანათობელი ქვა"},
"blockTypeGrass":function(d){return "ბალახი"},
"blockTypeGravel":function(d){return "ხრეში"},
"blockTypeLava":function(d){return "ლავა"},
"blockTypeLogAcacia":function(d){return "აკაციის მორი"},
"blockTypeLogBirch":function(d){return "არყის მორი"},
"blockTypeLogJungle":function(d){return "ჯუნგლის ხის მორი"},
"blockTypeLogOak":function(d){return "მუხის მორი"},
"blockTypeLogSpruce":function(d){return "ნაძვის მორი"},
"blockTypeOreCoal":function(d){return "ნახშირის მადანი"},
"blockTypeOreDiamond":function(d){return "ალმასის მადანი"},
"blockTypeOreEmerald":function(d){return "ზურმუხტის მადანი"},
"blockTypeOreGold":function(d){return "ოქროს მადანი"},
"blockTypeOreIron":function(d){return "რკინის მადანი"},
"blockTypeOreLapis":function(d){return "ლილაქვას მადანი"},
"blockTypeOreRedstone":function(d){return "წითელი ქვის მადანი"},
"blockTypePlanksAcacia":function(d){return "აკაციის ფიცრები"},
"blockTypePlanksBirch":function(d){return "არყის ხის ფიცრები"},
"blockTypePlanksJungle":function(d){return "ჯუნგლის ხის ფიცრები"},
"blockTypePlanksOak":function(d){return "მუხის ფიცრები"},
"blockTypePlanksSpruce":function(d){return "ნაძვის ფიცრები"},
"blockTypePressurePlateUp":function(d){return "დასაჭერი ფირფიტა"},
"blockTypeRail":function(d){return "რელსი"},
"blockTypeRailsRedstoneTorch":function(d){return "წითელი ქვის ჩირაღდანი"},
"blockTypeRedstoneWire":function(d){return "წითელი ქვის მავთული"},
"blockTypeSand":function(d){return "ქვიშა"},
"blockTypeSandstone":function(d){return "ქვიშაქვა"},
"blockTypeStone":function(d){return "ქვა"},
"blockTypeTnt":function(d){return "ტროტილი"},
"blockTypeTree":function(d){return "ხე"},
"blockTypeWater":function(d){return "წყალი"},
"blockTypeWool":function(d){return "მატყლი"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "წინ"},
"blockWhileXAheadDo":function(d){return "შესრულება"},
"blockWhileXAheadWhile":function(d){return "სანამ"},
"cancel":function(d){return "გაუქმება"},
"cloneMode":function(d){return "კლონირების რეჟიმი"},
"cloneModeForce":function(d){return "ძალა"},
"cloneModeMove":function(d){return "გადაადგილება"},
"cloneModeNormal":function(d){return "ჩვეულებრივი"},
"connectToCodeConnection":function(d){return "ამ პროექტის \"მაინკრაფტი: სასწავლო გამოცემაში\" გასაშვებად, გთხოვთ გამოიყენოთ კოდის კავშირის აპლიკაცია."},
"destination":function(d){return "დანიშნულება"},
"directionBack":function(d){return "უკან"},
"directionDown":function(d){return "ქვემოთ"},
"directionForward":function(d){return "წინ"},
"directionLeft":function(d){return "მარცხნივ"},
"directionMiddle":function(d){return "შუა"},
"directionRight":function(d){return "მარჯვნივ"},
"directionUp":function(d){return "ზემოთ"},
"downloadButton":function(d){return "გადმოწერა"},
"entityType":function(d){return "ერთეულის ტიპი"},
"entityTypeChicken":function(d){return "ქათამი"},
"entityTypeCow":function(d){return "ძროხა"},
"entityTypeCreeper":function(d){return "უფრო საშიში"},
"entityTypeIronGolem":function(d){return "რკინის გოლემი"},
"entityTypePlayer":function(d){return "მოთამაშე"},
"entityTypeSheep":function(d){return "ცხვარი"},
"entityTypeZombie":function(d){return "ზომბი"},
"eventTypeWhenAttacked":function(d){return "შეტევისას"},
"eventTypeWhenDay":function(d){return "როცა დღეა"},
"eventTypeWhenNight":function(d){return "როცა ღამეა"},
"eventTypeWhenRun":function(d){return "გაშვებისას"},
"eventTypeWhenSpawned":function(d){return "დაბადებისას"},
"eventTypeWhenTouched":function(d){return "შეხებისას"},
"eventTypeWhenUsed":function(d){return "გამოყენებისას"},
"forever":function(d){return "ყოველთვის"},
"from":function(d){return "-დან"},
"generatedCodeDescription":function(d){return "ამ თავსატეხში ბლოკების გადატანითა და განთავსებით თქვენ შექმენით ინსტრუქციების ნაკრები კომპიუტერულ ენაზე Javascript. ეს კოდი ეუბნება კომპიუტერს, თუ რა უნდა აჩვენოს ეკრანზე. ყველაფერი, რასაც ხედავთ და აკეთებთ მაინკრაფტში ასევე იწყება კომპიუტერული კოდის რამდენიმე ხაზით - აი, ასეთით."},
"getdataof":function(d){return "მონაცემთა მიღება"},
"getnameof":function(d){return "სახელის მიღება"},
"houseSelectChooseFloorPlan":function(d){return "აირჩიეთ იატაკის გეგმა თქვენი სახლისთვის."},
"houseSelectEasy":function(d){return "მარტივი"},
"houseSelectHard":function(d){return "რთული"},
"houseSelectLetsBuild":function(d){return "ავაშენოთ სახლი."},
"houseSelectMedium":function(d){return "საშუალო"},
"import":function(d){return "შემოტანა"},
"importShareLinkBody":function(d){return "ჩაწერეთ თქვენი კოდის საათის გასაზიარებელი ბმული და დააწკაპეთ \"შემოტანას\", რათა ჩააკოპიროთ თქვენი კოდი მაინკრაფტში"},
"importShareLinkHeader":function(d){return "შემოიტანეთ გასაზიარებელი ბმული"},
"inSlotNumber":function(d){return "სლოტის რიცხვში"},
"itemTypeBlock":function(d){return "ბლოკი"},
"itemTypeDecoration":function(d){return "დეკორაცია"},
"itemTypeMiscellaneous":function(d){return "სხვა"},
"itemTypeTool":function(d){return "ინსტრუმენტი"},
"items":function(d){return "ელემენტი(ები)"},
"itemsOfBlockType":function(d){return "ბლოკის ტიპის ელემენტი(ები)"},
"level10FailureMessage":function(d){return "გადახურეთ ლავა, რომ შეძლოთ მისი გადაჭრა, შემდეგ კი მოიპოვეთ ორი რკინის ბლოკი მეორე მხარეს."},
"level11FailureMessage":function(d){return "თუ წინ არის ლავა, არ დაგავიწყდეთ წინ რიყის ქვის განლაგება. ეს მოგცემთ საშუალებას უსაფრთხოდ მოიპოვოთ რესურსები."},
"level12FailureMessage":function(d){return "აუცილებლად მოიპოვეთ 3 წითელი ქვის ბლოკი. ამისთვის დაგჭირდებათ ის, რაც ისწავლეთ სახლის შენების პროცესში და \"თუ\" დებულებების გამოყენება - იმისთვის, რომ ლავაში არ ჩავარდეთ."},
"level13FailureMessage":function(d){return "ჭუჭყიან გზაზე განალაგეთ \"რელსები\" თქვენი კარიდან რუკის კიდემდე."},
"level1FailureMessage":function(d){return "ცხვართან მისასვლელად უნდა გამოიყენოთ ბრძანებები."},
"level1TooFewBlocksMessage":function(d){return "სცადეთ ცხვართან მისასვლელად მეტი ბრძანების გამოყენება."},
"level2FailureMessage":function(d){return "ხის მოსაჭრელად, მიუახლოვდით მის ტანს და გამოიყენეთ ბრძანება \"ბლოკის განადგურება\"."},
"level2TooFewBlocksMessage":function(d){return "სცადეთ მეტი ბრძანება გამოიყენოთ ხის მოსაჭრელად. მიუახლოვდით ხის ტანს და გამოიყენეთ ბრძანება \"ბლოკის განადგურება\"."},
"level3FailureMessage":function(d){return "ცხვრის მატყლის შესაგროვებლად მიდით თითოეულ ცხვართან და გამოიყენეთ ბრძანება \"გაკრეჭა\". არ დაგავწყდეთ გამოიყენოთ მობრუნების ბრძანება ყოველ ცხვართან."},
"level3TooFewBlocksMessage":function(d){return "სცადეთ გამოიენოთ მეტი ბრძანება ორივე ცხვრის მატყლის შესაგროვებლად. მიდით თითოეულ ცხვართან და გამოიყენეთ ბრძანება \"გაკრეჭა\"."},
"level4FailureMessage":function(d){return "ამ ხის მორებიდან ყოველთან უნდა გამოიყენოთ ბლოკი \"განადგურება\"."},
"level5FailureMessage":function(d){return "კედლის ასაშენებლად თქვენი ბლოკები ნახაზის გასწვრივ უნდა განალაგოთ. ვარდისფერი ბრძანება \"გამეორება\" გაუშვებს მასში მოთავსებულ ბლოკებს, ამ შემთხვევაში \"ბლოკის დადებას\" და \"წინ გადაადგილებას\"."},
"level6FailureMessage":function(d){return "დაალაგეთ ბლოკები სახლის მონახაზზე და დაასრულეთ თავსატეხი."},
"level7FailureMessage":function(d){return "გამოიყენეთ ბრძანება \"დარგვა\" და დათასეთ მოსავალი შავი დამუშავებული მიწის ყოველ ნაკვეთზე."},
"level8FailureMessage":function(d){return "თუ ქვეწარმავალს შეეხებით, ის აფეთქდება. ჩუმად უნდა შეიპაროთ თქვენს სახლში."},
"level9FailureMessage":function(d){return "არ დაგავიწყდეთ გზის გასანათებლად მინიმუმ ორი ჩირაღდანი განალაგოთ და ასევე სულ მცირე 2 ნახშირი მოიპოვოთ."},
"maskMode":function(d){return "ნიღბის რეჟიმი"},
"maskModeMasked":function(d){return "შენიღბული"},
"maskModeReplace":function(d){return "ჩანაცვლება"},
"minecraftBlock":function(d){return "ბლოკი"},
"minecraftNotConnected":function(d){return "მაინკრაფტი არაა დაკავშირებული"},
"miniBlockBricks":function(d){return "აგურები"},
"miniBlockBucketLava":function(d){return "ლავას სათლი"},
"miniBlockBucketWater":function(d){return "წყლის სათლი"},
"miniBlockCarrots":function(d){return "სტაფილო"},
"miniBlockCoal":function(d){return "ნახშირი"},
"miniBlockCobblestone":function(d){return "რიყის ქვა"},
"miniBlockDiamond":function(d){return "ბრილიანტი"},
"miniBlockDirt":function(d){return "ჭუჭყი"},
"miniBlockDirtCoarse":function(d){return "მსხვილი ჭუჭყი"},
"miniBlockEgg":function(d){return "კვერცხი"},
"miniBlockEmerald":function(d){return "ზურმუხტი"},
"miniBlockGravel":function(d){return "ხრეში"},
"miniBlockGunPowder":function(d){return "დენთი"},
"miniBlockIngotGold":function(d){return "ოქროს ზოდი"},
"miniBlockIngotIron":function(d){return "რკინის ზოდი"},
"miniBlockLapisLazuli":function(d){return "ლილაქვა"},
"miniBlockLogAcacia":function(d){return "აკაციის მორი"},
"miniBlockLogBirch":function(d){return "არყის მორი"},
"miniBlockLogJungle":function(d){return "ჯუნგლის ხის მორი"},
"miniBlockLogOak":function(d){return "მუხის მორი"},
"miniBlockLogSpruce":function(d){return "ნაძვის მორი"},
"miniBlockMilk":function(d){return "რძე"},
"miniBlockPlanksAcacia":function(d){return "აკაციის ფიცრები"},
"miniBlockPlanksBirch":function(d){return "არყის ხის ფიცრები"},
"miniBlockPlanksJungle":function(d){return "ჯუნგლის ხის ფიცრები"},
"miniBlockPlanksOak":function(d){return "მუხის ფიცრები"},
"miniBlockPlanksSpruce":function(d){return "ნაძვის ფიცრები"},
"miniBlockPoppy":function(d){return "ყაყაჩო"},
"miniBlockPotato":function(d){return "კარტოფილი"},
"miniBlockRedstoneDust":function(d){return "წითელი ქვის მტვერი"},
"miniBlockSand":function(d){return "ქვიშა"},
"miniBlockSandstone":function(d){return "ქვიშაქვა"},
"miniBlockSheep":function(d){return "ცხვარი"},
"miniBlockWheat":function(d){return "ხორბალი"},
"miniBlockWool":function(d){return "მატყლი"},
"nextLevelMsg":function(d){return "თავსატეხი #"+craft_locale.v(d,"puzzleNumber")+" დასრულებულია. გილოცავთ!"},
"oldBlockHandling":function(d){return "ძველი ბლოკი მდებარეობს"},
"oldBlockHandlingsDestroy":function(d){return "განადგურება"},
"oldBlockHandlingsKeep":function(d){return "შენახვა"},
"oldBlockHandlingsReplace":function(d){return "ჩანაცვლება"},
"onBehalfOf":function(d){return "ვინმეს სახელით"},
"playerSelectChooseCharacter":function(d){return "აირჩიეთ თქვენი პერსონაჟი."},
"playerSelectChooseSelectButton":function(d){return "არჩევა"},
"playerSelectLetsGetStarted":function(d){return "დავიწყოთ."},
"quantity":function(d){return "რაოდენობა"},
"reinfFeedbackMsg":function(d){return "დააჭირეთ ღილაკს \"განაგრძეთ თამაში\" და დაუბრუნდით თამაშს."},
"relative":function(d){return "ფარდობითი"},
"runAgent":function(d){return "გაუშვით აგენტი"},
"score":function(d){return "ქულა"},
"seconds":function(d){return "წამ(ებ)ი"},
"selectChooseButton":function(d){return "არჩევა"},
"soundTypeBump":function(d){return "დატაკება"},
"soundTypeChickenBawk":function(d){return "წიწილის კაკანი"},
"soundTypeChickenHurt":function(d){return "წიწილას სტკივა"},
"soundTypeCollectedBlock":function(d){return "ბლოკების შეგროვება"},
"soundTypeCowHuff":function(d){return "ძროხის ოხვრა"},
"soundTypeCowHurt":function(d){return "ძროხას სტკივა"},
"soundTypeCowMoo":function(d){return "ძროხის ხმა"},
"soundTypeCowMooLong":function(d){return "ძროხის ხმა"},
"soundTypeCreeperHiss":function(d){return "საშიში შიშინი"},
"soundTypeDig_wood1":function(d){return "ხის კუნძი"},
"soundTypeDoorOpen":function(d){return "კარის გაღება"},
"soundTypeExplode":function(d){return "აფეთქება"},
"soundTypeFailure":function(d){return "დონის წაგება"},
"soundTypeFall":function(d){return "დავარდნა"},
"soundTypeFizz":function(d){return "შიშინი"},
"soundTypeFuse":function(d){return "დნობა"},
"soundTypeIronGolemHit":function(d){return "რკინის გოლემის დარტყმა"},
"soundTypeMetalWhack":function(d){return "მეტალის გატეხვა"},
"soundTypeMinecart":function(d){return "ვაგონი"},
"soundTypePlaceBlock":function(d){return "ბლოკის დადგმა"},
"soundTypePunch":function(d){return "დარტყმა"},
"soundTypeSheepBaa":function(d){return "ცხვრის ხმა"},
"soundTypeStepFarmland":function(d){return "ნაბიჯი მდელოში"},
"soundTypeStepGrass":function(d){return "ნაბიჯი ბალახზე"},
"soundTypeStepGravel":function(d){return "ნაბიჯი ხრეშზე"},
"soundTypeStepStone":function(d){return "ნაბიჯი ქვაზე"},
"soundTypeStepWood":function(d){return "ნაბიჯი ხეზე"},
"soundTypeSuccess":function(d){return "დონის მოგება"},
"soundTypeZombieBrains":function(d){return "ზომბის კვნესა"},
"soundTypeZombieGroan":function(d){return "ზომბის ყვირილი"},
"soundTypeZombieHurt":function(d){return "ზომბის სტკივა"},
"target":function(d){return "მიზანი"},
"testModeAll":function(d){return "ყველა"},
"testModeMasked":function(d){return "შენიღბული"},
"tileData":function(d){return "გროვის მონაცემები"},
"timeDay":function(d){return "დღე"},
"timeLong":function(d){return "გრძელი"},
"timeMedium":function(d){return "საშუალო"},
"timeNight":function(d){return "ღამე"},
"timeRandom":function(d){return "შემთხვევითი"},
"timeSet":function(d){return "განსაზღვრეთ დრო, როგორც"},
"timeShort":function(d){return "მოკლე"},
"timeVeryLong":function(d){return "ძალიან გრძელი"},
"timeVeryShort":function(d){return "ძალიან მოკლე"},
"to":function(d){return "იმისთვის, რომ"},
"toSlotNumber":function(d){return "სლოტის რიცხვისკენ"},
"tooManyBlocksFail":function(d){return "თავსატეხი #"+craft_locale.v(d,"puzzleNumber")+" დასრულებულია. გილოცავთ! მისი დასრულება ასევე შესაძლებელია "+craft_locale.p(d,"numBlocks",0,"en",{"one":"1 block","other":craft_locale.n(d,"numBlocks")+" blocks"})+"."},
"turnRandom":function(d){return "შემთხვევითი მობრუნება"},
"useArrowKeys":function(d){return "თქვენ არ გჭირდებათ ბლოკების დამატება! იმოძრავეთ ისრების ღილაკების საშუალებით, ხოლო ნივთების ასაღებად დააჭირეთ ჰარის ღილაკს ან თითით დააჭირეთ სათამაშო დაფას."},
"weather":function(d){return "ამინდი"},
"weatherTypeClear":function(d){return "გასუფთავება"},
"weatherTypeRain":function(d){return "წვიმა"},
"weatherTypeThunder":function(d){return "მეხი"}};