<template>
  <div>
    <avue-crud :option="option" :data="data" v-model="model"></avue-crud>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Test extends Vue {
  model = {};
  data = [];
  option = {
    column: [
      {
        prop: "parentChannel",
        label: "上级频道",
        type: "select",
        dicData: [
          { label: "sss", value: "5e8565fe33913c3374fb08b3" },
          { label: "aaa", value: "5e8580f52a77882b9492bd70" },
          { label: "c2", value: "5e858d919b37d931e872ba71" },
          { label: "c3", value: "5e858e739b37d931e872ba72" },
          { label: "cc4", value: "5e858ec09b37d931e872ba73" }
        ],
        row: true
      },
      {
        prop: "upload",
        label: "上级",
        type: "upload",
        action: "/upload",
        row: true
      }
    ]
  };

  async created() {
    // const res = await this.$http.get("/channels", {
    //   params: {
    //     query: {}
    //   }
    // });
    // this.dic = res.data.data.map(item => ({
    //   label: item.name,
    //   value: item._id
    // }));
    // console.log(this.dic);
    // this.option.column[0].dicData = this.dic;
  }
}
</script>

<style></style>
