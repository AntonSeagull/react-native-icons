

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiDwm = (props: IconProps) => {

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
          <Path  d="M0 11h6V7h2v8h2v-4h2v4h2v-4h10v6h-2v-4h-2v4h-2v-4h-2v4H2v-2h4v-2H2v4H0z" />
        </G>
      </Svg>
    );
  }

