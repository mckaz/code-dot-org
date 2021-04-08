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
"startButton":function(d){return "Başlayın"},
"filterOrgNames":function(d){return "Oluşturan Kişi"},
"filterOrgNamesAll":function(d){return "Tamamı"},
"filterSortBy":function(d){return "Göre sırala"},
"filterSortByDisplayWeight":function(d){return "Tavsiye Edilen"},
"filterSortByPopularityRank":function(d){return "En popüler"},
"filterGrades":function(d){return "Sınıflar"},
"filterGradesAll":function(d){return "Bütün Seviyeler"},
"filterGradesPre":function(d){return "Okul Öncesi"},
"filterGrades25":function(d){return "2. , 3. , 4. , 5. sınıflar "},
"filterGrades68":function(d){return " 6. , 7. , 8. sınıflar"},
"filterGrades9":function(d){return "9+ Sınıflar "},
"filterStudentExperience":function(d){return "Öğrenci deneyimi"},
"filterStudentExperienceBeginner":function(d){return "Acemi"},
"filterStudentExperienceComfortable":function(d){return "Rahat"},
"filterStudentExperienceExperienced":function(d){return "Deneyimli"},
"filterPlatform":function(d){return "Sınıf teknolojisi"},
"filterPlatformComputers":function(d){return "Bilgisayarlar"},
"filterPlatformAndroid":function(d){return "Android"},
"filterPlatformIos":function(d){return "iPad/iPhone"},
"filterPlatformNoInternet":function(d){return "İnternet bağlantısı zayıf veya yoksa"},
"filterPlatformNoComputers":function(d){return "Bilgisayar veya aygıt yoksa"},
"filterTopics":function(d){return "Başlıklar"},
"filterTopicsScience":function(d){return "Fen Bilimleri"},
"filterTopicsMath":function(d){return "Matematik"},
"filterTopicsHistory":function(d){return "Sosyal Bilgiler"},
"filterTopicsLa":function(d){return "Dil Sanatları"},
"filterTopicsArt":function(d){return "Sanat, Medya, Müzik"},
"filterTopicsCsOnly":function(d){return "Yalnızca Bilgisayar Bilimi"},
"filterActivityType":function(d){return "Etkinlik türü"},
"filterActivityTypeOnlineTutorial":function(d){return "Kendi kendine yol gösterici"},
"filterActivityTypeLessonPlan":function(d){return "ders planı"},
"filterLength":function(d){return "Boy"},
"filterLength1Hour":function(d){return "Bir saat"},
"filterLength1HourFollow":function(d){return "1 saatin devamı olarak yapılacak olan"},
"filterLengthFewHours":function(d){return "Bir kaç saat"},
"filterProgrammingLanguage":function(d){return "Dil"},
"filterProgrammingLanguageBlocks":function(d){return "bloklar"},
"filterProgrammingLanguageTyping":function(d){return "yazarak"},
"filterProgrammingLanguageOther":function(d){return "Diğer"},
"filterActivityTypeRobotics":function(d){return "Robotik"},
"backButtonBack":function(d){return "Etkinliklere geri dön"},
"filterHeaderShowFilters":function(d){return "Filtreler"},
"filterHeaderHideFilters":function(d){return "uygula"},
"filterHeaderTutorialCountSingle":function(d){return "1 sonuç"},
"filterHeaderTutorialCountPlural":function(d){return tutorialExplorer_locale.v(d,"tutorial_count")+" sonuçları"},
"roboticsButtonText":function(d){return "Robotik etkinliklere bak"},
"roboticsText":function(d){return "Robotların mı var? Bu  etkinlikleri kullanarak her yaştan öğrenci için kendin bir 'Kod Saati' oluştur."},
"tutorialSetNoTutorials":function(d){return "Aramanıza bir sonuç bulunamadı. \nLütfen daha fazla etkinlik görmek için bazı arama filtrelerini değiştirin."},
"tutorialDetailsTeacherNotes":function(d){return "Öğretmen notları"},
"tutorialDetailsShortLink":function(d){return "Kısa bağlantı"},
"tutorialDetailInternationalLanguages":function(d){return "Diller"},
"tutorialDetailStandards":function(d){return "Standartlar"},
"tutorialDetailDisabled":function(d){return "Bu eğitim geçici olarak kullanılamıyor."},
"headingTutorialsYourLanguage":function(d){return "Kendi dilinizdeki etkinlikler"},
"showAllTutorialsButton":function(d){return "Farklı dillerdeki etkinlikleri göster"},
"hideAllTutorialsButton":function(d){return "Farklı dillerdeki etkinlikleri gizle"},
"noTutorialsYourLanguage":function(d){return "Sizin dilinize uygun hiç bir etkinlik bulunamadı. Aşağıdaki butona basarak diğer dillerdeki etkinlikleri deneyebilirsiniz."},
"bottomGuidelinesLink":function(d){return "Buraya tıklayarak, 'Kod Saati' eğitimleri için başvuru kurallarını ve ilkelerini görebilirsin."},
"bottomSpecialNeedsLink":function(d){return "Özel ihtiyaca sahip öğrencileri destekleyici daha fazla bilgiye sahip olmak için tıklayınız."}};