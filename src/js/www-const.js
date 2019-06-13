import { configKeys as commonConfigKeys } from "./common-const"

export const isModerator = (element)  => element.getAttribute("author-type") === "moderator"

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
	usernameBackgroundColorKeyName: "youtube_usernameBackgroundColorKeyName",
	usernamesKeyName: commonConfigKeys.usernamesKeyName,
	usernamesAreRegExpKeyName: commonConfigKeys.usernamesAreRegExpKeyName,
	moderatorBackgroundColorKeyName: "youtube_moderatorBackgroundColorKeyName",
}

export const chatListFunc = () => {
	if (location.pathname.includes("live_chat")) {
		return document.querySelector("#contents #chat #contents #items")
	}

	const chatframe = document.querySelector("#chatframe")
	if (!chatframe) {
		return null
	}
	return chatframe.contentDocument.querySelector("#contents #chat #contents #items")
}
