<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRoute } from 'vue-router';
const { query } = useRoute()
console.log('传入的函数', query)

const value = ref([])

const props = {
    expandTrigger: 'hover' as const,
}

const handleChange = (value) => {
    console.log(value)
}

const options = [
    {
        value: 'guide',
        label: '广西壮族自治区',
        children: [
            {
                value: 'disciplines',
                label: '南宁市',
                children: [
                    {
                        value: 'consistency',
                        label: '江南区158号',
                    },
                    {
                        value: 'feedback',
                        label: '青秀区凯旋一号A栋11号',
                    },
                    {
                        value: 'efficiency',
                        label: '西乡塘区',
                    },
                    {
                        value: 'controllability',
                        label: '邕宁区',
                    },
                ],
            },
            {
                value: 'navigation',
                label: '玉林市',
                children: [
                    {
                        value: 'side nav',
                        label: '龙安镇',
                    },
                    {
                        value: 'top nav',
                        label: '仁东镇',
                    },
                ],
            },
        ],
    },
    {
        value: 'component',
        label: '广东',
        children: [
            {
                value: 'basic',
                label: '深圳市',
                children: [
                    {
                        value: 'layout',
                        label: '南山区',
                    },
                    {
                        value: 'color',
                        label: '宝安区',
                    },
                    {
                        value: 'typography',
                        label: '龙岗区',
                    },
                    {
                        value: 'icon',
                        label: '福田区',
                    },
                    {
                        value: 'button',
                        label: '光明区',
                    },
                ],
            },
            {
                value: 'form',
                label: '广州市',
                children: [
                    {
                        value: 'radio',
                        label: 'Radio',
                    },
                    {
                        value: 'checkbox',
                        label: 'Checkbox',
                    },
                    {
                        value: 'input',
                        label: 'Input',
                    },
                    {
                        value: 'input-number',
                        label: 'InputNumber',
                    },
                    {
                        value: 'select',
                        label: 'Select',
                    },
                    {
                        value: 'cascader',
                        label: 'Cascader',
                    },
                    {
                        value: 'switch',
                        label: 'Switch',
                    },
                    {
                        value: 'slider',
                        label: 'Slider',
                    },
                    {
                        value: 'time-picker',
                        label: 'TimePicker',
                    },
                    {
                        value: 'date-picker',
                        label: 'DatePicker',
                    },
                    {
                        value: 'datetime-picker',
                        label: 'DateTimePicker',
                    },
                    {
                        value: 'upload',
                        label: 'Upload',
                    },
                    {
                        value: 'rate',
                        label: 'Rate',
                    },
                    {
                        value: 'form',
                        label: 'Form',
                    },
                ],
            },
            {
                value: 'data',
                label: '韶关市',
                children: [
                    {
                        value: 'table',
                        label: 'Table',
                    },
                    {
                        value: 'tag',
                        label: 'Tag',
                    },
                    {
                        value: 'progress',
                        label: 'Progress',
                    },
                    {
                        value: 'tree',
                        label: 'Tree',
                    },
                    {
                        value: 'pagination',
                        label: 'Pagination',
                    },
                    {
                        value: 'badge',
                        label: 'Badge',
                    },
                ],
            },
            {
                value: 'notice',
                label: '珠海市',
                children: [
                    {
                        value: 'alert',
                        label: 'Alert',
                    },
                    {
                        value: 'loading',
                        label: 'Loading',
                    },
                    {
                        value: 'message',
                        label: 'Message',
                    },
                    {
                        value: 'message-box',
                        label: 'MessageBox',
                    },
                    {
                        value: 'notification',
                        label: 'Notification',
                    },
                ],
            },
            {
                value: 'navigation',
                label: '佛山市',
                children: [
                    {
                        value: 'menu',
                        label: 'Menu',
                    },
                    {
                        value: 'tabs',
                        label: 'Tabs',
                    },
                    {
                        value: 'breadcrumb',
                        label: 'Breadcrumb',
                    },
                    {
                        value: 'dropdown',
                        label: 'Dropdown',
                    },
                    {
                        value: 'steps',
                        label: 'Steps',
                    },
                ],
            },
            {
                value: 'others',
                label: '汕头市',
                children: [
                    {
                        value: 'dialog',
                        label: 'Dialog',
                    },
                    {
                        value: 'tooltip',
                        label: 'Tooltip',
                    },
                    {
                        value: 'popover',
                        label: 'Popover',
                    },
                    {
                        value: 'card',
                        label: 'Card',
                    },
                    {
                        value: 'carousel',
                        label: 'Carousel',
                    },
                    {
                        value: 'collapse',
                        label: 'Collapse',
                    },
                ],
            },
        ],
    },
    {
        value: 'resource',
        label: '海南',
        children: [
            {
                value: 'axure',
                label: 'Axure Components',
            },
            {
                value: 'sketch',
                label: 'Sketch Templates',
            },
            {
                value: 'docs',
                label: 'Design Documentation',
            },
        ],
    },
]

const num = ref(1)
const handleChange8 = (value: number) => {
    console.log(value)
}

const open = () => {
    ElMessage({
        message: '成功加入购物车',
        type: 'success',
    })
}
</script>

<template>
    <div class="producttop">
        <div class="producttop1">
            公主嫁到<span>princess</span>
        </div>

    </div>

    <div class="product">
        <div class="productgood">
            <div class="productimg">
                <img :src="query.img" />
            </div>
            <div class="producttext">
                <div class="productword">
                    {{ query.name }}
                </div>
                <div class="productprice">
                    <div class="productprice1">价格 ¥488.00-1999.99</div>
                    <div class="productprice2">现价 <div class="productprice3">¥{{ query.price }}</div>
                    </div>
                </div>
                <div class="productdelivery">
                    <div class="m-4">
                        <p>配送地址</p>
                        <el-cascader v-model="value" :options="options" @change="handleChange" />
                    </div>
                </div>
                <div class="productsize">
                    尺码
                    <el-pagination small background layout="prev, pager, next" :total="50" class="mt-4" />
                </div>
                <div class="productcount">
                    数量<el-input-number v-model="num" :min="1" :max="99999" @change="handleChange8" />
                </div>
                <div class="productbutton">
                    <el-button type="primary">立即购买</el-button>
                    <el-button :plain="true" @click="open"><el-icon>
                            <ShoppingCartFull />
                        </el-icon>加入购物车</el-button>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.producttop {
    width: 98.93vw;
    height: 150px;
    border: 1px solid #6e6c6c;
    font-size: 50px;
    margin-top: 2px;
    /* border-top: 2px solid #FF6678; */
    border-bottom: 20px solid #ff6678;

}

.producttop1 {
    width: 60vw;
    height: 124px;
    /* background: #6c6c6c; */
    margin: 0 auto;
    overflow: hidden;
    font-family: 'Helvetica Neue';
    color: #ffffff;
    text-shadow: 0px 1px 0px #c0c0c0,
        0px 1px 0px #eba4a4,
        0px 2px 0px #b66d6d,
        0px 3px 0px #805050,
        0px 4px 0px #dd8080,
        0px 5px 10px rgb(104 98 98 / 90%);
    font-size: calc(80vw * 60 / 1000);

}




.product {
    width: 100%;
    height: 700px;
}

.productgood {
    width: 65%;
    height: 600px;
    /* background: #6e6c6c; */
    margin: 0 auto;
    border: 2px solid #E8E8E8;
}


.productimg {
    float: left;
    margin-top: 20px;
    
}

.producttext {
    /* background: #3C3C3C; */
    width: 450px;
    height: 500px;
    float: left;
    left: 52px;;
}

.productword {
    width: 100%;
    min-height: 21px;
    font-size: 20px;
    font-weight: 700;
    line-height: 21px;
    color: #3C3C3C;
    margin: 0 auto;
}

.productprice {
    width: 100%;
    height: 100px;
    background: #FFF2E8;
    margin: 20px auto;


}

.productprice1 {
    display: inline;
    color: #6c6c6c;
    margin: 0 0 0 10px;
    word-spacing: 20px;
    letter-spacing: 2px;
}

.productprice2 {
    color: #6c6c6c;
    margin: 0 0 0 10px;

}

.productprice3 {
    font-size: 26px;
    font-weight: 700;
    color: #F40;

}

.productsize {
    margin-top: 10px;
}

.productcount {
    margin-top: 20px;
    letter-spacing: 0px;
}

.productbutton {
    margin-top: 60px;
}

.el-button {
    background: #F40;
    color: #ffffff;
}

@media screen and (max-width: 500px) {
    .producttop{
        height: 80px;
    }
    .product img{
        width: 100%;
        height: 300px;
    }
    .producttext{
        width: 80%;
        clear: both;
        right: 520px;
        height: inherit;
    }
    .productgood{
        height: 800px;
    }
    
}

</style>