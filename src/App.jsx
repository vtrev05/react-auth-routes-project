import { Routes, Route } from "react-router-dom";

import "./App.css";
import { HomeLayout } from "./components/HomeLayout/HomeLayout";
import HomePage from "./components/HomePage/HomePage";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { ProfilePage } from "./components/ProfilePage/ProfilePage";
import { ProtectedLayout } from "./components/ProtectedLayout/ProtectedLayout";
import { SettingsPage } from "./components/SettingPage/SettingPage";
import { SignUpPage } from "./components/SignUpPage/SignUpPage";

function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
      </Route>

      <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
