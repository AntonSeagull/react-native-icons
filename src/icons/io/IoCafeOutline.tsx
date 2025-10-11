

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoCafeOutline = (props: IconProps) => {

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
          <Path d="M368,80h64a16,16,0,0,1,16,16v34a46,46,0,0,1-46,46H368" />
          <Path d="M96,80H368a0,0,0,0,1,0,0V272a80,80,0,0,1-80,80H176a80,80,0,0,1-80-80V80A0,0,0,0,1,96,80Z" />
        </G>
      </Svg>
    );
  }

