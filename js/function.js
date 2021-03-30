var imagenes = [13, 0, 1, 2, 3, 4, 5, 6, 7, 9, 11, 12];
var galeria = document.getElementById('galeria');
for (imagen of imagenes) {
    galeria.innerHTML += `
    <div class="card border-primary-2">
    <a href="" data-toggle="modal" data-target="#id${imagen}">
        <img src="images/${imagen}.png"
            class="card-img-top b-n">
    </a>
</div>
<!-- Modal -->
<div class="modal fade" id="id${imagen}"" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <img src="images/${imagen}.png"
            class="img-fluid rounded">

    </div>
</div>
    `
}
$(".enviar_what").click(function () {
    // window.open('https://api.whatsapp.com/send?phone=51935449507&text=Hola,%20deseo%20contactarme%20contigo', '_banner');
    $("#linkContacto").click();

})

$(document).ready(function () {
    $(".alert-danger").fadeToggle(0000);
    $(".alert-success").fadeToggle(0000);
    $("#enviarCorreo").click(function (e) {
        e.preventDefault();
        if ($("#nombre").val() === "" || $("#telefono").val() === "" || $("#correo").val() === "" || $("#mensaje").val() === "") {
            $("#alert-error").html('<b>campos vacíos</b>');
            $(".alert-danger").fadeIn(2000);
            $(".alert-success").fadeOut(2000);
        } else {
            $(this).addClass('hidden');
            $("#spinner").removeClass('hidden');
            $.ajax({
                type: "POST",
                url: "https://portafoliojordyvd.000webhostapp.com/correo.php",
                data: {
                    nombre: $("#nombre").val(),
                    telefono: $("#telefono").val(),
                    correo: $("#correo").val(),
                    mensaje: $("#mensaje").val(),
                    // ****** datos correo ***********
                    asunto: "contacto web",
                    destinatario: 'jordyverastegui64@gmail.com',
                    nombreUser:'Portafolio web',
                },
                success: function (res) {
                    if(res === "error"){
                        $("#alert-error").html('<b>algo solió mal, por favor vuelva a intentar</b>');
                        $(".alert-danger").fadeIn(2000);
                        $(".alert-success").fadeOut(2000);
                        $("#spinner").addClass('hidden');
                        $("#enviarCorreo").removeClass('hidden');
                    }else{
                        $(".alert-danger").fadeOut(2000);
                        $(".alert-success").fadeIn(2000);
                        $("#nombre").val('');
                        $("#telefono").val('');
                        $("#correo").val('');
                        $("#mensaje").val('');
                        $("#spinner").addClass('hidden');
                        $("#enviarCorreo").removeClass('hidden');
                    }
                }
            });
        }
    })

});