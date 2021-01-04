<template>
  <div>
    <van-sticky>
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    </van-sticky>
    <van-swipe class="my-swipe" :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <van-swipe class="my-swipe" indicator-color="white">
      <van-swipe-item>
        <van-grid square>
          <van-grid-item v-for="value in 8" :key="value" icon="photo-o" clickable="true" text="文字" />
        </van-grid>
      </van-swipe-item>
      <van-swipe-item>
        <van-grid square>
          <van-grid-item v-for="value in 8" :key="value" icon="photo-o" clickable="true" text="文字" />
        </van-grid>
      </van-swipe-item>
    </van-swipe>
    <lazy-component>
      <van-row type="flex" justify="space-around">
        <van-col span="11">
          <div class="commodity-panel">
            <van-image radius="5" width="100%" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <div class="commodity-info van-card__content">
              <div class="card__title">
                <span>阿斯兰的咖啡机阿拉丁解放啦会计师的看法老地方</span>
              </div>
              <div class="van-card__bottom">
                <span class="van-card__price-currency">¥</span><span class="van-card__price-integer">2</span>.<span class="van-card__price-decimal">00</span>
              </div>
            </div>
          </div>
          <div class="commodity-panel">
            <van-image radius="5" width="100%" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <div class="commodity-info van-card__content">
              <div class="card__title">
                <span>阿斯兰的咖啡机阿拉丁解放啦会计师的看法老地方</span>
              </div>
              <div class="van-card__bottom">
                <span class="van-card__price-currency">¥</span><span class="van-card__price-integer">2</span>.<span class="van-card__price-decimal">00</span>
              </div>
            </div>
          </div>
        </van-col>
        <van-col span="11">
          <div class="commodity-panel">
            <van-image width="100%" height="150" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <div class="card__title">
              <span>阿斯兰的咖啡机阿拉丁解放啦会计师的看法老地方</span>
            </div>
            <div class="van-card__bottom">
              <span class="van-card__price-currency">¥</span><span class="van-card__price-integer">2</span>.<span class="van-card__price-decimal">00</span>
            </div>
          </div>
          <div class="commodity-panel">
            <van-image radius="5" width="100%" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <div class="commodity-info van-card__content">
              <div class="card__title">
                <span>阿斯兰的咖啡机阿拉丁解放啦会计师的看法老地方</span>
              </div>
              <div class="van-card__bottom">
                <span class="van-card__price-currency">¥</span><span class="van-card__price-integer">2</span>.<span class="van-card__price-decimal">00</span>
              </div>
            </div>
          </div>
        </van-col>
      </van-row>
    </lazy-component>
  </div>
</template>

<script>
import {
	Search, Col, Row, Swipe, SwipeItem,Grid, GridItem,Image as VanImage,Sticky
} from 'vant';
export default {
	name: 'index',
  components: { [Search.name]:Search,[Col.name]:Col,[Row.name]:Row,[Swipe.name]:Swipe,[SwipeItem.name]:SwipeItem,[Grid.name]:Grid,[GridItem.name]:GridItem,[VanImage.name]:VanImage,[Sticky.name]:Sticky },
	data() {
		return {
		  value:'',
      images:[
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ]
    };
	}
}
</script>

<style>
.my-swipe .van-swipe-item img {
  height: 200px;
  text-align: center;
}
</style>
