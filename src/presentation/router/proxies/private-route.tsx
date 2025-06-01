import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { urlRouters } from '@/presentation/router/router.definitions'
import { Suspense } from '@/presentation/components'
import { Eleicao, Apuracao, Candidato } from '@/presentation/pages'
import { Template } from '@/presentation/components'

const PrivateRoute: React.FC = () => (
  <Routes>
    <Route path={urlRouters.root} element={<Template />}>
      <Route
        path={urlRouters.eleicao}
        element={
          <Suspense>
            <Eleicao />
          </Suspense>
        }
      />
      <Route
        path={urlRouters.apuracao}
        element={
          <Suspense>
            <Apuracao />
          </Suspense>
        }
      />
      <Route
        path={urlRouters.candidato}
        element={
          <Suspense>
            <Candidato />
          </Suspense>
        }
      />
    </Route>
    <Route path="*" element={<Navigate to={urlRouters.eleicao} replace />} />
  </Routes>
)

export default PrivateRoute
