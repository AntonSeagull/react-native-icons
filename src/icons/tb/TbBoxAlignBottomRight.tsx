

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBoxAlignBottomRight = (props: IconProps) => {

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
          <Path  d="M19 13h-5a1 1 0 0 0 -1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1 -1v-5a1 1 0 0 0 -1 -1z" />
          <Path  d="M20 9v.01" />
          <Path  d="M20 4v.01" />
          <Path  d="M15 4v.01" />
          <Path  d="M9 4v.01" />
          <Path  d="M9 20v.01" />
          <Path  d="M4 4v.01" />
          <Path  d="M4 9v.01" />
          <Path  d="M4 15v.01" />
          <Path  d="M4 20v.01" />
        </G>
      </Svg>
    );
  }

