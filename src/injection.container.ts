import { Application } from './application/Application'
import { Container } from 'inversify'
import { createConfiguration } from './application/ApplicationConfig'
import { TYPES } from './injection.types'

// prettier-disable
export const createContainer = (): Container => {
    const container = new Container()

    container.bind(TYPES.Application).to(Application)
    container.bind(TYPES.ApplicationConfig).toConstantValue(createConfiguration())

    return container
}
