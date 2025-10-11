

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiBackRight = (props: IconProps) => {

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
          <Path  d="M14.583 15v1h-7.083c-3.032 0-5.5-2.467-5.5-5.5s2.468-5.5 5.5-5.5h2.912l-2.646-2.646 0.707-0.707 3.853 3.853-3.853 3.854-0.707-0.708 2.646-2.646h-2.912c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5h7.083z" />
        </G>
      </Svg>
    );
  }

