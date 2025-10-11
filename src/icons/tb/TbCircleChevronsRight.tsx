

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCircleChevronsRight = (props: IconProps) => {

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
          <Path  d="M9 9l3 3l-3 3" />
          <Path  d="M13 9l3 3l-3 3" />
          <Path  d="M3 12a9 9 0 1 0 0 -.265l0 .265z" />
        </G>
      </Svg>
    );
  }

