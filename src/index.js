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
 	var op = {};
 	var length = 0;
 	/**
     * @description prioityQueue工厂函数
     * @arg {Function} cmp 排序比较函数
     * @arg {Array} arr 初始构造数据
     */
 	function prioityQueue(cmp, arr) {
 		op['arr'] = arr || [];1
 		op['cmp'] = cmp || function (a, b) { return a < b;};
 		length = op['arr'].length;
 		heap = [null].concat(op['arr']);
 		initQueue();
 		console.log('Heap Inited', heap);
 	}

 	function initQueue() {
 		var l = length;
 		for ( var i = parseInt(l/2); i>0; i-- ) {
 			queueAdjustTop(i, l);
 		}
 	}

 	function queueAdjustTop(l, r) {
 		var rc = heap[l];
 		for ( var i = 2*l; i<= r; i *= 2 ) {
 			if ( i<r && !op.cmp(heap[i], heap[i+1]) ) {
 				i++;
 			}
 			if ( op.cmp( rc, heap[i] ) ) break;
 			heap[l] = heap[i];
 			l = i;
 		}
 		heap[l] = rc;
 	}
 	//把最后一个元素往上冒
 	function queueAdjustBottom() {
 		var l = length,
 			p,
 			tSwap;
 		for ( var i = l; i>1; i = parseInt(i/2) ) {
 			p = parseInt(i/2);
 			if ( op.cmp( heap[i], heap[p] ) ) {
 				tSwap = heap[i];
 				heap[i] = heap[p];
 				heap[p] = tSwap;
 			}
 			else {
 				break;
 			}
 		}
 	}

 	function pushQueue(data) {
 		length++;
 		heap.push(data);
 		queueAdjustBottom();
 		console.log('Heap Pushed', heap);
 	}

 	function popQueue() {
 		heap[1] = heap[length];
 		heap.pop();
 		length--;
 		queueAdjustTop(1, length);
 		if (length<=0) {
 			heap = [null];
 		}
 		if (length<0) {
 			length = 0;
 			console.warn('heap is empty!');
 		}
 		console.log('Heap Poped', heap);
 	}

 	function topQueue() {
 		if (length>0) return heap[1];
 		else {
 			console.warn('heap is empty!');
 			return null;
 		}
 	}

 	function getQueueLength() {
 		return length;
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

 	var q = new prioityQueue(function (a, b) { return a < b;}, [5,4]);
 	q.push(8);
 	q.push(7);
 	q.push(6);
 	q.push(3);
 	q.push(2);
 	q.push(1);
 	q.pop();
 	q.pop();
 	q.pop();
 	q.pop();
 	q.pop();
 	console.log(q.top());

 })();