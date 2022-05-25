class Color{
    constructor(s1,s2,s3,listName){
        this.s1 = s1
        this.s2 = s2
        this.s3 = s3
        this.listName = listName
    }

    print(){
        console.log(this.s1,this.s2,this.s3);
    }

    getArray(){
        const students = [this.s1,this.s2,this.s3]
        return students
    }

    pop_pop(){
        const studs = this.getArray()
        studs.pop()
        return studs
    }
}

const sec1 = new Color('pushkar','ishan','priyanshu','best_students')
