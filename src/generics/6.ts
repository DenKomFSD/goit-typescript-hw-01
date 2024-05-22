type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Реалізуйте Params так,
// щоб унеможливити поле 'errors' з типу Form
type Params = Omit<Form, "errors">;

//example of usage)
const formParams: Params = {
  email: "example@example.com",
  firstName: "Den",
  lastName: "Komanich",
  phone: "123-456-7890",
};
