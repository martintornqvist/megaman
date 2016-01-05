/**
 * Created by martintornqvist on 2016-01-03.
 */
megamanGame.Game = function(game){

    var score = 0;
    var scoreText;
    var scoreString = '';

};

megamanGame.Game.prototype = {
    create: function(){
        this.background = this.add.sprite(0,0, 'gameBackground');

        //In game music
        this.music = this.add.audio('gameMusic');
        this.music.play();

        //Scoreboard
        scoreText = this.add.text(16,16, 'Score: 0', {fontSize:'24px', fill:'#fff'});
        scoreString = 'Score: ';
    },

    update: function(){

    },

    quitGame: function(){
        this.state.start('MainMenu');
    }
}