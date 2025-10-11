

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdOutlineScore = (props: IconProps) => {

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
          <Path  d="M0 0h24v24H0V0z" fill="none" />
          <Path  d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5l4-4 4 4 6-6v6zm0-8.5l-6 6-4-4-4 4V5h14v5.5zM13.5 9V6H12v6h1.5zm3.7 3l-2-3 2-3h-1.7l-2 3 2 3zM11 10.5H8.5v-.75H11V6H7v1.5h2.5v.75H7V12h4z" />
        </G>
      </Svg>
    );
  }

