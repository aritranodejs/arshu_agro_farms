# Admin Dashboard — Future Integration

This folder is structured for connecting an admin dashboard later.

## Planned Modules

| Module | Path | Description |
|--------|------|-------------|
| Dashboard | `dashboard/` | Overview metrics, recent inquiries |
| Goat Inventory | `inventory/` | CRUD for goats, images, availability |
| Vaccination Records | `vaccinations/` | Per-goat vaccination history |
| Breeding Records | `breeding/` | Pairing logs, genetics, kidding |
| Sales Management | `sales/` | Orders, invoices, delivery |
| Customer Inquiries | `inquiries/` | Contact form submissions |

## Services Layer

Use `services/` for API clients that will connect to:
- REST API or Supabase/Firebase backend
- File upload for goat images
- Email notifications for inquiries

## Types

Shared types live in `src/types/index.ts`. Extend with admin-specific types in `admin/types/` when building the dashboard.

## Data Migration

Current dummy data in `src/data/` maps directly to future database models. Replace imports in pages with service calls when ready.
