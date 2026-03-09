"use client";

import { LuHeart, LuCopy, LuCheck } from "react-icons/lu";
import { useState } from "react";
import { SITE } from "@/consts";

export function Donations() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(SITE.bankAccountDetails.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="border-t border-border bg-linear-to-b from-accent/5 to-background px-4 py-20 md:px-8 mt-16">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Header */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <LuHeart className="h-8 w-8 text-accent" />
            </div>
            <h2 className="font-space-grotesk text-3xl font-bold text-foreground md:text-4xl">
              <span className="text-balance">
                Support Our <span className="text-accent">Ministry</span>
              </span>
            </h2>
            <p className="max-w-xl text-muted-foreground">
              Your generous donations help us continue spreading God's Word
              through the airwaves. Every contribution makes a difference in
              keeping Grace Wave Radio on air 24/7.
            </p>
          </div>

          {/* Donation Card */}
          <div className="w-full max-w-md rounded-2xl border border-accent/20 bg-card p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                  Bank Transfer
                </span>
                <span className="text-lg font-medium text-foreground">
                  {SITE.bankAccountDetails.bankName}
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-muted-foreground">
                    Account Number
                  </span>
                  <div className="flex items-center justify-center gap-3">
                    <span className="font-space-grotesk text-2xl font-bold text-foreground">
                      {SITE.bankAccountDetails.accountNumber}
                    </span>
                    <button
                      onClick={copyToClipboard}
                      className="cursor-pointer flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary text-secondary-foreground transition-colors hover:bg-secondary/80"
                      aria-label="Copy account number"
                    >
                      {copied ? (
                        <LuCheck className="h-4 w-4 text-green-500" />
                      ) : (
                        <LuCopy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-xs text-muted-foreground">
                    Account Holder
                  </span>
                  <span className="text-base font-medium text-foreground">
                    {SITE.bankAccountDetails.accountHolder}
                  </span>
                </div>
              </div>

              <div className="rounded-xl bg-accent/10 p-4">
                <p className="text-sm text-muted-foreground">
                  Thank you for supporting our mission. God bless you abundantly
                  for your generosity.
                </p>
              </div>
            </div>
          </div>

          {/* Scripture */}
          <blockquote className="max-w-lg text-sm italic text-muted-foreground">
            {
              '"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."'
            }
            <cite className="mt-2 block text-xs font-semibold not-italic text-accent">
              2 Corinthians 9:7
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
