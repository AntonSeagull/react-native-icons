

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuPilcrow = (props: IconProps) => {

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
          <Path d="M13 4v16" />
          <Path d="M17 4v16" />
          <Path d="M19 4H9.5a4.5 4.5 0 0 0 0 9H13" />
        </G>
      </Svg>
    );
  }

