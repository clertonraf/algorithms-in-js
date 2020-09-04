class WeightedQuickUnion {

  constructor(n) {
    this.id = new Array(n).fill(0).map((_,i) => i)
    this.size = new Array(n).fill(1)
  }

  root = i => {
    while(i !== this.id[i]) {
      i = this.id[i]
    }
    return i
  }

  union = (p, q) => {
    const proot = this.root(p)
    const qroot = this.root(q)
    if(proot === qroot) return
    if(this.size[proot] < this.size[qroot]) {
      this.id[proot] = qroot
      this.size[qroot] += this.size[proot]
    } else {
      this.id[qroot] = proot
      this.size[proot] += this.size[qroot]
    }
  }

  connected = (p, q) => this.root(p) === this.root(q)

  printConnected = (p, q) => console.log(this.connected(p,q))

  printArray = () => console.log(this.id)

}

export default WeightedQuickUnion
