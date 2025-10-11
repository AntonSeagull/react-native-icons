

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbWind = (props: IconProps) => {

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
          <Path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" />
          <Path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" />
          <Path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
        </G>
      </Svg>
    );
  }

