/**
 * Created by martintornqvist on 2016-01-03.
 */
megamanGame.Game = function(game){

};

megamanGame.Game.prototype = {
    create: function(){
        this.background = this.add.sprite(0,0, 'gameBackground');
        this.music = this.add.audio('gameMusic');
        this.music.play();
    },

    update: function(){

    },

    quitGame: function(){
        this.state.start('MainMenu');
    }
}