

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoRepeatOutline = (props: IconProps) => {

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
          <Path d="M352,168H144a80.24,80.24,0,0,0-80,80v16" />
          <Path d="M160,344H368a80.24,80.24,0,0,0,80-80V248" />
        </G>
      </Svg>
    );
  }

