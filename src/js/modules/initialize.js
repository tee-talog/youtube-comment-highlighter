import paint from "./paint"
import state from "../state"
import paintAllChats from "./paintAllChats"
import addConfigChangeListener from "./configListener"
import fetchConfigColors from "./fetchConfigColors"

// ページアクセス時：チャット欄がロードされるまで待って、監視を開始する
const initialize = (configKeys, isModerator, isUsername) => {
	const initLoadHandler = setInterval(() => {
		const chatList = state.chatListFunc()
		if (!chatList) {
			return
		}

		// チャット背景初期値
		state.initialBackgroundColor = getComputedStyle(chatList).backgroundColor

		// state 更新
		fetchConfigColors(configKeys).then(() => {
			// チャット欄監視開始
			const observer = new MutationObserver((records) => {
				// 更新されたチャットに対して色付け
				const chats = records.flatMap((e) => [...e.addedNodes])
				paint(chats, isModerator, isUsername)
			})
			observer.observe(chatList, { childList: true })

			// 設定変更時にチャット欄をすべて再読み込みする
			addConfigChangeListener(configKeys, () => paintAllChats(isModerator, isUsername))

			// アクセス時に色付け
			paintAllChats(isModerator, isUsername)
		})

		// ロード待ちを解除
		clearInterval(initLoadHandler)
		state.loadedChatList()
	}, 500)
}

export default initialize
