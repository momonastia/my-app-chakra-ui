import { SimpleGrid, Stack, Button, Heading, Text } from '@chakra-ui/react';

const CardList = props => {
  const { cards = [] } = props;

  return (
    <SimpleGrid
      columns={[1, null, 2, 3]}
      py="4"
      spacing={[4, null, 6, 12]}
      padding={[4, null, 6, 12]}
    >
      {cards.map(card => (
        <Stack
          key="card.title"
          borderRadius={5}
          spacing={2}
          _hover={{ shadow: 'md' }}
          p={2}
        >
          <Heading as="h3" isTruncated>
            {card.title}
          </Heading>
          <Text>{card.body}</Text>
          <Button as="a" variant="brand" marginTop={[1, null, 3, 4]}>
            Read more
          </Button>
        </Stack>
      ))}
    </SimpleGrid>
  );
};

export default CardList;
