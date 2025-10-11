

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgPlayForwards = (props: IconProps) => {

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
          <Path  d="M21.0023 17H18.0023V7H21.0023V17Z" fill="currentColor" />
          <Path  d="M17.0023 12L10 17V7L17.0023 12Z" fill="currentColor" />
          <Path  d="M2 17L9.00232 12L2 7V17Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

