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

function form() {
  function htmlSelectors() {
    const selector = (id: string) => document.getElementById(id);

    return {
      inputName: selector("inputName") as HTMLInputElement,
      inputUserName: selector("inputUserName") as HTMLInputElement,
      inputEmail: selector("inputEmail") as HTMLInputElement,
      inputAddress: selector("inputAddress") as HTMLInputElement,
      inputAddressComplement: selector(
        "inputAddressComplement"
      ) as HTMLInputElement,
      typePhone: selector("typePhone") as HTMLInputElement,
      inputZip: selector("inputZip") as HTMLInputElement,
      inputCity: selector("inputCity") as HTMLInputElement,
      inputCompanyName: selector("inputCompanyName") as HTMLInputElement,
      typeURL: selector("typeURL") as HTMLInputElement,

      getDataBtn: selector("getDataBtn") as HTMLButtonElement,
      sendDataBtn: selector("sendDataBtn") as HTMLButtonElement,
    };
  }

  async function updateUser(user: User): Promise<User | undefined> {
    try {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${user.id}`,
        {
          method: "PUT",
          body: JSON.stringify(user),
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

  async function handleUpdateUser(event: Event) {
    event.preventDefault();
    const { inputName, inputUserName, inputEmail, inputAddress } =
      htmlSelectors();

    const saveUser = await updateUser({
      id: 1,
      name: inputName.value,
      username: inputUserName.value,
      email: inputEmail.value,
      address: {
        street: inputAddress.value,
        suite: inputAddress.value,
        city: inputAddress.value,
        zipcode: inputAddress.value,
      },
      phone: inputAddress.value,
      website: inputAddress.value,
      company: {
        name: inputAddress.value,
      },
    });

    if (saveUser?.id) {
      inputUserName.value = "";
      inputName.value = "";
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

  async function logRandomUser(event: Event): Promise<void> {
    event.preventDefault();
    const firstUser = await getUser(2);
    const allSelectors = htmlSelectors();
    if (!firstUser) return;
    allSelectors.inputName.value = firstUser.name;
  }

  function setupButtonHandlers(): void {
    const { sendDataBtn, getDataBtn } = htmlSelectors();
    getDataBtn.addEventListener("click", logRandomUser);
    sendDataBtn.addEventListener("click", handleUpdateUser);
  }

  function init(): void {
    setupButtonHandlers();
  }
  return {
    init,
    logRandomUser,
  };
}
form().init();
