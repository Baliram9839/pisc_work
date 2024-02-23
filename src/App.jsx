import './App.css'
import Axios from './AxiosComponent/Feachaxios'
import { Route ,  Routes  } from 'react-router-dom'
import About from './About'
import Contact from './Todo/Todo'
import Navbar from './Navbar'
import Service from './Service'
import Home from './Home';
import Feachaxios from '../src/AxiosComponent/Feachaxios'
import ApiLoading from '../src/Loading/ApiLoading'
import NameForm from './Form/Nameform'
import ItemList  from './UseReducer/TodoReducer'
import Callbackhook from './UseCall/Calluse'



function App() {
  
 

  return (
    <>
     {/* <Axios/> */}
     <Navbar/>
    
     <Routes>
      <Route exact path='/' Component={Home}/>      
      <Route exact path='/About' Component={About}/>
      <Route path='/Contact' Component={Contact}/>
      <Route path='/Service' Component={Service}/>
      <Route path='/feaxois' Component={Feachaxios}/>
      <Route path ='/loading' Component={ApiLoading}/>
      <Route path='/Nameform' Component={NameForm}/>
      <Route path='/Reducer' Component={ItemList}/>
      <Route path='/Calluse' Component={Callbackhook}/>
     </Routes>
    </>
  )
}

export default App
