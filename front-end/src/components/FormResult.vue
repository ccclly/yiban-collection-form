<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="id" label="id"/>
    <el-table-column prop="name" label="名字"/>
    <el-table-column prop="department1" label="意向部门1" />
    <el-table-column prop="department2" label="意向部门2" />
    <el-table-column prop="adjust" label="是否接受调剂" />
    <el-table-column prop="qq" label="qq号" />
    <el-table-column prop="phone" label="手机号" />
    <el-table-column prop="advantage" label="技能特长" />
  </el-table>
</template>


<script>
import { getMessage } from '@/api';

export default {
  name: 'FormResult',
  data () {
    return {
      tableData: [],
    }
  },
  setup () {
    getMessage().then(value => {
      this.tableData = value.data;
    })
  },
};
</script>

<style scoped>

</style>
