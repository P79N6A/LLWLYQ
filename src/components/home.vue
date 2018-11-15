<template>
<div class="home">

    <div class="nav">
      <mt-button size="small" @click.native.prevent="active = 'tab-container1'" class="z1" >推荐</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container2'" class="z1">海外</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container3'" class="z1">女士</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container4'" class="z1">男士</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container5'" class="z1">美妆</mt-button>
    </div>
    
    <div class="page-tab-container">
    <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="tab-container1">
          
          <div class="diu">
    <a class="hei">登录</a>
    <div class="zz">
        <input type="search" class="zzz " placeholder="雅诗兰黛照亮你的美" style="color:white;" >
    </div>
    <a class="mui-icon mui-icon-locked heiya"></a>
</div>

 
   <div class="swiper-container swiper-container-horizontal">
       <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-1600px, 0px, 0px);">
        <div class="swiper-slide blue-slide" style="width: 800px;">
        <img src="../img/1.jpg" class="im1"><p class="pp1">新人福利专区</p><p class="pp2">¥2600 新客专享优惠券</p><p class="pp3">点击使用</p></div>
        <div class="swiper-slide red-slide swiper-slide-prev" style="width: 800px;">
            <img src="../img/2.jpg" class="im1"><p class="pp1">DOLCE&GABBANA</p><p class="pp2">因你变得与众不同</p></div>
            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
      </div>
    </div>
   

     
          <ul class="listsss"  v-for=" item in resData.lists" :key="item.id" style="padding:0;">
              <li><b>{{item.name}}</b></li>
             
                 <li class="L1" v-for="i in item.events" :key="i.id" @click="tolist(i.categoryId)"><img :src="i.imageUrl"><p class="p1"> {{i.chineseName}}</p> <p class="p2">{{i.englishName}} </p><p class="p3">{{i.discountText}}</p> </li>  
          </ul>
          <div class="ff">欢迎来到小肥仔服装商城</div>
     
    
  

</mt-tab-container-item>

        <mt-tab-container-item id="tab-container2">
          <!-- cell组件 -->
          <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
        </mt-tab-container-item>

        <mt-tab-container-item id="tab-container3">
          <!-- cell组件 -->
          <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
        </mt-tab-container-item>

         <mt-tab-container-item id="tab-container4">
          <!-- cell组件 -->
          <mt-cell v-for="n in 2" title="tab-container 4"></mt-cell>
        </mt-tab-container-item>

         <mt-tab-container-item id="tab-container5">
          <!-- cell组件 -->
          <mt-cell v-for="n in 1" title="tab-container 5"></mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>



</div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
  export default {   
    mounted(){
        var mySwiper = new Swiper('.swiper-container', {
          autoplay:3000,
          speed:300,
          loop:true,
        })
    },
    name: 'page-tab-container',
    name:'listsss',
    data() {
      return {
        active: 'tab-container1',
        resData:[],
        lists:[]
      }
    },
    created(){
    this.doGet();
    },
    methods:{
        doGet(){
          this.$axios.get("http://www.mei.com/appapi/home/eventForH5?params=%7B%7D&timestamp=1541912900086&summary=445aed26c2403f4500c76f14e6146ad2&platform_code=H5")
                .then(response =>{
                    
                    console.log("获取信息成功");
                    console.log(response);
                    this.resData = response.data;


                },response =>{
                                  console.log("获取信息失败");
                                  console.log(response);
                              }
                )
           },
           tolist(id){
              this.$router.push("/home/lists"+id)
           }
          
      }


  }
</script>

<style>
.diu{
    height:30px;
    z-index:5;
    position:absolute;
    width:100%;
    height:30px;

}
.hei{
    float:left;
    font-size:12px;
    color:#fff;
    margin-top:10px;
    margin-left:8px;
}
.zz{
    float:left; 
    position:absolute;
    margin-left:48px;
    height:28px;
    margin-top:5px;
    color:white;

}

.zzz{
   font-size:5px;
   color:black;
}
.heiya{
    float:right;
    font-size:25px;
    color:#fff;
    margin-top:8px;
    margin-right:5px;
}

.im1{
    width:100%;
    height:100%;

}

.nav{
  position:absolute;
  top:45px;
  z-index:6;
  height:20px;
  background-color:rgba(0,0,0,0);
  margin-left:5px;
}
.z1{
  width:50px;
  height:20px;
  background-color:rgba(0,0,0,0);
  color:white;
  BackColor:#FFE0C0;
  margin-left:8px;
}
.swiper-container{
  height:380px;

}
ul li{

list-style: none;
width:90%;
margin:auto;

},
.listsss{
  padding:0;
    
}


img{
  width:100%;
  height:177px;
}
.L1{
  position:relative;
}
.p1{
  position:absolute;
  bottom:20%;
  left:5%;
  z-index:10;
  color:white;
 
}
.p2{
  position:absolute;
  bottom:10%;
  left:5%;
  z-index:10;
  color:white;

}

.p3{
  position:absolute;
  bottom:0%;
  left:5%;
  z-index:10;
  color:white;
  font-size:10px;
 
}
.pp1{
  
  position: absolute;
    left: 50%;
    top: 70%;
    transform: translate(-50%, -70%);
  z-index:10;
  color:white;
  font-size:18px;
}
.pp2{
  position: absolute;left: 50%;top: 76%;transform: translate(-50%, -80%);
  z-index:10;
  color:white;
  font-size:14px;
}
.pp3{
  position: absolute;
    left: 50%;
    top: 81%;
    transform: translate(-50%, -80%);
  z-index:10;
  color:white;
  font-size:10px;
}
.ff{
  margin:20px 0;
}
*{
  touch-action:pan-y;
}


</style>
