

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLocationDiscount = (props: IconProps) => {

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
          <Path d="M12.797 19.595l-2.797 -5.595l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.548 9.826" />
          <Path d="M16 21l5 -5" />
          <Path d="M21 21v.01" />
          <Path d="M16 16v.01" />
        </G>
      </Svg>
    );
  }

