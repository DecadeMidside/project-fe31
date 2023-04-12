import { ConfigProvider } from "antd";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ProductList from "../pages/ProductList";

function App() {
  return (
    <div className="App">
      <ConfigProvider>
        <Header />
        <Footer />
        <ProductList />
      </ConfigProvider>
    </div>
  );
}

export default App;
