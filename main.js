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
}

const ProjectObject = new Project();