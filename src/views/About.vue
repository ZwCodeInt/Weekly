<template>
  <div class="about">
    <div class="aboutTitle">
        <router-link to="/"  class="toHome" ><Icon type="ios-arrow-back" size="24"/></router-link>
        关于我们
    </div>
    <div class="carousel-wrap" id="carousel">
    
      <transition-group tag="ul" class='slide-ul' name="list">
        <li v-for="(list,index) in slideList" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
          <a :href="list.clickUrl" >
            <img :src="list.image" :alt="list.desc">
          </a>
        </li>
      </transition-group>
    
      <div class="carousel-items">
        <span v-for="(item,index) in slideList.length" :key="index" :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
      </div>
</div>
    <Collapse v-model="value1">
        <Panel name="1">
            公司简介
            <p slot="content">中原集團創立於一九七八年，是一家以房地產代理業務為主，涉足物業管理、測量估價、按揭代理、資產管理等多個領域的大型綜合性企業，旗下擁有旗艦品牌中原地產，及利嘉閣地產、寶原地產、森拓普、等多個子品牌，是房地產代理行業及相關服務領域的先行者和市場引領者。中原集團立足香港，以服務中國內地、香港及澳門三地的房地產市場為業務發展核心，經過三十餘年發展，已經在三十九個城市成立分公司，業務幅射至全國過百城市。自賭權開放後，澳門經濟日益蓬勃，而地產市道更是一片暢旺。中原很早便洞悉到澳門的商機必定無限，故已於03年作出全面部署，並於04年10月正式成立中原(澳門)地產代理有限公司。澳門中原地產成立後，一直推動澳門房地產市場發展，秉承“不炒賣，不吃價”的集團傳統，全心全意為客戶提供最全面貼心的服務，同時透過不同的渠道和途徑發佈最新的市場信息，提高市場的透明度，優化行業運作，在澳門樹立起優良的品牌。
隨著橫琴發展一日千里，澳門中原地產洞悉橫琴新區的發展前景，2015年率先成立中原橫琴分支部門，透過集團的強大網路，發揮中港澳聯動優勢，力爭為各客戶開拓更多投資商機。定必可為各方客戶開拓更多投資商機
中原澳門及橫琴無論在專案策劃、統籌、市場推廣、一手及二手買賣等方面都有豐富的經驗，憑著領先的市場觸覺及專業獨到的市場策略，不但得到各大發展商的大力支持，而且更獲得業主及客戶的一致信任，穩占市場龍頭地位。</p>
        </Panel>
        <Panel name="2">
            招聘信息
            <p slot="content">港澳珠接待专员/港澳珠营销专员</p>
            <p slot="content">1.负责举办各类展览</p>
            <p slot="content">2.接待港珠澳大桥引来的庞大客群</p>
            <p slot="content">3.发动相关购房团活动</p>
            <p slot="content">4.累积及收集横琴地区的房源</p>
            <p slot="content">5.专科或以上学历，市场营销专业 ,具有房地产经验者优先；</p>
            <p slot="content">6.懂粤语、国语及良好的英文口语；</p>
        </Panel>
        <Panel name="3">
            版权所有
            <p slot="content">Copyright ©2017 Centanet.com 版权所有  沪ICP备10013941号-1</p>
        </Panel>
        <Panel name="4">
            联系我们 / 合作
            <p slot="content">更多咨询请致电：13112361985</p>
            <p slot="content">或发邮件到：2522594977@qq.com</p>
        </Panel>
    </Collapse>
  </div>
</template>
<script>
export default {
  data () {
      return {
          value1: '0',
          // imgsArray: ["https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg","https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg","https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg"],
          slideList: [
              {
                  "clickUrl": "#",
                  "desc": "nhwc",
                  // "image": "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg"
                  "image": require("@/assets/4.jpg")
              },
              {
                  "clickUrl": "#",
                  "desc": "hxrj",
                  // "image": "https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg"
                  "image": require("@/assets/2.jpg")
              },
              {
                  "clickUrl": "#",
                  "desc": "rsdh",
                  // "image": "https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg"
                  "image": require("@/assets/3.jpg")
              }
          ],
          currentIndex: 0,
          timer: ''
      }
  },
methods: {
        go() {
            this.timer = setInterval(() => {
                this.autoPlay()
            }, 4000)
        },
        stop() {
            clearInterval(this.timer)
            this.timer = null
        },
        change(index) {
            this.currentIndex = index
        },
        autoPlay() {
            this.currentIndex++
            if (this.currentIndex > this.slideList.length - 1) {
                this.currentIndex = 0
            }
        }
    },
    created() {
        this.$nextTick(() => {
            this.timer = setInterval(() => {
                this.autoPlay()
            }, 4000)
        })
    }

}


</script>
<style>
  .about{
    
    background: #eaf1fe;
    height: 100%;
  }
  .aboutTitle {
        height: 4rem;
        line-height: 4rem;
        font-size: 1.4rem;
        background: #8894c4;
        color: white;
        text-align: center;
        position: relative;
  }
  .toHome {
      position: absolute;
      left: 1rem;
      color: white;       
  }
    
  

</style>
<style  scoped>
.carousel-wrap {
  position: relative;
  min-height: 30vh;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
}

.slide-ul {
  width: 100%;
  height: 100%;
}
.slide-ul li {
    position: absolute;
    width: 100%;
    height: 100%; 
}
.slide-ul li img {
    width: 100%;
    height: 100%;
  
}
.carousel-items {
  position: absolute;
  z-index: 10;
  bottom: 2vh;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 0;
  
  
}
.carousel-items span {
    display: inline-block;
    height: 6px;
    width: 30px;
    margin: 0 3px;
    background-color: #b2b2b2;
    cursor: pointer;
  }
  .carousel-items .active {
    background-color: brown;
  }
  .list-enter-to {
    transition: all 1s ease;
    transform: translateX(0);
  }

  .list-leave-active {
    transition: all 1s ease;
    transform: translateX(-100%)
  }

  .list-enter {
    transform: translateX(100%)
  }

  .list-leave {
    transform: translateX(0)
  }
</style>
