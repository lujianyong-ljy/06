<script setup>
import { ref, reactive } from 'vue'

const imglist = reactive([
  { id: 0, idview: 'https://pic4.zhimg.com/v2-c016fa4f6737f076aa10437b75d0cdd7_r.jpg' },
  { id: 1, idview: 'https://pic4.zhimg.com/v2-d14fa7d762bbe2c82045df6fdd55fc37_r.jpg' },
  { id: 2, idview: 'https://ts1.cn.mm.bing.net/th/id/R-C.14346231c889bc91627730464479d883?rik=xB3f8VJ40YQv5A&riu=http%3a%2f%2fproductimg.yingtaoyun.com%2f14%2f34%2f14346231c889bc91627730464479d883.jpg&ehk=3sUO2gkx%2f4Ye4a3h5YuBKSru479LMCyjWCN6hz6IVEE%3d&risl=&pid=ImgRaw&r=0' },
  { id: 3, idview: 'https://img.zcool.cn/community/0102b35c402a62a801203d228a32ba.jpg@1280w_1l_2o_100sh.jpg' },
  { id: 4, idview: 'https://ts1.cn.mm.bing.net/th/id/R-C.912495b43194bfeb787fd7ea108a362e?rik=AZLIx6r4%2fffQUA&riu=http%3a%2f%2fwww.photomtf.com%2fuploadfile%2f2017%2f0430%2f20170430024542125.jpg&ehk=oJFygJeuma%2ftvRslUKrwSTNpe2qvVINPs%2fI18nVce%2fU%3d&risl=&pid=ImgRaw&r=0' },
  { id: 5, idview: 'https://img.bj520.com/20201221/1608520736377562.jpg' },
  { id: 6, idview: 'https://www.bjcshy.com/upfile/201707/2017072745170993.jpg' }
])

</script>

<template>
  <div class="photo" style="margin-top: 20px;">
    <el-carousel :interval="2000" type="card" height="600px">
      <el-carousel-item v-for="item in imglist" :key="item.id">
        <img :src="item.idview" alt="">
      </el-carousel-item>
    </el-carousel>

  </div>
  <hr>

  <div class="home_middle">
    <ul>
      <li>
        <h4><span>CHOCO</span>策划申请</h4>
        <div class="homeimg"><img src="http://www.choco.com.cn/coco/t_ch.jpg" alt="" class="pic"></div>
      </li>
      <li>
        <h4><span>CHOCO</span>热门展示</h4>
        <div class="homeimg"><img src="http://www.choco.com.cn/coco/t_rm.jpg" alt="" class="pic"></div>
      </li>
      <li>
        <h4><span>CHOCO</span>客户评价</h4>
        <div class="homeimg"><img src="http://www.choco.com.cn/coco/t_gh.jpg" alt="" class="pic"></div>
      </li>

    </ul>
  </div>

  <div class="line"></div>
  <br>

  <div class="love-title">
    <span>婚礼案例<i>Wedding Cases</i></span>
  </div>
  <br>

  <div class="love-middle">
    <div class="anli-left">
      <div class="hunli_type_list">
        <dt>按照价格</dt>
        <dd>Classical</dd>
        <dd>Superior</dd>
        <dd>fine Art</dd>
      </div>
      <div class="hunli_type_list fg">
        <dt>按照风格</dt>
        <dd>欧式奢华</dd>
        <dd>中式</dd>
        <dd>主题式</dd>
        <dd>古代风</dd>
        <dd>森系</dd>
      </div>
    </div>

    <div class="anli-right">
      <div class="anli-1">
        <div class="anli-1-1">
          <ul>
            <li>
              <div class="homeimg"><img src="http://www.choco.com.cn/uploads/2023-02-16/63edfb5cc80f1.jpg" alt=""></div>
              <h4>启蔻案例 | 合一</h4>
              <div class="anli-time">
                <p>干净大气现代风婚礼，流畅的线条，极简的设计，在3000平的宴会厅让每一位宾客感受到超大的震撼力。</p>
              </div>
            </li>
            <li>
              <div><img src="http://www.choco.com.cn/uploads/2023-02-16/63edf2c199c9d.jpg" alt=""></div>
              <h4>启蔻案例 | 水晶花园</h4>
              <div class="anli-time">
                <p>鲜花的浪漫，水晶的大气，既优雅又浪漫，诠释少女心气息的水晶花园。</p>
              </div>
            </li>
            <li>
              <div><img src="http://www.choco.com.cn/uploads/2023-02-16/63edf4fc0ee52.jpg" alt=""></div>
              <h4>启蔻案例 | 公主的婚礼</h4>
              <div class="anli-time">
                <p>如海岛的阳光一般迷人而耀眼的公主，以粉色呈现那份无与伦比的浪漫。布置于三亚莱佛士</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="anli-2">
        <div class="anli-2-1">
          <ul>
            <li>
              <div><img src="http://www.choco.com.cn/uploads/2023-02-16/63edf06e335e5.jpg" alt=""></div>
              <h5>启蔻案例 | 春日花园</h5>
              <div class="anli-time">
                <p>​以大量的花材、多彩而缤纷的色彩搭配营造一个非常春日气息的花园，氛围特别棒，仿佛置身于一整鲜花围绕的花园。</p>
              </div>
            </li>
            <li>
              <div><img src="http://www.choco.com.cn/uploads/2022-12-05/638d790573b65.jpg" alt=""></div>
              <h5>启蔻案例 | 小情调</h5>
              <div class="anli-time">
                <p>浮雕精致的罗马柱，搭配攀爬而上的花艺，丝滑奶咖色复古感，在侘寂风中更加的浪漫华丽。</p>
              </div>
            </li>
            <li>
              <div><img src="http://www.choco.com.cn/uploads/2023-02-16/63edf86f83755.jpg" alt=""></div>
              <h5>启蔻案例 | 至简至美</h5>
              <div class="anli-time">
                <p>纯白的色调与水晶柱完美相搭，极简的风格干净又纯粹，至简至美的现代水台婚礼，高级感十足。布置三亚柏悦</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="line"></div>
</template>

<style scoped>
.el-menu--horizontal {
  display: flex;
  border-bottom: solid 1px var(--el-menu-border-color);
  border-right: none;
  justify-content: center;
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.photo img {
  width: 100%;
  height: inherit;
}

.home_middle {
  text-align: center;
 
}
.homeimg{
  overflow: hidden;
}
.home_middle img{
  transition: all 0.6s;
}
.home_middle img:hover{
  transform: scale(1.1);
}
.anli-1-1 img{
  transition: all 0.6s;
}
.anli-1-1 img:hover{
  transform: scale(1.05);
}
.anli-2-1 img{
  transition: all 0.6s;
}
.anli-2-1 img:hover{
  transform: scale(1.05);
}


.home_middle li {
  margin: 2px;
}

.home_middle ul li {
  display: inline-block;
  list-style-type: none;
  letter-spacing: 5px;

}

li {
  list-style: none;
  text-align: center;
}

.line {
  border-top: 1px solid #eeeeee;
  width: 83%;
  margin: 0 auto;
  height: 1px;
  margin-top: 35px;
}

.love-title {
  text-align: center;
  font-family: '微软雅黑';
  font-size: larger;
}

.love-middle {
  width: 95%;
  margin: 20px auto;
  display: inline-block;

}


.anli-left {
  width: 13%;
  height: 860px;
  float: left;
  border-right: 2px #bfbfbf solid;
  padding-right: 10px;
  /* background: #ffd7d7; */
}

.hunli_type_list {
  width: 100%;
  text-align: right;
  font-size: 18px;
}

.hunli_type_list dd {
  padding-left: 15%;
  height: 50px;
  text-align: right;
  color: #b4b4b4;
  position: relative;
  font-size: 14px;
}

.anli-right {
  width: 85%;
  float: right;
  /* background: #6d4747; */

}

.anli-1 {
  width: 55%;
  float: left;

}

.anli-1-1 {
  position: relative;
  width: 100%;
  padding-bottom: 20px;
}

.anli-1 img {
  width: 100%;
  height: inherit;
}

.anli-time {
  font-size: 14px;
  color: #a5a5a7;
}

.anli-2 {
  width: 40%;
  float: right;
  padding-right: 30px;
}

.anli-2-1 {
  position: relative;
  width: 100%;
  padding-bottom: 20px;
}

.anli-2 img {
  width: 100%;
  height: inherit;
}

/* .pic{
  width: 100px;
  height: 100px;
} */

@media screen and (max-width: 500px) {
    .pic{
        width: 350px;
        height: 200px;
        margin-right: 20px;
        
    }
}
</style>