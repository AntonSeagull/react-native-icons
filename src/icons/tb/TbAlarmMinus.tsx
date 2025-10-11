

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAlarmMinus = (props: IconProps) => {

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
          <Path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <Path d="M7 4l-2.75 2" />
          <Path d="M17 4l2.75 2" />
          <Path d="M10 13h4" />
        </G>
      </Svg>
    );
  }

