const LinkList = require("./linkList");

const linkList = new LinkList();

console.log(linkList);

for (let i = 1; i <= 9 ; i += 1) {
    linkList.insertNode(i);
}

const newLinkList = linkList.deleteOddNodesAndCreateNew();
// linkList.deleteOddNodes();
// linkList.printLinkList();

newLinkList.printLinkList();