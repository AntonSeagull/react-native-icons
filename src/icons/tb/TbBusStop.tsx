

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBusStop = (props: IconProps) => {

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
          <Path d="M3 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
          <Path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M10 5h7c2.761 0 5 3.134 5 7v5h-2" />
          <Path d="M16 17h-8" />
          <Path d="M16 5l1.5 7h4.5" />
          <Path d="M9.5 10h7.5" />
          <Path d="M12 5v5" />
          <Path d="M5 9v11" />
        </G>
      </Svg>
    );
  }

