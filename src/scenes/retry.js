import Button from "../js/button.js";

var score;

//se crean los botones, el logo y el fondo del menú derrota
export class Retry extends Phaser.Scene {
  constructor() {
    super("Retry");
  }

  init(data) {
    // recupera el valor SCORE enviado como dato al inicio de la escena
    score = data.score;
  }

  create() {
    this.add
      .image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        "gameoverfondo" // Fondo del menú derrota
      )
      .setScale(1.1);
    
    this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY / 1.5,
      "gameover"

    );
    // puntaje maximo alcanzado:
    this.add
      .text(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        `Puntaje alcanzado: ${score}`
      )
      .setOrigin(0.5);

    // replay button
    const boton = new Button(
      this.cameras.main.centerX,
      this.cameras.main.centerY + this.cameras.main.centerY / 3,
      "Retry",
      this,
      () => {
        // pasar a la escena Play
        this.scene.start("MainMenu");
      }
    );
  }
}
