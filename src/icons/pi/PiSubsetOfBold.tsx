

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiSubsetOfBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M212,208a12,12,0,0,1-12,12H48a12,12,0,0,1,0-24H200A12,12,0,0,1,212,208Zm-12-52H104a44,44,0,0,1,0-88h96a12,12,0,0,0,0-24H104a68,68,0,0,0,0,136h96a12,12,0,0,0,0-24Z" />
        </G>
      </Svg>
    );
  }

