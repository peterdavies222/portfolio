import { useState, useEffect } from "react"; // getting useState and useEffect from react

const words = ["magical.", "amazing.", "inspiring.", "groundbreaking.", "capable.", "exceptional.", "useful.", "empowering.", "new.", "exemplary."]; // words we want to use

export default function TypewriterHeadline() { // our function aka component
  const staticText = "Let's make something"; // the text that doesn't change
  // we use usestate here so that when we update currentwordindex using setCurrentWordIndex, it automatically updates what's displayed (or other values)
  const [currentWordIndex, setCurrentWordIndex] = useState(0); 
  const [displayedText, setDisplayedText] = useState(words[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(words[0].length);
  const [pauseBeforeNext, setPauseBeforeNext] = useState(false);

  const typingSpeed = 100;
  const deletingSpeed = 100;
  const pauseAfterTyping = 1000;     // Wait after typing a word
  const pauseAfterDeleting = 500;    // Wait after deleting a word

  useEffect(() => {
    const currentWord = words[currentWordIndex]; // currentWord is initally our first word in the array

    if (pauseBeforeNext) return;

    if (isDeleting) {
      if (charIndex > 0) {
        setTimeout(() => {
          setDisplayedText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deletingSpeed);
      } else {
            setPauseBeforeNext(true);
            setTimeout(() => {
            setIsDeleting(false);
            setCurrentWordIndex((currentWordIndex + 1) % words.length);
            setPauseBeforeNext(false);
            }, pauseAfterDeleting);
      }
    } else {
      const nextWord = words[currentWordIndex];
      if (charIndex < nextWord.length) {
        setTimeout(() => {
          setDisplayedText(nextWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        setTimeout(() => setIsDeleting(true), pauseAfterTyping); // wait before deleting
      }
    }
  }, [charIndex, isDeleting, currentWordIndex]);

  return (
    <h1 className="heading-large">
      {staticText}<br /><span>{displayedText}</span>
      <span className="contact-caret">|</span>
    </h1>
  );
}