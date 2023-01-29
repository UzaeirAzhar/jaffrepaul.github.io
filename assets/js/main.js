jQuery(document).ready(function ($) {
  $('.level-bar-inner').css('width', '0')
  console.log($('.level-bar-inner').css('width', '0'))
  $(window).on('load', function () {
    $('.level-bar-inner').each(function () {
      var itemWidth = $(this).data('level')
      console.log(itemWidth)

      $(this).animate(
        {
          width: itemWidth
        },
        800
      )
    })
  })
})
