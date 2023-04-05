import { Box, Image, Flex, Container, useColorMode } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import Logo from '../logo.svg';

const Header = () => {
  const { colorMode } = useColorMode();

  return (
    <Box as="header" py={2} bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'}>
      <Container maxW="container.lg">
        <Flex justifyContent="space-between" alignItems="center">
          <Image boxSize="50px" objectFit="cover" src={Logo} alt="logo" />
          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
