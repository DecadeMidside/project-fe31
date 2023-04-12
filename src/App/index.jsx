import { ConfigProvider } from "antd";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
// import  from "";
import ProductList from "../pages/ProductList";

function App() {
  return (
    <div className="App">
      <ConfigProvider
      // theme={{
      //   token: {
      //     colorPrimary: "",
      //     colorText: "black",
      //   },
      // }}
      >
        <Header />
        <Footer />
        <ProductList />
      </ConfigProvider>
    </div>
  );
}

export default App;
