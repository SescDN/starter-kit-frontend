import appConfig from '@/appconfig'
import Aluno from '@/types/Aluno'  
  
export default interface IAlunoService {

  appConfig: appConfig
  getAlunos: () => Promise<Aluno[]>

}