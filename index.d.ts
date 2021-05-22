export default function overload<F extends (...args: unknown[]) => unknown>(overloads: {
    [overload: string]: (...args: unknown[]) => unknown;
}): (...args: Parameters<F>) => unknown;
