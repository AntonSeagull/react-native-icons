

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuServerCog = (props: IconProps) => {

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
          <Path  d="m10.852 14.772-.383.923" />
          <Path  d="M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923" />
          <Path  d="m13.148 9.228.383-.923" />
          <Path  d="m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544" />
          <Path  d="m14.772 10.852.923-.383" />
          <Path  d="m14.772 13.148.923.383" />
          <Path  d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5" />
          <Path  d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5" />
          <Path  d="M6 18h.01" />
          <Path  d="M6 6h.01" />
          <Path  d="m9.228 10.852-.923-.383" />
          <Path  d="m9.228 13.148-.923.383" />
        </G>
      </Svg>
    );
  }

