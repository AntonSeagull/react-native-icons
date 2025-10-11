

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSitemapOff = (props: IconProps) => {

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
          <Path  d="M3 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
          <Path  d="M19 15a2 2 0 0 1 2 2m-.591 3.42c-.362 .358 -.86 .58 -1.409 .58h-2a2 2 0 0 1 -2 -2v-2c0 -.549 .221 -1.046 .579 -1.407" />
          <Path  d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2" />
          <Path  d="M6 15v-1a2 2 0 0 1 2 -2h4m4 0a2 2 0 0 1 2 2" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

