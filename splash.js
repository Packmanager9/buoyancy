



window.addEventListener('DOMContentLoaded', (event) => {

    let tutorial_canvas = document.getElementById("tutorial");
    let input = document.getElementById("load-input");
    let color1 = document.getElementById("color1");
    let color2 = document.getElementById("color2");
    let slide = document.getElementById("myRange");
    let slidey = document.getElementById("myRangey");
    let slide2 = document.getElementById("myRange2");
    let slidey2 = document.getElementById("myRangey2");
    let friction = document.getElementById("friction");
    let sysnet = document.getElementById("sysnet");
    let sysnety = document.getElementById("sysnety");
    let speedz = document.getElementById("speed");
    let xbutton = document.getElementById("load-u");
    let ybutton = document.getElementById("load-he");
    let chaosx = document.getElementById("chaos");
    let centerbutton = document.getElementById("center");
    let buttonbox = document.getElementById("go");

    let oldx = []
    let oldy = []

    let clicked = false

    let speedx = 1

    let tutorial_canvas_context = tutorial_canvas.getContext('2d');


    tutorial_canvas.style.background = "#00FFFF44"





    class Circle {
        constructor(x, y, radius, color, xmom = 0, ymom = 0, charge = 0) {
            this.x = x
            this.y = y
            this.radius = radius
            this.color = color
            this.xmom = xmom
            this.ymom = ymom
            this.charge = charge
        }

        draw(context) {
            context.lineWidth = 1

            context.strokeStyle = this.color
            if (this === donky) {
                context.strokeStyle = "red"
            }
            context.beginPath();
            context.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), true)
            context.fillStyle = this.color

            context.fill()
            context.stroke();


        }

        move() {

            if (this.xmom > 4.5) {

                this.xmom = 4.5

            }

            if (this.xmom < -4.5) {

                this.xmom = -4.5

            }
            if (this.ymom > 4.5) {

                this.ymom = 4.5

            }

            if (this.ymom < -4.5) {

                this.ymom = -4.5

            }


            if ((this.y + (this.radius - (this.radius * (((this.charge) / 1000))))) > water.y) {

                this.ymom *= 1 - (20000000 / 1000000000)
                this.xmom *= 1 - (10000000 / 1000000000)
            } else {
                this.ymom *= 1 - (20000000 / 1000000000)
                this.xmom *= 1 - (4000000 / 1000000000)
            }

            if (this.y + this.radius > tutorial_canvas.height) {
                this.y = tutorial_canvas.height - this.radius


            }




            this.x += this.xmom
            this.y += this.ymom

        }

    }


    class Rectangle {
        constructor(x, y, height, width, color) {
            this.x = x
            this.y = y
            this.height = height
            this.width = width
            this.color = color
        }
        draw(context) {
            context.fillStyle = this.color
            context.fillRect(this.x, this.y, this.width, this.height)
        }
    }

    let water = new Rectangle(0, 200, tutorial_canvas.height, tutorial_canvas.width, "#0000FF88")

    let ball = new Circle(tutorial_canvas.width / 2, tutorial_canvas.height / 2, 20, "#DD0000", 0, 0, 990)


    let balls = []

    balls.push(ball)


    let ballx = new Circle(tutorial_canvas.width / 4, tutorial_canvas.height / 2, 20, "#FF8800", 0, 0, 900)


    balls.push(ballx)

    ballx = new Circle(tutorial_canvas.width / 1.2, tutorial_canvas.height / 2, 10, "#88FF00", 0, 0, 800)


    balls.push(ballx)
    ballx = new Circle(tutorial_canvas.width / 2.6, tutorial_canvas.height / 2, 9, "#000000", 0, 0, 1501)


    balls.push(ballx)

    ballx = new Circle(tutorial_canvas.width / 5.6, tutorial_canvas.height / 2, 5, "#DDDD00", 0, 0, 750)


    balls.push(ballx)
    ballx = new Circle(tutorial_canvas.width / 9.6, tutorial_canvas.height / 2, 12, "#5555DD", 0, 0, 1001)


    balls.push(ballx)


    ballx = new Circle(tutorial_canvas.width / 1.1, tutorial_canvas.height / 2, 16, "#DDDDDD", 0, 0, 151)


    balls.push(ballx)



    ballx = new Circle(tutorial_canvas.width / 2.31, tutorial_canvas.height / 2, 7, "#999999", 0, 0, 10000)


    balls.push(ballx)

    ballx = new Circle(tutorial_canvas.width / 1.71, tutorial_canvas.height / 2, 10, "#00DDDD", 0, 0, 1021)


    balls.push(ballx)

    ballx = new Circle(tutorial_canvas.width / 1.31, tutorial_canvas.height / 2, 20, "#F88888", 0, 0, 430)


    balls.push(ballx)

    ballx = new Circle(tutorial_canvas.width / 3.21, tutorial_canvas.height / 2, 20, "#888FF8", 0, 0, 180)


    balls.push(ballx)

    let donky = new Circle(tutorial_canvas.width / 2.41, tutorial_canvas.height / 2, 7, "#999999", 0, 0, 1000)


    balls.push(donky)





    //track mouse position on mousemove
    var mousePosition;
    //track state of mousedown and up
    var isMouseDown;

    //reference to the canvas element
    var c = document.getElementById("tutorial");
    //reference to 2d context
    var ctx = c.getContext("2d");

    //add listeners
    document.addEventListener('mousemove', move, false);
    document.addEventListener('mousedown', setDraggable, false);
    document.addEventListener('mouseup', setDraggable, false);

    //make some circles
    //make a collection of circles


    //main draw method
    function draw() {
        //clear canvas
        //  ctx.clearRect(0, 0, c.width, c.height);
        drawCircles();
    }

    //draw circles
    function drawCircles() {
        for (var i = balls.length; i > 0; i--) {
            //   balls[i].draw(tutorial_canvas_context);
        }
    }

    //key track of circle focus and focused index
    var focused = {
        key: 0,
        state: false
    }

    //circle Object
    // function Circle(x, y, r, fill, stroke) {
    //     this.startingAngle = 0;
    //     this.endAngle = 2 * Math.PI;
    //     this.x = x;
    //     this.y = y;
    //     this.r = r;

    //     this.fill = fill;
    //     this.stroke = stroke;

    //     this.draw = function () {
    //         ctx.beginPath();
    //         ctx.arc(this.x, this.y, this.r, this.startingAngle, this.endAngle);
    //         ctx.fillStyle = this.fill;
    //         ctx.lineWidth = 3;
    //         ctx.fill();
    //         ctx.strokeStyle = this.stroke;
    //         ctx.stroke();
    //     }
    // }

    function move(e) {

        if (!isMouseDown) {
            return;
        }
        getMousePosition(e);
        //if any circle is focused
        if (focused.state) {

            balls[focused.key].xmom = (mousePosition.x - oldx[oldx.length - 2]) / 3
            balls[focused.key].ymom = (mousePosition.y - oldy[oldy.length - 2]) / 3
            balls[focused.key].x = mousePosition.x;
            balls[focused.key].y = mousePosition.y;
            draw();
            return;
        }
        //no circle currently focused check if circle is hovered
        for (var i = 0; i < balls.length; i++) {
            if (intersects(balls[i])) {
                balls.move(i, 0);
                focused.state = true;

                break;
            }
        }
        draw();
    }

    //set mousedown state
    function setDraggable(e) {
        var t = e.type;
        if (t === "mousedown") {
            isMouseDown = true;
        } else if (t === "mouseup") {
            isMouseDown = false;
            releaseFocus();
        }
    }

    function releaseFocus() {
        focused.state = false;
        speed = 1
    }

    function getMousePosition(e) {
        var rect = c.getBoundingClientRect();
        mousePosition = {
            x: Math.round(e.x - rect.left),
            y: Math.round(e.y - rect.top)
        }

        oldx.push(mousePosition.x)
        oldy.push(mousePosition.y)
    }

    //detects whether the mouse cursor is between x and y relative to the radius specified
    function intersects(circle) {
        // subtract the x, y coordinates from the mouse position to get coordinates 
        // for the hotspot location and check against the area of the radius
        var areaX = mousePosition.x - circle.x;
        var areaY = mousePosition.y - circle.y;
        //return true if x^2 + y^2 <= radius squared.
        return areaX * areaX + areaY * areaY <= circle.radius * circle.radius;
    }

    Array.prototype.move = function (old_index, new_index) {
        if (new_index >= this.length) {
            var k = new_index - this.length;
            while ((k--) + 1) {
                this.push(undefined);
            }
        }
        this.splice(new_index, 0, this.splice(old_index, 1)[0]);
    };
    draw();

    let wavertimer = 0
    let wavertimerx = 0





    console.log(balls)
    window.setInterval(function () {


        if (clicked == false) {


            tutorial_canvas_context.clearRect(0, 0, tutorial_canvas.width * 10000, tutorial_canvas.height * 10000)




            for (let q = 0; q < balls.length; q++) {

                balls[q].move()


                if ((balls[q].y + (balls[q].radius - (balls[q].radius * (((balls[q].charge) / 1000))))) > water.y) {
                    balls[q].ymom += ((balls[q].charge - 1000) / 1000) / 10
                } else {
                    balls[q].ymom += ((balls[q].charge - 100) / 100) / 100
                }

                if (balls[q].y + balls[q].radius > tutorial_canvas.height) {
                    balls[q].y = tutorial_canvas.height - balls[q].radius


                }


                if (balls[q].x > tutorial_canvas.width) {
                    balls[q].x = tutorial_canvas.width

                }

                if (balls[q].x < 0) {
                    balls[q].x = 0

                }






                balls[q].draw(tutorial_canvas_context)
            }
            water.draw(tutorial_canvas_context)


            if ((wavertimer % 256) > 127) {

                water.y += -.03

            } else {

                water.y -= -.03


            }

            if ((wavertimerx % 70) > 34) {

                water.y += -.02

            } else {

                water.y -= -.02


            }





            wavertimer++
            wavertimerx++


        }

        donky.charge = (Math.random() * 500) + 750
    }, speedx)




    tutorial_canvas.addEventListener('mousedown', e => {

        clicked = true


        window.setInterval(function () {
            if (clicked == true) {
                tutorial_canvas_context.clearRect(0, 0, tutorial_canvas.width * 10000, tutorial_canvas.height * 10000)

                for (let q = 0; q < balls.length; q++) {


                    balls[q].draw(tutorial_canvas_context)


                }

                water.draw(tutorial_canvas_context)
            }
        }, speedx)
    })

    tutorial_canvas.addEventListener('mouseup', e => {

        clicked = false
    })

})