class Group {
    constructor() {
        this.data = [];
    }

    has(element) {
        return this.data.some(x => x === element);
    }

    add(element) {
        if (!this.has(element)) {
            this.data.push(element);
        }
    }

    delete(element) {
        this.data = this.data.filter(x => x !== element);
    }

    [Symbol.iterator]() {
        let index = -1;
        let data  = this.data;
        return {
          next: () => ({ value: data[++index], done: !(index in data) })
        }
    }

    static from(data) {
        const newGroup = new Group();
        for (let index = 0; index < data.length; index++) {
            newGroup.add(data[index]);
        }
        return newGroup;
    }
}
