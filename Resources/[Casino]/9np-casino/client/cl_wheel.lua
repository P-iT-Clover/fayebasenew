local _isRolling = false

AddEventHandler("np-casino:wheel:toggleEnable", function()
  local characterId = exports["isPed"]:isPed("cid")
  local jobAccess = RPC.execute("IsEmployedAtBusiness", { character = { id = characterId }, business = { id = "casino" } })
  if not jobAccess then
    TriggerEvent("DoLHudText", "You cannot do that", 2)
    return
  end
  RPC.execute("np-casino:wheel:toggleEnabled")
end)

AddEventHandler("np-casino:wheel:spinWheel", function()
  if not hasMembership(false) then
    TriggerEvent("DoLHudText", "You must have a membership", 2)
    return
  end
  local info = (exports["np-inventory"]:GetInfoForFirstItemOfName("casinoloyalty") or { information = "{}" })
  RPC.execute("np-casino:wheel:spinWheel", false, json.decode(info.information).state_id)
end)

AddEventHandler("np-casino:wheel:spinWheelTurbo", function()
  if not hasMembership(false) then
    TriggerEvent("DoLHudText", "You must have a membership", 2)
    return
  end
  local info = (exports["np-inventory"]:GetInfoForFirstItemOfName("casinoloyalty") or { information = "{}" })
  RPC.execute("np-casino:wheel:spinWheel", "turbo", json.decode(info.information).state_id)
end)

AddEventHandler("np-casino:wheel:spinWheelOmega", function()
  if not hasMembership(false) then
    TriggerEvent("DoLHudText", "You must have a membership", 2)
    return
  end
  local info = (exports["np-inventory"]:GetInfoForFirstItemOfName("casinoloyalty") or { information = "{}" })
  RPC.execute("np-casino:wheel:spinWheel", "omega", json.decode(info.information).state_id)
end)

AddEventHandler("np-casino:wheel:pickupWheelCash", function()
  RPC.execute("np-casino:wheel:pickupWheelCash")
end)

RegisterCommand('spin', function(source, args, RawCommand)
  TriggerServerEvent("np-luckywheel:getLucky")
end)