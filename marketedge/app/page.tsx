"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/src/lib/supabaseClient"; // adjust if needed

export default function Home() {
  const [msg, setMsg] = useState("loading...");

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("markets")
        .select("*")
        .limit(1);

      setMsg(error ? `error: ${error.message}` : `ok: ${JSON.stringify(data, null, 2)}`);
    })();
  }, []);

  return <pre>{msg}</pre>;
}