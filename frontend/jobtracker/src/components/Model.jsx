import { useEffect, useState } from "react";
import Card from "./Card";

const Model = ({ children, setModel }) => {
  const [show, setShow] = useState(false);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      setShow(false);
      setTimeout(() => setModel(false), 200); // ننتظر الأنيميشن ينتهي
    }
  };

  useEffect(() => {
    // عند التركيب
    document.body.style.overflow = "hidden";
    setTimeout(() => setShow(true), 10); // نبدأ الأنيميشن بعد شوي

    // عند التفكيك
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 p-6 sm:p-12 transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleOverlayClick}
    >
      <Card
        style={{ maxWidth: "850px", width: "100%" }}
        className={`transform transition-all duration-300 ${
          show ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {children}
      </Card>
    </div>
  );
};

export default Model;
