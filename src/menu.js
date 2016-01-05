/**
 * Created by martintornqvist on 2016-01-03.
 */

megamanGame.MainMenu = function(game){


};

megamanGame.MainMenu.prototype = {
    create: function() {
        //Plays background music on title screen
        this.music = this.add.audio('titleMusic');
        //this.music.play();

        //Logo above start button
        this.logo = this.add.image(110,0,'megamanLogo');

        //Button to start the game
        this.startButton = this.add.button(this.world.centerX, this.world.centerY +100, 'startButton', this.startGame, this);
        this.startButton.anchor.setTo(0.5,0.5);
    },

    update: function() {

    },

    startGame: function(pointer){
        this.music.stop();
        this.state.start('Game');
    }
};