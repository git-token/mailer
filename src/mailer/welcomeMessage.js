export default function welcomeMessage({ email }) {
  const welcomeMessage = `
    <div>
      <h1>Hello, ${email}!</h1>
    </div>
  `;

  return welcomeMessage
}
