# VISOR

A zero-dependency, mobile-first weather and emergency dashboard built specifically for motorcyclists. It provides immediate, actionable environmental metrics and regional emergency routing.

## Core Features
*   **Real-Time Weather Metrics:** Precise temperature, "feels like" temperature, wind speed, wind direction, and rain probability.
*   **24-Hour Commuter Timeline:** Visual timeline indicating safe, caution, and risk periods based on temperature, precipitation, and wet road conditions.
*   **Rain Start Alert:** Scans the coming hours and warns when rain is expected to begin.
*   **Daylight Countdown:** Live sunrise/sunset countdown so riders know how much daylight remains.
*   **Emergency Vectors:** Direct integration with OpenStreetMap to instantly locate the nearest gas stations and medical facilities within a 15km radius.
*   **Smart SOS Dialer:** Automatically detects major Greek motorways based on GPS coordinates to provide the correct regional assistance number, defaulting to 112 for all other areas.
*   **Installable PWA:** Add to home screen with app shortcuts for Fuel and SOS; last dashboard stays available offline with a data-age label.
*   **Bilingual Interface:** Fully supports English and Greek (EL).
*   **Zero Setup:** Utilizes strictly free and open-source APIs. No API keys or registration required.

## Technical Stack
*   **Frontend:** Pure HTML5, CSS3, and Vanilla JavaScript.
*   **Charting:** Chart.js (via CDN).
*   **Weather & Geocoding:** Open-Meteo API.
*   **Emergency POI Data:** Overpass API (OpenStreetMap).

## Privacy
VISOR does not store data on external servers. All user locations and preferences remain strictly local on the device and are completely inaccessible to third parties.

## Credits & Data Sources
*   Weather & geocoding by [Open-Meteo](https://open-meteo.com/) (CC BY 4.0)
*   Points of interest from [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors (ODbL)
