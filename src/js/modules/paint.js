import state from "../state"

// 色を特定する
const getPaintColor = (element, isUsername) => {
	// モデレーター
	if (element.getAttribute("author-type") === "moderator") {
		return state.colors.moderator
	}

	// ユーザー名
	if (isUsername(element, state)) {
		return state.colors.username
	}

	return state.colors.initialBackgroundColor
}

// チャット欄を色付けする
// チャットエレメント、その URL でつけたい色、名前に正規表現を適用するか
const paint = (elements, isUsername) => setTimeout(elements.forEach((e) => {
	e.style.backgroundColor = getPaintColor(e, isUsername)
}), 10)

export default paint
