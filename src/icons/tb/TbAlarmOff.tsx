

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAlarmOff = (props: IconProps) => {

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
          <Path d="M7.587 7.566a7 7 0 1 0 9.833 9.864m1.35 -2.645a7 7 0 0 0 -8.536 -8.56" />
          <Path d="M12 12v1h1" />
          <Path d="M5.261 5.265l-1.011 .735" />
          <Path d="M17 4l2.75 2" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

