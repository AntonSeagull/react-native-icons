

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAd2 = (props: IconProps) => {

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
          <Path  d="M11.933 5h-6.933v16h13v-8" />
          <Path  d="M14 17h-5" />
          <Path  d="M9 13h5v-4h-5z" />
          <Path  d="M15 5v-2" />
          <Path  d="M18 6l2 -2" />
          <Path  d="M19 9h2" />
        </G>
      </Svg>
    );
  }

