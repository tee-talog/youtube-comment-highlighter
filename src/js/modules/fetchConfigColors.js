import state from "../state"

// 色の config を fetch して state を更新する
const fetchConfigColors = (keys) => new Promise((ok, ng) => {
	const {
		usernameBackgroundColorKeyName,
		usernamesKeyName,
		usernamesAreRegExpKeyName,
		moderatorBackgroundColorKeyName,
	} = keys

	chrome.storage.sync.get(
		[
			usernameBackgroundColorKeyName,
			usernamesKeyName,
			usernamesAreRegExpKeyName,
			moderatorBackgroundColorKeyName,
		],
		(res) => {
			state.fetchedConfig = {
				usernameBackgroundColor: res[usernameBackgroundColorKeyName],
				usernames: res[usernamesKeyName],
				usernamesAreRegExp: res[usernamesAreRegExpKeyName],
				moderatorBackgroundColor: res[moderatorBackgroundColorKeyName],
			}
			ok(state)
		},
	)
})

export default fetchConfigColors
