"use client";

import { Actor, HttpAgent, Identity } from "@dfinity/agent";
import { AuthClient } from "@dfinity/auth-client";
import { Principal } from "@dfinity/principal";

const DFX_NETWORK = process.env.DFX_NETWORK || "local";
const isLocalNetwork = DFX_NETWORK === "local";
const HOST = isLocalNetwork ? "http://localhost:4943" : "https://ic0.app";
const NFID_AUTH_URL = "https://nfid.one/authenticate";

export class ICPService {
  private static agent: HttpAgent;
  private static authClient: AuthClient;
  private static identity: Identity;

  static async initialize() {
    try {
      this.authClient = await AuthClient.create();
      
      const isLocalNetwork = process.env.DFX_NETWORK !== "ic";
      
      this.agent = new HttpAgent({
        identity: this.authClient.getIdentity(),
        host: isLocalNetwork ? "http://localhost:4943" : "https://ic0.app",
      });

      // Only fetch root key in development
      if (isLocalNetwork && process.env.NODE_ENV === 'development') {
        try {
          await this.agent.fetchRootKey();
        } catch (e) {
          console.warn('Failed to fetch root key, continuing without it');
        }
      }
    } catch (e) {
      console.warn('Failed to initialize ICP service:', e);
    }
  }

  static async login() {
    return new Promise((resolve) => {
      this.authClient.login({
        identityProvider: isLocalNetwork
          ? `http://localhost:4943`
          : NFID_AUTH_URL,
        onSuccess: () => resolve(true),
        onError: () => resolve(false),
        windowOpenerFeatures: 
          `left=${window.screen.width / 2 - 525 / 2},` +
          `top=${window.screen.height / 2 - 705 / 2},` +
          `toolbar=0,location=0,menubar=0,width=525,height=705`,
        maxTimeToLive: BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000) // 1 week in nanoseconds
      });
    });
  }

  static async logout() {
    await this.authClient.logout();
  }

  static getAgent() {
    return this.agent;
  }

  static getIdentity() {
    return this.authClient.getIdentity();
  }
}

