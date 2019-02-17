import { configKeys as commonConfigKeys } from "./common-const"

export const selectors = {
	moderator: "yt-live-chat-author-chip yt-icon.yt-live-chat-author-badge-renderer",
	username: "#author-name",
}

export const configKeys = {
	usernameBackgroundColorKeyName: "youtube_usernameBackgroundColorKeyName",
	usernamesKeyName: commonConfigKeys.usernamesKeyName,
	usernamesAreRegExpKeyName: commonConfigKeys.usernamesAreRegExpKeyName,
	moderatorBackgroundColorKeyName: "youtube_moderatorBackgroundColorKeyName",
}

export const chatListFunc = () => {
	const chatframe = document.querySelector("#chatframe")
	if (!chatframe) {
		return null
	}
	return chatframe.contentDocument.querySelector("#contents #chat #contents #items")
}
