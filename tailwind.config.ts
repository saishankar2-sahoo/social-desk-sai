import type { Config } from 'tailwindcss'
const config: Config = { content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { ink:'#131b2e', muted:'#64748b', line:'#e2e8f0', primary:'#4f46e5', canvas:'#faf8ff' }, fontFamily:{sans:['Inter','sans-serif'],display:['Plus Jakarta Sans','sans-serif']}, boxShadow:{card:'0 1px 2px rgba(15,23,42,.04)'} } }, plugins: [] }
export default config
