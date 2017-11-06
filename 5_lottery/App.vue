<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="app">
    <h1>{{title}}</h1>
    <ul>
      <li v-for="item in items" v-bind:class="{selected:item.isSelected}">
        {{item.num}}
      </li>
    </ul>
    <button v-on:click="getRandNum">抽奖</button>
  </div>
</template>

<script>
  import Store from './Store.js'

  export default {
    data:function () {
      return{
        title:'This is a lottery system.',
        items:[{num:1,isSelected:false},
          {num:2,isSelected:false},
          {num:3,isSelected:false},
          {num:4,isSelected:false},
          {num:5,isSelected:false},
          {num:6,isSelected:false},
          {num:7,isSelected:false},
          {num:8,isSelected:false},
          {num:9,isSelected:false}
        ],
      }
    },

    watch:{
      items:{
        handler:function (items) {
          Store.save(items)
        },
        deep:true
      }
    },

    methods:{
      //生成1-10的随机数
      getRandNum:function () {
        for(var i=0;i<9;i++){
          if(this.items[i].isSelected==false) {break}
          if(i==8&&this.items[i].isSelected==true) {
            window.alert("不可再次抽奖！")
            return false //只有return的话，只能跳出if语句
          }
        }
        while(true){
          var rnum=Math.ceil(Math.random()*10)
          if(rnum!=10&&this.items[rnum-1].isSelected==false){
            this.items[rnum-1].isSelected=true
            window.alert("恭喜，您抽到了"+rnum+"元！")
            break
          }
        }
      },
    }
  }
</script>

<style>
  .selected{
    background-color: rgba(0,0,0,0.20);
    //color: darkgray;
  }
  html{
    height: 100%;
  }

  h1{
    text-align: center;
    color: rgba(0,0,0,0.60);
  }

  body{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  li{
    height:60px;
    width: 60px;
    float: left;
    list-style-type: none;
    border:solid 2px;
    border-color: darkgray;
    line-height: 60px;
    text-align: center;
    margin-right: 5px;
  }

  #app{
    margin-top: -100px;
    text-align: center;
  }

  button{
    margin-top: 30px;
    height:50px;
    width:100px;
    background-color: #FFF;
    border:solid 1px;
    border-color: rgba(0,0,0,0.60);
    border-radius: 20%;
    color: rgba(0,0,0,0.60);
    text-align: center;
    vertical-align: middle;
    font-size: large;
    font-weight: 500;
  }
</style>
