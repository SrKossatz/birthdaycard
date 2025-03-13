/*
  # Birthday Messages Table

  1. New Tables
    - `birthday_messages`
      - `id` (bigint, primary key)
      - `name` (text, required)
      - `message` (text, required)
      - `created_at` (timestamp with timezone, default: now())

  2. Security
    - Enable RLS on `birthday_messages` table
    - Add policies for public read and insert access
*/

CREATE TABLE IF NOT EXISTS birthday_messages (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE birthday_messages ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access"
  ON birthday_messages
  FOR SELECT
  TO public
  USING (true);

-- Allow public insert access
CREATE POLICY "Allow public insert access"
  ON birthday_messages
  FOR INSERT
  TO public
  WITH CHECK (true);