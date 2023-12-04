import './App.css';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Review from './Components/Review';
import Services from './Components/Services';

function App() {
  return (
    <div className='flex h-[700px] overflow-hidden bg-[#f9edd8]'>
      <div className=' flex flex-col h-[650px] relative overflow-scroll  m-[2rem] border-black border-[1px] rounded-xl'>
        <Header />
        <Content />
        <Services />
        <Review />
        <Footer />
      </div>
    </div>
  );
}

export default App;
