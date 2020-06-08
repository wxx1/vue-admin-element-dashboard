<template>
  <div>
    <l-table
      :tableData="tableData"
      :tableField="tableField"
      :operates="operates"
      :loading="loading"
      :current-page.sync="currentPage"
    ></l-table>
    <l-dialog
      :list="list"
      :form="form"
      :visible="dialogVisble"
      width="120px"
      :close-dialog="closeDialog"
    ></l-dialog>
  </div>
</template>

<script>
import lTable from "components/Table/Table.vue";
import lDialog from "components/Dialog/Index.vue";
import { getUserList } from "@/api/table";

export default {
  components: {
    lTable,
    lDialog
  },
  data() {
    return {
      tableData: [],
      tableField: [
        //表格字段，每个表格需要设置
        {
          prop: "userid",
          label: "ID",
          width: 60
        },
        {
          prop: "name",
          label: "姓名"
        }, // 格式化为字符串
        {
          prop: "gender",
          label: "性别",
          render: (h, params) => {
            return h(
              "el-tag",
              {
                props: { type: params.row.gender == "0" ? "success" : "danger" }
              },
              params.row.gender === "0" ? "男" : "女"
            );
          }
        },
        {
          prop: "phone",
          label: "手机号"
        },
        {
          prop: "fullTime",
          label: "是否兼职",
          render: (h, params) => {
            return h(
              "el-tag",
              {
                props: { type: params.row.fullTime ? "" : "warning" } // 组件的props
              },
              params.row.fullTime ? "兼职" : "全职"
            );
          }
        },
        {
          prop: "birth",
          label: "出生年月"
        },
        {
          prop: "mail",
          label: "邮箱"
        }
      ],
      //列操作
      operates: {
        // width: 180,
        label: "操作",
        // fixed: 'right',
        list: [
          {
            id: "1",
            label: "查看教师详细信息",
            type: "text",
            show: true,
            icon: "el-icon-search",
            disabled: false,
            className: "red",
            method: (index, row) => {
              this.detailInfo(row);
            }
          }
        ]
      },
      dialogVisble: false,
      list: [
        {
          label: "姓名",
          value: "name"
        },
        {
          label: "毕业学校",
          value: "gradSchool"
        },
        {
          label: "学历",
          value: "education"
        },
        {
          label: "学位",
          value: "degree"
        },
        {
          label: "学位",
          value: "degree"
        },
        {
          label: "QQ",
          value: "qq"
        },
        {
          label: "微信",
          value: "weixin"
        }
      ],
      form: {},
      loading: true,
      currentPage: 1
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    //模拟从后台读取数据
    init() {
      getUserList().then(res => {
        this.loading = false;
        this.tableData = res;
        console.log(res);
      });
    },
    detailInfo(row){
      this.dialogVisble = true;
    },
    //关闭模态框
    closeDialog() {
      this.dialogVisble = false;
    }
  }
};
</script>