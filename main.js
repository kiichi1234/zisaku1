/* const addition = document.getElementById('need');
function formSwitch() {
    if (addition.checked) { 
        $('#need_form').fadeIn(); 
    } else {
        $('#need_form').hide(); 
    }
}

addition.addEventListener('change', formSwitch); */

function formSwitch() {
	let need = document.getElementById("need");
	let need_form = document.getElementById("need_form");
	if (need.checked) {
	  need_form.style.display = "";
	  
	} else {
	  need_form.style.display = "none";
	}
  }

$("button").click(function () {

	let name = $('[name="name"]').val();
	let mail = $('[name="mail"]').val();
	let message = $('[name="message"]').val();
	let company = $('[name="company"]').val();
	let postcode = $('[name="postcode"]').val();
	let address = document.querySelectorAll('.Form-radioItem-Input');
	let entered=0;
	let err = []; 		//エラーメッセージ配列
	let err_message = ''; 	//エラーメッセージ出力
	let check=[];
	let missing_items = "";
	let address_box="";
	
	
	if (!company){
		
	entered +=1;
	check[1]="会社名";
	}

	if (!name){
		
		entered +=1;
		check[2]="氏名";
		}

			if (!mail){
		
				entered +=1;
				check[3]="メールアドレス";
				}
				if (!message){
		
					entered +=1;
					check[4]="お問い合わせ内容";
					}

					if (need.checked) {
						for (let j = 0; j < address.length; j++) {
							if (address[j].value === "") {
								entered += 1;
								if (j === 0) {
									address_box += "郵便番号" + ", ";
								} if (j === 1) {
									address_box += "都道府県" + ", ";
								} 	if (j === 2) {
									address_box += "市町区村" + ", ";
								} 		if (j === 3) {
									address_box += "建物名" + ", ";
								}
							}
						}
					}
			
	//必須項目の入力チェック
	if(entered > 0 ){
		for (let i = 0; i < check.length;  i++) {
			if (check[i]) {
				missing_items += check[i] + ", ";
			}
		}
		err[1] = entered+"件の必須項目に未入力があります。" + missing_items+ address_box;
		err_message = err_message + err[1];
		$('.err').html(err_message).show(); //エラー出力
	
	} else{
		$('.err').hide();
	}

	
	if (mail.trim() !== '' && !mail.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
		err[2] = "・メールアドレスが正しく入力されていません";
		err_message = err[2];
		$('.input_mistake').html(err_message).show(); 
	
	} else{
		$('.input_mistake').hide();
	}
	
	 if (postcode.trim() !=='' && !postcode.match(/^[0-9]{3}-[0-9]{4}$/)){
		err[3] = "・郵便番号が正しく入力されていません";
		err_message = err[3]; 
		$('.post').html(err_message).show();
	
	}else{
		$('.post').hide();
	}
	
	if (err_message === '') {
		$('#Form').hide(); // フォームを非表示に
		$('#end').fadeIn(); // 送信完了画面を表示
	  }
	
});