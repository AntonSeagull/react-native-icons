

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbToml = (props: IconProps) => {

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
          <Path d="M1.499 8h3" />
          <Path d="M2.999 8v8" />
          <Path d="M8.5 8a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1 -3 0v-5a1.5 1.5 0 0 1 1.5 -1.5z" />
          <Path d="M13 16v-8l2 5l2 -5v8" />
          <Path d="M20 8v8h2.5" />
        </G>
      </Svg>
    );
  }

