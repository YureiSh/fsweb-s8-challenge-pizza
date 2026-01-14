
import { Switch, Route } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import SiparisForm from './components/SiparisForm'

function App() {

  return (
    <>

      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/siparis">
            <SiparisForm />
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default App
