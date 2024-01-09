import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const character = data.get("character");
  const source = data.get("source");
  const greet = data.get("greet") || "Hi";
  // Validate the data - you'll probably want to do more than this
  if (!character || !source || !greet) {
    return new Response(
      JSON.stringify({
        greet: "Missing required fields",
      }),
      { status: 400 }
    );
  }
  // Do something with the data, then return a success response
  console.log(character, source, greet);
  const sessionData = {
    character,
    source,
    greet,
  }
//   try {
//     // Make a POST request to your API
//     const res = await fetch('https://personalityai.onrender.com/chat', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(body),
//     });

//     if (res.ok) {
//       // Handle the successful response
//       let some = await res.text();
//       console.log(some);
//     } else {
//       // Handle errors if the response status is not OK
//       console.error(`Failed with status: ${res.status}`);
//     }
//   } catch (error) {
//     console.error('Error during fetch:', error);
//   }


return new Response(null, {
    status: 303, // See Other
    headers: {
      Location: '/new-page', // Replace with the actual path of your new page
      'Set-Cookie': `sessionData=${encodeURIComponent(JSON.stringify(sessionData))}; Path=/; HttpOnly; SameSite=Strict`,
    },  
  });
  
  return new Response(
    JSON.stringify({
      greet: "Success!"
    }),
    { status: 200 }
  );
};