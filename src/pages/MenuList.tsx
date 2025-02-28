import { useState } from "react";
import BackHome from "../components/Navbar";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import { Menu } from "./MenuLoading";

export const fadeInLeft = {
  initial: {
    opacity: 0,
    y: -25,
  },
  animate: {
    opacity: 5,
    x: 0,
  },
  transition: {
    delay: 0.2,
    duration: 0.3,
    ease: "easeOut",
  },
};

function MenuList() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const handleTouch = (menu: any) => {
    setIsHovered(!isHovered);
    navigate("/menu", { state: { menu } });
  };


  return (
    <div>
      <BackHome />
      <motion.p {...fadeInLeft}>
        <div
          style={{
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              fontFamily: '"Rubik Mono One", serif',
              marginBottom: 10,
              alignContent: "center",
              fontSize: 14,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#855e3f",
            }}
          >
            Choose your drink!
          </motion.div>
          {Menu.map((list, index) => (
            <motion.div
              key={index} // ใช้ key เพื่อให้ React จัดการการ render อย่างถูกต้อง
              initial={{ opacity: 0, y: 20 }} // เริ่มจากความโปร่งใส 0 และตำแหน่งในแกน Y ที่ต่ำกว่า
              animate={{
                opacity: 1,
                y: 0,
              }} // ให้มันค่อยๆ เฟดเข้ามาและเด้งขึ้นไปที่ตำแหน่งปกติ
              transition={{
                duration: index * 0.25,
                y: {
                  duration: index * 0.25,
                  type: "spring", // ใช้การเคลื่อนไหวแบบ spring
                  stiffness: 300, // ความแข็งแรงของสปริง
                  damping: 100, // การลดความแรงของสปริง
                  delay: index * 0.25, // หน่วงเวลาให้แต่ละ div แสดงทีละตัว
                },
              }}
            >
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{
                  scale: 0.95,
                  transition: { duration: 0.05 },
                  backgroundColor: "#506e49",
                }}
                whileTap={{ scale: 0.9 }}
                className="start-button"
                style={{
                  border: "none",
                  borderRadius: 10,
                  background: "#6d9164",
                  color: "#fff",
                  width: "auto",
                  minWidth: 350,
                  marginTop: 10,
                  fontFamily: '"Rubik Mono One", serif',
                  textAlign: "center",
                  transform: "scale(1)",
                  transition: "transform 0.3s ease, background 0.3s ease",
                  fontSize: 14,
                  padding: 30,
                  boxShadow: "0px 4px 2px rgba(0, 0, 0, 0.04)",
                }}
                onFocus={() => {
                  setIsHovered(true);
                }}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => handleTouch(list)}
              >
                {list.name}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.p>
    </div>
  );
}

export default MenuList;
