//minden reszfeladatban kulon fuggvenyben adjuk meg a fekadatokat

class Project {
    oldestCarBtn;
    after2004Btn;
    searchField;
    searchCarBrandBtn;
    resultTbody;

    constructor(){
        this.oldestCarBtn = document.getElementById('oldestCarBtn');
        this.after2004Btn = document.getElementById('after2004Btn');
        this.searchField = document.getElementById('searchField');
        this.searchCarBrandBtn = document.getElementById('searchCarBrandBtn');
        this.resultTbody = document.getElementById('resultTbody');
    
        this.oldestCarBtn.onclick = this.findOldestCar;
        this.after2004Btn.onclick = this.findCarsAfter2004;
        this.searchCarBrandBtn.onclick = this.searchForCarBrand;
    }

    requestCars = async () => {
        let respond = await fetch ('cars.json');
        let cars = await respond.json();
        return cars;
    }

    putCarsToTable = (carArray) => {
        let resultHTML = '';
        for(let carData of carArray) {
            resultHTML += 
            //stringbe beagyayni megszakitas nelkul ${...}
            `<tr>
                <td>${carData.brand}</td>
                <td>${carData.type}</td>
                <td>${carData.factoryYear}</td>
            </tr>`
        }
        this.resultTbody.innerHTML = resultHTML;


    }
    findOldestCar = async () => {
        let cars = await this.requestCars();
        
        let minYear = cars[0].factoryYear;
        for(let i=1; i<cars.length; i++){
            if(cars[i].factoryYear < minYear){
                minYear = cars[i].factoryYear;
            }
        } 
//csinalunk egz ures tombot ezt majd odaadjuk a putcasrontable fuggvenynek

        let result = [];
        for(let carData of cars){
            if(carData.factoryYear == minYear){
                //a push sal hozzaadjuk a holtverseny helyzeteket
                result.push(carData);
            }
        }
// odaadjuk a putcasrontable fuggvenynek
        this.putCarsToTable(result);

    }

    findCarsAfter2004 = async () => {
        let cars = await this.requestCars();

        let result =[];
        for(let carData  of cars){
            if(carData.factoryYear > 2004) {
                result.push(carData);
            }

            this.putCarsToTable(result);
        }
    }

    searchForCarBrand = async () =>{
            const searchText = this.searchField.ariaValueMax.toLocaleLowerCase();
            if(searchText.length > 0){

                let cars = await this.requestCars();

                let result = [];
                for(let carData of cars){
                    if(carData.brand.toLocaleLowerCase() == searchText) {
                        result.push(carData);
                    }
                }

                if(result.length > 0) {
                    this.putCarsToTable(result);
                } else {
                    //nincs talalat
                }


            }else{
                //ures mezo
            }
        

    }

}

const ProjectObject = new Project();