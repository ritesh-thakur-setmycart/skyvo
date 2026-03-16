fetch('https://skyvo.in')
  .then(r => r.text())
  .then(html => {
    const facebookMatch = html.match(/href=["']+(https:\/\/(www\.)?facebook\.com[^"']*)["']+/i);
    const instagramMatch = html.match(/href=["']+(https:\/\/(www\.)?instagram\.com[^"']*)["']+/i);
    const linkedinMatch = html.match(/href=["']+(https:\/\/(www\.)?linkedin\.com[^"']*)["']+/i);
    const phoneMatch = Object.values(html.matchAll(/(\+91[\s-]?[0-9]{10})/gi) || []).map(m=>m[1]);
    const emailMatch = html.match(/mailto:([^"']+)/i);
    
    console.log("Facebook:", facebookMatch ? facebookMatch[1] : null);
    console.log("Instagram:", instagramMatch ? instagramMatch[1] : null);
    console.log("LinkedIn:", linkedinMatch ? linkedinMatch[1] : null);
    console.log("Phone:", phoneMatch);
    console.log("Email:", emailMatch ? emailMatch[1] : "info@skyvo.in (assuming from domain)");
  })
  .catch(console.error);
