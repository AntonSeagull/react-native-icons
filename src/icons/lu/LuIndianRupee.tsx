

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuIndianRupee = (props: IconProps) => {

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
          <Path d="M6 3h12" />
          <Path d="M6 8h12" />
          <Path d="m6 13 8.5 8" />
          <Path d="M6 13h3" />
          <Path d="M9 13c6.667 0 6.667-10 0-10" />
        </G>
      </Svg>
    );
  }

