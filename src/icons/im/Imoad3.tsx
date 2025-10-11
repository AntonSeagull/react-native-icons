

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imoad3 = (props: IconProps) => {

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
          <Path d="M7.5 11h-7.5v4h15v-4h-7.5zM14 13h-2v-1h2v1zM3.5 5l4-4 4 4h-2.5v5h-3v-5z" fill="#000000" />
        </G>
      </Svg>
    );
  }

