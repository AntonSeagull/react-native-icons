

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMoodShare = (props: IconProps) => {

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
          <Path  d="M20.942 13.018a9 9 0 1 0 -8.942 7.982" />
          <Path  d="M9 10h.01" />
          <Path  d="M15 10h.01" />
          <Path  d="M9.5 15c.658 .672 1.56 1 2.5 1c.213 0 .424 -.017 .63 -.05" />
          <Path  d="M16 22l5 -5" />
          <Path  d="M21 21.5v-4.5h-4.5" />
        </G>
      </Svg>
    );
  }

