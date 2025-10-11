

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BsFillRecord2Fill = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
          <Path d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10m0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
        </G>
      </Svg>
    );
  }

