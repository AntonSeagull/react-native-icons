

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutMenuFull = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M0 7v3h17v-3h-17zM9 8h3v1h-3v-1zM8 9h-3v-1h3v1zM1 8h3v1h-3v-1zM16 9h-3v-1h3v1z" fill="#000000" />
        </G>
      </Svg>
    );
  }

