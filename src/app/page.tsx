import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ThemeToggle } from "@/components/shared/theme-toggle"

export default function Home() {
  return (
    <main className="container max-h-dvh">
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>
      <section className="flex h-dvh flex-col items-center justify-center gap-8">
        <Card className="w-full max-w-lg">
          <CardHeader>
            <CardTitle>Next.js Boilerplate</CardTitle>
            <CardDescription>
              A modern starter template with TypeScript, Tailwind CSS, and more.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <p className="text-muted-foreground">
              Get started by editing{" "}
              <code className="rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono">
                src/app/page.tsx
              </code>
            </p>
            <div className="flex gap-4">
              <Button variant="default">Get Started</Button>
              <Button variant="outline">Documentation</Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
