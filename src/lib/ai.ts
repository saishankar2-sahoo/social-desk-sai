import { trends, type Platform } from '@/data/mock'
export async function researchTrends(topic?: string) { await new Promise(r=>setTimeout(r,650)); return topic ? trends.filter(t=>(t.title+' '+t.category+' '+t.description).toLowerCase().includes(topic.toLowerCase())) : trends }
export async function generatePlatformDrafts(topic: string) { await new Promise(r=>setTimeout(r,900)); const seed=topic.trim()||'building better workflows'; return ([
 {platform:'LinkedIn' as Platform,copy:`The conversation around ${seed} is moving fast.\n\nHere is what we're learning: progress comes from pairing bold ideas with practical, repeatable systems.\n\nWhat has your experience been?`,limit:3000},
 {platform:'Instagram' as Platform,copy:`A fresh perspective on ${seed} ✨\n\nSmall shifts. Better habits. More room to create.\n\nSave this for your next brainstorm.`,limit:2200},
 {platform:'X' as Platform,copy:`${seed} is changing how we work.\n\nThe opportunity isn't doing more. It's making the important work easier to do.`,limit:280},
 {platform:'YouTube Shorts' as Platform,copy:`3 things to know about ${seed}:\n1. Start with one useful problem.\n2. Keep the workflow simple.\n3. Measure what actually helps.\n\nFollow for more practical ideas.`,limit:5000}
 ]) }
export async function generateImage(prompt: string) { await new Promise(r=>setTimeout(r,700)); return {prompt,src:'/image-placeholder.svg',label:'AI concept preview · sample image'} }
