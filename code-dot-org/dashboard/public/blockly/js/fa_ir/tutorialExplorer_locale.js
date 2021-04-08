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
"startButton":function(d){return "شروع"},
"filterOrgNames":function(d){return "Created by"},
"filterOrgNamesAll":function(d){return "All"},
"filterSortBy":function(d){return "Sort by"},
"filterSortByDisplayWeight":function(d){return "Recommended"},
"filterSortByPopularityRank":function(d){return "Most popular"},
"filterGrades":function(d){return "Grades"},
"filterGradesAll":function(d){return "همه‌ی سنین"},
"filterGradesPre":function(d){return "Pre-reader"},
"filterGrades25":function(d){return "Grades 2-5"},
"filterGrades68":function(d){return "Grades 6-8"},
"filterGrades9":function(d){return "Grades 9+"},
"filterStudentExperience":function(d){return "Student experience"},
"filterStudentExperienceBeginner":function(d){return "مبتدی"},
"filterStudentExperienceComfortable":function(d){return "راحت"},
"filterStudentExperienceExperienced":function(d){return "Experienced"},
"filterPlatform":function(d){return "Classroom technology"},
"filterPlatformComputers":function(d){return "کامپیوترها"},
"filterPlatformAndroid":function(d){return "آندروید"},
"filterPlatformIos":function(d){return "iPad/iPhone"},
"filterPlatformNoInternet":function(d){return "Poor or no internet"},
"filterPlatformNoComputers":function(d){return "No computers or devices"},
"filterTopics":function(d){return "موضوعات"},
"filterTopicsScience":function(d){return "علم"},
"filterTopicsMath":function(d){return "ریاضی"},
"filterTopicsHistory":function(d){return "مطالعات اجتماعی"},
"filterTopicsLa":function(d){return "Language Arts"},
"filterTopicsArt":function(d){return "هنر، رسانه، موسیقی"},
"filterTopicsCsOnly":function(d){return "فقط علوم‌کامپیوتر"},
"filterActivityType":function(d){return "نوع فعالیت"},
"filterActivityTypeOnlineTutorial":function(d){return "Self-led tutorial"},
"filterActivityTypeLessonPlan":function(d){return "طرح درس"},
"filterLength":function(d){return "طول"},
"filterLength1Hour":function(d){return "یک ساعت"},
"filterLength1HourFollow":function(d){return "One hour with follow-on"},
"filterLengthFewHours":function(d){return "چند ساعت"},
"filterProgrammingLanguage":function(d){return "زبان"},
"filterProgrammingLanguageBlocks":function(d){return "بلوک ها"},
"filterProgrammingLanguageTyping":function(d){return "تایپ کردن"},
"filterProgrammingLanguageOther":function(d){return "دیگر"},
"filterActivityTypeRobotics":function(d){return "رباتیک"},
"backButtonBack":function(d){return "Back to all activities"},
"filterHeaderShowFilters":function(d){return "Filters"},
"filterHeaderHideFilters":function(d){return "Apply"},
"filterHeaderTutorialCountSingle":function(d){return "یک نتیجه"},
"filterHeaderTutorialCountPlural":function(d){return tutorialExplorer_locale.v(d,"tutorial_count")+" results"},
"roboticsButtonText":function(d){return "مشاهده فعالیت‌های رباتیک"},
"roboticsText":function(d){return "Got robots? Use these activities and make a tangible Hour of Code for students of any age!"},
"tutorialSetNoTutorials":function(d){return "جستجوی شما نتیجه‌ای نداشت. لطفا سعی کنید تعدادی از فیلترها را حذف کنید تا فعالیت‌های بیش‌تری را مشاده کنید."},
"tutorialDetailsTeacherNotes":function(d){return "یادداشت‌های معلم"},
"tutorialDetailsShortLink":function(d){return "لینک کوتاه"},
"tutorialDetailInternationalLanguages":function(d){return "زبان‌ها"},
"tutorialDetailStandards":function(d){return "استانداردها"},
"tutorialDetailDisabled":function(d){return "این آموزش به طور موقت قابل دسترسی نیست."},
"headingTutorialsYourLanguage":function(d){return "Activities in your language"},
"showAllTutorialsButton":function(d){return "Show activities for many languages"},
"hideAllTutorialsButton":function(d){return "Hide activities for many languages"},
"noTutorialsYourLanguage":function(d){return "هیچ فعالیتی برای زبان شما وجود ندارد. ب کلیک روی دکمه‌ی زیر، فعالیت در زبان‌های دیگر را امتحان کنید."},
"bottomGuidelinesLink":function(d){return "Click here to see our criteria and submission guidelines for Hour of Code tutorials."},
"bottomSpecialNeedsLink":function(d){return "Click here for more information on supporting special needs students."}};