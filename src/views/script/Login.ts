import { Component, Vue } from "vue-property-decorator";

@Component
export default class LoginClass extends Vue {
  private image: string = require("@/assets/background-login.jpg");
}