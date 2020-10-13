const fs = require('fs');
const path = require('path');
const util = require('util');
const gen = require('./code');
const sync = require('./sync');

const mkdir = util.promisify(fs.mkdir);
const writeFile = util.promisify(fs.writeFile);

const add = async () => {
  try {
    if (process.argv[2] === 'page') {
      const name = process.argv[3];

      if (!fs.existsSync(path.join(process.cwd(), 'src/pages'))) {
        await mkdir(path.join(process.cwd(), 'src/pages'));
      }

      if (!fs.existsSync(path.join(process.cwd(), 'src/pages/' + name))) {
        await mkdir(path.join(process.cwd(), 'src/pages/' + name));
      }

      await writeFile(
        path.join(process.cwd(), `src/pages/${name}/${name}.tsx`),
        gen.Page(name)
      );
      await writeFile(
        path.join(process.cwd(), `src/pages/${name}/${name}.styles.tsx`),
        gen.Styles()
      );
      await writeFile(
        path.join(process.cwd(), `src/pages/${name}/${name}.test.tsx`),
        gen.Test(name)
      );

      await sync(true);
    }
    if (process.argv[2] === 'component') {
      const name = process.argv[3];

      if (!fs.existsSync(path.join(process.cwd(), 'src/components'))) {
        await mkdir(path.join(process.cwd(), 'src/components'));
      }

      if (!fs.existsSync(path.join(process.cwd(), 'src/components/' + name))) {
        await mkdir(path.join(process.cwd(), 'src/components/' + name));
      }

      await writeFile(
        path.join(process.cwd(), `src/components/${name}/${name}.tsx`),
        gen.Component(name)
      );
      await writeFile(
        path.join(process.cwd(), `src/components/${name}/${name}.styles.tsx`),
        gen.Styles()
      );
      await writeFile(
        path.join(process.cwd(), `src/components/${name}/${name}.test.tsx`),
        gen.Test(name, true)
      );
    }
  } catch (err) {
    console.log(err);
  }
};

add();
module.exports = add;
