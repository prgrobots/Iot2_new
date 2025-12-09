# RockCore Mining Scenario

## Business Context

**RockCore Mining** operates an open-pit copper mine in regional Australia with a fleet of 20 autonomous haul trucks. Each truck costs $2.5M and transports 400 tons of ore per cycle. Annual production: 500,000 tons.

## Current Problems

### Equipment Failures Cost $18M Annually

- **Tire failures**: $50,000 per incident + 8 hours downtime
- **Engine overheats**: Undetected until catastrophic failure
- **Unauthorized access**: Security breaches in maintenance zones
- **Environmental hazards**: Rain/dust reduce visibility but trucks continue operation

### No Predictive Maintenance

Current maintenance is **reactive** (fix when broken) rather than **predictive** (fix before breaking). This leads to:
- Unexpected downtime during peak production
- Cascading failures (one truck breakdown blocks haul road)
- Safety incidents (overheated trucks, tire blowouts)

### Limited Fleet Visibility

Pit supervisors cannot see real-time truck health from the control station. They discover issues only when trucks radio in or fail to arrive at dump zone.

## Your Solution: IoT Fleet Monitoring System

You'll build a proof-of-concept system demonstrating how IoT and AWS can solve these problems:

<div class="parallax-section" style="background-image: url('../images/banner.png'); height: 300px; background-attachment: fixed; background-position: center; background-repeat: no-repeat; background-size: cover; margin: 2rem -2rem; width: calc(100% + 4rem);"></div>

### Haul Truck (Device 1)

Physical computing system with:
- **Engine compartment sensors** (A1): Temp, gas, flame detection
- **Cabin access control** (A2): RFID authentication + logging
- **Vibration monitoring** (A3): Predictive maintenance for tires/bearings
- **Payload management** (A4): Servo-controlled dump bed simulation
- **Environmental sensors** (A5): Rain, light, collision avoidance

### Pit Station (Device 2)

Operator dashboard displaying:
- Real-time fleet status (20 trucks)
- Active alerts and warnings
- Historical trends
- Maintenance scheduling recommendations

### AWS Cloud Integration

- **IoT Core**: Secure MQTT connectivity
- **Device Shadows**: Offline resilience
- **IoT Rules**: Automated alerting (SNS email/SMS)
- **CloudWatch**: Metrics and alarms
- **SiteWise/QuickSight**: Analytics dashboard

## Expected Benefits

| Metric | Current | With IoT System | Annual Savings |
|--------|---------|-----------------|----------------|
| Unplanned downtime | 120 hours/truck/year | 40 hours | $4.8M |
| Tire failures | 15 incidents/year | 4 incidents | $550K |
| Security incidents | 8/year | 0 | $200K (insurance) |
| Maintenance labor | 200 hours/truck/year | 150 hours | $1.2M |
| **TOTAL** | | | **$6.75M/year** |

**ROI:** System pays for itself in < 6 months.

## Compliance Requirements

**Australian Mining Safety Standards:**
- All equipment access logged with timestamps (RTC + RFID)
- Temperature monitoring to prevent fires
- Operator visibility into truck status
- Emergency shutdown capability

Your system directly addresses these requirements.

## Scenario Progression Through Course

- **Weeks 1-9**: Build truck sensors and actuators (physical computing)
- **Weeks 10-14**: Connect to AWS for cloud monitoring
- **Weeks 15-18**: Integrate pit station, demonstrate fleet-wide system

By Week 18, you'll present a working system to "RockCore executives" (your instructors) showing how IoT can transform mining operations.

---

**Related:**
