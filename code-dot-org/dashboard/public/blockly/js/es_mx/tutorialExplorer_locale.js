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
"startButton":function(d){return "Inicio"},
"filterOrgNames":function(d){return "Creado por"},
"filterOrgNamesAll":function(d){return "Todos"},
"filterSortBy":function(d){return "Ordenar por"},
"filterSortByDisplayWeight":function(d){return "Recomendado"},
"filterSortByPopularityRank":function(d){return "Más popular"},
"filterGrades":function(d){return "Grados"},
"filterGradesAll":function(d){return "Todas las edades"},
"filterGradesPre":function(d){return "Pre-lector"},
"filterGrades25":function(d){return "Grados 2-5"},
"filterGrades68":function(d){return "Grados 6-8"},
"filterGrades9":function(d){return "Grados 9+"},
"filterStudentExperience":function(d){return "Experiencia estudiantil"},
"filterStudentExperienceBeginner":function(d){return "Principiante"},
"filterStudentExperienceComfortable":function(d){return "Cómodo"},
"filterStudentExperienceExperienced":function(d){return "Experimentado"},
"filterPlatform":function(d){return "Tecnología del aula"},
"filterPlatformComputers":function(d){return "Computadoras"},
"filterPlatformAndroid":function(d){return "Android"},
"filterPlatformIos":function(d){return "iPad/itelefono"},
"filterPlatformNoInternet":function(d){return "Señal de Internet pobre o nula"},
"filterPlatformNoComputers":function(d){return "No hay computadoras o dispositivos"},
"filterTopics":function(d){return "Temas"},
"filterTopicsScience":function(d){return "Ciencia"},
"filterTopicsMath":function(d){return "Matemáticas"},
"filterTopicsHistory":function(d){return "Estudios Sociales"},
"filterTopicsLa":function(d){return "Linguistica"},
"filterTopicsArt":function(d){return "Arte, Medios, Música"},
"filterTopicsCsOnly":function(d){return "Informática solamente"},
"filterActivityType":function(d){return "Tipo de Actividad"},
"filterActivityTypeOnlineTutorial":function(d){return "Guia Autodidacta"},
"filterActivityTypeLessonPlan":function(d){return "Plan de lección"},
"filterLength":function(d){return "Extensión"},
"filterLength1Hour":function(d){return "Una hora"},
"filterLength1HourFollow":function(d){return "Una hora de seguimiento"},
"filterLengthFewHours":function(d){return "Algunas horas"},
"filterProgrammingLanguage":function(d){return "Idioma"},
"filterProgrammingLanguageBlocks":function(d){return "Bloques"},
"filterProgrammingLanguageTyping":function(d){return "Escribiendo"},
"filterProgrammingLanguageOther":function(d){return "Otros"},
"filterActivityTypeRobotics":function(d){return "Robótica"},
"backButtonBack":function(d){return "Volver a actividades"},
"filterHeaderShowFilters":function(d){return "Filtros"},
"filterHeaderHideFilters":function(d){return "Aplicar"},
"filterHeaderTutorialCountSingle":function(d){return "1 resultado"},
"filterHeaderTutorialCountPlural":function(d){return tutorialExplorer_locale.v(d,"tutorial_count")+" resultados"},
"roboticsButtonText":function(d){return "Ver actividades robóticas"},
"roboticsText":function(d){return "¿Tienes robots? ¡Utiliza estas actividades y haz una Hora del código tangible para estudiantes de cualquier edad!"},
"tutorialSetNoTutorials":function(d){return "Tu búsqueda no arrojó resultados.\nPor favor intenta remover algunos filtros para ver más actividades."},
"tutorialDetailsTeacherNotes":function(d){return "Notas del Profesor"},
"tutorialDetailsShortLink":function(d){return "Enlace corto"},
"tutorialDetailInternationalLanguages":function(d){return "Idiomas"},
"tutorialDetailStandards":function(d){return "Estándares"},
"tutorialDetailDisabled":function(d){return "Este tutorial no está disponible temporalmente."},
"headingTutorialsYourLanguage":function(d){return "Actividades en tu idioma"},
"showAllTutorialsButton":function(d){return "Mostrar actividades en varios idiomas"},
"hideAllTutorialsButton":function(d){return "Ocultar actividades en varios idiomas"},
"noTutorialsYourLanguage":function(d){return "No hay ninguna actividad en tu idioma. Prueba actividades en otros idiomas. Para ello, haz clic en el botón de abajo."},
"bottomGuidelinesLink":function(d){return "Haga clic aquí para ver nuestros criterios y reglas de envío para los tutoriales de la Hora del código."},
"bottomSpecialNeedsLink":function(d){return "Haga clic aquí para más información sobre el apoyo de estudiantes con necesidades especiales."}};