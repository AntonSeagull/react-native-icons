

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAdjustmentsCode = (props: IconProps) => {

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
          <Path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <Path d="M6 4v4" />
          <Path d="M6 12v8" />
          <Path d="M13.557 14.745a2 2 0 1 0 -1.557 3.255" />
          <Path d="M12 4v10" />
          <Path d="M12 18v2" />
          <Path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <Path d="M18 4v1" />
          <Path d="M18 9v4" />
          <Path d="M20 21l2 -2l-2 -2" />
          <Path d="M17 17l-2 2l2 2" />
        </G>
      </Svg>
    );
  }

