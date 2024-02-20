import React, { useState, useRef } from "react";
import CustomButtonGroup from "./components/buttons";
import ResponsiveAppBar from "./components/navbar";
import Box from "@mui/material/Box";

function App() {
  const [image, setImage] = useState(null);
  const [moveDirection, setMoveDirection] = useState(0);
  const [jumpPosition, setJumpPosition] = useState(0);
  const timerRef = useRef(null);

  const jumpAction = async () => {
    let counter = 1;
    timerRef.current = setInterval(() => {
      import(`./images/jump-${counter}.png`)
        .then((image) => {
          setImage(image.default);
          if (counter === 5) {
            setJumpPosition(150);
          }
          console.log(image.default);
        })
        .catch((error) => {
          console.error("Error loading image:", error);
        });
      if (counter === 6) {
        setJumpPosition(0);
      }
      counter = counter === 7 ? 1 : counter + 1;
    }, 150);
  };

  const leftAction = async () => {
    let counter = 1;
    let moveDirection = "left";
    timerRef.current = setInterval(() => {
      import(`./images/${moveDirection}-${counter}.png`)
        .then((image) => {
          setImage(image.default);
          if (counter > 2) {
            setMoveDirection((prev) => moveDirection === 'left' ? prev - 50 : prev + 50);
          }
          console.log(image.default);
        })
        .catch((error) => {
          console.error("Error loading image:", error);
        });
        if (counter === 1) {
          setTimeout(() => {
            console.log('setting direction');
          }, 250); 
        }
        if (counter === 6) {
          moveDirection = moveDirection === 'left' ? 'right' : 'left';
          counter = 1;
        } else {
          counter++;
        }
    }, 120);
  };

  const rightAction = async () => {
    let counter = 1;
    let moveDirection = "right";
    timerRef.current = setInterval(() => {
      import(`./images/${moveDirection}-${counter}.png`)
        .then((image) => {
          setImage(image.default);
          if (counter > 2) {
            setMoveDirection((prev) => moveDirection === 'right' ? prev + 50 : prev - 50);
          }
          console.log(image.default);
        })
        .catch((error) => {
          console.error("Error loading image:", error);
        });
        if (counter === 1) {
          setTimeout(() => {
            console.log('setting direction');
          }, 250); 
        }
        if (counter === 6) {
          moveDirection = moveDirection === 'left' ? 'right' : 'left';
          counter = 1;
        } else {
          counter++;
        }
    }, 120);
  };

  const dockAction = async () => {
    let counter = 1;
    timerRef.current = setInterval(() => {

      import(`./images/dock-${counter}.png`)
        .then((image) => {
          setImage(image.default);
          console.log(image.default);
        })
        .catch((error) => {
          console.error("Error loading image:", error);
        });
        
      counter = counter === 5 ? 1 : counter + 1;
    }, 120);
  }
  

  const stopJumpAction = () => {
    clearInterval(timerRef.current);
    setJumpPosition(0);
    setMoveDirection(0);
    setImage(null);
  };

  return (
    <div className="h-full m-4 ">
      <ResponsiveAppBar />
      <div className="flex items-center justify-center h-full">
        <Box
          sx={{
            width: 1000,
            height: 600,
            background: "white",
            padding: 5,
            margin: 5,
            border: 2,
            borderColor: "#dcdcdc",
          }}>
          <div className="bottom-0 flex flex-col items-center justify-center w-full h-full">
            <CustomButtonGroup
              jumpAction={jumpAction}
              leftAction={leftAction}
              rightAction={rightAction}
              dockAction={dockAction}
              onMouseLeave={stopJumpAction}
            />
            <Box
              sx={{
                border: 1,
                width: "100%",
                height: "100%",
                position: "relative",
              }}>
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "50%",
                  transform: "translateX(-50%)",
                  marginLeft: moveDirection,
                }}>
                <img
                  src={image}
                  width={200}
                  alt={image ? 'patootie' : ''}
                  className="position-absolute"
                  style={{
                    marginBottom: jumpPosition,
                  }}
                />
              </div>
            </Box>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default App;
