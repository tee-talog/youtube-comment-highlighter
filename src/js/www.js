import state from "./state"
import { selectors, configKeys, chatListFunc } from "./www-const"
import initialize from "./modules/initialize"

state.chatListFunc = chatListFunc

initialize(selectors, configKeys)

