

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMenorah = (props: IconProps) => {

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
          <Path  d="M12 4v16" />
          <Path  d="M8 4v2a4 4 0 1 0 8 0v-2" />
          <Path  d="M4 4v2a8 8 0 1 0 16 0v-2" />
          <Path  d="M10 20h4" />
        </G>
      </Svg>
    );
  }

