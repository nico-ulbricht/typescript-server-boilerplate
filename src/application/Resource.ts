import * as Router from 'koa-router'

export interface Resource {
    routes: Router.IMiddleware
}
