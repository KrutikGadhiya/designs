$(window).scroll(() => {
  let distanceFromTop = 100
  let scrolledFromTOp = $(window).scrollTop()
  if (scrolledFromTOp > distanceFromTop)
    $("#header").css("background", "#f7f8fa")
  else
    $("#header").css("background", "none")
})