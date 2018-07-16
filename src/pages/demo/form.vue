<template>
  <div>
    <Tips :title="title"></Tips>
    <div class="c-form f-double">
      <Form ref="form" inline :rules="rule" :model="form">
        <div class="fix">
          <FormItem label="用户名：" prop="name">
            <Input type="text" v-model="form.name" placeholder="请输入"/>
          </FormItem>
          <FormItem label="企业管理员姓名：" prop="manage">
            <Input type="text" v-model="form.manage" placeholder="请输入"/>
          </FormItem>
          <FormItem label="工号：" prop="code">
            <Select v-model="form.code">
              <Option v-for="item in list" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </FormItem>
          <FormItem label="办公室电话：" prop="tel">
            <Input type="text" v-model="form.tel" placeholder="请输入"/>
          </FormItem>
          <FormItem label="邮箱：" prop="email">
            <Input type="text" v-model="form.email" placeholder="请输入"/>
          </FormItem>
          <FormItem label="手机：" prop="phone">
            <Input type="text" v-model="form.phone" placeholder="请输入"/>
          </FormItem>
          <FormItem label="爱好：" prop="hobby">
            <CheckboxGroup v-model="form.hobby">
              <Checkbox label="Eat">吃</Checkbox>
              <Checkbox label="Sleep">睡</Checkbox>
              <Checkbox label="Run">跑步</Checkbox>
              <Checkbox label="Movie">电影</Checkbox>
            </CheckboxGroup>
          </FormItem>
          <FormItem label="性别：" prop="sex">
            <RadioGroup v-model="form.sex">
              <Radio label="male">男</Radio>
              <Radio label="female">女</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="日期：" prop="date">
            <DatePicker type="date" v-model="form.date" placeholder="请选择"/>
          </FormItem>
          <FormItem label="数字：" prop="number">
            <Input type="number" v-model.number="form.number" placeholder="请输入"/>
          </FormItem>
          <FormItem class="f-row" label="角色名称：" prop="role">
            <Input type="text" v-model="form.role" placeholder="请输入"/>
          </FormItem>
          <FormItem class="f-row" label="备注：" prop="desc">
            <Input type="textarea" v-model="form.desc" :autosize="{minRows: 5,maxRows: 10}" placeholder="请输入"/>
          </FormItem>
        </div>
        <div class="f-tc">
          <Button type="primary" @click="handleSubmit">提交</Button>
          <Button type="primary" @click="handleReset">重置</Button>
          <Button>返回</Button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
  import Tips from '@/components/tips'
  export default {
    components: {
      Tips
    },
    data(){
      return {
        title:'新增用户',
        list:[
          {
            value: '0',
            label: 'New York'
          },
          {
            value: '1',
            label: 'London'
          },
          {
            value: '2',
            label: 'Sydney'
          }
        ],
        form:{
          name:'',
          manage:'',
          code:'',
          tel:'',
          email:'',
          phone:'',
          hobby:[],
          sex:'',
          date:'',
          number:'',
          role:'',
          desc:''
        },
        rule: {
          name: [
            { required: true, message: '不能为空！', trigger: 'blur' }
          ],
          code: [
            { required: true, message: '请选择!', trigger: 'change' }
          ],
          sex: [
            { required: true, message: '请选择！', trigger: 'change' }
          ],
          date: [
            { required: true, type: 'date', message: '请选择！', trigger: 'change' }
          ],
          hobby: [
            { required: true, type: 'array', min: 1, message: '请选择!', trigger: 'change' },
            { type: 'array', max: 2, message: '2个以下！', trigger: 'change' }
          ]
        }
      }
    },
    methods: {
      handleSubmit(){
        this.$refs['form'].validate(valid => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        });
      },
      handleReset(){
        this.$refs['form'].resetFields();
      }
    }
  }
</script>

<style scoped>

</style>
