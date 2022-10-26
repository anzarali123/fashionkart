import {
  Container,
  Title,
  Desc,
  Input,
  InputContainer,
  Button,
} from "./newsletter.styles";
import { Send } from "@mui/icons-material";

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
