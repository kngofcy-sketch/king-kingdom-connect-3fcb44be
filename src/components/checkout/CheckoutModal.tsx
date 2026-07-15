import { useEffect, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Lock, Shield, X } from "lucide-react";
import { toast } from "sonner";

export type CheckoutItem = {
  name: string;
  price: string;
  description?: string;
  badge?: string;
};

type Props = {
  item: CheckoutItem | null;
  open: boolean;
  onClose: () => void;
};

export function CheckoutModal({ item, open, onClose }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [processing, setProcessing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!open) {
      setName("");
      setEmail("");
      setProcessing(false);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (processing) return;
    setProcessing(true);
    timerRef.current = setTimeout(() => {
      setProcessing(false);
      onClose();
      toast.success("Order reserved!", {
        description: `We'll email ${email} with payment instructions for ${item?.name}.`,
        duration: 5000,
      });
    }, 1500);
  };

  if (!item) return null;

  return (
    <Dialog.Root open={open} onOpenChange={(v) => !v && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          className="fixed right-0 top-0 z-50 flex h-full w-full max-w-lg flex-col border-l border-white/10 bg-[oklch(0.13_0.008_264/0.97)] shadow-2xl backdrop-blur-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right data-[state=closed]:duration-300 data-[state=open]:duration-300"
          aria-describedby="checkout-description"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
            <div>
              <Dialog.Title className="font-display text-lg font-bold text-foreground">
                Reserve Your Order
              </Dialog.Title>
              <p id="checkout-description" className="mt-0.5 text-xs text-muted-foreground">
                We'll send payment instructions by email.
              </p>
            </div>
            <Dialog.Close
              onClick={onClose}
              className="grid h-8 w-8 place-items-center rounded-md border border-white/10 text-muted-foreground transition hover:border-white/20 hover:text-foreground"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </Dialog.Close>
          </div>

          <div className="border-b border-white/10 px-6 py-5">
            <div className="flex items-center gap-4 rounded-xl border border-gold/30 bg-gold/5 p-4">
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-gold/40 bg-gradient-to-br from-[oklch(0.22_0.04_85/0.6)] to-[oklch(0.14_0.01_264)]"
                aria-hidden="true"
              >
                <span className="font-display text-xl font-black text-gold">K</span>
              </div>
              <div className="min-w-0">
                <p className="truncate font-display text-sm font-bold text-foreground">
                  {item.name}
                </p>
                {item.description && (
                  <p className="mt-0.5 truncate text-xs text-muted-foreground">
                    {item.description}
                  </p>
                )}
                {item.badge && (
                  <span className="mt-1.5 inline-block rounded-full border border-gold/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-gold">
                    {item.badge}
                  </span>
                )}
              </div>
              <div className="ml-auto shrink-0 text-right">
                <p className="font-display text-xl font-black text-foreground">{item.price}</p>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  USD
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-1 flex-col overflow-y-auto px-6 py-6"
          >
            <div className="flex flex-col gap-5">
              <CheckoutField label="Full Name">
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Carlos Izquierdo"
                  className="checkout-input"
                  autoComplete="name"
                />
              </CheckoutField>

              <CheckoutField label="Email">
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="checkout-input"
                  autoComplete="email"
                />
              </CheckoutField>
            </div>

            <div className="mt-auto pt-8">
              <button
                type="submit"
                disabled={processing}
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-md bg-gradient-gold px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-primary-foreground shadow-gold transition hover:-translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-80 disabled:hover:translate-y-0"
              >
                {processing ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                    Reserving...
                  </>
                ) : (
                  <>
                    <Lock className="h-4 w-4" />
                    Reserve — {item.price}
                  </>
                )}
              </button>

              <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Shield className="h-3.5 w-3.5 text-gold" /> Secure checkout
                </span>
                <span className="h-3 w-px bg-white/10" />
                <span>No payment required now</span>
              </div>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function CheckoutField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
