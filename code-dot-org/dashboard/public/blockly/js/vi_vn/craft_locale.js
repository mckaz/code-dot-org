var craft_locale = {lc:{"ar":function(n){
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
v:function(d,k){craft_locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){craft_locale.c(d,k);return d[k] in p?p[d[k]]:(k=craft_locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){craft_locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).craft_locale = {
"absolute":function(d){return "giá trị tuyệt đối"},
"agentGenericFailureMessage":function(d){return "Hãy tiếp tục lập trình! Nhớ hãy sử dụng Đặc vụ để được trợ giúp."},
"agentTooFewBlocksFailureMessage":function(d){return "Hãy thử thêm chỉ 1 khối lệnh vào thời điểm Đặc vụ tới được đúng chỗ."},
"at":function(d){return "vào"},
"agentDiamondPathCongrats":function(d){return "Xin chúc mừng, bạn tìm thấy đường dẫn kim cương! Đến thời điểm hiện tại bạn đã được thu thập "+craft_locale.p(d,"count",0,"vi",{"one":"1 kim cương","other":craft_locale.n(d,"count")+" kim cương"})+"!"},
"blockActionAdd":function(d){return "thêm"},
"blockActionAttack":function(d){return "tấn công"},
"blockActionClone":function(d){return "nhân bản các khối lệnh"},
"blockActionCloneFiltered":function(d){return "chỉ nhân bản"},
"blockActionCollect":function(d){return "thu thập"},
"blockActionCollectAll":function(d){return "thu thập tất cả"},
"blockActionDestroyEntity":function(d){return "biến mất"},
"blockActionDetect":function(d){return "phát hiện"},
"blockActionDetectRedstone":function(d){return "phát hiện hòn đá đỏ"},
"blockActionDrop":function(d){return "thả"},
"blockActionDropAll":function(d){return "thả tất cả"},
"blockActionExecute":function(d){return "thực hiện lệnh"},
"blockActionExplodeEntity":function(d){return "nổ"},
"blockActionFill":function(d){return "lấp đầy từ"},
"blockActionFlashEntity":function(d){return "đèn flash"},
"blockActionGetItemCount":function(d){return "đếm các đồ vật"},
"blockActionGetItemCountInSlotNumber":function(d){return "đếm các đồ vật trong ô số lượng"},
"blockActionGetItemDetail":function(d){return "chi tiết hoá đồ vật"},
"blockActionGetItemDetailInSlotNumber":function(d){return "đếm các đồ vật trong ô số lượng"},
"blockActionGetItemSpace":function(d){return "cho các đồ vật cách xa nhau"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "nhập khoảng cách giữa các đồ vật trong ô số lượng"},
"blockActionGive":function(d){return "cho"},
"blockActionInspect":function(d){return "kiểm tra"},
"blockActionInspectData":function(d){return "kiểm tra dữ liệu"},
"blockActionKill":function(d){return "tiêu diệt mục tiêu"},
"blockActionMove":function(d){return "di chuyển/ dịch chuyển"},
"blockActionMoveAway":function(d){return "di chuyển ra khỏi"},
"blockActionMoveForward":function(d){return "đi thẳng"},
"blockActionMoveRandom":function(d){return "di chuyển ngẫu nhiên"},
"blockActionMoveTo":function(d){return "di chuyển tới"},
"blockActionMoveToward":function(d){return "di chuyển một bước tới"},
"blockActionPlaySound":function(d){return "phát âm thanh"},
"blockActionRepeat":function(d){return "lặp lại"},
"blockActionRepeatRandom":function(d){return "lặp lại ngẫu nhiên"},
"blockActionSetBlock":function(d){return "đặt viên đá vào"},
"blockActionSpawn":function(d){return "tạo ra"},
"blockActionSummon":function(d){return "triệu tập"},
"blockActionTeleport":function(d){return "dịch chuyển mục tiêu"},
"blockActionTeleportToPlayer":function(d){return "dịch chuyển tới người chơi"},
"blockActionTestForBlock":function(d){return "kiểm tra xem nó là loại khối đá gì"},
"blockActionTestForBlocks":function(d){return "kiểm tra xem liệu có mô hình nào ở giữa hay không"},
"blockActionToScore":function(d){return "ghi điểm"},
"blockActionTransfer":function(d){return "chuyển đổi"},
"blockActionWait":function(d){return "đợi"},
"blockActionWith":function(d){return "với"},
"blockData":function(d){return "khối dữ liệu"},
"blockDestroyBlock":function(d){return "hủy khối"},
"blockIf":function(d){return "Nếu"},
"blockIfLavaAhead":function(d){return "nếu có dung nham phía trước"},
"blockIs":function(d){return "là"},
"blockMove":function(d){return "di chuyển/ dịch chuyển"},
"blockMoveBackward":function(d){return "Lùi lại"},
"blockMoveForward":function(d){return "đi thẳng"},
"blockPlace":function(d){return "đặt"},
"blockPlaceTorch":function(d){return "đặt đuốc"},
"blockPlaceXAheadAhead":function(d){return "phía trước"},
"blockPlaceXAheadPlace":function(d){return "đặt"},
"blockPlaceXPlace":function(d){return "đặt"},
"blockPlantCrop":function(d){return "trồng cây"},
"blockShear":function(d){return "xén"},
"blockTill":function(d){return "trồng trọt"},
"blockTillSoil":function(d){return "cày đất"},
"blockTurn":function(d){return "rẽ"},
"blockTurnLeft":function(d){return "rẽ trái"},
"blockTurnRight":function(d){return "rẽ phải"},
"blockType":function(d){return "loại khối đá"},
"blockTypeBedrock":function(d){return "đá móng"},
"blockTypeBricks":function(d){return "gạch"},
"blockTypeClay":function(d){return "đất sét"},
"blockTypeClayHardened":function(d){return "đất sét cứng"},
"blockTypeCobblestone":function(d){return "cuội"},
"blockTypeDirt":function(d){return "đất"},
"blockTypeDirtCoarse":function(d){return "đất thô"},
"blockTypeDoorIron":function(d){return "cửa sắt"},
"blockTypeEmpty":function(d){return "rỗng"},
"blockTypeFarmlandWet":function(d){return "đất nông trại"},
"blockTypeGlass":function(d){return "gương"},
"blockTypeGlowstone":function(d){return "hòn đá phát sáng"},
"blockTypeGrass":function(d){return "cỏ"},
"blockTypeGravel":function(d){return "sỏi"},
"blockTypeLava":function(d){return "dung nham"},
"blockTypeLogAcacia":function(d){return "gỗ cây keo"},
"blockTypeLogBirch":function(d){return "gỗ cây bulo"},
"blockTypeLogJungle":function(d){return "gỗ rừng"},
"blockTypeLogOak":function(d){return "gỗ cây sồi"},
"blockTypeLogSpruce":function(d){return "gỗ cây vân sam"},
"blockTypeOreCoal":function(d){return "quặng than"},
"blockTypeOreDiamond":function(d){return "quặng kim cương"},
"blockTypeOreEmerald":function(d){return "quặng ngọc lục bảo"},
"blockTypeOreGold":function(d){return "quặng vàng"},
"blockTypeOreIron":function(d){return "quặng sắt"},
"blockTypeOreLapis":function(d){return "quặng lapis"},
"blockTypeOreRedstone":function(d){return "quặng đá đỏ"},
"blockTypePlanksAcacia":function(d){return "ván cây keo"},
"blockTypePlanksBirch":function(d){return "ván cây bulo"},
"blockTypePlanksJungle":function(d){return "ván cây rừng"},
"blockTypePlanksOak":function(d){return "ván cây sồi"},
"blockTypePlanksSpruce":function(d){return "ván cây vân sam"},
"blockTypePressurePlateUp":function(d){return "tấm áp lực"},
"blockTypeRail":function(d){return "đường đi"},
"blockTypeRailsRedstoneTorch":function(d){return "ngọn đuốc đá đỏ"},
"blockTypeRedstoneWire":function(d){return "dây đá đỏ"},
"blockTypeSand":function(d){return "cát"},
"blockTypeSandstone":function(d){return "sa thạch"},
"blockTypeStone":function(d){return "đá"},
"blockTypeTnt":function(d){return "tnt"},
"blockTypeTree":function(d){return "cây"},
"blockTypeWater":function(d){return "nước"},
"blockTypeWool":function(d){return "len"},
"blockTypeWoolBlue":function(d){return "len màu xanh"},
"blockTypeWoolMagenta":function(d){return "len màu đỏ tươi"},
"blockTypeWoolOrange":function(d){return "len màu cam"},
"blockTypeWoolPink":function(d){return "len màu hồng"},
"blockTypeWoolRed":function(d){return "len màu đỏ"},
"blockTypeWoolYellow":function(d){return "len màu vàng"},
"blockWhileXAheadAhead":function(d){return "phía trước"},
"blockWhileXAheadDo":function(d){return "thực hiện"},
"blockWhileXAheadWhile":function(d){return "Lặp khi"},
"cancel":function(d){return "Huỷ"},
"cloneMode":function(d){return "chế độ nhân bản"},
"cloneModeForce":function(d){return "bắt buộc"},
"cloneModeMove":function(d){return "di chuyển/ dịch chuyển"},
"cloneModeNormal":function(d){return "bình thường"},
"connectToCodeConnection":function(d){return "Để chạy dự án này trong Minecraft: Phiên bản Giáo dục, hãy sử dụng ứng dụng kết nối mã lệnh."},
"destination":function(d){return "đích đến"},
"directionBack":function(d){return "quay lại"},
"directionDown":function(d){return "xuống"},
"directionForward":function(d){return "tới trước"},
"directionLeft":function(d){return "trái"},
"directionMiddle":function(d){return "ở giữa"},
"directionRight":function(d){return "phải"},
"directionUp":function(d){return "trên"},
"downloadButton":function(d){return "Tải xuống"},
"entityType":function(d){return "loại thực thể"},
"entityTypeChicken":function(d){return "con gà"},
"entityTypeCow":function(d){return "con bò"},
"entityTypeCreeper":function(d){return "cây leo"},
"entityTypeIronGolem":function(d){return "quái vật sắt"},
"entityTypePlayer":function(d){return "người chơi"},
"entityTypeSheep":function(d){return "con cừu"},
"entityTypeZombie":function(d){return "xác sống"},
"eventTypeWhenAttacked":function(d){return "khi bị tấn công"},
"eventTypeWhenDay":function(d){return "vào ban ngày"},
"eventTypeWhenNight":function(d){return "vào ban đêm"},
"eventTypeWhenRun":function(d){return "khi chạy"},
"eventTypeWhenSpawned":function(d){return "khi được tạo ra"},
"eventTypeWhenTouched":function(d){return "khi bị chạm"},
"eventTypeWhenUsed":function(d){return "khi được sử dụng"},
"forever":function(d){return "mãi mãi"},
"from":function(d){return "từ"},
"generatedCodeDescription":function(d){return "Khi kéo và đặt các khối vào trong câu đố này, bạn đã tạo một bộ hướng dẫn bằng ngôn ngữ máy tính gọi là Javascript. Mã này cho máy tính biết nên hiển thị điều gì trên màn hình. Mọi thứ bạn nhìn thấy và thực hiện trong Minecraft đều bắt đầu bằng các dòng mã máy tính tương tự như các mã này."},
"getdataof":function(d){return "nhận dữ liệu của"},
"getnameof":function(d){return "lấy tên của"},
"houseSelectChooseFloorPlan":function(d){return "Chọn mặt bằng sàn cho nhà của bạn."},
"houseSelectEasy":function(d){return "Dễ"},
"houseSelectHard":function(d){return "Khó"},
"houseSelectLetsBuild":function(d){return "Hãy xây nhà nào."},
"houseSelectMedium":function(d){return "Trung bình"},
"import":function(d){return "Import"},
"importShareLinkBody":function(d){return "Nhập đường dẫn chia sẻ Giờ Lập trình và nhấp vào \"Xuất ra\" để sao chép mã lệnh của bạn vào trong Minecraft"},
"importShareLinkHeader":function(d){return "Nhập một liên kết chia sẻ"},
"inSlotNumber":function(d){return "trong ô số lượng"},
"itemTypeBlock":function(d){return "khối"},
"itemTypeDecoration":function(d){return "trang trí"},
"itemTypeMiscellaneous":function(d){return "lộn xộn"},
"itemTypeTool":function(d){return "công cụ"},
"items":function(d){return "mục"},
"itemsOfBlockType":function(d){return "mục loại khối đá"},
"level10FailureMessage":function(d){return "Lấp dung nham để bước qua, sau đó đào hai khối sắt ở phía bên kia."},
"level11FailureMessage":function(d){return "Hãy đảm bảo đặt đá cuội ở phía trước nếu có dung nham phía trước. Việc này sẽ giúp bạn khai thác chuỗi tài nguyên này một cách an toàn."},
"level12FailureMessage":function(d){return "Bạn phải đào 3 khối đá đỏ. Điều này kết hợp với những gì bạn đã học được từ việc xây dựng ngôi nhà của bạn và việc sử dụng lệnh \"if\" để tránh rơi vào dung nham."},
"level13FailureMessage":function(d){return "Đặt \"rail\" dọc theo đường đất bắt đầu từ cửa nhà của bạn đến mép của bản đồ."},
"level1FailureMessage":function(d){return "Bạn cần phải sử dụng lệnh để đi đến phía con cừu."},
"level1TooFewBlocksMessage":function(d){return "Hãy thử sử dụng nhiều lệnh hơn để đi về phía con cừu."},
"level2FailureMessage":function(d){return "Để đốn cây, hãy đi bộ về phía thân cây và sử dụng lệnh \"destroy block\"."},
"level2TooFewBlocksMessage":function(d){return "Hãy thử sử dụng nhiều lệnh hơn để đốn cây. Hãy đi về phía thân cây và sử dụng lệnh \"destroy block\"."},
"level3FailureMessage":function(d){return "Để thu thập lông của cả hai con cừu, hãy đi về phía mỗi con và sử dụng lệnh \"shear\". Hãy nhớ sử dụng lệnh rẽ để tiếp cận con cừu."},
"level3TooFewBlocksMessage":function(d){return "Hãy thử sử dụng nhiều lệnh hơn để thu thập lông của cả hai con cừu. Hãy đi về phía mỗi con cừu và sử dụng lệnh \"shear\"."},
"level4FailureMessage":function(d){return "Bạn phải sử dụng lệnh \"destroy block\" cho từng thân cây trong ba thân cây."},
"level5FailureMessage":function(d){return "Hãy đặt các khối trên đường viền đất để xây một bức tường. Lệnh \"repeat\" màu hồng sẽ kích hoạt các lệnh được đặt bên trong nó, như \"place block\" và \"move forward\"."},
"level6FailureMessage":function(d){return "Hãy đặt các khối gỗ trên đường viền đất của ngôi nhà để hoàn thành câu đố."},
"level7FailureMessage":function(d){return "Hãy sử dụng lệnh \"plant\" để đặt cây trồng trên mỗi mảnh đất đã canh tác có màu tối."},
"level8FailureMessage":function(d){return "Nếu bạn chạm vào một creeper, nó sẽ phát nổ. Hãy lẻn đi xung quanh chúng và bước vào ngôi nhà của bạn."},
"level9FailureMessage":function(d){return "Đừng quên đặt ít nhất 2 cây đuốc để thắp sáng đường đi VÀ đào ít nhất 2 viên than."},
"maskMode":function(d){return "chế độ mặt nạ"},
"maskModeMasked":function(d){return "được đeo mặt nạ"},
"maskModeReplace":function(d){return "thay thế"},
"minecraftBlock":function(d){return "khối"},
"minecraftNotConnected":function(d){return "Minecraft không được kết nối"},
"miniBlockBricks":function(d){return "gạch"},
"miniBlockBucketLava":function(d){return "thùng nham thạch"},
"miniBlockBucketWater":function(d){return "thùng nước"},
"miniBlockCarrots":function(d){return "cà rốt"},
"miniBlockCoal":function(d){return "than đá"},
"miniBlockCobblestone":function(d){return "cuội"},
"miniBlockDiamond":function(d){return "kim cương"},
"miniBlockDirt":function(d){return "đất"},
"miniBlockDirtCoarse":function(d){return "đất thô"},
"miniBlockEgg":function(d){return "trứng"},
"miniBlockEmerald":function(d){return "ngọc lục bảo"},
"miniBlockGravel":function(d){return "sỏi"},
"miniBlockGunPowder":function(d){return "thuốc súng"},
"miniBlockIngotGold":function(d){return "thỏi vàng"},
"miniBlockIngotIron":function(d){return "thỏi sắt"},
"miniBlockLapisLazuli":function(d){return "đá lazulite"},
"miniBlockLogAcacia":function(d){return "gỗ cây keo"},
"miniBlockLogBirch":function(d){return "gỗ cây bulo"},
"miniBlockLogJungle":function(d){return "gỗ rừng"},
"miniBlockLogOak":function(d){return "gỗ cây sồi"},
"miniBlockLogSpruce":function(d){return "gỗ cây vân sam"},
"miniBlockMilk":function(d){return "sữa"},
"miniBlockPlanksAcacia":function(d){return "ván cây keo"},
"miniBlockPlanksBirch":function(d){return "ván cây bulo"},
"miniBlockPlanksJungle":function(d){return "ván cây rừng"},
"miniBlockPlanksOak":function(d){return "ván cây sồi"},
"miniBlockPlanksSpruce":function(d){return "ván cây vân sam"},
"miniBlockPoppy":function(d){return "thuốc phiện"},
"miniBlockPotato":function(d){return "khoai tây"},
"miniBlockRedstoneDust":function(d){return "bụi đá đỏ"},
"miniBlockSand":function(d){return "cát"},
"miniBlockSandstone":function(d){return "sa thạch"},
"miniBlockSheep":function(d){return "con cừu"},
"miniBlockWheat":function(d){return "lúa mì"},
"miniBlockWool":function(d){return "len"},
"nextLevelMsg":function(d){return "Đã hoàn thành Câu đố "+craft_locale.v(d,"puzzleNumber")+". Xin chúc mừng!"},
"oldBlockHandling":function(d){return "khối đá cũ tại"},
"oldBlockHandlingsDestroy":function(d){return "phá huỷ"},
"oldBlockHandlingsKeep":function(d){return "giữ lại"},
"oldBlockHandlingsReplace":function(d){return "thay thế"},
"onBehalfOf":function(d){return "thay mặt cho"},
"playerSelectChooseCharacter":function(d){return "Hãy chọn nhân vật của bạn."},
"playerSelectChooseSelectButton":function(d){return "Chọn"},
"playerSelectLetsGetStarted":function(d){return "Hãy bắt đầu nào."},
"quantity":function(d){return "số lượng"},
"reinfFeedbackMsg":function(d){return "Bạn có thể nhấn vào \"Keep Playing\" để quay trở lại trò chơi."},
"relative":function(d){return "tương đối"},
"runAgent":function(d){return "Chạy Đặc vụ"},
"score":function(d){return "Điểm số"},
"seconds":function(d){return "giây"},
"selectChooseButton":function(d){return "Chọn"},
"soundTypeBump":function(d){return "tiếng va chạm"},
"soundTypeChickenBawk":function(d){return "tiếng gà kêu"},
"soundTypeChickenHurt":function(d){return "gà bị thương"},
"soundTypeCollectedBlock":function(d){return "thu thập khối đá"},
"soundTypeCowHuff":function(d){return "bò nổi giận"},
"soundTypeCowHurt":function(d){return "bò bị thương"},
"soundTypeCowMoo":function(d){return "bò kêu"},
"soundTypeCowMooLong":function(d){return "bò kêu"},
"soundTypeCreeperHiss":function(d){return "creeper rít lên"},
"soundTypeDig_wood1":function(d){return "đốn cây"},
"soundTypeDoorOpen":function(d){return "cửa mở"},
"soundTypeExplode":function(d){return "nổ"},
"soundTypeFailure":function(d){return "cấp độ thất bại"},
"soundTypeFall":function(d){return "ngã xuống"},
"soundTypeFizz":function(d){return "tiếng xì"},
"soundTypeFuse":function(d){return "kíp nổ"},
"soundTypeIronGolemHit":function(d){return "quái vật sắt đánh"},
"soundTypeMetalWhack":function(d){return "cú đánh kim loại"},
"soundTypeMinecart":function(d){return "xe chở quặng"},
"soundTypePlaceBlock":function(d){return "khu vực đá"},
"soundTypePunch":function(d){return "đấm"},
"soundTypeSheepBaa":function(d){return "cừu kêu"},
"soundTypeStepFarmland":function(d){return "đi tới đất trồng"},
"soundTypeStepGrass":function(d){return "đi vào cỏ"},
"soundTypeStepGravel":function(d){return "đi lên sỏi"},
"soundTypeStepStone":function(d){return "đi lên đá"},
"soundTypeStepWood":function(d){return "đi lên gỗ"},
"soundTypeSuccess":function(d){return "mức độ thành công"},
"soundTypeZombieBrains":function(d){return "thây ma rên lên"},
"soundTypeZombieGroan":function(d){return "thây ma gầm lên"},
"soundTypeZombieHurt":function(d){return "thây ma bị thương"},
"target":function(d){return "mục tiêu"},
"testModeAll":function(d){return "tất cả"},
"testModeMasked":function(d){return "được đeo mặt nạ"},
"tileData":function(d){return "dữ liệu gạch"},
"timeDay":function(d){return "ngày"},
"timeLong":function(d){return "dài"},
"timeMedium":function(d){return "trung bình"},
"timeNight":function(d){return "đêm"},
"timeRandom":function(d){return "ngẫu nhiên"},
"timeSet":function(d){return "đặt giờ cho"},
"timeShort":function(d){return "ngắn"},
"timeVeryLong":function(d){return "rất dài"},
"timeVeryShort":function(d){return "rất ngắn"},
"to":function(d){return "ở cuối"},
"toSlotNumber":function(d){return "tới ô số lượng"},
"tooManyBlocksFail":function(d){return "Đã hoàn thành Câu đố "+craft_locale.v(d,"puzzleNumber")+". Xin chúc mừng! Bạn cũng có thể hoàn thành câu đố bằng "+craft_locale.p(d,"numBlocks",0,"vi",{"one":"1 block","other":craft_locale.n(d,"numBlocks")+" blocks"})+"."},
"turnRandom":function(d){return "rẽ ngẫu nhiên"},
"useArrowKeys":function(d){return "Bạn không cần thêm bất kỳ khối lệnh nào! Di chuyển với các mũi tên, và nhấn phím cách hoặc bấm vào phần quản trị trò chơi để sử dụng các đồ vật."},
"weather":function(d){return "thời tiết"},
"weatherTypeClear":function(d){return "xoá"},
"weatherTypeRain":function(d){return "mưa"},
"weatherTypeThunder":function(d){return "sấm sét"}};