const { ccclass, property } = cc._decorator;

@ccclass
export default class launchmain extends cc.Component {

    @property(cc.Label)
    list: cc.Label = null;
    @property(cc.Label)
    food: cc.Label = null;


    private fdList: string[] = [];
    private fdlist: string[] = ["老卤面", "安庆小吃", "兰州拉面", "黄焖鸡", "沙县小吃", "其他"];
    choose(list: string[]) {
        let ind = Math.random() * list.length | 0;
        let food = list[ind];
        let newlist: string[] = [];
        for (let i = 0; i < list.length; ++i) {
            if (list[i] !== food) {
                newlist.push(list[i]);
            }
        }
        return {List:newlist,Food:food};
    }
    btchooselist() {
        if (this.fdList.length === 0) {
            this.fdList = this.fdlist
        }
        this.list.string = `今天的菜谱是${this.fdList}`;
        
    }
    btchoosefood() {
        if (this.fdList.length === 0) {
            this.fdList = this.fdlist
        }
        let ret=this.choose(this.fdList);
        this.fdList=ret.List;
        let food=ret.Food
        this.food.string = `可以吃${food}`; 
        
    }
}
