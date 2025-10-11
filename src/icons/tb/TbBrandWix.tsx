

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandWix = (props: IconProps) => {

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
          <Path d="M3 9l1.5 6l1.379 -5.515a.64 .64 0 0 1 1.242 0l1.379 5.515l1.5 -6" />
          <Path d="M13 11.5v3.5" />
          <Path d="M16 9l5 6" />
          <Path d="M21 9l-5 6" />
          <Path d="M13 9h.01" />
        </G>
      </Svg>
    );
  }

