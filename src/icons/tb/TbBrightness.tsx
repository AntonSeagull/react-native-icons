

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrightness = (props: IconProps) => {

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
          <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <Path d="M12 3l0 18" />
          <Path d="M12 9l4.65 -4.65" />
          <Path d="M12 14.3l7.37 -7.37" />
          <Path d="M12 19.6l8.85 -8.85" />
        </G>
      </Svg>
    );
  }

