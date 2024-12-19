let isWantToExe = true;
let path = 'cashew ~ :';
while (isWantToExe) {
  const response = prompt(path);
  console.log('your response is... ', response);
  if (response === "end") {
    isWantToExe = false;
  }
  if (response === 'which') {
    console.log(path.replace(' ~ ',''))
  }
}