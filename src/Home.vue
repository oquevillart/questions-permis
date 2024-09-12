<template>
    <div class="question-list">
        <button class="question-btn" @click="(event) => chooseQuestion(event)" v-for="data in json" :key="data.name" :name=data.name :q1=data.q1 :q2=data.q2 :q3=data.q3 :r1=data.r1 :r2=data.r2 :r3=data.r3>{{data.name}}</button>
        <button class="question-btn rng-button" @click="chooseRandomQuestion()">??</button>
    </div>
    <div class="question-cards">
    </div>
    <div class="question-index"></div>
    <div class="cards">
        <div class="card" @click="(event) => flipCard(event)">
            <div class="content">
                <div class="front">
                    <h2>Q</h2>
                    <div>
                        <h3 class="q1-category">Vérification</h3>
                        <div class="q1 question"></div>
                    </div>
                    <div>
                        <h3 class="q2-category">Sécurité routière</h3>
                        <div class="q2 question"></div>
                    </div>
                    
                    <div>
                        <h3 class="q3-category">Premier secours</h3>
                        <div class="q3 question"></div>
                    </div>
                </div>
                <div class="back">
                    <h2>R</h2>
                    <div>
                        <h3 class="q1-category">Vérification</h3>
                        <div class="r1 reponse"></div>
                    </div>
                    <div>
                        <h3 class="q2-category">Sécurité routière</h3>
                        <div class="r2 reponse"></div>
                    </div>
                    <div>
                        <h3 class="q3-category">Premier secours</h3>
                        <div class="r3 reponse"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import myJson from './json/data.json';

    export default {
        methods: {
            
            chooseRandomQuestion() {
                let previousBtn = document.querySelector("button.active")
                if (previousBtn != null) {
                    previousBtn.classList.remove("active");
                }
                let rndInt = Math.floor(Math.random() * 66) + 1
                let q1 = document.querySelector(".q1");
                let q2 = document.querySelector(".q2");
                let q3 = document.querySelector(".q3");
                let r1 = document.querySelector(".r1");
                let r2 = document.querySelector(".r2");
                let r3 = document.querySelector(".r3");

                let cardContent = document.querySelector(".content");

                cardContent.classList.remove("flipped");

                let btn = document.querySelector(`[name|="${this.json[rndInt].name}"]`)
                btn.classList.add('active');

                q1.innerHTML = this.json[rndInt].q1;
                r1.innerHTML = this.json[rndInt].r1;

                q2.innerHTML = this.json[rndInt].q2;
                r2.innerHTML = this.json[rndInt].r2
                
                q3.innerHTML = this.json[rndInt].q3;
                r3.innerHTML = this.json[rndInt].r3
            },
            flipCard(event) {
                if (event.target.classList.contains("flipped") == false) {
                    event.target.classList.add("flipped")
                }
                else{
                    event.target.classList.remove("flipped")
                }
            },
            chooseQuestion(event) {
                let previousBtn = document.querySelector("button.active")
                if (previousBtn != null) {
                    previousBtn.classList.remove("active");
                }
                let q1 = document.querySelector(".q1");
                let q2 = document.querySelector(".q2");
                let q3 = document.querySelector(".q3");
                let r1 = document.querySelector(".r1");
                let r2 = document.querySelector(".r2");
                let r3 = document.querySelector(".r3");

                let cardContent = document.querySelector(".content");
                cardContent.classList.remove("flipped")

                let btn = document.querySelector(`[name|="${ event.target.getAttribute("name")}"]`)
                btn.classList.add('active');

                q1.innerHTML = event.target.getAttribute("q1");
                r1.innerHTML = event.target.getAttribute("r1");

                q2.innerHTML = event.target.getAttribute("q2");
                r2.innerHTML = event.target.getAttribute("r2");
                
                q3.innerHTML = event.target.getAttribute("q3");
                r3.innerHTML = event.target.getAttribute("r3");
            }
        },
        data() {
            return {
            json: myJson,
            };
        },
        mounted(){
            this.chooseRandomQuestion()
        }
    }


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
body{
    margin: 0;
    background-color: #fff;
    font-family: "Roboto", sans-serif;
}
.header{
    background-color: #313c82;
    
    padding: 15px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
}
.header a {
    text-decoration: none;
    color: #fff;
    transition: color .3s;
}
.header a:hover {
    text-decoration: none;
    color: #d6d6d6;
    transition: color .3s;
}
.question-list{
    width: 100vw;
    margin: 15px auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.question-btn{
    width: 40px;
    height: 32px;
    margin: 5px 15px;
    background-color: #fff;
    border-radius: 2px;
    border: 1px solid #313c82;
    color: #313c82;
    cursor: pointer;
    font-weight: 600;
    transition: all .4s;

}
.question-btn.active{
    background-color: #313c82;
    color: white;
    transition: all .4s;
}

.cards{
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 450px;
  margin-bottom: 15px;
}
.card {
  position: absolute;
  cursor: pointer;
  width: 300px;
  height: 450px;
  perspective: 500px;
}

.content {
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);

  transition: transform .3s;
  transform-style: preserve-3d;
}

.flipped {
  transform: rotateY( 180deg ) ;
  transition: transform 1s;
}

.front,
.back {
    position: absolute;
    height: 100%;
    width: 100%;
    background: white;
    border-radius: 5px;
    backface-visibility: hidden;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.back {
  transform: rotateY( 180deg );
}
h2{

    position: absolute;
    margin: 5px;
    top: 0;
    right: 0;
    padding: 5px;
    border-radius: 50%;
    background-color: #8bbbd6;
    font-size: 21px;
    width: 32px;
    height: 32px;
    text-align: center;
    line-height: 1.5em;
}
h3{
    margin: 10px 10px 5px 10px;
    font-size: 21px;
}
.question,.reponse{
    margin-left: 10px;
    margin-right: 10px;
}
.q1-category{
    color: #03446A;
}
.q2-category{
    color: rgb(248, 199, 39);
}
.q3-category{
    color: rgb(141, 206, 44);
}
</style>