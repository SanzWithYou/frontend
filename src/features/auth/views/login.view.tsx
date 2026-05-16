import { ArrowLeft, Rocket } from 'lucide-react'

import { AuthFeaturesList } from '../components/auth-features-component'
import { LoginForm } from '../components/login-form'
import { LOGIN_FEATURES } from '../data/auth-features.data'
import { Link } from 'react-router'
import { BGPattern } from '@/core/components/ui/bg-pattern'
import { PageMeta } from '@/core/components/page-meta'

export function LoginView() {
  const appName = import.meta.env.VITE_APP_NAME || 'Sanz Store'
  return (
    <>
      <PageMeta
        title="Login"
        description="Sign in securely to continue your game top ups, manage transactions, and access your gaming account instantly."
        url="/login"
        keywords={['login', 'sign in', 'game top up', 'gaming account', 'voucher game']}
      />
      <div className="bg-background flex min-h-screen">
        {/* Left Side - Branding & Features */}
        <div className="from-primary via-primary to-primary/80 relative hidden flex-col justify-between overflow-hidden bg-linear-to-br p-12 lg:flex lg:w-1/2">
          {/* Background Pattern */}
          <BGPattern className="z-0" variant="dots" mask="fade-edges" />

          {/* Content */}
          <div className="relative z-10">
            {/* Logo */}
            <div className="mb-16 flex items-center gap-3">
              <div className="bg-primary-foreground/20 flex h-10 w-10 items-center justify-center rounded-xl backdrop-blur-sm">
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
          <div className="text-primary-foreground/80 relative z-10 flex justify-between text-sm">
            {/* Back to Home Button */}
            <Link
              to="/"
              className="text-primary-foreground/80 hover:text-primary-foreground inline-flex items-center gap-2 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />

              <span className="text-sm font-medium">Back to Home</span>
            </Link>

            <p>Trusted by gamers • Fast delivery • 24/7 Support</p>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="bg-background flex w-full flex-col items-center justify-center p-6 sm:p-8 lg:w-1/2">
          <div className="w-full max-w-md space-y-8">
            {/* Mobile Back to Home Button */}
            <Link
              to="/"
              className="text-foreground hover:text-primary inline-flex items-center gap-2 transition-colors lg:hidden"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
            {/* Mobile Logo */}
            <div className="mb-8 flex items-center gap-3 lg:hidden">
              <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-xl">
                <Rocket className="text-primary-foreground h-6 w-6" />
              </div>
              <span className="text-foreground text-2xl font-bold">{appName}</span>
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
    </>
  )
}
