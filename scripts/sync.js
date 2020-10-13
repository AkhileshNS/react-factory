const fs = require('fs');
const path = require('path');
const util = require('util');
const gen = require('./code');
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

const sync = async (override) => {
  if (process.argv[2] === 'pages' || override) {
    const getDirectories = (source) =>
      fs
        .readdirSync(source, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);

    const dirs = getDirectories(path.join(process.cwd(), 'src/pages'));
    const fileData = await readFile(
      path.join(process.cwd(), 'src/pages/index.tsx'),
      'utf8'
    );
    const fileDataArr = fileData.split('//===').map((item) => item.trim());
    fileDataArr[1] = gen.Pages(dirs);
    await writeFile(
      path.join(process.cwd(), 'src/pages/index.tsx'),
      fileDataArr.join('\n//===\n')
    );
  }
};

sync();
module.exports = sync;
