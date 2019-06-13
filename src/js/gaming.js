import state from "./state"
import { configKeys, chatListFunc, isModerator, isUsername } from "./gaming-const"
import initialize from "./modules/initialize"
import defaultValues from "./default-values"

state.chatListFunc = chatListFunc
state.defaultColor = defaultValues.gaming

initialize(configKeys, isModerator, isUsername)
