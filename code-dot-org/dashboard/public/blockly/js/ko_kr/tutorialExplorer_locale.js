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
"startButton":function(d){return "시작:"},
"filterOrgNames":function(d){return "Created by"},
"filterOrgNamesAll":function(d){return "모두"},
"filterSortBy":function(d){return "Sort by"},
"filterSortByDisplayWeight":function(d){return "Recommended"},
"filterSortByPopularityRank":function(d){return "Most popular"},
"filterGrades":function(d){return "학년"},
"filterGradesAll":function(d){return "모든 연령"},
"filterGradesPre":function(d){return "읽기 불가능"},
"filterGrades25":function(d){return "초등2-초등5 학년"},
"filterGrades68":function(d){return "초등6-중등2 학년"},
"filterGrades9":function(d){return "중등3 학년 이상"},
"filterStudentExperience":function(d){return "학생 경험"},
"filterStudentExperienceBeginner":function(d){return "초보자"},
"filterStudentExperienceComfortable":function(d){return "경험있음"},
"filterStudentExperienceExperienced":function(d){return "Experienced"},
"filterPlatform":function(d){return "교실 정보화"},
"filterPlatformComputers":function(d){return "컴퓨터"},
"filterPlatformAndroid":function(d){return "안드로이드"},
"filterPlatformIos":function(d){return "아이패드/아이폰"},
"filterPlatformNoInternet":function(d){return "인터넷 속도가 느리거나 연결할 수 없음"},
"filterPlatformNoComputers":function(d){return "컴퓨터나 스마트기기 없음"},
"filterTopics":function(d){return "주제"},
"filterTopicsScience":function(d){return "과학"},
"filterTopicsMath":function(d){return "계산"},
"filterTopicsHistory":function(d){return "사회 교과"},
"filterTopicsLa":function(d){return "언어 교과"},
"filterTopicsArt":function(d){return "예술, 미디어, 음악 교과"},
"filterTopicsCsOnly":function(d){return "컴퓨터과학(정보과학) 교과"},
"filterActivityType":function(d){return "활동 형태"},
"filterActivityTypeOnlineTutorial":function(d){return "자기주도 학습형 튜토리얼"},
"filterActivityTypeLessonPlan":function(d){return "수업 계획"},
"filterLength":function(d){return "시간"},
"filterLength1Hour":function(d){return "1 시간 학습"},
"filterLength1HourFollow":function(d){return "1 시간 학습과 추가 활동"},
"filterLengthFewHours":function(d){return "몇 시간"},
"filterProgrammingLanguage":function(d){return "언어"},
"filterProgrammingLanguageBlocks":function(d){return "blocks"},
"filterProgrammingLanguageTyping":function(d){return "텍스트 코드 타이핑"},
"filterProgrammingLanguageOther":function(d){return "기타"},
"filterActivityTypeRobotics":function(d){return "로봇 공학"},
"backButtonBack":function(d){return "모든 활동으로 돌아가기"},
"filterHeaderShowFilters":function(d){return "필터"},
"filterHeaderHideFilters":function(d){return "적용"},
"filterHeaderTutorialCountSingle":function(d){return "1 개의 결과"},
"filterHeaderTutorialCountPlural":function(d){return tutorialExplorer_locale.v(d,"tutorial_count")+" 개의 결과"},
"roboticsButtonText":function(d){return "로봇 활동 보기"},
"roboticsText":function(d){return "로봇이 있나요? 나이에 상관없이 다음 활동들을 통해 눈 앞에서 확인할 수 있는 Hour of Code 활동을 해보세요."},
"tutorialSetNoTutorials":function(d){return "검색된 결과가 없습니다.\n필터 항목을 제거하여 더 많은 활동들을 살펴보세요."},
"tutorialDetailsTeacherNotes":function(d){return "선생님 참고사항"},
"tutorialDetailsShortLink":function(d){return "단축 링크"},
"tutorialDetailInternationalLanguages":function(d){return "언어"},
"tutorialDetailStandards":function(d){return "기준"},
"tutorialDetailDisabled":function(d){return "현재의 튜토리얼은 일시적으로 사용 불가능합니다."},
"headingTutorialsYourLanguage":function(d){return "현재 언어로 제공되는 튜토리얼"},
"showAllTutorialsButton":function(d){return "모든 튜토리얼"},
"hideAllTutorialsButton":function(d){return "모든 튜토리얼 숨기기"},
"noTutorialsYourLanguage":function(d){return "현재 언어로 제공되는 활동들이 없습니다. 다음 버튼을 눌러 다른 언어로 제공되는 활동들을 살펴보세요."},
"bottomGuidelinesLink":function(d){return "Hour of Code 활동과 관련한 기준과 제출 가이드라인을 살펴보시려면 여기를 클릭하세요."},
"bottomSpecialNeedsLink":function(d){return "특별한 도움이 필요한 학생들을 위해 필요한 추가적인 정보가 필요하시면 여기를 클릭하세요."}};