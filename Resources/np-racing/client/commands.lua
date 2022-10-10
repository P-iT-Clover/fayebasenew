function openUI()
    if config.nui.hudOnly then return end

    SetNuiFocus(true, true)
    SendNUIMessage({
        signal = "open"
    })

    if not races then
        local res = getAllRaces()
        SendNUIMessage(res)
    end
end

RegisterNetEvent('np-racing:open', function()
    openUI()
end)

if config.commandsEnabled then
    RegisterCommand("racestart", function(src,args)
        startRace(args[1])
        SetLocalPlayerAsGhost(true)
        SetGhostedEntityAlpha(254)
    end)

    RegisterCommand("raceleave", function(src,args)
        leaveRace()
    end)

    RegisterCommand("raceend", function(src,args)
        endRace()
    end)

    RegisterCommand("raceui", function(src,args)
        openUI()
    end)

    RegisterCommand("racecreate", function(src,args)
        local options = {}
        if #args >= 1 then options.raceName = args[1] end
        if #args >= 2 then options.raceType = args[2] end
        if #args >= 3 then options.raceThumbnail = args[3] end
        TriggerEvent("np-racing:cmd:racecreate", options)
    end)

    RegisterCommand("racefinish", function(src,args)
        TriggerEvent("np-racing:cmd:racecreatedone")
    end)

    RegisterCommand("racecancel", function(src,args)
        TriggerEvent("np-racing:cmd:racecreatecancel")
    end)
end


RegisterCommand('kaveh', function()
    SetLocalPlayerAsGhost(false)
    SetGhostedEntityAlpha(254)
end)