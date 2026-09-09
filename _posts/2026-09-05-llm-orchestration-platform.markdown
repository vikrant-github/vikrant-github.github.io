---
layout: posts
title: "Machine Learning: The High Interest Credit Card of Technical Debt"
date: 2026-09-09 00:00:00 +0000
permalink: /article/2026/09/05/llm-orchestration-platform.html
categories: article
highlight_home: true
tags:
  - "MLOps & Technical Debt"
description: "How MLOps practices manage the operational cost and technical debt of production machine learning systems."
excerpt: "Machine learning can deliver significant value quickly."
---

Machine learning can deliver significant value quickly. As ML moves from experimentation into production, the engineering around the model becomes increasingly important.

A production ML system includes much more than the model itself. Data processing, configuration, feature generation, orchestration, validation, infrastructure, and monitoring all become part of the system that needs to be operated.

As these components evolve, their dependencies also grow. A change in data can affect feature generation. A feature change can affect model behavior. A model change can affect downstream applications. Engineering decisions that help a team move quickly can therefore create additional maintenance and operational cost over time.

This is where I see the **credit card analogy** applying to machine learning.

The initial investment can be relatively small compared with the value delivered. The operational cost appears later, particularly when systems become harder to reproduce, change, troubleshoot, and maintain.

![Machine learning technical debt as a high-interest credit card](/assets/images/ML-high-interest-credit-card.png)

## MLOps is how the debt is managed

MLOps provides the engineering practices around the ML lifecycle needed to operate these systems effectively.

In my work across **Risk Modeling, healthcare analytics, data processing, and Generative AI platforms**, I have worked on these surrounding engineering components alongside the models themselves. This included configuration driven processing, workflow orchestration, validation, production execution, and operational monitoring.

The objective was to make the workflows **consistent across executions and easier to operate as they grew in complexity**.

That means looking beyond the model itself and asking:

> "Can we run, monitor, troubleshoot, and change the complete ML workflow consistently?"

This is where I see MLOps adding value: bringing the engineering practices around the model together so the complete ML workflow can be operated as a production system.

## What MLOps looks like in practice

The engineering value of MLOps becomes clearer when looking at the problems it needs to solve.

### Repeatability

Production ML should not depend on an engineer remembering how a previous run was configured.

Configuration, data inputs, model versions, and execution parameters need to be controlled so that a run can be understood and reproduced.

In my work, I addressed this through **configuration driven workflows**, separating client specific processing from standardized downstream ML workflows. The same underlying pipeline could therefore be used with different configurations rather than maintaining separate implementations for each client.

### Automation

Once execution is repeatable, the workflow needs to run consistently.

I used workflow orchestration to structure multi stage ML processing, including preprocessing, KIA processing, and Risk Model execution. Dependencies, execution order, retries, and deployments became part of the workflow rather than relying on manual coordination.

The important engineering outcome was not the orchestration tool itself. It was moving the process from **manual execution to controlled workflow execution**.

### Observability

Production ML needs visibility into execution status, data quality, validation results, and changes in system behavior.

This becomes particularly important when the same platform supports multiple data sources and client specific processing. Operational signals help identify whether a problem originated in the input data, processing workflow, model execution, or downstream output.

### Reliability

Reliability comes from making failures and changes manageable.

That means controlling dependencies, validating outputs, handling failures, and designing workflows so that a problem in one stage does not unnecessarily compromise the entire processing chain.

Across my ML and AI platform work, this has meant treating **data, models, workflows, configuration, and infrastructure as parts of one production system**, rather than treating the model as an isolated component.

## What MLOps changes

The practical value of MLOps becomes more visible as ML workflows grow beyond individual experiments.

**Repeatable execution** reduces dependency on manual processes.

**Workflow automation** makes multi stage processing consistent.

**Observability** helps identify problems in data, execution, and model behavior.

**Reliability practices** make changes and failures easier to manage.

In my experience, these are connected engineering practices that become increasingly important as ML workflows scale across **models, data, environments, and teams**.

That is the point of the credit card analogy: as ML systems grow, the engineering discipline around them becomes increasingly important to manage the operational cost of running and changing those systems.

## Source note

This article is an original engineering interpretation inspired by the ideas in *Machine Learning: The High Interest Credit Card of Technical Debt* by D. Sculley and colleagues.

The original work examines system level ML debt and the interaction between models, data, dependencies, and production systems.
