import { BarChart, HowToVote, People } from '@mui/icons-material'

import { PropsListMenu } from './menu.types'
import { urlRouters } from '@/presentation/router/router.definitions'

export const drawerWidth = 152
export const drawerWidthResponsive = 52

export const menuItems: PropsListMenu[] = [
  {
    items: [
      {
        title: 'Minha Eleição',
        router: urlRouters.eleicao,
        icon: < HowToVote />
      },
      {
        title: 'Candidatos',
        router: urlRouters.candidato,
        icon: <People />
      },
      {
        title: 'Apuração',
        router: urlRouters.apuracao,
        icon: <BarChart />
      }
    ]
  }
]
