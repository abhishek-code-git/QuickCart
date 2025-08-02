import { serve } from "inngest/next";
import { Inngest } from "C:\Users\Amit\Desktop\QuickCart\backend\config\inngest.js";
import { helloWorld } from "../../../inngest/functions";
import { syncUserCreation, syncUserdeletion, syncUserUpdation } from "@/backend/config/inngest";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserdeletion
],
} );