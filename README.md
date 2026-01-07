we have built a functional traffic light simulation with the following key features:

State-Driven Logic: We used useState to track the active light and toggle between "Auto" and "Manual" modes.

Advanced Timing Control: We transitioned from a fixed setInterval to a dynamic setTimeout approach. This allowed us to implement specific durations for each phase: 3 seconds for Red, 5 seconds for Green, and 1 seconds for Orange.

Logical vs. Visual Separation: We introduced two separate arrays to manage the app:

sequence: Handles the specific logical flow you requested (Red → Green → Orange).

visualOrder: Ensures the physical layout in the UI remains the standard Red (top), Orange (middle), Green (bottom).

Infinite Looping: We implemented the modulo operator (%) to ensure that the light sequence automatically resets to the beginning of the array without errors.

Memory Management: We utilized useRef to store the timer ID, ensuring we can safely clear the background processes when switching modes or closing the app, preventing memory leaks and erratic flashing.
