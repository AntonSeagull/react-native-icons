

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBorderRight = (props: IconProps) => {

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
          <Path d="M20 4l0 16" />
          <Path d="M4 4l0 .01" />
          <Path d="M8 4l0 .01" />
          <Path d="M12 4l0 .01" />
          <Path d="M16 4l0 .01" />
          <Path d="M4 8l0 .01" />
          <Path d="M12 8l0 .01" />
          <Path d="M4 12l0 .01" />
          <Path d="M8 12l0 .01" />
          <Path d="M12 12l0 .01" />
          <Path d="M16 12l0 .01" />
          <Path d="M4 16l0 .01" />
          <Path d="M12 16l0 .01" />
          <Path d="M4 20l0 .01" />
          <Path d="M8 20l0 .01" />
          <Path d="M12 20l0 .01" />
          <Path d="M16 20l0 .01" />
        </G>
      </Svg>
    );
  }

