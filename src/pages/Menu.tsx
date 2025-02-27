import { HomeOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  const MenuLists = [
    {
      name: "TMS Y01",
      cultivar: "Yame Blend",
      taste: "Hazelnut/Roasted/Smoky",
      taste_th: "หอมถั่ว หอมข้าวคั่ว ไม่ขมฝาด",
      price: "",
    },
    {
      name: "Haku Top",
      cultivar: "Yame Blend",
      taste: "Roasted Nutty/Smoky/Aroma",
      price: "",
    },
    {
      name: "Uji Heritage",
      cultivar: "Yabukita/Samidori Blend",
      taste: "Pistachio, Edamame, Seaweed ",
      taste_th:'กลิ่นโทนเขียวสดชื่นปนถั่ว มีกลิ่นสาหร่ายบางๆและความเค็มอ่อนๆ อูมามิมาก ไม่ขมฝาด',
      price: "+5",
    },
    {
      name: "Hikari (Uji)",
      cultivar: "Hikari Blend",
      taste: "Rich Aroma/Buttery/Fresh Floral ",
      price: "+55",
    },
  ];
  return (
    <>
      <div style={{ width: "100%", display: "flex", justifyContent: "end" }}>
        <a
          style={{
            cursor: "pointer",
            marginRight: 10,
            fontSize: 25,
            color: "#f48ebc",
            background: "#fff",
            padding: 5,
            borderRadius: 200,
            height: 30,
            width: 30,
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.2)";
            e.currentTarget.style.background = "#f48ebc";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.background = "#fff";
          }}
          onClick={handleBack}
        >
          <HomeOutlined />
        </a>
      </div>
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
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            fontSize: 25,
            color: "#446f39",
            fontFamily: '"Rubik Mono One", serif',
          }}
        >
          Menu
        </div>

        <Row style={{ fontSize: 14, width: "100%", padding: "0 10px" }}>
          <Col
            span={24}
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "#6a9261",
              fontFamily: '"Rubik Mono One", serif',
            }}
          >
            1.Clear Matcha <span>115-</span>
          </Col>{" "}
          <Col
            span={24}
            style={{
              paddingLeft: 20,
              color: "#6a9261",
              fontFamily: '"Rubik Mono One", serif',
            }}
          >
            <div>(Ceremonial Grade)</div>
          </Col>
          {MenuLists.map((list) => (
            <div
              style={{
                fontFamily: "Kanit, serif",
                background: "#fff",
                padding: 5,
                margin: 5,
                borderRadius: 5,
                width: "100%",
              }}
            >
              <Col
                span={24}
                style={{
                  paddingLeft: 15,
                  fontFamily: '"Rubik Mono One", serif',
                }}
              >
                - {list.name}{" "}
                <span
                  style={{ color: "#f1d064" }}
                >
                  {list.price ? `(${list.price}B)` : ""}
                </span>
              </Col>
              <Col span={24} style={{ paddingLeft: 40, fontFamily: '"Kanit", serif' }}>
                <span style={{fontWeight:600}}>CULTIVAR : </span>{list.cultivar}
              </Col>
              <Col span={24} style={{ paddingLeft: 40 , fontFamily: '"Kanit", serif'}}>
                {list.taste}
              </Col>
              <Col span={24} style={{ paddingLeft: 40 , fontFamily: '"Kanit", serif'}}>
                {list.taste_th}
              </Col>
            </div>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Menu;
