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
"startButton":function(d){return "Começar"},
"filterOrgNames":function(d){return "Criado por"},
"filterOrgNamesAll":function(d){return "Todos"},
"filterSortBy":function(d){return "Ordenar por"},
"filterSortByDisplayWeight":function(d){return "Recomendado"},
"filterSortByPopularityRank":function(d){return "Mais popular"},
"filterGrades":function(d){return "Níveis na escola"},
"filterGradesAll":function(d){return "Todas as idades"},
"filterGradesPre":function(d){return "Leitura prévia"},
"filterGrades25":function(d){return "Anos 2-5"},
"filterGrades68":function(d){return "Anos 6-8"},
"filterGrades9":function(d){return "Anos 9+"},
"filterStudentExperience":function(d){return "Experiência do estudante"},
"filterStudentExperienceBeginner":function(d){return "Iniciante"},
"filterStudentExperienceComfortable":function(d){return "Confortável"},
"filterStudentExperienceExperienced":function(d){return "Experienced"},
"filterPlatform":function(d){return "Tecnologia de sala de aula"},
"filterPlatformComputers":function(d){return "Computadores"},
"filterPlatformAndroid":function(d){return "Android"},
"filterPlatformIos":function(d){return "iPad/iPhone"},
"filterPlatformNoInternet":function(d){return "Internet lenta ou sem Internet"},
"filterPlatformNoComputers":function(d){return "Sem computadores ou dispositivos"},
"filterTopics":function(d){return "Tópicos"},
"filterTopicsScience":function(d){return "Ciência"},
"filterTopicsMath":function(d){return "Matemática"},
"filterTopicsHistory":function(d){return "Estudos sociais"},
"filterTopicsLa":function(d){return "Artes da linguagem"},
"filterTopicsArt":function(d){return "Arte, Mídia, Música"},
"filterTopicsCsOnly":function(d){return "Apenas Ciência da Computação"},
"filterActivityType":function(d){return "Tipo de atividade"},
"filterActivityTypeOnlineTutorial":function(d){return "Tutorial auto conduzido"},
"filterActivityTypeLessonPlan":function(d){return "Plano de aula"},
"filterLength":function(d){return "Duração"},
"filterLength1Hour":function(d){return "Uma hora"},
"filterLength1HourFollow":function(d){return "Uma hora com continuação"},
"filterLengthFewHours":function(d){return "Algumas horas"},
"filterProgrammingLanguage":function(d){return "Idioma"},
"filterProgrammingLanguageBlocks":function(d){return "Blocos"},
"filterProgrammingLanguageTyping":function(d){return "Digitação"},
"filterProgrammingLanguageOther":function(d){return "Outros"},
"filterActivityTypeRobotics":function(d){return "Robótica"},
"backButtonBack":function(d){return "De volta a todas atividades"},
"filterHeaderShowFilters":function(d){return "Filtros"},
"filterHeaderHideFilters":function(d){return "Aplicar"},
"filterHeaderTutorialCountSingle":function(d){return "1 resultado"},
"filterHeaderTutorialCountPlural":function(d){return tutorialExplorer_locale.v(d,"tutorial_count")+" resultados"},
"roboticsButtonText":function(d){return "Ver atividades de robótica"},
"roboticsText":function(d){return "Tem robôs? Use essas atividades e faça uma tangível Hora de Código para estudantes de qualquer idade!"},
"tutorialSetNoTutorials":function(d){return "Sua pesquisa não retornou nenhum resultado. Por favor, tente remover alguns filtros para ver mais atividades."},
"tutorialDetailsTeacherNotes":function(d){return "Notas do professor"},
"tutorialDetailsShortLink":function(d){return "Link curto"},
"tutorialDetailInternationalLanguages":function(d){return "Idiomas"},
"tutorialDetailStandards":function(d){return "Padrões"},
"tutorialDetailDisabled":function(d){return "Este tutorial está temporariamente indisponível."},
"headingTutorialsYourLanguage":function(d){return "Atividades no seu idioma"},
"showAllTutorialsButton":function(d){return "Mostrar as atividades para vários idiomas"},
"hideAllTutorialsButton":function(d){return "Esconder atividades para vários idiomas"},
"noTutorialsYourLanguage":function(d){return "Não há nenhuma atividade suportada no seu idioma. Tente atividades em outros idiomas, clicando no botão abaixo."},
"bottomGuidelinesLink":function(d){return "Clique aqui para ver nossos critérios e orientações de solicitação de tutoriais da Hora de Código."},
"bottomSpecialNeedsLink":function(d){return "Clique aqui para obter mais informações sobre suporte a estudantes com necessidades especiais."}};