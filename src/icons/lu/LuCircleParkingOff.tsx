

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCircleParkingOff = (props: IconProps) => {

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
          <Path d="M12.656 7H13a3 3 0 0 1 2.984 3.307" />
          <Path d="M13 13H9" />
          <Path d="M19.071 19.071A1 1 0 0 1 4.93 4.93" />
          <Path d="m2 2 20 20" />
          <Path d="M8.357 2.687a10 10 0 0 1 12.956 12.956" />
          <Path d="M9 17V9" />
        </G>
      </Svg>
    );
  }

