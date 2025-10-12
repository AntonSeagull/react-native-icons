

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowUpLeftDuotone = (props: IconProps) => {

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
          <Path  d="M168,64,64,168V64Z" opacity="0.2" />
          <Path  d="M197.66,186.34,127.31,116l46.35-46.34A8,8,0,0,0,168,56H64a8,8,0,0,0-8,8V168a8,8,0,0,0,13.66,5.66L116,127.31l70.34,70.35a8,8,0,0,0,11.32-11.32ZM72,72h76.69l-38.34,38.34h0L72,148.69Z" />
        </G>
      </Svg>
    );
  }

