export type Platform = 'LinkedIn'|'Instagram'|'X'|'YouTube Shorts'
export type PostStatus = 'Draft'|'Needs approval'|'Scheduled'|'Posted'
export const trends = [
 {id:'t1',title:'AI agents at work',category:'Technology',velocity:'+248%',posts:'18.4k',description:'Teams are sharing practical agent workflows that save time across everyday operations.',tags:['#AIAgents','#FutureOfWork'],source:'Cross-platform signal'},
 {id:'t2',title:'Creator-led storytelling',category:'Creator economy',velocity:'+186%',posts:'12.8k',description:'Audiences respond to authentic behind-the-scenes stories and founder perspectives.',tags:['#CreatorEconomy','#Storytelling'],source:'Instagram + LinkedIn'},
 {id:'t3',title:'Sustainable productivity',category:'Lifestyle',velocity:'+124%',posts:'9.2k',description:'A growing conversation around healthier systems for doing meaningful work.',tags:['#DeepWork','#SustainableGrowth'],source:'X + YouTube'},
 {id:'t4',title:'Zero-click search',category:'Marketing',velocity:'+92%',posts:'7.6k',description:'Marketers are adapting content strategies for AI-powered discovery experiences.',tags:['#SearchMarketing','#AEO'],source:'LinkedIn + X'}
]
export const accounts: {id:string;platform:Platform;handle:string;connected:boolean;followers:string;color:string;initial:string}[] = [
 {id:'a1',platform:'LinkedIn',handle:'@northstar.studio',connected:true,followers:'12.8k',color:'#0a66c2',initial:'in'},
 {id:'a2',platform:'Instagram',handle:'@northstar.creates',connected:true,followers:'8.4k',color:'#e1306c',initial:'◎'},
 {id:'a3',platform:'X',handle:'@northstarhq',connected:false,followers:'3.2k',color:'#111827',initial:'𝕏'},
 {id:'a4',platform:'YouTube Shorts',handle:'Northstar Studio',connected:false,followers:'5.1k',color:'#ff0000',initial:'▶'}
]
export const scheduledPosts: {id:string;platform:Platform;title:string;date:string;time:string;status:PostStatus;copy:string}[] = [
 {id:'p1',platform:'LinkedIn',title:'The agentic workflow shift',date:'2026-11-18',time:'10:30 AM',status:'Scheduled',copy:'The next productivity leap is not another dashboard. It is a teammate that can take action.'},
 {id:'p2',platform:'Instagram',title:'Behind the scenes: our process',date:'2026-11-19',time:'12:00 PM',status:'Needs approval',copy:'A peek at the small rituals behind our best creative work.'},
 {id:'p3',platform:'X',title:'A better way to work',date:'2026-11-20',time:'9:15 AM',status:'Draft',copy:'Less busywork. More meaningful work. That is the goal.'},
 {id:'p4',platform:'YouTube Shorts',title:'3 tiny workflow upgrades',date:'2026-11-21',time:'5:30 PM',status:'Posted',copy:'Three simple changes that make your workday feel lighter.'},
 {id:'p5',platform:'LinkedIn',title:'Build systems, not streaks',date:'2026-11-24',time:'11:00 AM',status:'Scheduled',copy:'Consistency gets easier when the system does the heavy lifting.'}
]
export const analytics = {impressions:'128.4k',engagement:'8.6%',followers:'+1,284',published:'42',impressionsChange:'+18.2%',engagementChange:'+2.4%',followersChange:'+12.8%',publishedChange:'+8 this week',weekly:[42,58,48,76,63,88,72],platforms:[{name:'Instagram',value:42,color:'#e1306c'},{name:'LinkedIn',value:31,color:'#0a66c2'},{name:'YouTube',value:17,color:'#ff0000'},{name:'X',value:10,color:'#111827'}]}
