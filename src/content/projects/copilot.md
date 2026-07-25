---
title: "App Builder in M365 Copilot"
description: "Building App Builder in M365 Copilot: secure, governable, and sharable productivity apps for people and teams."
company: "Microsoft"
companyLabel: "Microsoft — Sep 2025 to Present · San Francisco, CA · Hybrid"
dateRange: "2025-present"
dateMeta: "Sep 2025 —"
tags: ["React", "TypeScript", "Bun", "LLM"]
sortOrder: 1
caseStudy:
  context: "App Builder in M365 Copilot helps people create personal and team productivity apps that remain secure, governable, and easy to share inside an organization. The experience is agentic, meaning AI systems assist with generation and iteration while the product still has to meet enterprise reliability and policy constraints."
  role: "I led live app preview and playback for the Microsoft Ignite 2025 launch, and I drove the architecture for preview reliability across app lifecycle states. My scope covered container lifecycle behavior, token-based authentication (short-lived access tokens for preview sessions), and Content Security Policy requirements (browser rules that restrict where code can run and load from)."
  collaborationScope: "I coordinated with partner teams to ship a reliable in-product preview path for launch, while independently pushing architecture changes that improved long-term upgradeability."
  constraints:
    - "Live preview had to stay stable across app lifecycle transitions, not just in isolated local states."
    - "Authentication and browser security policy constraints had to be satisfied without breaking the speed of preview and playback."
    - "AI-generated apps needed an upgrade path that did not force every change through monolithic release timing."
  decisions:
    - "I architected an approach for independently upgradeable AI-generated apps using agent-controlled dependencies so app updates could move without tightly coupling to a single release train."
    - "I translated a local reliability fix into a broader architectural direction that could be adopted across teams."
    - "I prototyped and validated a provider-agnostic, service-hosted coding-agent runtime, where an agent harness (the controlled execution wrapper around the agent) runs in sandboxed containers."
  outcomes:
    - "Shipped live app preview and playback for the Microsoft Ignite 2025 launch."
    - "Moved upgradeability from a local implementation concern to a cross-team architectural direction."
    - "Validated end-to-end prototype evals for the service-hosted runtime with results comparable to the production agent baseline."
  reflection: "This work reinforced a consistent pattern in AI product engineering: the user-facing experience only feels magical when lifecycle integrity, security policy boundaries, and evaluation loops are explicit. My current focus is continuing to improve enterprise reliability while advancing the runtime direction for future app-generation workflows."
  links: []
  # Keep artifacts empty until authentic or redacted materials are available.
  # Example schema entry (do not add until the asset is real and approved):
  # - src: "/projects/copilot/app-preview-flow-redacted.png"
  #   alt: "Redacted App Builder preview lifecycle sequence"
  #   caption: "Preview flow across lifecycle transitions and policy checks."
  #   kind: "diagram"
  #   layout: "featured"
  artifacts: []
---
