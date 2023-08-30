<template>
    <div class="footer">
        <div class="foot">
            <div class="foot1">
                <el-breadcrumb separator="|">
                    <p>
                        <el-breadcrumb-item>关于我们</el-breadcrumb-item>
                        <el-breadcrumb-item><a href="">关于我们</a></el-breadcrumb-item>
                        <el-breadcrumb-item><a href="">联系我们</a></el-breadcrumb-item>
                        <el-breadcrumb-item><a href="">联系客服</a></el-breadcrumb-item>
                        <el-breadcrumb-item><a href="">合作招商</a></el-breadcrumb-item>
                        <el-breadcrumb-item><a href="">商家帮助</a></el-breadcrumb-item>
                        <el-breadcrumb-item><a href="">营销中心</a></el-breadcrumb-item>
                        <el-breadcrumb-item><a href="">手机婚纱</a></el-breadcrumb-item>
                        <el-breadcrumb-item><a href="">友情链接</a></el-breadcrumb-item>
                        <el-breadcrumb-item><a href="">销售联盟</a></el-breadcrumb-item>
                        <el-breadcrumb-item><a href="">婚纱社区</a></el-breadcrumb-item>
                        <el-breadcrumb-item><a href="">风险监测</a></el-breadcrumb-item>
                        <el-breadcrumb-item><a href="">隐私政策</a></el-breadcrumb-item>
                        <el-breadcrumb-item><a href="">婚纱公益</a></el-breadcrumb-item>
                    </p>
                </el-breadcrumb>
            </div>

            <div class="foot2">
                <div class="foot2-1">
                    <el-breadcrumb separator="|">

                        <el-breadcrumb-item>销售热线：4887151-48454-4545</el-breadcrumb-item>
                        <el-breadcrumb-item><a href="">客服电话：4000-000-0000</a></el-breadcrumb-item>
                        <el-breadcrumb-item><a href="">客服QQ：1888899</a></el-breadcrumb-item>
                    </el-breadcrumb>

                </div>
                <div class="foot2-2">
                    <el-breadcrumb-item><a href="">京公网安备11000002000088号</a></el-breadcrumb-item>
                    <el-breadcrumb-item><a href="">京ICP备11041704</a></el-breadcrumb-item>
                    <el-breadcrumb-item><a href="">出版物经营许可证</a></el-breadcrumb-item>
                    <el-breadcrumb-item><a href="">网络文化经营许可证京网文[2020]6112-1201号</a></el-breadcrumb-item>
                </div>


            </div>
        </div>
    </div>
</template>

<style scoped>
.footer {
    width: 100%;
    height: 200px;
    /* padding-top: 15%; */
    /* background: #b07b7b; */
}

.foot {
    height: 100%;
    width:100%;
    background: #dad7d7;
    margin: 0 auto;
    box-sizing: border-box;
    /* background-size: cover; */

}


.foot1 {
   
    padding-top: 20px;
    left: 150px;
}

.foot2 {
    position: absolute;
    width: 100%;
    height: 130px;
    /* background: #c7c6c6; */
    padding-top: 15px;
}

.el-breadcrumb {
    padding: 0 200px;

}

.foot2-1 {
    height: 30px;
    margin: 7px 385px;
}

.foot2-2 {
    height: 30px;
    margin: 0 485px;
}

.foot2-1 ul {
    List-style-type: none
}

.foot2-1 li {
    /* display: inline; */
    /* line-height: 40px; */
    float: left;
    letter-spacing: 2px;
}


@media screen and (max-width: 1300px) {
    .foot1{
        display: none;
     }
     .foot2{
        display: none;
     }
     .footer{
        display: none;
     }
}
</style>