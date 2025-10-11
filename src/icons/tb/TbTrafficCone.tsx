

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTrafficCone = (props: IconProps) => {

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
          <Path d="M4 20l16 0" />
          <Path d="M9.4 10l5.2 0" />
          <Path d="M7.8 15l8.4 0" />
          <Path d="M6 20l5 -15h2l5 15" />
        </G>
      </Svg>
    );
  }

