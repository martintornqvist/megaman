/**
 * Created by martintornqvist on 2016-01-03.
 */

megamanGame.Preloader = function(game){
    //Check this
    this.background = null;
    this.ready = false;
};

megamanGame.Preloader.prototype = {
    preload: function(){

        //Menu items
        this.background = this.add.sprite(0,0, 'preloadBackground');
        this.load.audio('titleMusic', 'assets/sounds/mm-title.mp3');
        this.load.audio('gameMusic', 'assets/sounds/mm-gameplay1.MP3');

        //Add playbutton
        this.load.image('startButton', 'assets/boot/startgame.png');

        //Add character who moves when play-button is pressed, add delay on action?
    },

    create: function(){

    },

    update: function() {
        //Decode audio?
        if(this.cache.isSoundDecoded('titleMusic') && this.ready == false) {
            this.ready = true;
            this.state.start('MainMenu');
        }
    }
};