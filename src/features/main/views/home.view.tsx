import { PageMeta } from '@/core/components/page-meta'
import { Button } from '@/core/components/ui/button'
import { toast } from 'sonner'

export function HomeView() {
  return (
    <>
      <PageMeta
        title="Home"
        description="Fast, secure, and reliable game top up platform for your favorite games with instant delivery and 24/7 support."
        url="/"
        keywords={[
          'game top up',
          'top up game',
          'gaming vouchers',
          'instant top up',
          'mobile legends',
          'free fire',
          'valorant',
          'gaming store',
        ]}
      />
      <div>
        <section className="">
          <h1>hallo home page</h1>
          <Button onClick={() => toast('test')} />
        </section>
      </div>
    </>
  )
}
