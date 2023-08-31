// JQuery Code

$ ( function () {

// Hide

        $(`.hide`).click( function (){

        $(`.box`).hide() 

    })

// Show

    $(`.show`).click( function (){

    $(`.box`).show()

   })

// Toggle

    $(`.toggle`).click(function(){ 
    
    $(`.box`).toggle()
    })

  

});