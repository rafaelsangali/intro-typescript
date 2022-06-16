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
    getDataBtn.addEventListener("click", insertData());
    // sendDataBtn.addEventListener("click", );
}
setupButtonHandlers();
function insertData() {
    return __awaiter(this, void 0, void 0, function* () {
        // event.preventDefault();
        const data = yield getUser(1);
        const inputs = htmlSelectors();
        if (!data)
            return;
        inputs.inputName.value = data.name;
    });
}
