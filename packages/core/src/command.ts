import chalk from 'chalk';
import { Command } from 'commander';
import f from 'lodash/fp';
import { stdout } from 'process';

export class CommandCLI extends Command {
  constructor(name: string) {
    super(name);
    this.name(name);
    this.configureOutput({
      writeOut: (str: string) => stdout.write(chalk.whiteBright(`${str}`)),
      writeErr: (str: string) => stdout.write(chalk.red(`${str}`)),
      outputError: (str, write) => write(str),
    });
    this.configureHelp({
      sortSubcommands: true,
      commandUsage(cmd) {
        const parent = chalk.whiteBright.bold(cmd?.parent?.name() ?? '');
        const name = chalk.whiteBright(
          f.join(chalk.white.dim('|'))([
            chalk.whiteBright(cmd.name()),
            ...cmd.aliases(),
          ]),
        );

        return f.trim(parent + ' ' + name + ' ' + cmd.usage());
      },
      commandDescription: (cmd) =>
        f.join(' ')([chalk.whiteBright(cmd.description())]),
      subcommandTerm: (cmd) => f.join(' ')([chalk.white(cmd.name())]),
      subcommandDescription: (cmd) =>
        f.join(' ')([chalk.white(cmd.description())]),
    });

    this.showHelpAfterError(
      f.join(' ')([
        chalk.white('(use'),
        chalk.yellow('--help'),
        chalk.white('for additional information)'),
      ]),
    );

    // this.addOption(
    //   new Option('-v, --verbose')
    //     .conflicts(['quiet', 'silent'])
    //     .default(false)
    //     .hideHelp(),
    // );
    // this.addOption(
    //   new Option('-q, --quiet')
    //     .conflicts(['verbose', 'silent'])
    //     .default(false)
    //     .hideHelp(),
    // );
    // this.addOption(
    //   new Option('-s, --silent')
    //     .conflicts(['verbose', 'quiet'])
    //     .default(false)
    //     .hideHelp(),
    // );
  }

  version(
    str: string,
    flags?: string | undefined,
    description?: string | undefined,
  ) {
    super.version(chalk.white.dim(str), flags, description);
    return this;
  }

  createCommand(name: string) {
    return new GuruCommand(name);
  }
}
