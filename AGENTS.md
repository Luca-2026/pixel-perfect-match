<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the individual software service as a dedicated leaf route using shared layout primitives; register it in the central service registry and explicit prerender list so navigation, sitemap and static export stay aligned.
- Keep shared heading wrapping and breakpoint-based type sizes in the global stylesheet; use local sizing only when a specific headline needs whole-word fitting in a narrower container.
- Keep each guide article in a dedicated leaf route using ArticleLayout, with metadata in the article registry and its path in the explicit prerender list; both sitemap implementations read the registry.
- Use featuredServices for homepage and service-overview tiles; retain the full services registry for navigation, footer and sitemap so existing service URLs remain discoverable.
- Share the live laptop viewport across homepage and references; load the external frame near the viewport and scale a fixed desktop canvas to the photographed display to preserve its geometry.
