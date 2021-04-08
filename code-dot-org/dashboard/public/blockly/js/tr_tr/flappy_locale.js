var flappy_locale = {lc:{"ar":function(n){
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
v:function(d,k){flappy_locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){flappy_locale.c(d,k);return d[k] in p?p[d[k]]:(k=flappy_locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){flappy_locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).flappy_locale = {
"continue":function(d){return "Devam et"},
"doCode":function(d){return "yap"},
"elseCode":function(d){return "ya da"},
"endGame":function(d){return "oyunu bitir"},
"endGameTooltip":function(d){return "Oyunu bitirir."},
"finalLevel":function(d){return "Tebrikler! Son bulmacayı da çözdünüz."},
"flap":function(d){return "kanat çırp"},
"flapRandom":function(d){return "rastgele sayıda kanat çırp"},
"flapVerySmall":function(d){return "çok az sayıda kanat çırp"},
"flapSmall":function(d){return "az sayıda kanat çırp"},
"flapNormal":function(d){return "normal sayıda kanat çırp"},
"flapLarge":function(d){return "uzun kanat çırp"},
"flapVeryLarge":function(d){return "çok uzun kanat çırp"},
"flapTooltip":function(d){return "Flappy'i yukarı doğru uçur."},
"flappySpecificFail":function(d){return "Kodun güzel gözüküyor - Kuş, her tıklama ile kanat çırpacak. Ancak hedefe ulaşman için bir çok kez tıklamalısın."},
"incrementPlayerScore":function(d){return "puan kazan"},
"incrementPlayerScoreTooltip":function(d){return "Oyuncunun şu andaki puanına bir puan ekle."},
"nextLevel":function(d){return "Tebrikler! Bu bulmacayı tamamladınız."},
"no":function(d){return "Hayır"},
"numBlocksNeeded":function(d){return "Bu bulmaca %1 blok ile çözülebilir."},
"playSoundRandom":function(d){return "rastgele ses çıkart"},
"playSoundBounce":function(d){return "zıplama sesi çal"},
"playSoundCrunch":function(d){return "ezilme sesi çal"},
"playSoundDie":function(d){return "üzgün ses çıkart"},
"playSoundHit":function(d){return "ezilme sesi çıkart"},
"playSoundPoint":function(d){return "Puan sesi çıkart"},
"playSoundSwoosh":function(d){return "Vın sesi çıkart"},
"playSoundWing":function(d){return "kanat sesi çıkart"},
"playSoundJet":function(d){return "Jet sesi çıkart"},
"playSoundCrash":function(d){return "çarpışma sesi çıkart"},
"playSoundJingle":function(d){return "jingle sesi çıkart"},
"playSoundSplash":function(d){return "sıçrama sesi çıkart"},
"playSoundLaser":function(d){return "Lazer sesi çıkart"},
"playSoundTooltip":function(d){return "Seçilen sesi çal."},
"reinfFeedbackMsg":function(d){return "Oyununuzu tekrar oynamak için \"yeniden dene\" butonuna basabilirsiniz."},
"scoreText":function(d){return "Skor: "+flappy_locale.v(d,"playerScore")},
"setBackground":function(d){return "sahneyi ayarla"},
"setBackgroundRandom":function(d){return "sahneyi rastgele ayarla"},
"setBackgroundFlappy":function(d){return "sahneyi şehir (gündüz) olarak ayarla"},
"setBackgroundNight":function(d){return "sahneyi şehir (gece) olarak ayarla"},
"setBackgroundSciFi":function(d){return "sahneyi bilim-kurgu olarak ayarla"},
"setBackgroundUnderwater":function(d){return "sahneyi sualtı olarak ayarla"},
"setBackgroundCave":function(d){return "sahneyi mağara olarak ayarla"},
"setBackgroundSanta":function(d){return "sahneyi noel olarak ayarla"},
"setBackgroundTooltip":function(d){return "Arka plan resmini ayarlar"},
"setGapRandom":function(d){return "rastgele bir aralık koy"},
"setGapVerySmall":function(d){return "çok dar bir boşluk koy"},
"setGapSmall":function(d){return "dar bir boşluk koy"},
"setGapNormal":function(d){return "normal bir boşluk koy"},
"setGapLarge":function(d){return "geniş bir boşluk koy"},
"setGapVeryLarge":function(d){return "çok geniş bir boşluk koy"},
"setGapHeightTooltip":function(d){return "Bir engelin içine dikey bir boşluk yerleştirir"},
"setGravityRandom":function(d){return "yerçekimini rastgele ayarla"},
"setGravityVeryLow":function(d){return "yerçekimini çok düşük yap"},
"setGravityLow":function(d){return "yerçekimini düşük yap"},
"setGravityNormal":function(d){return "yerçekimini normal yap"},
"setGravityHigh":function(d){return "yerçekimini yüksek yap"},
"setGravityVeryHigh":function(d){return "yerçekimini çok yüksek yap"},
"setGravityTooltip":function(d){return "Seviyenin yer çekimini ayarlar"},
"setGround":function(d){return "zemini ayarla"},
"setGroundRandom":function(d){return "zemini rastgele oluştur"},
"setGroundFlappy":function(d){return "zemini Toprak olarak oluştur"},
"setGroundSciFi":function(d){return "zemini Bilim-Kurgu olarak ayarla"},
"setGroundUnderwater":function(d){return "zemini Su-altı olarak oluştur"},
"setGroundCave":function(d){return "zemini Mağara olarak oluştur"},
"setGroundSanta":function(d){return "zemini Noel olarak oluştur"},
"setGroundLava":function(d){return "zemini Lav olarak oluştur"},
"setGroundTooltip":function(d){return "Zemin resmini ayarlar"},
"setObstacle":function(d){return "engel koy"},
"setObstacleRandom":function(d){return "rastgele engel koy"},
"setObstacleFlappy":function(d){return "boru engeli koy"},
"setObstacleSciFi":function(d){return "Bilim-Kurgu engeli koy"},
"setObstacleUnderwater":function(d){return "Bitki engeli koy"},
"setObstacleCave":function(d){return "Mağara engeli koy"},
"setObstacleSanta":function(d){return "Baca engeli koy"},
"setObstacleLaser":function(d){return "Lazer engeli koy"},
"setObstacleTooltip":function(d){return "Engel resmini ayarlar"},
"setPlayer":function(d){return "oyuncu ayarla"},
"setPlayerRandom":function(d){return "Rastgele oyuncu ayarla"},
"setPlayerFlappy":function(d){return "oyuncu Sarı kuş olsun"},
"setPlayerRedBird":function(d){return "oyuncu Kırmızı kuş olsun"},
"setPlayerSciFi":function(d){return "oyuncu Uzay Mekiği olsun"},
"setPlayerUnderwater":function(d){return "oyuncu Balık olsun"},
"setPlayerCave":function(d){return "oyuncu Yarasa olsun"},
"setPlayerSanta":function(d){return "oyuncu Noel Baba olsun"},
"setPlayerShark":function(d){return "oyuncu Köpekbalığı olsun"},
"setPlayerEaster":function(d){return "oyuncu Tavşan olsun"},
"setPlayerBatman":function(d){return "oyuncu Yarasa adam olsun"},
"setPlayerSubmarine":function(d){return "oyuncu Denizaltı olsun"},
"setPlayerUnicorn":function(d){return "oyuncu Unicorn olsun"},
"setPlayerFairy":function(d){return "oyuncu Peri olsun"},
"setPlayerSuperman":function(d){return "oyuncu Kanatlıadam olsun"},
"setPlayerTurkey":function(d){return "oyuncu Hindi olsun"},
"setPlayerTooltip":function(d){return "Oyuncu resmini ayarlar"},
"setScore":function(d){return "skor ayarla"},
"setScoreTooltip":function(d){return "Oyuncunun puanını ayarlar"},
"setSpeed":function(d){return "hızı ayarla"},
"setSpeedTooltip":function(d){return "Seviyenin hızını ayarlar"},
"shareFlappyTwitter":function(d){return "Kendi yaptığım Flappy oyununa bir göz at. Bunu @codeorg ile kendim programladım"},
"shareFlappyTwitterDonor":function(d){return "Yapmış olduğum Flappy oyununu kontrol et. (Destek için teşekkürler "+flappy_locale.v(d,"donor")+" @codeorg)"},
"shareGame":function(d){return "Oyununu paylaş:"},
"soundRandom":function(d){return "gelişigüzel"},
"soundBounce":function(d){return "atla"},
"soundCrunch":function(d){return "çatlak"},
"soundDie":function(d){return "üzgün"},
"soundHit":function(d){return "paramparça"},
"soundPoint":function(d){return "puan"},
"soundSwoosh":function(d){return "vınn"},
"soundWing":function(d){return "kanat"},
"soundJet":function(d){return "jet"},
"soundCrash":function(d){return "çarpışma"},
"soundJingle":function(d){return "jingle"},
"soundSplash":function(d){return "sıçrama"},
"soundLaser":function(d){return "lazer"},
"speedRandom":function(d){return "hızı rastgele ayarla"},
"speedVerySlow":function(d){return "hızı çok yavaş yap"},
"speedSlow":function(d){return "hızı yavaş yap"},
"speedNormal":function(d){return "hızı normal yap"},
"speedFast":function(d){return "hızı süratli yap"},
"speedVeryFast":function(d){return "hızı çok süratli yap"},
"whenClick":function(d){return "tıkladığı zaman"},
"whenClickTooltip":function(d){return "Bir tıklama olayı oluştuğunda aşağıdaki eylemleri yürüt."},
"whenCollideGround":function(d){return "yere çarptığında"},
"whenCollideGroundTooltip":function(d){return "Flappy yere çarptığı zaman aşağıdaki eylemleri yürüt."},
"whenCollideObstacle":function(d){return "Bir engele çarptığı zaman"},
"whenCollideObstacleTooltip":function(d){return "Flappy bir engele çarptığı zaman aşağıdaki eylemler yürüt."},
"whenEnterObstacle":function(d){return "Engel geçildiği zaman"},
"whenEnterObstacleTooltip":function(d){return "Flappy bir engele giriş yaptığı zaman aşağıdaki eylemleri yürüt."},
"whenRunButtonClick":function(d){return "oyun başladığında"},
"whenRunButtonClickTooltip":function(d){return "Oyun başladığında aşağıdaki eylemleri yürüt."},
"yes":function(d){return "Evet"}};