// Decap CMS admin UI (served at /admin/). Collections are configured in admin/config.yml.
require("decap-cms");

const CMS = window.CMS;

// Style the editor preview pane with the site's own USWDS stylesheet.
// The fingerprinted path is written into admin/index.html at build time.
const previewStyle = document.querySelector('meta[name="cms-preview-style"]');
if (CMS && previewStyle) {
  CMS.registerPreviewStyle(previewStyle.content);
  CMS.registerPreviewStyle(
    ".frame-content { padding: 2rem; } .frame-content > div { max-width: 68ex; }",
    { raw: true }
  );
}
