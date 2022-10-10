local function restartUI(withMsg)
  SendUIMessage({ source = "np-nui", app = "main", action = "restart" });
  if withMsg then
    TriggerEvent("DoLongHudText", "You can also use 'ui-r' as a shorter version to restart!")
  end
  TriggerScreenblurFadeOut(100.0)
  TriggerEvent('closeInventoryGui')
  TriggerEvent('np-banking:ResetUI')
  TriggerEvent('np-radio:ResetUI')
  TriggerEvent('np-menu:ResetUI')
  TriggerEvent('np-interact:ResetUI')
  TriggerEvent('np-mdt:ResetUI')
  TriggerEvent('np-ui:restartUI')
  TriggerEvent('menu:menuexit')
  TriggerEvent('clothing:close')
  exports['np-interface']:showInteraction("Restarting UI .")
  Wait(1000)
  exports['np-interface']:showInteraction("Restarting UI ..")
  Wait(1000)
  exports['np-interface']:showInteraction("Restarting UI ...")
  Wait(1000)
  exports['np-interface']:showInteraction("UI Successfully Restarted")
  Wait(1000)
  exports['np-interface']:hideInteraction()
  --TriggerEvent("np-hud:initHud")
  initHud()
  TriggerEvent("np-hud:restarted")
  SendUIMessage({ app = "hud", data = { display = true }, source = "np-nui" })
  local cj = exports["police"]:getCurrentJob()
end
RegisterCommand("np-hud:restart", function() restartUI(true) end, false)
RegisterCommand("ui-r", function() restartUI() end, false)
RegisterNetEvent("np-hud:server-restart")
AddEventHandler("np-hud:server-restart", restartUI)