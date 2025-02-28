import { useEffect, useState } from "react";
import BackHome from "../components/Navbar";
import { useNavigate } from "react-router-dom";

import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

import { TypingText } from "../components/TyipingText";

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

function MenuLoading() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const handleTouch = (menu: any) => {
    setIsHovered(!isHovered);
    navigate("/menu", { state: { menu } });
  };
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowButton(true);
    }, 3000);

    return () => clearTimeout(delay);
  }, []);


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
          <div
            style={{
              fontFamily: '"Rubik Mono One", serif',
              marginBottom: 10,
              alignContent: "center",
              fontSize: 20,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#855e3f",
            }}
          >
            {!showButton && (
              <>
                <div style={{ position: "absolute", top: "40%" }}>
                  <TypingText text="Time for matcha" time={200} type="string" />
                </div>

                <div
                  style={{
                    color: "#f48ebc",
                    fontSize: 15,
                    position: "absolute",
                    top: "45%",
                  }}
                >
                  <TypingText
                    text={[
                      <HeartFilled />,
                      " ",
                      <HeartOutlined />,
                      " ",
                      <HeartFilled />,
                      " ",
                      <HeartOutlined />,
                      " ",
                      <HeartFilled />,
                    ]}
                    time={2000}
                    type="array"
                  />
                </div>
              </>
            )}
          </div>
          {showButton && (
            <>
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
            </>
          )}
        </div>
      </motion.p>
    </div>
  );
}

export default MenuLoading;

export const ClearMenu = [
  {
    name: "TMS Y01",
    origin: "Yame, Fukuoka, Japan",
    taste: "Hazelnut, Roasted, Smoky",
    taste_th: "หอมถั่ว หอมข้าวคั่ว ไม่ขมฝาด",
    price: "115",
  },
  {
    name: "Haku Yame",
    origin: "Yame, Fukuoka, Japan",
    taste: "Roasted Nutty, Smoky, Aroma",
    taste_th: "หอมถั่วคั่ว กลิ่นสโมคชัด ครีมมี่ สดชื่น ไม่ขมฝาด",
    price: "115",
  },
  {
    name: "Uji Heritage",
    origin: "Uji, Kyoto, Japan",
    taste: "Pistachio, Edamame, Seaweed ",
    taste_th:
      "กลิ่นโทนเขียวสดชื่นปนถั่ว มีกลิ่นสาหร่ายบางๆและความเค็มอ่อนๆ อูมามิมาก ไม่ขมฝาด",
    price: "120",
  },
  {
    name: "Ogurayama",
    origin: "Uji, Kyoto, Japan",
    taste: "Vegetal, Seaweed, Slightly nutty, Creamy, Umami, Full-bodies ",
    taste_th:
      "โทนเขียวสาหร่าย  มีความถั่ว, สโมคและอูมามิเบาๆ บอดี้แน่นและมีกลิ่นหอมหวานครีมมี่ จะมีความขมฝาดหน่อยๆเค็มปลาย",
    price: "140",
    brand: "Yamamasa Koyamaen",
    cost: "35/g",
  },
  {
    name: "Hikari",
    origin: "Uji, Kyoto, Japan",
    taste: "Rich Aroma, Buttery, Fresh Floral ",
    taste_th:
      "ละมุน ครีมมี่ อุมามิ มีกลิ่นดอกไม้เบาๆ ปิดท้ายด้วยความเฮเซลนัทอบอวลในปาก ไม่ขมฝาด",
    price: "160",
  },
];

export const CocoMenu = [
  {
    name: "Coconut matcha",
    origin: "",
    taste: "",
    taste_th: "มัทฉะชงกับน้ำมะพร้าวน้ำหอม ไม่ใส่น้ำตาล ได้ความหวานจากน้ำมะพร้าว หอมมะพร้าวและยังมีรสชาติของมัทฉะ สดชื่น นัวๆเข้ากันมาก",
    price: "120",
  },
  {
    name: "Coconut milk matcha",
    origin: "",
    taste: "",
    taste_th: "มัทฉะตีกับนม ผสมน้ำมะพร้าวน้ำหอม หอมมะพร้าวและได้ความนัวจากนมมากขึ้น",
    price: "130",
  },
];
export const latteMenu = [
  {
    name: "Yame 01",
    origin: "Yame, Fukuoka, Japan",
    taste: "Hazelnut, Roasted, Smoky",
    taste_th: "หอมถั่ว หอมข้าวคั่ว สโมคกี้เบาๆ",
    price: "135",
    milk: "oat/pistchio +20 milk +10",
    cost: "19/g",
  },
  {
    name: "Uji Heritage",
    origin: "Uji, Kyoto, Japan",
    taste: "Pistachio, Edamame, Seaweed ",
    taste_th:
      "กลิ่นโทนเขียวสดชื่นปนถั่ว มีกลิ่นสาหร่ายบางๆและความเค็มอ่อนๆ ชงกับนมจะได้ความละมุน อูมามิ ไม่ถูกกลิ่นนมกลบรสชาติของมัทฉะ",
    price: "145",
    cost: "20/g",
  },
  {
    name: "Ryo no kage",
    origin: "Uji, Kyoto, Japan",
    taste: "Soft, light, Refreshing, Creamy ",
    taste_th: "ดื่มง่าย ไม่ออกโทนสาหร่าย นุ่มนวล สดชื่น ถั่วเล็กน้อย",
    price: "145",
    brand: "Yamamasa Koyamaen",
    cost: "20/g",
  },
];
export const HoneyLemonMenu = [
  {
    name: "Honey lemon matcha",
    origin: "",
    taste: "",
    taste_th: "มัทฉะชงกับน้ำแร่ ใส่ไซรัปเลม่อนน้ำผึ้งป่าแท้100% ไม่ใส่น้ำตาล ได้ความหวานจากน้ำผึ้งแท้ ให้รสชาติเปรี้ยวหวาน เหมาะสำหรับคนที่ต้องการความสดชื่นนน",
    price: "120",
  },
];
export const Menu = [
  {
    name: "Clear Matcha",
    price: "115",
    grade: "Ceremonial Grade",
    remark: " *Only water No syrup",
    sub_menu: ClearMenu,
  },
  {
    name: "Matcha Latte",
    price: "115",
    grade: "Ceremonial Grade",
    remark: " *oat or pistachio milk +10",
    sub_menu: latteMenu,
  },
  {
    name: "Coconut Matcha",
    price: "115",
    grade: "Ceremonial Grade",
    remark: "",
    sub_menu: CocoMenu,
  },
  {
    name: "Honey lemon matcha",
    price: "115",
    grade: "Ceremonial Grade",
    remark: " *Homemade honey lemon syrup No sugar",
    sub_menu: HoneyLemonMenu,
  },
];
