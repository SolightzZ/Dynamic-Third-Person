export let config = {
	"config_name": "dtp",
	"config_display_name": "Dynamic Third Person Camera",
	"config_data": [
		{
			"name": "Preset Settings (Reset all settings)",
			"identifier": "dtp:preset",
			"type": "dropdown",
			"option": [
				"Custom", "Shoulder Camera", "Dynamic Camera", "Long Distance Camera", "Center Camera"
			],
			"value": 0
		},
		{
			"name": "Dynamic First Person",
			"identifier": "dtp:dynamic_fpp",
			"type": "toggle",
			"value": true
		},
		{
			"name": "Vertical Smooth Transition",
			"identifier": "dtp:vertical_smooth",
			"type": "toggle",
			"value": true
		},
		{
			"name": "Vertical Smooth Speed",
			"identifier": "dtp:vertical_smooth_speed",
			"type": "slider",
			"range": [ 1, 60 ],
			"value_step": 1,
			"value": 10
		},
		{
			"name": "Advance Camera Rotation",
			"identifier": "dtp:advance_cam_rot",
			"type": "toggle",
			"value": true
		},
		{
			"name": "Follow Camera Movement Speed",
			"identifier": "dtp:follow",
			"type": "toggle",
			"value": false
		},
		{
			"name": "Follow Camera Speed Strength",
			"identifier": "dtp:follow_strength",
			"type": "slider",
			"range": [ 1, 100 ],
			"value_step": 1,
			"value": 15
		},
		{
			"name": "Scope Perspective",
			"identifier": "dtp:scope",
			"type": "dropdown",
			"option": [
				"None", "Aim Mode", "First Person"
			],
			"value": 1
		},
		{
			"name": "Aim Camera Distance",
			"identifier": "dtp:aim_dist",
			"type": "slider",
			"range": [ -5, 5 ],
			"value_step": 1,
			"value": 1
		},
		{
			"name": "Terget Stabilizer",
			"identifier": "dtp:pbt",
			"type": "toggle",
			"value": true
		},
		{
			"name": "Peek When Sneak",
			"identifier": "dtp:peek",
			"type": "toggle",
			"value": true
		},
		{
			"name": "Peek Camera Distance",
			"identifier": "dtp:peek_dist",
			"type": "slider",
			"range": [ -4, 10 ],
			"value_step": 1,
			"value": 1
		},
		{
			"name": "Riding Camera Distance",
			"identifier": "dtp:ride_dist",
			"type": "slider",
			"range": [ 0, 6 ],
			"value_step": 1,
			"value": 2
		},
		{
			"name": "Riding Camera Distance Speed",
			"identifier": "dtp:ride_speed",
			"type": "slider",
			"range": [ 0, 20 ],
			"value_step": 1,
			"value": 10
		},
		{
			"name": "Crosshair Type",
			"identifier": "dtp:crosshair_type",
			"type": "dropdown",
			"option": [
				"Dynamic", "Type 1", "Type 2", "Type 3", "None"
			],
			"value": 0
		},
		{
			"name": "Free Look",
			"identifier": "dtp:free_look",
			"type": "toggle",
			"value": true
		},
		{
			"name": "Mainhand Item First Person",
			"identifier": "dtp:mainhand_fpp",
			"type": "toggle",
			"value": false
		},
		{
			"name": "Mainhand Item Id",
			"identifier": "dtp:mainhand_name",
			"type": "input_string",
			"value": ""
		},
		{
			"name": "Additional Distance",
			"identifier": "dtp:add_dist",
			"type": "slider",
			"range": [ -15, 40 ],
			"value_step": 1,
			"value": 0
		},
		{
			"name": "X Camera Offset",
			"identifier": "dtp:add_x",
			"type": "slider",
			"range": [ -10, 10 ],
			"value_step": 1,
			"value": 0
		},
		{
			"name": "Y Camera Offset",
			"identifier": "dtp:add_y",
			"type": "slider",
			"range": [ -10, 10 ],
			"value_step": 1,
			"value": 0
		},
		{
			"name": "Camera Mode Movement Speed",
			"identifier": "dtp:cam_speed",
			"type": "slider",
			"range": [ 1, 20 ],
			"value_step": 1,
			"value": 5
		},
		{
			"name": "Camera Mode Maximal Distance",
			"identifier": "dtp:cam_max",
			"type": "slider",
			"range": [ 1, 52 ],
			"value_step": 1,
			"value": 20
		},
		{
			"name": "360° Camera Mode Rotation",
			"identifier": "dtp:cam_360",
			"type": "toggle",
			"value": false
		},
		{
			"name": "Show Camera Tooltip",
			"identifier": "dtp:cam_tooltip",
			"type": "toggle",
			"value": false
		}
	]
}