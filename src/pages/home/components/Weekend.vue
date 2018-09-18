<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul v-for="item of recommendList" :key="item.id">
      <li class="item border-bottom">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg',
        title: '北京欢乐谷',
        desc: '北京欢乐谷北京欢乐谷北京欢乐谷北京欢乐谷北京欢乐谷北京欢乐谷'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg',
        title: '北京野生动物园',
        desc: '北京野生动物园北京野生动物园北京野生动物园北京野生动物园'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg',
        title: '故宫',
        desc: '故宫故宫故宫故宫故宫故宫'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg',
        title: '世界公园',
        desc: '世界公园'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
    .item-img
      width: 100%
  .item-info
    min-width:0
    flex: 1
    padding: .1rem
  .item-title
    line-height: .54rem
    font-sze: .32rem
    ellipsis()
  .item-desc
    line-height: .4rem
    color: #ccc
    ellipsis()
</style>
