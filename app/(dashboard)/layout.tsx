import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { WhatsNewProvider } from "@/components/whats-new-provider"
import { ModalLoadingProvider } from "@/components/providers/modal-loading-provider"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ModalLoadingProvider>
      <SidebarProvider
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
          } as React.CSSProperties
        }
      >
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col">
              <main className="flex-1 p-4 sm:p-6 lg:p-8">
                {children}
              </main>
            </div>
          </div>
        </SidebarInset>
        <WhatsNewProvider />
      </SidebarProvider>
    </ModalLoadingProvider>
  )
}
