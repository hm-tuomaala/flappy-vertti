function Bird() {
    this.y = width/2;
    this.x = 100;

    this.gravity = 0.5;
    this.velocity = 0;

    this.show = function() {
        // fill(255);
        // ellipse(this.x, this.y, 16, 16);
        image(img, this.x, this.y);
    }

    this.lift = function() {
        this.velocity += -this.gravity*30;
    }

    this.update = function() {
        this.velocity += this.gravity;
        this.y += this.velocity;

        if (this.y > height - 40) {
            this.y = height - 40;
            this.velocity = 0;
        }

        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }

        //console.log(this.velocity)
        if (this.velocity > 10) {
            this.velocity = 10;
        }
        if (this.velocity < -10) {
            this.velocity = -10;
        }
    }
}
