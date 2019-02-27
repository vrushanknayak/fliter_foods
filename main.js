$("body").on("change", ".filter", function (e) {
	e.preventDefault();

	console.log("Hello, world!");

	// const $sowhat = $(this);
	//
	// const food_type = $sowhat.val();

	var x = $(this).val();

	console.log("Food Type " + food_type);

	$(".item.active").removeClass("active");
	$("." + x).addClass("active");


	console.log("We made it!");



});