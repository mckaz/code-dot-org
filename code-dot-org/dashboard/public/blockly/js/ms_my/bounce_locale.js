var bounce_locale = {lc:{"ar":function(n){
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
v:function(d,k){bounce_locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){bounce_locale.c(d,k);return d[k] in p?p[d[k]]:(k=bounce_locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){bounce_locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).bounce_locale = {
"basketballLaunchBall":function(d){return "baling bola baharu"},
"basketballLaunchBallTooltip":function(d){return "Lontar bola untuk mula bermain."},
"basketballSetPaddle":function(d){return "tetapkan tangan"},
"basketballSetPaddleSpeedFast":function(d){return "tetapkan kelajuan tangan pantas"},
"basketballSetPaddleSpeedNormal":function(d){return "tetapkan kelajuan tangan biasa"},
"basketballSetPaddleSpeedRandom":function(d){return "tetapkan kelajuan tangan rawak"},
"basketballSetPaddleSpeedSlow":function(d){return "tetapkan kelajuan tangan perlahan"},
"basketballSetPaddleSpeedTooltip":function(d){return "Tetapkan kelajuan tangan"},
"basketballSetPaddleSpeedVeryFast":function(d){return "tetapkan kelajuan tinggi tangan"},
"basketballSetPaddleSpeedVerySlow":function(d){return "tetapkan kelajuan rendah tangan"},
"basketballWhenBallMissesPaddle":function(d){return "ketika bola tidak kena tangan"},
"basketballWhenPaddleCollided":function(d){return "ketika bola kena tangan"},
"bounceBall":function(d){return "bola melantun"},
"bounceBallTooltip":function(d){return "Lantunkan sebiji bola dari objek."},
"continue":function(d){return "Teruskan"},
"dirE":function(d){return "E"},
"dirN":function(d){return "N"},
"dirS":function(d){return "S"},
"dirW":function(d){return "W"},
"doCode":function(d){return "buat"},
"elseCode":function(d){return "lain"},
"finalLevel":function(d){return "Tahniah! Anda berjaya menyelesaikan puzzle terakhir."},
"heightParameter":function(d){return "ketinggian"},
"ifCode":function(d){return "jika"},
"ifPathAhead":function(d){return "jika laluan ke hadapan"},
"ifTooltip":function(d){return "Jika ada laluan ke arah yang ditentukan, lakukan beberapa tindakan."},
"ifelseTooltip":function(d){return "Jika terdapat lorong dalam arah yang ditentukan, maka lakukan tindakan blok pertama. Sebaliknya, lakukan tindakan untuk blok kedua."},
"incrementOpponentScore":function(d){return "skor markah lawan"},
"incrementOpponentScoreTooltip":function(d){return "Tambah satu markah lawan semasa."},
"incrementPlayerScore":function(d){return "markah skor"},
"incrementPlayerScoreTooltip":function(d){return "Tambah satu ke skor pemain semasa."},
"isWall":function(d){return "adakah ini dinding"},
"isWallTooltip":function(d){return "Kembali betul jika ada dinding di sini"},
"launchBall":function(d){return "lancarkan bola baharu"},
"launchBallTooltip":function(d){return "Lontar bola untuk mulakan permainan."},
"makeYourOwn":function(d){return "Cipta Permainan Bola Melantun Anda Sendiri"},
"moveDown":function(d){return "gerak ke bawah"},
"moveDownTooltip":function(d){return "Gerak pedal ke bawah."},
"moveForward":function(d){return "bergerak ke hadapan"},
"moveForwardTooltip":function(d){return "Bergerak ke hadapan satu ruang."},
"moveLeft":function(d){return "gerak ke kiri"},
"moveLeftTooltip":function(d){return "Gerakkan pedal ke kiri."},
"moveRight":function(d){return "gerak ke kanan"},
"moveRightTooltip":function(d){return "Gerakkan pedal ke kanan."},
"moveUp":function(d){return "gerak ke atas"},
"moveUpTooltip":function(d){return "Gerakkan pedal ke atas."},
"nextLevel":function(d){return "Tahniah! Anda telah melengkapkan puzzle ini."},
"no":function(d){return "Tidak"},
"noPathAhead":function(d){return "laluan disekat"},
"noPathLeft":function(d){return "Tiada laluan di sebelah kiri"},
"noPathRight":function(d){return "Tiada laluan ke kanan"},
"numBlocksNeeded":function(d){return "Puzzle ini boleh diselesaikan dengan %1 blok."},
"pathAhead":function(d){return "laluan ke depan"},
"pathLeft":function(d){return "Jika laluan di sebelah kiri"},
"pathRight":function(d){return "jika laluan ke kanan"},
"pilePresent":function(d){return "Terdapat longgokan"},
"playSoundBounce":function(d){return "mainkan bunyi lantunan"},
"playSoundCheer":function(d){return "mainkan bunyi sorakan"},
"playSoundCrunch":function(d){return "Mainkan bunyi crunch"},
"playSoundGoal1":function(d){return "mainkan bunyi goal 1"},
"playSoundGoal2":function(d){return "mainkan bunyi goal 2"},
"playSoundHit":function(d){return "mainkan bunyi hit"},
"playSoundKick":function(d){return "mainkan bunyi sepakan"},
"playSoundLosePoint":function(d){return "mainkan bunyi lose point"},
"playSoundLosePoint2":function(d){return "mainkan sound lose point 2"},
"playSoundRetro":function(d){return "mainkan bunyi retro"},
"playSoundRubber":function(d){return "mainkan bunyi rubber"},
"playSoundSlap":function(d){return "mainkan bunyi slap"},
"playSoundSlapshot":function(d){return "mainkan bunyi tamparan"},
"playSoundSwish":function(d){return "mainkan bunyi terkena jaring"},
"playSoundTooltip":function(d){return "mainkan bunyi yang terpilih."},
"playSoundWhistle":function(d){return "tiupkan bunyi wisel"},
"playSoundWinPoint":function(d){return "mainkan bunyi win point"},
"playSoundWinPoint2":function(d){return "mainkan bunyi win point 2"},
"playSoundWood":function(d){return "mainkan bunyi wood"},
"putdownTower":function(d){return "letak tower ke bawah"},
"reinfFeedbackMsg":function(d){return "Anda boleh tekan butang \"Cuba lagi\" untuk kembali bermain."},
"removeSquare":function(d){return "remove square"},
"repeatUntil":function(d){return "ulang sehingga"},
"repeatUntilBlocked":function(d){return "apabila laluan ke hadapan"},
"repeatUntilFinish":function(d){return "Ulang sehingga selesai"},
"scoreText":function(d){return "Markah: "+bounce_locale.v(d,"playerScore")+": "+bounce_locale.v(d,"opponentScore")},
"setBackground":function(d){return "tetapkan "+bounce_locale.v(d,"background")+" adegan"},
"setBackgroundHardcourt":function(d){return "tetapkan latarbelakang hardcourt"},
"setBackgroundRandom":function(d){return "Set adegan rawak"},
"setBackgroundRetro":function(d){return "tetapkan latarbelakang retro"},
"setBackgroundTooltip":function(d){return "Set gambar latar belakang"},
"setBallHardcourt":function(d){return "tetapkan bola hardcourt"},
"setBallRandom":function(d){return "tetapkan bola random"},
"setBallRetro":function(d){return "tetapkan bola retro"},
"setBall":function(d){return "tetapkan bola "+bounce_locale.v(d,"ball")},
"setBallSpeedFast":function(d){return "tetapkan kelajuan bola laju"},
"setBallSpeedNormal":function(d){return "tetapkan kelajuan bola sebagai normal"},
"setBallSpeedRandom":function(d){return "tetapkan speed bola random"},
"setBallSpeedSlow":function(d){return "tetapkan kelajuan bola lambat"},
"setBallSpeedTooltip":function(d){return "Tetapkan kelajuan bola"},
"setBallSpeedVeryFast":function(d){return "tetapkan kelajuan bola sangat laju"},
"setBallSpeedVerySlow":function(d){return "Tetap kelajuan bola sangat perlahan"},
"setBallTooltip":function(d){return "tetapkan imej bola"},
"setPaddle":function(d){return "tetapkan pedal"},
"setPaddleHardcourt":function(d){return "tetapkan pedal hardcourt"},
"setPaddleRandom":function(d){return "tetapkan pedal rawak"},
"setPaddleRetro":function(d){return "tetapkan pedal retro"},
"setPaddleSpeedFast":function(d){return "menetapkan kelajuan dayung dengan cepat"},
"setPaddleSpeedNormal":function(d){return "tetapkan kelajuan dayung yang normal"},
"setPaddleSpeedRandom":function(d){return "Tetapkan kelajuan pedal rawak"},
"setPaddleSpeedSlow":function(d){return "menetapkan kelajuan perlahan"},
"setPaddleSpeedTooltip":function(d){return "Menetapkan kelajuan padel"},
"setPaddleSpeedVeryFast":function(d){return "menetapkan kelajuan dayung dengan sangat cepat"},
"setPaddleSpeedVerySlow":function(d){return "menetapkan kelajuan kayuhan yang perlahan"},
"setPaddleTooltip":function(d){return "Tetapkan imej pedal"},
"setPlayer":function(d){return "set player"},
"setPlayerSpeedFast":function(d){return "tetapkan kelajuan pemain pantas"},
"setPlayerSpeedNormal":function(d){return "tetapkan kelajuan pemain biasa"},
"setPlayerSpeedRandom":function(d){return "tetapkan kelajuan pemain rawak"},
"setPlayerSpeedSlow":function(d){return "tetapkan kelajuan pemain perlahan"},
"setPlayerSpeedTooltip":function(d){return "Tetapkan kelajuan pemain"},
"setPlayerSpeedVeryFast":function(d){return "tetapkan kelajuan pemain lebih pantas"},
"setPlayerSpeedVerySlow":function(d){return "tetapkan kelajuan pemain lebih perlahan"},
"setTeamTooltip":function(d){return "Tetapkan logo dan skema warna"},
"setTeam":function(d){return "Tetapkan kumpulan "+bounce_locale.v(d,"team")},
"setTeamRandom":function(d){return "Tetapkan kumpulan rawak"},
"shareBounceTwitter":function(d){return "Lihat permainan Bounce yang saya buat.  Saya tulis sendiri dengan @codeorg"},
"shareBounceTwitterDonor":function(d){return "Check out the Bounce game I made. (Thanks "+bounce_locale.v(d,"donor")+" for supporting @codeorg)"},
"shareGame":function(d){return "Kongsi permainan anda:"},
"turnLeft":function(d){return "belok kiri"},
"turnRight":function(d){return "belok kanan"},
"turnTooltip":function(d){return "Pusingkan saya ke kiri atau kanan 90 darjah."},
"whenBallInGoal":function(d){return "apabila bola dalam gol"},
"whenBallInGoalTooltip":function(d){return "Jalankan tugasan di bawah apabila sebiji bola masuk ke dalam gol."},
"whenBallMissesPaddle":function(d){return "apabila bola tidak kena pada padel"},
"whenBallMissesPaddleTooltip":function(d){return "Jalankan tugasan di bawah apabila sebiji bola tidak kena pada padel."},
"whenBallMissesPlayer":function(d){return "ketika bola terlepas dari pemain"},
"whenDown":function(d){return "apabila panah bawah"},
"whenDownTooltip":function(d){return "Jalankan tugasan di bawah apabila kekunci panah bawah ditekan."},
"whenGameStarts":function(d){return "Apabila permainan bermula"},
"whenGameStartsTooltip":function(d){return "Execute the actions below when the game starts."},
"whenLeft":function(d){return "apabila panah kiri"},
"whenLeftTooltip":function(d){return "Jalankan tugasan di bawah apabila kekunci panah kiri ditekan."},
"whenPaddleCollided":function(d){return "apabila bola mengena pada padel"},
"whenPaddleCollidedTooltip":function(d){return "Jalankan tugasan di bawah apabila sebiji bola mengena pada satu padel."},
"whenPlayerCollided":function(d){return "apabila bola terkena pemain"},
"whenPlayerCollidedTooltip":function(d){return "Laksanakan arahan berikut apabila bola terkena pemain."},
"whenRight":function(d){return "apabila panah kanan "},
"whenRightTooltip":function(d){return "Jalankan tugasan di bawah apabila kekunci panah kanan ditekan."},
"whenUp":function(d){return "apabila panah atas"},
"whenUpTooltip":function(d){return "Jalankan tugasan di bawah apabila kekunci panah atas ditekan."},
"whenWallCollided":function(d){return "apabila bola menghentam dinding"},
"whenWallCollidedTooltip":function(d){return "Jalankan aksi berikut apabila bola melanggar dengan dinding."},
"whileMsg":function(d){return "semasa"},
"whileTooltip":function(d){return "Ulangi tindakan yang tertutup sehingga titik penamat dicapai."},
"yes":function(d){return "Ya"}};