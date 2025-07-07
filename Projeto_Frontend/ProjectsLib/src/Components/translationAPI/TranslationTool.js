
document.getElementById("pt").addEventListener("click", ()=> {
    translatePage("pt");
    console.log('ola');
    });

document.getElementById("en").addEventListener("click", ()=> translatePage("en"));

    async function translateText(text, targetLang) {
      const encodedText = encodeURIComponent(text);
      const langpair = `en|${targetLang}`;
      const url = `https://api.mymemory.translated.net/get?q=${encodedText}&langpair=${langpair}`;

      try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.responseStatus !== 200) {
          console.error("Translation error:", data.responseDetails);
          return text; // fallback to original
        }

        return data.responseData.translatedText;
      } catch (error) {
        console.error("Translation request failed:", error);
        return text;
      }
    }

    // Get all visible text nodes
    function getTextNodes() {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode: function (node) {
          const parent = node.parentNode;
          return (
            parent &&
            getComputedStyle(parent).display !== 'none' &&
            node.nodeValue.trim()
          ) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
      });

      const nodes = [];
      while (walker.nextNode()) {
        nodes.push(walker.currentNode);
      }
      return nodes;
    }

    // Translate and replace all visible text nodes
    async function translatePage(targetLang) {
      const textNodes = getTextNodes();

      for (const node of textNodes) {
        const originalText = node.nodeValue.trim();
        if (originalText) {
          const translated = await translateText(originalText, targetLang);
          node.nodeValue = translated;
        }
      }
    }
