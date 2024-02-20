import React, { useState, useRef } from "react";

function usePatootie () {
    const [image, setImage] = useState(null);
    const [moveDirection, setMoveDirection] = useState(0);
    const [jumpPosition, setJumpPosition] = useState(0);
    const timerRef = useRef(null);

    const jumpAction = async () => {
        let counter = 1;
        timerRef.current = setInterval(() => {
          import(`../images/jump-${counter}.png`)
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
          import(`../images/${moveDirection}-${counter}.png`)
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
          import(`../images/${moveDirection}-${counter}.png`)
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
          import(`../images/dock-${counter}.png`)
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

  return {
    image,
    jumpAction,
    leftAction,
    rightAction,
    dockAction,
    stopJumpAction,
    moveDirection,
    jumpPosition
  }
}

export default usePatootie
