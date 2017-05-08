$(document).ready(function (){
           $("#do_di").click(function (){
             $("html, body").animate({ scrollTop: $(document).height()/4 }, 1500);

           });
           $("#re_di").click(function (){
               $("html, body").animate({ scrollTop: $(document).height()/4 }, 1500);
           });
           $("#fa_di").click(function (){
              $("html, body").animate({ scrollTop: $(document).height()/4 }, 1500);
           });
           $("#sol_di").click(function (){
               $("html, body").animate({ scrollTop: $(document).height()/4 }, 1500);
           });
           $("#la_di").click(function (){
               $("html, body").animate({ scrollTop: $(document).height()/4 }, 1500);
           });
       });
function play(toto){
  var note = document.getElementById(toto);
  note.play();
};
function pause(toto){
  var note = document.getElementById(toto);
  note.pause();
}
$(document).keydown(function(e) {
    switch(e.which) {
        case 81:
          $('#do_btn').trigger('click');  // do
        break;

        case 83:
            $('#re_btn').trigger('click');// up
        break;

        case 70:
            $('#mi_btn').trigger('click');// right
        break;

        case 71:
            $('#fa_btn').trigger('click');// down
        break;
        case 74:
            $('#sol_btn').trigger('click');// down
        break;
        case 75:
            $('#la_btn').trigger('click');// down
        break;
        case 77:
            $('#si_btn').trigger('click');// down
        break;
        case 90:
            $('#do_di').trigger('click');// down
        break;
        case 69:
            $('#re_di').trigger('click');// down
        break;
        case 89:
            $('#fa_di').trigger('click');// down
        break;
        case 85:
            $('#sol_di').trigger('click');// down
        break;
        case 73:
            $('#la_di').trigger('click');// down
        break;
    }
    });
