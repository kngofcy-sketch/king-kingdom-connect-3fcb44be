import { useEffect, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { CreditCard, Lock, Shield, X } from "lucide-react";
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

type CardBrand = "visa" | "mastercard" | "amex" | "discover" | "unknown";

function detectBrand(value: string): CardBrand {
  const n = value.replace(/\s/g, "");
  if (/^4/.test(n)) return "visa";
  if (/^5[1-5]/.test(n) || /^2[2-7]/.test(n)) return "mastercard";
  if (/^3[47]/.test(n)) return "amex";
  if (/^6(?:011|5)/.test(n)) return "discover";
  return "unknown";
}

function formatCardNumber(value: string, brand: CardBrand): string {
  const digits = value.replace(/\D/g, "").slice(0, brand === "amex" ? 15 : 16);
  if (brand === "amex") {
    return digits.replace(/(\d{4})(\d{6})(\d{0,5})/, (_, a, b, c) =>
      [a, b, c].filter(Boolean).join(" ")
    );
  }
  return digits.replace(/(\d{4})/g, "$1 ").trim();
}

function formatExpiry(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length >= 3) return `${digits.slice(0, 2)} / ${digits.slice(2)}`;
  return digits;
}

function CardBrandIcon({ brand }: { brand: CardBrand }) {
  const base =
    "inline-flex h-6 items-center justify-center rounded px-1.5 text-[10px] font-black uppercase tracking-wide";
  if (brand === "visa")
    return <span className={`${base} bg-[#1a1f71] text-white`}>VISA</span>;
  if (brand === "mastercard")
    return (
      <span className={`${base} gap-0.5 bg-transparent`}>
        <span className="h-5 w-5 rounded-full bg-[#eb001b] opacity-90" />
        <span className="-ml-2.5 h-5 w-5 rounded-full bg-[#f79e1b] opacity-90" />
      </span>
    );
  if (brand === "amex")
    return <span className={`${base} bg-[#007bc1] text-white`}>AMEX</span>;
  if (brand === "discover")
    return <span className={`${base} bg-[#f76f20] text-white`}>DISC</span>;
  return <CreditCard className="h-5 w-5 text-muted-foreground" />;
}

export function CheckoutModal({ item, open, onClose }: Props) {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [processing, setProcessing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const brand = detectBrand(cardNumber);

  useEffect(() => {
    if (!open) {
      setCardNumber("");
      setExpiry("");
      setCvc("");
      setName("");
      setEmail("");
      setAddress("");
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
      toast.success("Payment Successful! Welcome to KingdomConnect.", {
        description: `Your order for ${item?.name} has been confirmed.`,
        duration: 5000,
      });
    }, 2000);
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
                Secure Checkout
              </Dialog.Title>
              <p id="checkout-description" className="mt-0.5 text-xs text-muted-foreground">
                Powered by Stripe. 256-bit SSL encryption.
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
              <CheckoutField label="Cardholder Name">
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

              <CheckoutField label="Card Number">
                <div className="relative">
                  <input
                    required
                    value={cardNumber}
                    onChange={(e) =>
                      setCardNumber(formatCardNumber(e.target.value.replace(/\D/g, ""), brand))
                    }
                    placeholder="1234 5678 9012 3456"
                    maxLength={brand === "amex" ? 17 : 19}
                    className="checkout-input pr-14"
                    autoComplete="cc-number"
                    inputMode="numeric"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2">
                    <CardBrandIcon brand={brand} />
                  </span>
                </div>
              </CheckoutField>

              <div className="grid grid-cols-2 gap-4">
                <CheckoutField label="Expiry Date">
                  <input
                    required
                    value={expiry}
                    onChange={(e) =>
                      setExpiry(formatExpiry(e.target.value))
                    }
                    placeholder="MM / YY"
                    maxLength={7}
                    className="checkout-input"
                    autoComplete="cc-exp"
                    inputMode="numeric"
                  />
                </CheckoutField>
                <CheckoutField label="CVC">
                  <input
                    required
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, brand === "amex" ? 4 : 3))}
                    placeholder={brand === "amex" ? "4 digits" : "3 digits"}
                    maxLength={brand === "amex" ? 4 : 3}
                    className="checkout-input"
                    autoComplete="cc-csc"
                    inputMode="numeric"
                  />
                </CheckoutField>
              </div>

              <CheckoutField label="Billing Address">
                <input
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="123 Main St, Miami, FL 33101"
                  className="checkout-input"
                  autoComplete="street-address"
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
                    Processing Secure Payment via Stripe...
                  </>
                ) : (
                  <>
                    <Lock className="h-4 w-4" />
                    Pay Now — {item.price}
                  </>
                )}
              </button>

              <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Shield className="h-3.5 w-3.5 text-gold" /> SSL Secured
                </span>
                <span className="h-3 w-px bg-white/10" />
                <span className="flex items-center gap-1.5">
                  <Lock className="h-3.5 w-3.5 text-gold" /> Stripe Encrypted
                </span>
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
