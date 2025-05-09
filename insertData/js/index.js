$(document).ready(function()
{
    $('#butsave').on('click',function()
    {
        $('#butsave').attr("disabled","disabled");
        let nombre=$('#name').val();
        let correo=$('#email').val();
        let telefono=$('#phone').val();
        let ciudad=$('#city').val();
        if (nombre!="" && correo!="" && telefono!="" && ciudad!="") 
        {
            $.ajax
            ({
                url:"save.php",
                type:"POST",
                data:
                {
                    nombre:nombre,
                    correo:correo,
                    telefono:telefono,
                    ciudad:ciudad
                },
                cache:false,
                success:function(dataResult)
                {
                    let msj='';
                    console.log(dataResult);
                    //convierto en Objeto el JSON que recibo:
                    var dataResult=JSON.parse(dataResult);
                    console.log(dataResult);
                    if(dataResult.statusCode==200)
                    {
                        //Habilito el Botón de Guardar
                        $('#butsave').removeAttr("disabled");
                        //Reseteo el valor de los campos del Formulario
                        $('#fupForm').find("input:text").val('');
                        $('#city').prop("selectedIndex","");
                        $('#email').val('');
                        //Le doy un valor al mensaje a mostrar
                        msj='Registro agregado exitosamente'
                        //Muestro el mensaje
                    }
                    if(dataResult.statusCode==2001)
                    {
                        msj='Ocurrió un error al agregar el registro nuevo';
                    }
                    $('#success').show();
                    $('#success').html(msj);
                }
            }); 
        }
        else
        {
            alert('Por favor complete los datos solicitados');
        }
    });
})