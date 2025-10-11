

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowFork = (props: IconProps) => {

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
          <Path  d="M16 3h5v5" />
          <Path  d="M8 3h-5v5" />
          <Path  d="M21 3l-7.536 7.536a5 5 0 0 0 -1.464 3.534v6.93" />
          <Path  d="M3 3l7.536 7.536a5 5 0 0 1 1.464 3.534v.93" />
        </G>
      </Svg>
    );
  }

