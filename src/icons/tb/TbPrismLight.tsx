

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPrismLight = (props: IconProps) => {

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
          <Path d="M4.731 19h11.539a1 1 0 0 0 .866 -1.5l-5.769 -10a1 1 0 0 0 -1.732 0l-5.769 10a1 1 0 0 0 .865 1.5" />
          <Path d="M2 13h4.45" />
          <Path d="M18 5l-4.5 6" />
          <Path d="M22 9l-7.75 3.25" />
          <Path d="M22 15l-7 -1.5" />
        </G>
      </Svg>
    );
  }

