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
      <body suppressHydrationWarning>
        <AuthProvider>
          <MatchesProvider>
            {children}
          </MatchesProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
