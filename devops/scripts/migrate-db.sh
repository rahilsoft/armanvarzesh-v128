#!/bin/bash
echo "Running database migrations..."
npx prisma migrate deploy
echo "Migrations complete."