import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import store from "./store";

// import Cart from "./components/Cart.vue";
// import Products from "./components/ListProduct.vue";

import Cart from "purchase-mfe/Cart";
import Products from "catalog-mfe/ListProduct";

const app = createApp(App);

app.component("cart", Cart);
app.component("products", Products);

app.use(store);
app.mount("#app");
