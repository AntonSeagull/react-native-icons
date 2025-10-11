

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiHeartStraightBreak = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M223,57a58.1,58.1,0,0,0-82-.06L128,69.47,115,56.91a58,58,0,0,0-82,82.05l89.37,90.66a8,8,0,0,0,11.4,0L223,139A58.09,58.09,0,0,0,223,57Zm-11.36,70.76L128,212.6,44.29,127.68a42,42,0,1,1,59.41-59.4l.1.1,12.67,12.19-10,9.65a8,8,0,0,0-.11,11.42L132.69,128l-10.35,10.35a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0,0-11.31L123.42,96.09,152.2,68.38l.11-.1a42,42,0,1,1,59.37,59.44Z" />
        </G>
      </Svg>
    );
  }

