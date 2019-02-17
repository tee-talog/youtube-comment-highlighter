// モデレーター
const isColoredByModerator = (element, colorUsernames, selectors) => {
	return element.querySelector(selectors.moderator) != null
}

// ユーザー名
const isColoredByUsername = (element, colorUsernames, selectors, isRegExp) => {
	const usernameElement = element.querySelector(selectors.username)
	// ユーザー名のエレメントが取得できなかった
	if (!usernameElement) {
		return false
	}

	const username = usernameElement.textContent
	if (isRegExp) {
		try {
			return colorUsernames.some((e) => new RegExp(e).test(username))
		} catch (e) {
			return false
		}
	} else {
		// ユーザー名との部分一致
		return colorUsernames.some((e) => username.includes(e))
	}
}

// 色を特定する
const getPaintColor = (element, colors, colorUsernames, selectors, isRegExp) => {
	// モデレーター
	if (isColoredByModerator(element, colorUsernames, selectors)) {
		return colors.moderator
	}

	// ユーザー名
	if (isColoredByUsername(element, colorUsernames, selectors, isRegExp)) {
		return colors.username
	}

	return colors.initialBackgroundColor
}

// チャット欄を色付けする
// チャットエレメント、その URL でつけたい色、設定した名前、同セレクタ、名前に正規表現を適用するか
const paint = (elements, colors, colorUsernames, selectors, isRegExp) => elements.forEach((e) => {
	e.style.backgroundColor = getPaintColor(e, colors, colorUsernames, selectors, isRegExp)
})

export default paint

