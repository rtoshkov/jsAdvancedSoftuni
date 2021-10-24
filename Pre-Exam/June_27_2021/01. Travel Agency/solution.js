window.addEventListener('load', solution);

function solution() {
  const fname = document.getElementById('fname');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const address = document.getElementById('address');
  const code = document.getElementById('code');
  const submitBTN = document.getElementById('submitBTN');
  submitBTN.addEventListener('click', onClick);




  function onClick(){
    let inputs = {
      fname: fname.value,
      email: email.value,
      phone: phone.value,
      address: address.value,
      code:code.value,
    }

    if (inputs.fname === '' || inputs.email === ''){
      return;
    }

    fname.value = '';
    email.value = '';
    phone.value = '';
    address.value = '';
    code.value = '';
    submitBTN.disabled = true;

    const editBTN = document.getElementById('editBTN');
    editBTN.addEventListener('click', onEdit);
    const continueBTN = document.getElementById('continueBTN');
    continueBTN.addEventListener('click', onContinue);

    editBTN.disabled = false;
    continueBTN.disabled = false;



    const ulEl = document.getElementById('infoPreview');
    let li1 = document.createElement('LI');
    let li2 = document.createElement('LI');
    let li3 = document.createElement('LI');
    let li4 = document.createElement('LI');
    let li5 = document.createElement('LI');
    li1.textContent = `Full Name: ${inputs.fname}`;
    li2.textContent = `Email: ${inputs.email}`;
    li3.textContent = `Phone Number: ${inputs.phone}`;
    li4.textContent = `Address: ${inputs.address}`;
    li5.textContent = `Postal Code: ${inputs.code}`;
    ulEl.appendChild(li1);
    ulEl.appendChild(li2);
    ulEl.appendChild(li3);
    ulEl.appendChild(li4);
    ulEl.appendChild(li5);


    function onEdit(){
      submitBTN.disabled = false;
      editBTN.disabled = true;
      continueBTN.disabled = true;


      let [txtName,txtEmail,txtPhone,txtAddres,txtCode] = Array.from(ulEl.children)
      fname.value = txtName.textContent.split(': ')[1];
      email.value = txtEmail.textContent.split(': ')[1];
      phone.value = txtPhone.textContent.split(': ')[1];
      address.value = txtAddres.textContent.split(': ')[1];
      code.value = txtCode.textContent.split(': ')[1];

      li1.remove();
      li2.remove();
      li3.remove();
      li4.remove();
      li5.remove();

    }

    function onContinue(){
      const divBlock = document.getElementById('block');
      divBlock.innerHTML = '';
      // Array.from(divBlock.children).forEach((z) => z.remove());
      const h3El = document.createElement('H3');
      h3El.textContent = 'Thank you for your reservation!';
      divBlock.appendChild(h3El);
    }

  }


}

