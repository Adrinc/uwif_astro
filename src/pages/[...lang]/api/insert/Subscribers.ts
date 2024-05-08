import type { APIRoute } from "astro";
import { supabase } from "../../../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  console.log(formData)
  const email = formData.get("email")?.toString();
  const zipcode = formData.get("zipcode")?.toString();
  const date = new Date().toISOString();


  const { error } = await supabase.from("Subscribers").insert({
    email:email,
    zipcode:zipcode,
    created_at:date
  });

  if (error) {
    return new Response(error.message, { status: 500 });
  }


  return redirect('/join')
};