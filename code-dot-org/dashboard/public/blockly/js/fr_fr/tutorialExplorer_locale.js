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
"startButton":function(d){return "Commencer"},
"filterOrgNames":function(d){return "Créé par"},
"filterOrgNamesAll":function(d){return "Tout"},
"filterSortBy":function(d){return "Sort by"},
"filterSortByDisplayWeight":function(d){return "Recommandés"},
"filterSortByPopularityRank":function(d){return "Les plus populaires"},
"filterGrades":function(d){return "Années"},
"filterGradesAll":function(d){return "Tous les âges"},
"filterGradesPre":function(d){return "Pré-lecteur"},
"filterGrades25":function(d){return "Du CE1 au CM2"},
"filterGrades68":function(d){return "De la 6° à la 3°"},
"filterGrades9":function(d){return "Lycée\n"},
"filterStudentExperience":function(d){return "Expérience d'étudiant"},
"filterStudentExperienceBeginner":function(d){return "Débutant"},
"filterStudentExperienceComfortable":function(d){return "Confirmé"},
"filterStudentExperienceExperienced":function(d){return "Experienced"},
"filterPlatform":function(d){return "Classe de technologie"},
"filterPlatformComputers":function(d){return "Ordinateurs"},
"filterPlatformAndroid":function(d){return "Android"},
"filterPlatformIos":function(d){return "iPad/iPhone"},
"filterPlatformNoInternet":function(d){return "Mauvaise connexion ou hors connexion"},
"filterPlatformNoComputers":function(d){return "Pas d'ordinateurs ou d'appareils"},
"filterTopics":function(d){return "Sujets"},
"filterTopicsScience":function(d){return "Sciences"},
"filterTopicsMath":function(d){return "Calculs"},
"filterTopicsHistory":function(d){return "Études sociales"},
"filterTopicsLa":function(d){return "Langues"},
"filterTopicsArt":function(d){return "Art, Média, Musique"},
"filterTopicsCsOnly":function(d){return "Informatique seulement"},
"filterActivityType":function(d){return "Type d'activité"},
"filterActivityTypeOnlineTutorial":function(d){return "tutorial indépendant"},
"filterActivityTypeLessonPlan":function(d){return "Plan de cours"},
"filterLength":function(d){return "Longueur"},
"filterLength1Hour":function(d){return "Une heure"},
"filterLength1HourFollow":function(d){return "Une heure avec suivi"},
"filterLengthFewHours":function(d){return "Quelques heures"},
"filterProgrammingLanguage":function(d){return "Langue"},
"filterProgrammingLanguageBlocks":function(d){return "Blocs"},
"filterProgrammingLanguageTyping":function(d){return "Dactylographie"},
"filterProgrammingLanguageOther":function(d){return "Autres"},
"filterActivityTypeRobotics":function(d){return "Robotique"},
"backButtonBack":function(d){return "Retour à la liste des activités"},
"filterHeaderShowFilters":function(d){return "Filtres"},
"filterHeaderHideFilters":function(d){return "Appliquer"},
"filterHeaderTutorialCountSingle":function(d){return "1 résultat"},
"filterHeaderTutorialCountPlural":function(d){return tutorialExplorer_locale.v(d,"tutorial_count")+" résultats"},
"roboticsButtonText":function(d){return "Voir les activités robotiques"},
"roboticsText":function(d){return "Des robots? Utilisez ces activités et faites une Heure du Code pratique pour les étudiants de tout âge!"},
"tutorialSetNoTutorials":function(d){return "Votre recherche n'a donné aucun résultat.\nVeuillez essayer de supprimer certains filtres pour voir plus d'activité."},
"tutorialDetailsTeacherNotes":function(d){return "Notes de l'enseignant"},
"tutorialDetailsShortLink":function(d){return "Lien court"},
"tutorialDetailInternationalLanguages":function(d){return "Langues"},
"tutorialDetailStandards":function(d){return "Normes"},
"tutorialDetailDisabled":function(d){return "Ce tutoriel est temporairement indisponible."},
"headingTutorialsYourLanguage":function(d){return "Activités dans votre langue"},
"showAllTutorialsButton":function(d){return "Afficher les activités dans plusieurs langues"},
"hideAllTutorialsButton":function(d){return "Masquer les activités dans plusieurs langues"},
"noTutorialsYourLanguage":function(d){return "Il n’y a pas d’activités disponibles dans votre langue. Essayez des activités dans d’autres langues en cliquant sur le bouton ci-dessous."},
"bottomGuidelinesLink":function(d){return "Cliquez ici pour voir nos critères et les lignes directrices de soumission pour les tutoriels d'heure de Code."},
"bottomSpecialNeedsLink":function(d){return "Cliquez ici pour plus d’information concernant le soutien aux élèves ayant des besoins spécifiques."}};