// import "index.css"
import { marked } from "https://npm.elemecdn.com/marked/lib/marked.esm.js"
import mermaid from "https://npm.elemecdn.com/mermaid@10/dist/mermaid.esm.min.mjs"
import hljs from "https://npm.elemecdn.com/@highlightjs/cdn-assets@11.6.0/es/highlight.min.js"
import katex from 'katex';
import replaceAsync from "string-replace-async";
marked.use({
    mangle: false,
    headerIds: false,
    strict: false,
});

export const clueParerAll = async (md, init = "") => {
    let view = md
    view = await clueParser(view)
    view = await latexParse2(view)
    view = await latexParse(view)
    view = markedParse(view)
    hljs.highlightAll()
    return view
}

export function latexParse2(md, center = true) {
    md = md.replace(/\n/g, "<!br") //暂时替代换行符号
    return new Promise((resolve) => {
        let reg1 = /\$\$.*?\$\$/g  //含有$的
        let reg2 = /(?<=(\$\$))(.+?)(?=(\$\$))/g
        if (md) {
            md = md.replace(reg1, (e) => {
                if (e.match(reg2)) {
                    e = e.match(reg2)[0]
                    e = e.replace(/\<\!br/g, "") //解除换行替代
                } else {
                    return ""
                }
                // 官方示例API
                if (e) {
                    var html = katex.renderToString(e, {
                        throwOnError: false,
                        strict: false
                    });
                    if (center) {
                        html = `<center>${html}</center>`
                    }
                    return html
                } else {
                    return ""
                }

            })
            md = md.replace(/\<\!br/g, "\n")//解除换行替代
            resolve(md)
        }
        else {
            resolve(md)
        }
    })
}
function latexParse(md) {
    return new Promise((resolve) => {
        let reg1 = /\$.*?\$/g //含有$的
        let reg2 = /(?<=\$)(.+?)(?=\$)/g
        let parsedTex = new Array()
        let origin = md
        let latex = md.match(reg1)
        // let latexIndex = getRegIndex(md, reg1)
        let finalResult = ""

        // let result
        if (latex) {
            try {
                latex.forEach((ele, index) => {
                    ele = ele.match(reg2)
                    if (ele) {
                        parsedTex[index] = katex.renderToString(ele[0], {
                            throwOnError: false,
                            strict: false
                        })
                    } else {
                        parsedTex[index] = "<span style='color:#cc0000;'>ERR_NULL</span>"
                        // resolve(origin)
                    }
                })
                // 取出来之后
                md = md.replace(reg1, "<!temp?.!>")
                md = md.split("<!temp?.!>")
                parsedTex = [...parsedTex, ""]
                // debugger
                for (let i = 0; i <= md.length - 1; i++) {
                    finalResult += md[i] + parsedTex[i]
                    // console.log(finalResult);
                    if (i == md.length - 1) {
                        resolve(finalResult)

                    }
                }
            } catch (err) {
                console.log(err)
                return 5
            }

        }
        else resolve(origin)
    })

}
function clueParser(md) {
    function reverseString(str) {
        return str.split('').reverse().join('');
    }
    return new Promise(async (resolve) => {
        md = md.replace(/\n/g, ">br") //暂时替代换行符号
        const reg1 = /".*?"\..*?\s/g  //整个"content".CLASS 结构
        const reg2 = /".*?"/g //匹配 "之间"
        const reg3 = /\..*?\s/g //匹配class 的. 和空格之间 未反转前
        const reg3_reverse = /\s.*?\./g //匹配class 的. 和空格之间 反转
        const reg4 = /(?<=.).*?(?=\s)/g //匹配 . 和 空格之间 不包括. \s
        const reg5 = /(?<=").*(?=")/g  //匹配"之间"不包括""
        if (md) {
            md = await replaceAsync(md, reg1, temp)
            async function temp(e, seq) {
                var parsedHTML = "f"
                var content
                var clueClass
                if (e.match(reg2)) {
                    content = e.match(reg5)[0]
                }
                if (e.match(reg3)) {
                    e = reverseString(e)
                    // console.log(e.match(reg4))
                    clueClass = e.match(reg3_reverse)[0]
                    clueClass = reverseString(clueClass)
                    clueClass = clueClass.replace(/(\s)|(\.)/g, "")
                    // clueClass = clueClass.match(reg4)[0]
                }
                // console.log(content);
                // console.log(clueClass);
                content = content.replace(/\>br/g, "\n")//解除换行限制
                if (clueClass == "mermaid") {
                    // parsedHTML = `<pre class="${clueClass}">${content}</pre>`
                    try {
                        parsedHTML = `${await mermaidParse2(content, seq)}`
                    } catch (error) {
                        // parsedHTML = `<div class="RED">${error}</div>`
                        parsedHTML = "<div class='RED P5'> MERMAID ERROR! </div>  " +
                            `<pre><code class="language-js hljs language-javascript"><span class="hljs-number">${error}</span></code></pre>`
                    }

                } else {
                    parsedHTML = `<div class="${clueClass}">${markedParse(content)}</div>`
                }

                return parsedHTML
            }
        }
        md = md.replace(/\>br/g, "\n")
        resolve(md)
    })

}
function markedParse(md) {
    return marked.parse(md)
}

async function mermaidParse2(content, seq) {
    const isValid = await mermaid.parse(content)
    if (isValid) {
        const { svg } = await mermaid.mermaidAPI.render("seq_" + seq, content);
        return svg

    } else {
        return "err"
    }
}