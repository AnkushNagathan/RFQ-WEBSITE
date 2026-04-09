import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { getCalApi } from "@calcom/embed-react";

function BookDemoButton({ label }) {
  useEffect(() => {
    let mounted = true;
    (async function initCal() {
      const cal = await getCalApi({ namespace: "30min" });
      if (!mounted) return;
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <button
      className="access-btn"
      data-cal-namespace="30min"
      data-cal-link="honeycombai/30min"
      data-cal-config='{"layout":"month_view"}'
      type="button"
    >
      {label}
    </button>
  );
}

let root;

window.renderBookDemoButton = function renderBookDemoButton(label) {
  const mount = document.getElementById("access-btn-root");
  if (!mount) return;
  if (!root) root = createRoot(mount);
  root.render(<BookDemoButton label={label || "Book demo"} />);
};

