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
"startButton":function(d){return "Bắt đầu"},
"filterOrgNames":function(d){return "Được tạo bởi"},
"filterOrgNamesAll":function(d){return "Tất cả"},
"filterSortBy":function(d){return "Sắp xếp theo"},
"filterSortByDisplayWeight":function(d){return "Khuyến cáo"},
"filterSortByPopularityRank":function(d){return "Phổ biến nhất"},
"filterGrades":function(d){return "Lớp"},
"filterGradesAll":function(d){return "Tất cả các lớp"},
"filterGradesPre":function(d){return "Trước khi đọc"},
"filterGrades25":function(d){return "Lớp 2-5"},
"filterGrades68":function(d){return "Lớp 6-8"},
"filterGrades9":function(d){return "Lớp 9+"},
"filterStudentExperience":function(d){return "Kinh nghiệm học sinh"},
"filterStudentExperienceBeginner":function(d){return "Người mới bắt đầu"},
"filterStudentExperienceComfortable":function(d){return "Thoải mái"},
"filterStudentExperienceExperienced":function(d){return "Có kinh nghiệm"},
"filterPlatform":function(d){return "Công nghệ lớp học"},
"filterPlatformComputers":function(d){return "Máy vi tính"},
"filterPlatformAndroid":function(d){return "Android"},
"filterPlatformIos":function(d){return "iPad/iPhone"},
"filterPlatformNoInternet":function(d){return "Người nghèo hoặc không có internet"},
"filterPlatformNoComputers":function(d){return "Không có máy tính hoặc thiết bị"},
"filterTopics":function(d){return "Chủ đề"},
"filterTopicsScience":function(d){return "Khoa học"},
"filterTopicsMath":function(d){return "thuật toán"},
"filterTopicsHistory":function(d){return "Khoa học xã hội"},
"filterTopicsLa":function(d){return "Nghệ thuật ngôn ngữ"},
"filterTopicsArt":function(d){return "Nghệ thuật, truyền thông, âm nhạc"},
"filterTopicsCsOnly":function(d){return "Chỉ có khoa học máy tính"},
"filterActivityType":function(d){return "Loại hình hoạt động"},
"filterActivityTypeOnlineTutorial":function(d){return "Hướng dẫn tự làm"},
"filterActivityTypeLessonPlan":function(d){return "Giáo án"},
"filterLength":function(d){return "Độ dài"},
"filterLength1Hour":function(d){return "Một giờ"},
"filterLength1HourFollow":function(d){return "Một giờ và tiếp tục học sau đó"},
"filterLengthFewHours":function(d){return "Một vài giờ"},
"filterProgrammingLanguage":function(d){return "Ngôn ngữ"},
"filterProgrammingLanguageBlocks":function(d){return "các khối"},
"filterProgrammingLanguageTyping":function(d){return "Đánh máy"},
"filterProgrammingLanguageOther":function(d){return "Khác"},
"filterActivityTypeRobotics":function(d){return "Lắp ráp robot"},
"backButtonBack":function(d){return "Quay lại tất cả các hoạt động"},
"filterHeaderShowFilters":function(d){return "Bộ lọc"},
"filterHeaderHideFilters":function(d){return "Áp dụng"},
"filterHeaderTutorialCountSingle":function(d){return "1 kết quả"},
"filterHeaderTutorialCountPlural":function(d){return tutorialExplorer_locale.v(d,"tutorial_count")+" kết quả"},
"roboticsButtonText":function(d){return "Xem các hoạt động lắp ráp robot"},
"roboticsText":function(d){return "Có robot? Sử dụng các hoạt động này và làm một Giờ Lập trình cho các học sinh ở mọi lứa tuổi!"},
"tutorialSetNoTutorials":function(d){return "Tìm kiếm của bạn không có kết quả. Hãy thử thay đổi một số bộ lọc để xem thêm các hoạt động."},
"tutorialDetailsTeacherNotes":function(d){return "Ghi chú của giáo viên"},
"tutorialDetailsShortLink":function(d){return "Đường dẫn ngắn"},
"tutorialDetailInternationalLanguages":function(d){return "Ngôn ngữ"},
"tutorialDetailStandards":function(d){return "Tiêu chuẩn"},
"tutorialDetailDisabled":function(d){return "Hướng dẫn này tạm thời không có sẵn."},
"headingTutorialsYourLanguage":function(d){return "Các hoạt động trong ngôn ngữ của bạn"},
"showAllTutorialsButton":function(d){return "Hiển thị các hoạt động cho nhiều ngôn ngữ"},
"hideAllTutorialsButton":function(d){return "Ẩn các hoạt động cho nhiều ngôn ngữ"},
"noTutorialsYourLanguage":function(d){return "Không có các hoạt động được hỗ trợ trong ngôn ngữ của bạn. Hãy thử các hoạt động trong các ngôn ngữ khác bằng cách nhấn vào nút dưới đây."},
"bottomGuidelinesLink":function(d){return "Click vào đây để xem tiêu chuẩn của chúng tôi và nộp hướng dẫn cho Hour of Code."},
"bottomSpecialNeedsLink":function(d){return "Nhấp vào đây để biết thêm thông tin về việc hỗ trợ học sinh có nhu cầu đặc biệt."}};