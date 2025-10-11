

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiSkipBackCircleBold = (props: IconProps) => {

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
          <Path  d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212ZM165.82,77.5a12,12,0,0,0-12.18.32L108,106.35V88a12,12,0,0,0-24,0v80a12,12,0,0,0,24,0V149.65l45.64,28.53A12,12,0,0,0,172,168V88A12,12,0,0,0,165.82,77.5ZM148,146.35,118.64,128,148,109.65Z" />
        </G>
      </Svg>
    );
  }

