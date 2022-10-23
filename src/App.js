import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Header />
        <Body />
        <Footer />
        {/* <Route exact path="/" element={"<Header/>"} /> */}
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
