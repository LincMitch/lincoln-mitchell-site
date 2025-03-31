import { CheckCircle } from "lucide-react"

interface StepsProps {
  currentStep: number
}

export function Steps({ currentStep }: StepsProps) {
  const steps = [
    { id: 1, name: "Service" },
    { id: 2, name: "Date" },
    { id: 3, name: "Time" },
    { id: 4, name: "Your Info" },
    { id: 5, name: "Confirm" },
  ]

  return (
    <div className="hidden md:block">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full border ${
                step.id < currentStep
                  ? "bg-primary text-primary-foreground"
                  : step.id === currentStep
                    ? "border-primary text-primary"
                    : "border-muted-foreground text-muted-foreground"
              }`}
            >
              {step.id < currentStep ? <CheckCircle className="h-4 w-4" /> : <span>{step.id}</span>}
            </div>
            <span className={`mt-2 text-xs ${step.id === currentStep ? "font-medium" : "text-muted-foreground"}`}>
              {step.name}
            </span>
            {index < steps.length - 1 && (
              <div
                className={`absolute h-0.5 w-[calc(25%-2rem)] ${step.id < currentStep ? "bg-primary" : "bg-muted"}`}
                style={{ left: `calc(${index * 25}% + 4rem)` }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

