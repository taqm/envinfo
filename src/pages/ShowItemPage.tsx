import * as React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Flex } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

import Card from '../components/Card';
import MainLayout from '../components/MainLayout';

const ShowItemPage: React.VFC = () => {
  const hist = useHistory();
  const onBackButtonClick = () => {
    hist.push('/');
  };

  return (
    <MainLayout>
      <Flex>
        <Button
          bg="transparent"
          leftIcon={<ArrowBackIcon />}
          onClick={onBackButtonClick}
        >
          一覧へ
        </Button>
      </Flex>
      <Card mt="1">test</Card>
    </MainLayout>
  );
};

ShowItemPage.displayName = 'ShowItemPage';

export default ShowItemPage;
