

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiYinYangBold = (props: IconProps) => {

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
          <Path  d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20ZM44,128a84.09,84.09,0,0,1,84-84,36,36,0,0,1,0,72,60,60,0,0,0-58.81,71.9A83.73,83.73,0,0,1,44,128Zm84,84a36,36,0,0,1,0-72,60,60,0,0,0,58.81-71.9A83.94,83.94,0,0,1,128,212Zm16-36a16,16,0,1,1-16-16A16,16,0,0,1,144,176ZM112,80a16,16,0,1,1,16,16A16,16,0,0,1,112,80Z" />
        </G>
      </Svg>
    );
  }

