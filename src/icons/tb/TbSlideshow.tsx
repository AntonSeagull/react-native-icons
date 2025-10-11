

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSlideshow = (props: IconProps) => {

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
          <Path  d="M15 6l.01 0" />
          <Path  d="M3 3m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
          <Path  d="M3 13l4 -4a3 5 0 0 1 3 0l4 4" />
          <Path  d="M13 12l2 -2a3 5 0 0 1 3 0l3 3" />
          <Path  d="M8 21l.01 0" />
          <Path  d="M12 21l.01 0" />
          <Path  d="M16 21l.01 0" />
        </G>
      </Svg>
    );
  }

