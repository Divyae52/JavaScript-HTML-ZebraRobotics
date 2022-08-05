function encrypt() {
  word = prompt("Enter what to encrypt. (only numbers or letters)");
  splited = word.split("")
  alert (splited);
  for (let i = 0; i < splited.length; i++) {
    if (splited[i] == "a") {
      splited[i] = 'b'
    }
    else if (splited[i] == "b") {
      splited[i] = 'c'
    }
    else if (splited[i] == 'c') {
      splited[i] = 'd'
    }
    else if (splited[i] == 'd') {
      splited[i] = 'e'
    }
    else if (splited[i] == 'e') {
      splited[i] = 'f'
    }
    else if (splited[i] == 'f') {
      splited[i] = 'g'
    }
    else if (splited[i] == 'g') {
      splited[i] = 'h'
    }
    else if (splited[i] == 'h') {
      splited[i] = 'i'
    }
    else if (splited[i] == 'i') {
      splited[i] = 'j'
    }
    else if (splited[i] == 'j') {
      splited[i] = 'k'
    }
    else if (splited[i] == 'k') {
      splited[i] = 'l'
    }
    else if (splited[i] == 'l') {
      splited[i] = 'm'
    }
    else if (splited[i] == 'm') {
      splited[i] = 'n'
    }
    else if (splited[i] == 'n') {
      splited[i] = 'o'
    }
    else if (splited[i] == 'o') {
      splited[i] = 'p'
    }
    else if (splited[i] == 'p') {
      splited[i] = 'q'
    }
    else if (splited[i] == 'q') {
      splited[i] = 'r'
    }
    else if (splited[i] == 'r') {
      splited[i] = 's'
    }
    else if (splited[i] == 's') {
      splited[i] = 't'
    }
    else if (splited[i] == 't') {
      splited[i] = 'u'
    }
    else if (splited[i] == 'u') {
      splited[i] = 'v'
    }
    else if (splited[i] == 'v') {
      splited[i] = 'w'
    }
    else if (splited[i] == 'w') {
      splited[i] = 'x'
    }
    else if (splited[i] == 'x') {
      splited[i] = 'y'
    }
    else if (splited[i] == 'y') {
      splited[i] = 'z'
    }
    else if (splited[i] == 'z') {
      splited[i] = 'a'
    }
    else if (splited[i] == '1') {
      splited[i] = '0'
    }
    else if (splited[i] == '2') {
      splited[i] = '1'
    }
    else if (splited[i] == '3') {
      splited[i] = '2'
    }
    else if (splited[i] == '4') {
      splited[i] = '3'
    }
    else if (splited[i] == '5') {
      splited[i] = '4'
    }
    else if (splited[i] == '6') {
      splited[i] = '5'
    }
    else if (splited[i] == '7') {
      splited[i] = '6'
    }
    else if (splited[i] == '8') {
      splited[i] = '7'
    }
    else if (splited[i] == '9') {
      splited[i] = '8'
    }
    else if (splited[i] == '0') {
      splited[i] = '9'
    }

  }
  alert (splited)
}
