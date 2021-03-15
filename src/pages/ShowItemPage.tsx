import * as React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

import Card from '../components/Card';
import MainLayout from '../components/MainLayout';
import ColorPicker from '../components/ColorPicker';
import EnvInfoLabel from '../components/EnvInfoLabel';

type PathVariables = {
  id: string;
};

const ShowItemPage: React.VFC = () => {
  const hist = useHistory();

  const { params } = useRouteMatch<PathVariables>();

  const [text, setText] = React.useState('テキスト');
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
        <Grid rowGap={4} columnGap={8}>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>ID</FormLabel>
              <Input type="text" readOnly value={params.id} />
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Pattern</FormLabel>
              <Input type="text" />
              <FormHelperText>URLに対する正規表現</FormHelperText>
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl>
              <FormLabel>Label</FormLabel>
              <Input
                type="text"
                value={text}
                onChange={(ev) => setText(ev.target.value)}
              />
            </FormControl>
          </GridItem>

          <GridItem rowSpan={3}>
            <FormControl>
              <FormLabel>Demo</FormLabel>
              <EnvInfoLabel
                text={text}
                fontColor={fontColor}
                bgColor={bgColor}
                size="large"
              />
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl>
              <FormLabel>Font Color</FormLabel>
              <ColorPicker value={fontColor} onChange={setFontColor} />
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl>
              <FormLabel>Background Color</FormLabel>
              <ColorPicker value={bgColor} onChange={setBgColor} />
            </FormControl>
          </GridItem>
        </Grid>
      </Card>
    </MainLayout>
  );
};

ShowItemPage.displayName = 'ShowItemPage';

export default ShowItemPage;
