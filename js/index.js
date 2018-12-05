import $ from 'jquery'
window.$ = $;
window.jQuery =  $;

import '../css/index.css'
import '../css/reset.css'
var About = $('#about'),
    Skill = $('#skill'),
    Experience = $('#experience'),
    Production = $('#production'),
    mainBlock = $('.mainBlock'),
    mainLen = mainBlock.length,
    timer = null,
    flag = 99;

//exp模块内容获取高度


mainBlock.click(function(){
    if(flag == $(this).index()){
        return;
    }
    $(this).css({   //点击之后，放大
        width : '80%',
        height : '100%',
        top : 0,
        left : 0,
    },500);
    $(this).find('.mainMsg').css('display','block');  //显示主要内容
    $(this).find('.msg').css('display','none');     //隐藏简略信息


    //针对性设置
    if($(this).index() == 2){   //如果点击了about模块
        $(this).find('h1').css('fontSize','4rem');
        $(this).find('h4').css('fontSize','3rem');
        $(this).find('p').css({
            'fontSize' : '1.5rem',
            'marginBottom': '10px'
        })
        $(this).find('.flex-1 span').css('display','inline');
    }else if($(this).index() == 3){     //如果点击了skill模块
        $(this).find('.skill-item').css({'fontSize':'1.5rem',"lineHeight" : 2});
    }else if($(this).index() == 4){      //如果点击了exp模块
        
    }else{      //如果点击了作品模块
        $(this).find('a').css('display','inline');
    }
   var arr = $(this).siblings('.mainBlock'),
       index = 0;
    arr.each(function(){    //点击一个，其他几个都缩小
        var num = index * 35+ '%';
        $(this).css({
            width : '18%',
            height : '30%',
            top : num,
            left : '82%',

       })
       $(this).find('.mainMsg').css('display','none');   //隐藏主要内容
       $(this).find('.msg').css('display','block');    //显示简略信息
       index++;
       if(index > arr.length){
           index = 0;
       }
    })
})