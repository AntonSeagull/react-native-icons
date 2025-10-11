

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCircleArrowOutUpRight = (props: IconProps) => {

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
          <Path d="M22 12A10 10 0 1 1 12 2" />
          <Path d="M22 2 12 12" />
          <Path d="M16 2h6v6" />
        </G>
      </Svg>
    );
  }

