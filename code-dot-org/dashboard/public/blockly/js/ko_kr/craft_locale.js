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
"absolute":function(d){return "절댓값"},
"agentGenericFailureMessage":function(d){return "계속 코딩을 연습하세요! 도움말이 필요하면 Agent를 활용하세요."},
"agentTooFewBlocksFailureMessage":function(d){return "블록을 한 번에 하나씩 추가하면서 Agent를 원하는 위치로 이동하는 방법을 찾아 보세요."},
"at":function(d){return "다음 장소에서 : "},
"agentDiamondPathCongrats":function(d){return "다이아몬드 광맥을 찾았어요! 지금까지 수집한 다이아몬드는 총 "+craft_locale.p(d,"count",0,"ko",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+"개입니다!"},
"blockActionAdd":function(d){return "추가"},
"blockActionAttack":function(d){return "공격"},
"blockActionClone":function(d){return "블록 복제"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "모으세요."},
"blockActionCollectAll":function(d){return "모두 수집"},
"blockActionDestroyEntity":function(d){return "사라짐"},
"blockActionDetect":function(d){return "감지"},
"blockActionDetectRedstone":function(d){return "레드스톤 감지"},
"blockActionDrop":function(d){return "떨어뜨리기"},
"blockActionDropAll":function(d){return "모두 버리기"},
"blockActionExecute":function(d){return "명령 실행"},
"blockActionExplodeEntity":function(d){return "폭발함"},
"blockActionFill":function(d){return "채우기"},
"blockActionFlashEntity":function(d){return "빛남"},
"blockActionGetItemCount":function(d){return "아이템 수 확인하기"},
"blockActionGetItemCountInSlotNumber":function(d){return "get item count in slot number"},
"blockActionGetItemDetail":function(d){return "아이템 정보 확인하기"},
"blockActionGetItemDetailInSlotNumber":function(d){return "get item detail in slot number"},
"blockActionGetItemSpace":function(d){return "아이템 공간 가져오기"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "get item space in slot number"},
"blockActionGive":function(d){return "주기"},
"blockActionInspect":function(d){return "검사"},
"blockActionInspectData":function(d){return "데이터 검사"},
"blockActionKill":function(d){return "대상 죽이기"},
"blockActionMove":function(d){return "움직이기"},
"blockActionMoveAway":function(d){return "멀어지기"},
"blockActionMoveForward":function(d){return "앞으로 이동"},
"blockActionMoveRandom":function(d){return "무작위 이동하기"},
"blockActionMoveTo":function(d){return "다가가기"},
"blockActionMoveToward":function(d){return "한 걸음 다가가기"},
"blockActionPlaySound":function(d){return "플레이 소리"},
"blockActionRepeat":function(d){return "반복"},
"blockActionRepeatRandom":function(d){return "무작위 반복하기"},
"blockActionSetBlock":function(d){return "set block to"},
"blockActionSpawn":function(d){return "생성"},
"blockActionSummon":function(d){return "불러오기"},
"blockActionTeleport":function(d){return "대상 순간이동"},
"blockActionTeleportToPlayer":function(d){return "플레이어에게로 순간이동"},
"blockActionTestForBlock":function(d){return "tests whether a block type"},
"blockActionTestForBlocks":function(d){return "tests whether the pattern between"},
"blockActionToScore":function(d){return "득점"},
"blockActionTransfer":function(d){return "전송"},
"blockActionWait":function(d){return "기다리기"},
"blockActionWith":function(d){return "와(과)"},
"blockData":function(d){return "블록 데이터"},
"blockDestroyBlock":function(d){return "블록 파괴하기"},
"blockIf":function(d){return "만약"},
"blockIfLavaAhead":function(d){return "만약 용암이 앞에 있으면"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "움직이기"},
"blockMoveBackward":function(d){return "뒤로 이동"},
"blockMoveForward":function(d){return "앞으로 이동"},
"blockPlace":function(d){return "놓기:"},
"blockPlaceTorch":function(d){return "횃불 놓기"},
"blockPlaceXAheadAhead":function(d){return "정면"},
"blockPlaceXAheadPlace":function(d){return "놓기:"},
"blockPlaceXPlace":function(d){return "놓기:"},
"blockPlantCrop":function(d){return "작물 심기"},
"blockShear":function(d){return "털 깎기"},
"blockTill":function(d){return "경작"},
"blockTillSoil":function(d){return "흙 고르기"},
"blockTurn":function(d){return "회전"},
"blockTurnLeft":function(d){return "왼쪽으로 회전"},
"blockTurnRight":function(d){return "오른쪽으로 회전"},
"blockType":function(d){return "블록 유형:"},
"blockTypeBedrock":function(d){return "기반암"},
"blockTypeBricks":function(d){return "벽돌"},
"blockTypeClay":function(d){return "점토"},
"blockTypeClayHardened":function(d){return "굳은 점토"},
"blockTypeCobblestone":function(d){return "조약돌"},
"blockTypeDirt":function(d){return "흙"},
"blockTypeDirtCoarse":function(d){return "거친 흙"},
"blockTypeDoorIron":function(d){return "철문"},
"blockTypeEmpty":function(d){return "선택되지 않음"},
"blockTypeFarmlandWet":function(d){return "농지"},
"blockTypeGlass":function(d){return "유리"},
"blockTypeGlowstone":function(d){return "발광석"},
"blockTypeGrass":function(d){return "잔디"},
"blockTypeGravel":function(d){return "자갈"},
"blockTypeLava":function(d){return "용암"},
"blockTypeLogAcacia":function(d){return "잘린 아카시아나무"},
"blockTypeLogBirch":function(d){return "잘린 자작나무"},
"blockTypeLogJungle":function(d){return "잘린 정글나무"},
"blockTypeLogOak":function(d){return "잘린 참나무"},
"blockTypeLogSpruce":function(d){return "잘린 전나무"},
"blockTypeOreCoal":function(d){return "석탄 광석"},
"blockTypeOreDiamond":function(d){return "다이아몬드 광석"},
"blockTypeOreEmerald":function(d){return "에메랄드 광석"},
"blockTypeOreGold":function(d){return "황금 광석"},
"blockTypeOreIron":function(d){return "철광석"},
"blockTypeOreLapis":function(d){return "청금석 광석"},
"blockTypeOreRedstone":function(d){return "레드스톤 광석"},
"blockTypePlanksAcacia":function(d){return "아카시아나무 목재"},
"blockTypePlanksBirch":function(d){return "자작나무 목재"},
"blockTypePlanksJungle":function(d){return "정글나무 목재"},
"blockTypePlanksOak":function(d){return "참나무 목재"},
"blockTypePlanksSpruce":function(d){return "전나무 목재"},
"blockTypePressurePlateUp":function(d){return "압력판"},
"blockTypeRail":function(d){return "레일"},
"blockTypeRailsRedstoneTorch":function(d){return "레드스톤 횃불"},
"blockTypeRedstoneWire":function(d){return "레드스톤 와이어"},
"blockTypeSand":function(d){return "모래"},
"blockTypeSandstone":function(d){return "사암"},
"blockTypeStone":function(d){return "돌"},
"blockTypeTnt":function(d){return "폭탄"},
"blockTypeTree":function(d){return "나무"},
"blockTypeWater":function(d){return "물"},
"blockTypeWool":function(d){return "양털"},
"blockTypeWoolBlue":function(d){return "푸른색 양털"},
"blockTypeWoolMagenta":function(d){return "마젠타색 양털"},
"blockTypeWoolOrange":function(d){return "오렌지색 양털"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "정면"},
"blockWhileXAheadDo":function(d){return "실행"},
"blockWhileXAheadWhile":function(d){return "반복(~인 동안):"},
"cancel":function(d){return "취소"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "움직이기"},
"cloneModeNormal":function(d){return "보통"},
"connectToCodeConnection":function(d){return "Minecraft: Education Edition에서 프로젝트를 실행하려면 코드 커넥션 소프트웨어를 사용하세요."},
"destination":function(d){return "destination"},
"directionBack":function(d){return "뒤"},
"directionDown":function(d){return "아래로"},
"directionForward":function(d){return "앞"},
"directionLeft":function(d){return "왼쪽으로"},
"directionMiddle":function(d){return "중앙"},
"directionRight":function(d){return "오른쪽으로"},
"directionUp":function(d){return "위로"},
"downloadButton":function(d){return "다운로드"},
"entityType":function(d){return "엔티티 유형:"},
"entityTypeChicken":function(d){return "닭"},
"entityTypeCow":function(d){return "소"},
"entityTypeCreeper":function(d){return "크리퍼"},
"entityTypeIronGolem":function(d){return "철 골렘"},
"entityTypePlayer":function(d){return "플레이어"},
"entityTypeSheep":function(d){return "양"},
"entityTypeZombie":function(d){return "좀비"},
"eventTypeWhenAttacked":function(d){return "공격받을 때"},
"eventTypeWhenDay":function(d){return "낮일 때"},
"eventTypeWhenNight":function(d){return "밤일 때"},
"eventTypeWhenRun":function(d){return "실행하면"},
"eventTypeWhenSpawned":function(d){return "생성 시"},
"eventTypeWhenTouched":function(d){return "터치 시"},
"eventTypeWhenUsed":function(d){return "사용 시"},
"forever":function(d){return "영원히"},
"from":function(d){return "시작"},
"generatedCodeDescription":function(d){return "이 퍼즐에서 블록을 드래그하여 놓음으로써, 자바스크립트라는 컴퓨터 언어가 생성되었습니다. 이 코드는 컴퓨터에게 화면에 무엇을 보여줄지 알려주는 코드입니다. Minecraft에서 하고 보는 모든 것은 이러한 컴퓨터 코드로 구성되어 있습니다."},
"getdataof":function(d){return "데이터 확인:"},
"getnameof":function(d){return "이름 확인:"},
"houseSelectChooseFloorPlan":function(d){return "집 설계도를 선택하세요."},
"houseSelectEasy":function(d){return "쉬움"},
"houseSelectHard":function(d){return "어려움"},
"houseSelectLetsBuild":function(d){return "집을 지어보죠."},
"houseSelectMedium":function(d){return "보통"},
"import":function(d){return "가져오기"},
"importShareLinkBody":function(d){return "Hour of Code 공유 링크를 여기에 입력하고 \"가져오기\"를 클릭해 복사한 코드를 Minecraft로 가져 오세요."},
"importShareLinkHeader":function(d){return "공유 코드 가져오기"},
"inSlotNumber":function(d){return "슬롯 번호:"},
"itemTypeBlock":function(d){return "블록"},
"itemTypeDecoration":function(d){return "장식물"},
"itemTypeMiscellaneous":function(d){return "기타"},
"itemTypeTool":function(d){return "도구"},
"items":function(d){return "아이템"},
"itemsOfBlockType":function(d){return "블록 유형별 아이템:"},
"level10FailureMessage":function(d){return "용암을 덮고 위를 지나간 뒤, 건너편에 있는 철 블록을 캐세요."},
"level11FailureMessage":function(d){return "정면에 용암이 있으면 조약돌을 용암 위에 놓으세요. 그러면 이 줄에 있는 자원을 안전하게 캘 수 있습니다."},
"level12FailureMessage":function(d){return "3개의 레드스톤을 캐세요. 집을 지으면서 배운 것과 '만약' 선언을 사용하여 용암에 떨어지지 않을 수 있습니다."},
"level13FailureMessage":function(d){return "집 입구에서부터 지도 가장자리까지 '레일'을 흙 위에 놓으세요."},
"level1FailureMessage":function(d){return "양을 걷게 하려면 명령어를 사용해야 합니다."},
"level1TooFewBlocksMessage":function(d){return "양을 걷게 하기 위해 명령어를 더 사용하세요."},
"level2FailureMessage":function(d){return "나무를 자르려면 나무 둥치로 다가가 '블록 파괴하기'를 사용하세요."},
"level2TooFewBlocksMessage":function(d){return "나무를 자르려면 명령어를 더 사용하세요. 나무 둥치로 다가가 '블록 파괴하기'를 사용하세요."},
"level3FailureMessage":function(d){return "두 마리의 양에서 양털을 얻으려면 각 양에게 다가가 '털 깎기' 명령어를 사용하세요. 양에게 다가가려면 회전 명령어를 사용해야 합니다."},
"level3TooFewBlocksMessage":function(d){return "양에게서 양털을 얻으려면 명령어를 더 사용하세요. 각 양에게 다가가 '털 깎기' 명령어를 사용하세요."},
"level4FailureMessage":function(d){return "3개의 나무 둥치로 다가가 '블록 파괴하기' 명령어를 사용해야 합니다."},
"level5FailureMessage":function(d){return "벽을 지으려면 흙 위에 블록을 놓아야 합니다. 분홍색의 '반복하기' 명령어를 '블록 놓기'와 '앞으로 이동하기' 명령어 사이에 넣고 실행하세요."},
"level6FailureMessage":function(d){return "집 주변에 있는 흙 위에 블록을 놓고 퍼즐을 완료하세요."},
"level7FailureMessage":function(d){return "어둡게 골라진 흙 위에 '심기' 명령어를 사용하여 작물을 심으세요."},
"level8FailureMessage":function(d){return "크리퍼를 건드리면 크리퍼가 폭발합니다. 크리퍼를 피해 집으로 들어가세요."},
"level9FailureMessage":function(d){return "최소 2개의 횃불을 설치하여 길을 밝히고, 2개의 석탄을 캐세요."},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "표시"},
"maskModeReplace":function(d){return "바꾸기"},
"minecraftBlock":function(d){return "블록"},
"minecraftNotConnected":function(d){return "Minecraft가 연결되지 않았습니다"},
"miniBlockBricks":function(d){return "벽돌"},
"miniBlockBucketLava":function(d){return "용암 양동이"},
"miniBlockBucketWater":function(d){return "물 양동이"},
"miniBlockCarrots":function(d){return "당근"},
"miniBlockCoal":function(d){return "석탄"},
"miniBlockCobblestone":function(d){return "조약돌"},
"miniBlockDiamond":function(d){return "다이아몬드"},
"miniBlockDirt":function(d){return "흙"},
"miniBlockDirtCoarse":function(d){return "거친 흙"},
"miniBlockEgg":function(d){return "달걀"},
"miniBlockEmerald":function(d){return "에메랄드"},
"miniBlockGravel":function(d){return "자갈"},
"miniBlockGunPowder":function(d){return "화약"},
"miniBlockIngotGold":function(d){return "금괴"},
"miniBlockIngotIron":function(d){return "철괴"},
"miniBlockLapisLazuli":function(d){return "청금석"},
"miniBlockLogAcacia":function(d){return "잘린 아카시아나무"},
"miniBlockLogBirch":function(d){return "잘린 자작나무"},
"miniBlockLogJungle":function(d){return "잘린 정글나무"},
"miniBlockLogOak":function(d){return "잘린 참나무"},
"miniBlockLogSpruce":function(d){return "잘린 전나무"},
"miniBlockMilk":function(d){return "우유"},
"miniBlockPlanksAcacia":function(d){return "아카시아나무 목재"},
"miniBlockPlanksBirch":function(d){return "자작나무 목재"},
"miniBlockPlanksJungle":function(d){return "정글나무 목재"},
"miniBlockPlanksOak":function(d){return "참나무 목재"},
"miniBlockPlanksSpruce":function(d){return "전나무 목재"},
"miniBlockPoppy":function(d){return "양귀비"},
"miniBlockPotato":function(d){return "감자"},
"miniBlockRedstoneDust":function(d){return "레드스톤 가루"},
"miniBlockSand":function(d){return "모래"},
"miniBlockSandstone":function(d){return "사암"},
"miniBlockSheep":function(d){return "양"},
"miniBlockWheat":function(d){return "밀"},
"miniBlockWool":function(d){return "양털"},
"nextLevelMsg":function(d){return craft_locale.v(d,"puzzleNumber")+"번 퍼즐을 완료했습니다. 축하합니다!"},
"oldBlockHandling":function(d){return "old block at"},
"oldBlockHandlingsDestroy":function(d){return "제거"},
"oldBlockHandlingsKeep":function(d){return "유지"},
"oldBlockHandlingsReplace":function(d){return "바꾸기"},
"onBehalfOf":function(d){return "대신"},
"playerSelectChooseCharacter":function(d){return "캐릭터를 선택하세요."},
"playerSelectChooseSelectButton":function(d){return "선택"},
"playerSelectLetsGetStarted":function(d){return "이제 시작해보죠."},
"quantity":function(d){return "수량"},
"reinfFeedbackMsg":function(d){return "'계속 플레이하기'를 눌러 게임을 계속 플레이하세요."},
"relative":function(d){return "상대적인"},
"runAgent":function(d){return "Agent 실행"},
"score":function(d){return "점수"},
"seconds":function(d){return "초"},
"selectChooseButton":function(d){return "선택"},
"soundTypeBump":function(d){return "부딪힌 소리"},
"soundTypeChickenBawk":function(d){return "보통 닭 소리"},
"soundTypeChickenHurt":function(d){return "다친 닭 소리"},
"soundTypeCollectedBlock":function(d){return "블록 집기"},
"soundTypeCowHuff":function(d){return "보통 소 소리"},
"soundTypeCowHurt":function(d){return "다친 소 소리"},
"soundTypeCowMoo":function(d){return "소 음메 소리"},
"soundTypeCowMooLong":function(d){return "소 음메에 소리"},
"soundTypeCreeperHiss":function(d){return "크리퍼 소리"},
"soundTypeDig_wood1":function(d){return "나무 부러지는 소리"},
"soundTypeDoorOpen":function(d){return "문 열리는 소리"},
"soundTypeExplode":function(d){return "폭발함"},
"soundTypeFailure":function(d){return "레벨 실패음"},
"soundTypeFall":function(d){return "추락음"},
"soundTypeFizz":function(d){return "쉬익 소리"},
"soundTypeFuse":function(d){return "융합음"},
"soundTypeIronGolemHit":function(d){return "철 골렘 공격 소리"},
"soundTypeMetalWhack":function(d){return "금속음"},
"soundTypeMinecart":function(d){return "광물 수레 소리"},
"soundTypePlaceBlock":function(d){return "블록 설치음"},
"soundTypePunch":function(d){return "타격 소리"},
"soundTypeSheepBaa":function(d){return "양 소리"},
"soundTypeStepFarmland":function(d){return "농지 발소리"},
"soundTypeStepGrass":function(d){return "잔디 발소리"},
"soundTypeStepGravel":function(d){return "자갈 발소리"},
"soundTypeStepStone":function(d){return "돌 발소리"},
"soundTypeStepWood":function(d){return "나무 발소리"},
"soundTypeSuccess":function(d){return "레벨 성공음"},
"soundTypeZombieBrains":function(d){return "좀비 앓는 소리"},
"soundTypeZombieGroan":function(d){return "좀비 으르렁 소리"},
"soundTypeZombieHurt":function(d){return "좀비 다친 소리"},
"target":function(d){return "대상"},
"testModeAll":function(d){return "모두"},
"testModeMasked":function(d){return "표시"},
"tileData":function(d){return "타일 데이터"},
"timeDay":function(d){return "일"},
"timeLong":function(d){return "긺"},
"timeMedium":function(d){return "보통"},
"timeNight":function(d){return "밤"},
"timeRandom":function(d){return "랜덤 번째 위치"},
"timeSet":function(d){return "시간 설정:"},
"timeShort":function(d){return "짧음"},
"timeVeryLong":function(d){return "매우 긺"},
"timeVeryShort":function(d){return "매우 짧음"},
"to":function(d){return "함수"},
"toSlotNumber":function(d){return "대상 슬롯 번호:"},
"tooManyBlocksFail":function(d){return craft_locale.v(d,"puzzleNumber")+"번 퍼즐을 완료했습니다. 축하합니다! 이 퍼즐은 "+craft_locale.p(d,"numBlocks",0,"ko",{"one":"블록 1개","other":"블록 "+craft_locale.n(d,"numBlocks")+"개"})+"(으)로도 풀 수 있습니다."},
"turnRandom":function(d){return "무작위 회전"},
"useArrowKeys":function(d){return "블록을 추가할 필요가 없어요! 화살표 키로 이동하고, 스페이스 바나 게임판을 터치하여 아이템을 사용할 수 있습니다."},
"weather":function(d){return "날씨"},
"weatherTypeClear":function(d){return "맑음"},
"weatherTypeRain":function(d){return "비"},
"weatherTypeThunder":function(d){return "천둥번개"}};