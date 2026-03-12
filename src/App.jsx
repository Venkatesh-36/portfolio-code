import './App.css'
import Header from './Component/Header/Header'
import Home from './Component/Home/Home'
import About from './Component/About/About';
import Stack from './Component/Stack/Stack';
import Project from './Component/Project/Project';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
function App() {
  return (<>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"></link>
    <Header></Header>
    <Home></Home>
    <About></About>
    <Stack></Stack>
    <Project></Project>
    <Contact></Contact>
    <Footer></Footer>
  </>)
}
export default App;