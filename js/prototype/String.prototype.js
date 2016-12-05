/**
 * 将一个字符串插入该对象字符串指定的位置，可以选择从前边和后边插入
 * @param insertStr 需要插入的字符串
 * @param where 插入的位置
 * @param insertAfter 是否从后边插入 默认为false 从前边插入
 * @returns {*}
 */
String.prototype.insert = function (insertStr = '', where = '', insertAfter = false) {//where可以是String和RegExp
    var str       = this.valueOf()//获取插入目标字符串
    var separator = 0//获取index
    //获取从前边插入的位置
    if (!isString(where)) {    //通过RegExp匹配
        where = str.match(where)//match where
        if (where == null) {
            return 'error:"传入的第二个插入目标RegExp参数没有被匹配到"'
        }
        whereStr  = where[0]//获取匹配到的where字符串
        separator = where.index//获取从前边插入的位置

    } else {//通过字符串匹配
        whereStr  = where
        separator = str.indexOf(where)//获取从后边插入的位置//indexOf的返回值为0--(length-1) 正值 如果没有找到 返回 -1
        if (separator == -1) {//没有找到 separate返回-1
            return 'error:"传入的第二个插入目标string参数没有被匹配到"'
        }
    }
    //获取从后边插入的位置
    if (insertAfter) {
        separator += whereStr.length
    }
    var frontStr = str.slice(0, separator)//插入位置的前段字符串
    var backStr  = str.slice(separator)//插入位置的后段段字符串
    return str = frontStr.concat(insertStr, backStr)
    /**
     * 判断是否为string类型
     * @param element
     * @returns {boolean}
     */
    function isString(element) {
        if ((typeof element) == 'string') return true
        return false
    }

}
