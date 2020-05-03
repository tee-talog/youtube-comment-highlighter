import paint from "./paint"
import state from "../state"

// チャット欄を全部色付けする
const paintAllChats = (isUsername) => {
	// チャット欄の読み込みが終わってないときは、色付け処理はキャンセル
	if (!state.loaded) {
		return
	}

	const chatList = state.chatListFunc()
	const chatsSelector = "yt-live-chat-text-message-renderer"
	const chats = chatList.querySelectorAll(chatsSelector)
	paint(chats, isUsername)
}

export default paintAllChats
