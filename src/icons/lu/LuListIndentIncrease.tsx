

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuListIndentIncrease = (props: IconProps) => {

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
          <Path d="M21 5H11" />
          <Path d="M21 12H11" />
          <Path d="M21 19H11" />
          <Path d="m3 8 4 4-4 4" />
        </G>
      </Svg>
    );
  }

