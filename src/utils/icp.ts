import { Actor, HttpAgent, Identity } from "@dfinity/agent";
import { AuthClient } from "@dfinity/auth-client";
import { Principal } from "@dfinity/principal";

const DFX_NETWORK = process.env.DFX_NETWORK || "local";
const isLocalNetwork = DFX_NETWORK === "local";
const HOST = isLocalNetwork ? "http://localhost:4943" : "https://ic0.app";

export class ICPService {
  private static agent: HttpAgent;
  private static authClient: AuthClient;

  static async initialize() {
    this.authClient = await AuthClient.create();

    this.agent = new HttpAgent({
      host: HOST,
      identity: this.authClient.getIdentity()
    });

    if (isLocalNetwork) {
      await this.agent.fetchRootKey();
    }
  }

  static async login() {
    return new Promise((resolve) => {
      this.authClient.login({
        identityProvider: isLocalNetwork
          ? `http://localhost:4943`
          : "https://identity.ic0.app",
        onSuccess: () => resolve(true),
        onError: () => resolve(false)
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
