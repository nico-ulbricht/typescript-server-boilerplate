import 'reflect-metadata'
import { ApplicationInterface } from './application/ApplicationInterface'
import { createContainer } from './injection.container'
import { TYPES } from './injection.types'

process.on('unhandledRejection', reason => {
    console.log(reason)
    console.log(JSON.stringify(reason, Object.getOwnPropertyNames(reason), 2))
})

process.on('uncaughtException', reason => {
    console.log(reason)
    console.log(JSON.stringify(reason, Object.getOwnPropertyNames(reason), 2))
})

const container = createContainer()
const app: ApplicationInterface = container.get(TYPES.Application)
app.listen()
