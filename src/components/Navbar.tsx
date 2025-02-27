import { HomeOutlined, LeftOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";

function BackHome() {
  const location = useLocation();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  const handleBackStep = () => {
    navigate('/menu_list');
  };

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "end" }}>
      {location.pathname !== "/menu_list" && (
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
            e.currentTarget.style.background = "#FFF";
            e.currentTarget.style.color = "#f48ebc";
          }}
          onClick={handleBackStep}
        >
          <LeftOutlined />
        </a>
      )}

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
          e.currentTarget.style.background = "#FFF";
          e.currentTarget.style.color = "#f48ebc";
        }}
        onClick={handleBack}
      >
        <HomeOutlined />
      </a>
    </div>
  );
}

export default BackHome;
