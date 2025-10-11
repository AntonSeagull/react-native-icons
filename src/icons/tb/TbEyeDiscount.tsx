

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbEyeDiscount = (props: IconProps) => {

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
          <Path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <Path d="M12 18c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
          <Path d="M16 21l5 -5" />
          <Path d="M21 21v.01" />
          <Path d="M16 16v.01" />
        </G>
      </Svg>
    );
  }

