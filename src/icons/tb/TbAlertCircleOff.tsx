

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAlertCircleOff = (props: IconProps) => {

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
          <Path d="M5.644 5.629a9 9 0 1 0 12.715 12.741m1.693 -2.349a9 9 0 0 0 -12.087 -12.068" />
          <Path d="M12 7v1" />
          <Path d="M12 16h.01" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

