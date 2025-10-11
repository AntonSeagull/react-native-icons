

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBorderSides = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M4 8v8" />
          <Path d="M20 16v-8" />
          <Path d="M8 4h8" />
          <Path d="M8 20h8" />
        </G>
      </Svg>
    );
  }

