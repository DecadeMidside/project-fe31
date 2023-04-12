import { ConfigProvider } from "antd";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
// import  from "";

function App() {
  return (
    <div className="App">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "green",
            colorText: "black",
          },
        }}
      >
        <Header />
        <Footer />
      </ConfigProvider>
    </div>
  );
}

export default App;
