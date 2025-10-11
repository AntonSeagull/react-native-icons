

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAdjustmentsAlt = (props: IconProps) => {

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
          <Path d="M4 8h4v4h-4z" />
          <Path d="M6 4l0 4" />
          <Path d="M6 12l0 8" />
          <Path d="M10 14h4v4h-4z" />
          <Path d="M12 4l0 10" />
          <Path d="M12 18l0 2" />
          <Path d="M16 5h4v4h-4z" />
          <Path d="M18 4l0 1" />
          <Path d="M18 9l0 11" />
        </G>
      </Svg>
    );
  }

