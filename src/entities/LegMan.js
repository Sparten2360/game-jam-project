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
		}

	initEvents() {
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this)
	}

	update() {
		this.setScale(.15);

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