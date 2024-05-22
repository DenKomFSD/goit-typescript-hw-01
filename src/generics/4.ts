type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
  const existUser: User = {
    name: "John",
    surname: "Doe",
    email: "john.doe@example.com",
    password: "oldpassword",
  };
  return { ...existUser, ...initialValues };
}

const updatedUser = createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});

export { updatedUser };
