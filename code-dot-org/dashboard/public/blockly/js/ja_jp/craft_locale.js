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
"absolute":function(d){return "絶対値"},
"agentGenericFailureMessage":function(d){return "コードを書きつづけましょう! Agent が手伝ってくれることも忘れずに。"},
"agentTooFewBlocksFailureMessage":function(d){return "Agent が正しい場所にたどり着けるように、1 つのブロックを一度だけ追加してみましょう。"},
"at":function(d){return "で"},
"agentDiamondPathCongrats":function(d){return "なんと、ダイヤモンドの道を見つけました! これまでに "+craft_locale.p(d,"count",0,"ja",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" 個集めました!"},
"blockActionAdd":function(d){return "ふやす"},
"blockActionAttack":function(d){return "攻撃(こうげき)"},
"blockActionClone":function(d){return "ブロックをコピー"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "あつめる"},
"blockActionCollectAll":function(d){return "すべてを集める"},
"blockActionDestroyEntity":function(d){return "消える"},
"blockActionDetect":function(d){return "見つける"},
"blockActionDetectRedstone":function(d){return "レッドス トーンを見つける"},
"blockActionDrop":function(d){return "落とす"},
"blockActionDropAll":function(d){return "すべて落とす"},
"blockActionExecute":function(d){return "コマンドを実行"},
"blockActionExplodeEntity":function(d){return "爆発 (ばくはつ)"},
"blockActionFill":function(d){return "塗りつぶし"},
"blockActionFlashEntity":function(d){return "点滅 (てんめつ)"},
"blockActionGetItemCount":function(d){return "アイテム数を得る"},
"blockActionGetItemCountInSlotNumber":function(d){return "get item count in slot number"},
"blockActionGetItemDetail":function(d){return "アイテムの詳細を得る"},
"blockActionGetItemDetailInSlotNumber":function(d){return "get item detail in slot number"},
"blockActionGetItemSpace":function(d){return "アイテムのスペースを得る"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "get item space in slot number"},
"blockActionGive":function(d){return "与える"},
"blockActionInspect":function(d){return "調べる"},
"blockActionInspectData":function(d){return "データを調べる"},
"blockActionKill":function(d){return "ターゲットを倒す"},
"blockActionMove":function(d){return "移動 (いどう)"},
"blockActionMoveAway":function(d){return "離れる"},
"blockActionMoveForward":function(d){return "前に すすむ"},
"blockActionMoveRandom":function(d){return "ランダムに動く"},
"blockActionMoveTo":function(d){return "向かって動く"},
"blockActionMoveToward":function(d){return "向かって一歩動く"},
"blockActionPlaySound":function(d){return "音を再生"},
"blockActionRepeat":function(d){return "繰り返す (くりかえす)"},
"blockActionRepeatRandom":function(d){return "ランダムな回数繰り返す"},
"blockActionSetBlock":function(d){return "set block to"},
"blockActionSpawn":function(d){return "スポーンする"},
"blockActionSummon":function(d){return "呼び出す"},
"blockActionTeleport":function(d){return "テレポート"},
"blockActionTeleportToPlayer":function(d){return "プレイヤーにテレポート"},
"blockActionTestForBlock":function(d){return "tests whether a block type"},
"blockActionTestForBlocks":function(d){return "tests whether the pattern between"},
"blockActionToScore":function(d){return "スコアに"},
"blockActionTransfer":function(d){return "転送"},
"blockActionWait":function(d){return "待つ"},
"blockActionWith":function(d){return "付いてくる"},
"blockData":function(d){return "ブロック データ"},
"blockDestroyBlock":function(d){return "ブロック破壊 (はかい)"},
"blockIf":function(d){return "もし"},
"blockIfLavaAhead":function(d){return "もし溶岩が前にあるなら"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "うごかす"},
"blockMoveBackward":function(d){return "後ろに すすむ"},
"blockMoveForward":function(d){return "前に すすむ"},
"blockPlace":function(d){return "置く"},
"blockPlaceTorch":function(d){return "松明を置く"},
"blockPlaceXAheadAhead":function(d){return "その前に"},
"blockPlaceXAheadPlace":function(d){return "置く"},
"blockPlaceXPlace":function(d){return "置く"},
"blockPlantCrop":function(d){return "作物を植える"},
"blockShear":function(d){return "刈る"},
"blockTill":function(d){return "まで"},
"blockTillSoil":function(d){return "耕す"},
"blockTurn":function(d){return "ターン"},
"blockTurnLeft":function(d){return "左に まがる"},
"blockTurnRight":function(d){return "右に まがる"},
"blockType":function(d){return "ブロック タイプ"},
"blockTypeBedrock":function(d){return "岩盤"},
"blockTypeBricks":function(d){return "レンガ"},
"blockTypeClay":function(d){return "粘土"},
"blockTypeClayHardened":function(d){return "堅焼き粘土"},
"blockTypeCobblestone":function(d){return "丸石"},
"blockTypeDirt":function(d){return "土"},
"blockTypeDirtCoarse":function(d){return "荒れた土"},
"blockTypeDoorIron":function(d){return "鉄のドア"},
"blockTypeEmpty":function(d){return "未選択"},
"blockTypeFarmlandWet":function(d){return "農地"},
"blockTypeGlass":function(d){return "ガラス"},
"blockTypeGlowstone":function(d){return "グロウストーン"},
"blockTypeGrass":function(d){return "草"},
"blockTypeGravel":function(d){return "砂利"},
"blockTypeLava":function(d){return "溶岩"},
"blockTypeLogAcacia":function(d){return "アカシアの丸太"},
"blockTypeLogBirch":function(d){return "樺の丸太"},
"blockTypeLogJungle":function(d){return "ジャングルの木の丸太"},
"blockTypeLogOak":function(d){return "樫の丸太"},
"blockTypeLogSpruce":function(d){return "トウヒの木の丸太"},
"blockTypeOreCoal":function(d){return "石炭鉱石"},
"blockTypeOreDiamond":function(d){return "ダイヤモンド鉱石"},
"blockTypeOreEmerald":function(d){return "エメラルド鉱石"},
"blockTypeOreGold":function(d){return "金鉱石"},
"blockTypeOreIron":function(d){return "鉄鉱石"},
"blockTypeOreLapis":function(d){return "ラピス鉱石"},
"blockTypeOreRedstone":function(d){return "レッドストーン鉱石"},
"blockTypePlanksAcacia":function(d){return "アカシアの木の板"},
"blockTypePlanksBirch":function(d){return "樺の木の板"},
"blockTypePlanksJungle":function(d){return "ジャングルの木の板"},
"blockTypePlanksOak":function(d){return "樫の木の板"},
"blockTypePlanksSpruce":function(d){return "トウヒの木の板"},
"blockTypePressurePlateUp":function(d){return "重量感知板"},
"blockTypeRail":function(d){return "レール"},
"blockTypeRailsRedstoneTorch":function(d){return "レッドストーンのたいまつ"},
"blockTypeRedstoneWire":function(d){return "レッドストーンのワイヤー"},
"blockTypeSand":function(d){return "砂"},
"blockTypeSandstone":function(d){return "砂岩"},
"blockTypeStone":function(d){return "石"},
"blockTypeTnt":function(d){return "TNT 火薬"},
"blockTypeTree":function(d){return "木"},
"blockTypeWater":function(d){return "水"},
"blockTypeWool":function(d){return "羊（ひつじ）の毛（け）"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "その前に"},
"blockWhileXAheadDo":function(d){return "やること"},
"blockWhileXAheadWhile":function(d){return "以下の間"},
"cancel":function(d){return "キャンセル"},
"cloneMode":function(d){return "コピー モード"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "うごかす"},
"cloneModeNormal":function(d){return "ノーマル"},
"connectToCodeConnection":function(d){return "Minecraft 教育版でこのプロジェクトを実行するには、コード接続アプリケーションを使用してください。"},
"destination":function(d){return "destination"},
"directionBack":function(d){return "戻る"},
"directionDown":function(d){return "下 に"},
"directionForward":function(d){return "進む"},
"directionLeft":function(d){return "左 に"},
"directionMiddle":function(d){return "真ん中"},
"directionRight":function(d){return "右 に"},
"directionUp":function(d){return "上 に"},
"downloadButton":function(d){return "ダウンロード"},
"entityType":function(d){return "エンティティの種類"},
"entityTypeChicken":function(d){return "ニワトリ"},
"entityTypeCow":function(d){return "牛"},
"entityTypeCreeper":function(d){return "クリーパー"},
"entityTypeIronGolem":function(d){return "アイアン ゴーレム"},
"entityTypePlayer":function(d){return "プレイヤー"},
"entityTypeSheep":function(d){return "羊"},
"entityTypeZombie":function(d){return "ゾンビ"},
"eventTypeWhenAttacked":function(d){return "攻撃(こうげき)された時"},
"eventTypeWhenDay":function(d){return "日中になった時"},
"eventTypeWhenNight":function(d){return "夜になった時"},
"eventTypeWhenRun":function(d){return "実行(じっこう)した時"},
"eventTypeWhenSpawned":function(d){return "出現した時"},
"eventTypeWhenTouched":function(d){return "触(さわ)れられた時"},
"eventTypeWhenUsed":function(d){return "使用(しよう)された時"},
"forever":function(d){return "ずっとくりかえす"},
"from":function(d){return "差出人"},
"generatedCodeDescription":function(d){return "このパズル内にブロックをドラッグして配置することで、Javascript と呼ばれるコンピューター言語の命令セットを作成できます。このコードは画面上に何を表示するかについてコンピューターに指示を出します。Minecraft 内であなたが見て行っているものはすべて、このような複数の行のコンピューター コードによって開始されます。"},
"getdataof":function(d){return "データを取得する"},
"getnameof":function(d){return "名前を取得する"},
"houseSelectChooseFloorPlan":function(d){return "あなたの家の間取り図を選択しましょう。"},
"houseSelectEasy":function(d){return "イージー"},
"houseSelectHard":function(d){return "ハード"},
"houseSelectLetsBuild":function(d){return "家を建てましょう。"},
"houseSelectMedium":function(d){return "ノーマル"},
"import":function(d){return "インポート"},
"importShareLinkBody":function(d){return "Hour of Code の共有リンクをここに入力して \"インポート\" をクリックすると、あなたが作ったコードを Minecraft にコピーできます"},
"importShareLinkHeader":function(d){return "共有リンクをインポート"},
"inSlotNumber":function(d){return "スロット番号"},
"itemTypeBlock":function(d){return "ブロック"},
"itemTypeDecoration":function(d){return "飾り"},
"itemTypeMiscellaneous":function(d){return "その他"},
"itemTypeTool":function(d){return "ツール"},
"items":function(d){return "アイテム"},
"itemsOfBlockType":function(d){return "ブロック型のアイテム"},
"level10FailureMessage":function(d){return "歩いて渡れるように溶岩を覆いましょう。それから反対側にある鉄のブロックを 2 つ採掘しましょう。"},
"level11FailureMessage":function(d){return "前方に溶岩がある場合は前方に丸石を置きましょう。これで安全にこの列の資源を採掘できます。"},
"level12FailureMessage":function(d){return "必ずレッドストーン ブロックを 3 つ採掘しましょう。これで家を建てて学んだことと、「もし」文を使って溶岩内に落ちるのを避けることを組み合わせます。"},
"level13FailureMessage":function(d){return "ドアから地図の端まで続いている土の道に沿って「レール」を設置しましょう。"},
"level1FailureMessage":function(d){return "羊のところまで歩くにはコマンドを使う必要があります。"},
"level1TooFewBlocksMessage":function(d){return "羊のところまで歩くために、もっと多くのコマンドを使ってみましょう。"},
"level2FailureMessage":function(d){return "木を伐るには、幹のところまで歩いていって、「ブロック破壊」コマンドを使いましょう。"},
"level2TooFewBlocksMessage":function(d){return "木を伐るために、もっと多くのコマンドを使ってみましょう。幹のところまで歩いていって、「ブロック破壊」コマンドを使いましょう。"},
"level3FailureMessage":function(d){return "両方の羊からウールを集めるには、それぞれの側まで歩いていって「刈る」のコマンドを使用しましょう。羊のところまで移動するには、向きを変えるコマンドを使いましょう。"},
"level3TooFewBlocksMessage":function(d){return "両方の羊からウールを集めるために、もっと多くのコマンドを使用しましょう。それぞれの羊のところまで移動して、「刈る」コマンドを使用しましょう。"},
"level4FailureMessage":function(d){return "3 つの木の幹それぞれに対して「ブロック破壊」コマンドを使用する必要があります。"},
"level5FailureMessage":function(d){return "土の輪郭の上にブロックを配置して壁を作りましょう。ピンクの「繰り返す」コマンドは、「ブロック配置」と「前進」のように、その中に設置したコマンドを実行します。"},
"level6FailureMessage":function(d){return "家の輪郭の土の上にブロックを設置してパズルをクリアしましょう。"},
"level7FailureMessage":function(d){return "「植える」コマンドを使って、暗い色の耕された土の上のそれぞれに作物を設置しましょう。"},
"level8FailureMessage":function(d){return "クリーパーは触れると爆発します。回り道をして家に入りましょう。"},
"level9FailureMessage":function(d){return "少なくとも 2 つのたいまつを設置して道を照らし、少なくとも 2 つの石炭を採掘しましょう。"},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "マスク中"},
"maskModeReplace":function(d){return "置きかえる"},
"minecraftBlock":function(d){return "ブロック"},
"minecraftNotConnected":function(d){return "Minecraft が接続されていません"},
"miniBlockBricks":function(d){return "レンガ"},
"miniBlockBucketLava":function(d){return "溶岩バケツ"},
"miniBlockBucketWater":function(d){return "水バケツ"},
"miniBlockCarrots":function(d){return "ニンジン"},
"miniBlockCoal":function(d){return "石炭"},
"miniBlockCobblestone":function(d){return "丸石"},
"miniBlockDiamond":function(d){return "ダイヤモンド"},
"miniBlockDirt":function(d){return "土"},
"miniBlockDirtCoarse":function(d){return "荒れた土"},
"miniBlockEgg":function(d){return "タマゴ"},
"miniBlockEmerald":function(d){return "エメラルド"},
"miniBlockGravel":function(d){return "砂利"},
"miniBlockGunPowder":function(d){return "火薬"},
"miniBlockIngotGold":function(d){return "金の延べ棒"},
"miniBlockIngotIron":function(d){return "鉄の延べ棒"},
"miniBlockLapisLazuli":function(d){return "ラピスラズリ"},
"miniBlockLogAcacia":function(d){return "アカシアの丸太"},
"miniBlockLogBirch":function(d){return "樺の丸太"},
"miniBlockLogJungle":function(d){return "ジャングルの木の丸太"},
"miniBlockLogOak":function(d){return "樫の丸太"},
"miniBlockLogSpruce":function(d){return "トウヒの木の丸太"},
"miniBlockMilk":function(d){return "ミルク"},
"miniBlockPlanksAcacia":function(d){return "アカシアの木の板"},
"miniBlockPlanksBirch":function(d){return "樺の木の板"},
"miniBlockPlanksJungle":function(d){return "ジャングルの木の板"},
"miniBlockPlanksOak":function(d){return "樫の木の板"},
"miniBlockPlanksSpruce":function(d){return "トウヒの木の板"},
"miniBlockPoppy":function(d){return "ポピー"},
"miniBlockPotato":function(d){return "ジャガイモ"},
"miniBlockRedstoneDust":function(d){return "レッドストーンの粉"},
"miniBlockSand":function(d){return "砂"},
"miniBlockSandstone":function(d){return "砂岩"},
"miniBlockSheep":function(d){return "羊"},
"miniBlockWheat":function(d){return "小麦"},
"miniBlockWool":function(d){return "羊（ひつじ）の毛（け）"},
"nextLevelMsg":function(d){return "パズル "+craft_locale.v(d,"puzzleNumber")+" をクリアしました。おめでとうございます!"},
"oldBlockHandling":function(d){return "old block at"},
"oldBlockHandlingsDestroy":function(d){return "破壊する"},
"oldBlockHandlingsKeep":function(d){return "そのままにする"},
"oldBlockHandlingsReplace":function(d){return "置きかえる"},
"onBehalfOf":function(d){return "代わりに"},
"playerSelectChooseCharacter":function(d){return "キャラクターを選択しましょう。"},
"playerSelectChooseSelectButton":function(d){return "選択"},
"playerSelectLetsGetStarted":function(d){return "始めましょう。"},
"quantity":function(d){return "数量"},
"reinfFeedbackMsg":function(d){return "「プレイを続ける」を押してゲームプレイを続けましょう。"},
"relative":function(d){return "関係"},
"runAgent":function(d){return "Agent を実行"},
"score":function(d){return "スコア"},
"seconds":function(d){return "秒"},
"selectChooseButton":function(d){return "選択"},
"soundTypeBump":function(d){return "衝突"},
"soundTypeChickenBawk":function(d){return "ニワトリの鳴き声"},
"soundTypeChickenHurt":function(d){return "ニワトリが攻撃を受けた"},
"soundTypeCollectedBlock":function(d){return "ブロック回収"},
"soundTypeCowHuff":function(d){return "牛の鼻息"},
"soundTypeCowHurt":function(d){return "牛が攻撃を受けた"},
"soundTypeCowMoo":function(d){return "牛の鳴き声"},
"soundTypeCowMooLong":function(d){return "牛の長い鳴き声"},
"soundTypeCreeperHiss":function(d){return "クリーパーの音"},
"soundTypeDig_wood1":function(d){return "木の破壊"},
"soundTypeDoorOpen":function(d){return "ドア開閉"},
"soundTypeExplode":function(d){return "爆発 (ばくはつ)"},
"soundTypeFailure":function(d){return "レベル失敗"},
"soundTypeFall":function(d){return "落下"},
"soundTypeFizz":function(d){return "シューッ"},
"soundTypeFuse":function(d){return "フューズ"},
"soundTypeIronGolemHit":function(d){return "アイアン ゴーレム攻撃"},
"soundTypeMetalWhack":function(d){return "金属殴打"},
"soundTypeMinecart":function(d){return "トロッコ"},
"soundTypePlaceBlock":function(d){return "ブロック設置"},
"soundTypePunch":function(d){return "衝撃"},
"soundTypeSheepBaa":function(d){return "羊の鳴き声"},
"soundTypeStepFarmland":function(d){return "農地での足音"},
"soundTypeStepGrass":function(d){return "草の上の足音"},
"soundTypeStepGravel":function(d){return "砂利の上の足音"},
"soundTypeStepStone":function(d){return "石の上の足音"},
"soundTypeStepWood":function(d){return "木の上の足音"},
"soundTypeSuccess":function(d){return "レベル成功"},
"soundTypeZombieBrains":function(d){return "ゾンビのうめき声"},
"soundTypeZombieGroan":function(d){return "ゾンビのうなり声"},
"soundTypeZombieHurt":function(d){return "ゾンビ ダメージ"},
"target":function(d){return "ターゲット"},
"testModeAll":function(d){return "すべて"},
"testModeMasked":function(d){return "マスク中"},
"tileData":function(d){return "タイル データ"},
"timeDay":function(d){return "日"},
"timeLong":function(d){return "長い"},
"timeMedium":function(d){return "普通"},
"timeNight":function(d){return "よる"},
"timeRandom":function(d){return "ランダム"},
"timeSet":function(d){return "時間セット"},
"timeShort":function(d){return "短い"},
"timeVeryLong":function(d){return "とても長い"},
"timeVeryShort":function(d){return "とても短い"},
"to":function(d){return "は"},
"toSlotNumber":function(d){return "スロット番号"},
"tooManyBlocksFail":function(d){return "パズル "+craft_locale.v(d,"puzzleNumber")+" クリア。おめでとうございます! さらに、"+craft_locale.p(d,"numBlocks",0,"ja",{"one":"ブロック 1 個","other":"ブロック "+craft_locale.n(d,"numBlocks")+" 個"})+"でクリアすることも可能です。"},
"turnRandom":function(d){return "ランダムに向きを変える"},
"useArrowKeys":function(d){return "ブロックを追加する必要はありません!、矢印で移動し、アイテムを使うためにスペース バーを押すか、ゲーム ボードをタップします。"},
"weather":function(d){return "天気"},
"weatherTypeClear":function(d){return "クリア"},
"weatherTypeRain":function(d){return "雨"},
"weatherTypeThunder":function(d){return "雷"}};