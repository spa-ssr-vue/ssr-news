<template>
  <div>
    <ele-form
      v-model="formData"
      :formDesc="formFieldsDesc"
      :rules="rules"
      :request-fn="save"
    >
    </ele-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class UserEdit extends Vue {
  @Prop() id!: string;
  formData = {};
  formFieldsDesc = {
    username: {
      label: "用户名",
      type: "input"
    },
    password: {
      label: "密码",
      type: "password"
    },
    parent: { label: "上级频道", type: "select" },

    channel: {
      label: "选择器",
      type: "select",

      options: [
        { label: "频道1", value: "111" },
        { label: "频道2", value: "222" }
      ],
      attrs: {
        multiple: true
      }
    },
    img: {
      type: "upload"
    }
  };
  rules = {
    username: { required: true, message: "必须填写用户名" }
  };
  async save(data) {
    await this.$http.post("/users", data);
    this.$router.push("/users/list");
  }
}
</script>

<style></style>
