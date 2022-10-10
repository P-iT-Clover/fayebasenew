local lastMessage = ""

exports("showInteraction", function(message, type)
    if not type then type = "info" end
    lastMessage = message
    SendNUIMessage({
        action = "interactions",
        data = {
            message = message,
            show = true,
            type = type,
        }
    })
end)

exports("hideInteraction", function(type)
    type = type and type or "info"
    SendNUIMessage({
        action = "interactions",
        data = {
            message = lastMessage,
            show = false,
            type = type,
        }
    })
    SetNuiFocus(false, false)
end)

exports("showContextMenu", function(options, position)
    SendUIMessage({
        action = "contextmenu",
        show = true,
        data = {
            options = options
        }
    })
    SetUIFocus(true, true)
end)

exports("hideContextMenu", function(options, position)
    SetNuiFocus(false, false)
    SetUIFocus(false, false)
end)

RegisterNUICallback("closecontext", function(data,cb)
    SetNuiFocus(false, false)
    SetUIFocus(false, false)
    cb("ok")
end)

RegisterNUICallback("closeeyeint", function(data,cb)
    SetNuiFocus(false, false)
    SetUIFocus(false, false)
    exports["np-ui"]:closeApplication("eye")
    TriggerEvent("np-interact:detali")
    cb("ok")
end)

-- RegisterNUICallback("np-ui:targetSelectOption", function(data, cb)
--     cb({ data = {}, meta = { ok = true, message = 'done' } })

--     IsPeeking = false

--     exports["np-ui"]:closeApplication("eye")

--     Wait(100)

--     local option = data.option
--     local context = data.context or {}

--     local event = option.event
--     local target = data.entity or 0
--     local parameters = option.parameters or {}

--     TriggerEvent(event, parameters, target, context)
-- end)


-- RegisterCommand("testcontextmenu", function()
--     local menuData = {
--         {
--             title = "Lockers",
--             description = "Access your personal locker",
--             action = "np-police:handler",
--             key = "EVENTS.LOCKERS"
--         },
--         {
--             title = "Clothing",
--             description = "Gotta look Sharp",
--             action = "np-police:handler",
--             key = "EVENTS.CLOTHING"
--         },
--         {
--             title = "Armory",
--             description = "WEF - Weapons, Equipment, Fun!",
--             action = "np-police:handler",
--             key = "EVENTS.ARMORY"
--         },
--         {
--             title = "Evidence",
--             description = "Drop off some evidence",
--             action = "np-police:handler",
--             key = "EVENTS.EVIDENCE",
--             children = {
--                 { title = "Confirm Purchase", action = "np-ui:rentalPurchase", key = "EVENTS.EVIDENCE" },
--             },
--         },
--         {
--             title = "Trash",
--             description = "Where Spaghetti Code belongs",
--             action = "np-police:handler",
--             key = "EVENTS.TRASH"
--         },
--         {
--             title = "Character switch",
--             description = "Go bowling with your cousin",
--             action = "np-police:handler",
--             key = "EVENTS.SWITCHER",
--             children = {
--                 { title = "Confirm Purchase", action = "np-ui:rentalPurchase", key = "EVENTS.SWITCHER" },
--             },
--         },
--     }
--     exports["np-interface"]:showContextMenu(menuData)
-- end)
-- Example Using This
-- type 
-- error (bg : Red) or succes ( bg : Green) or info (bg : blue)
-- Show Interaction
-- exports["np-ui"]:showInteraction(msg,type)

-- Hide Interaction
-- exports["np-ui"]:showInteraction(msg,type)