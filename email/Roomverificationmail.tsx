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
} from "@react-email/components";

interface VerificationEmailProps {
  name: string;
  checkin: Date;
  checkout: Date;
  requests: string;
  numberofguests: string;
  roomnum: string;
  status: string;
  roomtype: string;
  amount: string;
  staff: string;
  updatedAt: Date;
}

export default function RoomVerificationEmail({
  name,
  checkin,
  checkout,
  requests,
  numberofguests,
  roomnum,
  status,
  roomtype,
  amount,
  staff,
  updatedAt,
}: VerificationEmailProps) {
  return (
    <Html lang="en" dir="ltr">
  <Head>
    <title>Room Booking Verification</title>
    <Font
      fontFamily="Roboto"
      fallbackFontFamily="Verdana"
      webFont={{
        url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
        format: "woff2",
      }}
      fontWeight={400}
      fontStyle="normal"
    />
  </Head>
  <Preview>Room Booking Details</Preview>
  <body>
    <div className="container mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-teal-600 text-2xl mb-4">Hello {name},</h2>
      <p className="text-gray-700 text-base mb-4">
        Thank you for booking with us. Here are the details of your reservation:
      </p>
      
      <div className="mb-4">
        <p className="text-gray-700 text-base mb-2">
          <strong>Check-in Date:</strong> {checkin ? new Date(checkin).toISOString().split('T')[0] : ''}
        </p>
        <p className="text-gray-700 text-base mb-2">
          <strong>Check-out Date:</strong> {checkout ? new Date(checkout).toISOString().split('T')[0] : ''}
        </p>
        <p className="text-gray-700 text-base mb-2">
          <strong>Room Number:</strong> {roomnum}
        </p>
        <p className="text-gray-700 text-base mb-2">
          <strong>Room Type:</strong> {roomtype}
        </p>
        <p className="text-gray-700 text-base mb-2">
          <strong>Number of Guests:</strong> {numberofguests}
        </p>
        <p className="text-gray-700 text-base mb-2">
          <strong>Requests:</strong> {requests}
        </p>
        <p className="text-gray-700 text-base mb-2">
          <strong>Amount:</strong> ${amount}
        </p>
        <p className="text-gray-700 text-base mb-2">
          <strong>Staff Responsible:</strong> {staff}
        </p>
        <p className="text-gray-700 text-base mb-2">
          <strong>Last Updated:</strong> {updatedAt ? new Date(updatedAt).toISOString().split('T')[0] : ''}
        </p>
      </div>

      <p className="text-gray-600 text-base mt-4">
        If you have any questions or need to make changes to your reservation, please contact our support team.
      </p>
      <p className="footer text-gray-500 text-sm mt-6">
        Thank you for choosing our hotel. We look forward to welcoming you.
      </p>
    </div>
  </body>
</Html>

  );
}
