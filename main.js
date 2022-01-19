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
                <td>${carData.favtoryYear}</td>
            </tr>`
        }
        this.resultTbody.innerHTML = resultHTML;
        

    }
}

const ProjectObject = new Project();