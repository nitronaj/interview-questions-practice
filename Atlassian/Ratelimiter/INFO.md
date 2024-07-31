# Rate Limiter

Welcome to the **Rate Limiter** repository! This project implements various rate-limiting strategies to control the rate of incoming requests. Rate limiting is essential for protecting your APIs and services from being overwhelmed by too many requests in a short period.

## Table of Contents

- [About](#about)
- [Why Do We Need a Rate Limiter?](#why-do-we-need-a-rate-limiter)
- [Rate Limiting Strategies](#rate-limiting-strategies)
  - [Fixed Window](#fixed-window)
  - [Sliding Window](#sliding-window)
  - [Token Bucket](#token-bucket)
  - [Leaky Bucket](#leaky-bucket)

## About

This repository contains implementations of various rate-limiting algorithms. Rate limiting is a technique used to control the rate of traffic sent or received by a network interface controller. It is crucial for maintaining the performance and availability of web services.

## Why Do We Need a Rate Limiter?

Rate limiting is vital for several reasons:

1. **Preventing Abuse**: It helps prevent abuse and misuse of APIs by limiting the number of requests a client can make in a given period.
2. **Fair Usage**: It ensures fair usage of resources by distributing access evenly among all users.
3. **Protecting Backend Services**: It protects backend services from being overwhelmed by too many requests, which can lead to service degradation or crashes.
4. **Cost Management**: By controlling the rate of requests, rate limiting helps manage operational costs related to bandwidth, compute power, and other resources.
5. **Security**: It can mitigate certain types of attacks, such as denial-of-service (DoS) attacks, by limiting the rate at which requests are processed.

## Rate Limiting Strategies

### Fixed Window

The Fixed Window algorithm divides time into fixed windows and allows a maximum number of requests per window. For example, a limit of 100 requests per minute.

- **Pros**: Simple to implement and understand.
- **Cons**: Can lead to bursts of traffic at the boundary of windows.

### Sliding Window

The Sliding Window algorithm improves on the Fixed Window approach by allowing a more granular calculation of the rate limit. Instead of resetting the count at the end of each window, it slides the window and keeps a count of requests in the current and previous window.

- **Pros**: Smoother handling of requests and reduces the burstiness problem.
- **Cons**: Slightly more complex to implement than Fixed Window.

### Token Bucket

The Token Bucket algorithm controls the rate of requests by maintaining a bucket filled with tokens. Each request consumes a token. Tokens are added to the bucket at a fixed rate, and if the bucket is empty, requests are denied until more tokens are added.

- **Pros**: Allows for bursts of traffic while still controlling the overall rate.
- **Cons**: Requires maintaining the state of the token bucket.

### Leaky Bucket

The Leaky Bucket algorithm treats incoming requests like water entering a bucket. The bucket leaks at a constant rate. If the bucket overflows due to incoming requests exceeding the leak rate, the requests are denied.

- **Pros**: Smoothens out bursts of traffic by processing requests at a constant rate.
- **Cons**: Similar to the Token Bucket but often simpler to implement.

## Chart

Below is a chart illustrating how these rate-limiting strategies work over time:
