'use strict';

const { Console } = require('console');
const picocolors = require('picocolors');

const TRACE = 10;
const DEBUG = 20;
const INFO = 30;
const WARN = 40;
const ERROR = 50;
const FATAL = 60;

const LEVEL_NAMES = {
  10: 'TRACE',
  20: 'DEBUG',
  30: 'INFO ',
  40: 'WARN ',
  50: 'ERROR',
  60: 'FATAL'
};

const LEVEL_COLORS = {
  10: 'gray',
  20: 'gray',
  30: 'green',
  40: 'bgYellow',
  50: 'bgRed',
  60: 'bgRed'
};

const console = new Console({
  stdout: process.stdout,
  stderr: process.stderr,
  colorMode: false
});

class Logger {
  constructor(options = {}) {
    const silent = options.silent || false;
    this._debug = options.debug || false;

    this.level = INFO;

    if (silent) {
      this.level = FATAL + 10;
    }

    if (this._debug) {
      this.level = TRACE;
    }
  }

  _writeLogOutput(level, consoleArgs) {
    let errArg;
    if (typeof consoleArgs[0] === 'object') {
      errArg = consoleArgs.shift();
      if (errArg.err && errArg.err instanceof Error) {
        errArg = errArg.err;
      }
    }

    if (this._debug) {
      const str = new Date().toISOString().substring(11, 23) + ' ';

      if (level === TRACE || level >= WARN) {
        process.stderr.write(picocolors[LEVEL_COLORS[DEBUG]](str));
      } else {
        process.stdout.write(picocolors[LEVEL_COLORS[DEBUG]](str));
      }
    }

    if (level >= this.level) {
      const str = picocolors[LEVEL_COLORS[level]](LEVEL_NAMES[level]) + ' ';
      if (level === TRACE || level >= WARN) {
        process.stderr.write(str);
      } else {
        process.stdout.write(str);
      }

      if (level === TRACE) {
        console.trace(...consoleArgs);
      } else if (level < INFO) {
        console.debug(...consoleArgs);
      } else if (level < WARN) {
        console.info(...consoleArgs);
      } else if (level < ERROR) {
        console.warn(...consoleArgs);
      } else {
        console.error(...consoleArgs);
      }

      if (errArg) {
        const err = errArg.stack || errArg.message;
        if (err) {
          const str = picocolors.yellow(err) + '\n';

          if (level === TRACE || level >= WARN) {
            process.stderr.write(str);
          } else {
            process.stdout.write(str);
          }
        }
      }
    }
  }

  trace(...args) {
    this._writeLogOutput(TRACE, args);
  }

  debug(...args) {
    this._writeLogOutput(DEBUG, args);
  }

  info(...args) {
    this._writeLogOutput(INFO, args);
  }

  warn(...args) {
    this._writeLogOutput(WARN, args);
  }

  error(...args) {
    this._writeLogOutput(ERROR, args);
  }

  fatal(...args) {
    this._writeLogOutput(FATAL, args);
  }
}

function createLogger(options) {
  const logger = new Logger(options);

  logger.d = logger.debug;
  logger.i = logger.info;
  logger.w = logger.warn;
  logger.e = logger.error;
  logger.log = logger.info;

  return logger;
}

module.exports = createLogger;
