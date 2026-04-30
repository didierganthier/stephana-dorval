import nextVitals from "eslint-config-next/core-web-vitals"
import nextTypescript from "eslint-config-next/typescript"

const config = [
	{
		ignores: ["scripts/**"],
	},
	...nextVitals,
	...nextTypescript,
	{
		rules: {
			"react-hooks/set-state-in-effect": "off",
			"react/no-unescaped-entities": "off",
		},
	},
]

export default config
