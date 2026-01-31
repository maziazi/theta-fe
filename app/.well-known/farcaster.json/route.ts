function withValidProperties(properties: Record<string, undefined | string | string[]>) {
return Object.fromEntries(
    Object.entries(properties).filter(([_, value]) => (Array.isArray(value) ? value.length > 0 : !!value))
);
}

export async function GET() {
const URL = process.env.NEXT_PUBLIC_URL as string;
return Response.json(
    {
  "accountAssociation": {  // these will be added in step 5
    "header": "",
    "payload": "",
    "signature": ""
  },
  "miniapp": {
    "version": "1",
    "name": "Nawasena",
    "homeUrl": URL,
    "iconUrl": `${URL}/logo/Logo-Nawasena.png`,
    "splashImageUrl": `${URL}/logo/Logo-Nawasena.png`,
    "splashBackgroundColor": "#000000",
    "webhookUrl": `${URL}/api/webhook`,
    "subtitle": "Fast, fun, social",
    "description": "A fast, fun way to challenge friends in real time.",
    "screenshotUrls": [
      `${URL}/logo/Logo-Nawasena.png`
    ],
    "primaryCategory": "social",
    "tags": ["nawasena", "miniapp", "baseapp"],
    "heroImageUrl": `${URL}/logo/Logo-Nawasena.png`,
    "tagline": "Play instantly",
    "ogTitle": "Nawasena",
    "ogDescription": "Challenge friends in real time.",
    "ogImageUrl": `${URL}/logo/Logo-Nawasena.png`,
    "noindex": true
  }
}
); // see the next step for the manifest_json_object
}