
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



const hostelContacts = {
    BH1: {
        landline: "01824-444521 / 444522 / 444523",
        mobile: "9915020442"
    },
    BH2: {
        landline: "01824-444524",
        mobile: "9888598705"
    },
    BH3: {
        landline: "01824-444526 / 444527",
        mobile: "9876740080"
    },
    BH4: {
        landline: "01824-444529",
        mobile: "9888598087"
    },
    BH5: {
        landline: "01824-444530 / 444531",
        mobile: "9780036434"
    },
    BH6: {
        landline: "01824-444532 / 444533",
        mobile: "9501110445"
    },
    BH7: {
        landline: "01824-444536",
        mobile: "7508182814"
    },

    BS11: {
        landline: "01824-495059 / 495071",
        mobile: "9888598035"
    },
    BS12: {
        landline: "01824-495065 / 495066 / 495055",
        mobile: "7986997706"
    },
    BS13: {
        landline: "01824-495063",
        mobile: "9878426873"
    },

    GH1: {
        landline: "01824-444081",
        mobile: "9915020443"
    },
    GH2: {
        landline: "01824-444082",
        mobile: "9876644335"
    },
    GH3: {
        landline: "01824-444083",
        mobile: "8264042170"
    },
    GH4: {
        landline: "01824-444084",
        mobile: "9915020444"
    },
    GH5: {
        landline: "01824-444303",
        mobile: "9876015106"
    },
    GH6: {
        landline: "01824-444301",
        mobile: "9915020439"
    },
    GH7: {
        landline: "01824-444528",
        mobile: "9780005963"
    },

    GS12: {
        landline: "01824-495062",
        mobile: "7347000907"
    }
};

function showHostelContact() {
    const hostel = document.getElementById("hostelSelect").value;
    const result = document.getElementById("hostelResult");

    if (!hostel) {
        result.innerHTML =
            "<p>Please select your hostel.</p>";
        return;
    }

    const contact = hostelContacts[hostel];

    if (contact) {
        result.innerHTML = `
            <h4>${hostel} Warden Contact</h4>

            <p><strong>Landline (8 AM - 10 PM):</strong></p>
            <p>${contact.landline}</p>

            <p><strong>Emergency Mobile Number:</strong></p>
            <p>${contact.mobile}</p>

            <a href="tel:${contact.mobile}">
                Call Warden
            </a>
        `;
    } else {
        result.innerHTML = `
            <h4>${hostel} Warden Contact</h4>
            <p>Contact details are currently pending verification.</p>
            <p>Please contact the relevant university administration for assistance.</p>
        `;
    }
}

