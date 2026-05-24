// ============================================
// ROBY DALIER — Utility Functions
// ============================================

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatPrice(price: number): string {
  return `${price}€`;
}

export function getTimeUntil(dateStr: string): string {
  const target = new Date(dateStr);
  const now = new Date();
  const diff = target.getTime() - now.getTime();

  if (diff <= 0) return 'MAINTENANT';

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

  if (days > 0) return `${days}j ${hours}h`;
  return `${hours}h`;
}

export function getDaysSinceStart(startDate: string): number {
  const start = new Date(startDate);
  const now = new Date();
  return Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
}

export function calculateStreak(days: Record<number, Record<string, boolean>>): number {
  let streak = 0;
  const today = Object.keys(days).length;

  for (let i = today; i >= 1; i--) {
    const dayTasks = days[i];
    if (!dayTasks) break;
    const allDone = Object.values(dayTasks).every(Boolean);
    if (allDone) streak++;
    else break;
  }

  return streak;
}
