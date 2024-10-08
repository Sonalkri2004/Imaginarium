import { Button } from "@/components/ui/button"

import { z } from "zod"
 
const formSchema = z.object({
  username: z.string().min(2).max(50),
})
const SignupForm = () => {
  return (
    <div>
        <Button>Click me</Button>
    </div>
  )
}

export default SignupForm