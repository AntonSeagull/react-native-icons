

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbToolsOff = (props: IconProps) => {

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
          <Path d="M16 12l4 -4a2.828 2.828 0 1 0 -4 -4l-4 4m-2 2l-7 7v4h4l7 -7" />
          <Path d="M14.5 5.5l4 4" />
          <Path d="M12 8l-5 -5m-2 2l-2 2l5 5" />
          <Path d="M7 8l-1.5 1.5" />
          <Path d="M16 12l5 5m-2 2l-2 2l-5 -5" />
          <Path d="M16 17l-1.5 1.5" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

