import { configKeys as commonConfigKeys } from "./common-const"

export const isModerator = (element) => element.getAttribute("author-type") === "moderator"

export const isUsername = (element, state) => {
	const elm = element.querySelector("#author-name")
	if (!elm) {
		return false
	}

	const username = elm.textContent
	if (state.usernamesAreRegExp) {
		try {
			return state.usernames.some((e) => new RegExp(e).test(username))
		} catch (e) {
			return false
		}
	} else {
		// ユーザー名との部分一致
		return state.usernames.some((e) => username.includes(e))
	}
}

export const configKeys = {
	usernameBackgroundColorKeyName: "gaming_usernameBackgroundColorKeyName",
	usernamesKeyName: commonConfigKeys.usernamesKeyName,
	usernamesAreRegExpKeyName: commonConfigKeys.usernamesAreRegExpKeyName,
	moderatorBackgroundColorKeyName: "gaming_moderatorBackgroundColorKeyName",
}

export const chatListFunc = () => document.querySelector("yt-live-chat-renderer yt-live-chat-item-list-renderer #items")
