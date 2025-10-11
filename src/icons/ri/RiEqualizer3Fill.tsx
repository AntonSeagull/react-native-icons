

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiEqualizer3Fill = (props: IconProps) => {

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
          <Path  d="M7 3V6H3V8H7V11H10V3H7ZM12 8H21V6H12V8ZM17 13V16H21V18H17V21H14V13H17ZM12 18H3V16H12V18Z" />
        </G>
      </Svg>
    );
  }

