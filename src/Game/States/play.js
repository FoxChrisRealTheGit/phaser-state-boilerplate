export default function play(){
    return{
        create: function(){
            this.player = this.game.add.sprite(16, 16, 'player');
            this.game.physics.enable(this.player, window.Phaser.Physics.ARCADE);
            this.player.body.collideWorldBounds = true;
            this.win = this.game.add.sprite(256, 256, 'win');
            this.game.physics.enable(this.win, window.Phaser.Physics.ARCADE);
        },
        update: function(){
            this.game.physics.arcade.overlap(this.player, this.win, this.Win, null, this);

            if(this.game.input.keyboard.isDown(window.Phaser.Keyboard.A)){
                this.player.body.velocity.x = -175;
            } else if (this.game.input.keyboard.isDown(window.Phaser.Keyboard.D)){
                this.player.body.velocity.x = 175;
            } else{
                this.player.body.velocity.x = 0;
            }
            if(this.game.input.keyboard.isDown(window.Phaser.Keyboard.W)){
                this.player.body.velocity.y = -175;
            } else if (this.game.input.keyboard.isDown(window.Phaser.Keyboard.S)){
                this.player.body.velocity.y = 175;
            } else{
                this.player.body.velocity.y = 0;
            }
        },
        Win: function(){
            this.game.state.start('win');
        } 
    }
}