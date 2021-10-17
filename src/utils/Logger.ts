interface Logger {
  log: (...args: any[]) => void
  warn: (...args: any[]) => void
  error: (...args: any[]) => void
}

class Debug implements Logger {
  private loggers: Logger[] = [];
  constructor() {
    if (process.env.NODE_ENV === 'dev') {
      this.loggers.push(console)
    }
  }


  log(...args: any[]) {
    console.log('debug', args)
    this.loggers.forEach(logger => logger.log(...args))
  }

  warn(...args: any[]) {
    this.loggers.forEach(logger => logger.warn(...args))
  }

  error(...args: any[]) {
    this.loggers.forEach(logger => logger.error(...args))
  }

  addLogger(fn: Logger) {
    this.loggers.push(fn)
  }
}

export const debug = new Debug()