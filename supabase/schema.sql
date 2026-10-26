-- Orders Schema for Anulus Joaillerie Fast COD Engine
create table if not exists public.orders (
    id uuid default gen_random_uuid() primary key,
    customer_name text not null,
    phone text not null,
    city text not null,
    address text,
    product_id text not null,
    product_name text not null,
    total_amount numeric not null,
    shipping_fee numeric default 0,
    status text default 'pending_cod_confirmation',
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.orders enable row level security;

create policy "Allow anonymous order submissions"
on public.orders for insert
with check (true);
