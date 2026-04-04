import './globals.css'
import { AuthProvider } from '../lib/auth'
import { MatchesProvider } from '../lib/matches'

export const metadata = {
  title: 'Reedstreams',
  description: 'Live sports streaming',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* 🛡️ Early Ad Shield - FULL shield runs BEFORE React loads */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function(){
              if(typeof window==='undefined')return;
              var n=function(){console.log('🛡️ BLOCKED: window.open');return null};
              try{Object.defineProperty(window,'open',{get:function(){return n},set:function(){},configurable:false})}catch(e){try{window.open=n}catch(e2){}}
              try{if(window.parent&&window.parent!==window){Object.defineProperty(window.parent,'open',{get:n,set:function(){},configurable:true})}}catch(e){}
              try{if(window.top&&window.top!==window){Object.defineProperty(window.top,'open',{get:n,set:function(){},configurable:true})}}catch(e){}
              setInterval(function(){try{Object.defineProperty(window,'open',{get:function(){return n},set:function(){},configurable:false})}catch(e){}},1000);
            })();
          `
        }} />
      </head>
      <body>
        <AuthProvider>
          <MatchesProvider>
            {children}
          </MatchesProvider>
        </AuthProvider>
        {/* Register Service Worker for network-level ad blocking */}
        <script dangerouslySetInnerHTML={{
          __html: `
            if('serviceWorker' in navigator){
              window.addEventListener('load',function(){
                navigator.serviceWorker.register('/sw-adshield.js').then(function(r){
                  console.log('🛡️ AdShield Service Worker registered');
                }).catch(function(e){
                  console.log('🛡️ AdShield SW registration failed:',e);
                });
              });
            }
          `
        }} />
      </body>
    </html>
  )
}
