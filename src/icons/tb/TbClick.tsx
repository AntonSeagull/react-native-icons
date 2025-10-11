

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbClick = (props: IconProps) => {

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
          <Path  d="M3 12l3 0" />
          <Path  d="M12 3l0 3" />
          <Path  d="M7.8 7.8l-2.2 -2.2" />
          <Path  d="M16.2 7.8l2.2 -2.2" />
          <Path  d="M7.8 16.2l-2.2 2.2" />
          <Path  d="M12 12l9 3l-4 2l-2 4l-3 -9" />
        </G>
      </Svg>
    );
  }

