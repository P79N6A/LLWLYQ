<template>
    <div class="lists">
        <div>
            <router-link to="/home"><span class="mui-icon mui-icon mui-icon mui-icon-arrowthinleft" style="font-size:30px;font-weight:700"></span></router-link>
            <b><span style="font-size:14px;position: absolute;left: 50%;top: 1%;transform: translate(-50%, -1%);white-space: nowrap;">{{lists.eventName}}</span></b>
            <span class="mui-icon mui-icon-bars" style="font-size:28px;font-weight:700; float:right;"></span>
        </div>
        <div style="">
            <div class="abc" v-for=" diu in lists.products" :key="diu.id" style="padding:0;width:45%;height:258px;overflow:hidden;display: inline-block;margin-left:3.3%">
                    
                    <div class="L2" style="height:100%" @click="toxq(id,diu.productId)">
                        <img :src="diu.imageUrl" class="img2"><span class="ppp1" style="display:block;font-size:12px;"> {{diu.brandName}}</span> <span class="ppp2" style="display:block;font-size:12px;white-space: nowrap;text-overflow:ellipsis;">{{diu.productName}} </span><span class="ppp3" style="font-size:12px;color:red;">￥{{diu.price}}</span><span class="ppp4" style="font-size:12px;text-decoration:line-through;margin-left:5px;">￥{{diu.marketPrice}}</span><span class="ppp5" style="font-size:12px;margin-left:20px;">{{diu.discount}}折</span>
                    </div>  

                
                </div>
            </div>
            
    </div>
</template>

<script>
    // export let,const,var,function定义的变量，常量，函数，类
    export default { 
        data(){
            return {
                id:this.$route.params.categoryId,


                lists:{}

            }
        },
       created(){
       this.getlists();
        },
        methods:{
            getlists(){
                this.$axios.get(`http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId=${this.id}&key=&sort=&timestamp=1542022289681&summary=c6f4e947c2f08e9139abc8c004bb364e&platform_code=H5`).then(response =>{
                    
                    console.log(response);
                    this.lists = response.data;
                    console.log(this.lists)
                },response =>{
                                  console.log("获取信息失败");
                                  console.log(response);
                              }
                )
           },
           toxq(id,id2){
                console.log(id,id2)
                this.$router.push({name:"Xiangqingye",params:{curid:id,xqid:id2}})
           }
          
      }
          
      
    } 
</script
<style>
ul li{

list-style: none;

margin:auto;

}

</style>