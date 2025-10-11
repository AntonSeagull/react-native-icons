

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuInspectionPanel = (props: IconProps) => {

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
          <Path d="M7 7h.01" />
          <Path d="M17 7h.01" />
          <Path d="M7 17h.01" />
          <Path d="M17 17h.01" />
        </G>
      </Svg>
    );
  }

