
//Data from: https://data.giss.nasa.gov/gistemp/
export let year = [];
export let temp = [];

async function getData(){
    
    let response = await fetch("ZonAnn.Ts+dSST.csv");
    let data = await response.text();//we getting text 

    let dataArray = data.split("\n").slice(1); //an Array line strings
    //.slice(1) removes the first array value

    dataArray.forEach(arrayValue =>{
        let columns = arrayValue.split(",");
        // let year = columns[0];
        // let temp = columns[1];
        // console.log(year,temp);
        year.push(columns[0]);
        temp.push(parseFloat(columns[1])+0.7);
    })
      
};
export default  getData;

// #####testing########
// getData();
// console.log(year);
// console.log(temp);