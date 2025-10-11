

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuAlignVerticalDistributeCenter = (props: IconProps) => {

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
          <Path d="M22 17h-3" />
          <Path d="M22 7h-5" />
          <Path d="M5 17H2" />
          <Path d="M7 7H2" />
        </G>
      </Svg>
    );
  }

