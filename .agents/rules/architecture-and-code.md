# Architecture and Code Standards

1. **Project Structure:**
   - Keep folder hierarchies logical and clean.
   - Separate business logic, UI components, data layers, and utilities.

2. **Dependency Management:**
   - Check if an existing package meets requirements before adding a new external library.
   - Use deterministic package managers and maintain clean lockfiles.

3. **Performance & Responsiveness:**
   - Optimize assets, lazy-load non-critical components, and avoid unnecessary re-renders.
   - Maintain accessibility standards (semantic HTML, proper ARIA labels, keyboard navigability).

4. **Error Handling:**
   - Always handle edge cases, loading states, and error states gracefully in UI and API operations.
   - Log errors descriptively without exposing sensitive user or system details.
