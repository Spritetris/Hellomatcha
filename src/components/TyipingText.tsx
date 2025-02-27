import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const TypingText = ({ text, time, type }: any) => {
  const [displayedText, setDisplayedText] = useState<string>(""); // ข้อความที่พิมพ์แล้ว
  const [displayedArray, setDisplayedArray] = useState<React.ReactNode[]>([]); // ข้อความที่พิมพ์แล้ว
  const [index, setIndex] = useState(0); // ตำแหน่งตัวอักษรที่กำลังพิมพ์
  const [startTyping, setStartTyping] = useState(false); // เช็คว่าเริ่มพิมพ์หรือยัง

  useEffect(() => {
    // รอ 1300ms (1.3 วินาที) ก่อนเริ่มพิมพ์
    const delay = setTimeout(() => {
      setStartTyping(true);
    }, time);

    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    if (startTyping && index < text.length) {
      const timeout = setTimeout(() => {
        if (type === "string" && typeof text === "string") {
          setDisplayedText((prev) => prev + text[index]); // เพิ่มตัวอักษรทีละตัว
        } else if (type === "array" && Array.isArray(text)) {
          setDisplayedArray((prev) => [...prev, text[index]]); // เพิ่ม ReactNode ทีละตัว
        }
        // เพิ่มตัวอักษรทีละตัว
        setIndex(index + 1); // อัปเดต index
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [index, startTyping, text]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: startTyping ? 1 : 0 }} // รอให้เริ่มพิมพ์ก่อนแล้วค่อย fade-in
      transition={{ duration: 0.5 }}
    >
      {displayedText ? displayedText : displayedArray}
    </motion.span>
  );
};
