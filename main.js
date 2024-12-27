import { operation } from "./bulitinCmds.js";

const getCurrentDir = (path, fileSystem) => {
  return path.reduce((parentDir, nextDir) => parentDir[nextDir], fileSystem);
};

const core = (allDirTree, home, currentPath) => {
  const input = prompt(home + currentPath.join('/') + ' %');
  const [command, ...data] = input.split(' ');
  const args = data.join(' ');
  const currentWorkingDir = getCurrentDir(currentPath, allDirTree);
  console.log(operation[command](currentWorkingDir, args, currentPath));
  core(allDirTree, home, currentPath);
};

const main = () => {
  const allDirTree = {
    '~': {
      'file1': {
        'file11': {
          'demo.txt': ['demo1']
        },
        'file12': {
          'demo.txt': ['demo1']
        }
      },

      file2: {
        file21: {
          'demo.txt': ['demo1']
        },
        file22: {
          'demo.txt': ['demo1']

        },
      }
    }
  };
  const home = 'cashew ';
  const currentPath = ['~'];
  core(allDirTree, home, currentPath);
};

main();