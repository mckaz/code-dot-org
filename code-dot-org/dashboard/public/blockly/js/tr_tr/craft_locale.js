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
"agentGenericFailureMessage":function(d){return "Kodlamaya devam et! Yardımcı olması için Agent'ı kullanmayı unutma."},
"agentTooFewBlocksFailureMessage":function(d){return "Agent'ı doğru noktaya ulaştırmak için her defasında sadece bir blok eklemeye çalış."},
"at":function(d){return "de"},
"agentDiamondPathCongrats":function(d){return "Tebrikler, elmas yolu buldun! Şimdiye kadar "+craft_locale.p(d,"count",0,"tr",{"one":"1 elmas","other":craft_locale.n(d,"count")+" elmas"})+" topladın!"},
"blockActionAdd":function(d){return "ekle"},
"blockActionAttack":function(d){return "saldır"},
"blockActionClone":function(d){return "blokları kopyala"},
"blockActionCloneFiltered":function(d){return "sadece klonlar"},
"blockActionCollect":function(d){return "topla"},
"blockActionCollectAll":function(d){return "tümünü topla"},
"blockActionDestroyEntity":function(d){return "kaybol"},
"blockActionDetect":function(d){return "algıla"},
"blockActionDetectRedstone":function(d){return "kızıltaş algıla"},
"blockActionDrop":function(d){return "bırak"},
"blockActionDropAll":function(d){return "tümünü bırak"},
"blockActionExecute":function(d){return "komut çalıştır"},
"blockActionExplodeEntity":function(d){return "patlat"},
"blockActionFill":function(d){return "doldur"},
"blockActionFlashEntity":function(d){return "parlamak"},
"blockActionGetItemCount":function(d){return "öğe sayısını getir"},
"blockActionGetItemCountInSlotNumber":function(d){return "Öğe sayısını yuva (slot) numarasından elde et"},
"blockActionGetItemDetail":function(d){return "öğe detayını getir"},
"blockActionGetItemDetailInSlotNumber":function(d){return "nesne detaylarını yuva(slot) numarasından elde et"},
"blockActionGetItemSpace":function(d){return "öğe alanını getir"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "nesne boşluklarını slot(yuva) numaralarından elde et"},
"blockActionGive":function(d){return "ver"},
"blockActionInspect":function(d){return "incele"},
"blockActionInspectData":function(d){return "veri incele"},
"blockActionKill":function(d){return "hedefi öldür"},
"blockActionMove":function(d){return "hareket et"},
"blockActionMoveAway":function(d){return "bundan uzaklaş"},
"blockActionMoveForward":function(d){return "ilerle"},
"blockActionMoveRandom":function(d){return "rastgele hareket et"},
"blockActionMoveTo":function(d){return "buna doğru hareket et"},
"blockActionMoveToward":function(d){return "buna doğru bir adım at"},
"blockActionPlaySound":function(d){return "sesi çal"},
"blockActionRepeat":function(d){return "bu işlemleri"},
"blockActionRepeatRandom":function(d){return "rastgele tekrarla"},
"blockActionSetBlock":function(d){return "bloğu ayarla"},
"blockActionSpawn":function(d){return "oluştur"},
"blockActionSummon":function(d){return "çağır"},
"blockActionTeleport":function(d){return "hedefi ışınla"},
"blockActionTeleportToPlayer":function(d){return "oyuncuya ışınlan"},
"blockActionTestForBlock":function(d){return "bir blok tipi olup olmadığını test eder"},
"blockActionTestForBlocks":function(d){return "arasında desen olup olmadığını test eder"},
"blockActionToScore":function(d){return "puan almak için"},
"blockActionTransfer":function(d){return "aktar"},
"blockActionWait":function(d){return "bekle"},
"blockActionWith":function(d){return "İle"},
"blockData":function(d){return "blok verileri"},
"blockDestroyBlock":function(d){return "bloğu yok et"},
"blockIf":function(d){return "eğer"},
"blockIfLavaAhead":function(d){return "eğer ileride lav varsa"},
"blockIs":function(d){return "olduğunu"},
"blockMove":function(d){return "hareket et"},
"blockMoveBackward":function(d){return "geriye git"},
"blockMoveForward":function(d){return "ilerle"},
"blockPlace":function(d){return "yerleştir"},
"blockPlaceTorch":function(d){return "meşaleyi yerleştir"},
"blockPlaceXAheadAhead":function(d){return "ileri"},
"blockPlaceXAheadPlace":function(d){return "yerleştir"},
"blockPlaceXPlace":function(d){return "yerleştir"},
"blockPlantCrop":function(d){return "hasat et"},
"blockShear":function(d){return "kırk"},
"blockTill":function(d){return "sür"},
"blockTillSoil":function(d){return "tarla sür"},
"blockTurn":function(d){return "dön"},
"blockTurnLeft":function(d){return "sola dön"},
"blockTurnRight":function(d){return "sağa dön"},
"blockType":function(d){return "blok tipi"},
"blockTypeBedrock":function(d){return "ana kaya"},
"blockTypeBricks":function(d){return "tuğlalar"},
"blockTypeClay":function(d){return "kil"},
"blockTypeClayHardened":function(d){return "sert kil"},
"blockTypeCobblestone":function(d){return "kırıktaş"},
"blockTypeDirt":function(d){return "toprak"},
"blockTypeDirtCoarse":function(d){return "ham toprak"},
"blockTypeDoorIron":function(d){return "demir kapı"},
"blockTypeEmpty":function(d){return "boş"},
"blockTypeFarmlandWet":function(d){return "ekilebilir arazi"},
"blockTypeGlass":function(d){return "cam"},
"blockTypeGlowstone":function(d){return "ışık taşı"},
"blockTypeGrass":function(d){return "çim"},
"blockTypeGravel":function(d){return "çakıl"},
"blockTypeLava":function(d){return "lav"},
"blockTypeLogAcacia":function(d){return "akasya kütüğü"},
"blockTypeLogBirch":function(d){return "huş ağacı kütüğü"},
"blockTypeLogJungle":function(d){return "orman kütüğü"},
"blockTypeLogOak":function(d){return "meşe kütüğü"},
"blockTypeLogSpruce":function(d){return "çam kütüğü"},
"blockTypeOreCoal":function(d){return "kömür cevheri"},
"blockTypeOreDiamond":function(d){return "elmas cevheri"},
"blockTypeOreEmerald":function(d){return "zümrüt cevheri"},
"blockTypeOreGold":function(d){return "altın cevheri"},
"blockTypeOreIron":function(d){return "demir cevheri"},
"blockTypeOreLapis":function(d){return "lacivert taş cevheri"},
"blockTypeOreRedstone":function(d){return "kızıltaş cevheri"},
"blockTypePlanksAcacia":function(d){return "akasya kalaslar"},
"blockTypePlanksBirch":function(d){return "huş kalaslar"},
"blockTypePlanksJungle":function(d){return "orman kalasları"},
"blockTypePlanksOak":function(d){return "meşe kalaslar"},
"blockTypePlanksSpruce":function(d){return "çam kalaslar"},
"blockTypePressurePlateUp":function(d){return "baskı plakası"},
"blockTypeRail":function(d){return "ray"},
"blockTypeRailsRedstoneTorch":function(d){return "redstone meşalesi"},
"blockTypeRedstoneWire":function(d){return "redstone teli"},
"blockTypeSand":function(d){return "kum"},
"blockTypeSandstone":function(d){return "kumtaşı"},
"blockTypeStone":function(d){return "taş"},
"blockTypeTnt":function(d){return "patlayıcı"},
"blockTypeTree":function(d){return "ağaç"},
"blockTypeWater":function(d){return "su"},
"blockTypeWool":function(d){return "yün"},
"blockTypeWoolBlue":function(d){return "mavi yün"},
"blockTypeWoolMagenta":function(d){return "turuncu yün"},
"blockTypeWoolOrange":function(d){return "turuncu yün"},
"blockTypeWoolPink":function(d){return "pembe yün"},
"blockTypeWoolRed":function(d){return "kırmızı yün"},
"blockTypeWoolYellow":function(d){return "sarı yün"},
"blockWhileXAheadAhead":function(d){return "ileri"},
"blockWhileXAheadDo":function(d){return "yap"},
"blockWhileXAheadWhile":function(d){return "sürece"},
"cancel":function(d){return "İptal"},
"cloneMode":function(d){return "klon modu"},
"cloneModeForce":function(d){return "kuvvet"},
"cloneModeMove":function(d){return "hareket et"},
"cloneModeNormal":function(d){return "normal"},
"connectToCodeConnection":function(d){return "Minecraft'ta bu projeyi çalıştırabilmek için Eğitim Sürümü (Minecraft: Education Edition) gerekli, lütfen Code Connection uygulamasını kullanın."},
"destination":function(d){return "hedef"},
"directionBack":function(d){return "geri"},
"directionDown":function(d){return "aşağı"},
"directionForward":function(d){return "ileri"},
"directionLeft":function(d){return "sol"},
"directionMiddle":function(d){return "orta"},
"directionRight":function(d){return "sağ"},
"directionUp":function(d){return "yukarı"},
"downloadButton":function(d){return "İndir"},
"entityType":function(d){return "varlık tipi"},
"entityTypeChicken":function(d){return "tavuk"},
"entityTypeCow":function(d){return "inek"},
"entityTypeCreeper":function(d){return "creeper"},
"entityTypeIronGolem":function(d){return "demir golem"},
"entityTypePlayer":function(d){return "oyuncu"},
"entityTypeSheep":function(d){return "kuzu"},
"entityTypeZombie":function(d){return "zombi"},
"eventTypeWhenAttacked":function(d){return "saldırı alınca"},
"eventTypeWhenDay":function(d){return "gündüz olduğunda"},
"eventTypeWhenNight":function(d){return "gece olduğunda"},
"eventTypeWhenRun":function(d){return "Çalıştığı zaman"},
"eventTypeWhenSpawned":function(d){return "oluştuğunda"},
"eventTypeWhenTouched":function(d){return "dokunulduğunda"},
"eventTypeWhenUsed":function(d){return "kullanıldığında"},
"forever":function(d){return "sonsuza dek"},
"from":function(d){return "şundan"},
"generatedCodeDescription":function(d){return "Bu yapbozda blokları sürükleyip yerleştirerek Javascript adındaki bilgisayar dilinde bir dizi talimat oluşturdunuz. Bu kod, bilgisayarlara ekranda ne gösterileceğini söyler. Minecraft'ta gördüğünüz ve yaptığınız her şey de aynı şekilde bunun gibi bilgisayar kodu dizileriyle başlar."},
"getdataof":function(d){return "verisini getir"},
"getnameof":function(d){return "adını getir"},
"houseSelectChooseFloorPlan":function(d){return "Eviniz için kat planını seçin."},
"houseSelectEasy":function(d){return "Kolay"},
"houseSelectHard":function(d){return "Zor"},
"houseSelectLetsBuild":function(d){return "Hadi bir ev yapalım."},
"houseSelectMedium":function(d){return "Orta"},
"import":function(d){return "İçeri Aktar"},
"importShareLinkBody":function(d){return "Kod Saati paylaşım bağlantını buraya gir ve \"İçeri Aktar\" düğmesine tıklayarak kodunu Minecraft'a kopyala"},
"importShareLinkHeader":function(d){return "Paylaşım bağlantısını içeri aktar"},
"inSlotNumber":function(d){return "yuva numarası:"},
"itemTypeBlock":function(d){return "blok"},
"itemTypeDecoration":function(d){return "dekorasyon"},
"itemTypeMiscellaneous":function(d){return "çeşitli"},
"itemTypeTool":function(d){return "araç"},
"items":function(d){return "öğe(ler)"},
"itemsOfBlockType":function(d){return "blok tipindeki öğe(ler)"},
"level10FailureMessage":function(d){return "Karşıya geçmek için lavın üstünü kapatın ve ardından diğer taraftaki iki demir bloğunu çıkarın."},
"level11FailureMessage":function(d){return "Önünüzde lav varsa ileriye kırıktaş yerleştirmeyi unutmayın. Bu sayede bu kaynakları güvenli bir şekilde çıkarabilirsiniz."},
"level12FailureMessage":function(d){return "3 kızıltaşı çıkarmayı unutmayın. Bu, evinizi inşa ederken öğrendiklerinizi ve lavdan kurtulmak için \"eğer\" komutlarını kullanmayı birleştirmektedir."},
"level13FailureMessage":function(d){return "Kapınızdan haritanın ucuna kadar giden toprak yol boyunca \"ray\" yerleştirin."},
"level1FailureMessage":function(d){return "Koyunlara doğru yürümek için komutları kullanmanız gerekiyor."},
"level1TooFewBlocksMessage":function(d){return "Koyunlara doğru yürümek için daha fazla komut kullanmayı deneyin."},
"level2FailureMessage":function(d){return "Bir ağacı kesmek için ağacın gövdesine doğru yürüyün ve \"bloğu yok et\" komutunu kullanın."},
"level2TooFewBlocksMessage":function(d){return "Ağacı kesmek için daha fazla komut kullanmayı deneyin. Gövdesine doğru yürüyün ve \"bloğu yok et\" komutunu kullanın."},
"level3FailureMessage":function(d){return "Her iki koyundan da yün toplamak için koyunlara doğru yürüyün ve \"kırk\" komutunu kullanın. Koyunlara ulaşmak için dönüş komutlarını kullanmayı unutmayın."},
"level3TooFewBlocksMessage":function(d){return "Her iki koyundan da yün toplamak için daha fazla komut kullanmayı deneyin. Koyunlara doğru yürüyün ve \"kırk\" komutunu kullanın."},
"level4FailureMessage":function(d){return "Üç ağaç gövdesinin her birinde \"bloğu yok et\" komutunu kullanmalısınız."},
"level5FailureMessage":function(d){return "Bir duvar inşa etmek için bloklarınızı toprak hattına yerleştirin. Pembe \"tekrar et\" komutu, \"bloğu yerleştir\" ve \"ileri git\" gibi içine yerleştirilmiş olan komutları çalıştıracaktır."},
"level6FailureMessage":function(d){return "Yapbozu tamamlamak için blokları evin toprak hattına yerleştirin."},
"level7FailureMessage":function(d){return "Koyu renkli sürülmüş toprağın her bir parçasına ekinleri yerleştirmek için \"ek\" komutunu kullanın."},
"level8FailureMessage":function(d){return "Bir creeper'a dokunursanız patlar. Onların etrafından gizlice geçin ve evinize girin."},
"level9FailureMessage":function(d){return "Yolunuzu aydınlatmak için en az 2 meşale yerleştirmeyi VE 2 kömür çıkarmayı unutmayın."},
"maskMode":function(d){return "maske modu"},
"maskModeMasked":function(d){return "maskeli"},
"maskModeReplace":function(d){return "değiştir"},
"minecraftBlock":function(d){return "blok"},
"minecraftNotConnected":function(d){return "Minecraft bağlı değil"},
"miniBlockBricks":function(d){return "tuğlalar"},
"miniBlockBucketLava":function(d){return "lav kovası"},
"miniBlockBucketWater":function(d){return "su kovası"},
"miniBlockCarrots":function(d){return "havuçlar"},
"miniBlockCoal":function(d){return "kömür"},
"miniBlockCobblestone":function(d){return "kırıktaş"},
"miniBlockDiamond":function(d){return "elmas"},
"miniBlockDirt":function(d){return "toprak"},
"miniBlockDirtCoarse":function(d){return "ham toprak"},
"miniBlockEgg":function(d){return "yumurta"},
"miniBlockEmerald":function(d){return "zümrüt"},
"miniBlockGravel":function(d){return "çakıl"},
"miniBlockGunPowder":function(d){return "barut"},
"miniBlockIngotGold":function(d){return "altın külçe"},
"miniBlockIngotIron":function(d){return "demir külçe"},
"miniBlockLapisLazuli":function(d){return "lapis lazuli"},
"miniBlockLogAcacia":function(d){return "akasya kütüğü"},
"miniBlockLogBirch":function(d){return "huş ağacı kütüğü"},
"miniBlockLogJungle":function(d){return "orman kütüğü"},
"miniBlockLogOak":function(d){return "meşe kütüğü"},
"miniBlockLogSpruce":function(d){return "çam kütüğü"},
"miniBlockMilk":function(d){return "süt"},
"miniBlockPlanksAcacia":function(d){return "akasya kalaslar"},
"miniBlockPlanksBirch":function(d){return "huş kalaslar"},
"miniBlockPlanksJungle":function(d){return "orman kalasları"},
"miniBlockPlanksOak":function(d){return "meşe kalaslar"},
"miniBlockPlanksSpruce":function(d){return "çam kalaslar"},
"miniBlockPoppy":function(d){return "gelincik"},
"miniBlockPotato":function(d){return "patates"},
"miniBlockRedstoneDust":function(d){return "kırmızıtaş tozu"},
"miniBlockSand":function(d){return "kum"},
"miniBlockSandstone":function(d){return "kumtaşı"},
"miniBlockSheep":function(d){return "kuzu"},
"miniBlockWheat":function(d){return "buğday"},
"miniBlockWool":function(d){return "yün"},
"nextLevelMsg":function(d){return "Yapboz "+craft_locale.v(d,"puzzleNumber")+" tamamlandı. Tebrikler!"},
"oldBlockHandling":function(d){return "eski blok burada"},
"oldBlockHandlingsDestroy":function(d){return "yok et"},
"oldBlockHandlingsKeep":function(d){return "sakla"},
"oldBlockHandlingsReplace":function(d){return "değiştir"},
"onBehalfOf":function(d){return "adına"},
"playerSelectChooseCharacter":function(d){return "Karakterinizi seçin."},
"playerSelectChooseSelectButton":function(d){return "Seç"},
"playerSelectLetsGetStarted":function(d){return "Hadi başlayalım."},
"quantity":function(d){return "adet"},
"reinfFeedbackMsg":function(d){return "Oyuna geri dönmek için \"Oynamaya Devam Et\" düğmesine basabilirsiniz."},
"relative":function(d){return "göreli"},
"runAgent":function(d){return "Agent'ı Çalıştır"},
"score":function(d){return "Puan"},
"seconds":function(d){return "saniye(ler)"},
"selectChooseButton":function(d){return "Seç"},
"soundTypeBump":function(d){return "çarp"},
"soundTypeChickenBawk":function(d){return "tavuk gıdaklaması"},
"soundTypeChickenHurt":function(d){return "tavuk zarar gördü"},
"soundTypeCollectedBlock":function(d){return "blok toplama"},
"soundTypeCowHuff":function(d){return "inek soluması"},
"soundTypeCowHurt":function(d){return "inek zarar gördü"},
"soundTypeCowMoo":function(d){return "inek möölemesi"},
"soundTypeCowMooLong":function(d){return "inek mööööölemesi"},
"soundTypeCreeperHiss":function(d){return "creeper tıslaması"},
"soundTypeDig_wood1":function(d){return "ahşap kırılması"},
"soundTypeDoorOpen":function(d){return "kapı açılması"},
"soundTypeExplode":function(d){return "patlat"},
"soundTypeFailure":function(d){return "seviye başarısız"},
"soundTypeFall":function(d){return "düşme"},
"soundTypeFizz":function(d){return "fışırtı"},
"soundTypeFuse":function(d){return "fünye"},
"soundTypeIronGolemHit":function(d){return "demir golem vuruşu"},
"soundTypeMetalWhack":function(d){return "metal darbesi"},
"soundTypeMinecart":function(d){return "maden arabası"},
"soundTypePlaceBlock":function(d){return "blok yerleştirme"},
"soundTypePunch":function(d){return "yumruk at"},
"soundTypeSheepBaa":function(d){return "koyun meelemesi"},
"soundTypeStepFarmland":function(d){return "çiftlik arazisine adım at"},
"soundTypeStepGrass":function(d){return "çimene adım at"},
"soundTypeStepGravel":function(d){return "çakıla adım at"},
"soundTypeStepStone":function(d){return "taşa adım at"},
"soundTypeStepWood":function(d){return "ahşaba adım at"},
"soundTypeSuccess":function(d){return "seviye başarılı"},
"soundTypeZombieBrains":function(d){return "zombi iniltisi"},
"soundTypeZombieGroan":function(d){return "zombi hırlaması"},
"soundTypeZombieHurt":function(d){return "zombi yaralanması"},
"target":function(d){return "hedef"},
"testModeAll":function(d){return "tüm"},
"testModeMasked":function(d){return "maskeli"},
"tileData":function(d){return "veriyi diz"},
"timeDay":function(d){return "gün"},
"timeLong":function(d){return "uzun"},
"timeMedium":function(d){return "orta"},
"timeNight":function(d){return "gece"},
"timeRandom":function(d){return "gelişigüzel"},
"timeSet":function(d){return "zamanı ayarla"},
"timeShort":function(d){return "kısa"},
"timeVeryLong":function(d){return "çok uzun"},
"timeVeryShort":function(d){return "çok kısa"},
"to":function(d){return "e"},
"toSlotNumber":function(d){return "yuva numarasına"},
"tooManyBlocksFail":function(d){return "Yapboz "+craft_locale.v(d,"puzzleNumber")+" tamamlandı. Tebrikler! Bunu ayrıca "+craft_locale.p(d,"numBlocks",0,"tr",{"one":"1 block","other":craft_locale.n(d,"numBlocks")+" blocks"})+" ile de tamamlayabilirsiniz."},
"turnRandom":function(d){return "rastgele dön"},
"useArrowKeys":function(d){return "Herhangi bir blok eklemenize gerek yok! Oklar ile hareket edip boşluk tuşuna basarak veya oyun ekranına tıklayarak öğeleri kullanın."},
"weather":function(d){return "hava durumu"},
"weatherTypeClear":function(d){return "güneşli"},
"weatherTypeRain":function(d){return "yağmur"},
"weatherTypeThunder":function(d){return "gök gürültüsü"}};