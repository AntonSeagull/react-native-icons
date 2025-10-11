

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAdjustmentsPin = (props: IconProps) => {

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
          <Path d="M13.071 14.31a2 2 0 1 0 -1.071 3.69" />
          <Path d="M12 4v10" />
          <Path d="M12 18v2" />
          <Path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <Path d="M18 4v1" />
          <Path d="M18 9v2.5" />
          <Path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" />
          <Path d="M19 18v.01" />
        </G>
      </Svg>
    );
  }

