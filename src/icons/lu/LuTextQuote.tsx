

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuTextQuote = (props: IconProps) => {

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
          <Path d="M17 5H3" />
          <Path d="M21 12H8" />
          <Path d="M21 19H8" />
          <Path d="M3 12v7" />
        </G>
      </Svg>
    );
  }

