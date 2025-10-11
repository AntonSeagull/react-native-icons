

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAdjustmentsPlus = (props: IconProps) => {

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
          <Path d="M13.958 15.592a2 2 0 1 0 -1.958 2.408" />
          <Path d="M12 4v10" />
          <Path d="M12 18v2" />
          <Path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <Path d="M18 4v1" />
          <Path d="M18 9v3" />
          <Path d="M16 19h6" />
          <Path d="M19 16v6" />
        </G>
      </Svg>
    );
  }

