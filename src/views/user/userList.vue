<template>
  <el-table
    :data="userList"
    border
    align="center"
    header-align="center"
  >
    <el-table-column
      label="用户名"
      prop="username"
    >
    </el-table-column>
    <el-table-column
      label="姓名"
      prop="name"
    >
    </el-table-column>
    <el-table-column label="手机号" prop="phone">

    </el-table-column>
    <el-table-column label="性别" prop="sex">

    </el-table-column>
    <el-table-column label="权限" prop="authority">
      <template slot-scope="scope">
        {{ scope.row.authority === 1 ? '超级管理员' : '普通管理员' }}
      </template>
    </el-table-column>
    <el-table-column label="状态" prop="status">

    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)"
        >编辑
        </el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
        >删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { getUserList } from '@/api/user'

export default {
  data() {
    return {
      userList: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]

    }
  },
  created() {
    this.getUserList()
  },
  methods: {
    getUserList() {
      getUserList().then((res) => {
        this.userList = res.data
      })
    },
    handleEdit(index, row) {
      console.log(userList, row)
    },
    handleDelete(index, row) {
      console.log(userList, row)
    }
  }
}
</script>
