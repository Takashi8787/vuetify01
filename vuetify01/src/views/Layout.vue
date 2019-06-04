<template>
<v-container style="background-color:gray;">

    <!-- <div class="containerdesu">
        aaa
        <div>sdafsadf</div>
        <div>sdafsadf</div>
        <div>sdafsadf</div>
    </div> -->

    <br>
    <hr>
    <div style="background-color:blue;">ブイコンテイナ01</div>
    <v-layout align-center style="background-color:skyblue;">
        <v-flex mx-4  style="background-color:orange;">
            <div class="white--text" >ブイレイアウト01</div>
            <div>ブイレイアウト02</div>
        </v-flex>
        <v-flex mx-4 class="green">
            <div>ブイフレックスxs01</div>
            <div>ブイフレックスxs0a</div>
        </v-flex>
        <v-flex class="red darken-4 white--text">
            <div class=".display-4">ブイフレックス01</div>
            <div>ブイフレックス02</div>
        </v-flex>
    </v-layout>

    <blockquote class="blockquote purple lighten-4">
        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>sadfkjas;doiajsifddsafjdsaifeiafijafij</p>
    </blockquote>



</v-container>

</template>


<style>

.v-layout{
    background-color: black;
}


.containerdesu{
  width:400px;
  height:300px;
  padding:10px;
  background-color:#f3d68a;
  display:flex;
  /* flex-direction: column; */
}
.containerdesu div{
  background-color:#fff;
  margin:10px;
  width:80px;
  height:20px;
}

/* v-layout{
    background-color:skyblue; 
} */
</style>



<script>
</script>









    <!-- 登録フォームスタート -->
  <!-- <v-card class="pa-4">
  <v-card-title class="font-weight-bold">新規会員登録フォーム(3分で完了)</v-card-title>
  <v-card-text>WINDIIキャリアに登録すると、スキルシートを簡単にPDFに出力したり、企業からのオファーが届くようになります！</v-card-text>
  <v-card-title>稼働する条件や、空き状況</v-card-title>
  <v-btn outline round class="green green--text text--darken-4">2万円〜</v-btn>
  <v-btn outline round class="green green--text text--darken-4">2.5万円〜</v-btn>
  <v-btn outline round class="green green--text text--darken-4">3万円〜</v-btn>
  <v-btn outline round class="green green--text text--darken-4">3.5万円〜</v-btn>
  <v-btn outline round class="green green--text text--darken-4">4万円〜</v-btn>
  <v-btn outline round class="green green--text text--darken-4">それ以上</v-btn>
  <v-card-title>稼働開始可能日時</v-card-title>
  <v-select class="px-2"
          solo
          type="date"
        ></v-select>
        <v-card-title>週に何日稼働できそうですか？</v-card-title>
  <v-btn outline round class="green">週2</v-btn>
  <v-btn outline round class="green">週3</v-btn>
  <v-btn outline round class="green">週4</v-btn>
  <v-btn outline round class="green">週5</v-btn>
  <v-card-title>働き方の条件を教えてください</v-card-title>
  <v-btn outline round class="green">常駐</v-btn>
  <v-btn outline round class="green">一部常駐OK</v-btn>
  <v-btn outline round class="green">フルリモート</v-btn>
  <v-card-title>出勤（打ち合わせ）可能エリアを選択してください</v-card-title>
  <v-btn outline round class="green">首都圏</v-btn>
  <v-btn outline round class="green">関西</v-btn>
  <v-btn outline round class="green">その他</v-btn>
  <v-card-title>職歴について教えてください</v-card-title>
  <v-btn outline round class="green">〜1年</v-btn>
  <v-btn outline round class="green">1年</v-btn>
  <v-btn outline round class="green">2年</v-btn>
  <v-btn outline round class="green">3〜5年</v-btn>
  <v-btn outline round class="green">それ以上</v-btn>
  <v-card-title>実務可能な技術を選択してください</v-card-title>
  <v-btn outline round class="green">JaVa</v-btn>
  <v-btn outline round class="green">PHP</v-btn>
  <v-btn outline round class="green">Python</v-btn>
  <v-btn outline round class="green">C#</v-btn>
  <v-btn outline round class="green">Ruby</v-btn>
  <v-btn outline round class="green">React.js</v-btn>
  <v-btn outline round class="green">Angular</v-btn>
  <v-btn outline round class="green">Vue.js</v-btn>
  <v-btn outline round class="green">AWS</v-btn>
  <v-btn outline round class="green">Docker</v-btn>
  <v-btn outline round class="green">Laravel</v-btn>
  <v-card-title>簡単にアピールポイント教えてください。</v-card-title>
  <v-textarea
          class="mt-0"
          solo
          label="Solo textarea"
          auto-grow
          rows="1"
          value=""
          placeholder="独学で勉強をしてきたので、詰まっても自己解決するのが得意です. "
        ></v-textarea>
  </v-card> -->
  <!-- 登録フォームエンド -->

<!-- 画像イメージの表示 -->
<!-- <v-layout>
    <v-flex xs12>
        <v-card>
            <v-img
                src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                aspect-ratio="2.75"
            ></v-img>

            <v-card-title primary-title>
                <div>
                <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                <div> {{ card_text }} </div>
                </div>
            </v-card-title>

            <v-card-actions>
                <v-btn flat color="orange">Share</v-btn>
                <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
        </v-card>
        <v-card>
            <v-img
                src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                aspect-ratio="2.75"
            ></v-img>

            <v-card-title primary-title>
                <div>
                <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                <div> {{ card_text }} </div>
                </div>
            </v-card-title>

            <v-card-actions>
                <v-btn flat color="pink">Share</v-btn>
                <v-btn flat color="pink">Explore</v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
</v-layout> -->


