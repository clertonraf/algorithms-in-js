import QuickFind from './quick-find.mjs'

const client = new QuickFind(10)

client.union(4,3)

client.union(3,8)

client.union(6,5)

client.union(9,4)

client.union(2,1)

client.printConnected(0,7)
client.printConnected(8,9)

client.union(5,0)

client.union(7,2)

client.union(6,1)

client.union(1,0)

client.printConnected(0,7)