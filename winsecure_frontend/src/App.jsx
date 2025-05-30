// App.jsx
import React from 'react';
import Sidebar from './components/static/Sidebar';
// import MainContent from './MainContent';
import Login from './components/dynamic/authentication/Login';
function App() {
  return (
    <div className="  relative flex size-full min-h-screen flex-col bg-[#111418] overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div className="flex h-full grow flex-col">
        <div className="flex flex-0 justify-center py-5">
          <Sidebar />
          <Login/>
        </div>
      </div>
    </div>
  );
}

export default App;
