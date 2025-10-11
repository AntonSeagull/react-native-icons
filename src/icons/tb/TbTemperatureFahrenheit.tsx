

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTemperatureFahrenheit = (props: IconProps) => {

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
          <Path d="M6 8m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M13 12l5 0" />
          <Path d="M20 6h-6a1 1 0 0 0 -1 1v11" />
        </G>
      </Svg>
    );
  }

