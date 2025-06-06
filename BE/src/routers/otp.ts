import {Router} from 'express'
import { send } from 'process'

import { accessTokenValidatetor } from '../middlewares/user.middleware'
import { CreateOtp, VerifyOtp } from '../controllers/OtpController'
const OtpRouter=Router()

OtpRouter.post('/sendOtp',accessTokenValidatetor,CreateOtp),
OtpRouter.post('/verifyOtp',accessTokenValidatetor,VerifyOtp)
export default OtpRouter