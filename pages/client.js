import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = createClient(
  "https://bchgicczzgxqxiteebqp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzYxMTUwNCwiZXhwIjoxOTU5MTg3NTA0fQ.8J8qZ4dPvKDtlaCOpv-Wu4w0V1nw5h3jrnYmoyXGZys"
);
