import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import FinishSetting from './Pages/FinishSetting';
import CreateAccount from './Pages/CreateAccount';
import WhosWatching from './Pages/WhosWatching';
import Netflix from './Pages/Netflix';



function App() {
 

  return (
    <>

    <Routes>

      <Route path='/' Component={Home}></Route>
      <Route path='/signin' Component={SignIn}></Route>
      <Route path='/finish' Component={FinishSetting}></Route>
      <Route path='/create' Component={CreateAccount}></Route>
      <Route path='/profile/:id' Component={WhosWatching}></Route>
      <Route path='/netflix/:id' element={<Netflix/>}></Route>


    </Routes>


   

    </>
  )
}

export default App
