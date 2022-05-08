declare module 'read-package-json' {
    const anything: any;
    export = anything;
  }


  declare module 'cli-columns' {
    function cliColumns (values: string[], opts?: { newline?: string, width?: number }): string
    export = cliColumns;
  }
  
  declare namespace NodeJS.Module {
    function _nodeModulePaths(from: string): string[]
  }