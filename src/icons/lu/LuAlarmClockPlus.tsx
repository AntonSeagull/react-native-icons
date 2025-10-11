

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuAlarmClockPlus = (props: IconProps) => {

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
          <Path d="M5 3 2 6" />
          <Path d="m22 6-3-3" />
          <Path d="M6.38 18.7 4 21" />
          <Path d="M17.64 18.67 20 21" />
          <Path d="M12 10v6" />
          <Path d="M9 13h6" />
        </G>
      </Svg>
    );
  }

