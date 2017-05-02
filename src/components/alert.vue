<template lang="html">
    <div class="alert">
        {{msg}}
        <button @click='alt'>click</button>
        <mt-popup
            v-model="popupVisible"
            position="right">
          
       </mt-popup>
       <mt-cell title="标题文字"></mt-cell>
<mt-cell title="标题文字" value="说明文字"></mt-cell>
       <div style="height:10rem;">
            <mt-swipe>
                    <mt-swipe-item>1</mt-swipe-item>
                    <mt-swipe-item>2</mt-swipe-item>
                    <mt-swipe-item>3</mt-swipe-item>
             </mt-swipe>

       </div>
        <mt-button size="large" type="default">default</mt-button>
        <mt-button type="primary">primary</mt-button>
        <mt-button type="danger">danger</mt-button>
        <mt-button plain>plain</mt-button>
        <mt-button icon="back">back</mt-button>
        <mt-button icon="more">更多</mt-button>
        <mt-cell
            title="标题文字"
            to="//github.com"
            is-link
            value="带链接">
            </mt-cell>
            <mt-cell title="标题文字" is-link>
            <span style="color: green">这里是元素</span>
            </mt-cell>
            <div style="height:20rem;">
                        <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom"  ref="loadmore">
                            <ul>
                                <li v-for="item in list">{{ item }}</li>
                            </ul>
                            </mt-loadmore>
            </div>
            

    </div>
</template>

<script>
import { MessageBox , Popup , Button ,InfiniteScroll ,Indicator  } from 'mint-ui';
export default {
    data () {
        return {
            msg :'ok',
            popupVisible:false,
            list:[1,2,3,4,5,6,7,8,9,10,11]
        }
    },
    methods:{
        console:function(){
                console.log(this.$ajax.postData);
                console.log(this.$lodash);
        },
        alt:function(){
            MessageBox({
                    title: '提示',
                    message: '确定执行此操作?',
                    showCancelButton: false
                    }).then(action => {
                        console.log('confirm');
                        Indicator.open('加载中...');
                    });
        },
        loadMore() {
                this.loading = true;
                setTimeout(() => {
                    let last = this.list[this.list.length - 1];
                    for (let i = 1; i <= 10; i++) {
                    this.list.push(last + i);
                    }
                    this.loading = false;
                }, 2500);
                },
        loadTop() {
              this.loading = true;
               setTimeout(() => {
                    let last = this.list[this.list.length - 1];
                    for (let i = 1; i <= 10; i++) {
                    this.list.push(last + i);
                    }
                    this.loading = false;
                }, 2500);
            this.$refs.loadmore.onTopLoaded();
            },
        loadBottom() {
              this.loading = true;
                  setTimeout(() => {
                    let last = this.list[this.list.length - 1];
                    for (let i = 1; i <= 10; i++) {
                    this.list.push(last + i);
                    }
                    this.loading = false;
                }, 2500);
            this.allLoaded = true;// 若数据已全部获取完毕
            this.$refs.loadmore.onBottomLoaded();
        }

    }
}
</script>

<style lang="css">
.alert{
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.mint-swipe-item{
    background:yellow;
}
</style>
