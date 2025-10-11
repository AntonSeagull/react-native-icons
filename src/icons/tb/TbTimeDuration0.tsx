

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTimeDuration0 = (props: IconProps) => {

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
          <Path  d="M3 12v.01" />
          <Path  d="M21 12v.01" />
          <Path  d="M12 21v.01" />
          <Path  d="M12 3v.01" />
          <Path  d="M7.5 4.2v.01" />
          <Path  d="M16.5 4.2v.01" />
          <Path  d="M16.5 19.8v.01" />
          <Path  d="M7.5 19.8v.01" />
          <Path  d="M4.2 16.5v.01" />
          <Path  d="M19.8 16.5v.01" />
          <Path  d="M19.8 7.5v.01" />
          <Path  d="M4.2 7.5v.01" />
          <Path  d="M10 11v2a2 2 0 1 0 4 0v-2a2 2 0 1 0 -4 0z" />
        </G>
      </Svg>
    );
  }

