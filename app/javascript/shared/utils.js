export default class Utils {

	static validate_email(email){
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    }


    static showInputError(element){
        element.classList.remove('is-valid');
        element.classList.add('is-invalid');
    }

    static showToast(title, sub_text, ttype = 'success'){
        let toast = document.getElementById('toast');
        let toast_header = document.getElementById('toast_header');
        let toast_body = document.getElementById('toast_body');

        if(title === 'OK'){
            title = 'Success';
        }

        toast.classList.remove('bg-success');
        toast.classList.remove('bg-success');
        toast.classList.remove('slide');
        toast.classList.remove('slide-in')

        switch(ttype) {
            case 'success':
                toast.classList.add('bg-success');
                break;
            case 'fail':
                toast.classList.add('bg-danger');
                break;
            default:
        }

        toast_header.innerHTML = title;
        toast_body.innerHTML = sub_text;
        toast.classList.add('slide');
        toast.classList.add('slide-in')

        const b_toast = new bootstrap.Toast(toast)
        b_toast.show()
    }


    static requestHandler(url, req_type, body){
        let headers = {
            'Content-Type': 'application/json',
            'x-session-id': null,
        };
        let that = this;
        if(req_type === this.request_type_get){
            let url_search_params = new URLSearchParams(body);
            return fetch(url + '/?' + url_search_params, {
                method: 'GET',
                headers: headers
            }).then(function (response) {
                return response.json();
            })
        } else {
            return fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body)
            }).then(function (response) {
                return response.json();
            })
        }
    }

    static saveCookie(key,value){
        document.cookie = key + "=" + value + ";path=/";
    }


    static formatErrorMessage(error_h){
        let result = "";
        Object.keys(error_h).forEach(function (key) {
            result = result.concat(key, ": ", error_h[key].join(", "))
        })
        return result;
    }
}