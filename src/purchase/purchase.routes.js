import {Router} from 'express'
import { validateJwt } from '../../middlewares/validate.jwt.js'
import { addPurchase, 
        createAndDownload, 
        purchaseHistorial 
    } from './purchase.controller.js'

const api = Router()

api.post('/purchase',[validateJwt], addPurchase)
api.post('/historial',[validateJwt], purchaseHistorial)
api.get('/factura/:id',[validateJwt], createAndDownload);

export default api