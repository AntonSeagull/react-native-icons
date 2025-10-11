

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSocialOff = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path  d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path  d="M17.57 17.602a2 2 0 0 0 2.83 2.827" />
          <Path  d="M11.113 11.133a3 3 0 1 0 3.765 3.715" />
          <Path  d="M12 7v1" />
          <Path  d="M6.7 17.8l2.8 -2" />
          <Path  d="M17.3 17.8l-2.8 -2" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

