const types = ['repair', 'replace', 'solar'];

const zip = () => {
  // return Math.floor(Math.random() * 30000);
  return Math.floor(Math.random() * (99999 - 50000)) + 10000;
}

const typePicker = () => {
  return Math.floor(Math.random() * (3 - 0)) + 0;
}

const sizePicker = () => {
  return Math.floor(Math.random() * (500 - 0)) + 0;
}

const generator = () => {
  const obj = {
    job: 'roof',
    type: types[typePicker()],
    zip: zip(),
    height: sizePicker(),
    width: sizePicker(),
    price: '$' + zip()
  }

  return obj;
}

const jobQuotes = {
  jobs: []
};

for (let i = 0; i < 50; i++) {
  let job = generator();
  jobQuotes.jobs.push(job);
}

;
console.log(JSON.stringify(jobQuotes));