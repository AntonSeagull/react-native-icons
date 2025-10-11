

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiItalic = (props: IconProps) => {

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
          <Path d="M11.895 2.014l-5.691 12.986h0.796v1h-3v-1h1.111l5.691-12.986h-0.802v-1h3v1h-1.105z" fill="#000000" />
        </G>
      </Svg>
    );
  }

