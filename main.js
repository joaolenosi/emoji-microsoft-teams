$("li").on("click", function () {
  let id = $(this).attr("id");
  $("#choose-reason").removeClass("parent").addClass("parent__hidden");
  $("#reason").html($(`#${id}`).html() + " 1");
  $("#reason").css("display", "flex");
});

$(".task-description").on("mouseover", function () {
  $("#choose-reason").removeClass().addClass("parent");
});

function hiddenReason() {
  $("#choose-reason").removeClass().addClass("parent__hidden");
}
