

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoRadioOutline = (props: IconProps) => {

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
          <Path d="M184.25,192.25a96,96,0,0,0,0,127.52" />
          <Path d="M327.77,319.77a96,96,0,0,0,0-127.52" />
          <Path d="M133.28,141.28a168,168,0,0,0,0,229.44" />
          <Path d="M378.72,370.72a168,168,0,0,0,0-229.44" />
          <Path d="M435,416a240.34,240.34,0,0,0,0-320" />
          <Path d="M77,96a240.34,240.34,0,0,0,0,320" />
        </G>
      </Svg>
    );
  }

