

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiReplyAll = (props: IconProps) => {

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
          <Path  d="M20 18v-8a1 1 0 0 0-1-1h-6V6l-5 4 5 4v-3h5v7h2z" />
          <Path  d="M9 12.4 6 10l3-2.4V6l-5 4 5 4z" />
        </G>
      </Svg>
    );
  }

