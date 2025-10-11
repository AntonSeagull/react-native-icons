

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSwitchHorizontal = (props: IconProps) => {

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
          <Path d="M16 3l4 4l-4 4" />
          <Path d="M10 7l10 0" />
          <Path d="M8 13l-4 4l4 4" />
          <Path d="M4 17l9 0" />
        </G>
      </Svg>
    );
  }

