#!/usr/bin/env bash
set -eu

cd "$(dirname "$0")/.."

export AWS_SHARED_CREDENTIALS_FILE=./.aws/credentials
export AWS_CONFIG_FILE=./.aws/config
export AWS_EC2_METADATA_DISABLED=true

npx serverless offline start &
offline_pid=$!

cleanup() {
  kill "$offline_pid" 2>/dev/null || true
}
trap cleanup EXIT INT TERM

echo "Waiting for DynamoDB Local on port 8000..."
for _ in $(seq 1 60); do
  if node scripts/createLocalDynamoTables.js 2>/dev/null; then
    echo "Local DynamoDB tables are ready."
    break
  fi
  sleep 1
done

wait "$offline_pid"