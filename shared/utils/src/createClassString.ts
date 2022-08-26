export function createClassString(...classes: (string | undefined | null)[]) {
  return classes.filter(Boolean).join(' ')
}
