// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/style/style.scss";
import "font-awesome/css/font-awesome.min.css";
import DefaultLayout from "~/layouts/Default.vue";
import { BootstrapVue } from "bootstrap-vue";
import filters from "./filters";
import VueDisqus from "vue-disqus";
import VueLuxon from "vue-luxon";


require("gridsome-plugin-remark-prismjs-all/themes/night-owl.css");

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component(
    "VueFontawesome",
    require("vue-fontawesome-icon/VueFontawesome.vue").default
  );
  Vue.use(BootstrapVue);
  Vue.use(filters);
  Vue.use(VueDisqus);
  Vue.use(VueLuxon);
  head.meta.push(
    {
      property: "og:image",
      content: require("./assets/images/meta-image.jpg"),
    },
    {
      property: "og:title",
      content: "Erdem Inanc | Java, Android, Spring",
    },
    {
      property: "og:description",
      content: "Personal projects and blog",
    },
    {
      property: "og:url",
      content: "https://erdeminanc.com",
    },
  );
}
