interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

interface Company {
  name: string
}

interface User {
  id: string;
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
      inputId: selector("inputId") as HTMLInputElement,

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
    getDataBtn.addEventListener("click", insertData);
    sendDataBtn.addEventListener("click", updateData);
  }

setupButtonHandlers();

async function insertData(event: Event): Promise<void> {
    event.preventDefault();
    const data = await getUser(1)
    const inputs = htmlSelectors()
    console.log(data);
    
        
    if (!data) return;
    inputs.inputName.value = data.name;
    inputs.inputUserName.value = data.username;
    inputs.inputEmail.value = data.email;
    inputs.inputAddress.value = data.address.street
    inputs.inputAddressComplement.value = data.address.suite;
    inputs.typePhone.value = data.phone;
    inputs.inputId.value = data.id
    inputs.inputZip.value = data.address.zipcode;
    inputs.inputCity.value = data.address.city;
    inputs.inputCompanyName.value = data.company.name;
    inputs.typeURL.value = data.website;
}

async function updateData(event: Event): Promise<void>{
  event.preventDefault();
  const inputs = htmlSelectors()

  const getInfoFromInputs: User = {
      name: inputs.inputName.value,
      username: inputs.inputUserName.value,
      email: inputs.inputEmail.value,
      id: inputs.inputId.value,
      address:{
        street: inputs.inputAddress.value,
        suite: inputs.inputAddressComplement.value,
        zipcode: inputs.inputZip.value, 
        city: inputs.inputCity.value,
      },
      company:{
        name:inputs.inputCompanyName.value, 
      },
      phone:  inputs.typePhone.value,
      website: inputs.typeURL.value 
        }

   async function updateUser(id: string): Promise<User | undefined> {
    try {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        {
          method: "PUT",
          body: JSON.stringify(getInfoFromInputs),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      return await response.json();
    } catch (err) {
      console.error(err);
    }
  }

  updateUser(getInfoFromInputs.id)
}