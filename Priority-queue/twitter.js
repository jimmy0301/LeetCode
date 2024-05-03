
var Twitter = function() {
    this.tweetMap = {};
    this.followMap = {};
    this.time = 1;
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    if (this.tweetMap[userId] === undefined) {
        this.tweetMap[userId] = [[this.time, tweetId]];
    } else {
        this.tweetMap[userId].push([this.time, tweetId]);
    }

    this.time += 1;
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    const maxHeap = new MaxPriorityQueue();
    const res = [];
    this.followMap[userId][userId] = 1;
    const userFollow = this.followMap[userId];
    for (const [followeeId,] of Object.entries(userFollow)) {
        if (this.tweetMap[followeeId] !== undefined) {
            const index = this.tweetMap[followeeId].length - 1;
            const [time, tweetId] = this.tweetMap[followeeId][index];
            maxHeap.enqueue([time, tweetId, followeeId, index - 1])
        }
    }

};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if (this.followMap[followerId] === undefined) {
        this.followMap[followerId] = {};
    }

    this.followMap[followerId][followeeId] = 1;
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if (`${followeeId}` in this.followMap[followerId]) {
        delete this.followMap[followerId][followeeId]
    }
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */