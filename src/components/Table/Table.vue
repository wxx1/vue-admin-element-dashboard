<template>
  <el-card class="box-card" shadow="never">
    <el-table :data="tempData" border stripe v-loading="loading" style="width: 100%">
      <el-table-column
        v-for="(field, index) in tableField"
        :key="index"
        :label="field.label"
        :prop="field.prop"
        :width="field.width?field.width:'auto'"
        :fixed="field.fixed"
        align="center"
      >
        <template slot-scope="scope">
          <ex-slot
            v-if="field.render"
            :render="field.render"
            :row="scope.row"
            :index="index"
            :column="field"
          ></ex-slot>
          <template v-else>
            <span>{{scope.row[field.prop]}}</span>
          </template>
        </template>
      </el-table-column>
      <!-- 操作 -->
      <el-table-column
        v-if="operates"
        :width="operates.width?operates.width:'auto'"
        :label="operates.label"
        :fixed="operates.fixed"
        align="center"
      >
        <template slot-scope="scope">
          <el-button
            v-for="item in operates.list"
            :key="item.id"
            :type="item.type"
            :disabled="item.disabled"
            :class="item.className"
            @click="item.method(key,scope.row)"
          >{{item.label}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--页码-->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="current"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="pageSize"
      layout="sizes, prev, pager, next, jumper"
      :total="tableData.length"
    ></el-pagination>
  </el-card>
</template>

<script>
var exSlot = {
  functional: true,
  props: {
    row: Object,
    render: Function,
    index: Number,
    column: {
      type: Object,
      default: null
    }
  },
  render: (h, ctx) => {
    const params = {
      row: ctx.props.row,
      index: ctx.props.index
    };
    if (ctx.props.column) params.column = ctx.props.column;
    return ctx.props.render(h, params);
  }
};
export default {
  props: ["tableData", "tableField", "operates", "loading", "current-page"],
  components: { exSlot },
  data() {
    return {
      pageSize: 5,
      current: this.currentPage,
      tempData: [],
      show: false
    };
  },
  watch: {
        tableData(newValue, oldValue) {
            // let data = newValue
            this.tempData = newValue.slice(0, 5);
            console.log('tableData变化。。。。。。。');
            console.log('NEW',newValue);
            console.log('OLD',oldValue);
        },
        current(val) {
            console.log('current变化。。。。。。。。');
            this.$emit('update:current-page', val);
            console.log(this.currentPage);
            // this.handleCurrentChange(this.current);
        },
        currentPage(val) {
            console.log('currentPage变化。。。。。。。。');
            this.handleCurrentChange(val);
        }
    },
    methods: {
        //每页条数切换
        handleSizeChange(val) {
            this.pageSize = val;
            this.handleCurrentChange(this.current);
        },
        //页码发生变化
        handleCurrentChange(currentPage) {
            this.current = currentPage;
            this.currentChangePage(this.tableData, currentPage);
        },
        currentChangePage(list, currentPage) {
            let from = (currentPage - 1) * this.pageSize;
            let to = currentPage * this.pageSize;
            this.tempData = [];
            for (; from < to; from++) {
                if (list[from]) {
                    this.tempData.push(list[from]);
                }
            }
        }
    }
};
</script>

<style scoped>
.box-card {
  width: 100%;
  height: 100%;
  margin: auto;
}
.el-table {
  margin-top: 15px;
  font-size: 12px;
}

.el-pagination {
  margin-top: 15px;
}
.red {
  color: #ff0000;
  margin: 0;
}
</style>