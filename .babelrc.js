require( 'dotenv' ).config(
	{
		path: process.env.NODE_ENV === 'development' ? '.env' : `.env.${ process.env.NODE_ENV }`
	}
);

const envFileMaps = {
	'process.env.API_URL': process.env.API_URL,
	'process.env.STRIPE_PUB_KEY': process.env.STRIPE_PUB_KEY,
	'process.env.NODE_ENV': process.env.NODE_ENV,
	'process.env.PLAID_ENV': process.env.PLAID_ENV,
	'process.env.SENTRY_DSN': process.env.SENTRY_DSN,
	'process.env.SENTRY_ENV': process.env.SENTRY_ENV,
	'process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID':process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
	'process.env.NEXT_PUBLIC_GOOGLE_PROJECT_ID': process.env.NEXT_PUBLIC_GOOGLE_PROJECT_ID,
	'process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET': process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
	'process.env.NEXT_PUBLIC_GOOGLE_API_KEY': process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
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
