import EstiloGlobal, { Container } from './styles'

import ListaVagas from './containers/ListaVagas'
import Cabecalho from './containers/Cabecalho'
import Hero from './containers/Hero'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Cabecalho />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </>
  )
}

export default App
