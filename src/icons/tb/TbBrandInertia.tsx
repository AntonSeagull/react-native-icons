

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandInertia = (props: IconProps) => {

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
          <Path d="M12.5 8l4 4l-4 4h4.5l4 -4l-4 -4z" />
          <Path d="M3.5 8l4 4l-4 4h4.5l4 -4l-4 -4z" />
        </G>
      </Svg>
    );
  }

