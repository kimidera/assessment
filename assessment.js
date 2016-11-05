(function () {
    'use strict'
    const userNameInput = document.getElementById('user-name');
    const assessmentButton = document.getElementById('assessment');
    const resultDivided = document.getElementById('result-area');
    const tweetDivided = document.getElementById('tweet-area');

    function removeAllChildren(element){
        while(element.firstChild){
            element.removeChild(element.firstChild);
        }
    }
    assessmentButton.onclick = () => {
        const userName = userNameInput.value;
        if (userName.length === 0) {
            return;
        }

        removeAllChildren(resultDivided);
        const header = document.createElement('h3');
        header.innerText = '診断結果';
        resultDivided.appendChild(header);
        
        removeAllChildren(tweetDivided);
        const paragraph = document.createElement('p');
        const result = assessment(userName);
        paragraph.innerText = result;
        resultDivided.appendChild(paragraph);

    }
    const answers = [
        '{userName}は髪の毛です。',
        '{userName}は眉毛です。',
        '{userName}は髭です。',
        '{userName}は睫毛です。',
        '{userName}は胸毛です。',
        '{userName}は腹毛です。',
        '{userName}は陰毛です。',
        '{userName}は尻毛です。',
        '{userName}は太腿毛です。',
        '{userName}は背中毛です。',
        '{userName}は腋毛です。',
        '{userName}は耳毛です。',
        '{userName}は鼻毛です。',
        '{userName}は指毛です。',
        '{userName}は毛むくじゃらです。',
        '{userName}は禿です。'
    ];

    /**
* 名前の文字列を渡すと診断結果を返す関数
* @param {string} userName ユーザーの名前
* @return {string} 診断結果
*/
    function assessment(userName) {
        let sumOfcharCode = 0;
        for (let i = 0; i < userName.length; i++) {
            sumOfcharCode = sumOfcharCode + userName.charCodeAt(i);
        }
        const index = sumOfcharCode % answers.length;
        let result = answers[index];
        result = result.replace(/\{userName\}/g, userName);
        return result;
    }
    console.assert(
        assessment('太郎') === assessment('太郎'),
        '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
    );
})();
