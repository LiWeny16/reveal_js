(() => {
    Array.from(document.querySelectorAll(".SCODE")).forEach((e) => {
        console.log(e.innerHTML);
        e.innerHTML = eval(e.innerHTML)
        e.style.opacity="100"
    })
})()


