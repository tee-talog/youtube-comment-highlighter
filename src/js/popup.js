import "../css/popup.css";

import { configKeys as wwwConfigKeys } from "./www-const"
import { configKeys as gamingConfigKeys } from "./gaming-const"
import { configKeys as commonConfigKeys } from "./common-const"
import defaultValues from "./default-values"


const init = () => {
	const colorUserYouTubeElement = document.getElementById("color-user-youtube")
	const colorUserGamingElement = document.getElementById("color-user-gaming")
	const usernamesElement = document.getElementById("usernames")
	const usernamesRegExpElement = document.getElementById("usernames-regexp")
	const colorModeratorYouTubeElement = document.getElementById("color-moderator-youtube")
	const colorModeratorGamingElement = document.getElementById("color-moderator-gaming")
	const saveButtonElement = document.getElementById("save-button")

	chrome.storage.sync.get(
		[
			gamingConfigKeys.usernameBackgroundColorKeyName,
			commonConfigKeys.usernamesKeyName,
			commonConfigKeys.usernamesAreRegExpKeyName,
			gamingConfigKeys.moderatorBackgroundColorKeyName,
		],
		(response) => {
			colorUserYouTubeElement.value
					= response[wwwConfigKeys.usernameBackgroundColorKeyName] || defaultValues.www.usernameBackgroundColor
			colorUserGamingElement.value
					= response[gamingConfigKeys.usernameBackgroundColorKeyName] || defaultValues.gaming.usernameBackgroundColor
			usernamesElement.value
					= (response[commonConfigKeys.usernamesKeyName] || defaultValues.common.usernames).reduce((prev, curr) => prev + "\n" + curr, "").trim()
			usernamesRegExpElement.checked
					= response[commonConfigKeys.usernamesAreRegExpKeyName] || defaultValues.common.usernamesAreRegExp
			colorModeratorYouTubeElement.value
					= response[wwwConfigKeys.moderatorBackgroundColorKeyName] || defaultValues.www.moderatorBackgroundColor
			colorModeratorGamingElement.value
					= response[gamingConfigKeys.moderatorBackgroundColorKeyName] || defaultValues.gaming.moderatorBackgroundColor
		},
	)

	let _blocked = false
	saveButtonElement.addEventListener("click", () => {
		if (_blocked) {
			return
		}

		_blocked = true
		chrome.storage.sync.set({
			[wwwConfigKeys.usernameBackgroundColorKeyName]: colorUserYouTubeElement.value,
			[gamingConfigKeys.usernameBackgroundColorKeyName]: colorUserGamingElement.value,
			[commonConfigKeys.usernamesKeyName]: usernamesElement.value.split("\n").map((e) => e.trim()).filter((e) => e.trim() !== ""),
			[commonConfigKeys.usernamesAreRegExpKeyName]: usernamesRegExpElement.checked || false,
			[wwwConfigKeys.moderatorBackgroundColorKeyName]: colorModeratorYouTubeElement.value,
			[gamingConfigKeys.moderatorBackgroundColorKeyName]: colorModeratorGamingElement.value,
		})
		// reload content scripts
		// refs: https://qiita.com/inabajunmr/items/d56d3a477b83487222f0
		chrome.tabs.query({}, (tabs) => {
			tabs.map((tab) => {
				chrome.tabs.sendMessage(tab.id, { command: "save" }, (res) => {})
			})
		})
		setTimeout(() => _blocked = false, 500)
	})
}

document.addEventListener("DOMContentLoaded", init)
