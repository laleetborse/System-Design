(function () {
    const resultEl = document.getElementById("result");
    const btn = document.getElementById("fetch-btn");

    function showMessage(text, isError) {
        resultEl.textContent = text;
        resultEl.className = "result " + (isError ? "error" : "success");
    }

    async function callBackend() {
        showMessage("Loading…", false);
        btn.disabled = true;
        try {
            const res = await fetch("/api/");
            const text = await res.text();
            if (!res.ok) throw new Error(text || res.statusText);
            showMessage(text, false);
        } catch (err) {
            showMessage("Error: " + err.message, true);
        } finally {
            btn.disabled = false;
        }
    }

    document.getElementById("fetch-btn").addEventListener("click", callBackend);
})();
