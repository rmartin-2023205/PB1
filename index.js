import { connect } from './configs/mongo.js'
import { InitServer } from './configs/app.js'
import { DefaultAdmin, categoryDefault } from './utils/defaultMethods.js'


categoryDefault()
DefaultAdmin()
InitServer()
connect()