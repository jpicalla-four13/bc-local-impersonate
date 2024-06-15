const copyButton = document.getElementById("copySession")

copyButton.addEventListener("click", handleCopy)

async function handleCopy() {
  try {
    const targetURLInput = document.getElementById('targetURL')
    const targetURL = targetURLInput.value.trim() || "http://localhost"
    const hasFoundCookies = await copyCookiesToTargetURL(targetURL);

    if (hasFoundCookies) {
      showMessage(`Session copied to ${targetURL}!`);
    } else {
      showMessage(`No customer session cookies found.`);
    }
  } catch (e) {
    showMessage(`Something went wrong while copying the cookies.`);
    console.error(e)
  }
}

async function copyCookiesToTargetURL(target) {
  const cookieNamesToCopy = [
    "SHOP_SESSION_ROTATION_TOKEN",
    "SHOP_SESSION_TOKEN",
    "SHOP_TOKEN",
  ]

  const [currentTab] = await chrome.tabs.query({ active: true, currentWindow: true })
  const targetURL = new URL(target || "http://localhost")
  const currentTabURL = new URL(currentTab.url)
  const cookies = await chrome.cookies.getAll({ domain: currentTabURL.hostname })
  let hasFoundCookies = false

  for (const cookie of cookies) {
    if (!cookieNamesToCopy.includes(cookie.name)) continue

    hasFoundCookies = true

    chrome.cookies.set({
      url: targetURL.origin,
      name: cookie.name,
      value: cookie.value,
      path: cookie.path,
      secure: cookie.secure,
      httpOnly: cookie.httpOnly,
      expirationDate: cookie.expirationDate,
      sameSite: cookie.sameSite,
    })
  }

  return hasFoundCookies
}

function showMessage(text) {
  const message = document.getElementById("message")

  message.style.display = "block"
  message.textContent = text

  setTimeout(() => {
    message.style.display = "none"
  }, 2500)
}
