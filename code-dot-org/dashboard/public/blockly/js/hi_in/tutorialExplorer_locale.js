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
"startButton":function(d){return "शुरू करें"},
"filterOrgNames":function(d){return "Created by"},
"filterOrgNamesAll":function(d){return "All"},
"filterSortBy":function(d){return "Sort by"},
"filterSortByDisplayWeight":function(d){return "Recommended"},
"filterSortByPopularityRank":function(d){return "Most popular"},
"filterGrades":function(d){return "ग्रेड"},
"filterGradesAll":function(d){return "सभी आयु"},
"filterGradesPre":function(d){return "पूर्व रीडर"},
"filterGrades25":function(d){return "ग्रेड 2-5"},
"filterGrades68":function(d){return "6-8 ग्रेड"},
"filterGrades9":function(d){return "ग्रेड 9 +"},
"filterStudentExperience":function(d){return "छात्र अनुभव"},
"filterStudentExperienceBeginner":function(d){return "शुरआती"},
"filterStudentExperienceComfortable":function(d){return "आरामदायक"},
"filterStudentExperienceExperienced":function(d){return "Experienced"},
"filterPlatform":function(d){return "कक्षा प्रौद्योगिकी"},
"filterPlatformComputers":function(d){return "कम्प्यूटर्स"},
"filterPlatformAndroid":function(d){return "Android"},
"filterPlatformIos":function(d){return "iPad/iPhone"},
"filterPlatformNoInternet":function(d){return "Poor or no internet"},
"filterPlatformNoComputers":function(d){return "No computers or devices"},
"filterTopics":function(d){return "विषय"},
"filterTopicsScience":function(d){return "विज्ञान"},
"filterTopicsMath":function(d){return "गणित"},
"filterTopicsHistory":function(d){return "सामाजिक अध्ययन"},
"filterTopicsLa":function(d){return "भाषा कला"},
"filterTopicsArt":function(d){return "कला, मीडिया, संगीत"},
"filterTopicsCsOnly":function(d){return "केवल कंप्यूटर विज्ञान"},
"filterActivityType":function(d){return "गतिविधि का प्रकार:"},
"filterActivityTypeOnlineTutorial":function(d){return "स्व-नेतृत्व ट्यूटोरियल"},
"filterActivityTypeLessonPlan":function(d){return "पाठ योजना"},
"filterLength":function(d){return "लंबाई"},
"filterLength1Hour":function(d){return "एक घंटे"},
"filterLength1HourFollow":function(d){return "One hour with follow-on"},
"filterLengthFewHours":function(d){return "कुछ घंटे"},
"filterProgrammingLanguage":function(d){return "भाषा"},
"filterProgrammingLanguageBlocks":function(d){return "Blocks"},
"filterProgrammingLanguageTyping":function(d){return "टाइपिंग"},
"filterProgrammingLanguageOther":function(d){return "Other"},
"filterActivityTypeRobotics":function(d){return "रोबोटिक्स"},
"backButtonBack":function(d){return "सभी गतिविधियों के लिए वापस"},
"filterHeaderShowFilters":function(d){return "छानना"},
"filterHeaderHideFilters":function(d){return "लागू करें"},
"filterHeaderTutorialCountSingle":function(d){return "1 परिणाम"},
"filterHeaderTutorialCountPlural":function(d){return tutorialExplorer_locale.v(d,"tutorial_count")+" परिणाम"},
"roboticsButtonText":function(d){return "View robotics activities"},
"roboticsText":function(d){return "रोबोट मिल गया? इन गतिविधियों का उपयोग करें और एक ठोस घंटे कोड के किसी भी उम्र के छात्रों के लिए बना!"},
"tutorialSetNoTutorials":function(d){return "Your search returned no results.\nPlease try removing some filters to see more activities."},
"tutorialDetailsTeacherNotes":function(d){return "शिक्षक नोट्स"},
"tutorialDetailsShortLink":function(d){return "कम लिंक"},
"tutorialDetailInternationalLanguages":function(d){return "भाषाएँ"},
"tutorialDetailStandards":function(d){return "Standards"},
"tutorialDetailDisabled":function(d){return "This tutorial is temporarily unavailable."},
"headingTutorialsYourLanguage":function(d){return "अपनी भाषा में गतिविधियाँ"},
"showAllTutorialsButton":function(d){return "कई भाषाओं के लिए गतिविधियों दिखाएँ"},
"hideAllTutorialsButton":function(d){return "कई भाषाओं के लिए गतिविधियों को छिपाने"},
"noTutorialsYourLanguage":function(d){return "There are no activities supported in your language. Try activities in other languages by clicking the button below."},
"bottomGuidelinesLink":function(d){return "Click here to see our criteria and submission guidelines for Hour of Code tutorials."},
"bottomSpecialNeedsLink":function(d){return "Click here for more information on supporting special needs students."}};