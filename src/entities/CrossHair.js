import Phaser from 'phaser';

class CrosshHair extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y) {
		super(scene, x, y, 'CrossHair');

		scene.add.existing(this);
		scene.physics.add.existing(this);

		this.init();
		this.initEvents();
	}

	init() {
		this.input.on('pointerdown', function (pointer) {

            this.input.mouse.requestPointerLock();
    
        }, this);
        this.input.on('pointermove', function (pointer) {

            if (this.input.mouse.locked)
            {
                sprite.x += pointer.movementX;
                sprite.y += pointer.movementY;
    
    
                // Force the sprite to stay on screen
                sprite.x = Phaser.Math.Wrap(sprite.x, 0, game.renderer.width);
                sprite.y = Phaser.Math.Wrap(sprite.y, 0, game.renderer.height);
    
                if (pointer.movementX > 0) { sprite.setRotation(0.1); }
                else if (pointer.movementX < 0) { sprite.setRotation(-0.1); }
                else { sprite.setRotation(0); }
    
                updateLockText(true);
            }
        }, this);
		}
        

	initEvents() {
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this)
	}

	update() {
		this.setScale(1);	
	}
}

export default CrossHair;