

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbGenderBigender = (props: IconProps) => {

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
          <Path  d="M11 11m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          <Path  d="M19 3l-5 5" />
          <Path  d="M15 3h4v4" />
          <Path  d="M11 16v6" />
          <Path  d="M8 19h6" />
        </G>
      </Svg>
    );
  }

