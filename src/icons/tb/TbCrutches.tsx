

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCrutches = (props: IconProps) => {

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
          <Path  d="M8 3m0 2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2z" />
          <Path  d="M11 21h2" />
          <Path  d="M12 21v-4.092a3 3 0 0 1 .504 -1.664l.992 -1.488a3 3 0 0 0 .504 -1.664v-5.092" />
          <Path  d="M12 21v-4.092a3 3 0 0 0 -.504 -1.664l-.992 -1.488a3 3 0 0 1 -.504 -1.664v-5.092" />
          <Path  d="M10 11h4" />
        </G>
      </Svg>
    );
  }

