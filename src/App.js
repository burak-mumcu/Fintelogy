  import Nav from './components/Nav';
 import Summary from './components/Summary'
 import Body from './components/Body'
 import Footer from './components/Footer'

const App = () => {
  return (
   <div>
    <Nav/>   
    <div className='bg-white w-full h-screen'>
    <Summary/>  
     <Body/>
     <Footer/>
    </div>
    </div>
  );
}

export default App;
