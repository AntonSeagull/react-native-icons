

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbNurse = (props: IconProps) => {

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
          <Path d="M12 5c2.941 0 6.685 1.537 9 3l-2 11h-14l-2 -11c2.394 -1.513 6.168 -3.005 9 -3" />
          <Path d="M10 12h4" />
          <Path d="M12 10v4" />
        </G>
      </Svg>
    );
  }

