import appConfig from '@/appconfig'
import {container} from 'tsyringe' 

export default class BaseService{

    appConfig: appConfig = container.resolve(appConfig) 
 
}