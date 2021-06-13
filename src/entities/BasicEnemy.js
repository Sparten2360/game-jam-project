import Phaser, { DOWN } from 'phaser';

class BasicEnemy extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y) {
		super(scene, x, y, 'BasicEnemy');

		scene.add.existing(this);
		scene.physics.add.existing(this);

		

		this.init();
		this.initEvents();
	}

	init() {
		this.gravity = 0;
		this.BasicEnemySpeed = 200;
		this.cursors = this.scene.input.keyboard.createCursorKeys();
		this.previousSpeed;
		this.setSize(this.width - 40, this.height - 45);

		//this.setCollideWorldBounds(true);

		this.scene.anims.create({
			key: 'idle',
			frames: this.scene.anims.generateFrameNumbers('BasicEnemy', {start: 0, end: 5})
		})
	}

	initEvents() {
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this)
	}

	update() {
		this.setScale(2);

		//const { left, right, up, down } = this.cursors;

		this.setVelocityX(-this.BasicEnemySpeed);
		this.play('idle', true);
		
		
	}

	addCollider(otherGameObject, callback) {
		this.scene.physics.add.collider(this, otherGameObject, callback, null, this);
	}
}

export default BasicEnemy;