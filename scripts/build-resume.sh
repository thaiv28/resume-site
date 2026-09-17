#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
build_dir="$repo_root/.build/resume"
public_dir="$repo_root/public"

mkdir -p "$build_dir" "$public_dir"
latexmk \
  -pdf \
  -interaction=nonstopmode \
  -halt-on-error \
  -output-directory="$build_dir" \
  "$repo_root/resume.tex"
cp "$build_dir/resume.pdf" "$public_dir/resume.pdf"
