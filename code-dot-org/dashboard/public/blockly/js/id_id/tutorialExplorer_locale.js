var tutorialExplorer_locale = {lc:{"ar":function(n){
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
v:function(d,k){tutorialExplorer_locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){tutorialExplorer_locale.c(d,k);return d[k] in p?p[d[k]]:(k=tutorialExplorer_locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){tutorialExplorer_locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).tutorialExplorer_locale = {
"startButton":function(d){return "Mulai"},
"filterOrgNames":function(d){return "Created by"},
"filterOrgNamesAll":function(d){return "Semua"},
"filterSortBy":function(d){return "Sort by"},
"filterSortByDisplayWeight":function(d){return "Recommended"},
"filterSortByPopularityRank":function(d){return "Most popular"},
"filterGrades":function(d){return "Kelas"},
"filterGradesAll":function(d){return "Segala usia"},
"filterGradesPre":function(d){return "Pembaca pemula"},
"filterGrades25":function(d){return "Kelas 2-5"},
"filterGrades68":function(d){return "Tingkat 6-8"},
"filterGrades9":function(d){return "Tingkat 9+"},
"filterStudentExperience":function(d){return "Pengalaman siswa"},
"filterStudentExperienceBeginner":function(d){return "Pemula"},
"filterStudentExperienceComfortable":function(d){return "Nyaman"},
"filterStudentExperienceExperienced":function(d){return "Experienced"},
"filterPlatform":function(d){return "Teknilogi ruang kelas"},
"filterPlatformComputers":function(d){return "Komputer"},
"filterPlatformAndroid":function(d){return "Android"},
"filterPlatformIos":function(d){return "iPad/iPhone"},
"filterPlatformNoInternet":function(d){return "Buruk atau tidak ada internet"},
"filterPlatformNoComputers":function(d){return "Tidak ada komputer atau perangkat"},
"filterTopics":function(d){return "Topik"},
"filterTopicsScience":function(d){return "Ilmu pengetahuan"},
"filterTopicsMath":function(d){return "Matematika"},
"filterTopicsHistory":function(d){return "Pelajaran Sosoal"},
"filterTopicsLa":function(d){return "Seni Bahasa"},
"filterTopicsArt":function(d){return "Seni, Media, Musik"},
"filterTopicsCsOnly":function(d){return "Hanya Ilmu Komputer"},
"filterActivityType":function(d){return "Jenis aktivitas"},
"filterActivityTypeOnlineTutorial":function(d){return "Self-led tutorial"},
"filterActivityTypeLessonPlan":function(d){return "Rencana pelajaran"},
"filterLength":function(d){return "Panjang"},
"filterLength1Hour":function(d){return "Satu jam"},
"filterLength1HourFollow":function(d){return "One hour with follow-on"},
"filterLengthFewHours":function(d){return "Beberapa jam"},
"filterProgrammingLanguage":function(d){return "Bahasa"},
"filterProgrammingLanguageBlocks":function(d){return "blok"},
"filterProgrammingLanguageTyping":function(d){return "Mengetik"},
"filterProgrammingLanguageOther":function(d){return "Lain"},
"filterActivityTypeRobotics":function(d){return "Robotika"},
"backButtonBack":function(d){return "Kembali ke semua aktivitas"},
"filterHeaderShowFilters":function(d){return "Penyaringan"},
"filterHeaderHideFilters":function(d){return "Terapkan"},
"filterHeaderTutorialCountSingle":function(d){return "1 hasil"},
"filterHeaderTutorialCountPlural":function(d){return tutorialExplorer_locale.v(d,"tutorial_count")+" hasil"},
"roboticsButtonText":function(d){return "Lihat aktivitas robotik"},
"roboticsText":function(d){return "Punya robot? Gunakan aktivitas ini dan buat jam dari kode yang nyata untuk siswa dari semua usia!"},
"tutorialSetNoTutorials":function(d){return "Pencarian Anda tidak ditemukan. Cobalah menghapus beberapa penyaringan untuk melihat lebih banyak aktivitas."},
"tutorialDetailsTeacherNotes":function(d){return "Catatan guru"},
"tutorialDetailsShortLink":function(d){return "Tautan pendek"},
"tutorialDetailInternationalLanguages":function(d){return "Bahasa"},
"tutorialDetailStandards":function(d){return "Standar"},
"tutorialDetailDisabled":function(d){return "Tutorial ini untuk sementara tidak tersedia."},
"headingTutorialsYourLanguage":function(d){return "Aktivitas dslam bahasa Anda"},
"showAllTutorialsButton":function(d){return "Tunjukan aktivitas untuk banysk banhasa"},
"hideAllTutorialsButton":function(d){return "Sembunyikan aktivitas untuk banysk bahasa"},
"noTutorialsYourLanguage":function(d){return "Tidak ada aktivitas yang didukung dslam bahasa Anda. Coba aktivitas dalam bahasa yang lain dengan mengklik tombol di bawah ini."},
"bottomGuidelinesLink":function(d){return "Klik di sini untuk melihat kriteria kami dan Penyampaian Pedoman untuk tutorial jam kode."},
"bottomSpecialNeedsLink":function(d){return "Klik di sini untuk informasi lebih lanjut tentang mendukung siswa berkebutuhan khusus."}};