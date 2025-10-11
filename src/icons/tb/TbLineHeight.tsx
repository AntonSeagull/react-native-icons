

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLineHeight = (props: IconProps) => {

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
          <Path  d="M3 8l3 -3l3 3" />
          <Path  d="M3 16l3 3l3 -3" />
          <Path  d="M6 5l0 14" />
          <Path  d="M13 6l7 0" />
          <Path  d="M13 12l7 0" />
          <Path  d="M13 18l7 0" />
        </G>
      </Svg>
    );
  }

