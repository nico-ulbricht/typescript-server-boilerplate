import { Application } from './application/Application'
import { Container } from 'inversify'
import { createConfiguration } from './application/ApplicationConfig'
import { HealthCheckResource } from './application/HealthCheckResource'
import { TYPES } from './injection.types'

// prettier-disable
export const createContainer = (): Container => {
    const container = new Container()

    container.bind(TYPES.Application).to(Application)
    container.bind(TYPES.ApplicationConfig).toConstantValue(createConfiguration())
    container.bind(TYPES.Resource).to(HealthCheckResource)

    return container
}
