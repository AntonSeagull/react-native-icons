

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoTrophyOutline = (props: IconProps) => {

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
          <Path d="M384,224c0-50.64-.08-134.63-.12-160a16,16,0,0,0-16-16l-223.79.26a16,16,0,0,0-16,15.95c0,30.58-.13,129.17-.13,159.79,0,64.28,83,112,128,112S384,288.28,384,224Z" />
          <Path d="M128,96H48v16c0,55.22,33.55,112,80,112" />
          <Path d="M384,96h80v16c0,55.22-33.55,112-80,112" />
        </G>
      </Svg>
    );
  }

