
const animateForm = {
    In_shell: 'animate__fadeIn',
    Out_shell: 'animate__fadeOut',

    In_body: 'animate__flipInX',
    Out_body: 'animate__flipOutX'
}
const animateMenu = {
    In_shell: 'animate__fadeIn',
    Out_shell: 'animate__fadeOut',

    In_body: 'animate__bounceInLeft',
    Out_body: 'animate__bounceOutLeft'
}

const animateLookFor = {
    In_shell: 'animate__fadeIn',
    Out_shell: 'animate__fadeOut',

    In_body: 'animate__fadeInRight',
    Out_body: 'animate__fadeOutRight'
}

const animateMenuForm = {
    In_shell: 'animate__fadeIn',
    Out_shell: 'animate__fadeOut',

    In_body: 'animate__fadeIn',
    Out_body: 'animate__fadeOut'
}

$(document).ready(()=>{

    function PopUp(popup){
        return {
            popup: popup,
            open: $('.' + `${popup.attr('class')}` + '__open'),
            close: $('.' + `${popup.attr('class')}` + '__body__container__close'),
            body: popup.find('.' + `${popup.attr('class')}__body`),
            shell: popup.find('.' + `${popup.attr('class')}__shell`),
        }
    }


    function open(popup, animate){
        popup.popup.css('display', 'block');
        popup.body.removeClass(animate.Out_body)
        popup.body.addClass(animate.In_body)
        // $('body').css('overflow', 'hidden');

        popup.shell.removeClass(animate.Out_shell)
        popup.shell.addClass(animate.In_shell)
    }

    function close(popup, animate){
        popup.body.removeClass(animate.In_body)
        popup.body.addClass(animate.Out_body)
        // $('body').css('overflow', 'auto');

        popup.shell.removeClass(animate.In_shell)
        popup.shell.addClass(animate.Out_shell)

        setTimeout(() => {
            popup.popup.css('display', 'none') 
        }, 500);
    }


    function PopStart(popup,animate) {

        PopUp(popup).open.click(() => {
        open(PopUp(popup),animate);
        })
        PopUp(popup).shell.click(()=>{
            close(PopUp(popup),animate);
        })
        PopUp(popup).close.click(()=>{
            close(PopUp(popup),animate);
        })
        // $(window).scroll(()=>{
        //     close(PopUp(popup),animate);
        // })
    }

    //Попапы, неменяющиеся 
    PopStart($('.menu'), animateLookFor);
    PopStart($('.application'), animateMenuForm);
    PopStart($('.productPop'), animateMenuForm);
    PopStart($('.imgPop'), animateMenuForm);

    //Попап для картинок
    const imges = $('.imgPop__open');
    imges.click((event)=>{
        console.log('клик есть')
        let img = event.target;
        $('.imgPop__body__container img').remove();
        $('.imgPop__body__container').append($(img.cloneNode()))
    })

})
