import './App.css'
import MainPage from './Components/MainPage/MainPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Media from './Components/Stories/Media/Media';
import Font_name from './Components/Stories/Text-Font/Font_name';
import Effect from './Components/Stories/Effect/Effect';
import { Sticker } from './Components/Stories/Sticker/Sticker';
import { InputProvider } from './UseContext';
import { useEffect, useState } from 'react';
import LoadingScreen from './Components/LoadingScreen/LoadingScreen';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {    
    setTimeout(() => {
      setLoading(false);
    }, 4000); // 4 seconds
  }, []);
  return (
    <>
      {loading ? <LoadingScreen /> : <InputProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Media" element={<Media />} />
            <Route path="/FontName" element={<Font_name />} />
            <Route path="/Skicter" element={<Sticker />} />
            <Route path="/Effect" element={<Effect />} />
          </Routes>
        </BrowserRouter>
      </InputProvider>}
    </>
  )
}

export default App
