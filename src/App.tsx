import React from "react";
import MainView from "./views/MainView";
import logo from "./logo.svg";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "./App.css";

const firebaseConfig = {
  apiKey: "AIzaSyDj_73kchyPwClV16DxOv206tJwaKUrd3c",
  authDomain: "fokopies.firebaseapp.com",
  projectId: "fokopies",
  storageBucket: "fokopies.appspot.com",
  messagingSenderId: "758844054911",
  appId: "1:758844054911:web:bef7fb30d11b0809ca0e4a",
  measurementId: "G-W2EE4YN47Q",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <MainView />
    </div>
  );
}

export default App;
