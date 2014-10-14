/** 
 * @fileoverview prioityQueue
 * @author 郁森<senyu@mail.dlut.edu.cn>
 * @description Javascript实现的 优先队列
 */
 ;(function (global) {
 	var prePrioityQueue = prioityQueue.prePrioityQueue = global.prioityQueue;
 	global.prioityQueue = prioityQueue;

    /**
     * @description 队列存储
     * @type {Array}
     */
 	var heap = [];
 	var options = {};

 	/**
     * @description prioityQueue工厂函数
     * @arg {Function} cmp 排序比较函数
     * @arg {Array} arr 初始构造数据
     */
 	function prioityQueue(cmp, arr) {
 		options['arr'] = arr || [];
 		options['cmp'] = cmp || function (a, b) { return a < b;};



 	}

 	function queueAdjust() {
 		
 	}

 	function pushQueue(data) {

 	}

 	function popQueue() {

 	}

 	function topQueue() {

 	}

 	function getQueueLength() {

 	}

 	prioityQueue.prototype = {
 		push: pushQueue,
 		pop: popQueue,
 		top: topQueue,
 		length: getQueueLength,
 		empty: function () { return !getQueueLength(); },

 	}

 	return prioityQueue;

 })(global);


/**
 * TEST
 */
 (function () {

 	var q = new prioityQueue();
 	console.log(q);

 })();