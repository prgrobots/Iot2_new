# Course Resources

## PhysComp Website

**Primary Learning Resource:** [MakeAbility Lab Physical Computing](https://makeabilitylab.github.io/physcomp/)

All theory content is delivered through this excellent open-source resource from University of Washington.

**Key Sections:**
- [Arduino Basics](https://makeabilitylab.github.io/physcomp/arduino/)
- [ESP32 Specific](https://makeabilitylab.github.io/physcomp/esp32/)
- [Electronics Fundamentals](https://makeabilitylab.github.io/physcomp/electronics/)
- [Signal Processing](https://makeabilitylab.github.io/physcomp/signals/)
- [Communication Protocols](https://makeabilitylab.github.io/physcomp/communication/)

## AWS Skill Builder

**Account Setup:** [AWS Skill Builder](https://explore.skillbuilder.aws/)

**Required Courses (by week):**

**Week 10:**
- Getting Started with AWS IoT (35 min)
- Securely Connecting AWS IoT Devices (45 min)

**Week 11:**
- Handling AWS IoT Device Data & States (2 hours)

**Week 12:**
- Managing AWS IoT Devices at Scale (3.5 hours)

**Week 14:**
- Analyzing, Visualizing, and Gaining Insights (45 min)

## SimuLearn Labs

Access via course Blackboard shell.

**Week 12:** OTA Updates lab

**Week 13:**
- ETL at the Edge
- Converting Industrial Protocols
- Contextualizing Industrial Equipment Data

**Week 14:**
- Manufacturing Data Ingestion
- Automotive Telemetry Processing
- Equipment Health Dashboards

## Wokwi Simulator

**URL:** [wokwi.com](https://wokwi.com/)

Free Arduino/ESP32 simulator used in Weeks 2-4 before transitioning to real hardware.

**Features:**
- ESP32, Arduino Uno, Pi Pico boards
- Extensive sensor library
- Serial monitor
- Share projects via URL

## Hardware Kit

**Keyestudio ESP32 IoT Starter Kit** (provided Week 5)

**Includes:**
- ESP32-WROOM-32 development board (2×)
- Breadboards
- DHT11 temp/humidity sensor
- MQ-2 gas sensor
- Flame sensor
- PIR motion sensor
- RFID-RC522 module + cards
- GY-521 (MPU6050) accelerometer
- Rain sensor
- Photoresistor
- HC-SR04 ultrasonic sensor
- SG90 servo motor
- OLED display (SSD1306)
- RGB LEDs, resistors, buttons, jumper wires

**Not Included (purchase separately or improvise):**
- 20×4 LCD I²C display (for pit station)
- Second ESP32 (for pit station) – may be provided Week 16
- Piezo buzzer

## Software Tools

### Arduino IDE

**Download:** [arduino.cc/software](https://www.arduino.cc/software)

**Required Libraries:**
- DHT sensor library (Adafruit)
- MFRC522 (RFID)
- MPU6050 (Electronic Cats)
- Adafruit SSD1306
- Adafruit GFX
- PubSubClient (MQTT)
- ArduinoJson
- RTClib
- ESP32Servo
- LiquidCrystal_I2C

**Install via:** Tools → Manage Libraries

### VS Code + PlatformIO (Alternative)

For advanced users: [platformio.org](https://platformio.org/)

### AWS CLI

**Install:** [aws.amazon.com/cli](https://aws.amazon.com/cli/)

Needed for OTA updates and Greengrass deployment (Weeks 12-13).

## Documentation & Datasheets

**ESP32:**
- [Official Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf)
- [Pinout Reference](https://randomnerdtutorials.com/esp32-pinout-reference-gpios/)

**Sensors:**
- DHT11: [Datasheet](https://www.mouser.com/datasheet/2/758/DHT11-Technical-Data-Sheet-Translated-Version-1143054.pdf)
- MQ-2: [Datasheet](https://www.pololu.com/file/0J309/MQ2.pdf)
- MPU6050: [Datasheet](https://invensense.tdk.com/wp-content/uploads/2015/02/MPU-6000-Datasheet1.pdf)
- HC-SR04: [Datasheet](https://cdn.sparkfun.com/datasheets/Sensors/Proximity/HCSR04.pdf)

## GitHub Resources

**Course Examples:** [Link TBD - Your GitHub repo]

**Recommended Arduino Libraries:**
- [Adafruit Learning System](https://learn.adafruit.com/)
- [Random Nerd Tutorials - ESP32](https://randomnerdtutorials.com/projects-esp32/)

## AWS Documentation

**IoT Core:** [docs.aws.amazon.com/iot](https://docs.aws.amazon.com/iot/)

**Key Pages:**
- [MQTT Topics](https://docs.aws.amazon.com/iot/latest/developerguide/topics.html)
- [Device Shadows](https://docs.aws.amazon.com/iot/latest/developerguide/iot-device-shadows.html)
- [IoT Rules](https://docs.aws.amazon.com/iot/latest/developerguide/iot-rules.html)
- [Security Best Practices](https://docs.aws.amazon.com/iot/latest/developerguide/security-best-practices.html)

## Troubleshooting Resources

**ESP32 Issues:**
- [ESP32 Troubleshooting Guide](https://randomnerdtutorials.com/esp32-troubleshooting-guide/)
- [ESP32 Forum](https://www.esp32.com/)

**AWS IoT Issues:**
- [AWS IoT FAQs](https://aws.amazon.com/iot-core/faqs/)
- [AWS re:Post](https://repost.aws/)

**Course Support:**
- Instructor office hours (see Blackboard)
- Course discussion forum
- Email: [instructor email]

## Community & Forums

- [Arduino Forum](https://forum.arduino.cc/)
- [Reddit r/esp32](https://www.reddit.com/r/esp32/)
- [Reddit r/aws](https://www.reddit.com/r/aws/)
- [Stack Overflow - ESP32 tag](https://stackoverflow.com/questions/tagged/esp32)

## Optional Advanced Reading

**Industrial IoT:**
- Industry 4.0 concepts
- Predictive maintenance algorithms
- Edge computing architectures

**Mining Technology:**
- Autonomous haul systems
- Fleet management systems
- Safety protocols in open-pit mines

---

**Have a resource to recommend?** Submit a pull request or email instructor!
