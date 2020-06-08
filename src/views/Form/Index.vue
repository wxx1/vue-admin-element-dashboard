<template>
  <div>
    <el-card>
      <div slot="header" class="clearfix">
        <span style="float:left">用户信息登记</span>
      </div>

      <el-form :model="studentInfo" ref="ruleForm" label-width="auto" class="ruleForm" :rules="rules">
        <el-form-item label="姓名：" prop="name">
          <el-col :span="16">
            <el-input v-model="studentInfo.name" placeholder="请输入姓名"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="性别：" required>
          <el-col :span="7">
            <el-radio-group v-model="studentInfo.gender">
              <el-radio label="male">男</el-radio>
              <el-radio label="female">女</el-radio>
            </el-radio-group>
          </el-col>
        </el-form-item>
        <el-form-item label="手机号：">
          <el-col :span="16">
            <el-input v-model="studentInfo.phone " placeholder="请输入手机号" />
          </el-col>
        </el-form-item>
        <el-form-item label="邮箱：">
          <el-col :span="16">
            <el-input v-model="studentInfo.mail " placeholder="请输入邮箱号" />
          </el-col>
        </el-form-item>
        <el-form-item label="年级：" required>
          <el-col :span="7">
            <el-select v-model.number="studentInfo.grade" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
        </el-form-item>
        <el-form-item label="学校：" prop="school">
          <el-col :span="16">
            <el-input v-model="studentInfo.school" placeholder="请输入所在学校"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="类型：" prop="minutes">
          <el-col :span="16">
            <el-input v-model="studentInfo.type" placeholder="请输入学生类型"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="备用电话(座机)：">
          <el-col :span="16">
            <el-input v-model="studentInfo.second_tel" placeholder="请输入备用座机号" />
          </el-col>
        </el-form-item>
        <el-form-item label="qq：" prop="qq">
          <el-col :span="16">
            <el-input v-model="studentInfo.qq" placeholder="请输入qq"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="微信：" prop="weixin">
          <el-col :span="16">
            <el-input v-model="studentInfo.weixin" placeholder="请输入微信"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="感兴趣课程类别：">
          <el-col :span="19">
            <el-checkbox-group v-model="studentInfo.courseType">
              <el-checkbox
                v-for=" course in courseTypeItems"
                :label="course.value"
                :key="course.value"
              >{{course.label}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-col :span="3">
            <el-button type="primary" @click="submit('ruleForm')">立即提交</el-button>
          </el-col>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      studentInfo: {
        courseType: [],
        grade: "",
        name: "",
        gender: "male",
        phone: "",
        mail: "",
        qq: "",
        school: "",
        weixin: "",
        type: "",
        second_tel: ""
      },
      rules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        grade: [{ required: true, message: "请选择年级", trigger: "change" }],
        phone: [{ required: true, message: "请输入电话号码", trigger: "blur" }],
        school: [{ required: true, message: "请输入学校", trigger: "blur" }]
      },
      courseTypeItems: [
        {
          value: 1,
          label: "音乐"
        },
        {
          value: 2,
          label: "舞蹈"
        },
        {
          value: 3,
          label: "美术"
        },
        {
          value: 4,
          label: "专业艺考"
        },
        {
          value: 5,
          label: "书法"
        },
        {
          value: 8,
          label: "互联网"
        }
      ],
      options: [
        {
          value: "1",
          label: "一年级"
        },
        {
          value: "2",
          label: "二年级"
        },
        {
          value: "3",
          label: "三年级"
        },
        {
          value: "4",
          label: "四年级"
        },
        {
          value: "5",
          label: "五年级"
        },
        {
          value: "6",
          label: "六年级"
        },
        {
          value: "7",
          label: "初一"
        },
        {
          value: "8",
          label: "初二"
        },
        {
          value: "9",
          label: "初三"
        },
        {
          value: "10",
          label: "高一"
        },
        {
          value: "11",
          label: "高二"
        },
        {
          value: "12",
          label: "高三"
        }
      ]
    };
  },
  methods:{
      submit(formName){
          this.$refs[formName].validate(valid => {
              if(valid){
                  this.$message.success('录入用户信息成功')
              }
          })
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
.ruleForm {
  width: 70%;
  margin: auto;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.el-form-item__label {
  padding: 0 40px 0 0;
}
</style>