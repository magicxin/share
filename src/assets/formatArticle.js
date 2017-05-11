(function(window){

    const _toString = Object.prototype.toString;
    
    function isStr (data) {
      return typeof data === 'string';
    }
    function isArray (data) {
      return _toString.call(data) === '[object Array]'
    }
    function subStr(data,width){
        let wordNum = ~~(width/12);
//        console.log(wordNum)
        let arr = data.split("");
        let copyArr = [].concat(arr);
        let showArr = copyArr.splice(0 , 1.5*wordNum);
//        console.log(showArr)
//        let pluStr =  '...<span ref="showmore" style="color:#0cb80a;position:absolute;bottom:0;right:0;">查看更多</span>';
        
        let showStr = showArr.join('');
        return {
            showStr : showStr+'...'
        };
    }
   
    window.format = function format(data,width){
        
        if(isStr(data)){
            return subStr(data,width);
        }
        if(isArray(data)){
            for(let i=0; i<data.length; i++){
                return subStr(data,width);
            }
        }
    }
})(window)
module.exports = format;