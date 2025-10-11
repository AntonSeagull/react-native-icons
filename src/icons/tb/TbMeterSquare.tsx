

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMeterSquare = (props: IconProps) => {

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
          <Path d="M17 5h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2" />
          <Path d="M4 12v6" />
          <Path d="M4 14a2 2 0 0 1 2 -2h.5a2.5 2.5 0 0 1 2.5 2.5v3.5" />
          <Path d="M9 15.5v-1a2.5 2.5 0 1 1 5 0v3.5" />
        </G>
      </Svg>
    );
  }

