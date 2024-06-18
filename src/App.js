import React from "react";
import "./App.css";
import LandingPage from "./stores/pages/LandingPage";
import { Routes, Route, Router } from "react-router-dom";
import MobilePage from "./stores/pages/MobilePage";
import Kitchen from "./stores/components/Kitchen";
import KitchenPage from "./stores/pages/KitchenPage";
import BooksPage from "./stores/pages/BooksPage";
import AcPage from "./stores/pages/AcPage";
import ComputersPage from "./stores/pages/ComputersPage";
import Speakers from "./stores/pages/SpeakersPage";
import MensPage from "./stores/pages/MensPage";
import SpeakersPage from "./stores/pages/SpeakersPage";
import WomensPage from "./stores/pages/WomensPage";
import WatchesPage from "./stores/pages/WatchesPage";
import FridgesPage from "./stores/pages/FridgesPage";
import FurniturePage from "./stores/pages/FurniturePage";
import MobileSingle from "./singles/MobileSingle";
import Usercart from "./stores/Usercart";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mobiles" element={<MobilePage />} />
        <Route path="/Kitchen" element={<KitchenPage />} />
        <Route path="/Ac" element={<AcPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/computers" element={<ComputersPage />} />
        <Route path="/speakers" element={<SpeakersPage />} />
        <Route path="/mens" element={<MensPage />} />
        <Route path="/womens" element={<WomensPage />} />
        <Route path="/watch" element={<WatchesPage />} />
        <Route path="/fridge" element={<FridgesPage />} />
        <Route path="/furniture" element={<FurniturePage />} />

        <Route path="/mobiles/:id" element={<MobileSingle />} />

        <Route path="/cart" element={<Usercart/>}/>
      </Routes>
    </div>
  );
}
