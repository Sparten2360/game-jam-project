import Phaser from 'phaser';

class LegMan extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y) {
		super(scene, x, y, 'LegMan');

		scene.add.existing(this);
		scene.physics.add.existing(this);

		this.init();
		this.initEvents();
	}

	init() {
		this.gravity = 800;
		this.LegManSpeed = 200;
		this.cursors = this.scene.input.keyboard.createCursorKeys();
		this.setSize(this.width - 40, this.height - 60);

		this.body.setGravityY(this.gravity);
		//this.setCollideWorldBounds(true);

		this.anims.create({
			key: 'walk',
			frames: this.anims.generateFrameNumbers('LegMan', { frames: [ 0, 1, 2, 3, 4, 5] }),
			frameRate: 8,
			repeat: -1
		    });

		    this.anims.create({
			key: 'idle',
			frames: this.anims.generateFrameNumbers('LegMan', { frames: [3] }),
			frameRate: 8,
			repeat: -1
		    });
		}

	initEvents() {
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this)
	}

	update() {
		this.setScale(1);

		this.keys = this.scene.input.keyboard.addKeys("W,A,S,D");
		const onFloor = this.body.onFloor();

		if (this.keys.A.isDown) {
			this.setVelocityX(-this.LegManSpeed);
			console.log('a');
			this.setFlipX(true);
		} else if (this.keys.D.isDown) {
			this.setVelocityX(this.LegManSpeed);
			this.setFlipX(false)
			console.log('d')
		} else {
			this.setVelocityX(0);
		}

		if(this.body.velocity.x == 0){
			this.play('walk')
		}
		else{
			this.stop;
		}
		
		
		// flying
		if (this.keys.W.isDown && onFloor) {
			this.setVelocityY(-this.LegManSpeed * 2);
			console.log('w');
		}
		
	}

	addCollider(otherGameObject, callback) {
		this.scene.physics.add.collider(this, otherGameObject, callback, null, this);
	}
}

export default LegMan;