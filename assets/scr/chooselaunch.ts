const { ccclass, property } = cc._decorator;

@ccclass
export default class launchmain extends cc.Component {

    @property(cc.Label)
    list: cc.Label = null;
    @property(cc.Label)
    food: cc.Label = null;


    private fdList: string[] = [];
    private fdlist: string[] = ["a", "b", "c", "d", "e", "f"];
    choose(list: string[]) {
        let ind = Math.random() * list.length | 0;
        let food = list[ind];
        let newlist: string[] = [];
        for (let i = 0; i < list.length; ++i) {
            if (i !== ind) {
                newlist.push(list[i])
            }
        }
        return { Food: food, List: newlist }

    }

    btchooselist() {
        if (this.fdList.length === 0) {
            this.fdList = this.fdlist
        }
        let ret = this.choose(this.fdList);
        this.fdList = ret.List;
        this.list.string = `今天的菜谱是${this.fdList}`;
    }
    btchoosefood() {
        if (this.fdList.length === 0) {
            this.fdList = this.fdlist
        }
        let ret = this.choose(this.fdList);
        // this.fdList=ret.List;
        let food = ret.Food;
        this.food.string = `可以吃${food}`;
    }
}
