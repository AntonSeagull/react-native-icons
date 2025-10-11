

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbHours24 = (props: IconProps) => {

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
          <Path d="M4 13c.325 2.532 1.881 4.781 4 6" />
          <Path d="M20 11a8.1 8.1 0 0 0 -15.5 -2" />
          <Path d="M4 5v4h4" />
          <Path d="M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2" />
          <Path d="M18 15v2a1 1 0 0 0 1 1h1" />
          <Path d="M21 15v6" />
        </G>
      </Svg>
    );
  }

