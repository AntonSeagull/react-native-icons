

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDimensions = (props: IconProps) => {

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
          <Path  d="M3 5h11" />
          <Path  d="M12 7l2 -2l-2 -2" />
          <Path  d="M5 3l-2 2l2 2" />
          <Path  d="M19 10v11" />
          <Path  d="M17 19l2 2l2 -2" />
          <Path  d="M21 12l-2 -2l-2 2" />
          <Path  d="M3 10m0 2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2z" />
        </G>
      </Svg>
    );
  }

