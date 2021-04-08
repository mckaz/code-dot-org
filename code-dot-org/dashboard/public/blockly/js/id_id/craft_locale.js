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
"agentGenericFailureMessage":function(d){return "Teruslah membuat kode! Ingatlah untuk menggunakan Agent untuk membantu."},
"agentTooFewBlocksFailureMessage":function(d){return "Coba tambahkan blok satu per satu untuk membawa Agent ke tempat yang tepat."},
"at":function(d){return "pada"},
"agentDiamondPathCongrats":function(d){return "Selamat, kamu menemukan jalur berlian! Kamu telah mengambil "+craft_locale.p(d,"count",0,"id",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" sejauh ini!"},
"blockActionAdd":function(d){return "tambah"},
"blockActionAttack":function(d){return "serang"},
"blockActionClone":function(d){return "clone blok"},
"blockActionCloneFiltered":function(d){return "hanya duplikat"},
"blockActionCollect":function(d){return "kumpulkan"},
"blockActionCollectAll":function(d){return "mengambil semua"},
"blockActionDestroyEntity":function(d){return "hilang"},
"blockActionDetect":function(d){return "menemukan"},
"blockActionDetectRedstone":function(d){return "menemukan batumerah"},
"blockActionDrop":function(d){return "menurun"},
"blockActionDropAll":function(d){return "semua menurun"},
"blockActionExecute":function(d){return "perintah eksekusi"},
"blockActionExplodeEntity":function(d){return "meledak"},
"blockActionFill":function(d){return "diisi dari"},
"blockActionFlashEntity":function(d){return "cahaya"},
"blockActionGetItemCount":function(d){return "memperoleh dapat barang"},
"blockActionGetItemCountInSlotNumber":function(d){return "mendapatkan jumlah item didalam slot nomor"},
"blockActionGetItemDetail":function(d){return "dapatkan rincian item"},
"blockActionGetItemDetailInSlotNumber":function(d){return "dapatkan rincian item di tempat nomor"},
"blockActionGetItemSpace":function(d){return "dapatkan tempat item"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "memperoleh nomor tempat didalam barang"},
"blockActionGive":function(d){return "beri"},
"blockActionInspect":function(d){return "periksa"},
"blockActionInspectData":function(d){return "periksa data"},
"blockActionKill":function(d){return "bunuh target"},
"blockActionMove":function(d){return "bergerak"},
"blockActionMoveAway":function(d){return "jauhkan dari"},
"blockActionMoveForward":function(d){return "Gerak maju"},
"blockActionMoveRandom":function(d){return "pindah acak"},
"blockActionMoveTo":function(d){return "pindah ke"},
"blockActionMoveToward":function(d){return "maju satu langkah"},
"blockActionPlaySound":function(d){return "putar suara"},
"blockActionRepeat":function(d){return "ulangi"},
"blockActionRepeatRandom":function(d){return "ulangi acak"},
"blockActionSetBlock":function(d){return "ke kumpulan kompleks"},
"blockActionSpawn":function(d){return "munculkan"},
"blockActionSummon":function(d){return "panggil"},
"blockActionTeleport":function(d){return "teleportasikan target"},
"blockActionTeleportToPlayer":function(d){return "teleportasikan ke pemain"},
"blockActionTestForBlock":function(d){return "macam handangan ujian cuaca"},
"blockActionTestForBlocks":function(d){return "ujian cuaca itu pola diantaranya"},
"blockActionToScore":function(d){return "untuk mencetak skor"},
"blockActionTransfer":function(d){return "pergantian"},
"blockActionWait":function(d){return "tunggu"},
"blockActionWith":function(d){return "dengan"},
"blockData":function(d){return "data blok"},
"blockDestroyBlock":function(d){return "hancurkan balok"},
"blockIf":function(d){return "jika"},
"blockIfLavaAhead":function(d){return "jika lava mengadang"},
"blockIs":function(d){return "adalah"},
"blockMove":function(d){return "bergerak"},
"blockMoveBackward":function(d){return "bergerak mundur"},
"blockMoveForward":function(d){return "Gerak maju"},
"blockPlace":function(d){return "letakkan"},
"blockPlaceTorch":function(d){return "letakkan obor"},
"blockPlaceXAheadAhead":function(d){return "adang"},
"blockPlaceXAheadPlace":function(d){return "letakkan"},
"blockPlaceXPlace":function(d){return "letakkan"},
"blockPlantCrop":function(d){return "tanam bibit"},
"blockShear":function(d){return "cukur"},
"blockTill":function(d){return "gali"},
"blockTillSoil":function(d){return "bajak tanah"},
"blockTurn":function(d){return "belok"},
"blockTurnLeft":function(d){return "belok kiri"},
"blockTurnRight":function(d){return "belok kanan"},
"blockType":function(d){return "jenis blok"},
"blockTypeBedrock":function(d){return "fondasi"},
"blockTypeBricks":function(d){return "batu bata"},
"blockTypeClay":function(d){return "tanah liat"},
"blockTypeClayHardened":function(d){return "tanah liat dikeraskan"},
"blockTypeCobblestone":function(d){return "batu alam"},
"blockTypeDirt":function(d){return "tanah"},
"blockTypeDirtCoarse":function(d){return "tanah kasar"},
"blockTypeDoorIron":function(d){return "pintu besi"},
"blockTypeEmpty":function(d){return "kosong"},
"blockTypeFarmlandWet":function(d){return "pertanian"},
"blockTypeGlass":function(d){return "kaca"},
"blockTypeGlowstone":function(d){return "batu bersinar"},
"blockTypeGrass":function(d){return "rumput"},
"blockTypeGravel":function(d){return "batu kerikil"},
"blockTypeLava":function(d){return "lava"},
"blockTypeLogAcacia":function(d){return "batang pohon akasia"},
"blockTypeLogBirch":function(d){return "batang pohon birch"},
"blockTypeLogJungle":function(d){return "batang pohon hutan"},
"blockTypeLogOak":function(d){return "batang pohon ek"},
"blockTypeLogSpruce":function(d){return "batang pohon spruce"},
"blockTypeOreCoal":function(d){return "bijih batu bara"},
"blockTypeOreDiamond":function(d){return "bijih berlian"},
"blockTypeOreEmerald":function(d){return "bijih zamrud"},
"blockTypeOreGold":function(d){return "bijih emas"},
"blockTypeOreIron":function(d){return "bijih besi"},
"blockTypeOreLapis":function(d){return "bijih batu lapis"},
"blockTypeOreRedstone":function(d){return "bijih batu merah"},
"blockTypePlanksAcacia":function(d){return "papan kayu pohon akasia"},
"blockTypePlanksBirch":function(d){return "papan kayu pohon birch"},
"blockTypePlanksJungle":function(d){return "papan kayu hutan"},
"blockTypePlanksOak":function(d){return "papan kayu pohon ek"},
"blockTypePlanksSpruce":function(d){return "papan kayu pohon spruce"},
"blockTypePressurePlateUp":function(d){return "pelat tekanan"},
"blockTypeRail":function(d){return "jalan rel"},
"blockTypeRailsRedstoneTorch":function(d){return "obor batu merah"},
"blockTypeRedstoneWire":function(d){return "kawat batu merah"},
"blockTypeSand":function(d){return "pasir"},
"blockTypeSandstone":function(d){return "batu pasir"},
"blockTypeStone":function(d){return "batu"},
"blockTypeTnt":function(d){return "bom"},
"blockTypeTree":function(d){return "pohon"},
"blockTypeWater":function(d){return "air"},
"blockTypeWool":function(d){return "wol"},
"blockTypeWoolBlue":function(d){return "bulu domba biru"},
"blockTypeWoolMagenta":function(d){return "bulu domba merah keunguan"},
"blockTypeWoolOrange":function(d){return "bulu orange"},
"blockTypeWoolPink":function(d){return "bulu merahmuda"},
"blockTypeWoolRed":function(d){return "bulu merah"},
"blockTypeWoolYellow":function(d){return "bulu kuning"},
"blockWhileXAheadAhead":function(d){return "adang"},
"blockWhileXAheadDo":function(d){return "kerjakan"},
"blockWhileXAheadWhile":function(d){return "Selagi"},
"cancel":function(d){return "Batal"},
"cloneMode":function(d){return "cara mengadakan"},
"cloneModeForce":function(d){return "paksa"},
"cloneModeMove":function(d){return "bergerak"},
"cloneModeNormal":function(d){return "normal"},
"connectToCodeConnection":function(d){return "Untuk menjalankan proyek ini di Minecraft: Education Edition, gunakan aplikasi Code Connection."},
"destination":function(d){return "tujuan"},
"directionBack":function(d){return "belakang"},
"directionDown":function(d){return "turun"},
"directionForward":function(d){return "maju"},
"directionLeft":function(d){return "kiri"},
"directionMiddle":function(d){return "tengah"},
"directionRight":function(d){return "kanan"},
"directionUp":function(d){return "atas"},
"downloadButton":function(d){return "Unduh"},
"entityType":function(d){return "jenis entitas"},
"entityTypeChicken":function(d){return "ayam"},
"entityTypeCow":function(d){return "sapi"},
"entityTypeCreeper":function(d){return "creeper"},
"entityTypeIronGolem":function(d){return "golem besi"},
"entityTypePlayer":function(d){return "pemain"},
"entityTypeSheep":function(d){return "domba"},
"entityTypeZombie":function(d){return "zombie"},
"eventTypeWhenAttacked":function(d){return "ketika diserang"},
"eventTypeWhenDay":function(d){return "ketika siang hari"},
"eventTypeWhenNight":function(d){return "ketika malam hari"},
"eventTypeWhenRun":function(d){return "ketika dijalankan"},
"eventTypeWhenSpawned":function(d){return "ketika dimunculkan"},
"eventTypeWhenTouched":function(d){return "ketika disentuh"},
"eventTypeWhenUsed":function(d){return "ketika digunakan"},
"forever":function(d){return "selamanya"},
"from":function(d){return "dari"},
"generatedCodeDescription":function(d){return "Dengan menyeret dan menempatkan balok di teka-teki ini, kamu membuat sekumpulan instruksi dalam bahasa komputer bernama Javascript. Kode ini memberi tahu komputer apa yang harus ditampilkan pada layar. Semua yang kamu lihat dan lakukan di Minecraft juga diawali dengan barisan kode komputer seperti ini."},
"getdataof":function(d){return "dapatkan data"},
"getnameof":function(d){return "dapatkan nama"},
"houseSelectChooseFloorPlan":function(d){return "Pilih denah lantai untuk rumah kamu."},
"houseSelectEasy":function(d){return "Mudah"},
"houseSelectHard":function(d){return "Sulit"},
"houseSelectLetsBuild":function(d){return "Ayo kita bangun rumah."},
"houseSelectMedium":function(d){return "Sedang"},
"import":function(d){return "Impor"},
"importShareLinkBody":function(d){return "Ketik tautan berbagi Jam Kodemu di sini dan klik \"Impor\" untuk menyalin kodemu ke Minecraft"},
"importShareLinkHeader":function(d){return "Impor tautan berbagi"},
"inSlotNumber":function(d){return "di nomor slot"},
"itemTypeBlock":function(d){return "balok"},
"itemTypeDecoration":function(d){return "dekorasi"},
"itemTypeMiscellaneous":function(d){return "lain-lain"},
"itemTypeTool":function(d){return "alat"},
"items":function(d){return "item"},
"itemsOfBlockType":function(d){return "item jenis blok"},
"level10FailureMessage":function(d){return "Tutup lava untuk berjalan melintasinya, lalu gali dua balok besi di sisi lain."},
"level11FailureMessage":function(d){return "Pastikan untuk menempatkan batu alam dahulu jika ada lava yang mengadang. Karenanya kamu bisa menggali deretan sumber daya ini dengan aman."},
"level12FailureMessage":function(d){return "Pastikan untuk menggali 3 balok batu merah. Hal ini memadukan apa yang sudah kamu pelajari dari membangun rumah dan menggunakan pernyataan \"jika\" untuk menghindari terjatuh di lava."},
"level13FailureMessage":function(d){return "Tempatkan \"jalan rel\" sepanjang jalan setapak bertanah mulai pintu kamu hingga tepi peta."},
"level1FailureMessage":function(d){return "Kamu harus menggunakan perintah untuk berjalan kaki ke domba."},
"level1TooFewBlocksMessage":function(d){return "Coba gunakan lebih banyak perintah untuk berjalan kaki ke domba."},
"level2FailureMessage":function(d){return "Untuk menebang pohon, jalan kaki ke batang dan gunakan perintah \"hancurkan balok\"."},
"level2TooFewBlocksMessage":function(d){return "Coba gunakan lebih banyak perintah untuk menebang pohon. Jalan kaki ke batangnya dan gunakan perintah \"hancurkan balok\"."},
"level3FailureMessage":function(d){return "Untuk mengumpulkan wol dari kedua domba, jalan kaki ke tiap domba dan gunakan perintah \"cukur\". Ingat untuk menggunakan perintah putar untuk mencapai domba."},
"level3TooFewBlocksMessage":function(d){return "Coba gunakan lebih banyak perintah untuk mengumpulkan wol dari kedua domba. Jalan kaki ke masing-masing domba dan gunakan perintah \"cukur\"."},
"level4FailureMessage":function(d){return "Kamu harus menggunakan perintah \"hancurkan balok\" pada ketiga batang pohon."},
"level5FailureMessage":function(d){return "Tempatkan balok kamu di garis tepi tanah untuk membangun dinding. Perintah \"ulangi\" berwarna merah muda akan menjalankan perintah yang ditempatkan di dalamnya, seperti \"tempatkan balok\" dan \"bergerak maju\"."},
"level6FailureMessage":function(d){return "Tempatkan balok di garis tepi tanah rumah untuk menyelesaikan teka-teki."},
"level7FailureMessage":function(d){return "Gunakan perintah \"tanam\" untuk menempatkan bibit di tiap petak tanah berwarna gelap yang telah dibajak."},
"level8FailureMessage":function(d){return "Jika kamu menyentuh creeper, maka ia akan meledak. Menyelinap di sekitar mereka dan masuki rumahmu."},
"level9FailureMessage":function(d){return "Jangan lupa untuk menempatkan setidaknya 2 obor untuk menerangi jalan kamu DAN gali setidaknya 2 batu bara."},
"maskMode":function(d){return "mode topeng"},
"maskModeMasked":function(d){return "bertopeng"},
"maskModeReplace":function(d){return "ganti"},
"minecraftBlock":function(d){return "balok"},
"minecraftNotConnected":function(d){return "Minecraft tidak tersambung"},
"miniBlockBricks":function(d){return "batu bata"},
"miniBlockBucketLava":function(d){return "ember lahar"},
"miniBlockBucketWater":function(d){return "ember air"},
"miniBlockCarrots":function(d){return "wortel"},
"miniBlockCoal":function(d){return "batu bara"},
"miniBlockCobblestone":function(d){return "batu alam"},
"miniBlockDiamond":function(d){return "berlian"},
"miniBlockDirt":function(d){return "tanah"},
"miniBlockDirtCoarse":function(d){return "tanah kasar"},
"miniBlockEgg":function(d){return "telur"},
"miniBlockEmerald":function(d){return "zamrud"},
"miniBlockGravel":function(d){return "batu kerikil"},
"miniBlockGunPowder":function(d){return "bubuk mesiu"},
"miniBlockIngotGold":function(d){return "emas batangan"},
"miniBlockIngotIron":function(d){return "besi batangan"},
"miniBlockLapisLazuli":function(d){return "lapisan batu lazuwardi"},
"miniBlockLogAcacia":function(d){return "batang pohon akasia"},
"miniBlockLogBirch":function(d){return "batang pohon birch"},
"miniBlockLogJungle":function(d){return "batang pohon hutan"},
"miniBlockLogOak":function(d){return "batang pohon ek"},
"miniBlockLogSpruce":function(d){return "batang pohon spruce"},
"miniBlockMilk":function(d){return "susu"},
"miniBlockPlanksAcacia":function(d){return "papan kayu pohon akasia"},
"miniBlockPlanksBirch":function(d){return "papan kayu pohon birch"},
"miniBlockPlanksJungle":function(d){return "papan kayu hutan"},
"miniBlockPlanksOak":function(d){return "papan kayu pohon ek"},
"miniBlockPlanksSpruce":function(d){return "papan kayu pohon spruce"},
"miniBlockPoppy":function(d){return "benih"},
"miniBlockPotato":function(d){return "kentang"},
"miniBlockRedstoneDust":function(d){return "debu batu merah"},
"miniBlockSand":function(d){return "pasir"},
"miniBlockSandstone":function(d){return "batu pasir"},
"miniBlockSheep":function(d){return "domba"},
"miniBlockWheat":function(d){return "gandum"},
"miniBlockWool":function(d){return "wol"},
"nextLevelMsg":function(d){return "Teka-teki "+craft_locale.v(d,"puzzleNumber")+" selesai. Selamat!"},
"oldBlockHandling":function(d){return "di blok tua"},
"oldBlockHandlingsDestroy":function(d){return "hancurkan"},
"oldBlockHandlingsKeep":function(d){return "pertahankan"},
"oldBlockHandlingsReplace":function(d){return "ganti"},
"onBehalfOf":function(d){return "atas nama"},
"playerSelectChooseCharacter":function(d){return "Pilih karakter kamu."},
"playerSelectChooseSelectButton":function(d){return "Pilih"},
"playerSelectLetsGetStarted":function(d){return "Ayo kita mulai."},
"quantity":function(d){return "kuantitas"},
"reinfFeedbackMsg":function(d){return "Kamu bisa menekan \"Tetap Main\" untuk kembali memainkan permainan kamu."},
"relative":function(d){return "pamili"},
"runAgent":function(d){return "Jalankan Agent"},
"score":function(d){return "Skor"},
"seconds":function(d){return "detik"},
"selectChooseButton":function(d){return "Pilih"},
"soundTypeBump":function(d){return "bentur"},
"soundTypeChickenBawk":function(d){return "ayam berkeok"},
"soundTypeChickenHurt":function(d){return "ayam terluka"},
"soundTypeCollectedBlock":function(d){return "blok diambil"},
"soundTypeCowHuff":function(d){return "sapi terengah"},
"soundTypeCowHurt":function(d){return "sapi terluka"},
"soundTypeCowMoo":function(d){return "sapi melenguh"},
"soundTypeCowMooLong":function(d){return "sapi melenguuh"},
"soundTypeCreeperHiss":function(d){return "creeper mendesis"},
"soundTypeDig_wood1":function(d){return "kayu patah"},
"soundTypeDoorOpen":function(d){return "pintu terbuka"},
"soundTypeExplode":function(d){return "meledak"},
"soundTypeFailure":function(d){return "kegagalan level"},
"soundTypeFall":function(d){return "jatuh"},
"soundTypeFizz":function(d){return "mendesis"},
"soundTypeFuse":function(d){return "sumbu"},
"soundTypeIronGolemHit":function(d){return "golem besi memukul"},
"soundTypeMetalWhack":function(d){return "pukulan logam"},
"soundTypeMinecart":function(d){return "kereta tambang"},
"soundTypePlaceBlock":function(d){return "tempatkan blok"},
"soundTypePunch":function(d){return "tinjuan"},
"soundTypeSheepBaa":function(d){return "domba mengembik"},
"soundTypeStepFarmland":function(d){return "injak tanah pertanian"},
"soundTypeStepGrass":function(d){return "injak rumput"},
"soundTypeStepGravel":function(d){return "injak kerikil"},
"soundTypeStepStone":function(d){return "injak batu"},
"soundTypeStepWood":function(d){return "injak kayu"},
"soundTypeSuccess":function(d){return "keberhasilan level"},
"soundTypeZombieBrains":function(d){return "zombie mengerang"},
"soundTypeZombieGroan":function(d){return "zombie menggeram"},
"soundTypeZombieHurt":function(d){return "zombie terluka"},
"target":function(d){return "sasaran"},
"testModeAll":function(d){return "semua"},
"testModeMasked":function(d){return "bertopeng"},
"tileData":function(d){return "data ubin"},
"timeDay":function(d){return "hari"},
"timeLong":function(d){return "panjang"},
"timeMedium":function(d){return "sedang"},
"timeNight":function(d){return "malam"},
"timeRandom":function(d){return "acak"},
"timeSet":function(d){return "atur waktu ke"},
"timeShort":function(d){return "pendek"},
"timeVeryLong":function(d){return "sangat panjang"},
"timeVeryShort":function(d){return "sangat singkat"},
"to":function(d){return "untuk"},
"toSlotNumber":function(d){return "ke nomor slot"},
"tooManyBlocksFail":function(d){return "Teka-teki "+craft_locale.v(d,"puzzleNumber")+" selesai. Selamat! Kamu juga bisa menyelesaikannya dengan "+craft_locale.p(d,"numBlocks",0,"id",{"one":"1 block","other":craft_locale.n(d,"numBlocks")+" blocks"})+"."},
"turnRandom":function(d){return "belok acak"},
"useArrowKeys":function(d){return "Kamu tidak perlu menambahkan blok! Pindahkan dengan panah dan tekan spasi atau ketuk papan permainan untuk menggunakan item."},
"weather":function(d){return "cuaca"},
"weatherTypeClear":function(d){return "cerah"},
"weatherTypeRain":function(d){return "hujan"},
"weatherTypeThunder":function(d){return "guntur"}};