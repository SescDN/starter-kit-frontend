import {injectable} from "tsyringe"  
import IAlunoService from '@/services/interfaces/IAlunoService'
import BaseService from '@/services/BaseService'
import axios, { AxiosResponse } from 'axios' 
import Aluno from '@/types/Aluno'

@injectable() 
export default class AlunoService extends BaseService implements IAlunoService {
 
    async getAlunos(): Promise<Aluno[]>{    
        const response: AxiosResponse = await axios.get(this.appConfig.config.dev.apiBaseUrl + '/Aluno') 

        return response.data
    }      

}
 