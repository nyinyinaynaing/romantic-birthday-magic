
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				romantic: {
					'50': '#fcf5f6',
					'100': '#f9ebee',
					'200': '#f5d7de',
					'300': '#ecb7c3',
					'400': '#e08a9e',
					'500': '#d06780',
					'600': '#bd4f69',
					'700': '#a03d54',
					'800': '#853647',
					'900': '#71333e',
					'950': '#41191f',
				},
				gold: {
					'50': '#fbf8ed',
					'100': '#f6efcc',
					'200': '#eedb98',
					'300': '#e6c563',
					'400': '#dfb03e',
					'500': '#cc9528',
					'600': '#ad7421',
					'700': '#8d551e',
					'800': '#74451f',
					'900': '#633a1f',
					'950': '#391e10',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(10px)'
					}
				},
				'slide-in': {
					'0%': {
						transform: 'translateX(-100%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'slide-up': {
					'0%': {
						transform: 'translateY(100%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'float-reverse': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(10px)'
					}
				},
				'pulse-subtle': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.85'
					}
				},
				'fall': {
					'0%': {
						transform: 'translateY(-10%) rotate(0deg)',
						opacity: '0'
					},
					'10%': {
						opacity: '1'
					},
					'100%': {
						transform: 'translateY(100vh) rotate(360deg)',
						opacity: '0'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-200% 0'
					},
					'100%': {
						backgroundPosition: '200% 0'
					}
				},
				'heartbeat': {
					'0%': {
						transform: 'scale(1)'
					},
					'15%': {
						transform: 'scale(1.3)'
					},
					'30%': {
						transform: 'scale(1)'
					},
					'45%': {
						transform: 'scale(1.2)'
					},
					'60%': {
						transform: 'scale(1)'
					},
					'100%': {
						transform: 'scale(1)'
					}
				},
				'floating': {
					'0%': {
						transform: 'translateY(0px) rotate(0deg)'
					},
					'50%': {
						transform: 'translateY(-15px) rotate(5deg)'
					},
					'100%': {
						transform: 'translateY(0px) rotate(0deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-out': 'fade-out 0.6s ease-out',
				'slide-in': 'slide-in 0.8s ease-out',
				'slide-up': 'slide-up 0.8s ease-out',
				'scale-in': 'scale-in 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				'float': 'float 6s ease-in-out infinite',
				'float-reverse': 'float-reverse 7s ease-in-out infinite',
				'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
				'fall': 'fall 10s linear forwards',
				'shimmer': 'shimmer 4s linear infinite',
				'heartbeat': 'heartbeat 1.5s infinite',
				'floating': 'floating 5s ease-in-out infinite'
			},
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
				'lato': ['Lato', 'sans-serif']
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			},
			transitionDuration: {
				'2000': '2000ms',
				'3000': '3000ms',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
