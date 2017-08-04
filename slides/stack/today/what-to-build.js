import React from 'react';
import { Appear, List, ListItem, Heading, Slide } from 'spectacle';

import { backgroundWithImage, boldedTertiary } from 'styles';

export default (
  <Slide key="stackpast3" transition={['fade']} style={backgroundWithImage}>
    <Heading size={2} caps textColor="secondary">
      What to build
    </Heading>
    <List>
      <Appear fid="1">
        <ListItem>
          Universal <span style={boldedTertiary}>libraries</span>
        </ListItem>
      </Appear>
      <Appear fid="2">
        <ListItem>
          Universal <span style={boldedTertiary}>UI components</span>
        </ListItem>
      </Appear>
    </List>
  </Slide>
);
