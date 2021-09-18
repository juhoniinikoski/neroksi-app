
interface Props {
  username: 'string',
  password: 'string',
  email: 'string'
}

export async function createUser({ username, password, email }: Props) {

  const user = {
    createdAt: new Date(),
    username,
    password,
    email
  }

  console.log(user)

  return { username, createdAt: Date.now() }
}