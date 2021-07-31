//setTimeout(function(){ 
    $('#info').on('click', () => {
        
        $("#info_Modal").modal("show");

        $(".close").click(function(){
            $("#info_Modal").modal('hide');
        });    

    })
//}, 3000);
    