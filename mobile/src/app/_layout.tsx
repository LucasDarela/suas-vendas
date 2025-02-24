import { Stack } from "expo-router";
import { Container, Title, Button, ButtonText } from "../theme/globalStyles";

export default function Layout() {
  return (
    <Container>
      <Stack>
        <Title>Bem-vindo ao SaaS Mobile!</Title>
        <Button>
          <ButtonText>Começar</ButtonText>
        </Button>
      </Stack>
    </Container>
  );
}