import Phaser from 'phaser';
import Projectile from '../attacks/Projectile';

class ChestMan extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y) {
		super(scene, x, y, 'ChestMan');

		scene.add.existing(this);
		scene.physics.add.existing(this);

		

		this.init();
		this.initEvents();
	}

	init() {
		this.gravity = 0;
		this.ChestManSpeed = 200;
		this.cursors = this.scene.input.keyboard.createCursorKeys();
		this.previousSpeed;
		this.setSize(this.width - 40, this.height - 45);


		this.keys = this.scene.input.keyboard.addKeys('W,A,S,D');

		this.setCollideWorldBounds(true);

		this.scene.input.keyboard.on('keydown-Q', () => {
			const projectile = new Projectile(this.scene, this.x, this.y, 'bullet');
			projectile.fire();
		})
	}

	initEvents() {
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this)
	}

	update() {
	

		this.setScale(.3);

		const { left, right, up, down } = this.cursors;

		// move left and right
		if (left.isDown) {
			this.setVelocityX(-this.ChestManSpeed);
			console.log('a');
			this.rotation = -.5;
		} else if (right.isDown) {
			this.setVelocityX(this.ChestManSpeed);
			this.rotation = .5;
			console.log('d')
		} else {
			this.setVelocityX(0);
			this.rotation = 0;
		}

		// jump with up arrow
		if (up.isDown) {
			this.setVelocityY(-this.ChestManSpeed);
		} else if (down.isDown) {
			this.setVelocityY(this.ChestManSpeed);
		} else {
			this.setVelocityY(0);
		}
		
	}

	addCollider(otherGameObject, callback) {
		this.scene.physics.add.collider(this, otherGameObject, callback, null, this);
	}
}

export default ChestMan;