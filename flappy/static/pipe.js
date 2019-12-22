function Pipe() {
    this.top = random(height/2);
    this.bottom = height - this.top - 250;//random(height/2);
    this.x = width;
    this.w = 20;
    this.speed = 2;

    this.highlight = false;

    this.show = function() {
        fill(255);
        if (this.highlight){
            fill(255, 0, 0);
        }
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height-this.bottom, this.w, this.bottom);
    }

    this.update = function() {
        this.x -= this.speed;
    }

    this.ofscreen = function() {
        if (this.x < -this.w) {
            return true;
        } else {
            return false;
        }
    }

    this.hits = function(bird) {
        if (bird.y < this.top || bird.y + 80 > height - this.bottom){
            if (bird.x + 80 > this.x && bird.x < this.x + this.w){
                this.highlight = true;
                return true;
            }
        }
        this.highlight = false;
        return false;
    }
}
