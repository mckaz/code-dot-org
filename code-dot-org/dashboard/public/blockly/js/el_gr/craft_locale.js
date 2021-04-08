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
"absolute":function(d){return "απόλυτη"},
"agentGenericFailureMessage":function(d){return "Συνέχισε την κωδικοποίηση! Μην ξεχνάς να χρησιμοποιείς τον Agent για βοήθεια."},
"agentTooFewBlocksFailureMessage":function(d){return "Δοκίμασε να προσθέτεις μόνο ένα μπλοκ τη φορά για να μετακινήσεις τον Agent στο σωστό σημείο."},
"at":function(d){return "σε"},
"agentDiamondPathCongrats":function(d){return "Συγχαρητήρια, ανακάλυψες το μονοπάτι των διαμαντιών! Έχεις συλλέξει "+craft_locale.p(d,"count",0,"el",{"one":"1 diamond","other":craft_locale.n(d,"count")+" diamonds"})+" μέχρι τώρα!"},
"blockActionAdd":function(d){return "προσθέστε"},
"blockActionAttack":function(d){return "επίθεση"},
"blockActionClone":function(d){return "αντίγραψε κύβους"},
"blockActionCloneFiltered":function(d){return "clone only"},
"blockActionCollect":function(d){return "σύλλεξε"},
"blockActionCollectAll":function(d){return "σύλλεξε τα πάντα"},
"blockActionDestroyEntity":function(d){return "εξαφάνιση"},
"blockActionDetect":function(d){return "εντόπισε"},
"blockActionDetectRedstone":function(d){return "εντόπισε ερυθρόλιθο"},
"blockActionDrop":function(d){return "ρίξε"},
"blockActionDropAll":function(d){return "ρίξε τα πάντα"},
"blockActionExecute":function(d){return "εκτέλεσε εντολή"},
"blockActionExplodeEntity":function(d){return "έκρηξη"},
"blockActionFill":function(d){return "fill from"},
"blockActionFlashEntity":function(d){return "λάμψη"},
"blockActionGetItemCount":function(d){return "get item count"},
"blockActionGetItemCountInSlotNumber":function(d){return "get item count in slot number"},
"blockActionGetItemDetail":function(d){return "get item detail"},
"blockActionGetItemDetailInSlotNumber":function(d){return "get item detail in slot number"},
"blockActionGetItemSpace":function(d){return "get item space"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "get item space in slot number"},
"blockActionGive":function(d){return "give"},
"blockActionInspect":function(d){return "έλεγχος"},
"blockActionInspectData":function(d){return "έλεγχος δεδομένων"},
"blockActionKill":function(d){return "σκότωσε στόχο"},
"blockActionMove":function(d){return "προχώρησε"},
"blockActionMoveAway":function(d){return "προχώρησε μακριά από"},
"blockActionMoveForward":function(d){return "προχώρησε μπροστά"},
"blockActionMoveRandom":function(d){return "προχώρησε τυχαία"},
"blockActionMoveTo":function(d){return "προχώρησε σε"},
"blockActionMoveToward":function(d){return "προχώρησε ένα βήμα μπροστά"},
"blockActionPlaySound":function(d){return "παίξε ήχο"},
"blockActionRepeat":function(d){return "επανάλαβε"},
"blockActionRepeatRandom":function(d){return "επανάλαβε τυχαία"},
"blockActionSetBlock":function(d){return "set block"},
"blockActionSpawn":function(d){return "δημιούργησε"},
"blockActionSummon":function(d){return "κάλεσε"},
"blockActionTeleport":function(d){return "τηλεμεταφορά στόχου"},
"blockActionTeleportToPlayer":function(d){return "τηλεμεταφορά στον παίκτη"},
"blockActionTestForBlock":function(d){return "tests whether a block type"},
"blockActionTestForBlocks":function(d){return "tests whether the pattern between"},
"blockActionToScore":function(d){return "στη βαθμολογία"},
"blockActionTransfer":function(d){return "μετάφερε"},
"blockActionWait":function(d){return "περίμενε"},
"blockActionWith":function(d){return "με"},
"blockData":function(d){return "δεδομένα κύβου"},
"blockDestroyBlock":function(d){return "κατάστρεψε κύβο"},
"blockIf":function(d){return "εάν"},
"blockIfLavaAhead":function(d){return "εάν λάβα μπροστά"},
"blockIs":function(d){return "is"},
"blockMove":function(d){return "προχώρησε"},
"blockMoveBackward":function(d){return "πήγαινε πίσω"},
"blockMoveForward":function(d){return "προχώρησε μπροστά"},
"blockPlace":function(d){return "βάλε"},
"blockPlaceTorch":function(d){return "τοποθέτησε πυρσό"},
"blockPlaceXAheadAhead":function(d){return "μπροστά"},
"blockPlaceXAheadPlace":function(d){return "βάλε"},
"blockPlaceXPlace":function(d){return "βάλε"},
"blockPlantCrop":function(d){return "βάλε καλλιέργεια"},
"blockShear":function(d){return "κούρεψε"},
"blockTill":function(d){return "όργωσε"},
"blockTillSoil":function(d){return "μέχρι το έδαφος"},
"blockTurn":function(d){return "στρίψε"},
"blockTurnLeft":function(d){return "στρίψε αριστερά"},
"blockTurnRight":function(d){return "στρίψε δεξιά"},
"blockType":function(d){return "τύπος κύβου"},
"blockTypeBedrock":function(d){return "υπόβαθρο"},
"blockTypeBricks":function(d){return "τούβλα"},
"blockTypeClay":function(d){return "πηλός"},
"blockTypeClayHardened":function(d){return "σκληρός πηλός"},
"blockTypeCobblestone":function(d){return "πλακόστρωτο"},
"blockTypeDirt":function(d){return "χώμα"},
"blockTypeDirtCoarse":function(d){return "χονδρό χώμα"},
"blockTypeDoorIron":function(d){return "σιδερένια πόρτα"},
"blockTypeEmpty":function(d){return "κενό"},
"blockTypeFarmlandWet":function(d){return "καλλιεργήσιμη γη"},
"blockTypeGlass":function(d){return "γυαλί"},
"blockTypeGlowstone":function(d){return "φεγγόλιθος"},
"blockTypeGrass":function(d){return "γρασίδι"},
"blockTypeGravel":function(d){return "χαλίκι"},
"blockTypeLava":function(d){return "λάβα"},
"blockTypeLogAcacia":function(d){return "ξύλο ακακίας"},
"blockTypeLogBirch":function(d){return "ξύλο σημύδας"},
"blockTypeLogJungle":function(d){return "ξύλο ζούγκλας"},
"blockTypeLogOak":function(d){return "ξύλο δρυ"},
"blockTypeLogSpruce":function(d){return "ξύλο έλατου"},
"blockTypeOreCoal":function(d){return "γαιάνθρακας"},
"blockTypeOreDiamond":function(d){return "μετάλλευμα διαμαντιού"},
"blockTypeOreEmerald":function(d){return "ορυκτό σμαράγδι"},
"blockTypeOreGold":function(d){return "ορυκτός χρυσός"},
"blockTypeOreIron":function(d){return "ορυκτός σίδηρος"},
"blockTypeOreLapis":function(d){return "ορυκτός λαζουρίτης"},
"blockTypeOreRedstone":function(d){return "ορυκτός ερυθρόλιθος"},
"blockTypePlanksAcacia":function(d){return "σανίδες από ακακία"},
"blockTypePlanksBirch":function(d){return "σανίδες από σημύδα"},
"blockTypePlanksJungle":function(d){return "σανίδες από ξύλο ζούγκλας"},
"blockTypePlanksOak":function(d){return "σανίδες από βελανιδιά"},
"blockTypePlanksSpruce":function(d){return "σανίδες από έλατο"},
"blockTypePressurePlateUp":function(d){return "πλάκα πίεσης"},
"blockTypeRail":function(d){return "ράγα"},
"blockTypeRailsRedstoneTorch":function(d){return "πυρσός ερυθρόλιθου"},
"blockTypeRedstoneWire":function(d){return "καλώδιο ερυθρόλιθου"},
"blockTypeSand":function(d){return "άμμος"},
"blockTypeSandstone":function(d){return "αμμόλιθος"},
"blockTypeStone":function(d){return "πέτρα"},
"blockTypeTnt":function(d){return "δυναμίτης"},
"blockTypeTree":function(d){return "δέντρο"},
"blockTypeWater":function(d){return "νερό"},
"blockTypeWool":function(d){return "μαλλί"},
"blockTypeWoolBlue":function(d){return "blue wool"},
"blockTypeWoolMagenta":function(d){return "magenta wool"},
"blockTypeWoolOrange":function(d){return "orange wool"},
"blockTypeWoolPink":function(d){return "pink wool"},
"blockTypeWoolRed":function(d){return "red wool"},
"blockTypeWoolYellow":function(d){return "yellow wool"},
"blockWhileXAheadAhead":function(d){return "μπροστά"},
"blockWhileXAheadDo":function(d){return "κάνε"},
"blockWhileXAheadWhile":function(d){return "όσο"},
"cancel":function(d){return "Άκυρο"},
"cloneMode":function(d){return "clone mode"},
"cloneModeForce":function(d){return "force"},
"cloneModeMove":function(d){return "προχώρησε"},
"cloneModeNormal":function(d){return "κανονικό"},
"connectToCodeConnection":function(d){return "Για να εκτελέσεις αυτό το έργο στο Minecraft: Education Edition, χρησιμοποίησε την εφαρμογή Σύνδεση κώδικα."},
"destination":function(d){return "destination"},
"directionBack":function(d){return "πίσω"},
"directionDown":function(d){return "κάτω"},
"directionForward":function(d){return "μπροστά"},
"directionLeft":function(d){return "αριστερά"},
"directionMiddle":function(d){return "στη μέση"},
"directionRight":function(d){return "δεξιά"},
"directionUp":function(d){return "επάνω"},
"downloadButton":function(d){return "Λήψη"},
"entityType":function(d){return "τύπος οντότητας"},
"entityTypeChicken":function(d){return "κοτόπουλο"},
"entityTypeCow":function(d){return "αγελάδα"},
"entityTypeCreeper":function(d){return "κρήπερ"},
"entityTypeIronGolem":function(d){return "σιδερένιο γκόλεμ"},
"entityTypePlayer":function(d){return "παίκτης"},
"entityTypeSheep":function(d){return "πρόβατο"},
"entityTypeZombie":function(d){return "ζόμπι"},
"eventTypeWhenAttacked":function(d){return "όταν γίνεται επίθεση"},
"eventTypeWhenDay":function(d){return "όταν είναι ημέρα"},
"eventTypeWhenNight":function(d){return "όταν είναι νύχτα"},
"eventTypeWhenRun":function(d){return "όταν εκτελείται"},
"eventTypeWhenSpawned":function(d){return "όταν δημιουργείται"},
"eventTypeWhenTouched":function(d){return "όταν αγγίζεται"},
"eventTypeWhenUsed":function(d){return "όταν χρησιμοποιείται"},
"forever":function(d){return "πάντα"},
"from":function(d){return "from"},
"generatedCodeDescription":function(d){return "Σύροντας και τοποθετώντας μπλοκς σε αυτό το παζλ, έχετε δημιουργήσει ένα σύνολο εντολών σε μια γλώσσα προγραμματισμού στον Η/Υ που ονομάζεται Javascript. Αυτός ο κώδικας λέει στους υπολογιστές τι να εμφανίσουν στην οθόνη. Ό, τι βλέπετε και κάνετε στο Minecraft αρχίζει επίσης, με γραμμές κώδικα υπολογιστών όπως αυτές."},
"getdataof":function(d){return "λήψη δεδομένων από"},
"getnameof":function(d){return "λήψη ονόματος από"},
"houseSelectChooseFloorPlan":function(d){return "Διάλεξε το σχέδιο για το σπίτι σου."},
"houseSelectEasy":function(d){return "Εύκολο"},
"houseSelectHard":function(d){return "Δύσκολο"},
"houseSelectLetsBuild":function(d){return "Ας χτίσουμε ένα σπίτι."},
"houseSelectMedium":function(d){return "Μέτριο"},
"import":function(d){return "Εισαγωγή"},
"importShareLinkBody":function(d){return "Πληκτρολόγησε εδώ τη σύνδεση κοινής χρήσης για την Ώρα του Κώδικα και κάνε κλικ στην επιλογή \"Εισαγωγή\" για να αντιγράψεις τον κώδικά σου στο Minecraft"},
"importShareLinkHeader":function(d){return "Εισαγωγή σύνδεσης κοινής χρήσης"},
"inSlotNumber":function(d){return "σε αριθμό υποδοχής"},
"itemTypeBlock":function(d){return "μπλοκ"},
"itemTypeDecoration":function(d){return "διακόσμηση"},
"itemTypeMiscellaneous":function(d){return "διάφορα"},
"itemTypeTool":function(d){return "εργαλείο"},
"items":function(d){return "αντικείμενο/α"},
"itemsOfBlockType":function(d){return "αντικείμενο/α από τύπο κύβου"},
"level10FailureMessage":function(d){return "Κάλυψε τη λάβα για να τη διασχίσεις και, στη συνέχεια, εξόρυξε δύο από τους σιδερένιους κύβους από την άλλη πλευρά."},
"level11FailureMessage":function(d){return "Μην ξεχάσεις να τοποθετήσεις σκύρο μπροστά αν υπάρχει λάβα. Με αυτόν τον τρόπο θα μπορέσεις να εξορύξεις με ασφάλεια αυτήν τη σειρά πόρων."},
"level12FailureMessage":function(d){return "Μην ξεχάσεις να εξορύξεις 3 κύβους ερυθρόλιθου. Έτσι θα χρησιμοποιήσεις όσα έμαθες από το χτίσιμο του σπιτιού σου και από τη χρήση δηλώσεων \"εάν\" για να μην πέσεις στη λάβα."},
"level13FailureMessage":function(d){return "Τοποθέτησε \"ράγα\" κατά μήκος του χωμάτινου δρόμου από την πόρτα του σπιτιού σου έως την άκρη του χάρτη."},
"level1FailureMessage":function(d){return "Πρέπει να χρησιμοποιήσεις εντολές για να περπατήσεις μέχρι το πρόβατο."},
"level1TooFewBlocksMessage":function(d){return "Δοκίμασε να χρησιμοποιήσεις εντολές για να περπατήσεις μέχρι το πρόβατο."},
"level2FailureMessage":function(d){return "Για να κόψεις ένα δέντρο, περπάτησε μέχρι τον κορμό και χρησιμοποίησε την εντολή \"κατάστρεψε κύβο\"."},
"level2TooFewBlocksMessage":function(d){return "Δοκίμασε να χρησιμοποιήσεις περισσότερες εντολές για να κόψεις ένα δέντρο. Φτάσε τον κορμό του και χρησιμοποίησε την εντολή \"κατάστρεψε μπλοκ\"."},
"level3FailureMessage":function(d){return "Για να μαζέψεις μαλλί από τα πρόβατα, φτάσε το καθένα και χρησιμοποίησε την εντολή \"κούρεψε\". Θυμήσου να χρησιμοποιείς εντολές \"στρίψε\" για να φτάσεις τα πρόβατα."},
"level3TooFewBlocksMessage":function(d){return "Χρησιμοποίησε περισσότερες εντολές για να μαζέψεις μαλλί από τα πρόβατα. Φτάσε το καθένα και χρησιμοποίησε την εντολή \"κούρεψε\"."},
"level4FailureMessage":function(d){return "Πρέπει να χρησιμοποιήσεις την εντολή \"κατάστρεψε μπλοκ\" σε καθέναν από τους τρεις κορμούς δέντρων."},
"level5FailureMessage":function(d){return "Βάλε τα μπλοκ σου στο χωματόδρομο για να φτιάξεις ένα τοίχος. Η ροζ εντολή \"επανάληψη\" θα τρέξει τις εντολές μέσα της, όπως το \"βάλε μπλοκ\" και το \"πάμε μπροστά\"."},
"level6FailureMessage":function(d){return "Τοποθέτησε κύβους στο περίγραμμα από χώμα του σπιτιού για να ολοκληρώσεις το παζλ."},
"level7FailureMessage":function(d){return "Χρησιμοποίησε την εντολή \"φύτεψε\" για να βάλεις καλλιέργειες σε κάθε χωράφι σκουρόχρωμου χώματος."},
"level8FailureMessage":function(d){return "Εάν αγγίξεις ένα creeper θα εκραγεί. Κινήσου κρυφά γύρω τους και μπες στο σπίτι σου."},
"level9FailureMessage":function(d){return "Μην ξεχάσεις να τοποθετήσεις τουλάχιστον 2 πυρσούς για να έχεις φως ΚΑΙ να εξορύξεις τουλάχιστον 2 κάρβουνα."},
"maskMode":function(d){return "mask mode"},
"maskModeMasked":function(d){return "με κάλυψη"},
"maskModeReplace":function(d){return "αντικατάστησε"},
"minecraftBlock":function(d){return "μπλοκ"},
"minecraftNotConnected":function(d){return "Το Minecraft δεν είναι συνδεδεμένο"},
"miniBlockBricks":function(d){return "τούβλα"},
"miniBlockBucketLava":function(d){return "κουβάς με λάβα"},
"miniBlockBucketWater":function(d){return "κουβάς με νερό"},
"miniBlockCarrots":function(d){return "καρότα"},
"miniBlockCoal":function(d){return "κάρβουνο"},
"miniBlockCobblestone":function(d){return "πλακόστρωτο"},
"miniBlockDiamond":function(d){return "διαμάντι"},
"miniBlockDirt":function(d){return "χώμα"},
"miniBlockDirtCoarse":function(d){return "χονδρό χώμα"},
"miniBlockEgg":function(d){return "αυγό"},
"miniBlockEmerald":function(d){return "σμαράγδι"},
"miniBlockGravel":function(d){return "χαλίκι"},
"miniBlockGunPowder":function(d){return "πυρίτιδα"},
"miniBlockIngotGold":function(d){return "ράβδος χρυσού"},
"miniBlockIngotIron":function(d){return "ράβδος σιδήρου"},
"miniBlockLapisLazuli":function(d){return "λαζουρίτης"},
"miniBlockLogAcacia":function(d){return "ξύλο ακακίας"},
"miniBlockLogBirch":function(d){return "ξύλο σημύδας"},
"miniBlockLogJungle":function(d){return "ξύλο ζούγκλας"},
"miniBlockLogOak":function(d){return "ξύλο δρυ"},
"miniBlockLogSpruce":function(d){return "ξύλο έλατου"},
"miniBlockMilk":function(d){return "γάλα"},
"miniBlockPlanksAcacia":function(d){return "σανίδες από ακακία"},
"miniBlockPlanksBirch":function(d){return "σανίδες από σημύδα"},
"miniBlockPlanksJungle":function(d){return "σανίδες από ξύλο ζούγκλας"},
"miniBlockPlanksOak":function(d){return "σανίδες από βελανιδιά"},
"miniBlockPlanksSpruce":function(d){return "σανίδες από έλατο"},
"miniBlockPoppy":function(d){return "παπαρούνα"},
"miniBlockPotato":function(d){return "πατάτα"},
"miniBlockRedstoneDust":function(d){return "σκόνη ερυθρόλιθου"},
"miniBlockSand":function(d){return "άμμος"},
"miniBlockSandstone":function(d){return "αμμόλιθος"},
"miniBlockSheep":function(d){return "πρόβατο"},
"miniBlockWheat":function(d){return "σιτάρι"},
"miniBlockWool":function(d){return "μαλλί"},
"nextLevelMsg":function(d){return "Το Παζλ "+craft_locale.v(d,"puzzleNumber")+" ολοκληρώθηκε. Συγχαρητήρια!"},
"oldBlockHandling":function(d){return "old block"},
"oldBlockHandlingsDestroy":function(d){return "κατάστρεψε"},
"oldBlockHandlingsKeep":function(d){return "διατήρησε"},
"oldBlockHandlingsReplace":function(d){return "αντικατάστησε"},
"onBehalfOf":function(d){return "για λογαριασμό του"},
"playerSelectChooseCharacter":function(d){return "Διάλεξε τον χαρακτήρα σου."},
"playerSelectChooseSelectButton":function(d){return "Επιλογή"},
"playerSelectLetsGetStarted":function(d){return "Ας αρχίσουμε."},
"quantity":function(d){return "ποσότητα"},
"reinfFeedbackMsg":function(d){return "Μπορείς να πατήσεις \"Συνέχισε το παιχνίδι\" για να επιστρέψεις στο παιχνίδι σου."},
"relative":function(d){return "relative"},
"runAgent":function(d){return "Εκτέλεση Agent"},
"score":function(d){return "Βαθμολογία"},
"seconds":function(d){return "δευτερόλεπτο/α"},
"selectChooseButton":function(d){return "Επιλογή"},
"soundTypeBump":function(d){return "χτύπημα"},
"soundTypeChickenBawk":function(d){return "κακάρισμα κοτόπουλου"},
"soundTypeChickenHurt":function(d){return "κλάμα κοτόπουλου"},
"soundTypeCollectedBlock":function(d){return "συλλογή κύβου"},
"soundTypeCowHuff":function(d){return "ξεφύσημα αγελάδας"},
"soundTypeCowHurt":function(d){return "κλάμα αγελάδας"},
"soundTypeCowMoo":function(d){return "μουγκανητό αγελάδας"},
"soundTypeCowMooLong":function(d){return "μουυυγκανητό αγελάδας"},
"soundTypeCreeperHiss":function(d){return "συριγμός creeper"},
"soundTypeDig_wood1":function(d){return "σπάσιμο ξύλου"},
"soundTypeDoorOpen":function(d){return "άνοιγμα πόρτας"},
"soundTypeExplode":function(d){return "έκρηξη"},
"soundTypeFailure":function(d){return "αποτυχία επιπέδου"},
"soundTypeFall":function(d){return "πτώση"},
"soundTypeFizz":function(d){return "άφρισμα"},
"soundTypeFuse":function(d){return "φιτίλι"},
"soundTypeIronGolemHit":function(d){return "χτύπημα σιδερένιου γκόλεμ"},
"soundTypeMetalWhack":function(d){return "μεταλλικός χτύπος"},
"soundTypeMinecart":function(d){return "βαγονέτο"},
"soundTypePlaceBlock":function(d){return "τοποθέτηση κύβου"},
"soundTypePunch":function(d){return "γροθιά"},
"soundTypeSheepBaa":function(d){return "βέλασμα προβάτου"},
"soundTypeStepFarmland":function(d){return "βήμα σε καλλιεργήσιμη γη"},
"soundTypeStepGrass":function(d){return "βήμα σε γρασίδι"},
"soundTypeStepGravel":function(d){return "βήμα σε χαλίκι"},
"soundTypeStepStone":function(d){return "βήμα σε πέτρα"},
"soundTypeStepWood":function(d){return "βήμα σε ξύλο"},
"soundTypeSuccess":function(d){return "επιτυχία επιπέδου"},
"soundTypeZombieBrains":function(d){return "βογκητό από ζόμπι"},
"soundTypeZombieGroan":function(d){return "γρύλισμα από ζόμπι"},
"soundTypeZombieHurt":function(d){return "κλάμα από ζόμπι"},
"target":function(d){return "στόχος"},
"testModeAll":function(d){return "όλα"},
"testModeMasked":function(d){return "με κάλυψη"},
"tileData":function(d){return "δεδομένα πλακιδίων"},
"timeDay":function(d){return "ημέρα"},
"timeLong":function(d){return "μεγάλη"},
"timeMedium":function(d){return "μεσαία"},
"timeNight":function(d){return "νύχτα"},
"timeRandom":function(d){return "τυχαίο"},
"timeSet":function(d){return "ορισμός ώρας σε"},
"timeShort":function(d){return "σύντομη"},
"timeVeryLong":function(d){return "πολύ μεγάλη"},
"timeVeryShort":function(d){return "πολύ σύντομη"},
"to":function(d){return "σε"},
"toSlotNumber":function(d){return "στον αριθμό υποδοχής"},
"tooManyBlocksFail":function(d){return "Το Παζλ "+craft_locale.v(d,"puzzleNumber")+" ολοκληρώθηκε. Συγχαρητήρια! Είναι επίσης δυνατό να ολοκληρωθεί με "+craft_locale.p(d,"numBlocks",0,"el",{"one":"1 block","other":craft_locale.n(d,"numBlocks")+" blocks"})+"."},
"turnRandom":function(d){return "στρίψε τυχαία"},
"useArrowKeys":function(d){return "Δεν χρειάζεται να προσθέσεις μπλοκ! Μπορείς να κινηθείς με τα βέλη και να πατήσεις το πλήκτρο διαστήματος ή τον πίνακα του παιχνιδιού για να χρησιμοποιήσεις αντικείμενα."},
"weather":function(d){return "καιρός"},
"weatherTypeClear":function(d){return "αίθριος"},
"weatherTypeRain":function(d){return "βροχή"},
"weatherTypeThunder":function(d){return "thunder"}};