
function showGuidance(type) {
  const guidance = document.getElementById("guidance");

  const messages = {
    medical: `
      <h3>🏥 Medical Assistance</h3>
      <p>1. Assess whether you need urgent medical attention.</p>
      <p>2. Contact your verified campus health centre.</p>
      <p>3. For a life-threatening emergency, contact local emergency services.</p>
      <p>4. Inform a trusted person if possible.</p>
    `,

    safety: `
      <h3>🛡️ Safety Concern</h3>
      <p>1. Move to a safer, well-lit location if possible.</p>
      <p>2. Contact verified campus security.</p>
      <p>3. Inform your warden or a trusted person.</p>
      <p>4. For immediate danger, contact local emergency services.</p>
    `,

    general: `
      <h3>💬 General Support</h3>
      <p>1. Reach out to a trusted friend or family member.</p>
      <p>2. Contact your warden or student support office.</p>
      <p>3. Use verified campus counselling resources if available.</p>
      <p>4. Remember, asking for support is okay.</p>
    `
  };

  guidance.innerHTML = messages[type] || "Please select a support category.";
}
