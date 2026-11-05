import { Html, Body, Container, Text, Heading, Tailwind, Section, Hr, Img } from '@react-email/components';

interface ContactConfirmationEmailProps {
  firstname: string;
}

const emailTheme = {
  theme: {
    extend: {
      colors: {
        "haiti-navy": "#003F88",
        "haiti-red": "#CE1126",
        "haiti-gold": "#D4AF37",
        "haiti-green": "#1E9A3B",
        "haiti-offwhite": "#FAF7F2",
        "haiti-charcoal": "#1A1A2E",
        "haiti-lightgray": "#E0E0E0",
      },
    },
  },
};

export default function ContactConfirmationEmail({ firstname }: ContactConfirmationEmailProps) {
  return (
    <Html>
      <Tailwind config={emailTheme}>
        <Body className="font-sans bg-haiti-offwhite py-8 px-4">
          <Img
            src="https://haitianyouth.org/wp-content/uploads/2024/02/Hyflogo.jpg"
            alt="Haitian Youth Foundation Logo"
            className="mx-auto mb-4 w-32 h-auto"
          />
          <Container style={{ maxWidth: '600px', margin: '0 auto' }} className="bg-white p-8 rounded-2xl shadow-md">
            <Heading className="text-2xl font-bold mb-4 text-haiti-navy">Thank you {firstname}!,
            </Heading>

            <Section className="text-lg py-4 leading-7">
              <Text>We appreciate you reaching out to the Haitian Youth Foundation. Your message has been received.</Text>
              <Text>Our team will review and respond within 24-48 hours. Thank you for your patience and interest in supporting our mission.</Text>

              <Text>Thank you for supporting the mission of HYF Haitian Youth Foundation.</Text>
            </Section>
            <Hr className="border-b border-haiti-lightgray my-2"></Hr>
            <Text className="text-lg font-semibold"> — The Haitian Youth Foundation Team</Text>
            <Text><a href="https://haitianyouth.org/" className="text-haiti-navy underline">Visit our website</a></Text>
            <Text className="text-sm text-gray-400 mt-4">© {new Date().getFullYear()}  Haitian Youth Foundation. All rights reserved.</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}