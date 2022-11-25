import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListProduct from "./components/list.product.js";
import CreateProduct from "./components/create.product.js";
import EditProduct from "./components/edit.product.js";
import ChartProduct from "./components/chart.product.js";
import SimpleMap from "./components/gmap.js";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<ListProduct />} />
          <Route exact path="/createproduct" element={<CreateProduct />} />
          <Route exact path="/editproduct/:id" element={<EditProduct />} />
          <Route exact path="/chartproduct" element={<ChartProduct />} />
          <Route exact path="/gmap" element={<SimpleMap />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
