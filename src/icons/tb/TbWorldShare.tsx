

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbWorldShare = (props: IconProps) => {

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
          <Path  d="M20.94 13.045a9 9 0 1 0 -8.953 7.955" />
          <Path  d="M3.6 9h16.8" />
          <Path  d="M3.6 15h9.4" />
          <Path  d="M11.5 3a17 17 0 0 0 0 18" />
          <Path  d="M12.5 3a16.991 16.991 0 0 1 2.529 10.294" />
          <Path  d="M16 22l5 -5" />
          <Path  d="M21 21.5v-4.5h-4.5" />
        </G>
      </Svg>
    );
  }

