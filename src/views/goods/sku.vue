<template>
  <el-table
    :data="goodsSku"
    style="width: 100%"
  >
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品 ID">
            <!--            <span>{{ props.row.id }}</span>-->
            <el-input v-model="props.row.id" disabled autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商品名称">
            <!--            <span>{{ props.row.name }}</span>-->
            <el-input v-model="props.row.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="单位">
            <!--            <span>{{ props.row.unite }}</span>-->
            <el-input v-model="props.row.unite" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="商品分类">
            <!--            <span>{{ props.row.goodsTypeName }}</span>-->
            <el-input v-model="props.row.goodsTypeName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商品库存">
            <!--            <span>{{ props.row.stock }}</span>-->
            <el-input v-model="props.row.stock" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商品描述">
            <!--            <span>{{ props.row.desc }}</span>-->
            <el-input v-model="props.row.desc" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="上传图片">
            <!--            TODO 如何携带token访问后端-->
            <el-upload
              action="http://localhost:8888/user/upload"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              name="img"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="商品状态">
            <el-tag type="success" v-if="props.row.status === 1">上架</el-tag>
            <el-tag type="danger" v-else>下架</el-tag>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleEdit()">确定</el-button>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="商品 ID"
      prop="id"
    >
    </el-table-column>
    <el-table-column
      label="商品名称"
      prop="name"
    >
    </el-table-column>
    <el-table-column label="商品图片">
      <template slot-scope="scope">
        <el-image
          style="width: 100px; height: 100px"
          :src="scope.row.image"
          :preview-src-list="srcList"
          @click="getGoodsSkuImg(scope.row.id)"
        >
        </el-image>
      </template>
    </el-table-column>
    <el-table-column
      label="商品分类"
      prop="goodsTypeId"
    >
    </el-table-column>
    <el-table-column
      label="商品价格"
      prop="price"
    >
    </el-table-column>
    <el-table-column
      label="商品销量"
      prop="sales"
    >
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button v-if="scope.row.status===1" type="success" icon="el-icon-open" circle
                   @click="handleDisable(scope.row.id)"
        ></el-button>
        <el-button v-else type="info" icon="el-icon-turn-off" circle
                   @click="handleEnable(scope.row.id)"
        ></el-button>
        <el-button type="danger" icon="el-icon-delete" circle
                   @click="handleDelete(scope.$index, scope.row)"
        ></el-button>
      </template>
    </el-table-column>
  </el-table>
</template>


<script>
import goods from '@/api/goods'

export default {
  data() {
    return {
      goodsSku: [],

      srcList: []
    }
  },
  created() {
    this.getGoodsSkuList()
  },
  methods: {
    getGoodsSkuList() {
      goods.GoodsSkuList().then(res => {
        this.goodsSku = res.data
      })
    },
    getGoodsSkuImg(id) {
      goods.GoodsSkuImg(id).then(res => {
        this.srcList = []
        let list = res.data
        for (let i = 0; i < list.length; i++) {
          this.srcList[i] = list[i].image
        }
      })
    },
    handleEdit() {

    },
    handleDelete() {

    },
    handleDisable(id) {
      goods.disable(id).then(res => {
        this.$message({
          showClose: true,
          message: res.message,
          type: 'success',
          center: true
        })
        this.getGoodsSkuList()
      })
    },
    handleEnable(id) {
      goods.enable(id).then(res => {
        this.$message({
          showClose: true,
          message: res.message,
          type: 'success',
          center: true
        })
        this.getGoodsSkuList()
      })
    },
    handlePictureCardPreview() {

    },
    handleRemove() {

    }
  }
}
</script>

<style>
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
</style>

