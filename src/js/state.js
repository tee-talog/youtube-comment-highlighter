// メモ：一部を除いて、state じゃなくて pageConfig とか userSettings では？
// "state" はページを開いてる間に変更される値というイメージ
class State {
	constructor() {
		// default value
		this._usernameBackgroundColor = ""
		this._usernames = []
		this._usernamesAreRegExp = false
		this._moderatorBackgroundColor = ""
		this._initialBackgroundColor = ""
		this._chatListFunc = () => []
		// initial value
		this._loaded = false
	}
	set fetchedConfig(values) {
		this._usernameBackgroundColor = values.usernameBackgroundColor || this._usernameBackgroundColor
		this._usernames = values.usernames || this._usernames
		this._usernamesAreRegExp = values.usernamesAreRegExp || this._usernamesAreRegExp
		this._moderatorBackgroundColor = values.moderatorBackgroundColor || this._moderatorBackgroundColor
	}
	get colors() {
		return {
			username: this._usernameBackgroundColor,
			moderator: this._moderatorBackgroundColor,
			initialBackgroundColor: this._initialBackgroundColor,
		}
	}
	// userSettings
	get usernameBackgroundColor() { return this._usernameBackgroundColor }
	get usernames() { return this._usernames }
	get usernamesAreRegExp() { return this._usernamesAreRegExp }
	get moderatorBackgroundColor() { return this._moderatorBackgroundColor }

	// state
	get loaded() { return this._loaded }
	loadedChatList() { this._loaded = true } // setter

	// pageConfig
	get initialBackgroundColor() { return this._initialBackgroundColor }
	set initialBackgroundColor(value) {
		// 一回だけ set を許可する
		if (this._initialBackgroundColor !== "") {
			return
		}
		this._initialBackgroundColor = value
	}
	get chatListFunc() { return this._chatListFunc || (() => []) }
	set chatListFunc(value) {
		// 一回だけ set を許可する
		if (this._chatListFunc.length !== 0) {
			return
		}
		this._chatListFunc = value
	}
}

export default new State()

