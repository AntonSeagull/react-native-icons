

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBlur = (props: IconProps) => {

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
          <Path  d="M12 21a9.01 9.01 0 0 0 2.32 -.302a9 9 0 0 0 1.74 -16.733a9 9 0 1 0 -4.06 17.035z" />
          <Path  d="M12 3v17" />
          <Path  d="M12 12h9" />
          <Path  d="M12 9h8" />
          <Path  d="M12 6h6" />
          <Path  d="M12 18h6" />
          <Path  d="M12 15h8" />
        </G>
      </Svg>
    );
  }

