<template>
    <div class="container">
        <div class="box" v-for='post in posts' :key='post.id'>
            <div class="imgDiv">
                <img :src= post.image>
            </div>
            <h3 class="urunHeader">{{post.urunAdi}}</h3>
            <p>{{post.urunAciklama}}</p>
            <div class="urunFiyatDiv">
                <span><b>{{post.fiyat}}</b></span>
            </div>
            <div class="sepeteGitIcon">
                <span><img src="src/assets/sepeticon.png" alt="yok" style="width:30px;"></span>
            </div>
            <div class="ucretsizKargo">
                <span><b>ÜCRETSİZ KARGO</b></span>
            </div>
        </div>
    </div>
</template>

<script>

   import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { fas } from '@fortawesome/free-solid-svg-icons'
    library.add(fas);
    export default{
        components:{
            FontAwesomeIcon
        },
        computed: {
            posts() {
            return this.$store.state.posts
            }
        },
        mounted() {
            this.$store.dispatch("getPosts");
        }
}
</script>
<style scoped>
.container{
    display: inline-block;
    width: 79.1%;
    background: #e8e8e8;
}
.box{
    display: inline-block;
  width: 270px;
  /*border: 1px solid gray;*/
  position: relative;
  margin: 35px;
  background: white;
}
.imgDiv{
    width: 100%;
}
.imgDiv img{
    width: 100%;
}
.urunHeader{
    text-align: center;
    color: #14569b;
}
.urunHeader:hover{
    text-decoration: underline;
    cursor: pointer;
}
.box p{
    text-align: center;
    padding-bottom: 45px;
    color: #7389a3;
}
.urunFiyatDiv{
    position: absolute;
    bottom: 0;
    left: 10px;
    color: #444448;
    font-size: 20px;
    margin: 15px;
}
.sepeteGitIcon{
    position: absolute;
    bottom: 0;
    right: 15px;
    color: #ff7920;
    margin: 0 5px 15px 0;
}
.sepeteGitIcon:hover{
    cursor: pointer;
}
.ucretsizKargo{
    position: absolute;
    top: 0;
    right: -5px;
    width: 70px;
    font-size: 12px;
    height: auto;
    background: #1bbc9c;
    color: white;
    text-align: center;
    padding: 7px 0;
}
.ucretsizKargo::after{
   content: "";
    position: absolute;
    display: block;
    top: 100%;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 5px 5px 0;
    border-color: transparent #6c6c7c transparent transparent;
}
.yeniUrun{
    position: absolute;
    top: 10px;
    left: -5px;
    width: 70px;
    font-size: 12px;
    padding: 7px 0;
     box-shadow: 3px 3px #888888;
    background: #ff7920;
    color: white;
    text-align: center;
}
.yeniUrun::before{
    content: "";
    position: absolute;
    display: block;
    top: 100%;
    left: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 5px 5px 0;
    border-color: transparent #6c6c7c transparent transparent;
}

</style>