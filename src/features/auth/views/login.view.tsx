import { Rocket } from 'lucide-react'

import { AuthFeaturesList } from '../components/auth-features-component'
import { LoginForm } from '../components/login-form'
import { LOGIN_FEATURES } from '../data/auth-features.data'

export function LoginPage() {
  const appName = import.meta.env.VITE_APP_NAME || 'Sanz Store'
  return (
    <div className="bg-background flex min-h-screen">
      {/* Left Side - Branding & Features */}
      <div className="from-primary via-primary to-primary/80 relative hidden flex-col justify-between overflow-hidden bg-linear-to-br p-12 lg:flex lg:w-1/2">
        {/* Decorative elements */}
        <div className="bg-primary-foreground/10 absolute top-0 right-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
        <div className="bg-primary-foreground/10 absolute bottom-0 left-0 h-96 w-96 -translate-x-1/2 translate-y-1/2 rounded-full blur-3xl" />

        <div className="relative z-10">
          {/* Logo */}
          <div className="mb-16 flex items-center gap-3">
            <div className="bg-primary-foreground/20 flex h-10 w-10 items-center justify-center rounded-xl">
              <Rocket className="text-primary-foreground h-6 w-6" />
            </div>
            <span className="text-primary-foreground text-2xl font-bold">{appName}</span>
          </div>

          {/* Tagline */}
          <div className="max-w-2xl space-y-6">
            <h2 className="text-primary-foreground text-5xl leading-tight font-bold">
              Sign In and Continue Your Favorite Game Top Ups
            </h2>

            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Access fast, secure, and convenient game top up transactions anytime for all your
              favorite games.
            </p>
          </div>
        </div>

        {/* Features */}
        <AuthFeaturesList features={LOGIN_FEATURES} />

        {/* Footer */}
        <div className="text-primary-foreground/80 relative z-10 text-sm">
          <p>Trusted by 10,000+ teams • 99.9% uptime • 24/7 Support</p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="bg-background flex w-full flex-col items-center justify-center p-6 sm:p-8 lg:w-1/2">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Logo */}
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-xl">
              <Rocket className="text-primary-foreground h-6 w-6" />
            </div>
            <span className="text-foreground text-2xl font-bold">YourApp</span>
          </div>

          {/* Header */}
          <div className="space-y-3">
            <h1 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
              Welcome back
            </h1>
            <p className="text-muted-foreground text-base">Sign in to your account to continue</p>
          </div>

          {/* Form Card */}
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
