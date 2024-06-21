import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import ObservationsPage from "./pages/Observations";

export function AppRouting(): ReactElement {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/registrar" element={<Register />} />
            <Route path="/observacao" element={<ObservationsPage />} />
        </Routes>
    );
}