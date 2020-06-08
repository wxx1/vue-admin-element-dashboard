<template>
  <div>
    <div class="container">
      <el-tabs>
        <el-tab-pane v-for="tab in tabs" :label="tab.label" :key="tab.index">
          <el-table :data="tab.tableDate" :show-header="tab.showHeader">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form class="demo-table-expand" inline label-position="left">
                  <el-form-item
                    v-for="field in (tab.form.field)"
                    :label="field.label"
                    :key="field.prop"
                  >
                    <span>{{props.row[field.prop]}}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column v-for="item in tab.columnItem" :key="item.prop">
              <template slot-scope="scope">
                <span
                  class="message-title"
                  :key="item"
                >{{`${item.label} ： ${scope.row[item.prop]}`}}</span>
              </template>
            </el-table-column>
            <template v-if="tab.operates">
            <el-table-column  v-for="(operate,index) in tab.operates" :width="operate.width" :key="index">
                <template slot-scope="scope">
                    <el-button size="small" :type="operate.type" @click="operate.method(key,scope.row)">{{operate.label}}</el-button>
                </template>
            </el-table-column>
            </template>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true,
      default: []
    }
  }
};
</script>


<style>
.message-title {
  cursor: pointer;
  color: #ff8400;
}
.handle-row {
  margin-top: 30px;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
element.style {
    height: 100%;
    width: 48px;
}
</style>

