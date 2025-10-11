

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowRotaryLeft = (props: IconProps) => {

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
          <Path d="M16 10a3 3 0 1 1 0 -6a3 3 0 0 1 0 6z" />
          <Path d="M16 10v10" />
          <Path d="M13 7h-10" />
          <Path d="M7 11l-4 -4l4 -4" />
        </G>
      </Svg>
    );
  }

