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
"startButton":function(d){return "Tosaigh"},
"filterOrgNames":function(d){return "Created by"},
"filterOrgNamesAll":function(d){return "Uile"},
"filterSortBy":function(d){return "Sort by"},
"filterSortByDisplayWeight":function(d){return "Recommended"},
"filterSortByPopularityRank":function(d){return "Most popular"},
"filterGrades":function(d){return "Aoiseanna"},
"filterGradesAll":function(d){return "Ó liath go leanbh"},
"filterGradesPre":function(d){return "Réamhléitheoirí"},
"filterGrades25":function(d){return "Aois 7-10"},
"filterGrades68":function(d){return "Aois 11-13"},
"filterGrades9":function(d){return "Aois 14+"},
"filterStudentExperience":function(d){return "Taithí na ndaltaí"},
"filterStudentExperienceBeginner":function(d){return "Tosaitheoir"},
"filterStudentExperienceComfortable":function(d){return "Compordach"},
"filterStudentExperienceExperienced":function(d){return "Experienced"},
"filterPlatform":function(d){return "Teicneolaíocht sa seomra ranga"},
"filterPlatformComputers":function(d){return "Ríomhairí"},
"filterPlatformAndroid":function(d){return "Android"},
"filterPlatformIos":function(d){return "iPad/iPhone"},
"filterPlatformNoInternet":function(d){return "Gan ceangal idirlín nó ceangal bocht"},
"filterPlatformNoComputers":function(d){return "Gan ríomhairí ná gléasanna"},
"filterTopics":function(d){return "Topaicí"},
"filterTopicsScience":function(d){return "Eolaíocht"},
"filterTopicsMath":function(d){return "Matamaitic"},
"filterTopicsHistory":function(d){return "Staidéar Sóisialta"},
"filterTopicsLa":function(d){return "Ealaíona Teanga"},
"filterTopicsArt":function(d){return "Ealaín, Meáin, Ceol"},
"filterTopicsCsOnly":function(d){return "Ríomheolaíocht amháin"},
"filterActivityType":function(d){return "Cineál gníomhaíochta"},
"filterActivityTypeOnlineTutorial":function(d){return "Cúrsa féinteagaisc"},
"filterActivityTypeLessonPlan":function(d){return "Plean ceachta"},
"filterLength":function(d){return "Fad"},
"filterLength1Hour":function(d){return "Uair an chloig"},
"filterLength1HourFollow":function(d){return "Uair an chloig agus acmhainní leantacha"},
"filterLengthFewHours":function(d){return "Cúpla uair an chloig"},
"filterProgrammingLanguage":function(d){return "Teanga"},
"filterProgrammingLanguageBlocks":function(d){return "Blocanna"},
"filterProgrammingLanguageTyping":function(d){return "Clóscríobh"},
"filterProgrammingLanguageOther":function(d){return "Eile"},
"filterActivityTypeRobotics":function(d){return "Róbataic"},
"backButtonBack":function(d){return "Fill ar na gníomhaíochtaí"},
"filterHeaderShowFilters":function(d){return "Scagairí"},
"filterHeaderHideFilters":function(d){return "Cuir i bhfeidhm"},
"filterHeaderTutorialCountSingle":function(d){return "Toradh amháin"},
"filterHeaderTutorialCountPlural":function(d){return tutorialExplorer_locale.v(d,"tutorial_count")+" toradh"},
"roboticsButtonText":function(d){return "Gníomhaíochtaí róbataice"},
"roboticsText":function(d){return "An bhfuil róbait agat? Úsáid na gníomhaíochtaí seo chun d'Uair Chódála féin a dhéanamh, is cuma cén aois iad na daltaí!"},
"tutorialSetNoTutorials":function(d){return "Gan torthaí. Bain triail eile as do chuardach gan na scagairí go léir."},
"tutorialDetailsTeacherNotes":function(d){return "Nótaí do mhúinteoirí"},
"tutorialDetailsShortLink":function(d){return "Nasc gearr"},
"tutorialDetailInternationalLanguages":function(d){return "Teangacha"},
"tutorialDetailStandards":function(d){return "Caighdeáin"},
"tutorialDetailDisabled":function(d){return "Níl an cúrsa teagaisc seo ar fáil faoi láthair."},
"headingTutorialsYourLanguage":function(d){return "Gníomhaíochtaí i do theanga"},
"showAllTutorialsButton":function(d){return "Taispeáin gníomhaíochtaí i dteangacha éagsúla"},
"hideAllTutorialsButton":function(d){return "Folaigh gníomhaíochtaí i dteangacha éagsúla"},
"noTutorialsYourLanguage":function(d){return "Níl aon ghníomhaíochtaí ar fáil i do theanga. Cliceáil an cnaipe thíos chun teacht ar ghníomhaíochtaí i dteangacha eile."},
"bottomGuidelinesLink":function(d){return "Cliceáil anseo chun na critéir agus treoirlínte a bhaineann le cúrsaí teagaisc don Uair Chódála a léamh."},
"bottomSpecialNeedsLink":function(d){return "Cliceáil anseo chun tuilleadh eolais a fháil maidir le daltaí faoi riachtanais speisialta."}};