import Link from 'next/link';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-neutral-50 text-neutral-950">
      <Navbar />

      <main className="flex-1 flex flex-col justify-center py-20">
        <div className="layout-container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary-200 bg-primary-50 text-primary-600 label-s">
              ✨ Typography & Grid System Configured
            </div>

            <h1 className="heading-l text-neutral-950">
              We ignite opportunity by setting the world in motion.
            </h1>

            <p className="body-l text-neutral-600 max-w-2xl mx-auto">
              Custom-built using <strong>Poppins SemiBold</strong> for headings, <strong>Satoshi</strong> for body & labels, and the official 12-column grid system with margin 120px and gutter 40px.
            </p>

            <div className="flex items-center justify-center gap-4 pt-6">
              <Link href={ROUTES.DASHBOARD.ROOT}>
                <Button variant="primary" size="lg">
                  Explore Dashboard &rarr;
                </Button>
              </Link>
              <Link href={ROUTES.AUTH.LOGIN}>
                <Button variant="outline" size="lg">
                  Sign In Flow
                </Button>
              </Link>
            </div>
          </div>

          {/* 12-Column Grid Demonstration */}
          <div className="mt-20">
            <h2 className="heading-s text-center mb-8 text-neutral-900">
              Design System Palette & Grid
            </h2>
            <div className="layout-grid">
              <div className="col-span-12 md:col-span-4 p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-3">
                <span className="label-m text-primary-600">Primary Palette</span>
                <h3 className="heading-xs text-neutral-900">Electric Violet</h3>
                <p className="body-m text-neutral-600">
                  Vivid blue/violet system used for active actions, buttons, and highlights (`#0445ff`).
                </p>
              </div>

              <div className="col-span-12 md:col-span-4 p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-3">
                <span className="label-m text-neutral-600">Neutral Palette</span>
                <h3 className="heading-xs text-neutral-900">Black & Grays</h3>
                <p className="body-m text-neutral-600">
                  Clean gray scale from `#f5f5f6` background to `#242528` rich text color.
                </p>
              </div>

              <div className="col-span-12 md:col-span-4 p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-3">
                <span className="label-m text-secondary-700">Secondary Palette</span>
                <h3 className="heading-xs text-neutral-900">Lime Accent</h3>
                <p className="body-m text-neutral-600">
                  High-contrast secondary accent scale (`#cbfc01`) for banners, badges, and metrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
