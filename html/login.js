const DISABLED = 'disabled';

// フィールドが変更された場合に処理する関数
function fieldChanged() {
    let userId;
    let password;
    let login;
    let disabled = true;

    try {
        userId = getField("user_id");
        password = getField("password");
        login = getField("login");
    } catch (e) {
        console.log(e);
        return;
    }

    disabled = (userId.value.length === 0) || (password.value.length === 0);
    if (disabled) {
        login.setAttribute(DISABLED, DISABLED);
    } else {
        login.removeAttribute(DISABLED);
    }
}

// フィールドを取得する関数
function getField(fieldName) {
    let field = document.getElementById(fieldName);
    if (field == undefined) {
        throw new Error("要素が見つかりません: " + fieldName);
    }
    return field;
}
