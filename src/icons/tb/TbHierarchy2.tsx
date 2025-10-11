

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbHierarchy2 = (props: IconProps) => {

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
          <Path d="M10 3h4v4h-4z" />
          <Path d="M3 17h4v4h-4z" />
          <Path d="M17 17h4v4h-4z" />
          <Path d="M7 17l5 -4l5 4" />
          <Path d="M12 7l0 6" />
        </G>
      </Svg>
    );
  }

