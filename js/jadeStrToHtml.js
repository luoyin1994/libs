/**
 * 类jade字符串转化为html格式
 * jade string to html
 * @param str
 */
function jadeStrToHtml(str) {
    str.trim()//将str去掉前后空白
    var Separator = str.search(' ')//通过空格分隔元素文本textNode
    var tagStr    = str.slice(0, Separator)//取得文本前的类jade字符串
    var tagText   = str.slice(Separator).trim()//取得元素文本！！！文本可以是html
    /**!!!
     * 文本可以是html
     function () {//文本可以是html

            }
     */
    var tagName   = tagStr.split(/[.#(]/)[0]//获取[.#(]之前的tagName
    //获取元素属性
    var tagClassNamesHtmlStr = getClassNamesHtmlStr(tagStr)
    var tagId                = getId(tagStr)
    var tagAttr              = getAttr(tagStr)
    //拼接元素属性
    var tagAttrHtmlStr = `id="${tagId}" ${tagClassNamesHtmlStr} ${tagAttr}`
    //拼接html元素
    var tag = `<${tagName} ${tagAttrHtmlStr}>${tagText}</${tagName}>`


    /**
     * 函数区域
     */
    /**
     * 获取（）括号内属性字符串
     * @param str
     * @returns {*}
     */
    function getAttr(str) {
        var attr = ''
        return attr = str.split('(')[1].split(/[)]/)[0]
    }

    /**
     * 获取#后id属性字符串
     * @param str
     * @returns {*}
     */
    function getId(str) {
        var id = ''
        return id = str.split('#')[1].split(/[#.(]/)[0]
    }

    /**
     * 获取.号后class属性字符串
     * @param str
     * @returns {Array|*}
     */
    function getClassNames(str) {
        var classNames = str.split('.')
        classNames.shift()
        for (var i = 0; i < classNames.length; i++) {
            classNames[i] = classNames[i].split(/[#(]/)[0]//提出每一个className的值
        }
        return classNames
    }

    /**
     * 获取拼接好的.号后class
     * @param str
     * @returns {string}
     */
    function getClassNamesHtmlStr(str) {
        var classNamesHtmlStr = ''
        var classNames        = str.split('.')
        classNames.shift()
        for (var i = 0; i < classNames.length; i++) {
            classNames[i] = classNames[i].split(/[#(]/)[0]//提出每一个className的值
        }
        return classNamesHtmlStr = `class="${classNames.join(' ')}"`
    }
    121212
    console.log('nihao')
}
