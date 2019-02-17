import state from "./state"
import { selectors, configKeys, chatListFunc } from "./gaming-const"
import initialize from "./modules/initialize"

state.chatListFunc = chatListFunc

initialize(selectors, configKeys)

