import { useState } from "react";
import { Button, Row } from "antd";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fadeInLeft } from "./MenuList";

function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const handleTouch = () => {
    setIsHovered(!isHovered);
    navigate("/menu_loading");
  };
  return (
    <motion.p {...fadeInLeft}>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 50,
          padding: 10,
          fontFamily: '"Rubik Mono One", serif',
          color: "#446f39",
          height: "90vh",
          flexDirection: "column",
        }}
      >
        <div style={{ textAlign: "center", paddingBottom: 20 }}>
          Hello Matcha
        </div>
        <div style={{ position: "relative", textAlign: "center" }}>
          <motion.img
            src="https://cdn-icons-png.flaticon.com/128/9164/9164970.png"
            alt="Running Cat"
            style={{
              width: 30,
              position: "absolute",
              top: -16, // ยกให้แมวอยู่เหนือข้อความ
              left: 0, // เริ่มที่ตัว H
            }}
            animate={{ x: [0, 170, 0] }} // วิ่งจากซ้ายไปขวาของข้อความ
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "linear",
              yoyo: true,
            }}
          />
          <motion.button
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.05 },
              backgroundColor: "#253b20",
            }}
            whileTap={{ scale: 0.9 }}
            className="start-button"
            style={{
              borderRadius: 10,
              border: "none",
              background: isHovered ? "#253b20" : "#446f39",
              color: "#fff",
              height: 60,
              width: 200,
              marginTop: 10,
              fontFamily: '"Rubik Mono One", serif',
              textAlign: "center",
              transform: isHovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.3s ease, background 0.3s ease",
            }}
            onFocus={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleTouch}
          >
            Start{" "}
            {/* {isHovered ? (
            <SmileOutlined style={{ fontSize: 24 }} />
          ) : (
            <MehOutlined style={{ fontSize: 24 }} />
          )} */}
          </motion.button>
        </div>

        {/* ปุ่ม */}
      </Row>
    </motion.p>
  );
}

export default Home;
