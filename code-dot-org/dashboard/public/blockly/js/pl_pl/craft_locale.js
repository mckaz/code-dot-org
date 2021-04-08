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
"absolute":function(d){return "wartość bezwzględna"},
"agentGenericFailureMessage":function(d){return "Koduj dalej! Pamiętaj, żeby korzystać z pomocy Agenta."},
"agentTooFewBlocksFailureMessage":function(d){return "Spróbuj dodawać tylko jeden blok na raz, aby przenieść Agenta na właściwe miejsce."},
"at":function(d){return "na/w/o"},
"agentDiamondPathCongrats":function(d){return "Gratulacje, znalazłeś diamentową ścieżkę! Jak dotąd zebrałeś "+craft_locale.p(d,"count",0,"pl",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+"!"},
"blockActionAdd":function(d){return "dodaj"},
"blockActionAttack":function(d){return "atakuj"},
"blockActionClone":function(d){return "sklonuj bloki"},
"blockActionCloneFiltered":function(d){return "tylko klonuj"},
"blockActionCollect":function(d){return "zbierz"},
"blockActionCollectAll":function(d){return "zbierz wszystkie"},
"blockActionDestroyEntity":function(d){return "zniknij"},
"blockActionDetect":function(d){return "wykryj"},
"blockActionDetectRedstone":function(d){return "wykryj czerwony kamień"},
"blockActionDrop":function(d){return "upuść"},
"blockActionDropAll":function(d){return "upuść wszystko"},
"blockActionExecute":function(d){return "wykonaj komendę"},
"blockActionExplodeEntity":function(d){return "eksploduj"},
"blockActionFill":function(d){return "wypełnij z"},
"blockActionFlashEntity":function(d){return "błyśnij"},
"blockActionGetItemCount":function(d){return "pobierz liczbę elementów"},
"blockActionGetItemCountInSlotNumber":function(d){return "pobierz liczbę elementów w miejscu numer"},
"blockActionGetItemDetail":function(d){return "pobierz szczegóły elementu"},
"blockActionGetItemDetailInSlotNumber":function(d){return "pobierz szczegóły elementu w miejscu numer"},
"blockActionGetItemSpace":function(d){return "pobierz przestrzeń elementu"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "pobierz przestrzeń elementu w miejscu numer"},
"blockActionGive":function(d){return "daj"},
"blockActionInspect":function(d){return "sprawdź"},
"blockActionInspectData":function(d){return "sprawdź dane"},
"blockActionKill":function(d){return "zabij cel"},
"blockActionMove":function(d){return "idź"},
"blockActionMoveAway":function(d){return "odejdź od"},
"blockActionMoveForward":function(d){return "idź do przodu"},
"blockActionMoveRandom":function(d){return "idź losowe"},
"blockActionMoveTo":function(d){return "idź do"},
"blockActionMoveToward":function(d){return "idź jeden krok w kierunku"},
"blockActionPlaySound":function(d){return "zagraj"},
"blockActionRepeat":function(d){return "powtórz"},
"blockActionRepeatRandom":function(d){return "powtórz losowo"},
"blockActionSetBlock":function(d){return "ustaw blok"},
"blockActionSpawn":function(d){return "stwórz"},
"blockActionSummon":function(d){return "wezwij"},
"blockActionTeleport":function(d){return "teleportuj cel"},
"blockActionTeleportToPlayer":function(d){return "teleportuj do gracza"},
"blockActionTestForBlock":function(d){return "sprawdza, czy to typ blokowy"},
"blockActionTestForBlocks":function(d){return "sprawdza, czy ścieżka jest pomiędzy"},
"blockActionToScore":function(d){return "zdobyć"},
"blockActionTransfer":function(d){return "przekaż"},
"blockActionWait":function(d){return "czekaj"},
"blockActionWith":function(d){return "z"},
"blockData":function(d){return "dane bloku"},
"blockDestroyBlock":function(d){return "zniszcz blok"},
"blockIf":function(d){return "jeśli"},
"blockIfLavaAhead":function(d){return "jeżeli z przodu jest lawa"},
"blockIs":function(d){return "jest"},
"blockMove":function(d){return "idź"},
"blockMoveBackward":function(d){return "idź do tyłu"},
"blockMoveForward":function(d){return "idź do przodu"},
"blockPlace":function(d){return "umieść"},
"blockPlaceTorch":function(d){return "umieść pochodnię"},
"blockPlaceXAheadAhead":function(d){return "z przodu jest"},
"blockPlaceXAheadPlace":function(d){return "umieść"},
"blockPlaceXPlace":function(d){return "umieść"},
"blockPlantCrop":function(d){return "sadź rośliny"},
"blockShear":function(d){return "strzyż"},
"blockTill":function(d){return "do"},
"blockTillSoil":function(d){return "uprawiaj ziemię"},
"blockTurn":function(d){return "obrót"},
"blockTurnLeft":function(d){return "skręć w lewo"},
"blockTurnRight":function(d){return "skręć w prawo"},
"blockType":function(d){return "typ bloku"},
"blockTypeBedrock":function(d){return "skała"},
"blockTypeBricks":function(d){return "cegły"},
"blockTypeClay":function(d){return "glina"},
"blockTypeClayHardened":function(d){return "wypalona glina"},
"blockTypeCobblestone":function(d){return "bruk"},
"blockTypeDirt":function(d){return "ziemia"},
"blockTypeDirtCoarse":function(d){return "jałowa ziemia"},
"blockTypeDoorIron":function(d){return "żelazne drzwi"},
"blockTypeEmpty":function(d){return "pusto"},
"blockTypeFarmlandWet":function(d){return "tereny uprawne"},
"blockTypeGlass":function(d){return "szkło"},
"blockTypeGlowstone":function(d){return "żar"},
"blockTypeGrass":function(d){return "trawa"},
"blockTypeGravel":function(d){return "żwir"},
"blockTypeLava":function(d){return "lawa"},
"blockTypeLogAcacia":function(d){return "bal akacji"},
"blockTypeLogBirch":function(d){return "bal brzeziny"},
"blockTypeLogJungle":function(d){return "bal drewna egzotycznego"},
"blockTypeLogOak":function(d){return "bal dębu"},
"blockTypeLogSpruce":function(d){return "bal świerku"},
"blockTypeOreCoal":function(d){return "ruda węgla"},
"blockTypeOreDiamond":function(d){return "ruda diamentu"},
"blockTypeOreEmerald":function(d){return "ruda szmaragdu"},
"blockTypeOreGold":function(d){return "ruda złota"},
"blockTypeOreIron":function(d){return "ruda żelaza"},
"blockTypeOreLapis":function(d){return "ruda lazurytu"},
"blockTypeOreRedstone":function(d){return "ruda czerwonego kamienia"},
"blockTypePlanksAcacia":function(d){return "deski akacjowe"},
"blockTypePlanksBirch":function(d){return "deski brzozowe"},
"blockTypePlanksJungle":function(d){return "deski z drewna tropikalnego"},
"blockTypePlanksOak":function(d){return "deski dębowe"},
"blockTypePlanksSpruce":function(d){return "deski świerkowe"},
"blockTypePressurePlateUp":function(d){return "płyta naciskowa"},
"blockTypeRail":function(d){return "tory"},
"blockTypeRailsRedstoneTorch":function(d){return "pochodnia z czerwonego kamienia"},
"blockTypeRedstoneWire":function(d){return "linka z czerwonego kamienia"},
"blockTypeSand":function(d){return "piasek"},
"blockTypeSandstone":function(d){return "piaskowiec"},
"blockTypeStone":function(d){return "kamień"},
"blockTypeTnt":function(d){return "TNT"},
"blockTypeTree":function(d){return "drzewo"},
"blockTypeWater":function(d){return "woda"},
"blockTypeWool":function(d){return "wełna"},
"blockTypeWoolBlue":function(d){return "niebieska wełna"},
"blockTypeWoolMagenta":function(d){return "magenta wełna"},
"blockTypeWoolOrange":function(d){return "pomarańczowa wełna"},
"blockTypeWoolPink":function(d){return "różowa wełna"},
"blockTypeWoolRed":function(d){return "czerwona wełna"},
"blockTypeWoolYellow":function(d){return "żółta wełna"},
"blockWhileXAheadAhead":function(d){return "z przodu jest"},
"blockWhileXAheadDo":function(d){return "wykonaj"},
"blockWhileXAheadWhile":function(d){return "dopóki"},
"cancel":function(d){return "Anuluj"},
"cloneMode":function(d){return "tryb klonowania"},
"cloneModeForce":function(d){return "wymuś"},
"cloneModeMove":function(d){return "idź"},
"cloneModeNormal":function(d){return "normalny"},
"connectToCodeConnection":function(d){return "Aby uruchomić ten projekt w Minecraft: Education Edition, użyj proszę aplikacji Code Connection."},
"destination":function(d){return "cel"},
"directionBack":function(d){return "wstecz"},
"directionDown":function(d){return "do dołu"},
"directionForward":function(d){return "do przodu"},
"directionLeft":function(d){return "w lewo"},
"directionMiddle":function(d){return "środek"},
"directionRight":function(d){return "w prawo"},
"directionUp":function(d){return "do góry"},
"downloadButton":function(d){return "Pobierz"},
"entityType":function(d){return "typ obiektu"},
"entityTypeChicken":function(d){return "kurczak"},
"entityTypeCow":function(d){return "krowa"},
"entityTypeCreeper":function(d){return "pełzak"},
"entityTypeIronGolem":function(d){return "żelazny golem"},
"entityTypePlayer":function(d){return "gracz"},
"entityTypeSheep":function(d){return "owca"},
"entityTypeZombie":function(d){return "zombie"},
"eventTypeWhenAttacked":function(d){return "kiedy atakowany"},
"eventTypeWhenDay":function(d){return "kiedy dzień"},
"eventTypeWhenNight":function(d){return "kiedy noc"},
"eventTypeWhenRun":function(d){return "po uruchomieniu"},
"eventTypeWhenSpawned":function(d){return "gdy stworzony"},
"eventTypeWhenTouched":function(d){return "gdy dotknięty"},
"eventTypeWhenUsed":function(d){return "gdy użyty"},
"forever":function(d){return "na zawsze"},
"from":function(d){return "od"},
"generatedCodeDescription":function(d){return "Przeciągając i rozmieszczając bloki w tej układance, utworzyłeś zestaw instrukcji w języku programowania o nazwie JavaScript. Ten kod mówi komputerowi, co ma wyświetlać na ekranie. Wszystko, co widzisz i robisz w grze Minecraft, również zaczyna się od linijki takiego właśnie kodu."},
"getdataof":function(d){return "pobierz dane"},
"getnameof":function(d){return "pobierz nazwę"},
"houseSelectChooseFloorPlan":function(d){return "Wybierz plan kondygnacji swojego domu."},
"houseSelectEasy":function(d){return "Łatwy"},
"houseSelectHard":function(d){return "Trudny"},
"houseSelectLetsBuild":function(d){return "Zbudujmy dom"},
"houseSelectMedium":function(d){return "Średni"},
"import":function(d){return "Importuj"},
"importShareLinkBody":function(d){return "Wpisz tutaj swój link udostępniania Godziny Kodowania i kliknij \"Importuj\" by skopiować swój kod do Minecraftu"},
"importShareLinkHeader":function(d){return "Importuj link udostępniania"},
"inSlotNumber":function(d){return "w miejscu numer"},
"itemTypeBlock":function(d){return "blok"},
"itemTypeDecoration":function(d){return "dekoracja"},
"itemTypeMiscellaneous":function(d){return "różne"},
"itemTypeTool":function(d){return "narzędzie"},
"items":function(d){return "element(y)"},
"itemsOfBlockType":function(d){return "element(y) typu blok"},
"level10FailureMessage":function(d){return "Przykryj lawę, aby przez nią przejść, a następnie wydobądź dwa bloki żelaza po drugiej stronie."},
"level11FailureMessage":function(d){return "Zadbaj o ułożenie bruku, jeżeli z przodu jest lawa. W ten sposób bezpiecznie wydobędziesz zasoby z tego rzędu."},
"level12FailureMessage":function(d){return "Wydobądź 3 bloki czerwonego kamienia. W ten sposób połączysz to, czego nauczyłeś się podczas budowania domu stosując instrukcję \"jeśli\", aby nie wpaść do lawy."},
"level13FailureMessage":function(d){return "Umieść \"tory\" wzdłuż ziemnej drogi, prowadzącej od drzwi Twojego domu do krańca mapy."},
"level1FailureMessage":function(d){return "Musisz użyć poleceń, aby podejść do owcy."},
"level1TooFewBlocksMessage":function(d){return "Spróbuj użyć więcej poleceń, aby dotrzeć do owcy."},
"level2FailureMessage":function(d){return "Aby ściąć drzewo, podejdź do pnia i użyj polecenia \"zniszcz blok\"."},
"level2TooFewBlocksMessage":function(d){return "Spróbuj wykorzystać więcej poleceń, aby ściąć drzewo. Podejdź do pnia i użyj polecenia \"zniszcz blok\"."},
"level3FailureMessage":function(d){return "Aby zebrać wełnę z obydwu owiec, podejdź do każdej z nich i użyj polecenia \"nożyce\". Użyj poleceń \"skręć\", aby dotrzeć do owcy."},
"level3TooFewBlocksMessage":function(d){return "Spróbuj wykorzystać więcej poleceń, aby uzyskać wełnę z obu owiec. Podejdź do każdej z nich i użyj polecenia \"strzyż\"."},
"level4FailureMessage":function(d){return "Na każdym pniu musisz użyć polecenia \"zniszcz blok\"."},
"level5FailureMessage":function(d){return "Aby zbudować mur, umieść swoje bloki na obrysie ziemi. Różowe polecenie \"powtórz\" wykona polecenia, które zostaną w nim umieszczone, takie jak \"umieść blok\" lub \"idź do przodu\"."},
"level6FailureMessage":function(d){return "Aby dokończyć rozwiązanie tej łamigłówki, umieść bloki na ziemi na obrysie domu."},
"level7FailureMessage":function(d){return "Użyj polecenia \"zasadź\", aby posadzić rośliny na każdym kawałku ciemnej uprawnej ziemi."},
"level8FailureMessage":function(d){return "Jeśli dotkniesz pełzacza, eksploduje. Ostrożnie je omiń i wejdź do domu."},
"level9FailureMessage":function(d){return "Nie zapomnij umieścić co najmniej 2 pochodni, aby oświetlić sobie drogę, ORAZ wydobyć co najmniej 2 bloki węgla."},
"maskMode":function(d){return "tryb maskowania"},
"maskModeMasked":function(d){return "zamaskowany"},
"maskModeReplace":function(d){return "zastąp"},
"minecraftBlock":function(d){return "blok"},
"minecraftNotConnected":function(d){return "Minecraft nie podłączony"},
"miniBlockBricks":function(d){return "cegły"},
"miniBlockBucketLava":function(d){return "kubeł lawy"},
"miniBlockBucketWater":function(d){return "kubeł wody"},
"miniBlockCarrots":function(d){return "marchewki"},
"miniBlockCoal":function(d){return "węgiel"},
"miniBlockCobblestone":function(d){return "bruk"},
"miniBlockDiamond":function(d){return "diament"},
"miniBlockDirt":function(d){return "ziemia"},
"miniBlockDirtCoarse":function(d){return "jałowa ziemia"},
"miniBlockEgg":function(d){return "jajko"},
"miniBlockEmerald":function(d){return "szmaragd"},
"miniBlockGravel":function(d){return "żwir"},
"miniBlockGunPowder":function(d){return "proch strzelniczy"},
"miniBlockIngotGold":function(d){return "sztabka złota"},
"miniBlockIngotIron":function(d){return "sztabka żelaza"},
"miniBlockLapisLazuli":function(d){return "lazuryt"},
"miniBlockLogAcacia":function(d){return "bal akacji"},
"miniBlockLogBirch":function(d){return "bal brzeziny"},
"miniBlockLogJungle":function(d){return "bal drewna egzotycznego"},
"miniBlockLogOak":function(d){return "bal dębu"},
"miniBlockLogSpruce":function(d){return "bal świerku"},
"miniBlockMilk":function(d){return "mleko"},
"miniBlockPlanksAcacia":function(d){return "deski akacjowe"},
"miniBlockPlanksBirch":function(d){return "deski brzozowe"},
"miniBlockPlanksJungle":function(d){return "deski z drewna tropikalnego"},
"miniBlockPlanksOak":function(d){return "deski dębowe"},
"miniBlockPlanksSpruce":function(d){return "deski świerkowe"},
"miniBlockPoppy":function(d){return "mak"},
"miniBlockPotato":function(d){return "ziemniak"},
"miniBlockRedstoneDust":function(d){return "czerwony pył"},
"miniBlockSand":function(d){return "piasek"},
"miniBlockSandstone":function(d){return "piaskowiec"},
"miniBlockSheep":function(d){return "owca"},
"miniBlockWheat":function(d){return "pszenica"},
"miniBlockWool":function(d){return "wełna"},
"nextLevelMsg":function(d){return "Łamigłówka "+craft_locale.v(d,"puzzleNumber")+" ukończona. Gratulacje!"},
"oldBlockHandling":function(d){return "poprzedni blok na"},
"oldBlockHandlingsDestroy":function(d){return "zniszcz"},
"oldBlockHandlingsKeep":function(d){return "zachowaj"},
"oldBlockHandlingsReplace":function(d){return "zastąp"},
"onBehalfOf":function(d){return "w imieniu"},
"playerSelectChooseCharacter":function(d){return "Wybierz postać."},
"playerSelectChooseSelectButton":function(d){return "Wybierz"},
"playerSelectLetsGetStarted":function(d){return "Zacznijmy."},
"quantity":function(d){return "ilość"},
"reinfFeedbackMsg":function(d){return "Możesz nacisnąć \"Graj dalej\", aby wrócić do gry."},
"relative":function(d){return "relatywny"},
"runAgent":function(d){return "Uruchom Agenta"},
"score":function(d){return "Wynik"},
"seconds":function(d){return "sekunda(y)"},
"selectChooseButton":function(d){return "Wybierz"},
"soundTypeBump":function(d){return "bump"},
"soundTypeChickenBawk":function(d){return "gdakanie kurczaka"},
"soundTypeChickenHurt":function(d){return "zranienie kurczaka"},
"soundTypeCollectedBlock":function(d){return "zebrać bloki"},
"soundTypeCowHuff":function(d){return "sapanie krowy"},
"soundTypeCowHurt":function(d){return "zranienie krowy"},
"soundTypeCowMoo":function(d){return "muczenie krowy"},
"soundTypeCowMooLong":function(d){return "muczenie krowy"},
"soundTypeCreeperHiss":function(d){return "syk pełzaka"},
"soundTypeDig_wood1":function(d){return "łamanie drewna"},
"soundTypeDoorOpen":function(d){return "otwieranie drzwi"},
"soundTypeExplode":function(d){return "eksploduj"},
"soundTypeFailure":function(d){return "poziom nieudany"},
"soundTypeFall":function(d){return "upadek"},
"soundTypeFizz":function(d){return "syk"},
"soundTypeFuse":function(d){return "płonięcie lontu"},
"soundTypeIronGolemHit":function(d){return "uderzenie żelaznego golema"},
"soundTypeMetalWhack":function(d){return "uderzenie metalu"},
"soundTypeMinecart":function(d){return "wagonik"},
"soundTypePlaceBlock":function(d){return "położenie bloczka"},
"soundTypePunch":function(d){return "uderzenie"},
"soundTypeSheepBaa":function(d){return "beczenie owcy"},
"soundTypeStepFarmland":function(d){return "krok na słomie"},
"soundTypeStepGrass":function(d){return "krok na trawie"},
"soundTypeStepGravel":function(d){return "krok na żwirze"},
"soundTypeStepStone":function(d){return "krok kamienia"},
"soundTypeStepWood":function(d){return "krok na drewnie"},
"soundTypeSuccess":function(d){return "poziom zaliczony"},
"soundTypeZombieBrains":function(d){return "jęczenie zombie"},
"soundTypeZombieGroan":function(d){return "warczenie zombie"},
"soundTypeZombieHurt":function(d){return "zranienie zombie"},
"target":function(d){return "cel"},
"testModeAll":function(d){return "wszystkie"},
"testModeMasked":function(d){return "zamaskowany"},
"tileData":function(d){return "dane płytki"},
"timeDay":function(d){return "dzień"},
"timeLong":function(d){return "długi"},
"timeMedium":function(d){return "średni"},
"timeNight":function(d){return "noc"},
"timeRandom":function(d){return "losowy"},
"timeSet":function(d){return "ustaw czas na"},
"timeShort":function(d){return "krótki"},
"timeVeryLong":function(d){return "bardzo długi"},
"timeVeryShort":function(d){return "bardzo krótki"},
"to":function(d){return "o wartości"},
"toSlotNumber":function(d){return "do miejsca numer"},
"tooManyBlocksFail":function(d){return "Łamigłówka "+craft_locale.v(d,"puzzleNumber")+" ukończona. Gratulacje! Można ją też ukończyć z "+craft_locale.p(d,"numBlocks",0,"pl",{"one":"1 block","other":craft_locale.n(d,"numBlocks")+" blocks"})+"."},
"turnRandom":function(d){return "skręć losowo"},
"useArrowKeys":function(d){return "Nie musisz dodawać żadnych bloków! Poruszaj się strzałkami i naciśnij spację lub kliknij na planszy, aby użyć przedmiotów."},
"weather":function(d){return "pogoda"},
"weatherTypeClear":function(d){return "wyczyść"},
"weatherTypeRain":function(d){return "deszcz"},
"weatherTypeThunder":function(d){return "grzmot"}};