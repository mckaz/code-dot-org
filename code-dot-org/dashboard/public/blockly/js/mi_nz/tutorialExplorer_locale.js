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
"startButton":function(d){return "Start"},
"filterOrgNames":function(d){return "Created by"},
"filterOrgNamesAll":function(d){return "All"},
"filterSortBy":function(d){return "Sort by"},
"filterSortByDisplayWeight":function(d){return "Recommended"},
"filterSortByPopularityRank":function(d){return "Most popular"},
"filterGrades":function(d){return "Ngā Tau"},
"filterGradesAll":function(d){return "All ages"},
"filterGradesPre":function(d){return "Kaipānui Nohinohi"},
"filterGrades25":function(d){return "Tau 2-5"},
"filterGrades68":function(d){return "Tau 6-8"},
"filterGrades9":function(d){return "Tau 9+"},
"filterStudentExperience":function(d){return "Te matatau o te ākonga"},
"filterStudentExperienceBeginner":function(d){return "Beginner"},
"filterStudentExperienceComfortable":function(d){return "Hāneanea"},
"filterStudentExperienceExperienced":function(d){return "Experienced"},
"filterPlatform":function(d){return "Hangarau ā-akomanga"},
"filterPlatformComputers":function(d){return "Ngā Rorohiko"},
"filterPlatformAndroid":function(d){return "Android"},
"filterPlatformIos":function(d){return "īPapa/īWaea"},
"filterPlatformNoInternet":function(d){return "Tuihono ngoikore, kore noa iho rānei"},
"filterPlatformNoComputers":function(d){return "Kāore he rorohiko, he pūrere rānei"},
"filterTopics":function(d){return "Kaupapa"},
"filterTopicsScience":function(d){return "Pūtaiao"},
"filterTopicsMath":function(d){return "Pāngarau"},
"filterTopicsHistory":function(d){return "Tikanga ā Iwi"},
"filterTopicsLa":function(d){return "Ngā Reo"},
"filterTopicsArt":function(d){return "Toi Ataata, Pāpāho, Toi Puoro"},
"filterTopicsCsOnly":function(d){return "Pūtaiao Rorohiko anake"},
"filterActivityType":function(d){return "Momo ngohe"},
"filterActivityTypeOnlineTutorial":function(d){return "Whakaakoranga Takitahi"},
"filterActivityTypeLessonPlan":function(d){return "Mahere akoranga"},
"filterLength":function(d){return "Roanga"},
"filterLength1Hour":function(d){return "Kotahi haora"},
"filterLength1HourFollow":function(d){return "Kotahi haora me ngā āpitihanga"},
"filterLengthFewHours":function(d){return "Ētahi haora torutoru"},
"filterProgrammingLanguage":function(d){return "Reo"},
"filterProgrammingLanguageBlocks":function(d){return "Ngā Paraka"},
"filterProgrammingLanguageTyping":function(d){return "Patopato"},
"filterProgrammingLanguageOther":function(d){return "Other"},
"filterActivityTypeRobotics":function(d){return "Mahi Karetao"},
"backButtonBack":function(d){return "Hoki atu ki ngā ngohe katoa"},
"filterHeaderShowFilters":function(d){return "Ngā Tātari"},
"filterHeaderHideFilters":function(d){return "Hoatu"},
"filterHeaderTutorialCountSingle":function(d){return "1 te huanga"},
"filterHeaderTutorialCountPlural":function(d){return tutorialExplorer_locale.v(d,"tutorial_count")+" ngā huanga"},
"roboticsButtonText":function(d){return "Tirohia ngā ngohe karetao"},
"roboticsText":function(d){return "He karetao āu? Whakamahia ēnei ngohe, ā, hangaia i tētahi Hour of Code mā ngā ākonga ahakoa te pakeke!"},
"tutorialSetNoTutorials":function(d){return "Kāore tō rapunga i whai hua.\nTēnā, tangohia ētahi o ngā tātaringa kia kitea ētahi atu ngohe."},
"tutorialDetailsTeacherNotes":function(d){return "Ngā tuhipoka pouako"},
"tutorialDetailsShortLink":function(d){return "Honongaitua poto"},
"tutorialDetailInternationalLanguages":function(d){return "Ngā Reo"},
"tutorialDetailStandards":function(d){return "Standards"},
"tutorialDetailDisabled":function(d){return "Kāore tēnei whakaakoranga i te wātea i tēnei wā."},
"headingTutorialsYourLanguage":function(d){return "Ngā ngohe kei tō reo"},
"showAllTutorialsButton":function(d){return "Whakaatu i ngā ngohe mō ngā reo maha"},
"hideAllTutorialsButton":function(d){return "Huna i ngā ngohe mō ngā reo maha"},
"noTutorialsYourLanguage":function(d){return "Karekau noa iho ētahi ngohe kua tuhia ki tō reo. Whakamātau i ngā ngohe i tētahi atu reo mā te pāwhiri i te pātene kei raro nei."},
"bottomGuidelinesLink":function(d){return "Pāwhiri i konei kia kitea ā mātou paearu me ā mātou aratohu tāpaetanga mō ngā whakaakoranga Hour of Code."},
"bottomSpecialNeedsLink":function(d){return "Pāwhiri i konei kia kitea he mōhiohio anō e pā ana ki te tautoko i ngā ākonga motuhake."}};