import state from "../state"

// 色を特定する
const getPaintColor = (element, isModerator, isUsername) => {
	// モデレーター
	if (isModerator(element)) {
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
const paint = (elements, isModerator, isUsername) => setTimeout(elements.forEach((e) => {
	e.style.backgroundColor = getPaintColor(e, isModerator, isUsername)
}), 10)

export default paint
