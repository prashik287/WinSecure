// Login.jsx
import React from 'react';

const Login = () => {
  return (
    <div className="relative flex min-h-screen min-w-screen flex-col bg-[#121416] dark group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div className="flex h-full grow items-center justify-center">
        <div className="layout-content-container flex flex-col w-[512px] max-w-[560px] py-5">
          <h2 className="text-white tracking-light text-[28px] font-bold leading-tight text-center pb-3">Login</h2>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <input
                placeholder="Username"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#2c3135] focus:border-none h-14 placeholder:text-[#a2abb3] p-4 text-base font-normal leading-normal"
                type="text"
              />
            </label>
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <input
                placeholder="Password"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#2c3135] focus:border-none h-14 placeholder:text-[#a2abb3] p-4 text-base font-normal leading-normal"
                type="password"
              />
            </label>
          </div>
          <p className="text-[#a2abb3] text-sm font-normal leading-normal pb-3 pt-1 text-center underline">Forgot Password?</p>
          <div className="flex px-4 py-3">
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#dce8f3] text-[#121416] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Login</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
