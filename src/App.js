import React from "react";
import CustomButtonGroup from "./components/buttons";
import ResponsiveAppBar from "./components/navbar";
import Box from "@mui/material/Box";
import usePatootie from "./hooks/usePatootie";

function App() {
  const {
    image,
    jumpAction,
    leftAction,
    rightAction,
    dockAction,
    stopJumpAction,
    moveDirection,
    jumpPosition,
  } = usePatootie();

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
                  alt={image ? "patootie" : ""}
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
