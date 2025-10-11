

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCircleArrowOutDownRight = (props: IconProps) => {

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
          <Path d="M12 22a10 10 0 1 1 10-10" />
          <Path d="M22 22 12 12" />
          <Path d="M22 16v6h-6" />
        </G>
      </Svg>
    );
  }

