import React from 'react';

import {
  List,
  StreamContainer,
  StremThumb,
  StreamColumn,
  StreamRow,
  StreamHeader,
  StreamAvatar,
  StreamName,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,
} from './styles';

import streamThumbnail from '../../images/stream_thumbnail.jpg';

const StreamList: React.FC = () => {
  const StreamItem: React.FC = () => (
    <StreamContainer>
      <StremThumb source={streamThumbnail} />

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamName numberOfLines={1}>@omatheuscarvalho_</StreamName>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Flow podcast with Júlio Cocielo
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Comedy
          </StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>
          <TagView>
            <TagText>Web Development</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  );

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
