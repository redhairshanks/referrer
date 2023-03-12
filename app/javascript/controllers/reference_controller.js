import { Controller } from "@hotwired/stimulus"
import Utils from "shared/utils"


export default class extends Controller {

	constructor(){
		super()
		this.b_modal = new bootstrap.Modal(document.getElementById('ref_modal'))
	}

	connect(){

	}

	new_reference_modal(){
		this.b_modal.show();
	}

	close_modal(){
		this.b_modal.hide();
	}

	new_reference(){
		let that = this;
		let email = document.getElementById('ref_email');

		if(!email.value || !Utils.validate_email(email.value)){
			Utils.showInputError(email);
			Utils.showToast('Reference', 'Email format is incorrect', 'fail');
			return;
		}


		let req_body = {
			"email": email.value
		}

		Utils.requestHandler('/api/add/reference', 'post', req_body).then(function (response){
		    if(response.message === 'OK'){
		    	that.add_reference_to_table(response.data);
		        Utils.showToast(response.message, 'Reference added', 'success');
		    }else{
		        Utils.showToast(response.message, Utils.formatErrorMessage(response.errors), 'fail');
		    }
		})
	}

	add_reference_to_table(data){
		let tbody = document.getElementById('references_tbody');
		var newRow = tbody.insertRow();
		let row_html = "<td>" + data.email  + "</td><td>No</td><td>few seconds ago</td";
		newRow.innerHTML = row_html;
	}
}