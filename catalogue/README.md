# Catalogue backup

The business's printed catalogue and the brand logos from it, kept here as a backup. See `../decisions.md` D-012 and D-015.

## Files
| File | What it is |
|---|---|
| `DK-Engineers-Catalogue.pdf` | The printed catalogue, exactly as the owner sent it (5 pages, A4, made in CorelDRAW, dated June–September 2022, 1.9 MB). The website's "Download catalogue" buttons link to this file. |
| `brand-logos/` | The 41 brand logos shown in the catalogue, cut out of the PDF as PNG images (300 dpi). **Backup only: they are not shown on the website** (D-015). |
| `archive/` | Older catalogues, once a newer one replaces the main file (empty until then). |

SHA-256 of `DK-Engineers-Catalogue.pdf`: `56012868135af7f493e514d56b45b31274ec759a6fd2f2f39f96e3638a3e73ef`

## Brand logos
| Catalogue section | Logos |
|---|---|
| Cover | `polyhose`, `champion`, `diamond`, `unbrako`, `bosch`, `karam`, `raaj`, `lt-valves` |
| Hoses and hose clips | `parker`, `dunlop`, `realon` |
| Pneumatic and hydraulic fittings | `festo`, `janatics`, `smc`, `indfos`, `baumer` |
| Gasket sheets | `spitmaan`, `champion-jointing` |
| Pipes and pipe fittings | `astral-pipes`, `apl-apollo`, `finolex-pipes` |
| Power transmission | `skf`, `rathi`, `fenner` |
| Lifting products | `usha-martin`, `indef` |
| Valves | `kranti`, `racer` (and `lt-valves` from the cover) |
| Hand tools and abrasives | `norton`, `cumi`, `stanley`, `mitutoyo` |
| Cutting tools | `addison`, `jk-files`, `totem` |
| Welding products | `ador-welding`, `superon`, `esab`, `mangalam` (a photo of the electrode box) |
| Power tools and air tools | `hitachi`, `chicago-pneumatic` (and `bosch` from the cover) |

The hose-clip brand printed inside the hose clip photo isn't included, because it can't be cut out cleanly.

## When a new catalogue arrives
1. Move the current `DK-Engineers-Catalogue.pdf` into `archive/` and add its date to the name, for example `archive/DK-Engineers-Catalogue-2022.pdf`.
2. Upload the new one as `DK-Engineers-Catalogue.pdf`, so the website's download buttons keep working.
3. Update the products page, the home page tiles and `business.md` to match it, and this file (dates, SHA-256, logos).
