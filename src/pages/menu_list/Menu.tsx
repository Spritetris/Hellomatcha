import { Button, Col, Row } from "antd";
import { useState } from "react";
import { motion} from "motion/react";
import { DownCircleOutlined, UpCircleFilled } from "@ant-design/icons";
import BackHome from "../../components/Navbar";
import { useLocation } from "react-router-dom";
import { fadeInLeft } from "../MenuList";


function Menu() {
  const location = useLocation();
  const { menu } = location.state || {};
  const [expanded, setExpanded] = useState<any>({});
  
  const [selectedItem, setSelectedItem] = useState(null); // Track selected item for modal

  const toggleExpand = (index: any) => {
    setExpanded((prev: any) => ({
     
      [index]: !prev[index],
    }));
    console.log(selectedItem)
  };

  return (
    <div>
      <BackHome />
      <div
        style={{
          height: "85vh",
          borderRadius: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          color: "#93b48a",
        }}
      >
        <div
          style={{
            marginTop: "-30px",
            padding: "0 20px 10px 20px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            fontSize: 25,
            color: "#446f39",
            fontFamily: '"Rubik Mono One", serif',
            marginBottom: 20,
          }}
        >
          Menu
        </div>
        <motion.p {...fadeInLeft}>
          <Row style={{ fontSize: 14, width: "100%", padding: "10px" }}>
            <Col
              span={24}
              style={{
                paddingLeft: 10,
                display: "flex",
                justifyContent: "space-between",
                color: "#6a9261",
                fontFamily: '"Rubik Mono One", serif',
              }}
            >
              {menu.name}
              {/* <span>{menu.price}-</span> */}
            </Col>
            <Col
              span={24}
              style={{
                paddingLeft: 10,
                color: "#6a9261",
                fontFamily: '"Rubik Mono One", serif',
              }}
            >
              <div>{menu.grade ? `(${menu.grade})` : ""}</div>
            </Col>
            <Col
              span={24}
              style={{
                fontSize: 9,
                paddingLeft: 10,
                color: "#838583",
                fontFamily: '"Rubik Mono One", serif',
                marginBottom: 5,
              }}
            >
              <div>{menu.remark ? menu.remark : ""}</div>
            </Col>
            {menu.sub_menu.map((list: any, index: any) => (
              <motion.button
                whileHover={{ scale: 1.01, transition: { duration: 0.05 } }}
                whileTap={{ scale: 0.99 }}
                className="menu-list-btn"
                key={index}
                style={{
                  fontFamily: "Kanit, serif",
                  backgroundColor: expanded[index] ? "#fffafc" : "#fff",
                  
                  padding: 10,
                  margin: 5,
                  borderRadius: 5,
                  display: "flex",
                  boxShadow: "0px 4px 2px rgba(0, 0, 0, 0.04)",
                  width: "100%",
                  color: expanded[index] ? "#93b48a" : "#93b48a",
                  textAlign: "left",
                  border:expanded[index] ?"3px solid #f48ebc": "none",
                }}
                onClick={() => {
                  setSelectedItem(list);
                  toggleExpand(index);
                }}
              >
                <div style={{ width: "95%" }}>
                  <Col
                    span={24}
                    style={{
                      paddingLeft: 10,
                      fontFamily: '"Rubik Mono One", serif',
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {list.name}

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: 5,
                      }}
                    >
                      {" "}
                      <span
                        style={{
                          width: 0,
                          height: 0,
                          borderTop: "8px solid transparent", // ทำให้สูงพอดีกับสี่เหลี่ยม
                          borderBottom: "8px solid transparent", // ทำให้สูงพอดีกับสี่เหลี่ยม
                          borderRight: "6px solid #f1d064", // สีของสามเหลี่ยมและความกว้าง
                          display: "inline-block",
                          verticalAlign: "middle", // จัดให้อยู่ตรงกลาง
                        }}
                      ></span>
                      <span
                        style={{
                          background: "#f1d064",
                          padding: "0px 5px", // ปรับ padding ให้พอดีกับสามเหลี่ยม
                          fontSize: 10,
                          color: "#fff",
                          display: "inline-flex", // ให้ขยายตามเนื้อหาและติดกับสามเหลี่ยม
                          alignItems: "center", // จัดให้อยู่ตรงกลาง
                          height: "16px", // กำหนดให้เท่ากับ borderTop + borderBottom ของสามเหลี่ยม
                        }}
                      >
                        {list.price ? `${list.price}B ` : ""}
                      </span>
                    </div>
                  </Col>
                  {list.taste && (
                    <Col
                      span={24}
                      style={{ paddingLeft: 10, fontFamily: '"Kanit", serif' }}
                    >
                      <span style={{ fontWeight: 600 }}>Taste note : </span>
                      {list.taste}
                    </Col>
                  )}

                  {expanded[index] && (
                    <>
                      {list.origin && (
                        <Col
                          span={24}
                          style={{
                            paddingLeft: 10,
                            fontFamily: '"Kanit", serif',
                          }}
                        >
                          <span style={{ fontWeight: 600 }}>Origin : </span>
                          {list.origin}
                        </Col>
                      )}

                      <Col
                        span={24}
                        style={{
                          paddingLeft: 10,
                          fontFamily: '"Kanit", serif',
                          color: "#888",
                        }}
                      >
                        {list.taste_th}
                      </Col>
                    </>
                  )}
                </div>
                <Button
                  type="link"
                  // onClick={() => toggleExpand(index)}
                  style={{
                    fontFamily: '"Kanit", serif',
                    color: "#f48ebc",
                    fontSize: 25,
                    width: "5%",
                    height: "100%",
                    transition: "transform 0.2s ease-in-out",
                  }}
                >
                  {expanded[index] ? (
                    <UpCircleFilled />
                  ) : (
                    <DownCircleOutlined />
                  )}
                </Button>
              </motion.button>
            ))}
          </Row>
        </motion.p>
      </div>

      {/* Render Modal outside the loop */}
    </div>
  );
}

export default Menu;
