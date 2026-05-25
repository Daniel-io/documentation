
### Quick View

- 🏗️ Architecture
- 🗂️ Data Modeling
- 🔄 Flow Design
- 🔗 Dependency Management
- 🧱 Functions
- 🧠 State Management
- 🔌 Events & Communication
- 🧪 Reliability & Error Handling
- 📚 Maintainability & Readability
- ⚖️ Tradeoffs & Engineering Judgment
- 🧩 Thinking Model
- ⚡ Pre-Code Checklist



---

# 🏗️ Architecture

* Separation of Concerns — each system/module should have one clear responsibility
* Decoupling — minimize unnecessary direct dependencies between systems
* Single Source of Truth — one canonical place for each piece of data
* Explicit Flow — data and control flow should be traceable and predictable
* Modularity — build independent, replaceable parts
* Composition over coupling — combine systems instead of tightly linking them
* Define system boundaries clearly
* Design systems to be scalable and maintainable over time

---

# 🗂️ Data Modeling

* Design data structures before implementation
* Keep data normalized and predictable
* Prefer explicit structures over ambiguous shapes
* Avoid duplicated or derived state when possible
* Model relationships clearly
* Data shape influences architecture
* Design around domain concepts, not UI implementation
* Keep state structures simple and understandable

---

# 🔄 Flow Design

* Design flows before implementation
* Trace how users move through the system
* Trace how data moves through the system
* Keep flows predictable and explicit
* Every action should have a clear lifecycle
* Reduce unnecessary transitions and complexity
* Think in pipelines and state transitions
* Prefer explicit event/data flow over hidden reactions

---

# 🔗 Dependency Management

* Import tools, inject systems
* Prefer explicit dependencies over hidden wiring
* Shared stateful systems should be injected intentionally
* Avoid modules reaching into global systems directly
* Composition root assembles the application
* Minimize coupling between modules
* Depend on interfaces/contracts, not implementations
* Modules should be replaceable and testable
* Imports are for stateless utilities; injection is for stateful systems
* Avoid hidden singleton dependencies across the codebase

---

# 🧱 Functions

* Single Responsibility — one function = one job
* Prefer pure functions when possible
* Same input → same output for deterministic behavior
* Avoid hidden side effects
* Keep functions small and focused
* Prefer explicit inputs/outputs over globals
* Immutability — avoid mutating existing data directly
* Functions should communicate intent clearly
* Optimize for readability and predictability

---

# 🧠 State Management

* State is passive data
* State changes must be explicit
* Centralize state ownership
* Avoid uncontrolled state mutation
* Read state freely; control writes carefully
* Use controlled APIs for updates (`setState`, reducers, dispatchers, etc.)
* Avoid implicit reactions tied directly to state changes
* Keep state predictable and traceable
* Separate state storage from side effects and rendering logic

---

# 🔌 Events & Communication

* Events are signals, not storage
* One event can have many listeners
* Publishers should not know subscribers
* Events should be optional hooks
* Use meaningful event names (`user:login`, `ball:move`)
* Prefer event-driven communication for decoupling systems
* Avoid overusing events for simple direct logic
* Separate event systems from state systems
* Keep communication explicit and understandable

---

# 🧪 Reliability & Error Handling

* Fail loudly for invalid developer usage
* Fail gracefully for runtime/user-facing issues
* Make errors descriptive and actionable
* Validate inputs at system boundaries
* Avoid silent failures
* Logging should aid debugging, not hide problems
* Prefer predictable failure states
* Design systems with debuggability in mind

---

# 📚 Maintainability & Readability

* Prefer clarity over cleverness
* Optimize for future understanding
* Use consistent naming conventions
* Keep APIs small and predictable
* Reduce cognitive load
* Code should communicate intent clearly
* Consistency is more important than personal style
* Refactor when responsibilities become unclear
* Organize files by responsibility, not randomness

---

# ⚖️ Tradeoffs & Engineering Judgment

* There are rarely perfect solutions, only tradeoffs
* Prefer simplicity until complexity is justified
* Optimize for maintainability before premature optimization
* Flexibility adds complexity — use intentionally
* Abstractions should remove complexity, not hide confusion
* Every architectural decision has costs and benefits
* Design for current needs while allowing reasonable growth
* Avoid overengineering early
* Balance readability, performance, scalability, and flexibility intentionally
* Engineering is about managing constraints and tradeoffs consciously

---

# 🧩 Thinking Model

* Think in systems, not files
* Think in flows, not function calls
* Think in responsibilities, not placement
* Think about ownership of data and behavior
* Design before scaling complexity
* Ask “what depends on what?”
* Ask “what should know about this?”
* Prefer explicit architecture over implicit behavior
* Design for change, not just for initial implementation

---

# ⚡ Pre-Code Checklist

## Architecture
* What are the main systems?
* What responsibilities does each system have?
* What should be separated?
* What depends on what?
* Are dependencies explicit?

## Data
* What is the single source of truth?
* Is state centralized?
* Is data duplicated unnecessarily?
* Are data relationships clear?

## Flow
* Can I trace data flow clearly?
* What happens after each major action?
* Are flows predictable and explicit?

## Dependencies
* Should this dependency be imported or injected?
* Is this a tool or a system?
* Am I creating hidden coupling?

## Functions
* Does this function do one thing?
* Is it deterministic/predictable?
* Are side effects intentional?

## Communication
* Should this be a direct call or an event?
* Are events separate from state?
* Is communication understandable?

## Reliability
* What happens when this fails?
* Are errors descriptive and actionable?
* Can I debug this easily?

## Maintainability
* Will this still make sense in 6 months?
* Is the code communicating intent clearly?
* Am I optimizing for readability?

## Tradeoffs
* Am I adding unnecessary complexity?
* Is this abstraction justified?
* What are the costs vs benefits of this design?
* Am I optimizing too early?