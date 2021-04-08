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
"startButton":function(d){return "开始"},
"filterOrgNames":function(d){return "创建者"},
"filterOrgNamesAll":function(d){return "全部"},
"filterSortBy":function(d){return "排序方式"},
"filterSortByDisplayWeight":function(d){return "推荐"},
"filterSortByPopularityRank":function(d){return "最受欢迎的"},
"filterGrades":function(d){return "年级"},
"filterGradesAll":function(d){return "所有年级"},
"filterGradesPre":function(d){return "学龄前"},
"filterGrades25":function(d){return "2-5年级"},
"filterGrades68":function(d){return "6-8年级"},
"filterGrades9":function(d){return "9年级以上"},
"filterStudentExperience":function(d){return "学生体验"},
"filterStudentExperienceBeginner":function(d){return "初学者"},
"filterStudentExperienceComfortable":function(d){return "舒适"},
"filterStudentExperienceExperienced":function(d){return "经验"},
"filterPlatform":function(d){return "课堂技术"},
"filterPlatformComputers":function(d){return "电脑"},
"filterPlatformAndroid":function(d){return "安卓"},
"filterPlatformIos":function(d){return "iPad 或 iPhone"},
"filterPlatformNoInternet":function(d){return "速度较慢或没有互联网"},
"filterPlatformNoComputers":function(d){return "没有计算机或设备"},
"filterTopics":function(d){return "主题"},
"filterTopicsScience":function(d){return "科学"},
"filterTopicsMath":function(d){return "数学"},
"filterTopicsHistory":function(d){return "社会研究"},
"filterTopicsLa":function(d){return "语言艺术"},
"filterTopicsArt":function(d){return "艺术，媒体，音乐"},
"filterTopicsCsOnly":function(d){return "只有计算机科学"},
"filterActivityType":function(d){return "活动类型"},
"filterActivityTypeOnlineTutorial":function(d){return "自学教程"},
"filterActivityTypeLessonPlan":function(d){return "课程计划"},
"filterLength":function(d){return "长度"},
"filterLength1Hour":function(d){return "一小时"},
"filterLength1HourFollow":function(d){return "一个小时后跟进"},
"filterLengthFewHours":function(d){return "几个小时"},
"filterProgrammingLanguage":function(d){return "语言"},
"filterProgrammingLanguageBlocks":function(d){return "模块"},
"filterProgrammingLanguageTyping":function(d){return "打字"},
"filterProgrammingLanguageOther":function(d){return "其他"},
"filterActivityTypeRobotics":function(d){return "机器人技术"},
"backButtonBack":function(d){return "回到所有活动"},
"filterHeaderShowFilters":function(d){return "过滤"},
"filterHeaderHideFilters":function(d){return "使用"},
"filterHeaderTutorialCountSingle":function(d){return "一个结果"},
"filterHeaderTutorialCountPlural":function(d){return tutorialExplorer_locale.v(d,"tutorial_count")+" 个结果"},
"roboticsButtonText":function(d){return "机器人和电路"},
"roboticsText":function(d){return "有机器人？使用这些活动，给任何年龄的学生一个有形的《编程一小时》！"},
"tutorialSetNoTutorials":function(d){return "您的搜索未返回任何结果。请尝试删除一些条件，以查看更多的活动。"},
"tutorialDetailsTeacherNotes":function(d){return "教师提示"},
"tutorialDetailsShortLink":function(d){return "短链接"},
"tutorialDetailInternationalLanguages":function(d){return "语言"},
"tutorialDetailStandards":function(d){return "标准"},
"tutorialDetailDisabled":function(d){return "本教程暂时不可用。"},
"headingTutorialsYourLanguage":function(d){return "中文活动"},
"showAllTutorialsButton":function(d){return "显示各种语言的活动"},
"hideAllTutorialsButton":function(d){return "隐藏各种语言的活动"},
"noTutorialsYourLanguage":function(d){return "没有任何当前语言的活动。通过单击下面的按钮来尝试在其他语言的活动。"},
"bottomGuidelinesLink":function(d){return "单击此处查看提交代码一小时教程的指南和标准。"},
"bottomSpecialNeedsLink":function(d){return "点击这里以获取有关帮助有特殊需求学生的更多信息。"}};