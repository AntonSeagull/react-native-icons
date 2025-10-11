

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCaretLineDownLight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M43.76,76.24a6,6,0,0,1,8.48-8.48L128,143.51l75.76-75.75a6,6,0,0,1,8.48,8.48l-80,80a6,6,0,0,1-8.48,0ZM208,186H48a6,6,0,0,0,0,12H208a6,6,0,0,0,0-12Z" />
        </G>
      </Svg>
    );
  }

