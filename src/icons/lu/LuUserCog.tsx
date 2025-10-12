

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuUserCog = (props: IconProps) => {

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
          <Circle  cx="18" cy="15" r="3" />
          <Circle  cx="9" cy="7" r="4" />
          <Path  d="M10 15H6a4 4 0 0 0-4 4v2" />
          <Path  d="m14.305 16.53.923-.382" />
          <Path  d="m15.228 13.852-.923-.383" />
          <Path  d="m16.852 12.228-.383-.923" />
          <Path  d="m16.852 17.772-.383.924" />
          <Path  d="m19.148 12.228.383-.923" />
          <Path  d="m19.53 18.696-.382-.924" />
          <Path  d="m20.772 13.852.924-.383" />
          <Path  d="m20.772 16.148.924.383" />
        </G>
      </Svg>
    );
  }

