import fetchConfigColors from "./fetchConfigColors"

const listeners = []
let _configKeys = null

const addConfigChangeListener = (configKeys, listener) => {
	listeners.push(listener)
	_configKeys = configKeys
}

// 設定が変更されたらリスナを実行する
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	const { command } = request
	if (command === "save") {
		fetchConfigColors(_configKeys).then(() => {
			listeners.forEach((e) => e())
		})
	}
})

export default addConfigChangeListener

