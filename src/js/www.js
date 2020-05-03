import state from "./state"
import { configKeys, chatListFunc, isUsername } from "./www-const"
import initialize from "./modules/initialize"
import defaultValues from "./default-values"

state.chatListFunc = chatListFunc
state.defaultColor = defaultValues.www

initialize(configKeys, isUsername)
