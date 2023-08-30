<script setup>
import { reactive } from 'vue'

const list = reactive([
    { name: '主婚纱新娘2023新款超级重工拖尾法式瘦小个子高级感云漫出门纱', price: 568, img: 'https://img.alicdn.com/imgextra/i3/1282900132/O1CN013qSGLx1CqV2ECZTYi_!!0-saturn_solar.jpg_468x468q75.jpg_.webp' },
    { name: '法式轻婚纱礼服2023新款新娘主纱孕妇高级感一字肩小个子拖尾2022', price: 299, img: 'https://img.alicdn.com/imgextra/i4/101302294/O1CN01yOB3Tk1SohIfhx8KA_!!0-saturn_solar.jpg_468x468q75.jpg_.webp' },
    { name: '婚纱2023新款拖尾气质新娘奢华一字肩宫廷婚纱裙简约大气复古婚礼', price: 368, img: 'https://img.alicdn.com/imgextra/i1/57014002/O1CN01dxwuSX1fQxnSVw7IH_!!0-saturn_solar.jpg_468x468q75.jpg_.webp' },
    { name: 's性感闪耀粉色新娘结婚敬酒服宴会演出主持人鱼尾婚纱晚礼服17770', price: 1359, img: 'https://img.alicdn.com/imgextra/i4/12368862/O1CN01wnmAF12FKqkd5MVy4_!!0-saturn_solar.jpg_468x468q75.jpg_.webp' },
    { name: '孕妇婚纱2023新娘新款拖尾气质遮粗手臂婚纱裙简约小个子长拖尾', price: 668, img: 'https://img.alicdn.com/imgextra/i2/132778790/O1CN01YNQbkj2EnsCmjGXHA_!!0-saturn_solar.jpg_468x468q75.jpg_.webp' },
    { name: '一字肩主婚纱2023新款新娘气质公主宫廷风星空拖尾大码孕妇小个子', price: 799, img: 'https://img.alicdn.com/imgextra/i2/3389862323/O1CN01TCEKE11T1ysFrhRla_!!0-saturn_solar.jpg_468x468q75.jpg_.webp' },
    { name: '婚纱礼服2023新款拖尾气质新娘婚纱森系超仙梦幻小个子显瘦一字肩', price: 599, img: 'https://img.alicdn.com/imgextrahttps://img.alicdn.com/imgextra/i3/2385614284/O1CN01sKkiB91hW7W6p4MPo_!!2385614284-0-alimamacc.jpg_468x468q75.jpg_.webp' },
    { name: '重工主婚纱2023新款新娘小个子拖尾高端奢华宫廷风法式高级感冬季', price: 669, img: 'https://img.alicdn.com/imgextra/i3/3848073754/O1CN01qZ2EEP1dbNe5QSV89_!!0-saturn_solar.jpg_468x468q75.jpg_.webp' },
    { name: '缎面主婚纱新娘2023新款2022星空大拖尾法式重工小个子宫廷风长袖', price: 339, img: 'https://img.alicdn.com/imgextra/i1/57610738/O1CN01CYNfCt1HK35vQpZfj_!!0-saturn_solar.jpg_468x468q75.jpg_.webp' },
    { name: '主婚纱2023新款新娘法式高级质感孕妇小个子显瘦公主风2022大拖尾', price: 288, img: 'https://img.alicdn.com/imgextra/i3/118220491/O1CN01x7b1qE1FUv9EoTsYJ_!!0-saturn_solar.jpg_468x468q75.jpg_.webp' },
    { name: '主婚纱2023新款新娘法式高级质感孕妇小个子显瘦公主风2022大拖尾', price: 299, img: 'https://img.alicdn.com/imgextra/i3/32533099/O1CN016mcXPT1YlO8kKBFZa_!!0-saturn_solar.jpg_468x468q75.jpg_.webp' },
    { name: '主婚纱2023新款新娘法式高级质感孕妇小个子显瘦公主风2022大拖尾', price: 466, img: 'https://img.alicdn.com/imgextra/i1/105576580/O1CN01GPHaAe1yTgsASC2cy_!!0-saturn_solar.jpg_468x468q75.jpg_.webp' },
    { name: '主婚纱2023新款新娘法式高级质感孕妇小个子显瘦公主风2022大拖尾', price: 788, img: 'https://img.alicdn.com/imgextra/i3/128953309/O1CN01G5OMQP1aJZNTE1I3K_!!0-saturn_solar.jpg_468x468q75.jpg_.webp' },
    { name: '主婚纱2023新款新娘法式高级质感孕妇小个子显瘦公主风2022大拖尾', price: 1099, img: 'https://img.alicdn.com/imgextra/i3/29381871/O1CN01iQgMDr1PgxhmQR2lz_!!0-saturn_solar.jpg_468x468q75.jpg_.webp' },
    { name: '主婚纱2023新款新娘法式高级质感孕妇小个子显瘦公主风2022大拖尾', price: 660, img: 'https://img.alicdn.com/imgextra/i3/11164228/O1CN01H23x8E1h6TNNWbixI_!!2-saturn_solar.png_468x468q75.jpg_.webp' },
    { name: '主婚纱2023新款新娘法式高级质感孕妇小个子显瘦公主风2022大拖尾', price: 896, img: 'https://img.alicdn.com/imgextra/i1/262700166/O1CN01jrjP4A1D64UQvjcFH_!!0-saturn_solar.jpg_468x468q75.jpg_.webp' },
    { name: '主婚纱2023新款新娘法式高级质感孕妇小个子显瘦公主风2022大拖尾', price: 1535, img: 'https://img.alicdn.com/imgextra/i4/1737700092/O1CN01Et9iKn1CYBEVIlDk6_!!0-saturn_solar.jpg_468x468q75.jpg_.webp' },
    { name: '主婚纱2023新款新娘法式高级质感孕妇小个子显瘦公主风2022大拖尾', price: 486, img: 'https://img.alicdn.com/imgextra/i1/2270900162/O1CN01MyLk8N1D4EyVynhDY_!!0-saturn_solar.jpg_468x468q75.jpg_.webp' },
    { name: '主婚纱2023新款新娘法式高级质感孕妇小个子显瘦公主风2022大拖尾', price: 468, img: 'https://img.alicdn.com/imgextra/i1/3042676388/O1CN01EYpTTg1x3kspgCxj4_!!0-saturn_solar.jpg_468x468q75.jpg_.webp' },
    { name: '主婚纱2023新款新娘法式高级质感孕妇小个子显瘦公主风2022大拖尾', price: 786, img: 'https://img.alicdn.com/imgextra/i4/2235930138/O1CN01gQyqdD1CtFT0gY4aZ_!!0-saturn_solar.jpg_468x468q75.jpg_.webp' },
    { name: '主婚纱2023新款新娘法式高级质感孕妇小个子显瘦公主风2022大拖尾', price: 876, img: 'https://img.alicdn.com/imgextra/i3/219980100/O1CN01trbYBQ1CbqNYmIhLi_!!0-saturn_solar.jpg_468x468q75.jpg_.webp' },
    { name: '主婚纱2023新款新娘法式高级质感孕妇小个子显瘦公主风2022大拖尾', price: 415, img: 'https://img.alicdn.com/imgextra/i4/24987785/O1CN01gMKtjg27NZwuKd3jO_!!0-saturn_solar.jpg_468x468q75.jpg_.webp' },
    { name: '主婚纱2023新款新娘法式高级质感孕妇小个子显瘦公主风2022大拖尾', price: 688, img: 'https://img.alicdn.com/imgextra/i4/12368862/O1CN01wnmAF12FKqkd5MVy4_!!0-saturn_solar.jpg_468x468q75.jpg_.webp' },
    { name: '主婚纱2023新款新娘法式高级质感孕妇小个子显瘦公主风2022大拖尾', price: 999, img: 'https://img.alicdn.com/imgextra/i2/33313328/O1CN01hHrrEu1aSGt75rBio_!!0-saturn_solar.jpg_468x468q75.jpg_.webp' },
    { name: '主婚纱2023新款新娘法式高级质感孕妇小个子显瘦公主风2022大拖尾', price: 998, img: 'https://img.alicdn.com/imgextra/i2/114289430/O1CN01SnQChZ2JWzb2VVTA2_!!0-saturn_solar.jpg_468x468q75.jpg_.webp' },
])

</script>


<template>
    <div class="items-list">
        <div class="items-list-box">
            <div class="pc" v-for="items in list">
                <RouterLink :to="'/Product?name=' + items.name + '&price=' + items.price + '&img=' + items.img">
                    <img :src="items.img" alt=""><br>
                    <span>{{ items.name }}</span>
                    <br>
                    <b>¥{{ items.price }}</b>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

 
<style scoped>
.pc {
    width: 260px;
    height: 368px;
    border: 1px solid #ddd;
    display: inline-block;
    overflow: hidden;
}

.pc:hover {
    border-color: #fd3f31;
}

a {
    text-decoration: none;
}

img {
    width: 235px;
    height: 250px;
    padding: 22px 20px 0;
}

.items-list {
    margin: 20px 165px;
    

}

.items-list-box {
    width: 100%;
    /* font-size: 0; */
    font-family: 'helvetica neue', tahoma, 'hiragino sans gb', stheiti, 'wenquanyi micro hei', sans-serif;
    border-top: 1px solid #f2f2f2;
    border-left: 1px solid #f2f2f2;

}

span {
    color: #6e6c6c;
}

b {
    color: #fd3f31;
}
@media screen and (max-width: 500px) {
    .items-list-box{
       margin: 0 -60px;
        
    }
}

</style>