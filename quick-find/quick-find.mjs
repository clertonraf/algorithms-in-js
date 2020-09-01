class QuickFind {

  constructor(n) {
    this.array = new Array(n).fill(0).map((_,i) => i)
  }

  union = (p, q) => {
    const pid = this.array[p]
    const qid = this.array[q]
    this.array.forEach((element, index) => {
      if(element === pid) {
        this.array[index] = qid
      }
    })
  }

  connected = (p, q) => this.array[p] === this.array[q]

  printConnected = (p, q) => console.log(this.connected(p,q))

  printArray = () => console.log(this.array)

}

export default QuickFind
