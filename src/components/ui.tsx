import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";

export function Button({ className, variant = "primary", ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "ghost" | "danger" }) {
  return <button className={cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 text-sm font-bold transition active:scale-[.98] disabled:cursor-not-allowed disabled:opacity-50", variant === "primary" && "bg-primary text-primary-foreground shadow-sm hover:opacity-90", variant === "secondary" && "border bg-card text-foreground hover:bg-muted", variant === "ghost" && "text-muted-foreground hover:bg-muted hover:text-foreground", variant === "danger" && "bg-danger text-primary-foreground", className)} {...props} />;
}

export function NextLink({ to, children, className }: { to: string; children: ReactNode; className?: string }) {
  return <Link to={to} className={cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-bold text-primary-foreground shadow-sm transition hover:opacity-90", className)}>{children}<ArrowRight size={17} /></Link>;
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-xl border bg-card p-5 shadow-[0_8px_30px_rgba(31,36,79,0.05)]", className)}>{children}</div>;
}

export function Badge({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "success" | "warning" | "danger" | "primary" }) {
  return <span className={cn("inline-flex items-center rounded-md px-2.5 py-1 text-xs font-bold", tone === "neutral" && "bg-muted text-muted-foreground", tone === "success" && "bg-success-soft text-success", tone === "warning" && "bg-warning-soft text-warning", tone === "danger" && "bg-danger-soft text-danger", tone === "primary" && "bg-secondary text-primary")}>{children}</span>;
}

export function PageHeader({ title, subtitle, action }: { title: string; subtitle: string; action?: ReactNode }) {
  return <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><h1 className="text-2xl font-extrabold md:text-3xl">{title}</h1><p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">{subtitle}</p></div>{action}</div>;
}

export const fieldClass = "h-11 w-full rounded-lg border bg-card px-3 text-sm transition focus:border-primary focus:ring-2 focus:ring-primary/15";
