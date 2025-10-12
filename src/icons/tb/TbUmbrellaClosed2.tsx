

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbUmbrellaClosed2 = (props: IconProps) => {

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
          <Path  d="M6.697 12.071l11.313 -7.071l-7.07 11.314z" />
          <Path  d="M8.743 14.475l-2.121 2.121c-1.886 1.886 .943 4.715 2.828 2.829" />
        </G>
      </Svg>
    );
  }

