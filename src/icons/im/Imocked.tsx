

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imocked = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M12 1c1.654 0 3 1.346 3 3v3h-2v-3c0-0.551-0.449-1-1-1h-2c-0.551 0-1 0.449-1 1v3h0.25c0.412 0 0.75 0.338 0.75 0.75v7.5c0 0.412-0.338 0.75-0.75 0.75h-8.5c-0.412 0-0.75-0.338-0.75-0.75v-7.5c0-0.412 0.338-0.75 0.75-0.75h6.25v-3c0-1.654 1.346-3 3-3h2z" fill="#000000" />
        </G>
      </Svg>
    );
  }

