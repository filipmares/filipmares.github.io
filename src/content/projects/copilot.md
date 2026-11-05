---
title: "App Builder in M365 Copilot"
description: "App Builder in M365 Copilot helps people create and share productivity apps with enterprise security and governance."
company: "Microsoft"
companyLabel: "Microsoft — Aug 2025 to Sep 2026 · San Francisco, CA · Hybrid"
dateRange: "2025-2026"
dateMeta: "Aug 2025 — Sep 2026"
tags: ["React", "TypeScript", "Bun", "LLM"]
sortOrder: 1
caseStudy:
  context: "App Builder in M365 Copilot helps people create personal and team productivity apps that are secure, governed, and easy to share within their organization. AI helps generate and refine each app, while enterprise reliability and policy requirements still apply."
  role: "I led the live app preview and playback experience for the Microsoft Ignite 2025 launch. I also designed the architecture to keep previews reliable as apps moved through different lifecycle states. This work included container lifecycle behavior, short-lived access tokens for preview sessions, and Content Security Policy (CSP) rules that control where code can run and what it can load."
  collaborationScope: "I coordinated with partner teams to ship a reliable in-product preview for launch, while separately advancing architecture changes to make future upgrades easier."
  constraints:
    - "Previews had to remain stable throughout the app lifecycle."
    - "Authentication and browser security rules had to protect preview sessions without slowing the experience."
    - "AI-generated apps needed independent updates instead of waiting for a single large release."
  decisions:
    - "I designed an approach for updating AI-generated apps independently, using dependencies managed by the agent rather than tying updates to a single release."
    - "I expanded a local reliability fix into an architectural direction partner teams could adopt."
    - "I prototyped and evaluated a service-hosted runtime for coding agents that could work across providers. It ran the agent harness—the controlled environment around an agent—in sandboxed containers."
  outcomes:
    - "Shipped live app preview and playback for Ignite 2025."
    - "Turned a local upgradeability improvement into an architectural direction for partner teams."
    - "End-to-end evaluations showed the prototype performed comparably to the production agent baseline."
  reflection: "This work reinforced a consistent lesson in AI product engineering: the experience feels magical only when app lifecycles are reliable, security boundaries are clear, and evaluation is built into the process."
  links: []
  artifacts:
    - src: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/1120684-powervnext-0x1080-6439k"
      alt: "Demo of app building in Copilot Studio"
      caption: "App building in Copilot Studio."
      poster: "https://www.microsoft.com/en-us/copilot/blog/copilot-studio/wp-content/uploads/2026/09/Apps-in-Copilot-Studio.png"
      width: 1920
      height: 1080
      kind: "video"
      layout: "featured"
---
