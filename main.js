let isWantToExe = true;
const home = 'cashew ~ ';
let paths = [];

const rmDots = function (value) {
  return value !== '..';
};

const changeDir = function (path) {
  if (path[0] + path[1] === '..') {
    paths.pop();
  }
  paths = paths.concat(path.split('/').filter(rmDots));
  return '';
};

const executeCommands = function (command, value) {
  switch (command) {
    case 'end':
      isWantToExe = false;
      return '';
    case 'cd':
      return changeDir(value);
    default: return ('error: unknown command " ' + command + ' "');
  }
};

while (isWantToExe) {
  const [command, value] = prompt(home + paths.join('/') + ' %').split(' ');
  console.log(executeCommands(command, value));
}