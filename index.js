const calculationButton = document.querySelector('.but_calculation');
const checkUnit = document.querySelector("#driveUnit");
const checkWheel = document.querySelector("#steeringWheel");
const allValuesSum = [];

function onChange() {
    const checkBox = this.querySelectorAll('[type="checkbox"]'),
        checkChecked = this.querySelectorAll('[type="checkbox"]:checked');
for(let j=0; j<checkBox.length; j++)
    if(checkChecked.length>=1){
        checkBox[j].disabled = true;
        for(let i=0; i<checkChecked.length; i++)
        checkChecked[i].disabled = false;
    } else {checkBox[j].disabled = false;}
}
checkUnit.onchange = onChange;
checkWheel.onchange = onChange;

calculationButton.addEventListener('click', () =>{
    allValuesSum.length = 0;
    document.querySelector('#price').innerHTML = '';
    
    const carMarckList = document.querySelector('#carMarck'),
        carYearList = document.querySelector('#carYear'),
        carTypeList = document.querySelector('#carType'),
        carTransmissionList = document.querySelector('#transmission [type="radio"]:checked'),
        carFuelList = document.querySelector('#fuelType [type="radio"]:checked'),
        carWheelList = document.querySelector('#steeringWheel [type="checkbox"]:checked'),
        cardriveUnitlList = document.querySelector('#driveUnit [type="checkbox"]:checked');

        if(carMarckList.value === "none" 
            || carTransmissionList == null 
            || carYearList.value === "none"
            || carTypeList.value === "none"
            || carFuelList == null 
            || carWheelList == null 
            || cardriveUnitlList == null){
                document.querySelector('#price').innerHTML = 'Часть полей не заполнена';
        } 

    allValuesSum.push(carMarckList.value, 
        carYearList.value, 
        carTypeList.value, 
        carTransmissionList.value, 
        carFuelList.value, 
        carWheelList.value, 
        cardriveUnitlList.value,);

    function sum(){
        if(carMarckList.value != "none"
            && carYearList.value != "none"
            && carTypeList.value != "none"
            && carTransmissionList.value !== false 
            && carFuelList.value !== false
            && carWheelList.value !== false 
            && cardriveUnitlList.value !== false){
                let sum=0;
                for(let i=0; i<allValuesSum.length; i++){
                    sum += + allValuesSum[i];
                }
                return sum;
            }
        }   
        
        console.log(allValuesSum);
        console.log( sum() );
        document.querySelector('#price').innerHTML = 'Итоговая стоимость: <br/>' + (new Intl.NumberFormat('ru-RU').format(sum())) +' рублей';
})

document.querySelector('.twitt').addEventListener('click', () => window.open('https://investor.twitterinc.com/home/default.aspx')); 
document.querySelector('.youtube').addEventListener('click', () => window.open('https://www.youtube.com/')); 
document.querySelector('.facebook').addEventListener('click', () => window.open('https://facebookvhod.ru/')); 