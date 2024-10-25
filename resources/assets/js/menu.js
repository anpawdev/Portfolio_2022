// import $ from 'jquery'
// import fullpage from 'fullpage.js'

// $('.navbar-toggle').on('click', function () {
//   $('body').removeClass('menu-is-closed').addClass('menu-is-opened')
// })

// $('.close-menu, .click-capture, .menu-list li a').on('click', function () {
//   $('body').removeClass('menu-is-opened').addClass('menu-is-closed')
//   $('.menu-list ul').slideUp(300)
// })

// $('.menu-list li a').on('click', function () {
//   $('.menu-list li').removeClass('active')
//   $(this).closest('li').addClass('active')
// })

// $('.col-resume').on('mouseover', function () {
//   $('.section-bg.mask').addClass('hide')
// })

// $('.col-resume').on('mouseleave', function () {
//   $('.section-bg.mask').removeClass('hide')
// })

// // navbar
// function navbarFullpage () {
//   if ($('.pp-section.active').scrollTop() > 0) {
//     $('.navbar-fullpage').addClass('navbar-fixed')
//   } else {
//     $('.navbar-fullpage').removeClass('navbar-fixed')
//   }
// }

// navbarFullpage()

// function navbar () {
//   $(window).scroll(function () {
//     if ($(window).scrollTop() > 0) {
//       $('.navbar').addClass('navbar-fixed')
//     } else {
//       $('.navbar').removeClass('navbar-fixed')
//     }
//   })
// }

// navbar()

// $(document).ready(function () {
//   if ($('#fullpage').length > 0) {
//     new fullpage('#fullpage', {
//       navigation: true,
//       navigationPosition: 'right',
//       navigationTooltips: ['section1', 'section2', 'section3', 'section4', 'section5'],
//       showActiveTooltip: true,
//       slidesNavigation: true,
//       slidesNavPosition: 'bottom',
//       controlArrows: false,
//       afterLoad: function (anchorLink, index) {
//         navbarFullpage()
//       }
//     })
//   }
// })

// $('.pp-scrollable').on('scroll', function () {
//   var scrollTop = $(this).scrollTop()
//   if (scrollTop > 0) {
//     $('.navbar-fullpage').addClass('navbar-fixed')
//   } else {
//     $('.navbar-fullpage').removeClass('navbar-fixed')
//   }
// })
