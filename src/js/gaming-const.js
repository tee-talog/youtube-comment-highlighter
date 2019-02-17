import { configKeys as commonConfigKeys } from "./common-const"

export const selectors = {
	moderator: "yt-live-chat-author-chip yt-icon.yt-live-chat-author-badge-renderer",
	username: "#author-name",
}

export const configKeys = {
	usernameBackgroundColorKeyName: "gaming_usernameBackgroundColorKeyName",
	usernamesKeyName: commonConfigKeys.usernamesKeyName,
	usernamesAreRegExpKeyName: commonConfigKeys.usernamesAreRegExpKeyName,
	moderatorBackgroundColorKeyName: "gaming_moderatorBackgroundColorKeyName",
}

export const chatListFunc = () => document.querySelector("yt-live-chat-renderer yt-live-chat-item-list-renderer #items")
