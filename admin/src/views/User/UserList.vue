<template>
  <div v-if="option.column">
    <h3>{{ option.title }}</h3>
    <el-table :data="data" border stripe>
      <el-table-column
        v-for="(desc, field) in option.column"
        :prop="field"
        :key="field"
        :label="desc.label"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class UserList extends Vue {
  data = [];
  option = {
    title: "用户列表",
    column: {
      _id: { label: "ID" },
      username: { label: "用户名" }
    }
  };

  async fetchResources() {
    const res = await this.$http.get("/users");
    this.data = res.data.data;
  }

  created() {
    this.fetchResources();
  }
}
</script>

<style></style>
