let isWantToExe = true;
let paths = ['cashew ~ '];

while (isWantToExe) {
  const [command, value] = prompt(paths.join('') + ' %').split(' ');
  switch (command) {
    case 'end':
      isWantToExe = false;
      break;
    case 'cd': paths = paths.concat(value.split('/'));
      break;
    default: console.log('error: unknown command " ' + command + ' "');
  }

}