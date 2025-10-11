

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAdjustmentsOff = (props: IconProps) => {

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
          <Path d="M6 6v2" />
          <Path d="M6 12v8" />
          <Path d="M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <Path d="M12 4v4m0 4v2" />
          <Path d="M12 18v2" />
          <Path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <Path d="M18 4v1" />
          <Path d="M18 9v5m0 4v2" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

