import { useEffect, useState } from "react";

function TypingAnimation() {
  const textItems = ["Software Engineer"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isBackspacing, setIsBackspacing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTyping) {
        if (currentText.length < textItems[currentTextIndex].length) {
          setCurrentText((prevText) =>
            textItems[currentTextIndex].substring(0, prevText.length + 1)
          );
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsBackspacing(true);
          }, 2000); // Wait for 2 seconds before starting backspacing
        }
      } else if (isBackspacing) {
        if (currentText.length > 0) {
          setCurrentText((prevText) =>
            prevText.substring(0, prevText.length - 1)
          );
        } else {
          setIsBackspacing(false);
          setCurrentText("");
          setCurrentTextIndex(
            (prevIndex) => (prevIndex + 1) % textItems.length
          );
          setIsTyping(true);
        }
      }
    }, 200); // Typing speed (adjust as needed)

    return () => {
      clearInterval(interval);
    };
  }, [currentText, currentTextIndex, isTyping, isBackspacing]);

  return (
    <>
      <p className="">
        <span className="hidden">x</span>
        <span id="typing-text" className="text-2xl">
          {currentText}
        </span>
        <span className="hidden">x</span>
      </p>
    </>
  );
}

export default TypingAnimation;
