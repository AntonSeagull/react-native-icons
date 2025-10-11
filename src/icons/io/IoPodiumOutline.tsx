

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoPodiumOutline = (props: IconProps) => {

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
          <Path d="M32,160V456a8,8,0,0,0,8,8H176V160a16,16,0,0,0-16-16H48A16,16,0,0,0,32,160Z" />
          <Path d="M320,48H192a16,16,0,0,0-16,16V464H336V64A16,16,0,0,0,320,48Z" />
          <Path d="M464,208H352a16,16,0,0,0-16,16V464H472a8,8,0,0,0,8-8V224A16,16,0,0,0,464,208Z" />
        </G>
      </Svg>
    );
  }

