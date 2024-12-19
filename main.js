let isWantToExe = true;
const home = 'cashew ~ ';
let paths = [];
const files = ['demo.js', 'demo2.js'];
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

const touch = function (fileName) {
  files.push(fileName);
  return '';
};

const ls = function (files) {
  files.forEach(element => {
    console.log(element);
  });
  return '';
};

const executeCommands = function (command, value) {

  switch (command) {
    case 'end':
      isWantToExe = false;
      return '';
    case 'ls':
      return ls(files);
    case 'cd':
      if (!value) {
        return 'no arguments!!!!!!';
      }
      return changeDir(value);
    case 'touch':
      if (!value) {
        return 'no arguments!!!!!!';
      }
      return touch(value);
    default: return ('error: unknown command "' + command + '"');
  }
};

while (isWantToExe) {
  const [command, value] = prompt(home + paths.join('/') + ' %').split(' ');
  console.log(executeCommands(command, value));
}