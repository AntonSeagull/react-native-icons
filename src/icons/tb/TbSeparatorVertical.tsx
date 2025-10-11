

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSeparatorVertical = (props: IconProps) => {

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
          <Path d="M12 4l0 16" />
          <Path d="M8 8l-4 4l4 4" />
          <Path d="M16 16l4 -4l-4 -4" />
        </G>
      </Svg>
    );
  }

