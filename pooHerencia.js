class Animal {
    constructor(){
        this.brail = true;
        this.legs = 0;
    }
}

//Extends es para heredar del padre
class human extends Animal {
    constructor(){
        super().legs=2;
    }

    tiene_cerebro(){
        return this.brain
    }

}