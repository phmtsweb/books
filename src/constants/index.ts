import dev from './dev'
import prod from './prod'

const env = process.env.NODE_ENV || 'development'

export default env === 'development' ? dev : prod
