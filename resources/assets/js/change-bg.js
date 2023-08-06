import $ from 'jquery'

$('.project-row a').on('mouseover', function () {
  const index = $('.project-row a').index(this)
  $('.project-row a').removeClass('active')
  $(this).addClass('active')
  $('.bg-changer .section-bg').removeClass('active').eq(index).addClass('active')
})
