

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRuler2Off = (props: IconProps) => {

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
          <Path d="M12.03 7.97l4.97 -4.97l4 4l-5 5m-2 2l-7 7l-4 -4l7 -7" />
          <Path d="M16 7l-1.5 -1.5" />
          <Path d="M10 13l-1.5 -1.5" />
          <Path d="M7 16l-1.5 -1.5" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

