<template>
    <div class="xiangqingye">
   
            <span class="mui-icon mui-icon mui-icon mui-icon-arrowthinleft" style="font-size:30px;font-weight:700" @click="Back"></span>
            <b><span style="position:absolute;left: 50%;top: 1%;transform: translate(-50%, -1%);white-space: nowrap;">{{brandName}}</span></b>
            <span class="mui-icon mui-icon-bars" style="font-size:28px;font-weight:700; float:right;"></span>
            <b><div style="color:red;position:absolute;left: 44%;top: 5%;transform: translate(-44%, -5%);font-size:12px;">￥</div><div style="color:red;position:absolute;left: 50%;top: 5%;transform: translate(-50%, -5%);font-size:12px;">{{price}}</div></b>
 
     

        <div class="swiper-container swiper-container-horizontal" style="margin-top:20px;height:360px;width:90%">
             <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-1600px, 0px, 0px);">
                <div class="swiper-slide " style="width: 800px;" v-for="(zz,index) in Datalist" :key="zz.index">
                    <img :src="zz.bigImgUrl" style="width:320px;height:100%;">
                </div> 
            </div>
        </div>
        <ul style="padding:0;">
            <li style="font-size:15px;">{{name}}</li>
            <li style="font-size:12px;text-decoration:line-through;color:gray;">￥{{marketPrice}}</li>
            <b><li style="color:#c00;font-size:14px;">￥{{price}}<sapn style="margin-left:10px;color:black;border:1px solid black">{{discount}}</sapn></li></b>
            <li class="mui-icon mui-icon-navigate font-size:15px;" style="font-size:13px;margin-left:5%;">{{deliver_date}}</li>
        </ul>
        <div style="border-bottom:1px solid #ccc;height:20px;width:90%;margin-left:5%;"></div>
        <div style="font-size:12px;margin:5% 0 5% 5%;border-bottom:1px solid #ccc;height:40px;width:90%;margin-left:5%;">服务
            <span v-for="s in service_labels" :key="s.id" style="font-size:12px;margin:5% 0 0 5.5%;">{{s.label_title}}</span>
        </div>
        <div style="font-size:12px;margin:5% 0 5% 5%;border-bottom:1px solid #ccc;height:40px;width:90%;margin-left:5%;">尺码
            <span v-for="s in size" :key="s.id" style="font-size:12px;margin:5% 0 0 10%;">{{s.sizeId}}</span>
        </div>
        <div style="font-size:12px;margin:5% 0 5% 5%;border-bottom:1px solid #ccc;height:280px;width:90%;margin-left:5%;">
            <h4>商品参数</h4>
            <img :src=" material_quality_img" style="height:110px;">
            <span v-for="s in attributesList" :key="s.id" style="font-size:12px;margin:5% 0 0 ;float:left;">{{s.name}}{{s.value}}</span>
        </div>
        <div style="font-size:12px;margin:5% 0 5% 5%;border-bottom:1px solid #ccc;height:200px;width:90%;margin-left:5%;">
            <h4>尺码信息</h4>
            <tr v-for="s in sizeTable" :key="s.id" style="font-size:12px;margin:5% 0 0 0 ;color:black;" ><td style="width:70px;height:30px;text-align:center;">{{s.product_size}}</td>  <td style="width:70px;height:30px;text-align:center;">{{s.def8}}</td> <td style="width:70px;height:30px;text-align:center;">{{s.def10}}</td> <td style="width:70px;height:30px;text-align:center;">{{s.def19}}</td> <td style="width:70px;height:30px;text-align:center;">{{s.def22}}</td><td style="width:70px;height:30px;text-align:center;">{{s.specifications}}</td><td style="width:70px;height:30px;text-align:center;">{{s.def21}}</td></tr>

        </div>
         <div style="font-size:12px;margin:5% 0 5% 5%;border-bottom:1px solid #ccc;width:90%;margin-left:5%;">
                <h4 style="font-size:14px;">{{design}}</h4>
            <div v-for="s in description.product_img1" :key="s.id">
                <img :src="s.bigImgUrl" style="width:100%;height:301px;"/>
            </div>
            <p >{{message}}</p>
        </div>
        <h4 style="font-size:15px;margin:0 0 50px 5%;">洗护与保养<li style="font-size:8px;margin:10px 5% 0 0;list-style:none;color:#aaa;">{{maintenanceList}}</li></h4>

        <div style="width:100%;height:42px;position:fixed;top:526px;z-index:100;background:#fff;text-align:center;">
            <span class="mui-icon mui-icon-locked heiya" style="color:black;float:left;font-size:25px;margin:0 0 0 8%;"><p style="font-size:12px;color:black;">购物袋</p></span>
            <span style="line-height:42px;margin-right:20px;border-right:1px solid #ccc;padding-right:20px;"><b>加入购物车</b></span>
            <span style="color:#c00;"><b>立即购买</b></span>
        </div>
    </div> 
</template>

<script>
    // export let,const,var,function定义的变量，常量，函数，类
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
    export default {
         mounted(){
            var mySwiper = new Swiper('.swiper-container', {
              autoplay:3000,
              speed:300,
              loop:true,
              observer:true,//修改swiper自己或子元素时，自动初始化swiper
              observeParents:true//修改swiper的父元素时，自动初始化swiper
            })
        },
        data(){

            return {
                id:this.$route.params.xqid,
                lbid:this.$route.params.curid,
                Datalist:{},
                name:{},
                price:{},
                brandName:{},
                marketPrice:{},
                discount:{},
                service_labels:{},
                size:{},
                attributesList:{},
                material_quality_img:{},
                sizeTable:{},
                design:{},
                description:{},
                message:{},
                maintenanceList:{},
                Data:{}

            }
        },
       created(){
            this.xiang()
           
        },
        beforeRouterEnter(){
            console.log(666)
        },
        methods:{
            xiang(){
                this.$axios.get(`http://www.mei.com/appapi/product/detail/v3?categoryId=2040204090000005896&productId=${this.id}&userId=2086208699900088233&platform_code=H5&timestamp=1542097790966&summary=00026e677f9f99ea3afca8566878e32f`).then(response =>{
                    this.Datalist = response.data.infos.images;
                    this.name = response.data.infos.name;
                    this.brandName = response.data.infos.brandName;
                    this.price = response.data.infos.price;
                    this.marketPrice = response.data.infos.marketPrice;
                    this. discount = response.data.infos. discount;
                    this. deliver_date = response.data.infos.deliver_date;
                    this.Data = response.data;
                    this.service_labels = response.data.infos.service_labels;
                    this.size = response.data.infos.size;
                    this.attributesList = response.data.infos.description.attributesList;
                    this. material_quality_img = response.data.infos.description. material_quality_img;
                    this. sizeTable = response.data.infos.sizeMeasure.sizeTable;
                    this.design = response.data.infos.description.design;
                    this.description = response.data.infos.description;
                    this.message = response.data.infos.description.message;
                    this.maintenanceList = response.data.infos.description.maintenanceList;
                   
                   

                },response =>{
                                  console.log("获取信息失败");
                                  console.log(response);
                              }
                )
           },
           Back(){
        
        this.$router.push({path:'/home/lists'+this.lbid})
      
      }

          
      }

      
    }
</script
<style>
   
</style>