var maze_locale = {lc:{"ar":function(n){
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
v:function(d,k){maze_locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){maze_locale.c(d,k);return d[k] in p?p[d[k]]:(k=maze_locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){maze_locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).maze_locale = {
"at":function(d){return "auf"},
"atFlower":function(d){return "an der Blume"},
"atHoneycomb":function(d){return "an der Honigwabe"},
"avoidCowAndRemove":function(d){return "vermeide die Kuh und entferne 1"},
"collect":function(d){return "sammle"},
"collectiblePresent":function(d){return "es gibt einige Schätze"},
"collectorCollectTooltip":function(d){return "Sammle ein Element ein"},
"collectorCollectedEverything":function(d){return "Herzlichen Glückwunsch! Du hast  "+maze_locale.p(d,"count",0,"de",{"one":"das Objekt","other":"alle "+maze_locale.n(d,"count")+" Objekte"})+" eingesammelt!"},
"collectorCollectedNothing":function(d){return "Programmiere weiter! Du musst so viele Objekte sammeln, wie möglich."},
"collectorCollectedSome":function(d){return "Tolle Leistung! Du hast "+maze_locale.p(d,"count",0,"de",{"one":"ein Objekt","other":maze_locale.n(d,"count")+" Objekte"})+" gesammelt."},
"collectorCollectedNotEnough":function(d){return "Bleib dran und programmiere weiter! Du musst noch mindestens "+maze_locale.p(d,"goal",0,"de",{"one":"1 Objekt","other":maze_locale.n(d,"goal")+" Objekte"})+" einsammeln."},
"collectorCollectedTooMany":function(d){return "Hier gibt es nicht genügend Elemente zum Aufsammeln."},
"collectorTooManyBlocks":function(d){return "Du kannst nur "+maze_locale.v(d,"blockLimit")+" Blöcke nutzen. Schau Dir deinen Code genauer an und versuche es nochmal!"},
"continue":function(d){return "Fortfahren"},
"corn":function(d){return "Mais"},
"cornTooltip":function(d){return "Mais ernten"},
"didNotCollectAllCrops":function(d){return "Sieh zu, dass Du alles Getreide mitnimmst!"},
"didNotCollectEverything":function(d){return "Stelle sicher, dass Du keinen Nektar oder Honig übrig lässt!"},
"didNotPlantEverywhere":function(d){return "Sieh zu, dass Du jedes Pflanzenbeet bepflanzt!"},
"dig":function(d){return "1 entfernen"},
"digTooltip":function(d){return "entferne eine Einheit Erde"},
"dirE":function(d){return "O"},
"dirN":function(d){return "N"},
"dirS":function(d){return "S"},
"dirW":function(d){return "W"},
"doCode":function(d){return "führe aus"},
"elseCode":function(d){return "ansonsten"},
"emptyCropError":function(d){return "Es gibt hier kein Getreide mehr."},
"fill":function(d){return "fülle 1"},
"fillN":function(d){return "fülle "+maze_locale.v(d,"shovelfuls")},
"fillSquare":function(d){return "fülle das Viereck"},
"fillStack":function(d){return "fülle das Loch mit "+maze_locale.v(d,"shovelfuls")+" Schaufeln Erde"},
"fillTooltip":function(d){return "Platziere eine Einheit Erde"},
"finalLevel":function(d){return "Herzlichen Glückwunsch! Du hast die letzte Aufgabe gelöst."},
"flowerEmptyError":function(d){return "Die Blume, auf der du bist, hat keinen Nektar mehr."},
"get":function(d){return "Nehme"},
"goal":function(d){return "Ziel"},
"has":function(d){return "hat"},
"haslettuce":function(d){return "hier gibt es Salat"},
"hascorn":function(d){return "es gibt Mais"},
"haspumpkin":function(d){return "Es gibt Kürbisse"},
"heightParameter":function(d){return "Höhe"},
"holePresent":function(d){return "dort ist ein Loch"},
"honey":function(d){return "stelle Honig her"},
"honeyAvailable":function(d){return "Honig"},
"honeyTooltip":function(d){return "Erzeuge Honig aus Nektar"},
"honeycombFullError":function(d){return "Diese Honigwabe hat keinen Platz mehr für Honig."},
"ifCode":function(d){return "wenn"},
"ifFlowerTooltip":function(d){return "Wenn es eine Blume/Honigwabe in der angegebenen Richtung gibt, dann führe einige Anweisungen aus."},
"ifInRepeatError":function(d){return "Du brauchst einen „Wenn“-Baustein in einem „Wiederhole“-Baustein. Wenn du Probleme hast, dann versuche nochmals das vorherige Level und schau, wie es dort funktioniert."},
"ifOnlyFlowerTooltip":function(d){return "Wenn es eine Blume in der angegebenen Richtung gibt, dann führe einige Anweisungen aus."},
"ifPathAhead":function(d){return "wenn Weg voraus"},
"ifTooltip":function(d){return "Wenn ein Weg in die benannte Richtung existiert, dann führe ein paar Aktionen aus."},
"ifelseFlowerTooltip":function(d){return "Wenn es eine Blume/Honigwabe in der angegebenen Richtung gibt, dann führe den ersten Baustein mit Anweisungen aus. Ansonsten führe den zweiten Baustein mit Anweisungen aus."},
"ifelseTooltip":function(d){return "Wenn ein Weg in die benannte Richtung existiert, dann führe den ersten Baustein mit Anweisungen aus. Ansonsten führe den zweiten Baustein mit Anweisungen aus."},
"insufficientHoney":function(d){return "Du musst die richtige Menge an Honig machen."},
"insufficientNectar":function(d){return "Du Du musst die richtige Menge an Nektar sammeln."},
"lettuce":function(d){return "Salat"},
"lettuceTooltip":function(d){return "Ernte Salat"},
"make":function(d){return "machen"},
"moveBackward":function(d){return "rückwärts bewegen"},
"moveEastTooltip":function(d){return "Bewege mich ein Feld Richtung Osten."},
"moveForward":function(d){return "vorwärts bewegen"},
"moveForwardTooltip":function(d){return "Bewege mich ein Feld nach vorne."},
"moveNorthTooltip":function(d){return "Bewege mich ein Feld Richtung Norden."},
"moveSouthTooltip":function(d){return "Bewege mich ein Feld Richtung Süden."},
"moveTooltip":function(d){return "Bewege mich um eine Position<b> </b>vorwärts/rückwärts"},
"moveWestTooltip":function(d){return "Bewege mich ein Feld Richtung Westen."},
"nectar":function(d){return "hole Nektar"},
"nectarRemaining":function(d){return "Nektar"},
"nectarTooltip":function(d){return "Hole Nektar aus einer Blume"},
"nextLevel":function(d){return "Herzlichen Glückwunsch! Du hast diese Aufgabe abgeschlossen."},
"no":function(d){return "Nein"},
"noPathAhead":function(d){return "Pfad ist blockiert"},
"noPathLeft":function(d){return "kein Pfad auf der linken Seite"},
"noPathRight":function(d){return "kein Pfad auf der rechten Seite"},
"notAtFlowerError":function(d){return "Du kannst Nektar nur aus einer Blume bekommen."},
"notAtHoneycombError":function(d){return "Du kannst Honig nur an der Honigwabe herstellen."},
"numBlocksNeeded":function(d){return "Diese Aufgabe kann mit %1 Blöcken gelöst werden."},
"pathAhead":function(d){return "Pfad voraus"},
"pathLeft":function(d){return "falls ein Pfad nach links ist"},
"pathRight":function(d){return "falls ein Pfad nach rechts ist"},
"pick":function(d){return "pflücke"},
"pilePresent":function(d){return "da ist ein Stapel"},
"plant":function(d){return "pflanze"},
"plantInNonSoilError":function(d){return "Ich kann nur in frische Erde pflanzen."},
"plantTooltip":function(d){return "Pflanzen Sie einen Sprössling"},
"pumpkin":function(d){return "Kürbis"},
"pumpkinTooltip":function(d){return "Ernte einen Kürbis"},
"putdownTower":function(d){return "stelle den Turm ab"},
"removeAndAvoidTheCow":function(d){return "entferne 1 und vermeide die Kuh"},
"removeN":function(d){return "Entferne "+maze_locale.v(d,"shovelfuls")},
"removePile":function(d){return "Entferne Haufen"},
"removeSquare":function(d){return "Viereck entfernen"},
"removeStack":function(d){return "Entferne "+maze_locale.v(d,"shovelfuls")+" Schaufeln Erde vom Haufen"},
"repeatCarefullyError":function(d){return "Um diese Aufgabe zu lösen, musst du zwei Bewegungen und eine Drehung in einen \"wiederhole\"-Block setzen. Es ist in Ordnung, wenn am Ende eine zusätzliche Drehung kommt."},
"repeatUntil":function(d){return "Wiederhole bis"},
"repeatUntilBlocked":function(d){return "solange ein Pfad vor dir liegt"},
"repeatUntilFinish":function(d){return "wiederholen bis abgeschlossen"},
"soil":function(d){return "Erde"},
"sprout":function(d){return "Sprössling"},
"step":function(d){return "Schritt"},
"totalHoney":function(d){return "Gesamter Honig"},
"totalNectar":function(d){return "Gesamter Nektar"},
"turnLeft":function(d){return "nach links drehen"},
"turnRight":function(d){return "nach rechts drehen"},
"turnTooltip":function(d){return "Dreht mich um 90 Grad<b> </b>nach links oder rechts."},
"uncheckedCloudError":function(d){return "Stelle sicher, dass du alle Wolken auf Blumen oder Bienenwaben überprüfst."},
"uncheckedPurpleError":function(d){return "Stelle sicher, dass du alle lila Blumen nach Nektar durchsucht hast"},
"whileMsg":function(d){return "solange"},
"whileTooltip":function(d){return "Wiederhole diese Aktionen, bis das Ziel erreicht ist."},
"word":function(d){return "Finde das Wort"},
"wrongCropError":function(d){return "Ich kann das Getreide nicht von hier aus ernten."},
"yes":function(d){return "Ja"},
"youSpelled":function(d){return "Du hast geschrieben"}};