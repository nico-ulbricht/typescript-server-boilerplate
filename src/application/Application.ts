import { ApplicationConfig } from './ApplicationConfig'
import { ApplicationInterface } from './ApplicationInterface'
import { injectable, inject, multiInject } from 'inversify'
import { Resource } from './Resource'
import { TYPES } from '../injection.types'
import * as BodyParser from 'koa-bodyparser'
import * as debug from 'debug'
import * as Koa from 'koa'
import * as Logger from 'koa-logger'

@injectable()
export class Application implements ApplicationInterface {
    private readonly debug = debug('Application')

    constructor(
        @inject(TYPES.ApplicationConfig) private readonly config: ApplicationConfig,
        @multiInject(TYPES.Resource) private readonly resources: Resource[]
    ) {}

    listen() {
        const app: Koa = new Koa()

        app.use(Logger())
        app.use(BodyParser())
        this.resources.forEach(aResource => app.use(aResource.routes))
        app.listen(this.config.port, () => {
            this.debug(`Listening to ${this.config.port}.`)
        })
    }
}
