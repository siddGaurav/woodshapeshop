import { HashRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/home/home/Home";
import PremiumRangeuttingBoards from "./pages/PremiumRangeUttingBoards/PremiumRangeuttingBoards";
import DailyUSeCuttingBoards from "./pages/DailyUSeCuttingBoards/DailyUSeCuttingBoards";
import OfficeInterion from "./pages/office/Office";
import Restorent from "./pages/Restorent/Restorent";
import GiftPaks from "./pages/GiftPaks/GiftPaks";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";



export default function App(){
  return(
    <>
<HashRouter>
  <Routes>
    <Route index element={<Index/>}></Route>
    <Route path="PremiumRangeuttingBoards" element={<PremiumRangeuttingBoards/>}></Route>
    <Route path="DailyUSeCuttingBoards" element={<DailyUSeCuttingBoards/>}></Route>
    <Route path="Office" element={<OfficeInterion/>}></Route>
    <Route path="Restorent" element={<Restorent/>}></Route>
    <Route path="GiftPacks" element={<GiftPaks/>}></Route>
    <Route path="AboutUs" element={<AboutUs/>}></Route>
    <Route path="ContactUs" element={<ContactUs/>}></Route>
   
  </Routes>
</HashRouter>
    
 

    
    </>
  )
}