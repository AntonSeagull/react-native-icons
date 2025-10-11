

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuRailSymbol = (props: IconProps) => {

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
          <Path d="M5 15h14" />
          <Path d="M5 9h14" />
          <Path d="m14 20-5-5 6-6-5-5" />
        </G>
      </Svg>
    );
  }

