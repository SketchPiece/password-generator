import { z } from 'zod'

export const passwordGeneratorSettingsSchema = z
  .object({
    length: z.number().min(0).max(50),
    includeLowercase: z.boolean(),
    includeUppercase: z.boolean(),
    includeNumbers: z.boolean(),
    includeSymbols: z.boolean(),
  })
  .refine(
    (data) => {
      return (
        data.includeLowercase ||
        data.includeUppercase ||
        data.includeNumbers ||
        data.includeSymbols
      )
    },
    {
      message:
        'At least one of the options (lowercase, uppercase, numbers, symbols) must be selected.',
      path: [
        'includeLowercase',
        'includeUppercase',
        'includeNumbers',
        'includeSymbols',
      ],
    }
  )

export type TPasswordGeneratorSettings = z.infer<
  typeof passwordGeneratorSettingsSchema
>
