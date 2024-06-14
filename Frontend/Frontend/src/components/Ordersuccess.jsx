import React from "react";

function OrderSuccess() {
  return (
    <div className="flex items-center justify-center h-screen bg-green-100">
      <div className="text-center p-10 bg-white shadow-md rounded-lg">
        <div className="flex justify-center items-center mb-4">
          <svg
            className="w-12 h-12 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <h1 className="text-3xl font-bold mb-4">Order Successfully Placed!</h1>
        <p className="text-lg">Thank you for your purchase.</p>
      </div>
    </div>
  );
}

export default OrderSuccess;
