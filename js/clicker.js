$('#cat').click(function() {
	$('#output').html(function(i, val) { return val*1+1 });
	$('#uno').prepend("<h3>Meow</h3>");
});

$('#kitty').click(function() {
	$('#point').html(function(i, val) { return val*1+1 });
	$('#due').prepend("<h3>Kitty</h3>");
});