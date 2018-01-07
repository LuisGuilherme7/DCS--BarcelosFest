
$(function(){
  $("form[name='form1']").validate({
    rules:{
      fname:"required",
      email:{
        required: true,
        email:true
      },
      password:{
        required: true,
        minlength: 5,
        maxlength: 30
      },
      repassword:{
        equalTo:"#password"
      },
      tel:{
        required: true,
        number:true,
        minlength:9,
        maxlength: 9
      }
    },
    messages:{
    fname:"Digite o seu username",
    password:{
      required: "Digite uma password",
      minlenght: "A sua password tem que ter 5 caracters",
      maxlenght:"A sua password tem que ter menos de 30 caracters"
    },
    email: "Digite um email direito",
    tel: "Digite o numero de telefone direito"
  },
  submitHandler: function(form){
    form.Submit();
  }
});
});
