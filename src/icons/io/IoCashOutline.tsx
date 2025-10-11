

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoCashOutline = (props: IconProps) => {

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
          <Path d="M480,160a80,80,0,0,1-80-80" />
          <Path d="M32,160a80,80,0,0,0,80-80" />
          <Path d="M480,256a80,80,0,0,0-80,80" />
          <Path d="M32,256a80,80,0,0,1,80,80" />
        </G>
      </Svg>
    );
  }

