-- Citizen.CreateThread(function()
--     RequestIpl("prologue06_int_np")
--     local interiorid = GetInteriorAtCoords(883.4142, -2282.372, 31.44168)
--     ActivateInteriorEntitySet(interiorid, "np_prolog_clean")
--     RefreshInterior(interiorid)
-- end)

-- --##############--
-- --## VOID RP ##--
-- --##############--

-- RegisterNetEvent('np-bobcat:firstdoor')
-- AddEventHandler('np-bobcat:firstdoor', function()
--     local player = GetEntityCoords(PlayerPedId())
--     local distance = #(vector3(882.208, -2258.1, 30.541439) - player)
--     local pd = exports['np-duty']:LawAmount()
--     if pd >= 4 then
--         if distance < 1.5 then
--             if exports["np-inventory"]:hasEnoughOfItem("thermal_charge", 1) then
--                 TriggerEvent('np-hud:show_hackerman')
--                 if exports['np-hud']:BuffStress() then
--                     TriggerEvent("client:newStress",true, 75)
--                     else
--                     TriggerEvent("client:newstress",true, 250)
--             end
--                 frontdoor()
--                 if exports['np-hud']:BuffIntel() then
--                     exports['np-thermite']:OpenThermiteGameBuff(function(therm)
--                         if therm then
--                             TriggerEvent('DoLongHudText', "Success!", 1)
--                             TriggerEvent('np-hud:hide_hackerman')
--                             TriggerEvent("inventory:removeItem", "thermal_charge", 1)
--                             TriggerServerEvent('np-doors:change-lock-state', 273, false) 
--                             TriggerServerEvent("np-doors:change-lock-state", 274, false)
--                             TriggerEvent('np-dispatch:bobcat_robbery')
--                             Citizen.Wait(3000)
--                             FreezeEntityPosition(PlayerPedId(), false)
--                         else
--                             TriggerEvent('np-dispatch:bobcat_robbery')
--                             TriggerEvent('np-hud:hide_hackerman')
--                             TriggerEvent('inventory:removeItem', 'thermal_charge', 1)
--                         end
--                     end)
--                 else
--                     exports['np-thermite']:OpenThermiteGame(function(success)
--                         if success then
--                             TriggerEvent('DoLongHudText', "Success!", 1)
--                             TriggerEvent('np-hud:hide_hackerman')
--                             TriggerEvent("inventory:removeItem", "thermal_charge", 1)
--                             TriggerServerEvent('np-doors:change-lock-state', 273, false) 
--                             TriggerServerEvent("np-doors:change-lock-state", 274, false)
--                             TriggerEvent('np-dispatch:bobcat_robbery')
--                             Citizen.Wait(3000)
--                             FreezeEntityPosition(PlayerPedId(), false)
--                         else
--                             TriggerEvent('np-dispatch:bobcat_robbery')
--                             TriggerEvent('np-hud:hide_hackerman')
--                             TriggerEvent('inventory:removeItem', 'thermal_charge', 1)
--                         end
--                     end)
--                 end
--             else
--                 TriggerEvent('DoLongHudText', 'Not Enough Cops on Duty', 2)
--             end
--         end
--     else
--         TriggerEvent('DoLongHudText', 'Not enough cops on Duty', 2)
--     end
-- end)

-- -- REAL INSIDE DOOR EDIT THIS
-- RegisterNetEvent('np-bobcat:seconddoor')
-- AddEventHandler('np-bobcat:seconddoor', function()
-- local player = GetEntityCoords(PlayerPedId())
-- local distance = #(vector3(881.07885, -2264.229, 30.467815) - player)
-- local pd = exports['np-duty']:LawAmount()
--     if pd >= 4 then
--     if distance < 1.5 then
--         if exports["np-inventory"]:hasEnoughOfItem("thermal_charge", 1) then
--                 insidedoor()
--                 TriggerEvent('np-hud:show_hackerman')
--                 if exports['np-hud']:BuffStress() then
--                     TriggerEvent("client:newStress",true, 75)
--                     else
--                     TriggerEvent("client:newstress",true, 250)
--             end
--                 if exports['np-hud']:BuffIntel() then
--                     exports['np-thermite']:OpenThermiteGameBuff(function(Buff)
--                         if Buff then
--                             TriggerEvent('np-hud:hide_hackerman')
--                             TriggerEvent('DoLongHudText', "Success!", 1)
--                             TriggerServerEvent("createped")
--                             TriggerEvent("inventory:removeItem", "thermal_charge", 1)
--                             TriggerEvent("lumo:bobcatcreateped")
--                             --Door IDS
--                             TriggerServerEvent("np-doors:change-lock-state", 275, false)
--                             TriggerEvent('np-dispatch:bobcat_robbery')
--                             Citizen.Wait(3000)
--                         else
--                             Citizen.Wait(2000)
--                             TriggerEvent('np-hud:hide_hackerman')
--                             TriggerEvent("inventory:removeItem", "thermal_charge", 1)
--                             TriggerEvent('np-dispatch:bobcat_robbery')
--                         end
--                     end)
--                 else
--                     exports['np-thermite']:OpenThermiteGame(function(success)
--                         if success then
--                             TriggerEvent('np-hud:hide_hackerman')
--                             TriggerEvent('DoLongHudText', "Success!", 1)
--                             TriggerServerEvent("createped")
--                             TriggerEvent("inventory:removeItem", "thermal_charge", 1)
--                             TriggerEvent("lumo:bobcatcreateped")
--                             --Door IDS
--                             TriggerServerEvent("np-doors:change-lock-state", 275, false)
--                             TriggerEvent('np-dispatch:bobcat_robbery')
--                             Citizen.Wait(3000)
--                         else
--                             Citizen.Wait(2000)
--                             TriggerEvent('np-hud:hide_hackerman')
--                             TriggerEvent("inventory:removeItem", "thermal_charge", 1)
--                             TriggerEvent('np-dispatch:bobcat_robbery')
--                         end
--                     end)
--                 end
--             end
--         end
--     else
--         TriggerEvent('DoLongHudText', 'Not enough cops on duty', 2)
--     end
-- end)

-- -- Inside Armed Door --

-- RegisterNetEvent('np-heists:bobcat_armed_door')
-- AddEventHandler('np-heists:bobcat_armed_door', function()
--     local PlyPed = GetEntityCoords(PlayerPedId())
--     local Dist = #(vector3(882.95941, -2268.014, 30.467811) - PlyPed)
--     local pd = export['np-duty']:LawAmount()
--     if pd >= 4 then
--         if Dist < 1.5 then
--             TriggerEvent('inventory:removeItem', 'Gruppe6Card2')
--             FreezeEntityPosition(PlayerPedId(), true)
--             local ArmDoor = exports['np-taskbar']:taskBar(15000, 'Messing with pin code')
--             if ArmDoor == 100 then
--                 TriggerEvent('inventory:removeItem', 'Gruppe6Card2', 1)
--                 FreezeEntityPosition(PlayerPedId(), false)
--                 TriggerServerEvent("np-doors:change-lock-state", 276, false)
--                 TriggerServerEvent("np-doors:change-lock-state", 277, false)
--             else
--                 TriggerEvent('DoLongHudText', 'What happend?', 2)
--             end
--         end
--     else
--         TriggerEvent('DoLongHudText', 'Not enough cops on duty', 2)
--     end
-- end)

-- function frontdoor() -- FRONT DOOR ANIMATION
--     RequestAnimDict("anim@heists@ornate_bank@thermal_charge")
--     RequestModel("hei_p_m_bag_var22_arm_s")
--     RequestNamedPtfxAsset("scr_ornate_heist")
--     while not HasAnimDictLoaded("anim@heists@ornate_bank@thermal_charge") and not HasModelLoaded("hei_p_m_bag_var22_arm_s") and not HasNamedPtfxAssetLoaded("scr_ornate_heist") do
--         Citizen.Wait(50)
--     end
--     local ped = PlayerPedId()

--     SetEntityHeading(ped, 170.52)
--     Citizen.Wait(100)
--     local rotx, roty, rotz = table.unpack(vec3(GetEntityRotation(PlayerPedId())))
--     local bagscene = NetworkCreateSynchronisedScene(882.1660, -2258.35, 30.541439, rotx, roty, rotz + 1.1, 2, false, false, 1065353216, 0, 1.3)
--     local bag = CreateObject(GetHashKey("hei_p_m_bag_var22_arm_s"), 882.1660, -2258.35, 30.541439,  true,  true, false)

--     SetEntityCollision(bag, false, true)
--     NetworkAddPedToSynchronisedScene(ped, bagscene, "anim@heists@ornate_bank@thermal_charge", "thermal_charge", 1.2, -4.0, 1, 16, 1148846080, 0)
--     NetworkAddEntityToSynchronisedScene(bag, bagscene, "anim@heists@ornate_bank@thermal_charge", "bag_thermal_charge", 4.0, -8.0, 1)
--     SetPedComponentVariation(ped, 5, 0, 0, 0)
--     NetworkStartSynchronisedScene(bagscene)
--     Citizen.Wait(1500)
--     local x, y, z = table.unpack(GetEntityCoords(ped))
--     local bomba = CreateObject(GetHashKey("hei_prop_heist_thermite"), x, y, z + 0.3,  true,  true, true)

--     SetEntityCollision(bomba, false, true)
--     AttachEntityToEntity(bomba, ped, GetPedBoneIndex(ped, 28422), 0, 0, 0, 0, 0, 200.0, true, true, false, true, 1, true)
--     Citizen.Wait(2000)
--     DeleteObject(bag)
--     SetPedComponentVariation(ped, 5, 45, 0, 0)
--     DetachEntity(bomba, 1, 1)
--     FreezeEntityPosition(bomba, true)
--     TriggerServerEvent("lumo:particleserver", method)
--     SetPtfxAssetNextCall("scr_ornate_heist")
--     local effect = StartParticleFxLoopedAtCoord("scr_heist_ornate_thermal_burn", ptfx, 0.0, 0.0, 0.0, 1.0, false, false, false, false)

--     NetworkStopSynchronisedScene(bagscene)
--     TaskPlayAnim(ped, "anim@heists@ornate_bank@thermal_charge", "cover_eyes_intro", 8.0, 8.0, 1000, 36, 1, 0, 0, 0)
--     TaskPlayAnim(ped, "anim@heists@ornate_bank@thermal_charge", "cover_eyes_loop", 8.0, 8.0, 3000, 49, 1, 0, 0, 0)
--     Citizen.Wait(5000)
--     ClearPedTasks(ped)
--     DeleteObject(bomba)
--     StopParticleFxLooped(effect, 0)
-- end

-- function insidedoor() -- FIRST DOOR INSIDE ANIMATION
--     RequestAnimDict("anim@heists@ornate_bank@thermal_charge")
--     RequestModel("hei_p_m_bag_var22_arm_s")
--     RequestNamedPtfxAsset("scr_ornate_heist")
--     while not HasAnimDictLoaded("anim@heists@ornate_bank@thermal_charge") and not HasModelLoaded("hei_p_m_bag_var22_arm_s") and not HasNamedPtfxAssetLoaded("scr_ornate_heist") do
--         Citizen.Wait(50)
--     end
--     local ped = PlayerPedId()

--     SetEntityHeading(ped, 170.52)
--     Citizen.Wait(100)
--     local rotx, roty, rotz = table.unpack(vec3(GetEntityRotation(PlayerPedId())))
--     local bagscene = NetworkCreateSynchronisedScene(880.4080, -2264.50, 30.467813, rotx, roty, rotz + 1.1, 2, false, false, 1065353216, 0, 1.3)
--     local bag = CreateObject(GetHashKey("hei_p_m_bag_var22_arm_s"), 880.4080, -2264.50, 30.467813,  true,  true, false)

--     SetEntityCollision(bag, false, true)
--     NetworkAddPedToSynchronisedScene(ped, bagscene, "anim@heists@ornate_bank@thermal_charge", "thermal_charge", 1.2, -4.0, 1, 16, 1148846080, 0)
--     NetworkAddEntityToSynchronisedScene(bag, bagscene, "anim@heists@ornate_bank@thermal_charge", "bag_thermal_charge", 4.0, -8.0, 1)
--     SetPedComponentVariation(ped, 5, 0, 0, 0)
--     NetworkStartSynchronisedScene(bagscene)
--     Citizen.Wait(1500)
--     local x, y, z = table.unpack(GetEntityCoords(ped))
--     local bomba = CreateObject(GetHashKey("hei_prop_heist_thermite"), x, y, z + 0.4,  true,  true, true)

--     SetEntityCollision(bomba, false, true)
--     AttachEntityToEntity(bomba, ped, GetPedBoneIndex(ped, 28422), 0, 0, 0, 0, 0, 200.0, true, true, false, true, 1, true)
--     Citizen.Wait(2000)
--     DeleteObject(bag)
--     SetPedComponentVariation(ped, 5, 45, 0, 0)
--     DetachEntity(bomba, 1, 1)
--     FreezeEntityPosition(bomba, true)
--     TriggerServerEvent("lumo:particleserversec", method)
--     SetPtfxAssetNextCall("scr_ornate_heist")
--     local effect = StartParticleFxLoopedAtCoord("scr_heist_ornate_thermal_burn", ptfx, 0.0, 0.0, 0.0, 1.0, false, false, false, false)
--     NetworkStopSynchronisedScene(bagscene)
--     TaskPlayAnim(ped, "anim@heists@ornate_bank@thermal_charge", "cover_eyes_intro", 8.0, 8.0, 1000, 36, 1, 0, 0, 0)
--     TaskPlayAnim(ped, "anim@heists@ornate_bank@thermal_charge", "cover_eyes_loop", 8.0, 8.0, 3000, 49, 1, 0, 0, 0)
--     Citizen.Wait(5000)
--     ClearPedTasks(ped)
--     DeleteObject(bomba)
--     StopParticleFxLooped(effect, 0)
-- end

-- RegisterNetEvent("bobcat:success:panel", function()
--     TriggerEvent('DoLongHudText', "Success!", 1)
--     TriggerServerEvent("np-doors:change-lock-state", 275, false)
--     TriggerServerEvent("np-doors:change-lock-state", 276, false)
--     TriggerEvent('np-dispatch:bobcat_robbery')
-- end)

-- RegisterNetEvent("bobcat:fail:panel", function()
--     TriggerEvent('DoLongHudText', "Failed, that nearly blew", 2)
--     TriggerEvent('np-dispatch:bobcat_robbery')
-- end)

-- RegisterNetEvent("bobcat2:success:panel", function()
--     TriggerEvent('DoLongHudText', "Success!", 1)
--     TriggerServerEvent("np-doors:change-lock-state", 277, false)
--     TriggerEvent('np-dispatch:bobcat_robbery')
-- end)

-- RegisterNetEvent("bobcat2:fail:panel", function()
--     TriggerEvent('DoLongHudText', "Failed, that nearly blew", 2)
--     TriggerEvent('np-dispatch:bobcat_robbery')
-- end)



-- RegisterNetEvent("lumo:effectoutside")
-- AddEventHandler("lumo:effectoutside", function(method)
--     local ptfx

--     RequestNamedPtfxAsset("scr_ornate_heist")
--     while not HasNamedPtfxAssetLoaded("scr_ornate_heist") do
--         Citizen.Wait(1)
--     end
--         ptfx = vector3(882.1320, -2257.34, 32.461)
--     SetPtfxAssetNextCall("scr_ornate_heist")
--     local effect = StartParticleFxLoopedAtCoord("scr_heist_ornate_thermal_burn", ptfx, 0.0, 0.0, 0.0, 1.0, false, false, false, false)
--     Citizen.Wait(4000)
--     print("lumo")
--     StopParticleFxLooped(effect, 0)
-- end)

-- RegisterNetEvent("lumo:effectinside")
-- AddEventHandler("lumo:effectinside", function(method)
--     local ptfx

--     RequestNamedPtfxAsset("scr_ornate_heist")
--     while not HasNamedPtfxAssetLoaded("scr_ornate_heist") do
--         Citizen.Wait(1)
--     end
--         ptfx = vector3(880.49, -2263.60, 32.441)
--     SetPtfxAssetNextCall("scr_ornate_heist")
--     local effect = StartParticleFxLoopedAtCoord("scr_heist_ornate_thermal_burn", ptfx, 0.0, 0.0, 0.0, 1.0, false, false, false, false)
--     Citizen.Wait(4000)
--     print("lumo")
--     StopParticleFxLooped(effect, 0)
-- end)

-- -- RegisterNetEvent('lumo:propcreate')
-- -- AddEventHandler('lumo:propcreate', function()
-- --     local weaponbox = CreateObject(GetHashKey("ex_prop_crate_ammo_sc"), 888.0774, -2287.33, 31.441, true,  true, true)
-- --     CreateObject(weaponbox)
-- --     SetEntityHeading(weaponbox, 176.02)
-- --     FreezeEntityPosition(weaponbox, true)

-- --     local weaponbox3 = CreateObject(GetHashKey("ex_prop_crate_expl_bc"), 882.1840, -2286.8, 31.441, true,  true, true)
-- --     CreateObject(weaponbox3)
-- --     SetEntityHeading(weaponbox3, 158.02)
-- --     FreezeEntityPosition(weaponbox3, true) 

-- --     local weaponbox4 = CreateObject(GetHashKey("ex_prop_crate_ammo_bc"), 881.4557, -2282.61, 31.441, true,  true, true)
-- --     CreateObject(weaponbox4)
-- --     SetEntityHeading(weaponbox4, 52.02)
-- --     FreezeEntityPosition(weaponbox4, true)
-- -- end)

-- RegisterNetEvent('lumo:bobcatcreateped')
-- AddEventHandler('lumo:bobcatcreateped', function()
--     local hashKey = `csb_mweather`

--     local pedType = 30

--     RequestModel(hashKey)
--     while not HasModelLoaded(hashKey) do
--         RequestModel(hashKey)
--         Citizen.Wait(100)
--     end

--     AddRelationshipGroup('lumo')
-- 	ped = CreatePed(pedType, hashKey, 884.61499, -2274.822, 30.461324, 75.648933, true, false)
--     ped2 = CreatePed(pedType, hashKey, 887.87097, -2275.369, 30.467779, 90.68724, true, false)
--     ped3 = CreatePed(pedType, hashKey, 892.53106, -2276.411, 30.467779, 78.235389, true, false)
--     ped4 = CreatePed(pedType, hashKey, 894.31744, -2279.299, 30.467779, 7.4599084, true, false)
--     ped5 = CreatePed(pedType, hashKey, 894.44616, -2282.168, 30.467779, 0.6937916, true, false)
--     ped6 = CreatePed(pedType, hashKey, 892.98309, -2285.736, 30.467779, 313.94387, true, false)	
--     ped7 = CreatePed(pedType, hashKey, 890.78125, -2293.444, 30.467813, 280.1116, true, false)	
--     ped8 = CreatePed(pedType, hashKey, 882.22778, -2293.1, 30.467826, 274.26354, true, false)	
--     ped10 = CreatePed(pedType, hashKey, 878.64001, -2295.345, 30.467815, 358.52536, true, false)	
--     ped11 = CreatePed(pedType, hashKey, 875.35894, -2295.549, 30.467815, 329.34719, true, false)	
--     ped12 = CreatePed(pedType, hashKey, 872.08264, -2295.551, 30.467815, 287.62591, true, false)	
--     ped13 = CreatePed(pedType, hashKey, 870.3645, -2291.258, 30.467815, 294.19198, true, false)	
--     ped14 = CreatePed(pedType, hashKey, 875.50854, -2289.59, 30.467821, 229.49491, true, false)	
--     ped15 = CreatePed(pedType, hashKey, 879.29608, -2290.854, 30.468526, 254.56103, true, false)	
--     ped16 = CreatePed(pedType, hashKey, 887.04516, -2293.34, 30.467857, 275.89117, true, false)	

--     SetPedArmour(ped, 500)
--     SetPedAsEnemy(ped, true)
--     SetPedRelationshipGroupHash(ped, 'lumo')
--     GiveWeaponToPed(ped, GetHashKey('WEAPON_CARBINERIFLE_MK2'), 250, false, true)
--     TaskCombatPed(ped, GetPlayerPed(-1))
--     SetPedAccuracy(ped, 100)
--     SetPedDropsWeaponsWhenDead(ped, false)

--     SetPedArmour(ped2, 500)
--     SetPedAsEnemy(ped2, true)
--     SetPedRelationshipGroupHash(ped2, 'lumo')
--     GiveWeaponToPed(ped2, GetHashKey('WEAPON_CARBINERIFLE_MK2'), 250, false, true)
--     TaskCombatPed(ped2, GetPlayerPed(-1))
--     SetPedAccuracy(ped2, 100)
--     SetPedDropsWeaponsWhenDead(ped2, false)

--     SetPedArmour(ped3, 500)
--     SetPedAsEnemy(ped3, true)
--     SetPedRelationshipGroupHash(ped3, 'lumo')
--     GiveWeaponToPed(ped3, GetHashKey('WEAPON_CARBINERIFLE_MK2'), 250, false, true)
--     TaskCombatPed(ped3, GetPlayerPed(-1))
--     SetPedAccuracy(ped3, 100)
--     SetPedDropsWeaponsWhenDead(ped3, false)
    
--     SetPedArmour(ped4, 500)
--     SetPedAsEnemy(ped4, true)
--     SetPedRelationshipGroupHash(ped4, 'lumo')
--     GiveWeaponToPed(ped4, GetHashKey('WEAPON_CARBINERIFLE_MK2'), 250, false, true)
--     TaskCombatPed(ped4, GetPlayerPed(-1))
--     SetPedAccuracy(ped4, 100)
--     SetPedDropsWeaponsWhenDead(ped4, false)
    
--     SetPedArmour(ped5, 500)
--     SetPedAsEnemy(ped5, true)
--     SetPedRelationshipGroupHash(ped5, 'lumo')
--     GiveWeaponToPed(ped5, GetHashKey('WEAPON_CARBINERIFLE_MK2'), 250, false, true)
--     TaskCombatPed(ped5, GetPlayerPed(-1))
--     SetPedAccuracy(ped5, 100)
--     SetPedDropsWeaponsWhenDead(ped5, false)

--     SetPedArmour(ped6, 500)
--     SetPedAsEnemy(ped6, true)
--     SetPedRelationshipGroupHash(ped6, 'lumo')
--     GiveWeaponToPed(ped6, GetHashKey('WEAPON_CARBINERIFLE_MK2'), 250, false, true)
--     TaskCombatPed(ped6, GetPlayerPed(-1))
--     SetPedAccuracy(ped6, 100)
--     SetPedDropsWeaponsWhenDead(ped6, false)

--     SetPedArmour(ped7, 500)
--     SetPedAsEnemy(ped7, true)
--     SetPedRelationshipGroupHash(ped7, 'lumo')
--     GiveWeaponToPed(ped7, GetHashKey('WEAPON_CARBINERIFLE_MK2'), 250, false, true)
--     TaskCombatPed(ped7, GetPlayerPed(-1))
--     SetPedAccuracy(ped7, 100)
--     SetPedDropsWeaponsWhenDead(ped7, false)

--     SetPedArmour(ped8, 500)
--     SetPedAsEnemy(ped8, true)
--     SetPedRelationshipGroupHash(ped8, 'lumo')
--     GiveWeaponToPed(ped8, GetHashKey('WEAPON_CARBINERIFLE_MK2'), 250, false, true)
--     TaskCombatPed(ped8, GetPlayerPed(-1))
--     SetPedAccuracy(ped8, 100)
--     SetPedDropsWeaponsWhenDead(ped8, false)

--     SetPedArmour(ped9, 500)
--     SetPedAsEnemy(ped9, true)
--     SetPedRelationshipGroupHash(ped9, 'lumo')
--     GiveWeaponToPed(ped9, GetHashKey('WEAPON_CARBINERIFLE_MK2'), 250, false, true)
--     TaskCombatPed(ped9, GetPlayerPed(-1))
--     SetPedAccuracy(ped9, 100)
--     SetPedDropsWeaponsWhenDead(ped9, false)

--     SetPedArmour(ped10, 500)
--     SetPedAsEnemy(ped10, true)
--     SetPedRelationshipGroupHash(ped10, 'lumo')
--     GiveWeaponToPed(ped10, GetHashKey('WEAPON_CARBINERIFLE_MK2'), 250, false, true)
--     TaskCombatPed(ped10, GetPlayerPed(-1))
--     SetPedAccuracy(ped10, 100)
--     SetPedDropsWeaponsWhenDead(ped10, false)

--     SetPedArmour(ped11, 500)
--     SetPedAsEnemy(ped11, true)
--     SetPedRelationshipGroupHash(ped11, 'lumo')
--     GiveWeaponToPed(ped11, GetHashKey('WEAPON_CARBINERIFLE_MK2'), 250, false, true)
--     TaskCombatPed(ped11, GetPlayerPed(-1))
--     SetPedAccuracy(ped11, 100)
--     SetPedDropsWeaponsWhenDead(ped11, false)
    
--     SetPedArmour(ped12, 500)
--     SetPedAsEnemy(ped12, true)
--     SetPedRelationshipGroupHash(ped12, 'lumo')
--     GiveWeaponToPed(ped12, GetHashKey('WEAPON_CARBINERIFLE_MK2'), 250, false, true)
--     TaskCombatPed(ped12, GetPlayerPed(-1))
--     SetPedAccuracy(ped12, 100)
--     SetPedDropsWeaponsWhenDead(ped12, false)

--     SetPedArmour(ped13, 500)
--     SetPedAsEnemy(ped13, true)
--     SetPedRelationshipGroupHash(ped13, 'lumo')
--     GiveWeaponToPed(ped13, GetHashKey('WEAPON_CARBINERIFLE_MK2'), 250, false, true)
--     TaskCombatPed(ped13, GetPlayerPed(-1))
--     SetPedAccuracy(ped13, 100)
--     SetPedDropsWeaponsWhenDead(ped13, false)

--     SetPedArmour(ped14, 500)
--     SetPedAsEnemy(ped14, true)
--     SetPedRelationshipGroupHash(ped14, 'lumo')
--     GiveWeaponToPed(ped14, GetHashKey('WEAPON_CARBINERIFLE_MK2'), 250, false, true)
--     TaskCombatPed(ped14, GetPlayerPed(-1))
--     SetPedAccuracy(ped14, 100)
--     SetPedDropsWeaponsWhenDead(ped14, false)

--     SetPedArmour(ped15, 500)
--     SetPedAsEnemy(ped15, true)
--     SetPedRelationshipGroupHash(ped15, 'lumo')
--     GiveWeaponToPed(ped15, GetHashKey('WEAPON_CARBINERIFLE_MK2'), 250, false, true)
--     TaskCombatPed(ped15, GetPlayerPed(-1))
--     SetPedAccuracy(ped15, 100)
--     SetPedDropsWeaponsWhenDead(ped15, false)
-- end)

-- RegisterNetEvent('np-bobcat:bubbles')
-- AddEventHandler('np-bobcat:bubbles', function()
-- 	local interiorid = GetInteriorAtCoords(883.4142, -2282.372, 31.44168)
-- 	ActivateInteriorEntitySet(interiorid, "np_prolog_broken")
-- 	RemoveIpl(interiorid, "np_prolog_broken")
-- 	DeactivateInteriorEntitySet(interiorid, "np_prolog_clean")
-- 	RefreshInterior(interiorid)
-- end)
	
-- RegisterNetEvent("createped")
-- AddEventHandler("createped", function()
--     local hash = GetHashKey("ig_casey")
--     while not HasModelLoaded(hash) do
--         RequestModel(hash)
--         Wait(20)
--     end
--     rehineped = CreatePed("PED_TYPE_CIVFEMALE", "ig_casey", 870.21099, -2287.625, 30.467779, 185.18022, true, false)
--         SetBlockingOfNonTemporaryEvents(rehineped, true)
--         SetPedDiesWhenInjured(rehineped, false)
--         SetPedCanPlayAmbientAnims(rehineped, true)
--         SetPedCanRagdollFromPlayerImpact(rehineped, false)
--         SetEntityInvincible(rehineped, false)
--         RequestAnimDict("random@arrests@busted")
--     while not HasAnimDictLoaded("random@arrests@busted") do
--         Citizen.Wait(0)
--     end
--         TaskPlayAnim(rehineped, 'random@arrests@busted', 'idle_a', 8.0, 8.0, -1, 33, 0, 0, 0, 0)
-- end)

-- RegisterNetEvent('walk') -- PED WALK
-- AddEventHandler('walk', function()
-- 	ClearPedTasks(rehineped)
--     FreezeEntityPosition(rehineped, false)
-- 	TaskGoStraightToCoord(rehineped, 870.05578, -2291.365, 30.467781, 150.0, -1, 265.61, 0)
-- 	Citizen.Wait(5000)
-- 	TaskGoStraightToCoord(rehineped, 892.39062, -2293.721, 30.467813, -1, 350.61, 0)
-- 	Citizen.Wait(13000)
-- 	TriggerEvent("lumo:pedbomb")
-- end)

-- RegisterNetEvent('lumo:client:requestblast') -- PED WALK
-- AddEventHandler('lumo:client:requestblast', function()
-- 	TriggerServerEvent("np-bobcat:request_door")
-- end)

-- RegisterNetEvent('lumo:pedbomb') -- PED WALK
-- AddEventHandler('lumo:pedbomb', function()
-- 	TaskGoStraightToCoord(rehineped, 894.98535, -2284.857, 30.467809, 150.0, -1, 82.56, 0)
-- 	Citizen.Wait(7500)
--     RequestAnimDict("weapons@projectile@grenade_str")
--     while not HasAnimDictLoaded("weapons@projectile@grenade_str") do
--         Citizen.Wait(0)
--     end
--     TaskPlayAnim(rehineped, 'weapons@projectile@grenade_str', 'throw_h_fb_backward', 8.0, 8.0, -1, 33, 0, 0, 0, 0)
-- 	Citizen.Wait(1000)
-- 	AddExplosion(890.7849, -2284.88, 32.441, 32, 150000.0, true, false, 4.0)
-- 	AddExplosion(894.0084, -2284.90, 32.580, 32, 150000.0, true, false, 4.0)
--     TriggerServerEvent("np-bobcat:bubbles")
--     -- TriggerEvent("lumo:propcreate")
--     Wait(1500)
-- end)


-- RegisterNetEvent('np-bobcat:search_crate_1unchecked') -- PED WALK
-- AddEventHandler('np-bobcat:search_crate_1unchecked', function()
--     TriggerServerEvent("np-bobcat:search_crate_1")
-- end)

-- RegisterNetEvent('np-bobcat:search_crate_2unchecked') -- PED WALK
-- AddEventHandler('np-bobcat:search_crate_2unchecked', function()
--     TriggerServerEvent("np-bobcat:search_crate_2")
-- end)

-- RegisterNetEvent('np-bobcat:search_crate_3unchecked') -- PED WALK
-- AddEventHandler('np-bobcat:search_crate_3unchecked', function()
--     TriggerServerEvent("np-bobcat:search_crate_3")
-- end)

-- RegisterNetEvent('np-bobcat:search_crate_1') 
-- AddEventHandler('np-bobcat:search_crate_1', function()
--     FreezeEntityPosition(GetPlayerPed(-1),true)
--     TriggerEvent('np-hud:show_money')
--     TriggerEvent("doAnim","search")
--     TriggerEvent('np-dispatch:bobcat_robbery')
--     local finished = exports["np-taskbar"]:taskBar(30000,"Looting")
--     if finished == 100 then
--         TriggerEvent('np-heists:bobcat_loot')
--         TriggerEvent('np-hud:hide_money')
--         ClearPedTasks(GetPlayerPed(-1))
--         FreezeEntityPosition(GetPlayerPed(-1),false)
--         searched1 = true
--     end
-- end)

-- RegisterNetEvent('np-bobcat:search_crate_2') 
-- AddEventHandler('np-bobcat:search_crate_2', function()
--     FreezeEntityPosition(GetPlayerPed(-1),true)
--     TriggerEvent('np-hud:show_money')
--     TriggerEvent("doAnim","search")
--     TriggerEvent('np-dispatch:bobcat_robbery')
--     local finished = exports["np-taskbar"]:taskBar(30000,"Looting")
--     if finished == 100 then
--         TriggerEvent('np-heists:bobcat_loot')
--         TriggerEvent('np-hud:hide_money')
--         ClearPedTasks(GetPlayerPed(-1))
--         FreezeEntityPosition(GetPlayerPed(-1),false)
--         searched2 = true
--     end
-- end)

-- RegisterNetEvent('np-bobcat:search_crate_3')
-- AddEventHandler('np-bobcat:search_crate_3', function()
--     FreezeEntityPosition(GetPlayerPed(-1),true)
--     TriggerEvent('np-hud:show_money')
--     TriggerEvent("doAnim","search")
--     TriggerEvent('np-dispatch:bobcat_robbery')
--     local finished = exports["np-taskbar"]:taskBar(30000,"Looting")
--     if finished == 100 then
--         TriggerEvent('np-heists:bobcat_loot')
--         TriggerEvent('np-hud:hide_money')
--         ClearPedTasks(GetPlayerPed(-1))
--         FreezeEntityPosition(GetPlayerPed(-1),false)
--         searched3 = true
--     end
-- end)

-- RegisterNetEvent('np-heists:bobcat_loot')
-- AddEventHandler('np-heists:bobcat_loot', function()
--     local EvanDidIt = math.random(1, 5)
--     if EvanDidIt == 1 then
--         TriggerEvent('player:receiveItem', '497969164', 1) -- M70
--         TriggerEvent('player:receiveItem', '148457251', 1) -- Browning
--     elseif EvanDidIt == 2 then
--         TriggerEvent('player:receiveItem', '-2012211169', 1) -- Diamondback
--         TriggerEvent('player:receiveItem', '-1074790547', 1) -- AK47
--     elseif EvanDidIt == 3 then
--         TriggerEvent('player:receiveItem', '-134995899', 1) -- Mac-10
--         TriggerEvent('player:receiveItem', '-1716589765', 1) -- Deagle
--     elseif EvanDidIt == 4 then
--         TriggerEvent('player:receiveItem', '1649403952', 1) -- Draco
--         TriggerEvent('player:receiveItem', '-1716589765', 1) -- Deagle
--     elseif EvanDidIt == 5 then
--         TriggerEvent('player:receiveItem', '-942620673', 1) -- UZI
--     end
-- end)