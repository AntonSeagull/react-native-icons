

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoWalletOutline = (props: IconProps) => {

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
          <Path  d="M411.36,144V114A50,50,0,0,0,352,64.9L88.64,109.85A50,50,0,0,0,48,159v49" fill="none" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M368,320a32,32,0,1,1,32-32A32,32,0,0,1,368,320Z" />
        </G>
      </Svg>
    );
  }

