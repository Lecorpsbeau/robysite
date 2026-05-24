import { NextResponse } from 'next/server';

const FALLBACK_INVITE_URL = 'https://discord.com/invite/dm5dCRjV';

export async function GET() {
  const botToken = process.env.DISCORD_BOT_TOKEN;
  const channelId = process.env.DISCORD_CHANNEL_ID;

  // Si les variables d'environnement ne sont pas configurées, on redirige vers le lien de secours
  if (!botToken || !channelId) {
    console.warn('⚠️ Tokens Discord manquants. Redirection vers le lien de secours.');
    return NextResponse.redirect(FALLBACK_INVITE_URL);
  }

  try {
    const response = await fetch(`https://discord.com/api/v10/channels/${channelId}/invites`, {
      method: 'POST',
      headers: {
        'Authorization': `Bot ${botToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        max_age: 604800, // 7 jours en secondes
        max_uses: 0, // Illimité
        unique: true, // Force la génération d'un nouveau code
      }),
      // Eviter le cache pour garantir un lien frais à chaque clic
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Erreur API Discord:', errorData);
      return NextResponse.redirect(FALLBACK_INVITE_URL);
    }

    const data = await response.json();
    
    // Redirection immédiate vers la nouvelle invitation générée
    return NextResponse.redirect(`https://discord.gg/${data.code}`);
    
  } catch (error) {
    console.error('Erreur lors de la génération de l\'invitation Discord:', error);
    // En cas d'erreur réseau ou autre, on assure toujours le service avec le lien de secours
    return NextResponse.redirect(FALLBACK_INVITE_URL);
  }
}
