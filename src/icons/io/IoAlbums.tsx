

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoAlbums = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M368,96H144a16,16,0,0,1,0-32H368a16,16,0,0,1,0,32Z" />
          <Path d="M400,144H112a16,16,0,0,1,0-32H400a16,16,0,0,1,0,32Z" />
          <Path d="M419.13,448H92.87A44.92,44.92,0,0,1,48,403.13V204.87A44.92,44.92,0,0,1,92.87,160H419.13A44.92,44.92,0,0,1,464,204.87V403.13A44.92,44.92,0,0,1,419.13,448Z" />
        </G>
      </Svg>
    );
  }

