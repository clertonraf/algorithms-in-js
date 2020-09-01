class QuickUnion {

  constructor(n) {
    this.id = new Array(n).fill(0).map((_,i) => i)
  }

  root = i => {
    while(i !== this.id[i]) {
      i = this.id[i]
    }
    return i
  }

  union = (p, q) => {
    const proot = this.id[p]
    const qroot = this.id[q]
    this.id[proot] = qroot
  }

  connected = (p, q) => this.root(p) === this.root(q)

  printConnected = (p, q) => console.log(this.connected(p,q))

  printArray = () => console.log(this.id)

}

export default QuickUnion
