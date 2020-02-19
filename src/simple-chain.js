const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        someStr = `( ${value} )`;
        this.chain.push(someStr)
        return this;
    },
    removeLink(position) {
        if (this.chain.length < position || position - 1 < 0 || typeof position !== 'number') {
            this.chain = [];
            throw new Error('removing wrong link');
        }
        this.chain.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        someStr = this.chain.join('~~');
        this.chain = [];
        return someStr;
    }
    // chain: [],
    // getLength() {

    // },
    // addLink(value) {
    //     this.chain.push(`( ${value} )`)
    //     return this;
    // },
    // removeLink(position) {
    //     /* if (position - 1 < 0 || this.chain.length < position || !(typeof position === 'number')) {
    //         this.chain = [];
    //         throw `removing wrong link`;
    //     } */

    //     this.chain.splice(position - 1, 1);
    //     return this;

    // },
    // reverseChain() {
    //     this.chain.reverse()
    //     return this;
    // },
    // finishChain() {
    //     const chainStr = this.chain.join('~~');
    //     this.chain = [];
    //     return chainStr;
    // }
};


module.exports = chainMaker;