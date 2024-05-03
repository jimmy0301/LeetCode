const LinkList = require("./linkList");

const linkList = new LinkList();

console.log(linkList);

for (let i = 0; i < 10; i += 1) {
    linkList.insertNode(i);
}
linkList.printLinkList();