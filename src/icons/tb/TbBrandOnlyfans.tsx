

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandOnlyfans = (props: IconProps) => {

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
          <Path  d="M8.5 6a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0 -13z" />
          <Path  d="M8.5 15a2.5 2.5 0 1 1 0 -5a2.5 2.5 0 0 1 0 5z" />
          <Path  d="M14 16c2.5 0 6.42 -1.467 7 -4h-6c3 -1 6.44 -3.533 7 -6h-4c-3.03 0 -3.764 -.196 -5 1.5" />
        </G>
      </Svg>
    );
  }

