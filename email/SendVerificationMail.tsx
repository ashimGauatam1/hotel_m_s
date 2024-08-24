import {
    Html,
    Head,
    Font,
    Preview,
    Heading,
    Row,
    Section,
    Text,
    Button,
  } from '@react-email/components'; 
  
  interface VerificationEmailProps {
    username: string;
    otp: string;
  }
  
  export default function VerificationEmail({ username, otp }: VerificationEmailProps) {

    return (
      <Html lang="en" dir="ltr">
        <Head>
          <title>Verification Code</title>
          <Font
            fontFamily="Roboto"
            fallbackFontFamily="Verdana"
            webFont={{
              url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
              format: 'woff2',
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Preview>Here&apos;s your verification code: {otp}</Preview>
        <body>
  <div className="container mx-auto bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-teal-600 text-2xl mb-4">Hello {username},</h2>
    <p className="text-gray-700 text-base mb-4">Thank you for registering. Please use the following verification code to complete your registration:</p>
    <p className="code bg-gray-100 p-2 text-red-400  rounded-md inline-block text-xl font-bold">OTP Code :{otp}</p>
    <p className="text-gray-600 text-base mt-4">If you did not request this code, please ignore this email.</p>
    <p className="footer text-gray-500 text-sm mt-6">If you have any questions, please contact our support team.</p>
  </div>
</body>
      </Html>
    );
  }