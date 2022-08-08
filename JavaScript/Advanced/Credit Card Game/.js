let valid = 0
let splited = []
function readNum() {

}

function checkValid() {
  valid = 0
  let word = $(cost).val();
  splited = word.split("");
  //console.log(splited);
  //alert (splited);
  /*for (let i = 0; i < splited.length; i++) {
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
    else if (splited[i] == "A") {
      splited[i] = "B"
    }
    else if (splited[i] == "B") {
      splited[i] = 'C'
    }
    else if (splited[i] == 'C') {
      splited[i] = 'D'
    }
    else if (splited[i] == 'D') {
      splited[i] = 'E'
    }
    else if (splited[i] == 'E') {
      splited[i] = 'F'
    }
    else if (splited[i] == 'F') {
      splited[i] = 'G'
    }
    else if (splited[i] == 'G') {
      splited[i] = 'H'
    }
    else if (splited[i] == 'H') {
      splited[i] = 'I'
    }
    else if (splited[i] == 'I') {
      splited[i] = 'J'
    }
    else if (splited[i] == 'J') {
      splited[i] = 'K'
    }
    else if (splited[i] == 'K') {
      splited[i] = 'L'
    }
    else if (splited[i] == 'L') {
      splited[i] = 'M'
    }
    else if (splited[i] == 'M') {
      splited[i] = 'N'
    }
    else if (splited[i] == 'N') {
      splited[i] = 'O'
    }
    else if (splited[i] == 'O') {
      splited[i] = 'P'
    }
    else if (splited[i] == 'P') {
      splited[i] = 'Q'
    }
    else if (splited[i] == 'Q') {
      splited[i] = 'R'
    }
    else if (splited[i] == 'R') {
      splited[i] = 'S'
    }
    else if (splited[i] == 'S') {
      splited[i] = 'T'
    }
    else if (splited[i] == 'T') {
      splited[i] = 'U'
    }
    else if (splited[i] == 'U') {
      splited[i] = 'V'
    }
    else if (splited[i] == 'V') {
      splited[i] = 'W'
    }
    else if (splited[i] == 'W') {
      splited[i] = 'X'
    }
    else if (splited[i] == 'X') {
      splited[i] = 'Y'
    }
    else if (splited[i] == 'Y') {
      splited[i] = 'Z'
    }
    else if (splited[i] == 'Z') {
      splited[i] = 'A'
    }
    else {
      splited[i] = splited[i]
    }*/

  
  //}
if (splited.length !== 16){
  alert("wround number of numbers")
  return;
}
else{
  for (let i = 0; i < splited.length; i++) {
    if (splited[i]!=="1"&&splited[i]!=="2"&&splited[i]!=="3"&&splited[i]!=="4"&&splited[i]!=="5"&&splited[i]!=="6"&&splited[i]!=="7"&&splited[i]!=="8"&&splited[i]!=="9"&&splited[i]!=="0") {
      alert("Your Input Is In The Wrong Format")
      return;
    }
    else{ /*alert ("good")*/ }

      
let text = splited.join('');
//alert(text)
valid = 1
    }
  }
}

function runAlg() {
  if (valid == 0){
    alert("Invalid Number")
  }
  else{
    var card = splited
    //part 1
    card[1]=((card[1])*2)
    card[3]=((card[3])*2)
    card[5]=((card[5])*2)
    card[7]=((card[7])*2)
    card[9]=((card[9])*2)
    card[11]=((card[11])*2)
    card[13]=((card[13])*2)
    card[15]=((card[15])*2)
    card[0]=((card[0])*1)
    card[2]=((card[2])*1)
    card[4]=((card[4])*1)
    card[6]=((card[6])*1)
    card[8]=((card[8])*1)
    card[10]=((card[10])*1)
    card[12]=((card[12])*1)
    card[14]=((card[14])*1)
    //part 2
    console.log (card)
    let sum1 = card[1]+card[2]+card[3]+card[4]+card[5]+card[6]+card[7]+card[8]+card[9]+card[10]+card[11]+card[12]+card[13]+card[14]+card[15]+card[0]
    console.log (sum1)
    if (sum1 == (Math.round(sum1/10))*10){
      alert ("VALID CARD")
    }
    else{
      alert ("Invalid Card")
    }
  }
}