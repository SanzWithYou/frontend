import { Button } from '@/core/components/ui/button'
import { toast } from 'sonner'

export function HomePage() {
  return (
    <div>
      <section className="">
        <h1>hallo home page</h1>
        <Button onClick={() => toast('test')} />
      </section>
    </div>
  )
}
