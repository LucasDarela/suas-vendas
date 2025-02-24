import styled from "styled-components/native";
import { theme } from "./theme";

// Criando um Container Padrão para Telas
export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.darkGray};
  padding: ${theme.spacing.medium}px;
`;

// Criando um Título Padrão
export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.medium}px;
`;

// Criando um Botão Customizado
export const Button = styled.TouchableOpacity`
  background-color: ${theme.colors.primary};
  padding: ${theme.spacing.medium}px;
  border-radius: ${theme.borderRadius.medium}px;
  align-items: center;
  justify-content: center;
`;

// Criando um Texto dentro do Botão
export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${theme.colors.secondary};
`;