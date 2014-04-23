---
---

$ ->
  $(window).on 'scroll', (event) ->
    $('#site-header').toggleClass 'scrolled', $(window).scrollTop() > 50
