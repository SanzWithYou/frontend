import { type LucideIcon } from 'lucide-react'

interface AuthFeatureItemProps {
  icon: LucideIcon
  title: string
  description: string
  iconColor?: string
  bgColor?: string
}

export function AuthFeatureItem({
  icon: Icon,
  title,
  description,
  iconColor = 'text-primary-foreground',
  bgColor = 'bg-primary-foreground/20',
}: AuthFeatureItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div
        className={`${bgColor} mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg`}
      >
        <Icon className={`${iconColor} h-6 w-6`} />
      </div>
      <div>
        <h3 className={`${iconColor} mb-1 font-semibold`}>{title}</h3>
        <p className={`${iconColor}/80 text-sm`}>{description}</p>
      </div>
    </div>
  )
}

interface AuthFeaturesListProps {
  features: Array<{
    id: string
    icon: LucideIcon
    title: string
    description: string
  }>
  iconColor?: string
  bgColor?: string
}

export function AuthFeaturesList({
  features,
  iconColor = 'text-primary-foreground',
  bgColor = 'bg-primary-foreground/20',
}: AuthFeaturesListProps) {
  return (
    <div className="relative z-10 space-y-4">
      {features.map((feature) => (
        <AuthFeatureItem
          key={feature.id}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          iconColor={iconColor}
          bgColor={bgColor}
        />
      ))}
    </div>
  )
}
