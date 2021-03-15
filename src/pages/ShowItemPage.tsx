import * as React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

import Card from '../components/Card';
import MainLayout from '../components/MainLayout';
import ColorPicker from '../components/ColorPicker';

type PathVariables = {
  id: string;
};

const ShowItemPage: React.VFC = () => {
  const hist = useHistory();

  const { params } = useRouteMatch<PathVariables>();

  const [fontColor, setFontColor] = React.useState('rgba(0,0,0,1)');
  const [bgColor, setBgColor] = React.useState('rgba(255,0,0,1)');

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
      <Card mt="1">
        <FormControl>
          <FormLabel>ID</FormLabel>
          <Input type="text" readOnly value={params.id} />
        </FormControl>

        <FormControl mt="4">
          <FormLabel>Pattern</FormLabel>
          <Input type="text" />
          <FormHelperText>URLに対する正規表現</FormHelperText>
        </FormControl>

        <FormControl mt="4">
          <FormLabel>Label</FormLabel>
          <Input type="text" />
        </FormControl>

        <FormControl mt="4">
          <FormLabel>Font Color</FormLabel>
          <ColorPicker value={fontColor} onChange={setFontColor} />
        </FormControl>

        <FormControl mt="4">
          <FormLabel>Background Color</FormLabel>
          <ColorPicker value={bgColor} onChange={setBgColor} />
        </FormControl>
      </Card>
    </MainLayout>
  );
};

ShowItemPage.displayName = 'ShowItemPage';

export default ShowItemPage;
