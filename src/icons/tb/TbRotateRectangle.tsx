

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRotateRectangle = (props: IconProps) => {

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
          <Path d="M10.09 4.01l.496 -.495a2 2 0 0 1 2.828 0l7.071 7.07a2 2 0 0 1 0 2.83l-7.07 7.07a2 2 0 0 1 -2.83 0l-7.07 -7.07a2 2 0 0 1 0 -2.83l3.535 -3.535h-3.988" />
          <Path d="M7.05 11.038v-3.988" />
        </G>
      </Svg>
    );
  }

