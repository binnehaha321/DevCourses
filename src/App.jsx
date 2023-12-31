import { Route, Routes } from 'react-router-dom'
import routes from './routes'

function App() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          index={route.index}
          path={route.path}
          element={
            route.layout ? (
              <route.layout>
                <route.component />
              </route.layout>
            ) : (
              <route.component />
            )
          }
        />
      ))}
    </Routes>
  )
}

export default App
