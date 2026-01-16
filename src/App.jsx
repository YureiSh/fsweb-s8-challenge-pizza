
import { Switch, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'
import SiparisForm from './components/SiparisForm'
import SiparisAlindi from './components/SiparisAlindi'

const initialForm = {
  isim: "",
  pizzaSize: "",
  dough: "",
  extras: [],
  note: "",
  count: 1,

};

function App() {
  const [form, setForm] = useState(initialForm);

  return (
    <>

      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/siparis">
            <SiparisForm form={form} setForm={setForm} />
          </Route>
          <Route exact path="/siparis-alindi">
            <SiparisAlindi form={form} />
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default App
