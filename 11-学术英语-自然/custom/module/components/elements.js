function picWord2([i1,s1,i2,s2]) {
  return `
<div class="FLEX COL">
  <div class="P4">
    <h3>${i1}</h3>
  </div>
  <div>
    <img class="smallPic NOMARGIN" src="${s1}" alt="网络不佳" />
  </div>
</div>
<div class="FLEX COL">
  <div class="P4">
    <h3>${i2}</h3>
  </div>
  <div>
    <img class="smallPic NOMARGIN" src="${s2}" alt="网络不佳" />
  </div>
</div>
  `
}