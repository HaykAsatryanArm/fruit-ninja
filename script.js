$(document).ready(function () {


    var start = $('#start');
    var splatter = $('#splatter');
    let boom = $('#boom')
    let leave = $('#leave')
    let end = $('#end')
    let bomb = 0



    $('body').click(function () {
        leave[0].play()
    })


    $(document).mousemove(function (e) {
        $('#mouse').css({
            left: `${e.pageX - 50}px`,
            top: `${e.pageY - 50}px`
        })
    })
    $(document).mousedown(function () {
        $('#mouse').css({
            transform: 'rotate(65deg)'
        })
    });
    $(document).mouseup(function () {
        $('#mouse').css({
            transform: 'rotate(105deg)'
        })
    });

    let fruits = ['1.png', '3.png', '2.png', '3.png', '4.png', '5.png', '6.png', '1.png', '2.png', '7.png', '4.png', '5.png', '7.png', '1.png', '2.png', '6.png', '4.png', '5.png', '1.png', '2.png', '6.png', '4.png', '5.png']

    setTimeout(() => {

        $('.load').css({
            transform: 'scale(0)',
            borderRadius: '50%',
            top: 0
        })

        function easy() {
            start[0].play()
            let counter = 0
            var int = setInterval(() => {
                $('#counter').text(counter++)
            }, 1000);
            $('.line').css({
                display: 'none'
            })
            setInterval(() => {
                let fruit = fruits[Math.floor(Math.random() * 15)]
                let img = $('<img>')
                let h = Math.floor(Math.random() * 25) + 80
                img.attr('src', `images/fruits/${fruit}`)

                img.css({
                    left: `${Math.floor(Math.random() * 80)}%`,
                    bottom: `-${h}px`,
                    height: `${h}px`
                })

                img.animate({
                    bottom: `${Math.floor(Math.random() * 80) + 10}%`
                }, 6000, function () {
                    img.animate({
                        bottom: `-${h}px`
                    }, 6000, function () {
                        img.remove()
                    })
                })

                img.addClass('img')
                $('body').append(img)
                img.click(function () {




                    if (fruit != '3.png') {
                        splatter[0].play();
                        img.hide();
                        img.remove();
                    } else {
                        boom[0].play();
                        img.hide();
                        img.remove();
                        bomb++
                        if (bomb == 1) {
                            $('#one').removeClass('bxs-heart')
                            $('#one').addClass('bx-heart')
                        }
                        if (bomb == 2) {
                            $('#two').removeClass('bxs-heart')
                            $('#two').addClass('bx-heart')
                        }
                        if (bomb == 3) {
                            $('#three').removeClass('bxs-heart')
                            $('#three').addClass('bx-heart')
                            clearInterval(int)
                            let time = counter
                            $('#timer').html(`${time}  <div style="font-size: 2rem;"> s</div>`)
                            $('.img').remove()
                            end[0].play()
                            $('.load-2').css({
                                transform: 'scale(1)',
                                borderRadius: '0%',
                                top: 0
                            })
                            $('.load-2').html('Game Over !!!')
                        }
                    }
                })

            }, 1000);
        }

        function medium() {
            start[0].play()
            let counter = 0
            var int = setInterval(() => {
                $('#counter').text(counter++)
            }, 1000);
            $('.line').css({
                display: 'none'
            })
            setInterval(() => {
                let fruit = fruits[Math.floor(Math.random() * 15)]
                let img = $('<img>')
                let h = Math.floor(Math.random() * 25) + 80
                img.attr('src', `images/fruits/${fruit}`)

                img.css({
                    left: `${Math.floor(Math.random() * 80)}%`,
                    bottom: `-${h}px`,
                    height: `${h}px`
                })

                img.animate({
                    bottom: `${Math.floor(Math.random() * 80) + 10}%`
                }, 5000, function () {
                    img.animate({
                        bottom: `-${h}px`
                    }, 5000, function () {
                        img.remove()
                    })
                })

                img.addClass('img')
                $('body').append(img)
                img.click(function () {




                    if (fruit != '3.png') {
                        splatter[0].play();
                        img.hide();
                        img.remove();
                    } else {
                        boom[0].play();
                        img.hide();
                        img.remove();
                        bomb++
                        if (bomb == 1) {
                            $('#one').removeClass('bxs-heart')
                            $('#one').addClass('bx-heart')
                        }
                        if (bomb == 2) {
                            $('#two').removeClass('bxs-heart')
                            $('#two').addClass('bx-heart')
                        }
                        if (bomb == 3) {
                            $('#three').removeClass('bxs-heart')
                            $('#three').addClass('bx-heart')
                            clearInterval(int)
                            let time = counter
                            $('#timer').html(`${time}  <div style="font-size: 2rem;"> s</div>`)
                            $('.img').remove()
                            end[0].play()
                            $('.load-2').css({
                                transform: 'scale(1)',
                                borderRadius: '0%',
                                top: 0
                            })
                            $('.load-2').html('Game Over !!!')
                        }
                    }
                })

            }, 700);
        }

        function hard() {
            start[0].play()
            let counter = 0
            var int = setInterval(() => {
                $('#counter').text(counter++)
            }, 1000);
            $('.line').css({
                display: 'none'
            })
            setInterval(() => {
                let fruit = fruits[Math.floor(Math.random() * 15)]
                let img = $('<img>')
                let h = Math.floor(Math.random() * 25) + 80
                img.attr('src', `images/fruits/${fruit}`)

                img.css({
                    left: `${Math.floor(Math.random() * 80)}%`,
                    bottom: `-${h}px`,
                    height: `${h}px`
                })

                img.animate({
                    bottom: `${Math.floor(Math.random() * 80) + 10}%`
                }, 3500, function () {
                    img.animate({
                        bottom: `-${h}px`
                    }, 3500, function () {
                        img.remove()
                    })
                })

                img.addClass('img')
                $('body').append(img)
                img.click(function () {




                    if (fruit != '3.png') {
                        splatter[0].play();
                        img.hide();
                        img.remove();
                    } else {
                        boom[0].play();
                        img.hide();
                        img.remove();
                        bomb++
                        if (bomb == 1) {
                            $('#one').removeClass('bxs-heart')
                            $('#one').addClass('bx-heart')
                        }
                        if (bomb == 2) {
                            $('#two').removeClass('bxs-heart')
                            $('#two').addClass('bx-heart')
                        }
                        if (bomb == 3) {
                            $('#three').removeClass('bxs-heart')
                            $('#three').addClass('bx-heart')
                            clearInterval(int)
                            let time = counter
                            $('#timer').html(`${time}  <div style="font-size: 2rem;"> s</div>`)
                            $('.img').remove()
                            end[0].play()
                            $('.load-2').css({
                                transform: 'scale(1)',
                                borderRadius: '0%',
                                top: 0
                            })
                            $('.load-2').html('Game Over !!!')
                        }
                    }
                })

            }, 500);
        }

        $('#easy').click(function () {
            easy()
        })

        $('#medium').click(function () {
            medium()
        })

        $('#hard').click(function () {
            hard()
        })

    }, 10000)
});



