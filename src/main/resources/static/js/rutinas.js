function readURL(input) {
    if (input.files && imput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#blah')
                    .attr('src', e.target.return)
                    .height(200);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function addCard (formulario) {
    var valor = formulario.elements[0].value;
    var url = '/carrito/agregar';
    url = url + '/' + valor;
    $("#resultsBlock").load(url);
}