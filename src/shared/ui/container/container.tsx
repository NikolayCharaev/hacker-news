import { Container as ContentWrapper } from '@mui/material';
import { FC ,ReactNode} from 'react';

interface ContainerProps {
  children: ReactNode;
}
const Container: FC<ContainerProps> = ({ children }) => {
  return <ContentWrapper maxWidth="xl">{children}</ContentWrapper>;
};

export default Container;
