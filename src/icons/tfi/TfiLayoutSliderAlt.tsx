

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutSliderAlt = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8.5, 8.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M2 14h13v-11h-13v11zM3 4h11v9h-11v-9z" />
          <Path  d="M16 4.531h1v7.938h-1v-7.938z" />
          <Path  d="M0 4.531h1v7.938h-1v-7.938z" />
        </G>
      </Svg>
    );
  }

