import { GuruCommand } from '@guru/core';

const command = new GuruCommand('guru')
  .option('-aa')
  .description('Create a config file')
  .action(async (options) => {
    console.log(`~ options`, options);

    // console.log(`~ options`, options)

    // command.error('file not found');
  });

command
  .command('config')
  .alias('c')
  .argument('[value]', 'value of')
  .description('Create a config file')
  .option('-o, --output <directory>', 'output directory')
  .action(async (options) => {
    console.log(`~ options`, options);
  });

command
  .parseAsync()
  .then(() => {
    setTimeout(() => {
      process.exit(0);
    }, 100);
  })
  .catch((e) => {
    command.error(e.message);
    process.exit(1);
  });
