interface Address {
  street: String;
  suite: string;
  city: string;
  zipcode: string;
}

interface Company {
  name: string
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

function htmlSelectors() {
    const selector = (id: string) => document.getElementById(id);

    return {
      inputName: selector("inputName") as HTMLInputElement,
      inputUserName: selector("inputUserName") as HTMLInputElement,
      inputEmail: selector("inputEmail") as HTMLInputElement,
      inputAddress: selector("inputAddress") as HTMLInputElement,
      inputAddressComplement: selector("inputAddressComplement") as HTMLInputElement,
      typePhone: selector("typePhone") as HTMLInputElement,
      inputZip: selector("inputZip") as HTMLInputElement,
      inputCity: selector("inputCity") as HTMLInputElement,
      inputCompanyName: selector("inputCompanyName") as HTMLInputElement,
      typeURL: selector("typeURL") as HTMLInputElement,

      getDataBtn: selector("getDataBtn") as HTMLButtonElement,
      sendDataBtn: selector("sendDataBtn") as HTMLButtonElement,
    }
}

async function getUser(userId: number): Promise<User | undefined> {
    try {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      return await response.json();
    } catch (err) {
      console.error(err);
    }
}

function setupButtonHandlers():void {
    const {getDataBtn, sendDataBtn} = htmlSelectors();
    getDataBtn.addEventListener("click", insertData());
    // sendDataBtn.addEventListener("click", );
  }

setupButtonHandlers();

async function insertData(): Promise<void> {
    // event.preventDefault();
    const data = await getUser(1)
    const inputs = htmlSelectors()
    if (!data) return;
    inputs.inputName.value = data.name;

}

