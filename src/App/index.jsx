import { ConfigProvider } from "antd";
import Header from "../layout/Header";

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
      </ConfigProvider>
    </div>
  );
}

export default App;
