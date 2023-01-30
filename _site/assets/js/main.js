jQuery(document).ready(function ($) {
  $('.level-bar-inner').css({'width': '0'})

  $(window).on('load', function () {
    $('.level-bar-inner').each(function () {
      let itemWidth = $(this).attr('data-level')
      console.log(itemWidth)
      $('.level-bar-inner').css({'width': itemWidth})
     /*  $(this).animate(
        {
          width: itemWidth
        }
      ) */
    })
  })
})
