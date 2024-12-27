const changeDir = (currentWorkingDir, path, currentPath) => {
  const [nextDir] = path.split('/');
  if (nextDir === '..') {
    currentPath.pop();
    return '';
  }

  if (!(nextDir in currentWorkingDir) && nextDir.includes('.')) {
    return 'no such dir ' + nextDir;
  }
  currentPath.push(nextDir);
  return '';
};



const showList = (currentWorkingDir) => {
  return Object.keys(currentWorkingDir).join(' '.repeat(10));
};

const makeDir = (currentWorkingDir, name) => {
  if (name in currentWorkingDir) {
    return 'dir exits!!!';
  }
  currentWorkingDir[name] = {};
  return '';
};

const echo = (_, args) => args;

export const operation = {
  echo: echo,
  cd: changeDir,
  ls: showList,
  mkdir: makeDir,
};