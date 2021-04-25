


$(function(){
    $('.mobile').click(function(){
        var listaMenu = $('.mobile ul');
        var icon = $('.hamburguer').find('i');

        if(listaMenu.is(':hidden') == true){    
            icon.removeClass('fa-bars');
            icon.addClass('fa-times');
            listaMenu.slideDown();    
        }else{
            icon.removeClass('fa-times');
            icon.addClass('fa-bars');
            listaMenu.slideUp();
        }
    })
    // modais
        var modalClose = $('.modal')
        var modalPage = $('.modal-downloads');
        //ecoleta
        var modalEco = $('.eco');
        //proffy
        var modalProff = $('.proff');
        //happy
        var modalHappy = $('.happy');
        //moveit
        var modalMoveit = $('.moveit');
        //node
        var modalNode = $('.node');
        //elixir
        var modalElixir = $('.elixir');
        //react5
        var modalReact5 = $('.react5');
        //react native5
        var modalRNative5 = $('.reactNative5');
        //node5
        var modalNode5 = $('.node5');
        //node5
        var modalElixir5 = $('.elixir5');
        //node5
        var modalFlutter5 = $('.flutter5');
        //alura
        var modalImersa = $('.imersaalura');

    //ecoleta
    $('.btnEco').click(()=>{
        modalPage.fadeIn();
        modalEco.fadeIn();
    })
    //proffy
    $('.btnProff').click(()=>{
        modalPage.fadeIn();
        modalProff.fadeIn();
    })
    //happy
    $('.btnHappy').click(()=>{
        modalPage.fadeIn();
        modalHappy.fadeIn();
    })
    //moveit
    $('.btnMoveit').click(()=>{
        modalPage.fadeIn();
        modalMoveit.fadeIn();
    })
    //node
    $('.btnNode').click(()=>{
        modalPage.fadeIn();
        modalNode.fadeIn();
    })
    //elixir
    $('.btnElixir').click(()=>{
        modalPage.fadeIn();
        modalElixir.fadeIn();
    })
    //react 5
    $('.btnPodcast').click(()=>{
        modalPage.fadeIn();
        modalReact5.fadeIn();
    })
    //react native 5
    $('.btnRNative5').click(()=>{
        modalPage.fadeIn();
        modalRNative5.fadeIn();
    })
    //node 5
    $('.btnNode5').click(()=>{
        modalPage.fadeIn();
        modalNode5.fadeIn();
    })
    //elixir 5
    $('.btnElixir5').click(()=>{
        modalPage.fadeIn();
        modalElixir5.fadeIn();
    })
    $('.btnFlutter5').click(()=>{
        modalPage.fadeIn();
        modalFlutter5.fadeIn();
    })
    //imersão
    $('.btnAlura2').click(()=>{
        modalPage.fadeIn();
        modalImersa.fadeIn();
    }) 
        // modal instruction 1
        $('.btnAula1').click(()=>{
            if(!$('.aula1').is(':hidden')){
                $('.aula1').fadeOut();
            }else{
                $('.aula1').fadeIn();
            }
        })
        // modal instruction 2
        $('.btnAula2').click(()=>{
            if(!$('.aula2').is(':hidden')){
                $('.aula2').fadeOut();
            }else{
                $('.aula2').fadeIn();
            }
        })
        // modal instruction 3
        $('.btnAula3').click(()=>{
            if(!$('.aula3').is(':hidden')){
                $('.aula3').fadeOut();
            }else{
                $('.aula3').fadeIn();
            }
        })
        // modal instruction 4
        $('.btnAula4').click(()=>{
            if(!$('.aula4').is(':hidden')){
                $('.aula4').fadeOut();
            }else{
                $('.aula4').fadeIn();
            }
        })
         // modal instruction 5
         $('.btnAula5').click(()=>{
            if(!$('.aula5').is(':hidden')){
                $('.aula5').fadeOut();
            }else{
                $('.aula5').fadeIn();
            }
        })
    //fechar modal
    $('.close').click(()=>{
        modalPage.fadeOut();
        modalClose.fadeOut();
    })
    
})


