export interface ApplicationConfig {
    port: number
}

export const createConfiguration = (): ApplicationConfig => ({
    port: parseInt(process.env['PORT'] || '4000'),
})
