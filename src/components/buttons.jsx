import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const CustomButtonGroup = ({
  jumpAction,
  onMouseLeave,
  leftAction,
  rightAction,
  dockAction,
}) => {
  return (
    <ButtonGroup
      variant="outline"
      aria-label="Basic button group"
      className="flex justify-between w-full bg-transparent border bg-blue-50 text-gray-950 "
      sx={{ color: "black" }}>
      <Button
        onMouseEnter={() => {
          jumpAction();
        }}
        onMouseLeave={() => {
          onMouseLeave();
        }}
        sx={{
          ":hover": { background: "green", color: "white" },
          borderColor: "black",
          border: 1,
          marginRight: 1,
          borderRadius: 0,
          flexGrow: 1,
        }}>
        Jump
      </Button>
      <Button
        className="flex-grow hover:bg-green-700"
        sx={{
          ":hover": { background: "green", color: "white" },
          borderColor: "black",
          border: 1,
          marginRight: 1,
          borderRadius: 0,
          flexGrow: 1,
        }}
        onMouseEnter={() => {
          leftAction();
        }}
        onMouseLeave={() => {
          onMouseLeave();
        }}>
        Left
      </Button>
      <Button
        className="flex-grow hover:bg-green-700"
        sx={{
          ":hover": { background: "green", color: "white" },
          borderColor: "black",
          border: 1,
          marginRight: 1,
          borderRadius: 0,
          flexGrow: 1,
        }}
        onMouseEnter={() => {
          rightAction();
        }}
        onMouseLeave={() => {
          onMouseLeave();
        }}>
        Right
      </Button>
      <Button
        className="flex-grow hover:bg-green-700"
        sx={{
          ":hover": { background: "green", color: "white" },
          borderColor: "black",
          border: 1,
          borderRadius: 0,
          flexGrow: 1,
        }}
        onMouseEnter={() => {
          dockAction();
        }}
        onMouseLeave={() => {
          onMouseLeave();
        }}>
        Dock
      </Button>
    </ButtonGroup>
  );
};

export default CustomButtonGroup;
