import { Controller } from "@hotwired/stimulus"
import Utils from "shared/utils"

export default class extends Controller {

  constructor(){
    super();
    this.request_type_get = 'get'
    this.request_type_post = 'post' 
  }


  connect() {
  }

  sign_up(){
    let that = this;
    let name = document.getElementById('su_name');
    let password = document.getElementById('su_password');
    let email = document.getElementById('su_email');

    if(!name.value){
      Utils.showInputError(name);
      Utils.showToast('Register', 'Name is compulsory', 'fail')
      return;
    }


    if(!password.value){
      Utils.showInputError(password);
      Utils.showToast('Register', 'Password is compulsory', 'fail')
      return;  
    }


    if(!email.value || !Utils.validate_email(email.value)){
      Utils.showInputError(email);
      Utils.showToast('Register', 'Email format is incorrect', 'fail');
      return;
    }

    let req_body = {
      "name": name.value,
      "password": password.value,
      "email": email.value
    }

    Utils.requestHandler('/api/sign-up', 'post', req_body).then(function (response){
        if(response.message === 'OK'){
            Utils.saveCookie('x-session-id', response.data.session_id);
            Utils.showToast(response.message, 'Registration Successful', 'success');
            window.location.href = "/references/show";
        }else{
            Utils.showToast(response.message, Utils.formatErrorMessage(response.errors), 'fail');
        }
    })

  }

  sign_in(){
    let that = this;
    let password = document.getElementById('si_password');
    let email = document.getElementById('si_email');

    if(!password.value){
      Utils.showInputError(password);
      Utils.showToast('Login', 'Password is compulsory', 'fail')
      return;  
    }


    if(!email.value && !Utils.validate_email(email.value)){
      Utils.showInputError(email);
      Utils.showToast('Login', 'Email format is incorrect', 'fail');
      return;
    }

    let req_body = {
      "password": password.value,
      "email": email.value
    }

    Utils.requestHandler('/api/sign-in', 'post', req_body).then(function (response){
        if(response.message === 'OK'){
            Utils.saveCookie('x-session-id', response.data.session_id);
            window.location.href = "/references/show";
        }else{
            Utils.showToast(response.message, Utils.formatErrorMessage(response.errors), 'fail');
        }
    })
  }
}
