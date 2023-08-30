<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
const activeIndex = ref('1')

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <RouterLink to="/"></RouterLink>
  <div class="nav">
    <el-row>
      <el-col :span="24">

        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <!-- <div class="logo" >
                    <img src="http://www.choco.com.cn/coco/logo3.png" alt="婚礼策划" >
                  </div> -->
          <RouterLink to="/Box">
            <el-menu-item index="1">婚庆首页</el-menu-item>
          </RouterLink>

          <el-sub-menu index="2">
            <template #title>连锁城市</template>
            <el-menu-item index="2-1"><a href="#"> 北京启蔻</a></el-menu-item>
            <el-menu-item index="2-2">三亚启蔻</el-menu-item>
            <el-menu-item index="2-3">成都启蔻</el-menu-item>
            <el-sub-menu index="2-4">
              <template #title>广西启蔻</template>
              <el-menu-item index="2-4-1">南宁</el-menu-item>
              <el-menu-item index="2-4-2">玉林</el-menu-item>
              <el-menu-item index="2-4-3">桂林</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <RouterLink to="/Goods">
            <el-menu-item index="3">婚纱款式</el-menu-item>
          </RouterLink>
          <el-menu-item index="4">精选酒店</el-menu-item>
          <el-menu-item index="5">企业介绍</el-menu-item>
          <el-menu-item index="6">加入我们</el-menu-item>
          <el-menu-item index="7">咨询预约</el-menu-item>
        </el-menu>

      </el-col>
    </el-row>
  </div>
</template>


<style scoped>
.el-menu--horizontal {
  display: flex;
  border-bottom: solid 1px var(--el-menu-border-color);
  border-right: none;
  justify-content: center;
}

.el-row {
  /* margin-right: 0; */
  margin-left: 0;
}
.logo{
  /* overflow: hidden; */
  width: 200px;
  height: 50px;
}
.logo img{
  width: 200px;
  height: 50px;
}


</style>