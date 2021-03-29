$(document).ready(function(){

    // $(window).scroll(function(){
    //     var currentScroll = $(this).scrollTop();
    //     $('h1').text(currentScroll);
    // });
    
 
          

    $(window).scroll(function(){
        var currentScroll = $(window).scrollTop();
   
        if(currentScroll > 0){
            $('#side_menu>#side1>li').eq(0).css('color','#a2a6ff');
            $('#side_menu>#side1>li').eq(1).css('color','#000');
            $('#side_radius>#side2>li').eq(0).css('background-color','#a2a6ff');
            $('#side_radius>#side2>li').eq(1).css('background-color','#000');
        }

        if(currentScroll > 502){
            $('#about_header').css('opacity','1');
            $('#about_title').css('left','300px');
            } else {
                $('#about_header').css('opacity',"");
                $('#about_title').css('left',"");    
            }

        if(currentScroll > 706) {
                $('#profile').css('opacity','1');
                $('#deco_line1').css('height','850px');
                $('#deco_line2').css('width','1000px');
    
            } else {
                $('#profile').css('opacity',"");
                $('#deco_line1').css('height',"");
                $('#deco_line2').css('width',"");
    
            }

            if(currentScroll > 954) {
                $('#deco_line1').css('opacity','1');
                $('#deco_line2').css('opacity','1');
            } else {
                $('#deco_line1').css('opacity','0');
                $('#deco_line2').css('opacity','0');
            }      
            
        
        if(currentScroll > 986){
            $('#header2').css('top','0px');
            
            $('#header2>ul>li').eq(1).find("a").css('color','#a2a6ff');
            $('#header2>ul>li').eq(2).find("a").css('color','#fff');            
            $('#header2>ul>li').eq(3).find("a").css('color','#fff');            
            $('#header2>ul>li').eq(4).find("a").css('color','#fff'); 


            $('#header2>ul>li').eq(0).find("a").mouseover(function(){
                $(this).css('color','#dcdeff');
            });
            $('#header2>ul>li').eq(0).find("a").mouseout(function(){
                $(this).css('color','#fff');
            });

        
            $('#header2>ul>li').eq(1).find("a").mouseover(function(){
                $(this).css('color','#a2a6ff');
            });
            $('#header2>ul>li').eq(1).find("a").mouseout(function(){
                $(this).css('color','#a2a6ff');
            });

            $('#header2>ul>li').eq(2).find("a").mouseover(function(){
                $(this).css('color','#dcdeff');
            });
            $('#header2>ul>li').eq(2).find("a").mouseout(function(){
                $(this).css('color','#fff');
            });

            $('#header2>ul>li').eq(3).find("a").mouseover(function(){
                $(this).css('color','#dcdeff');
            });
            $('#header2>ul>li').eq(3).find("a").mouseout(function(){
                $(this).css('color','#fff');
            });

            $('#header2>ul>li').eq(4).find("a").mouseover(function(){
                $(this).css('color','#dcdeff');
            });
            $('#header2>ul>li').eq(4).find("a").mouseout(function(){
                $(this).css('color','#fff');
            });

            $('#side_menu>#side1>li').eq(0).css('color','#000');
            $('#side_menu>#side1>li').eq(1).css('color','#a2a6ff');
            $('#side_menu>#side1>li').eq(2).css('color','#000');
            $('#side_menu>#side1>li').eq(3).css('color','#000');
            $('#side_menu>#side1>li').eq(4).css('color','#000');
            $('#side_radius>#side2>li').eq(0).css('background-color','#000');
            $('#side_radius>#side2>li').eq(1).css('background-color','#a2a6ff');
            $('#side_radius>#side2>li').eq(2).css('background-color','#000');
            $('#side_radius>#side2>li').eq(3).css('background-color','#000');
            $('#side_radius>#side2>li').eq(4).css('background-color','#000');


                                                                               
            }else{$('#header2').css('top','-100px');
                $('#header').css('display','block'); 
                $('#header2>ul>li>a').eq(1).removeClass('on');
            }

        



        if(currentScroll > 1319){
            $('#skill_list').css('opacity','1');
            $('#skill_gauge').addClass('on');
        } else {$('#skill_list').css('opacity',"");
            $('#skill_gauge').removeClass('on');
        }


        if(currentScroll > 2660) {        
            $('#webpub_contents').css('opacity','1');
            $('#header2>ul>li').eq(1).find("a").css('color','#fff');
            $('#header2>ul>li').eq(2).find("a").css('color','#a2a6ff');            
            $('#header2>ul>li').eq(3).find("a").css('color','#fff');            
            $('#header2>ul>li').eq(4).find("a").css('color','#fff');
            $('#side_menu>#side1>li').eq(0).css('color','#000');
            $('#side_menu>#side1>li').eq(1).css('color','#000');
            $('#side_menu>#side1>li').eq(2).css('color','#a2a6ff');
            $('#side_menu>#side1>li').eq(3).css('color','#000');
            $('#side_menu>#side1>li').eq(4).css('color','#000');
            $('#side_radius>#side2>li').eq(0).css('background-color','#000');
            $('#side_radius>#side2>li').eq(1).css('background-color','#000');
            $('#side_radius>#side2>li').eq(2).css('background-color','#a2a6ff');
            $('#side_radius>#side2>li').eq(3).css('background-color','#000');
            $('#side_radius>#side2>li').eq(4).css('background-color','#000');

            $('#header2>ul>li').eq(0).find("a").mouseover(function(){
                $(this).css('color','#dcdeff');
            });
            $('#header2>ul>li').eq(0).find("a").mouseout(function(){
                $(this).css('color','#fff');
            });

            $('#header2>ul>li').eq(1).find("a").mouseover(function(){
                $(this).css('color','#dcdeff');
            });
            $('#header2>ul>li').eq(1).find("a").mouseout(function(){
                $(this).css('color','#fff');
            });

            $('#header2>ul>li').eq(2).find("a").mouseover(function(){
                $(this).css('color','#a2a6ff');
            });
            $('#header2>ul>li').eq(2).find("a").mouseout(function(){
                $(this).css('color','#a2a6ff');
            });

            $('#header2>ul>li').eq(3).find("a").mouseover(function(){
                $(this).css('color','#dcdeff');
            });
            $('#header2>ul>li').eq(3).find("a").mouseout(function(){
                $(this).css('color','#fff');
            });

            $('#header2>ul>li').eq(4).find("a").mouseover(function(){
                $(this).css('color','#dcdeff');
            });
            $('#header2>ul>li').eq(4).find("a").mouseout(function(){
                $(this).css('color','#fff');
            });
                      
                
            } else {
                $('#webpub_contents>article').eq(0).css('opacity',"");
                $('#webpub_contents').css('opacity','0');
            }

        if(currentScroll > 3324) {
            $('#priview_img').css('opacity','1');
            $('#priview_img').css('top','1150px');
        } else {$('#priview_img').css('opacity',"");
        $('#priview_img').css('top',"");
        }

        if(currentScroll > 4407){
            $('#UIUX_contents').css('opacity','1');
            $('#UIUX_contents').css('top','500px');
            $('#header2>ul>li').eq(1).find("a").css('color','#fff');
            $('#header2>ul>li').eq(2).find("a").css('color','#fff');            
            $('#header2>ul>li').eq(3).find("a").css('color','#a2a6ff');            
            $('#header2>ul>li').eq(4).find("a").css('color','#fff'); 
            $('#side_menu>#side1>li').eq(0).css('color','#000');
            $('#side_menu>#side1>li').eq(1).css('color','#000');
            $('#side_menu>#side1>li').eq(2).css('color','#000');
            $('#side_menu>#side1>li').eq(3).css('color','#a2a6ff');
            $('#side_menu>#side1>li').eq(4).css('color','#000');
            $('#side_radius>#side2>li').eq(0).css('background-color','#000');
            $('#side_radius>#side2>li').eq(1).css('background-color','#000');
            $('#side_radius>#side2>li').eq(2).css('background-color','#000');
            $('#side_radius>#side2>li').eq(3).css('background-color','#a2a6ff');
            $('#side_radius>#side2>li').eq(4).css('background-color','#000');

            $('#header2>ul>li').eq(0).find("a").mouseover(function(){
                $(this).css('color','#dcdeff');
            });
            $('#header2>ul>li').eq(0).find("a").mouseout(function(){
                $(this).css('color','#fff');
            });
            $('#header2>ul>li').eq(1).find("a").mouseover(function(){
                $(this).css('color','#dcdeff');
            });
            $('#header2>ul>li').eq(1).find("a").mouseout(function(){
                $(this).css('color','#fff');
            });
            $('#header2>ul>li').eq(2).find("a").mouseover(function(){
                $(this).css('color','#dcdeff');
            });
            $('#header2>ul>li').eq(2).find("a").mouseout(function(){
                $(this).css('color','#fff');
            });
            $('#header2>ul>li').eq(3).find("a").mouseover(function(){
                $(this).css('color','#a2a6ff');
            });
            $('#header2>ul>li').eq(3).find("a").mouseout(function(){
                $(this).css('color','#a2a6ff');
            });
            $('#header2>ul>li').eq(4).find("a").mouseover(function(){
                $(this).css('color','#dcdeff');
            });
            $('#header2>ul>li').eq(4).find("a").mouseout(function(){
                $(this).css('color','#fff');
            });

            
                                 
        }
        else {$('#UIUX_contents').css('opacity',"");
        $('#UIUX_contents').css('top',"");}

        if(currentScroll > 6400) {
            $('#VISUAL_contents').css('opacity','1');
            $('#VISUAL_contents').css('top','500px');
            $('#header2>ul>li').eq(1).find("a").css('color','#fff');
            $('#header2>ul>li').eq(2).find("a").css('color','#fff');            
            $('#header2>ul>li').eq(3).find("a").css('color','#fff');            
            $('#header2>ul>li').eq(4).find("a").css('color','#a2a6ff');
            $('#side_menu>#side1>li').eq(0).css('color','#000');
            $('#side_menu>#side1>li').eq(1).css('color','#000');
            $('#side_menu>#side1>li').eq(2).css('color','#000');
            $('#side_menu>#side1>li').eq(3).css('color','#000');
            $('#side_menu>#side1>li').eq(4).css('color','#a2a6ff');
            $('#side_radius>#side2>li').eq(0).css('background-color','#000');
            $('#side_radius>#side2>li').eq(1).css('background-color','#000');
            $('#side_radius>#side2>li').eq(2).css('background-color','#000');
            $('#side_radius>#side2>li').eq(3).css('background-color','#000');
            $('#side_radius>#side2>li').eq(4).css('background-color','#a2a6ff');

            $('#header2>ul>li').eq(0).find("a").mouseover(function(){
                $(this).css('color','#dcdeff');
            });
            $('#header2>ul>li').eq(0).find("a").mouseout(function(){
                $(this).css('color','#fff');
            });

            $('#header2>ul>li').eq(1).find("a").mouseover(function(){
                $(this).css('color','#dcdeff');
            });
            $('#header2>ul>li').eq(1).find("a").mouseout(function(){
                $(this).css('color','#fff');
            });

            $('#header2>ul>li').eq(2).find("a").mouseover(function(){
                $(this).css('color','#dcdeff');
            });
            $('#header2>ul>li').eq(2).find("a").mouseout(function(){
                $(this).css('color','#fff');
            });

            $('#header2>ul>li').eq(3).find("a").mouseover(function(){
                $(this).css('color','#dcdeff');
            });
            $('#header2>ul>li').eq(3).find("a").mouseout(function(){
                $(this).css('color','#fff');
            });

            $('#header2>ul>li').eq(4).find("a").mouseover(function(){
                $(this).css('color','#a2a6ff');
            });
            $('#header2>ul>li').eq(4).find("a").mouseout(function(){
                $(this).css('color','#a2a6ff');
            });
 
        } else {
            $('#VISUAL_contents').css('opacity',"");
            $('#VISUAL_contents').css('top',"");
        }


    });

    $('#scroll_button').click(function(){   
        $('html,body').stop().animate({scrollTop : 1028},500); 
    }); 

    $('#main_nav>li').eq(1).find("a").click(function(){
   
        $('html,body').stop().animate({scrollTop : 1028},1000); 
    }); 
    $('#main_nav>li').eq(2).find("a").click(function(){   
        $('html,body').stop().animate({scrollTop : 3000},1000); 
    }); 
    $('#main_nav>li').eq(3).find("a").click(function(){   
        $('html,body').stop().animate({scrollTop : 4800},1000); 
    }); 
    $('#main_nav>li').eq(4).find("a").click(function(){   
        $('html,body').stop().animate({scrollTop : 6801},1000); 
    }); 

    $('#header2>ul>li').eq(0).find("a").click(function(){
        $('html,body').stop().animate({scrollTop : 0},1000);
    });
    $('#header2>ul>li').eq(1).find("a").click(function(){
        $('html,body').stop().animate({scrollTop : 1028},1000);
    });
    $('#header2>ul>li').eq(2).find("a").click(function(){
        $('html,body').stop().animate({scrollTop : 3000},1000);
    });
    $('#header2>ul>li').eq(3).find("a").click(function(){
        $('html,body').stop().animate({scrollTop : 4800},1000);
    });
    $('#header2>ul>li').eq(4).find("a").click(function(){
        $('html,body').stop().animate({scrollTop : 6801},1000);
    });


    
    
    $('#priview_img>ul>li').eq(0).click(function(){
        $('.web_contents').removeClass('on');
        $('.web_contents').eq(0).css('opacity','1');
        $('.web_contents').eq(0).addClass('on');            
    });
    $('#priview_img>ul>li').eq(1).click(function(){
        $('.web_contents').removeClass('on');
        $('.web_contents').eq(0).css('opacity','0');
        $('.web_contents').eq(1).addClass('on');            
    });
    $('#priview_img>ul>li').eq(2).click(function(){
        $('.web_contents').removeClass('on');
        $('.web_contents').eq(0).css('opacity','0');
        $('.web_contents').eq(2).addClass('on');            
    });
    $('#priview_img>ul>li').eq(3).click(function(){
        $('.web_contents').removeClass('on');
        $('.web_contents').eq(0).css('opacity','0');
        $('.web_contents').eq(3).addClass('on');            
    });
    $('#priview_img>ul>li').eq(4).click(function(){
        $('.web_contents').removeClass('on');
        $('.web_contents').eq(0).css('opacity','0');
        $('.web_contents').eq(4).addClass('on');            
    });


    $(function() {
      $('.gallery>li>a').lightbox({
          margin: 100

      });
      
    });

        

});

