var About = $('#about'),
    Skill = $('#skill'),
    Experience = $('#experience'),
    Production = $('#production'),
    mainBlock = $('.mainBlock'),
    mainLen = mainBlock.length;

mainBlock.click(function(){
    
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