// 請完成calcWord function裡面的內容
// 題目說明: 請計算 keyword 出現在 content 中"幾次"
// 參數說明: content: 文章, keyword: 想要計算出現在文章內的字
// 輸出說明: 請回傳出現次數
let calcWord = function (content: string, keyword: string) {

}
let word = 'Abcdaaeafga' 
let key = 'a';
let ans = 0;
for (let i = 0; i < word.length; i++) {
    if(word.charAt(i) === key){
        ans += 1;
    }
}
 
 
console.log(ans)
 
let ans2 = 0;
for (let a of word){
    if(a === key){
        ans2 += 1
    }
}



