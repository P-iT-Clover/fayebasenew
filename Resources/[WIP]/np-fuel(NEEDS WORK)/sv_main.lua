RegisterNetEvent('np-fuel:initFuel')
AddEventHandler('np-fuel:initFuel', function(sentVeh)
	local veh = NetworkGetEntityFromNetworkId(sentVeh)
	if veh ~= 0 then
		Entity(veh).state.fuel = math.random(40, 60)
	end
end)

AddEventHandler('np-fuel:setFuel', function(sentVeh, sentFuel)
	if type(sentFuel) == 'number' and sentFuel >= 0 and sentFuel <= 100 then
		if DoesEntityExist(sentVeh) then
			Entity(sentVeh).state.fuel = sentFuel
		else
			Entity(NetworkGetEntityFromNetworkId(sentVeh)).state.fuel = sentFuel
		end
	end
end)

local function GetFuel(sentVeh)
	if DoesEntityExist(sentVeh) then
		return Entity(sentVeh).state.fuel
	else
		return Entity(NetworkGetEntityFromNetworkId(sentVeh)).state.fuel
	end
end

exports('GetFuel', GetFuel) -- exports['np-fuel']:GetFuel(veh)

RegisterCommand("setfuel", function(source, args, rawCommand)
	TriggerEvent('np-fuel:setFuel', GetVehiclePedIsIn(GetPlayerPed(source)), tonumber(args[1]))
	Wait(500)
	print(GetFuel(GetVehiclePedIsIn(GetPlayerPed(source))))
 end, false)

RegisterNetEvent('np-fuel:PurchaseSuccessful', function(gprice)
	local pSrc = source
	if exports['np-base']:GetModule('GetBalance')(pSrc) >= tonumber(gprice) then
        exports['np-base']:GetModule('RemoveBank')(pSrc, tonumber(gprice))
	end
end)

RegisterNetEvent('np-fuel:Refund', function(gprice)
	local pSrc = source
	exports['np-base']:GetModule('AddBank')(pSrc, tonumber(gprice))
end)