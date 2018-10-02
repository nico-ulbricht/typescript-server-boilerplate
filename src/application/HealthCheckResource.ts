import { Resource } from './Resource'
import * as Koa from 'koa'
import * as Router from 'koa-router'

export class HealthCheckResource implements Resource {
    private readonly router: Router

    constructor() {
        this.router = new Router({ prefix: '/' })
        this.router.get('/healthz', this.processHealthCheck.bind(this))
    }

    get routes() {
        return this.router.routes()
    }

    private async processHealthCheck(ctx: Koa.Context) {
        ctx.message = 'Pong'
        ctx.status = 200
    }
}
