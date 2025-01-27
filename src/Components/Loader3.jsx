import React from "react";

const Loader3 = () => {
  return (
    <>
      <style>
        {`
          @keyframes circle-keys {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.5);
              opacity: 0.5;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes dot-keys {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(0);
            }
            100% {
              transform: scale(1);
            }
          }

          @keyframes outline-keys {
            0% {
              transform: scale(0);
              outline: solid 20px hsl(0, 0%, 87%);
              outline-offset: 0;
              opacity: 1;
            }
            100% {
              transform: scale(1);
              outline: solid 0 transparent;
              outline-offset: 20px;
              opacity: 0;
            }
          }

          .circle {
            animation: circle-keys 2s ease-in-out infinite;
          }

          .dot {
            animation: dot-keys 2s ease-in-out infinite;
          }

          .outline {
            animation: outline-keys 2s ease-in-out infinite;
          }

          .circle:nth-child(2) {
            animation-delay: 0.3s;
          }

          .circle:nth-child(3) {
            animation-delay: 0.6s;
          }

          .circle:nth-child(4) {
            animation-delay: 0.9s;
          }

          .circle:nth-child(5) {
            animation-delay: 1.2s;
          }

          .circle:nth-child(2) .dot {
            animation-delay: 0.3s;
          }

          .circle:nth-child(3) .dot {
            animation-delay: 0.6s;
          }

          .circle:nth-child(4) .dot {
            animation-delay: 0.9s;
          }

          .circle:nth-child(5) .dot {
            animation-delay: 1.2s;
          }

          .circle:nth-child(1) .outline {
            animation-delay: 0.9s;
          }

          .circle:nth-child(2) .outline {
            animation-delay: 1.2s;
          }

          .circle:nth-child(3) .outline {
            animation-delay: 1.5s;
          }

          .circle:nth-child(4) .outline {
            animation-delay: 1.8s;
          }

          .circle:nth-child(5) .outline {
            animation-delay: 2.1s;
          }
        `}
      </style>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="flex space-x-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className={`circle relative w-16 h-16 rounded-full border border-greenDark bg-transparent`}
            >
              <div className="dot absolute w-12 h-12 bg-greenLight rounded-full"></div>
              <div className="outline absolute w-16 h-16 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Loader3;
