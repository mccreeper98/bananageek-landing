
// $(document).ready(() => {
//     $('#btn-1').click(() => {
//         const name = $('#name').val()
//         const email = $('#email').val()
//         const tel = $('#phone').val()
//         const desc = $('#service').val()
//         const matches = email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
//         if ($('#test5').is(":checked") && name && email && tel && desc) {
//             if(matches){
//                 sendData(name, email, tel, desc)
//             }else{
//                 swal.fire({
//                     title: '¡Error!',
//                     text: 'Ingrese un correo valido',
//                     icon: 'error',
//                     confirmButtonText: 'Aceptar'
//                 });    
//             }
//         }
//     })
// })
function sendData(name, email, tel, desc) {
    
    $.post('https://bananageek.mx/api/contact/submit',
        {
            name, email, tel, desc
        }, (result) => {
             window.location.href="gracias.html";
            //swal.fire({
              //  title: '¡Listo!',
                //text: 'Hemos recibido tu información, pronto nos comunicaremos contigo',
                //icon: 'success',
                //confirmButtonText: 'Aceptar'
            //});

            $('#name').val('');
            $('#email').val('');
            $('#phone').val('');
            $('#service').val('');

        });
}
