-- Swxy#0001 thx nikez
useNativeAudio = false
use3dAudio = true
useSendingRangeOnly = true

-- function GetMaxChunkId()
-- 	return Config.gridSize << 2
-- end

-- local maxChannel = GetMaxChunkId() << 1 -- Double the max just in case


AddEventHandler("onResourceStart", function(resName) -- Initialises the script, sets up voice related convars
	if GetCurrentResourceName() ~= resName then
		return
	end

	-- Set voice related convars
	--SetConvarReplicated("voice_useNativeAudio", true )
	-- SetConvarReplicated("voice_use2dAudio", use3dAudio and "false" or "true")
	SetConvarReplicated("voice_use3dAudio", use3dAudio)	
	SetConvarReplicated("voice_useSendingRangeOnly", useSendingRangeOnly )	

	-- for i = 1, maxChannel do
	-- 	MumbleCreateChannel(i)
	-- end

	Debug("[np-voice] Running perfectly.")
end)


RegisterNetEvent("ev:voice:connection:state")
AddEventHandler("ev:voice:connection:state", function(state)
	TriggerClientEvent('ev:voice:connection:state', -1, source, state)
end)


RegisterNetEvent("ev:voice:transmission:state")
AddEventHandler("ev:voice:transmission:state", function(group, context, transmitting, pEffect, isInVehicle)
	local _source = source
	for k,v in pairs(group) do
		TriggerClientEvent('ev:voice:transmission:state', v, _source, context, transmitting, pEffect, isInVehicle)
	end
end)


function Debug(msg, ...)
    if not Config.enableDebug then return end

    local params = {}

    for _, param in ipairs({ ... }) do
        if type(param) == "table" then
            param = json.encode(param)
        end

        table.insert(params, param)
    end

    print((msg):format(table.unpack(params)))
end

function DumpTable(table, nb)
	if nb == nil then
		nb = 0
	end

	if type(table) == 'table' then
		local s = ''
		for i = 1, nb + 1, 1 do
			s = s .. "    "
		end

		s = '{\n'
		for k,v in pairs(table) do
			if type(k) ~= 'number' then k = '"'..k..'"' end
			for i = 1, nb, 1 do
				s = s .. "    "
			end
			s = s .. '['..k..'] = ' .. DumpTable(v, nb + 1) .. ',\n'
		end

		for i = 1, nb, 1 do
			s = s .. "    "
		end

		return s .. '}'
	else
		return tostring(table)
	end
end
-- koil sucks