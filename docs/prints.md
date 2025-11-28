# 3D Print Files

## Required Prints for Truck Build

All STL files available in: `/prints` folder (or link to repository)

### Chassis Components

**1. Base Platform** (`chassis_base.stl`)
- Print time: ~4 hours
- Material: PLA
- Infill: 20%
- Houses ESP32, breadboard, GY-521, OLED

**2. Front Panel** (`front_panel.stl`)
- Print time: ~2 hours
- Mounts RGB LED status indicator
- Holes for DHT11, MQ-2, flame sensor

**3. Back Panel - Dump Bed** (`back_panel_dump.stl`)
- Print time: ~3 hours
- Servo motor mount
- Articulated dump bed mechanism

**4. Left Panel - Cabin** (`left_panel_cabin.stl`)
- Print time: ~2 hours
- RFID reader mount
- Touch sensor area

**5. Right Panel** (`right_panel.stl`)
- Print time: ~1.5 hours
- Cable management clips

**6. Roof Panel** (`roof_panel.stl`)
- Print time: ~2 hours
- Rain sensor mount
- Ultrasonic sensor holder
- Photoresistor opening

### Pit Station Enclosure

**7. Pit Station Base** (`pit_station_base.stl`)
- Print time: ~3 hours
- LCD mount (20×4 or 16×2)
- ESP32 compartment
- Button and LED openings

**8. Pit Station Lid** (`pit_station_lid.stl`)
- Print time: ~1.5 hours
- Snap-fit design

## Print Settings

**Recommended:**
- Layer height: 0.2mm
- Nozzle temp: 200°C (PLA)
- Bed temp: 60°C
- Speed: 50mm/s
- Supports: Only for dump bed hinge

**Material Requirements:**
- Total filament: ~800g PLA
- Suggested colors:
  - Yellow (mining equipment color) for chassis
  - Black for enclosures
  - Clear/translucent for sensor windows

## Assembly Notes

1. Print chassis base first (Week 1)
2. Test-fit ESP32 and breadboard before gluing
3. Front panel needs DHT11 secured before mounting
4. Dump bed servo requires M3 screws (not included in print)
5. Pit station LCD press-fits (no screws needed)

## Optional Enhancements

- Truck ID label holder (`label_mount.stl`)
- Cable clips (`cable_clip.stl`) - print 10×
- RFID card holder for cabin panel
- Weatherproofing gaskets (TPU filament)

## Alternative: No 3D Printer?

Use cardboard, foam core, or project boxes:
- Mount sensors on breadboard directly
- Use hot glue or tape for positioning
- Focus on functionality over aesthetics

**Grading:** Physical appearance is not assessed – only functionality matters!

---

**Download Files:** [GitHub Repository /prints folder](https://github.com/yourusername/rockcore-iot)

**Print Service:** If no printer available, check university makerspace or online services (cost ~$50-80 total).
