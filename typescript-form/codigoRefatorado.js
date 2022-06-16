"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function htmlSelectors() {
    const selector = (id) => document.getElementById(id);
    return {
        inputName: selector("inputName"),
        inputUserName: selector("inputUserName"),
        inputEmail: selector("inputEmail"),
        inputAddress: selector("inputAddress"),
        inputAddressComplement: selector("inputAddressComplement"),
        typePhone: selector("typePhone"),
        inputZip: selector("inputZip"),
        inputCity: selector("inputCity"),
        inputCompanyName: selector("inputCompanyName"),
        typeURL: selector("typeURL"),
        inputId: selector("inputId"),
        getDataBtn: selector("getDataBtn"),
        sendDataBtn: selector("sendDataBtn"),
    };
}
function getUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let response = yield fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            return yield response.json();
        }
        catch (err) {
            console.error(err);
        }
    });
}
function setupButtonHandlers() {
    const { getDataBtn, sendDataBtn } = htmlSelectors();
    getDataBtn.addEventListener("click", insertData);
    sendDataBtn.addEventListener("click", updateData);
}
setupButtonHandlers();
function insertData(event) {
    return __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        const data = yield getUser(1);
        const inputs = htmlSelectors();
        console.log(data);
        if (!data)
            return;
        inputs.inputName.value = data.name;
        inputs.inputUserName.value = data.username;
        inputs.inputEmail.value = data.email;
        inputs.inputAddress.value = data.address.street;
        inputs.inputAddressComplement.value = data.address.suite;
        inputs.typePhone.value = data.phone;
        inputs.inputId.value = data.id;
        inputs.inputZip.value = data.address.zipcode;
        inputs.inputCity.value = data.address.city;
        inputs.inputCompanyName.value = data.company.name;
        inputs.typeURL.value = data.website;
    });
}
function updateData(event) {
    return __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        const inputs = htmlSelectors();
        const getInfoFromInputs = {
            name: inputs.inputName.value,
            username: inputs.inputUserName.value,
            email: inputs.inputEmail.value,
            id: inputs.inputId.value,
            address: {
                street: inputs.inputAddress.value,
                suite: inputs.inputAddressComplement.value,
                zipcode: inputs.inputZip.value,
                city: inputs.inputCity.value,
            },
            company: {
                name: inputs.inputCompanyName.value,
            },
            phone: inputs.typePhone.value,
            website: inputs.typeURL.value
        };
        function updateUser(id) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    let response = yield fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                        method: "PUT",
                        body: JSON.stringify(getInfoFromInputs),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8",
                        },
                    });
                    return yield response.json();
                }
                catch (err) {
                    console.error(err);
                }
            });
        }
        updateUser(getInfoFromInputs.id);
    });
}
