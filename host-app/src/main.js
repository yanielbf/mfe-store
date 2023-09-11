import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import store from "./store";

import Cart from "cart-app/Cart";
import Products from "./components/ListProduct.vue";
// import Products from "list-product-app/ListProduct";

const app = createApp(App);

app.component("cart", Cart);
app.component("products", Products);

app.use(store);
app.mount("#app");
