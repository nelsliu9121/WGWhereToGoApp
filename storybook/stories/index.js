import React from 'react'
import { Text } from 'react-native'

import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import ShowcaseView from './ShowcaseView'

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .addDecorator(getStory =>
//     <CenterView>
//       {getStory()}
//     </CenterView>
//   )
//   .add('with text', () =>
//     <Button onPress={action('clicked-text')}>
//       <Text>Hello Button</Text>
//     </Button>
//   )
//   .add('with some emoji', () =>
//     <Button onPress={action('clicked-emoji')}>
//       <Text>😀 😎 👍 💯</Text>
//     </Button>
//   );

storiesOf('Location', module)
  .addDecorator(getStory => (
    <ShowcaseView>{getStory()}</ShowcaseView>
  ))
  .add('normal', () => {
    const props = {

    }
    return (
      <Location {...props} />
    )
  })