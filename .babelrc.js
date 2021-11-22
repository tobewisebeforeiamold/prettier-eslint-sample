require( 'dotenv' ).config(
	{
		path: process.env.NODE_ENV === 'development' ? '.env' : `.env.${ process.env.NODE_ENV }`
	}
);

const envFileMaps = {
	'process.env.NODE_ENV': process.env.NODE_ENV
}

module.exports = {
  "env": {
    "development": {
      "presets": [
        "next/babel"
      ],
      "plugins": [
        [
          "styled-components",
          {
            "ssr": true,
            "displayName": true,
            "preprocess": false
          }
        ],
        ["transform-define", envFileMaps],
        ["@babel/plugin-proposal-optional-chaining"]
      ]
		},
		"staging": {
      "presets": [
        "next/babel"
      ],
      "plugins": [
        [
          "styled-components",
          {
            "ssr": true,
            "displayName": true
          }
        ],
        ["transform-define", envFileMaps],
        ["@babel/plugin-proposal-optional-chaining"]
      ]
    },
    "preproduction": {
      "presets": [
        "next/babel"
      ],
      "plugins": [
        [
          "styled-components",
          {
            "ssr": true,
            "displayName": true
          }
        ],
        ["transform-define", envFileMaps],
        ["@babel/plugin-proposal-optional-chaining"]
      ]
    },
    "production": {
      "presets": [
        "next/babel"
      ],
      "plugins": [
        [
          "styled-components",
          {
            "ssr": true,
            "displayName": true
          }
        ],
        ["transform-define", envFileMaps],
        ["@babel/plugin-proposal-optional-chaining"]
      ]
    },
    "test": {
      "presets": [
        "next/babel"
      ],
      "plugins": [
        [
          "styled-components",
          {
            "ssr": true,
            "displayName": true
          }
        ]
      ]
    }
  }
};
