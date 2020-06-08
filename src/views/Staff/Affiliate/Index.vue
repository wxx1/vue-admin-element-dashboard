<template>
  <div>
    <l-tabs :tabs="tabs"></l-tabs>
  </div>
</template>

<script>
import lTabs from "components/Tabs/Tabs.vue";
export default {
  components: {
    lTabs
  },
  data() {
    return {
      tabs: [
        {
          label: "待审核员工",
          index: 1,
          showHeader:true,
          tableDate: [
            {
              name: "张三",
              gender: "男"
            },
            {
              name: "里斯",
              gender: "女"
            }
          ],
          form: {
            field: [
              {
                prop: "name",
                label: "申请人姓名"
              },
              {
                prop: "gender",
                label: "性别"
              }
            ]
          },
          columnItem: [
            {
              label: "申请人",
              prop: "name"
            },
            {
              label: "性别",
              prop: "gender"
            }
          ],
          operates:[
            {
              label:"通过审核",
              type:"danger",
              width:120,
              methods(){
                this.message("通过审核")
              }
            },
            {
              label:"拒绝审核",
              width:120,
              methods(){
                this.message("通过审核")
              }
            }
          ]
        },
        {
          label:"未通过审核",
           index: 2,
          showHeader:false,
          tableDate:[]
        }
      ]
    };
  }
};
</script>