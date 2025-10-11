

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiOnigori = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M256 64c64 0 224 224 224 352 0 31.3-47.7 52.4-112 63.3-.3-100-5.8-143.3-112-143.3s-111.7 43.3-112 143.3c-64.3-10.9-112-32-112-63.3C32 288 192 64 256 64z" />
        </G>
      </Svg>
    );
  }

