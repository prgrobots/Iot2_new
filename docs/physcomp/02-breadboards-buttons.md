Week 2 – Digital Inputs & Emergency Stop Buttons


### Session 2: Digital Inputs & Emergency Stop Buttons

**Week:** 2 **Element:** ICTIOT502 2.1, ICTIOT503 1.2 **Duration:** 3.5 hours **Phase:** Physical Computing Foundations

---

#### Session Introduction
Industrial machines **must** have reliable hard-wired emergency stops that work even when Wi-Fi is down. Today you will build a fail-safe button circuit using correct pull-up/pull-down techniques.

#### Learning Objectives
- Understand internal vs external pull resistors
- Implement debounced digital input reading
- Design a normally-closed emergency stop circuit
- Explain why INPUT_PULLUP is mandatory in noisy factories

---

!!! tip "Pre-Session Preparation"
	- Complete AWS Skill Builder: **Securely Connecting AWS IoT Devices to the Cloud** (1 hour)
	- Have a push button and 10 kΩ resistor ready

---

#### 1. Emergency Stop Requirements at AstroFab
AS 4024.1 Safety of Machinery requires:
- Red mushroom-head button
- Normally closed (NC) circuit
- Must break power immediately on press

```mermaid
graph TD
    A[Operator presses E-stop] --> B[NC contacts open]
    B --> C[Servo power relay drops out]
    C --> D[Machine stops within 200 ms]

2. Pull-up vs Pull-down – Which One for E-stop?

ConfigurationButton PressedReleasedIndustrial Use?Pull-up + NO buttonLOWHIGHYes – fail-safePull-down + NOHIGHLOWNo – wire break = false trigger
We always use pull-up + normally open button

3. ESP32 Code – Fail-safe Emergency Stop
Pythonfrom machine import Pin
import time

e_stop = Pin(0, Pin.IN, Pin.PULL_UP)   # GPIO0 often has external pull-up
relay = Pin(15, Pin.OUT, value=1)      # Active-high relay

while True:
    if e_stop.value() == 0:            # Button pressed OR wire broken
        relay.value(0)                 # CUT POWER IMMEDIATELY
        print("EMERGENCY STOP ACTIVATED")
    else:
        relay.value(1)
    time.sleep(0.01)

Portfolio Task

Photo of your E-stop circuit (clearly labelled NC/NO if using industrial button)
10-second video: press button → relay LED turns off
Reflection:
“Why do we use Pin.PULL_UP and not an external resistor in factory deployments?”



Check Your Knowledge
!!! question "Why Pin.PULL_UP and not external 10k resistor?"
??? tip "Answer"
Built-in ~45 kΩ pull-up is sufficient, saves components, and cannot be forgotten on the breadboard.
Navigation: ← Week 1 | Week 3 →