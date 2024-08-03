import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Feed from "./components/Fedd";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
import { AppContext } from "./context/contextApi";
import Login from './Login';
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);

    return (
        <AppContext>
            <BrowserRouter>
                <div className="flex flex-col h-full">
                    {user && <Header />} {/* Render Header if user is authenticated */}
                    <Routes>
                        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
                        <Route path="/" element={user ? <Feed /> : <Navigate to="/login" />} />
                        <Route path="/searchResult/:searchQuery" element={user ? <SearchResult /> : <Navigate to="/login" />} />
                        <Route path="/video/:id" element={user ? <VideoDetails /> : <Navigate to="/login" />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </AppContext>
    );
};

export default App;