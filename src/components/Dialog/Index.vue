<template>
  <div>
    <!-- 详情弹出框 -->
    <el-dialog
      :title="title "
      :visible="visible"
      width="50%"
      class="dialog-form"
      @close="closeDialog()"
    >
      <el-form
        ref="form"
        :model="form"
        :label-width="width"
        class="dialog-form"
        label-position="left"
      >
        <el-form-item v-for="(item,index) in list" :label="item.label" :key="index">
          <span>{{form[item.value]}}</span>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      required: false,
      default: false
    },
    list: {
      type: Array,
      required: true,
      default: []
    },
    form: {
      type: Object,
      required: true,
      default: {}
    },
    width: {
      type: String,
      required: false,
      default: "auto"
    },
    title:{
        type:String,
        required:false,
        default:'详细信息'
    },
    closeDialog: {}
  }
};
</script>


<style scoped>
.dialog-form {
  color: #99a9bf;
  padding-left: 40px;
}
.el-form-item__label {
  padding: 0 30px 0 0;
  color: #99a9bf;
}
</style>