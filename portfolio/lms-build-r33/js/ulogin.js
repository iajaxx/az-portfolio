var userLanguage = (navigator.language) ? navigator.language : navigator.userLanguage;

function cleanUpTextField1(id) {
	 $("#" + id).removeClass('text-field-error'); 
	 $("#userIdStatus").hide();
 }

function checkForEnableState(textid1,textid2,defaulttext1,defaulttext2,buttonid,validate1,validate2) {
	
	if (textid1 == 'Verify Your User ID' || textid1 == '') {
		$("#" + textid1).removeClass('text-field-error'); 
			$("#userIdStatus").hide();
	} else {
	if (validate1 == 'email') {	
		 var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;  
		 var emailaddress = $("#" + textid1).val();
		 if (!emailReg.test(emailaddress))  {
			$("#" + textid1).addClass('text-field-error');
			 $("#userIdStatus").show();
	} else {
    		$("#" + textid1).removeClass('text-field-error'); 
			$("#userIdStatus").hide();
	}
		}
			
	}

	var currentTextField1 = $("#" + textid1).val()
	var currentTextField2 = $("#" + textid2).val()
	
	if (textid1.length == 0 || textid2.length == 0 || currentTextField1 == defaulttext1 || currentTextField1 == '' || currentTextField2 == defaulttext2 || currentTextField2 == '') {
	$("#" + buttonid).fadeTo(150,.6);
	$("#" + buttonid).attr("disabled", "disabled");
	} else {
	if (!$("#" + textid1).hasClass('text-field-error')) {
	$("#" + buttonid).fadeTo(150,1);
	$("#" + buttonid).removeAttr("disabled");
	}
	}
}

function showhide(id) {
	if ($("." +id).is(":hidden"))  {
		$("." + id).show();	
	} else {
		$("." + id).hide();	
	}
}

function showhideid(id) {
	if ($("#" +id).is(":hidden"))  {
		$("#" + id).slideDown();	
	} else {
		$("#" + id).slideUp();	
	}
}


function checkForSingleFormState(textid,buttonid,defaultvalue) {
	var textFieldValue = $("#" + textid).val();
 
	if (textid.length == 0 || textFieldValue == defaultvalue || textFieldValue == '') {
		$("#" + buttonid).fadeTo(150,.6);
		$("#" + buttonid).attr("disabled", "disabled");
	} else {
		$("#" + buttonid).fadeTo(150,1);
		$("#" + buttonid).removeAttr("disabled");
	}
}
function enableButton(id) {
	$("#" + id).fadeTo(150,1);
	$("#" + id).removeAttr("disabled");
}

function changeToPassword(id) {
	$("#" + id).attr("type","password")
}

function checkStateSelect() {
		currentlySelected = $("#country").val();
		if (currentlySelected == "US") {
			$(".StateSelectInternational").html("<select name=state id=state onchange='checkStateValid();'><option value='0'>Please Select</option><option value='AL'>ALABAMA</option><option value='AK'>ALASKA</option><option value='AS'>AMERICAN SAMOA</option> <option value='AZ'>ARIZONA</option><option value='AR'>ARKANSAS</option><option value='CA'>CALIFORNIA</option><option value='CO'>COLORADO</option><option value='CT'>CONNECTICUT</option><option value='DE'>DELAWARE</option><option value='DC'>DISTRICT OF COLUMBIA</option><option value='FL'>FLORIDA</option><option value='GA'>GEORGIA</option><option value='GU'>GUAM</option> <option value='HI'>HAWAII</option><option value='ID'>IDAHO</option><option value='IL'>ILLINOIS</option><option value='IN'>INDIANA</option><option value='IA'>IOWA</option><option value='KS'>KANSAS</option><option value='KY'>KENTUCKY</option><option value='LA'>LOUISIANA</option><option value='ME'>MAINE</option><option value='MD'>MARYLAND</option><option value='MA'>MASSACHUSETTS</option><option value='MI'>MICHIGAN</option><option value='MN'>MINNESOTA</option><option value='MS'>MISSISSIPPI</option><option value='MO'>MISSOURI</option><option value='MT'>MONTANA</option><option value='NE'>NEBRASKA</option><option value='NV'>NEVADA</option><option value='NH'>NEW HAMPSHIRE</option><option value='NJ'>NEW JERSEY</option><option value='NM'>NEW MEXICO</option><option value='NY'>NEW YORK</option><option value='NC'>NORTH CAROLINA</option><option value='ND'>NORTH DAKOTA</option><option value='MP'>NORTHERN MARIANA ISLANDS</option><option value='OH'>OHIO</option><option value='OK'>OKLAHOMA</option><option value='OR'>OREGON</option><option value='PA'>PENNSYLVANIA</option><option value='PR'>PUERTO RICO</option><option value='RI'>RHODE ISLAND</option><option value='SC'>SOUTH CAROLINA</option><option value='SD'>SOUTH DAKOTA</option><option value='TN'>TENNESSEE</option><option value='TX'>TEXAS</option><option value='UM'>UNITED STATES MINOR OUTLYING ISLANDS</option> <option value='UT'>UTAH</option><option value='VT'>VERMONT</option><option value='VI'>VIRGIN ISLANDS, U.S.</option> <option value='VA'>VIRGINIA</option><option value='WA'>WASHINGTON</option><option value='WV'>WEST VIRGINIA</option><option value='WI'>WISCONSIN</option><option value='WY'>WYOMING</option></select><input name='statestorage' id='statestorage' type='hidden' value='' />");
			$(".StateSelectInternational").removeClass("profile-text-field");
			$(".StateSelectInternational").addClass("profile-select-field");
			$("#state").valid();
		} else if (currentlySelected == "CA") {
			$(".StateSelectInternational").html("<select name=state id=state onchange='checkStateValid();'><option value='0'>Please Select</option><option value='AB'>ALBERTA</option><option value='BC'>BRITISH COLUMBIA</option><option value='MB'>MANITOBA</option><option value='NB'>NEW BRUNSWICK</option><option value='NL'>NEWFOUNDLAND AND LABRADOR</option><option value='NT'>NORTHWEST TERRITORIES</option><option value='NS'>NOVA SCOTIA</option><option value='NU'>NUNAVUT</option><option value='ON'>ONTARIO</option><option value='PE'>PRINCE EDWARD ISLAND</option><option value='QC'>QUEBEC</option><option value='SK'>SASKATCHEWAN</option><option value='YT'>YUKON TERRITORY</option></select><input name='statestorage' id='statestorage' type='hidden' value='' />");
			$(".StateSelectInternational").removeClass("profile-text-field");
			$(".StateSelectInternational").addClass("profile-select-field");
			$("#state").valid();
		} else {
			$(".StateSelectInternational").html("<input name='state' id='state' type='text' class='reg-field' maxlength='50' onblur='goToUpper(this); removeSpaces(this);' />");
			$(".StateSelectInternational").removeClass("profile-select-field");
			$(".StateSelectInternational").addClass("profile-text-field");
			$("#state").valid();
		}
}

function checkStateSelectBill() {
		currentlySelected = $("#billcountry").val();
		if (currentlySelected == "US") {
			$(".StateSelectInternationalBilling").html("<select name=billstate id=billstate onchange='checkStateValidBill();'><option value='0'>Please Select</option><option value='AL'>ALABAMA</option><option value='AK'>ALASKA</option><option value='AS'>AMERICAN SAMOA</option> <option value='AZ'>ARIZONA</option><option value='AR'>ARKANSAS</option><option value='CA'>CALIFORNIA</option><option value='CO'>COLORADO</option><option value='CT'>CONNECTICUT</option><option value='DE'>DELAWARE</option><option value='DC'>DISTRICT OF COLUMBIA</option><option value='FL'>FLORIDA</option><option value='GA'>GEORGIA</option><option value='GU'>GUAM</option> <option value='HI'>HAWAII</option><option value='ID'>IDAHO</option><option value='IL'>ILLINOIS</option><option value='IN'>INDIANA</option><option value='IA'>IOWA</option><option value='KS'>KANSAS</option><option value='KY'>KENTUCKY</option><option value='LA'>LOUISIANA</option><option value='ME'>MAINE</option><option value='MD'>MARYLAND</option><option value='MA'>MASSACHUSETTS</option><option value='MI'>MICHIGAN</option><option value='MN'>MINNESOTA</option><option value='MS'>MISSISSIPPI</option><option value='MO'>MISSOURI</option><option value='MT'>MONTANA</option><option value='NE'>NEBRASKA</option><option value='NV'>NEVADA</option><option value='NH'>NEW HAMPSHIRE</option><option value='NJ'>NEW JERSEY</option><option value='NM'>NEW MEXICO</option><option value='NY'>NEW YORK</option><option value='NC'>NORTH CAROLINA</option><option value='ND'>NORTH DAKOTA</option><option value='MP'>NORTHERN MARIANA ISLANDS</option><option value='OH'>OHIO</option><option value='OK'>OKLAHOMA</option><option value='OR'>OREGON</option><option value='PA'>PENNSYLVANIA</option><option value='PR'>PUERTO RICO</option><option value='RI'>RHODE ISLAND</option><option value='SC'>SOUTH CAROLINA</option><option value='SD'>SOUTH DAKOTA</option><option value='TN'>TENNESSEE</option><option value='TX'>TEXAS</option><option value='UM'>UNITED STATES MINOR OUTLYING ISLANDS</option> <option value='UT'>UTAH</option><option value='VT'>VERMONT</option><option value='VI'>VIRGIN ISLANDS, U.S.</option> <option value='VA'>VIRGINIA</option><option value='WA'>WASHINGTON</option><option value='WV'>WEST VIRGINIA</option><option value='WI'>WISCONSIN</option><option value='WY'>WYOMING</option></select><input name='billstatestorage' id='billstatestorage' type='hidden' value='' />");
			$("#billstate").valid();
		} else if (currentlySelected == "CA") {
			$(".StateSelectInternationalBilling").html("<select name=state id=state onchange='checkStateValidBill();'><option value='0'>Please Select</option><option value='AB'>ALBERTA</option><option value='BC'>BRITISH COLUMBIA</option><option value='MB'>MANITOBA</option><option value='NB'>NEW BRUNSWICK</option><option value='NL'>NEWFOUNDLAND AND LABRADOR</option><option value='NT'>NORTHWEST TERRITORIES</option><option value='NS'>NOVA SCOTIA</option><option value='NU'>NUNAVUT</option><option value='ON'>ONTARIO</option><option value='PE'>PRINCE EDWARD ISLAND</option><option value='QC'>QUEBEC</option><option value='SK'>SASKATCHEWAN</option><option value='YT'>YUKON TERRITORY</option></select><input name='billstatestorage' id='billstatestorage' type='hidden' value='' />");
			$("#billstate").valid();
		} else {
			$(".StateSelectInternationalBilling").html("<input name='state' id='state' type='text' class='reg-field' maxlength='50' onblur='goToUpper(this); removeSpaces(this);' />");
			$("#billstate").valid();
		}
}

function fadePanels(panel1,panel2) {
	$("#" + panel1).fadeOut(1000);
	$("#" + panel2).delay(1000).fadeIn(1000);
}

function checkStateValid() {
	$("#state").valid();
}
function checkStateValidBill() {
	$("#billstate").valid();
}
function enableFields(id,checkid) {
	if ($("#" + checkid).is(":checked")) {
	$("#" + id).slideDown();
	} else {
	$("#" + id).slideUp();	
	}
}
function checkBoxTransform(checkid,id1,id2) {
	if ($("#" + checkid).is(":checked")) {
	$("#" + id1).slideUp(500);
	if (id2 != 'none') {
	$("#" + id2).delay(500).slideDown(500);
	}
	} else {
		if (id2 != 'none') {
	$("#" + id2).delay(500).slideUp(500);
		}
	$("#" + id1).slideDown(500);	
	}
}

function enableFieldsFromMenu(id,menu) {
	if ($("#" + menu).val() == "0") {
		$("#" + id).prop('disabled',true);
		$("#" + id).removeClass('enabled');
		$("#" + id).addClass('disabled');
		$("#" + id).val("");
		$("#" + menu).valid();
		$("#" + id).valid();	
	} else {
		$("#" + id).prop('disabled',false);
		$("#" + id).removeClass('disabled');
		$("#" + id).addClass('enabled');
	}
}
function goToURL(url) {
	location.href = url;
}
function goToUpper(elem) {
	elem.value = elem.value.toUpperCase();	
}
function removeSpaces(elem) {
	elem.value = elem.value.replace(/^\s+|\s+$/g,'')	
}

function syncSecurityMenus(menu) {
	if ($('#securitymenu1').val() == "0") {
			EmptySecurityMenu2();
			$("#securitytext1").val('');
			$("#securitytext2").val('');
		} else {
			$("#securitytext1").val('');
			$("#securitytext2").val('');
			var syncItem = $("#securitymenu" + menu).val();
			EmptySecurityMenu2();
			$("#securitymenu2 option[value='" + syncItem + "']").remove();
		}
}
function securitymenuclear() {
	$("#securitytext2").val('');
}
function EmptySecurityMenu2() {
	$("#securitymenu2").empty();
	$("#securitymenu2").append("<option value='0'>Please Select</option><option value='1'>What was the model of your first car?</option><option value='2'>What city were you born in?</option><option value='3'>What was your nickname as a child?</option><option value='4'>What is your favorite color?</option><option value='5'>What is your favorite travel destination?</option><option value='6'>What was the name of your first pet?</option><option value='7'>What is your mother's maiden name?</option><option value='8'>What is your father's middle name?</option>");
}	

function populateUserID() {
	if (!$("#email").hasClass('text-field-error') && !$("#email_confirm").hasClass('text-field-error')) {
		$("#userid").val($("#email_confirm").val());
		$("#userid").valid();
	} else {
		$("#userid").val("");
		$("#userid").valid();
	}
}


// No Paste
(function(){var onload=window.onload;window.onload=function(){if(typeof onload=="function"){onload.apply(this,arguments)}var fields=[];var inputs=document.getElementsByTagName("input");var textareas=document.getElementsByTagName("textarea");for(var i=0;i<inputs.length;i++){fields.push(inputs[i])}for(var i=0;i<textareas.length;i++){fields.push(textareas[i])}for(var i=0;i<fields.length;i++){var field=fields[i];if(typeof field.onpaste!="function"&&!!field.getAttribute("onpaste")){field.onpaste=eval("(function () { "+field.getAttribute("onpaste")+" })")}if(typeof field.onpaste=="function"){var oninput=field.oninput;field.oninput=function(){if(typeof oninput=="function"){oninput.apply(this,arguments)}if(typeof this.previousValue=="undefined"){this.previousValue=this.value}var e=Math.abs(this.previousValue.length-this.value.length)>1&&this.value!="";if(e&&!this.onpaste.apply(this,arguments)){this.value=this.previousValue}this.previousValue=this.value};if(field.addEventListener){field.addEventListener("input",field.oninput,false)}else if(field.attachEvent){field.attachEvent("oninput",field.oninput)}}}}})()