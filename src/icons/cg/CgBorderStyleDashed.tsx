

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgBorderStyleDashed = (props: IconProps) => {

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
          <Path  d="M4 11H8V13H4V11Z" fill="currentColor" />
          <Path  d="M10 11H14V13H10V11Z" fill="currentColor" />
          <Path  d="M20 11H16V13H20V11Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

