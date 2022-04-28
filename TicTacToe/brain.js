export let Tasks =
{
    flag: true,

    opposite() {
        this.flag = !(this.flag);
    },

    counter: 0,

    counterInc(){
        ++this.counter;
    }
}
