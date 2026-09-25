import { useEffect, useState } from "react";

// Cycles through phrases with a type / pause / delete effect.
const Typewriter = ({
  words = [],
  typeSpeed = 70,
  deleteSpeed = 40,
  pause = 1600,
}) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;
    const current = words[index % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      const next = deleting
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1);
      timeout = setTimeout(() => setText(next), deleting ? deleteSpeed : typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return (
    <span className="typewriter">
      <span className="grad-text">{text}</span>
      <span className="tw-caret" aria-hidden="true" />
    </span>
  );
};

export default Typewriter;
