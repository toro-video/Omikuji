function omikuji() {
    // おみくじの結果の配列
    const fortuneList = [
        ["大吉", "#ff0000"],
        ["吉", "#ff6600"],
        ["中吉", "#ffcc00"],
        ["小吉", "#99cc00"],
        ["末吉", "#66cc00"],
        ["凶", "#669900"],
        ["大凶", "#666600"]
    ];
    // ランダムに配列のインデックスを選ぶ
    const index = Math.floor(Math.random() * fortuneList.length);
    // 選んだインデックスの要素を取り出す
    const fortune = fortuneList[index];
    // 結果のテキストと色を変数に代入する
    const text = fortune[0];
    const color = fortune[1];
    // 結果の要素を取得する
    const result = document.querySelector(".result");
    // 結果の要素のテキストと色を変更する
    result.textContent = text;
    result.style.color = color;
}