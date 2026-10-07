/**
 * Telegram Link Resolver & Helper
 * Handles ISP blocks, SSL issues (ERR_SSL_PROTOCOL_ERROR on t.me),
 * deep linking for mobile/desktop apps, and web mirrors.
 */

export function getCleanTelegramInfo(rawUrl = '') {
  const url = (rawUrl || '').trim();
  
  let username = '';
  let inviteHash = '';

  // Extract invite hash (+xyz or joinchat/xyz)
  if (url.includes('/+')) {
    inviteHash = url.split('/+')[1]?.split('?')[0]?.split('/')[0] || '';
  } else if (url.includes('/joinchat/')) {
    inviteHash = url.split('/joinchat/')[1]?.split('?')[0]?.split('/')[0] || '';
  } else {
    // Extract regular username
    const match = url.match(/(?:t\.me|telegram\.me|telegram\.dog)\/([a-zA-Z0-9_]+)/i);
    if (match && match[1]) {
      username = match[1];
    } else if (/^[a-zA-Z0-9_]+$/.test(url)) {
      username = url;
    }
  }

  // Generate deep-link (opens native Telegram Desktop / Mobile App directly)
  let appUrl = '';
  if (inviteHash) {
    appUrl = `tg://join?invite=${inviteHash}`;
  } else if (username) {
    appUrl = `tg://resolve?domain=${username}`;
  }

  // Generate fallback mirror URLs that bypass ISP t.me SSL blocking
  let mirrorUrl = url;
  if (url.includes('t.me/')) {
    mirrorUrl = url.replace('t.me/', 'telegram.me/');
  } else if (!url.startsWith('http') && username) {
    mirrorUrl = `https://telegram.me/${username}`;
  }

  return {
    rawUrl: url,
    username: username || 'ajayprediction',
    inviteHash,
    appUrl,
    mirrorUrl,
    // Web telegram link
    webTelegramUrl: username ? `https://web.telegram.org/k/#@${username}` : mirrorUrl
  };
}

/**
 * Smart redirect action: tries app protocol first, falls back to mirror URL
 */
export function openTelegram(targetUrl) {
  const info = getCleanTelegramInfo(targetUrl);

  // If appUrl is available, attempt to open native client
  if (info.appUrl) {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = info.appUrl;
    document.body.appendChild(iframe);
    setTimeout(() => {
      document.body.removeChild(iframe);
    }, 1000);
  }

  // Open the SSL-safe mirror URL in a new tab
  const finalWebUrl = info.mirrorUrl || targetUrl;
  window.open(finalWebUrl, '_blank', 'noopener,noreferrer');
}
