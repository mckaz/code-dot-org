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
"startButton":function(d){return "開始"},
"filterOrgNames":function(d){return "建立者："},
"filterOrgNamesAll":function(d){return "全部"},
"filterSortBy":function(d){return "排序依據"},
"filterSortByDisplayWeight":function(d){return "推薦"},
"filterSortByPopularityRank":function(d){return "最受歡迎的"},
"filterGrades":function(d){return "年級"},
"filterGradesAll":function(d){return "所有年齢"},
"filterGradesPre":function(d){return "學齡前"},
"filterGrades25":function(d){return "年級 2-5"},
"filterGrades68":function(d){return "年級 6-8"},
"filterGrades9":function(d){return "年級 9+"},
"filterStudentExperience":function(d){return "學生經驗"},
"filterStudentExperienceBeginner":function(d){return "基礎"},
"filterStudentExperienceComfortable":function(d){return "適中"},
"filterStudentExperienceExperienced":function(d){return "經驗"},
"filterPlatform":function(d){return "教室設備"},
"filterPlatformComputers":function(d){return "電腦"},
"filterPlatformAndroid":function(d){return "安卓系統"},
"filterPlatformIos":function(d){return "iPad 或 iPhone"},
"filterPlatformNoInternet":function(d){return "無網路或速度慢"},
"filterPlatformNoComputers":function(d){return "沒有電腦等設備"},
"filterTopics":function(d){return "所有主題"},
"filterTopicsScience":function(d){return "科學"},
"filterTopicsMath":function(d){return "數學"},
"filterTopicsHistory":function(d){return "社會研究"},
"filterTopicsLa":function(d){return "語言藝術"},
"filterTopicsArt":function(d){return "藝術、媒體、音樂"},
"filterTopicsCsOnly":function(d){return "單純的計算機科學"},
"filterActivityType":function(d){return "活動類型"},
"filterActivityTypeOnlineTutorial":function(d){return "自學教程"},
"filterActivityTypeLessonPlan":function(d){return "教學計畫"},
"filterLength":function(d){return "時間長度"},
"filterLength1Hour":function(d){return "一個小時"},
"filterLength1HourFollow":function(d){return "一個小時後有進階"},
"filterLengthFewHours":function(d){return "多個小時"},
"filterProgrammingLanguage":function(d){return "語言"},
"filterProgrammingLanguageBlocks":function(d){return "程式積木"},
"filterProgrammingLanguageTyping":function(d){return "打字"},
"filterProgrammingLanguageOther":function(d){return "其它"},
"filterActivityTypeRobotics":function(d){return "機器人技術"},
"backButtonBack":function(d){return "回到所有活動"},
"filterHeaderShowFilters":function(d){return "篩選條件"},
"filterHeaderHideFilters":function(d){return "套用"},
"filterHeaderTutorialCountSingle":function(d){return "1 個結果"},
"filterHeaderTutorialCountPlural":function(d){return tutorialExplorer_locale.v(d,"tutorial_count")+" 個結果"},
"roboticsButtonText":function(d){return "查看機器人相關活動"},
"roboticsText":function(d){return "你有機器人？運用這些活動，讓學生們一小時玩「有形的」程式（適用各年齡層）！"},
"tutorialSetNoTutorials":function(d){return "找不到相符結果，請改變一些篩選條件好看到更多活動。"},
"tutorialDetailsTeacherNotes":function(d){return "教師備註"},
"tutorialDetailsShortLink":function(d){return "短連結"},
"tutorialDetailInternationalLanguages":function(d){return "語言"},
"tutorialDetailStandards":function(d){return "標準"},
"tutorialDetailDisabled":function(d){return "這個教程暫時無法使用。"},
"headingTutorialsYourLanguage":function(d){return "中文活動"},
"showAllTutorialsButton":function(d){return "顯示各種語言的活動"},
"hideAllTutorialsButton":function(d){return "隱藏各種語言的活動"},
"noTutorialsYourLanguage":function(d){return "目前沒有任何使用你的語言的活動。點擊下方按鈕以觀看其他語言的活動。"},
"bottomGuidelinesLink":function(d){return "點擊此處查看如何將課程提交給一小時玩程式。"},
"bottomSpecialNeedsLink":function(d){return "點擊此處以取得特殊需求學生支援的相關資訊。"}};