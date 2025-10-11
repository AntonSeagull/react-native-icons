

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuMonitorCog = (props: IconProps) => {

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
          <Path  d="M12 17v4" />
          <Path  d="m14.305 7.53.923-.382" />
          <Path  d="m15.228 4.852-.923-.383" />
          <Path  d="m16.852 3.228-.383-.924" />
          <Path  d="m16.852 8.772-.383.923" />
          <Path  d="m19.148 3.228.383-.924" />
          <Path  d="m19.53 9.696-.382-.924" />
          <Path  d="m20.772 4.852.924-.383" />
          <Path  d="m20.772 7.148.924.383" />
          <Path  d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
          <Path  d="M8 21h8" />
        </G>
      </Svg>
    );
  }

