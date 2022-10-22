const selectCountry = document.querySelector('#selectCountry');
const selectState = document.querySelector('#selectState');
const usa = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    " Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
    ];

const magyar = [
    "Bács-Kiskun",
    "Baranya",
    "Békés",
    "Borsod-Abaúj-Zemplén",
    "Csongrád",
    "Fejér",
    "Győr-Moson-Sopron",
    "Hajdú-Bihar",
    "Heves",
    "Jász-Nagykun-Szolnok",
    "Komárom-Esztergom",
    "Nógrád",
    "Pest",
    "Somogy",
    "Szabolcs-Szatmár-Bereg",
    "Tolna",
    "Vas",
    "Veszprém",
    "Zala",
    ];

    let setStates = (states, container) => {
        let optionList = states.map(value => {
            let optionElement = document.createElement('option');
            optionElement.textContent = value;
            return optionElement;
        });
          
        optionList.forEach(option => container.appendChild(option));
      }
      
      selectCountry.addEventListener('change', () => {
        selectState.innerHTML = '';
        if(selectCountry.value === '1') {
          setStates(magyar, selectState);
        } else {
          setStates(usa, selectState);
        }
      });
      
      setStates(usa, selectState);