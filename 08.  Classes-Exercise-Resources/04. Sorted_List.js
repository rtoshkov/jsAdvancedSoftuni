class List{
    constructor() {
        this.list = [];
        this.size = 0;
    }

    remove(idx){
        if(this._validIndex(idx)){
            this.size -= 1;
            this.list.splice(idx,1);
            this.list.sort((a,b) => a -b);
            return
        }

        throw new Error('Invalid index')
    }

    add(element){
        this.size += 1;
        this.list.push(element);
        this.list.sort((a,b) => a -b);
    }

    _validIndex(idx){
        return idx < this.list.length && idx >= 0
    }

    get(idx){
        if(this._validIndex(idx)){
            this.list.sort((a,b) => a -b);
            return this.list[idx];
        }
        throw new Error('Invalid index')
    }
}
