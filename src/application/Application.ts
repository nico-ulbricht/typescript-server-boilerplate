import { ApplicationConfig } from './ApplicationConfig'
import { ApplicationInterface } from './ApplicationInterface'
import { injectable, inject } from 'inversify'
import { TYPES } from '../injection.types'
import * as debug from 'debug'
import * as BodyParser from 'koa-bodyparser'
import * as Koa from 'koa'
import * as Logger from 'koa-logger'

@injectable()
export class Application implements ApplicationInterface {
    private readonly debug = debug('Application')

    constructor(@inject(TYPES.ApplicationConfig) private readonly config: ApplicationConfig) {}

    listen() {
        const app: Koa = new Koa()

        app.use(Logger())
        app.use(BodyParser())
        app.listen(this.config.port, () => {
            this.debug(`Listening to ${this.config.port}.`)
        })
    }
}
