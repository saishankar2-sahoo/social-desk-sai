import './globals.css';import {Shell} from '@/components/shell'
export const metadata={title:'social-desk — AI social media manager',description:'Research, create, approve and schedule social content.'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Shell>{children}</Shell></body></html>}
