import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY,
  { db: { schema: "prelaunch-users" } }
);

const POST = async ({ request, redirect }) => {
  const formData = await request.formData();
  console.log(formData);
  const email = formData.get("email")?.toString();
  const zipcode = formData.get("zipcode")?.toString();
  const date = (/* @__PURE__ */ new Date()).toISOString();
  const { error } = await supabase.from("Subscribers").insert({
    email,
    zipcode,
    created_at: date
  });
  if (error) {
    return new Response(error.message, { status: 500 });
  }
  return redirect("/join");
};

export { POST };
